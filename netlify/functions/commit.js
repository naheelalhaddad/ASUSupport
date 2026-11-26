const DAYS = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس"];

function normalizeName(str) {
    if (!str) return "";
    return String(str)
        .trim()
        .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
        .replace(/[أإآ]/g, "ا")
        .replace(/ة/g, "ه")
        .replace(/ى/g, "ي")
        .replace(/ڤ/g, "ف")
        .replace(/^(?:ا\.د\.?\s*|د\.\s*|د\s+|ا\.\s*|م\.\s*)+/, "")
        .replace(/\s+/g, "")
        .toLowerCase();
}

function sanitizeHours(rawHours) {
    if (!rawHours || typeof rawHours !== "object") return null;
    const cleaned = {};
    let hasAny = false;
    for (const day of DAYS) {
        const val = rawHours[day];
        const str = val === null || val === undefined ? "" : String(val).trim();
        if (str && str.toLowerCase() !== "null") {
            cleaned[day] = str;
            hasAny = true;
        } else {
            cleaned[day] = null;
        }
    }
    return hasAny ? cleaned : null;
}

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
    }

    try {
        if (!process.env.ADMIN_PASSWORD) throw new Error("Missing ADMIN_PASSWORD in Netlify");
        if (!process.env.GITHUB_TOKEN) throw new Error("Missing GITHUB_TOKEN in Netlify");

        const { password, mode = "update", targetIndex = -1, expectedName = null, newProfData } = JSON.parse(event.body || "{}");

        if (password !== process.env.ADMIN_PASSWORD) {
            return { statusCode: 401, body: JSON.stringify({ error: "Wrong Password" }) };
        }
        if (!newProfData || !newProfData.name || !newProfData.name.trim()) {
            return { statusCode: 400, body: JSON.stringify({ error: "Professor name is required" }) };
        }

        const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
        const REPO = "naheelalhaddad/ASUSupport";
        const ghHeaders = {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json"
        };

        // 1. Fetch latest professors.json from GitHub
        const fileRes = await fetch(`https://api.github.com/repos/${REPO}/contents/professors.json`, {
            headers: ghHeaders
        });
        const fileData = await fileRes.json();
        if (!fileRes.ok) {
            throw new Error(`GitHub fetch failed: ${fileData.message || fileRes.status}`);
        }

        const content = Buffer.from(fileData.content, "base64").toString("utf-8");
        const professors = JSON.parse(content);

        const cleanEntry = {
            name: newProfData.name.trim(),
            name_en: (newProfData.name_en || "").trim(),
            office: (newProfData.office || "").trim(),
            location: (newProfData.location || "").trim() || "غير محدد",
            teams_email: (newProfData.teams_email || "").trim(),
            hours: sanitizeHours(newProfData.hours)
        };

        let commitMessage = "";

        // 2. Apply verified update or add new entry
        if (mode === "update") {
            let idx = -1;

            if (
                Number.isInteger(targetIndex) &&
                targetIndex >= 0 &&
                targetIndex < professors.length &&
                (!expectedName || professors[targetIndex].name === expectedName)
            ) {
                idx = targetIndex;
            } else if (expectedName) {
                // Fallback if professors.json shifted since approve.html loaded
                idx = professors.findIndex(p => p.name === expectedName);
                if (idx === -1) {
                    const normExpected = normalizeName(expectedName);
                    idx = professors.findIndex(p => normalizeName(p.name) === normExpected);
                }
            }

            if (idx === -1) {
                return {
                    statusCode: 409,
                    body: JSON.stringify({ error: "Target professor changed in GitHub. Refresh approve.html and try again." })
                };
            }

            professors[idx] = cleanEntry;
            commitMessage = `Update ${cleanEntry.name} via AI Approval`;
        } else {
            professors.push(cleanEntry);
            commitMessage = `Add ${cleanEntry.name} via AI Approval`;
        }

        // 3. Commit updated JSON back to GitHub
        const newContent = Buffer.from(JSON.stringify(professors, null, 4) + "\n", "utf-8").toString("base64");
        const commitRes = await fetch(`https://api.github.com/repos/${REPO}/contents/professors.json`, {
            method: "PUT",
            headers: ghHeaders,
            body: JSON.stringify({
                message: commitMessage,
                content: newContent,
                sha: fileData.sha
            })
        });

        const commitData = await commitRes.json();
        if (!commitRes.ok) {
            throw new Error(`GitHub commit failed: ${commitData.message || commitRes.status}`);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: `${commitMessage} — committed!` })
        };
    } catch (error) {
        console.error("commit.js error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message || "Commit failed" })
        };
    }
};