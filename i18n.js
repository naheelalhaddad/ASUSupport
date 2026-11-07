/* ASU Support Hub - Arabic/English switcher.
   Arabic is the source language in the HTML; English strings live in DICT.
   To translate new text, add  'Arabic text': 'English text'  to DICT. */
(function () {
    'use strict';

    var STORAGE_KEY = 'asu_lang';
    var root = document.documentElement;

    function readStored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }
    function writeStored(v) {
        try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* ignore */ }
    }

    var lang = readStored() === 'en' ? 'en' : 'ar';   // default: Arabic

    function setRoot() {
        root.lang = lang;
        root.dir = lang === 'en' ? 'ltr' : 'rtl';
    }
    setRoot();
    if (lang === 'en') root.classList.add('i18n-pending'); // hides body until translated (no Arabic flash)

    /* ---------- Page text: Arabic -> English ---------- */
    var DICT = {
        /* shared */
        'الرئيسية': 'Home',
        'قريباً': 'Soon',
        'إغلاق': 'Close',
        'فتح': 'Open',

        /* index */
        'التنقل الرئيسي': 'Main navigation',
        'البوابات': 'Portals',
        'نقاط المجتمع': 'Community points',
        'دليلك الشامل لكلية الـ IT': 'Your complete guide to the Faculty of IT',
        'كل ما يخص طلاب تكنولوجيا المعلومات، في مكان واحد.': 'Everything IT students need, in one place.',
        'ابحث عن مكتب أو إيميل الدكتور...': 'Search for a doctor\'s office or email...',
        'يتم تحديث الساعات المكتبية كل فصل دراسي. الفصل الصيفي لا يشمل ساعات مكتبية، يرجى التواصل مع الدكتور مباشرة.':
            'Office hours are updated every semester. The summer semester has no office hours; please contact the doctor directly.',
        'هل لاحظت خطأ في البيانات أو تود إضافة ساعات مكتبية مفقودة؟ تواصل معي عبر الإيميل أو Teams:':
            'Noticed an error in the data, or want to add missing office hours? Contact me by email or Teams:',
        'الساعات المكتبية': 'Office hours',
        'الوصول السريع': 'Quick access',
        'بنك الأسئلة': 'Question bank',
        'الخطط الدراسية': 'Study plans',
        'اختر تخصصك': 'Choose your major',
        'خطوات التسجيل': 'Registration steps',
        'خطوة بخطوة': 'Step by step',
        'الإيميل الجامعي': 'University email',
        'عروض للطلاب': 'Student offers',
        'بيانات الدكتور': 'Doctor details',
        'بوابات الجامعة': 'University portals',
        'بوابة الطالب': 'Student portal',
        'ادخل للبوابة الإلكترونية أو قم بجولة افتراضية في المرافق': 'Open the web portal or take a virtual tour of the facilities',
        'دخول البوابة': 'Open portal',
        'ابدأ الجولة': 'Start tour',
        'تطبيق الجامعة': 'University app',
        'روابط تحميل التطبيق الرسمي وشرح استخدامه بالتفصيل': 'Download links for the official app and a detailed guide to using it',
        'شرح التطبيق': 'App guide',

        /* plans */
        'اختر تخصصك الأكاديمي لعرض الخطة': 'Choose your academic major to view its plan',
        'خطط الدفعات الجديدة (2025)': 'New cohort plans (2025)',
        'علم البيانات والذكاء الاصطناعي': 'Data Science & AI',
        'علم الحاسوب': 'Computer Science',
        'هندسة البرمجيات': 'Software Engineering',
        'الأمن السيبراني': 'Cybersecurity',
        'الواقع الرقمي وتطوير الألعاب': 'VR & Game Development',
        'عرض الملفات': 'View files',
        'خطط الدفعات السابقة (2024 وما قبل)': 'Previous cohort plans (2024 and earlier)',
        'جميع التخصصات': 'All majors',

        /* registration */
        'رحلة التسجيل': 'Registration journey',
        'دليلك لتسجيل المواد واعتماد الجدول': 'Your guide to registering courses and confirming your schedule',
        'معرفة المرشد الأكاديمي': 'Know your academic advisor',
        'تعرف على مرشدك الأكاديمي الذي سيساعدك في اختيار المواد وحل المشاكل الأكاديمية.':
            'Get to know your academic advisor, who will help you choose courses and solve academic problems.',
        'استخدم هذه القائمة لمعرفة موقع مكتب المرشد (Use this map to find your advisor\'s office)':
            'Use this map to find your advisor\'s office',
        'مشاهدة الشرح (Watch Video)': 'Watch the video',
        'الدفع والرسوم': 'Payment and fees',
        'بعد اختيار المواد، يجب تسديد الرسوم. تعرف على طرق الدفع وكيفية معرفة المبلغ المطلوب من خلال إي فواتيركم أو الدائرة المالية.':
            'After choosing courses, you must pay the fees. Learn the payment methods and how to find the amount due through eFawateercom or the Financial Department.',
        'تسجيل المواد': 'Course registration',
        'الخطوة الأخيرة هي تثبيت الجدول الدراسي وإرساله للمرشد عبر بوابة الطالب الإلكترونية.':
            'The last step is to confirm your schedule and send it to your advisor through the student web portal.',
        'جاهز للتسجيل؟': 'Ready to register?',
        'انتقل الآن إلى بوابة الطالب الإلكترونية لتنفيذ الخطوات': 'Go to the student web portal now to carry out the steps',
        'دخول بوابة الطالب (MyASU)': 'Open student portal (MyASU)',

        /* community */
        'نقاط خدمة المجتمع': 'Community service points',
        'متطلب إجباري للتخرج: 10 نقاط': 'Mandatory graduation requirement: 10 points',
        'النشاطات الداخلية (Internal)': 'Internal activities',
        'تشمل ورشات العمل، المسابقات البرمجية، والأنشطة العامة داخل الحرم الجامعي.':
            'Includes workshops, programming competitions, and general activities on campus.',
        'تُعلن الأنشطة باستمرار على فريق': 'Activities are announced regularly on the',
        'في منصة Microsoft Teams.': 'team on Microsoft Teams.',
        'النشاطات الخارجية (External)': 'External activities',
        'أي نشاط أو عمل تطوعي يتم خارج أسوار الجامعة مع مؤسسات معتمدة.':
            'Any activity or volunteer work done outside the university with approved organizations.',
        'تنبيه:': 'Notice:',
        'يجب الحصول على موافقة مسبقة من الكلية قبل البدء بأي نشاط خارجي.':
            'You must get prior approval from the faculty before starting any external activity.',
        'خطوات تسجيل وتوثيق النقاط': 'Steps to register and claim your points',
        '(How to Register & Claim Your Points)': '',
        'حضور النشاط': 'Attend the activity',
        'تابع قناة': 'Follow the',
        'على التيمز لمعرفة مواعيد الأنشطة، واحضر الورشات أو المسابقات المُعلن عنها.':
            'on Teams to find out activity dates, and attend the announced workshops or competitions.',
        'تعبئة النموذج الإلكتروني': 'Fill in the online form',
        'في نهاية كل فعالية، سيقوم المنظمون بنشر رابط (Form). يجب تعبئته في نفس الوقت لإثبات حضورك.':
            'At the end of each event, the organizers will post a form link. Fill it in right then to prove your attendance.',
        'استلام النموذج الورقي': 'Get the paper form',
        'توجه إلى': 'Go to the',
        'الطابق الثاني': 'second floor',
        'في كلية تكنولوجيا المعلومات. قم بتعبئة النموذج الورقي الخاص بخدمة المجتمع الموجود عند "طاولة الأوراق المهمة".':
            'of the Faculty of IT. Fill in the community service paper form found at the "important papers table".',
        'تسليم النموذج': 'Submit the form',
        'سلّم الورقة المكتملة إلى': 'Hand the completed form to the',
        'رئيس القسم (HOD)': 'Head of Department (HOD)',
        'الخاص بتخصصك ليتم اعتماد النقاط وإضافتها إلى رصيدك الأكاديمي رسمياً.':
            'of your major so the points are approved and officially added to your academic record.',

        /* email */
        'مزايا الإيميل الجامعي': 'University email benefits',
        'أدوات وعروض مجانية لطلاب التكنولوجيا عند التسجيل بإيميلك الجامعي.':
            'Free tools and offers for technology students when you sign up with your university email.',
        'سجّل بإيميلك الجامعي (@students.asu.edu.jo). بعض العروض تتغيّر أو تختلف حسب الدولة، لذلك راجع صفحة كل عرض قبل التقديم.':
            'Sign up with your university email (@students.asu.edu.jo). Some offers change or vary by country, so check each offer\'s page before applying.',
        'التطوير والحوسبة السحابية': 'Development and cloud computing',
        'رخص مجانية لبيئات التطوير مثل PyCharm وIntelliJ IDEA وWebStorm طوال فترة دراستك.':
            'Free licenses for development tools such as PyCharm, IntelliJ IDEA and WebStorm for the length of your studies.',
        'رصيد 100$ لمدة 12 شهراً مع خدمات مجانية، بدون بطاقة ائتمان.':
            '$100 credit for 12 months with free services, no credit card required.',
        'وصول إلى تدريب مجاني ومختبرات تطبيقية على خدمات أمازون السحابية لبناء واستضافة التطبيقات.':
            'Access to free training and hands-on labs on Amazon cloud services for building and hosting applications.',
        'عروض الأجهزة (Hardware)': 'Hardware offers',
        'خصومات للطلاب على أجهزة Mac و iPad، وعادةً ما تشمل هدايا مثل سماعات AirPods في فترة العودة للمدارس.':
            'Student discounts on Mac and iPad, usually including gifts such as AirPods during the back-to-school period.',
        'خصومات تصل إلى 30% على الهواتف الذكية، الأجهزة اللوحية، أجهزة اللاب توب، والشاشات.':
            'Discounts of up to 30% on smartphones, tablets, laptops and monitors.',
        'خصومات إضافية للطلاب على أجهزة اللاب توب والكمبيوتر المكتبي، مفيدة جداً لأجهزة الأداء العالي.':
            'Extra student discounts on laptops and desktops, very useful for high-performance machines.',
        'التصميم والإنتاجية': 'Design and productivity',
        'خصم يزيد عن 60% على أكثر من 20 تطبيقاً للتصميم المبدع مثل Photoshop و Illustrator و Premiere Pro.':
            'Over 60% off more than 20 creative design apps such as Photoshop, Illustrator and Premiere Pro.',
        'خطة Figma التعليمية المجانية: ملفات غير محدودة وسجل إصدارات وأدوات تعاون متقدمة.':
            'The free Figma Education plan: unlimited files, version history and advanced collaboration tools.',
        'ترقية مجانية إلى خطة Plus التعليمية: صفحات غير محدودة وسجل إصدارات لمدة 30 يوماً.':
            'Free upgrade to the Plus education plan: unlimited pages and 30 days of version history.',
        'Word وExcel وPowerPoint وTeams ومساحة OneDrive عبر إيميل الجامعة.':
            'Word, Excel, PowerPoint, Teams and OneDrive storage through your university email.',
        'البيانات والذكاء الاصطناعي': 'Data and AI',
        'ترخيص مجاني لـ Tableau Desktop وPrep لمدة سنة، قابل للتجديد طالما أنت طالب.':
            'A free one-year license for Tableau Desktop and Prep, renewable as long as you are a student.',
        'الترفيه والموسيقى': 'Entertainment and music',
        'اشتراك مخفض للطلاب، وغالباً ما يتضمن خدمات إضافية مثل Hulu مجاناً (حسب المنطقة).':
            'A discounted student subscription, often including extras such as free Hulu (depending on region).',
        'فترة تجريبية مجانية لمدة 6 أشهر، ثم خصم 50% على الاشتراك يشمل الشحن المجاني و Prime Video.':
            'A free 6-month trial, then 50% off a subscription that includes free shipping and Prime Video.',
        'GitHub Pro مجاناً طوال دراستك، مع عروض شركاء مثل DataCamp لمدة 3 أشهر. عروض الحزمة تتغيّر باستمرار.':
            'GitHub Pro free for as long as you study, plus partner offers such as 3 months of DataCamp. Pack offers change constantly.'
    };

    /* ---------- Strings used by search.js ---------- */
    var UI = {
        office:       { ar: 'مكتب',     en: 'Office' },
        department:   { ar: 'القسم',    en: 'Department' },
        noHours:      { ar: 'الساعات المكتبية غير متوفرة حالياً.', en: 'Office hours are not available yet.' }
    };
    var DAYS = { 'الأحد': 'Sunday', 'الإثنين': 'Monday', 'الثلاثاء': 'Tuesday', 'الأربعاء': 'Wednesday', 'الخميس': 'Thursday' };
    var DEPTS = {
        'إدارة الكلية': 'Faculty Administration',
        'الأمن السيبراني': 'Cybersecurity',
        'الذكاء الاصطناعي': 'Artificial Intelligence',
        'الواقع الرقمي وتطوير الالعاب': 'VR & Game Development',
        'رئيس قسم الأمن السيبراني': 'Head of Cybersecurity Department',
        'رئيس قسم الهندسة البرمجيات': 'Head of Software Engineering Department',
        'رئيسة قسم الذكاء الاصطناعي': 'Head of Artificial Intelligence Department',
        'علم الحاسوب': 'Computer Science',
        'علوم': 'Sciences',
        'غير محدد': 'Not specified',
        'هندسة البرمجيات': 'Software Engineering',
        'هندسة البرمجيات / BTEC': 'Software Engineering / BTEC',
        'هندسة البرمجيات/ علم حاسوب': 'Software Engineering / Computer Science'
    };

    /* ---------- Text-node / attribute translation ---------- */
    var textNodes = [];   // { node, ar, en }
    var attrNodes = [];   // { el, attr, ar, en }

    function has(k) { return Object.prototype.hasOwnProperty.call(DICT, k); }

    function lookup(raw) {
        var m = raw.match(/^(\s*)([\s\S]*?)(\s*)$/);
        var core = m[2].replace(/\s+/g, ' ');
        if (!core) return null;
        if (has(core)) return { lead: m[1], trail: m[3], pre: '', en: DICT[core] };
        // leading emoji / symbols, e.g. "🎓 معرفة المرشد الأكاديمي"
        var p = core.match(/^([^\p{L}\p{N}"(]+)(.+)$/u);
        if (p && has(p[2])) return { lead: m[1], trail: m[3], pre: p[1], en: DICT[p[2]] };
        return null;
    }

    function collect() {
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function (n) {
                var par = n.parentNode;
                var tag = par && par.nodeName;
                if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
                if (par && par.closest && par.closest('[data-i18n-skip]')) return NodeFilter.FILTER_REJECT;
                return /[\u0600-\u06FF]/.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        var n;
        while ((n = walker.nextNode())) {
            var hit = lookup(n.nodeValue);
            if (hit) textNodes.push({ node: n, ar: n.nodeValue, en: hit.lead + hit.pre + hit.en + hit.trail });
        }
        var attrs = ['placeholder', 'aria-label', 'title', 'alt'];
        document.querySelectorAll('[placeholder],[aria-label],[title],[alt]').forEach(function (el) {
            attrs.forEach(function (a) {
                var v = el.getAttribute(a);
                if (v && has(v.trim())) attrNodes.push({ el: el, attr: a, ar: v, en: DICT[v.trim()] });
            });
        });
    }

    function updateButtons() {
        document.querySelectorAll('.lang-btn').forEach(function (b) {
            b.textContent = lang === 'en' ? 'العربية' : 'English';
            b.setAttribute('aria-label', lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English');
            b.setAttribute('lang', lang === 'en' ? 'ar' : 'en');
        });
    }

    function apply() {
        var en = lang === 'en';
        textNodes.forEach(function (t) { t.node.nodeValue = en ? t.en : t.ar; });
        attrNodes.forEach(function (a) { a.el.setAttribute(a.attr, en ? a.en : a.ar); });
        updateButtons();
        root.classList.remove('i18n-pending');
    }

    function setLang(next) {
        next = next === 'en' ? 'en' : 'ar';
        if (next === lang) return;
        lang = next;
        writeStored(lang);
        setRoot();
        apply();
        window.dispatchEvent(new CustomEvent('asu:langchange', { detail: { lang: lang } }));
    }

    /* ---------- Public API (used by search.js) ---------- */
    window.I18N = {
        lang: function () { return lang; },
        set: setLang,
        ui: function (key) { return UI[key][lang]; },
        day: function (d) { return lang === 'en' ? (DAYS[d] || d) : d; },
        dept: function (d) { return lang === 'en' ? (DEPTS[d] || d) : d; }
    };

    function init() {
        collect();
        document.querySelectorAll('.lang-btn').forEach(function (b) {
            b.addEventListener('click', function () { setLang(lang === 'en' ? 'ar' : 'en'); });
        });
        apply();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
