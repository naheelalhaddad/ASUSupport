const professors = [
    {
        "name": "أ.د. يوسف القصراوي (عميد الكلية)",
        "name_en": "Dr. Yousef Qasrawi",
        "office": "1229",
        "location": "إدارة الكلية",
        "teams_email": "y_alqasrawi@asu.edu.jo",
        "hours": null
    },
    {
        "name": "سكرتاريا الأمن السيبراني",
        "name_en": "CyberSecurity Secretary",
        "office": "1225",
        "location": "إدارة الكلية",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "سكرتاريا علم البيانات والذكاء الاصطناعي",
        "name_en": "DSAI Secretary",
        "office": "1228",
        "location": "إدارة الكلية",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. عصمت الضمور",
        "name_en": "",
        "office": "1206",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. محمد بني دومي",
        "name_en": "Mohammad Banidoumi",
        "office": "21S02",
        "location": "علم الحاسوب",
        "teams_email": "m_banidoumi@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. عمر الشيخ سالم",
        "name_en": "Omar Elsheikhsalem",
        "office": "1221",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "o_salem@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. رضوان بطيحة",
        "name_en": "Radwan Batiha",
        "office": "1218",
        "location": "علم الحاسوب",
        "teams_email": "r_batiha@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. نيفين حجازي",
        "name_en": "Neveen Hijazi",
        "office": "1G09",
        "location": "علم الحاسوب",
        "teams_email": "n_hijazi@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. وليد مقابلة",
        "name_en": "Waleed Maqableh",
        "office": "1205",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "w_maqableh@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د.أحمد اللطيف",
        "name_en": "Ahmad Eltaif",
        "office": "21S08",
        "location": "علم الحاسوب",
        "teams_email": "a_eltaif@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. منصور الهلالات",
        "name_en": "Mansour Alhelalat",
        "office": "1223",
        "location": "علم الحاسوب",
        "teams_email": "m_alhelalat@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. ليث الزبون",
        "name_en": "Laith Alzboun",
        "office": "1207",
        "location": "علم الحاسوب",
        "teams_email": "l_alzboun@asu.edu.jo",
        "hours": null
    },
    {
        "name": "أ.براء القدومي",
        "name_en": "Baraa Qaddoumi",
        "office": "1208",
        "location": "علم الحاسوب",
        "teams_email": "b_qaddoumi@asu.edu.jo",
        "hours": null
    },
    {
        "name": "أ. قيس النعامنه",
        "name_en": "Qais Alnaamneh",
        "office": "1208",
        "location": "الأمن السيبراني",
        "teams_email": "q_naamneh@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. نور العايدي",
        "name_en": "Noor Alaydie",
        "office": "1222",
        "location": "علم الحاسوب",
        "teams_email": "n_alaydie@asu.edu.jo",
        "hours": null
    },
    {
        "name": "أ. أسماء الموسى",
        "name_en": "Asma Almousa",
        "office": "1G09",
        "location": "علم الحاسوب",
        "teams_email": "a_almousa@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. محمود البشايرة",
        "name_en": "Mahmoud AlBashayreh",
        "office": "1217",
        "location": "هندسة البرمجيات",
        "teams_email": "m_albashayreh@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. شريفة مراد",
        "name_en": "Sharefa Murad",
        "office": "21G08",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "s_murad@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. وسام العباسي",
        "name_en": "Wesam AlAbbasi",
        "office": "1222",
        "location": "علم الحاسوب",
        "teams_email": "w_alabbasi@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د.صالح التكروري",
        "name_en": "Saleh AlTakrouri",
        "office": "1220",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "s_altakrouri@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. احمد العزازي",
        "name_en": "Ahmad Azzazi",
        "office": "21S05",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "a_azzazi@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. محمود بني عطا",
        "name_en": "",
        "office": "1B10",
        "location": "علم الحاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. أنس شرينة",
        "name_en": "Anas Shrinah",
        "office": "1B10",
        "location": "هندسة البرمجيات",
        "teams_email": "a_shrinah@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. ابراهيم منهراوى",
        "name_en": "Ibrahim Manharawy",
        "office": "21S04",
        "location": "هندسة البرمجيات",
        "teams_email": "i_manharawy@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د.خالد الحشاش",
        "name_en": "Khalid AlHashash",
        "office": "1104",
        "location": "علم الحاسوب",
        "teams_email": "k_alhashash@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. احمد العناقره",
        "name_en": "Ahmad AlAnaqreh",
        "office": "21G14",
        "location": "علم الحاسوب",
        "teams_email": "a_alanaqreh@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. براء نزال",
        "name_en": "Bara Nazzal",
        "office": "1G08",
        "location": "علم الحاسوب",
        "teams_email": "b_nazzal@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. محمد خضر",
        "name_en": "Mohammed Khader",
        "office": "21S07",
        "location": "علم الحاسوب",
        "teams_email": "m_khader@asu.edu.jo",
        "hours": null
    },
    {
        "name": "أ. حنان الحردان",
        "name_en": "Hanan AlHardan",
        "office": "1209",
        "location": "علم الحاسوب",
        "teams_email": "h_hardan@asu.edu.jo",
        "hours": null
    },
    {
        "name": "أ. هديل أحمد",
        "name_en": "Hadeel Ahmad",
        "office": "1106",
        "location": "علم الحاسوب",
        "teams_email": "h_ahmad@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. وريف المناصير",
        "name_en": "Waref AlManaseer",
        "office": "1G10",
        "location": "علم الحاسوب",
        "teams_email": "w_manaseer@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. باسل بني إسماعيل",
        "name_en": "Basel Baniismail",
        "office": "1207",
        "location": "هندسة البرمجيات",
        "teams_email": "b_ismail@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د.لبنى بن خليفة",
        "name_en": "Lobna Ben Khalifa",
        "office": "21G07",
        "location": "الذكاء الاصطناعي",
        "teams_email": "l_benkhalifa@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. معتصم جراح",
        "name_en": "Mutasem Jarrah",
        "office": "21G14",
        "location": "الذكاء الاصطناعي",
        "teams_email": "m_jarrah@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. فاطمة الحاج",
        "name_en": "Fatimah Alhaj",
        "office": "1227",
        "location": "رئيسة قسم الذكاء الاصطناعي",
        "teams_email": "f_alhaj@asu.edu.jo",
        "hours": null
    },
    {
        "name": "أ. هند طلافحه",
        "name_en": "Hind Talafha",
        "office": "1224",
        "location": "علم الحاسوب",
        "teams_email": "h_talafha@asu.edu.jo",
        "hours": null
    },
    {
        "name": "امجاد البشايرة",
        "name_en": "Amjad Albashayreh",
        "office": "21S26",
        "location": "الذكاء الاصطناعي",
        "teams_email": "a_albashayreh@asu.edu.jo",
        "hours": null
    },
    {
        "name": "إيمان الناجي",
        "name_en": "Eman Alnagi",
        "office": "1224",
        "location": "الذكاء الاصطناعي",
        "teams_email": "e_alnaji@asu.edu.jo",
        "hours": null
    },
    {
        "name": "لهيب العبادي",
        "name_en": "Laheeb AlAbadi",
        "office": "21S06",
        "location": "هندسة البرمجيات",
        "teams_email": "l_alselehat@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. ناجي البطاينه",
        "name_en": "Naji AlBatayneh",
        "office": "21S05",
        "location": "الذكاء الاصطناعي",
        "teams_email": "n_albatayneh@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. نور ابو الرب",
        "name_en": "Noor Abuelrub",
        "office": "1G10",
        "location": "علم الحاسوب",
        "teams_email": "n_abuelrub@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. محمد خصاونة",
        "name_en": "Mohammed Khasawneh",
        "office": "1212",
        "location": "الذكاء الاصطناعي",
        "teams_email": "m_khasawneh@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. علاء الزعبي",
        "name_en": "Ala AlZoubi",
        "office": "1218",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "a_alzoubi@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. بشار الشوحه",
        "name_en": "Bashar ALShouha",
        "office": "1207",
        "location": "الذكاء الاصطناعي",
        "teams_email": "b_alshouha@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د.خالد معابرة",
        "name_en": "Khaled Maabreh",
        "office": "1203",
        "location": "علم الحاسوب",
        "teams_email": "k_maabreh@asu.edu.jo",
        "hours": null
    },
    {
        "name": "أ. غدير البيساني",
        "name_en": "Ghadeer AlBesani",
        "office": "1214",
        "location": "هندسة البرمجيات",
        "teams_email": "g_albesani@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د.يوسف الشيخ",
        "name_en": "Yousef ElSheikh",
        "office": "1220",
        "location": "هندسة البرمجيات",
        "teams_email": "y_elsheikh@asu.edu.jo",
        "hours": null
    },
    {
        "name": "أ.سهام حيمور",
        "name_en": "Siham Haimour",
        "office": "1105",
        "location": "الواقع الرقمي وتطوير الالعاب",
        "teams_email": "s_haimour@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د.حسان الطراونه",
        "name_en": "Hassan AlTarawneh",
        "office": "1213",
        "location": "الذكاء الاصطناعي",
        "teams_email": "ha_tarawneh@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. فارس طويل",
        "name_en": "Faris Taweel",
        "office": "1219",
        "location": "هندسة البرمجيات",
        "teams_email": "f_taweel@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د.جبر الوديان",
        "name_en": "Jaber AlWidian",
        "office": "1104",
        "location": "الذكاء الاصطناعي",
        "teams_email": "j_alwidian@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د.معاذ العلي",
        "name_en": "Muath AlAli",
        "office": "21S19",
        "location": "الذكاء الاصطناعي",
        "teams_email": "m_alali@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. أيهم العمري",
        "name_en": "Ayham AlOmari",
        "office": "1226",
        "location": "الأمن السيبراني",
        "teams_email": "ay_alomari@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. جعفر عطوان",
        "name_en": "Jaffar Atwan",
        "office": "1212",
        "location": "علم الحاسوب",
        "teams_email": "j_atwan@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. حكمت عبد الجابر",
        "name_en": "Hikmat AbdelJaber",
        "office": "1G08",
        "location": "علم الحاسوب",
        "teams_email": "h_abdeljaber@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. عبدالله ابورمان",
        "name_en": "Abdulla Aburomman",
        "office": "21S04",
        "location": "الأمن السيبراني",
        "teams_email": "a_aburomman@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. صلاح الدين صافي",
        "name_en": "Salahaldeen Safi",
        "office": "1221",
        "location": "هندسة البرمجيات",
        "teams_email": "s_safi@asu.edu.jo",
        "hours": null
    },
    {
        "name": "وليد الأحمد",
        "name_en": "",
        "office": "1219",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. سهير الحاج حسن",
        "name_en": "Suhair ALhaj Hassan",
        "office": "1106",
        "location": "هندسة البرمجيات",
        "teams_email": "su_hassan@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. مروان الأخرس",
        "name_en": "Marwan AlAkhras",
        "office": "1226",
        "location": "الأمن السيبراني",
        "teams_email": "m_alakhras@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. أحمد العتوم",
        "name_en": "Ahmed Otoom",
        "office": "1217",
        "location": "الأمن السيبراني",
        "teams_email": "a_otoom@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. محمود جوارنه",
        "name_en": "Mahmoud AlJawarneh",
        "office": "1215",
        "location": "الأمن السيبراني",
        "teams_email": "ma_jawarneh@asu.edu.jo",
        "hours": null
    },
    {
        "name": "أ. حازم أبو ادعيق",
        "name_en": "Hazem Abu-Adaiq",
        "office": "1215",
        "location": "الأمن السيبراني",
        "teams_email": "h_abuadaiq@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. فادي بطة",
        "name_en": "Fadi Batah",
        "office": "1216",
        "location": "الأمن السيبراني",
        "teams_email": "f_bata@asu.edu.jo",
        "hours": null
    },
    {
        "name": "أ.عاكنة الشياب",
        "name_en": "Ateka Alsheyab",
        "office": "1214",
        "location": "الأمن السيبراني",
        "teams_email": "a_alsheyab@asu.edu.jo",
        "hours": null
    },
    {
        "name": "د. موفق أبو الهيجاء",
        "name_en": "",
        "office": "1213",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. سلام حمدان",
        "name_en": "",
        "office": "21G07",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. حنين الزعبي",
        "name_en": "",
        "office": "21G08",
        "location": "علوم",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. ملاك المشابقة",
        "name_en": "",
        "office": "21G08",
        "location": "علوم",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. عبدالله الطراد",
        "name_en": "",
        "office": "21G14",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. محمد شكوكاني",
        "name_en": "",
        "office": "21S03",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. مصعود شاهين",
        "name_en": "",
        "office": "21S07",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. أيهم الوحش",
        "name_en": "",
        "office": "21S08",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. لينا القضاة",
        "name_en": "",
        "office": "21S26",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. روان جرار",
        "name_en": "",
        "office": "21S26",
        "location": "هندسة البرمجيات/ علم حاسوب",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. أسراء أبو السعود",
        "name_en": "",
        "office": "21S27",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. مها السعودى",
        "name_en": "",
        "office": "21S27",
        "location": "علوم",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "أ. آمنة شعبان",
        "name_en": "",
        "office": "21S28",
        "location": "هندسة البرمجيات",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. أسماء سالم",
        "name_en": "",
        "office": "21S18",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. عتيقة الشايب",
        "name_en": "",
        "office": "غير محدد",
        "location": "غير محدد",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. منال المزهر",
        "name_en": "",
        "office": "1209",
        "location": "الأمن السيبراني",
        "teams_email": "",
        "hours": null
    },
    {
        "name": "د. جمانه الخوالية",
        "name_en": "",
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

    const result = professors.find(prof => {
        const matchAr = normalizeText(prof.name.toLowerCase()).includes(query);
        const matchEn = prof.name_en ? prof.name_en.toLowerCase().includes(query) : false;
        return matchAr || matchEn;
    });

    if (result) {
        currentProf = result;
        card.style.display = "block";
        
        const displayName = result.name_en ? `${result.name} | ${result.name_en}` : result.name;
        pName.textContent = displayName;
        
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
