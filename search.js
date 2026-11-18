let professors = [];

fetch('professors.json')
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    })
    .then(data => {
        professors = data;
        console.log("Professors loaded successfully!");
    })
    .catch(error => {
        console.error("Failed to load professors:", error);
    });

const input = document.getElementById('searchInput');
const card = document.getElementById('resultCard');
const modal = document.getElementById('hoursModal');
const pName = document.getElementById('pName');
const pDetail = document.getElementById('pDetail');
const pEmail = document.getElementById('pEmail');
const modalContent = document.getElementById('modalHoursContent');

let currentProf = null;

function isEn() {
    return typeof window !== 'undefined' && window.I18N && window.I18N.lang() === 'en';
}

function normalizeText(text) {
    return text ? text.replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي') : '';
}

function renderProf() {
    if (!currentProf) return;
    const p = currentProf;


    if (isEn() && window.I18N) {
        pName.textContent = p.name_en || p.name;
        // Fallback to text if I18N hasn't loaded a specific key
        const officeLabel = window.I18N.ui('office') || 'Office';
        const deptLabel = window.I18N.ui('department') || 'Dept';
        pDetail.textContent = `${officeLabel}: ${p.office || 'N/A'} | ${deptLabel}: ${p.location || 'N/A'}`;
    } else {
        pName.textContent = p.name_en ? `${p.name} | ${p.name_en}` : p.name;
        pDetail.textContent = `مكتب: ${p.office || 'غير محدد'} | القسم: ${p.location || 'غير محدد'}`;
    }


    if (pEmail) {
        if (p.teams_email) {
            pEmail.textContent = `✉ ${p.teams_email}`;
            pEmail.href = `mailto:${p.teams_email}`;
            pEmail.style.display = "inline-block";
        } else {
            pEmail.textContent = "";
            pEmail.removeAttribute("href");
            pEmail.style.display = "none";
        }
    }
}

if (input) {
    input.addEventListener('input', function() {
        const query = normalizeText(input.value.toLowerCase().trim());

        if (query === "") {
            card.style.display = "none";
            return;
        }

        const result = professors.find(prof => {
            const matchAr = normalizeText(prof.name.toLowerCase()).includes(query);
            const matchEn = prof.name_en ? prof.name_en.toLowerCase().includes(query) : false;
            return matchAr || matchEn;
        });

        if (result) {
            currentProf = result;
            card.style.display = "block";
            renderProf();
        } else {
            currentProf = null;
            card.style.display = "none";
        }
    });
}

function openModal() {
    if (!currentProf) return;

    let html = '';

    if (currentProf.hours) {
        const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];
        days.forEach(day => {
            if (currentProf.hours[day]) {
                const dayLabel = (isEn() && window.I18N) ? window.I18N.day(day) : day;
                html += `<p style="margin: 10px 0; color: white;"><strong>${dayLabel}:</strong> <span style="color: #fca5a5;" dir="ltr">${currentProf.hours[day]}</span></p>`;
            }
        });
    } else {
        const noHoursText = (isEn() && window.I18N) ? window.I18N.ui('noHours') : 'غير متوفرة حالياً';
        html += `<p style="color: #94a3b8; text-align: center;">${noHoursText}</p>`;
    }

    if (modalContent) modalContent.innerHTML = html;
    if (modal) modal.style.display = "flex";
}

function closeModal() {
    if (modal) modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}


window.addEventListener('asu:langchange', function() {
    renderProf();
    if (modal && modal.style.display === 'flex') openModal();
});

async function uploadImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const status = document.getElementById('uploadStatus');
    status.textContent = "⏳ AI is processing the image... Please wait.";
    status.style.display = "block";
    status.style.color = "#fde047";

    const reader = new FileReader();
    reader.onloadend = async () => {
        try {
            const response = await fetch('/.netlify/functions/extract', {
                method: 'POST',
                body: JSON.stringify({ imageBase64: reader.result })
            });
            
            if (response.ok) {
                status.textContent = "✅ Successfully sent to admin for approval!";
                status.style.color = "#4ade80";
            } else {
                throw new Error("Failed");
            }
        } catch (err) {
            status.textContent = "❌ Error processing image. Please try again.";
            status.style.color = "#f87171";
        }
    };
    reader.readAsDataURL(file);
}
