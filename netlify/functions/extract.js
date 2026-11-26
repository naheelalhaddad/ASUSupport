const { Resend } = require("resend");

const MIME_TO_EXT = {
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
    "image/heic": "heic"
};

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
    }

    try {
        if (!process.env.GEMINI_API_KEY) throw new Error("Missing GEMINI_API_KEY in Netlify");
        if (!process.env.RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY in Netlify");
        if (!process.env.NOTIFY_EMAIL) throw new Error("Missing NOTIFY_EMAIL in Netlify");

        const { imageBase64 } = JSON.parse(event.body || "{}");
        const match = imageBase64 && imageBase64.match(/^data:([^;]+);base64,(.+)$/);
        if (!match) throw new Error("Invalid image format");

        const mimeType = match[1].toLowerCase();
        const base64Data = match[2];
        const ext = MIME_TO_EXT[mimeType] || "jpg";

        // 1. Validate readability and extract office hours via Gemini
        const prompt = `Check if this image clearly shows a university professor's office hours schedule.
If the image is blurry, unreadable, too dark, cropped, or NOT an office hours schedule, return ONLY:
{ "readable": false, "reason": "الصورة غير واضحة أو لا تحتوي على جدول ساعات مكتبية. يرجى إعادة التصوير بوضوح." }

Otherwise, extract the professor's Arabic name, department (location), office number (if visible), and 2026-2027 (or 20261) office hours. Ignore teaching/class schedules completely. Convert 24-hour times to 12-hour format (e.g. "12:00 - 2:00"). Output ONLY a valid JSON object matching this exact schema:
{
  "readable": true,
  "name": "Professor Arabic Name",
  "location": "Department in Arabic or غير محدد",
  "office": "Office number or empty string",
  "hours": {
    "الأحد": "time range or null",
    "الإثنين": "time range or null",
    "الثلاثاء": "time range or null",
    "الأربعاء": "time range or null",
    "الخميس": "time range or null"
  }
}
Use null (not the string "null") for days without office hours.`;

        const apiKey = process.env.GEMINI_API_KEY.trim();
        const geminiRes = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": apiKey
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: prompt },
                            { inline_data: { mime_type: mimeType, data: base64Data } }
                        ]
                    }],
                    generationConfig: {
                        responseMimeType: "application/json"
                    }
                })
            }
        );

        const geminiData = await geminiRes.json();
        if (!geminiRes.ok) {
            throw new Error(`Gemini error: ${geminiData.error?.message || geminiRes.status}`);
        }

        const rawText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) throw new Error("Gemini returned an empty response");

        const parsedData = JSON.parse(rawText.trim().replace(/```json|```/g, ""));
        const { readable, reason, ...cleanData } = parsedData;

        // 2. Reject blurry, unrelated, or empty extractions before emailing
        const hasAnyHour = cleanData.hours && Object.values(cleanData.hours)
            .some(v => v && String(v).trim() && String(v).trim().toLowerCase() !== "null");

        if (readable === false || !cleanData.name || !hasAnyHour) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: reason || "الصورة غير واضحة أو لا تحتوي على ساعات مكتبية. يرجى إعادة التصوير بوضوح."
                })
            };
        }

        // 3. Email approval link + original photo attachment via Resend
        const resend = new Resend(process.env.RESEND_API_KEY.trim());
        const encodedData = encodeURIComponent(
            Buffer.from(JSON.stringify(cleanData), "utf-8").toString("base64")
        );
        const approveLink = `https://asu-support.netlify.app/approve.html?data=${encodedData}`;

        const { error: emailError } = await resend.emails.send({
            from: "ASUSupport <onboarding@resend.dev>",
            to: process.env.NOTIFY_EMAIL.trim(),
            subject: `Pending Office Hours: ${cleanData.name}`,
            html: `<p>A student uploaded office hours for <b>${cleanData.name}</b>. The original photo is attached below for verification.</p>
                   <pre>${JSON.stringify(cleanData, null, 2)}</pre>
                   <br>
                   <a href="${approveLink}" style="padding:12px 24px; background:#E63946; color:white; text-decoration:none; border-radius:8px; display:inline-block;">Review & Approve</a>`,
            attachments: [
                {
                    filename: `office-hours.${ext}`,
                    content: Buffer.from(base64Data, "base64")
                }
            ]
        });

        if (emailError) {
            throw new Error(`Resend error: ${emailError.message || JSON.stringify(emailError)}`);
        }

        return { statusCode: 200, body: JSON.stringify({ success: true }) };
    } catch (error) {
        console.error("extract.js error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message || "Processing failed" })
        };
    }
};