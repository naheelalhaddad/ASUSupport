const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Resend } = require("resend");

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };

    try {
        const { imageBase64 } = JSON.parse(event.body);

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Extract the professor's name, department (location), and 2026-2027 office hours from this image. Ignore teaching schedules. Output ONLY a strict JSON object with this exact format, no markdown or backticks: {"name": "Name", "location": "Department", "hours": {"الأحد": "...", "الإثنين": "...", "الثلاثاء": "...", "الأربعاء": "...", "الخميس": "..."}} Use null for days without hours.`;
        
        const result = await model.generateContent([
            prompt,
            { inlineData: { data: imageBase64.split(',')[1], mimeType: "image/jpeg" } }
        ]);

        const aiResponse = result.response.text().trim().replace(/```json/g, '').replace(/```/g, '');
        const parsedData = JSON.parse(aiResponse);

        const resend = new Resend(process.env.RESEND_API_KEY);
        const encodedData = Buffer.from(JSON.stringify(parsedData)).toString('base64');
        const approveLink = `https://asu-support.netlify.app/approve.html?data=${encodedData}`;

        await resend.emails.send({
            from: 'ASUSupport <onboarding@resend.dev>',
            to: process.env.NOTIFY_EMAIL,
            subject: `Pending Office Hours: ${parsedData.name}`,
            html: `<p>A student uploaded office hours for <b>${parsedData.name}</b>.</p>
                   <pre>${JSON.stringify(parsedData, null, 2)}</pre>
                   <br>
                   <a href="${approveLink}" style="padding:12px 24px; background:#E63946; color:white; text-decoration:none; border-radius:8px;">Review & Approve</a>`
        });

        return { statusCode: 200, body: JSON.stringify({ success: true }) };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify({ error: "Processing failed" }) };
    }
};
