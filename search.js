let professors = [];

fetch('professors.json')
    .then(response => response.json())
    .then(data => {
        professors = data;
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
    return window.I18N && window.I18N.lang() === 'en';
}

function normalizeText(text) {
    return text.replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
}

function renderProf() {
    if (!currentProf) return;
    const p = currentProf;

    if (isEn()) {
        pName.textContent = p.name_en || p.name;   // Arabic name when no English name exists
        pDetail.textContent = `${I18N.ui('office')}: ${I18N.dept(p.office)} | ${I18N.ui('department')}: ${I18N.dept(p.location)}`;
    } else {
        pName.textContent = p.name_en ? `${p.name} | ${p.name_en}` : p.name;
        pDetail.textContent = `مكتب: ${p.office} | القسم: ${p.location}`;
    }

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

function openModal() {
    if (!currentProf) return;

    let html = '';

    if (currentProf.hours) {
        const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];
        days.forEach(day => {
            if (currentProf.hours[day]) {
                html += `<p style="margin: 10px 0; color: white;"><strong>${I18N.day(day)}:</strong> <span style="color: #fca5a5;" dir="ltr">${currentProf.hours[day]}</span></p>`;
            }
        });
    } else {
        html += `<p style="color: #94a3b8; text-align: center;">${I18N.ui('noHours')}</p>`;
    }

    modalContent.innerHTML = html;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Re-render dynamic content when the language is switched
window.addEventListener('asu:langchange', function() {
    renderProf();
    if (modal.style.display === 'flex') openModal();
});
