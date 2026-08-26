const professors = [
    {
        "name": "أ.د. يوسف القصراوي (عميد الكلية)",
        "office": "1229",
        "location": "إدارة الكلية",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "سكرتاريا الأمن السيبراني",
        "office": "1225",
        "location": "إدارة الكلية",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "سكرتاريا علم البيانات والذكاء الاصطناعي",
        "office": "1228",
        "location": "إدارة الكلية",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. عصمت الضمور",
        "office": "1206",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. محمد بني دومي",
        "office": "21S02",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. عمر الشيخ سالم",
        "office": "1221",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. رضوان بطيحة",
        "office": "1218",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. نيفين حجازي",
        "office": "1G09",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. وليد مقابلة",
        "office": "1205",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د.أحمد اللطيف",
        "office": "21S08",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. منصور الهلالات",
        "office": "1223",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. ليث الزبون",
        "office": "1207",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ.براء القدومي",
        "office": "1208",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. قيس النعامنه",
        "office": "1208",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. نور العايدي",
        "office": "1222",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. أسماء الموسى",
        "office": "1G09",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. زياد جمحاوي",
        "office": "1223",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. محمود البشايرة",
        "office": "1217",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. شريفة مراد",
        "office": "21G08",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. وسام العباسي",
        "office": "1222",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د.صبا قواس",
        "office": "1209",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د.صالح التكروري",
        "office": "1220",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. احمد العزازي",
        "office": "21S05",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. محمود بني عطا",
        "office": "1B10",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. أنس شرينة",
        "office": "1B10",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. ابراهيم منهراوى",
        "office": "21S04",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د.خالد الحشاش",
        "office": "1104",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. احمد العناقره",
        "office": "21G14",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. براء نزال",
        "office": "1G08",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. محمد خضر",
        "office": "21S07",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. حنان حردان",
        "office": "1209",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. هديل أحمد",
        "office": "1106",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. وريف المناصير",
        "office": "1G10",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. باسل بني إسماعيل",
        "office": "1207",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د.لبنى بن خليفة",
        "office": "21G07",
        "location": "الذكاء الاصطناعي",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. معتصم جراح",
        "office": "21G14",
        "location": "الذكاء الاصطناعي",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. فاطمة الحاج",
        "office": "1227",
        "location": "الذكاء الاصطناعي",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. هند طلافحه",
        "office": "1224",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "امجاد البشايرة",
        "office": "21S26",
        "location": "الذكاء الاصطناعي",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "إيمان الناجي",
        "office": "1224",
        "location": "الذكاء الاصطناعي",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "لهيب العبادي",
        "office": "21S06",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. ناجي البطاينه",
        "office": "21S05",
        "location": "الذكاء الاصطناعي",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. نور ابو الرب",
        "office": "1G10",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. محمد خصاونة",
        "office": "1212",
        "location": "الذكاء الاصطناعي",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. علاء الزعبي",
        "office": "1218",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. بشار الشوحه",
        "office": "1207",
        "location": "الذكاء الاصطناعي",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د.خالد معابرة",
        "office": "1203",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. غدير البيساني",
        "office": "1214",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د.يوسف الشيخ",
        "office": "1220",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ.سهام حيمور",
        "office": "1105",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د.حسان الطراونه",
        "office": "1213",
        "location": "الذكاء الاصطناعي",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. فارس الطويل",
        "office": "1219",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د.جبر الوديان",
        "office": "1104",
        "location": "الذكاء الاصطناعي",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د.معاذ العلي",
        "office": "21S19",
        "location": "الذكاء الاصطناعي",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. أيهم العمري",
        "office": "1226",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. جعفر عطوان",
        "office": "1212",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. حكمت عبد الجابر",
        "office": "1G08",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. عبدالله ابورمان",
        "office": "21S04",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. صلاح الدين صافي",
        "office": "1221",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "وليد الأحمد",
        "office": "1219",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. سهير الحاج حسن",
        "office": "1106",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. مروان الأخرس",
        "office": "1226",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. أحمد العتوم",
        "office": "1217",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. محمود جوارنه",
        "office": "1215",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. حازم أبو ادعيق",
        "office": "1215",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. فادي بطة",
        "office": "1216",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ.عاكنة الشياب",
        "office": "1214",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. موفق أبو الهيجاء",
        "office": "1213",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. سلام حمدان",
        "office": "21G07",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. حنين الزعبي",
        "office": "21G08",
        "location": "علوم",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. ملاك المشابقة",
        "office": "21G08",
        "location": "علوم",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. عبدالله الطراد",
        "office": "21G14",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. محمد شكوكاني",
        "office": "21S03",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. مصعود شاهين",
        "office": "21S07",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. أيهم الوحش",
        "office": "21S08",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. لينا القضاة",
        "office": "21S26",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. روان جرار",
        "office": "21S26",
        "location": "هندسة البرمجيات/ علم حاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. أسراء أبو السعود",
        "office": "21S27",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. مها السعودى",
        "office": "21S27",
        "location": "علوم",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. آمنة شعبان",
        "office": "21S28",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. أسماء سالم",
        "office": "21S18",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. عتيقة الشايب",
        "office": "غير محدد",
        "location": "غير محدد",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. منال المزهر",
        "office": "1209",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. جمانه الخوالية",
        "office": "غير محدد",
        "location": "غير محدد",
        "teams_email": "",
        "hours": null
    }
];

const input = document.getElementById('searchInput');
const card = document.getElementById('resultCard');
const modal = document.getElementById('hoursModal');
const pName = document.getElementById('pName');
const pDetail = document.getElementById('pDetail');
const modalContent = document.getElementById('modalHoursContent');

let currentProf = null;

function normalizeText(text) {
    return text.replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
}

input.addEventListener('input', function() {
    const query = normalizeText(input.value.toLowerCase().trim());

    if (query === "") {
        card.style.display = "none";
        return;
    }

    const result = professors.find(prof => normalizeText(prof.name.toLowerCase()).includes(query));

    if (result) {
        currentProf = result;
        card.style.display = "block";
        pName.textContent = result.name;
        pDetail.textContent = `مكتب: ${result.office} | القسم: ${result.location}`;
    } else {
        currentProf = null;
        card.style.display = "none";
    }
});

function openModal() {
    if (!currentProf) return;
    
    let html = '';
    
    if (currentProf.teams_email) {
        html += `<p style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <strong>إيميل تيمز:</strong> <br>
            <a href="mailto:${currentProf.teams_email}" style="color: #60a5fa; text-decoration: none;">${currentProf.teams_email}</a>
        </p>`;
    }

    if (currentProf.hours) {
        const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];
        days.forEach(day => {
            if (currentProf.hours[day]) {
                html += `<p style="margin: 10px 0; color: white;"><strong>${day}:</strong> <span style="color: #fca5a5;" dir="ltr">${currentProf.hours[day]}</span></p>`;
            }
        });
    } else {
        html += `<p style="color: #94a3b8; text-align: center;">الساعات المكتبية غير متوفرة حالياً.</p>`;
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
