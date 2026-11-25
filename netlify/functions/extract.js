const { Resend } = require("resend");

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

        const mimeType = match[1];
        const base64Data = match[2];

        // 1. Ask Gemini 3.5 Flash-Lite to extract office hours as strict JSON
        const prompt = `Extract the professor's Arabic name, department (location), office number (if visible), and 2026-2027 (or 20261) office hours from this image. Ignore teaching/class schedules completely. Convert 24-hour times to 12-hour format (e.g. "12:00 - 2:00"). Output ONLY a valid JSON object matching this exact schema:
{
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

        const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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

        // 2. Email approval link via Resend (URL-safe UTF-8 Base64)
        const resend = new Resend(process.env.RESEND_API_KEY);
        const encodedData = encodeURIComponent(
            Buffer.from(JSON.stringify(parsedData), "utf-8").toString("base64")
        );
        const approveLink = `https://asu-support.netlify.app/approve.html?data=${encodedData}`;

        const { error: emailError } = await resend.emails.send({
            from: "ASUSupport <onboarding@resend.dev>",
            to: process.env.NOTIFY_EMAIL,
            subject: `Pending Office Hours: ${parsedData.name || "Unknown"}`,
            html: `<p>A student uploaded office hours for <b>${parsedData.name || "Unknown"}</b>.</p>
                   <pre>${JSON.stringify(parsedData, null, 2)}</pre>
                   <br>
                   <a href="${approveLink}" style="padding:12px 24px; background:#E63946; color:white; text-decoration:none; border-radius:8px; display:inline-block;">Review & Approve</a>`
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
