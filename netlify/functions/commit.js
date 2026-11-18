exports.handler = async (event) => {
    if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };

    const { password, newProfData } = JSON.parse(event.body);

    if (password !== process.env.ADMIN_PASSWORD) {
        return { statusCode: 401, body: JSON.stringify({ error: "Wrong Password" }) };
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO = "naheelalhaddad/ASUSupport";

    try {
        const fileRes = await fetch(`https://api.github.com/repos/${REPO}/contents/professors.json`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` }
        });
        const fileData = await fileRes.json();
        const content = Buffer.from(fileData.content, 'base64').toString('utf-8');
        let professors = JSON.parse(content);

        const existingIndex = professors.findIndex(p => p.name.includes(newProfData.name) || (p.name_en && p.name_en.includes(newProfData.name)));
        if (existingIndex > -1) {
            professors[existingIndex].hours = newProfData.hours;
        } else {
            professors.push({
                name: newProfData.name, name_en: "", office: "", location: newProfData.location, teams_email: "", hours: newProfData.hours
            });
        }

        const newContent = Buffer.from(JSON.stringify(professors, null, 4)).toString('base64');
        const commitRes = await fetch(`https://api.github.com/repos/${REPO}/contents/professors.json`, {
            method: "PUT",
            headers: { Authorization: `token ${GITHUB_TOKEN}`, "Content-Type": "application/json" },
            body: JSON.stringify({
                message: `Update ${newProfData.name} hours via AI Approval`,
                content: newContent,
                sha: fileData.sha
            })
        });

        if (!commitRes.ok) throw new Error("GitHub Commit Failed");
        return { statusCode: 200, body: JSON.stringify({ success: true }) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
