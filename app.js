// Experience details data
const experienceDetails = [
    {
        title: "Product Content Coordinator",
        company: "Pharm24.gr",
        period: "09/2024 - Σήμερα",
        description: "Online φαρμακείο με πάνω από 20.000 προϊόντα - Σπάρτη Λακωνίας",
        responsibilities: [
            "Συντονιστής ομάδας 3 ατόμων",
            "Διαχείριση & διαμοιρασμός αρμοδιοτήτων στα μέλη της ομάδας",
            "Έλεγχος & διόρθωση καταχωρημένων προϊόντων καθημερινά στο e-shop",
            "Ενεργοποίηση και απενεργοποίηση πλάνου εκπτώσεων",
            "Ενημέρωση και ανανέωση τιμών βάση τιμοκαταλόγων",
            "Διαχείριση πολιτικής δώρων & δειγμάτων στα καλάθια",
            "Εφαρμογή στρατηγικής SEO"
        ]
    },
    {
        title: "Data Entry Agent",
        company: "Pharm24.gr",
        period: "05/2023 - 09/2024",
        description: "Online φαρμακείο με πάνω από 20.000 προϊόντα - Σπάρτη Λακωνίας",
        responsibilities: [
            "Αναμόρφωση περιεχομένου για τα brands συμπληρωμάτων διατροφής",
            "Αύξηση προβολών/αγορών >500% μέσω βελτιωμένου περιεχομένου",
            "Δημιουργία κωδικών προϊόντων (φάρμακα & παραφάρμακα)",
            "SEO optimization για καλύτερη αναζητησιμότητα"
        ]
    },
    {
        title: "Store Manager",
        company: "Καλλιακούδης Delicatessen",
        period: "09/2018 - 05/2023",
        description: "Κατάστημα delicatessen με ποικιλία τυριών και παραδοσιακών προϊόντων - Σπάρτη",
        responsibilities: [
            "Πλήρης διαχείριση καταστήματος",
            "Διαχείριση αποθέματος και προμηθευτών",
            "Επεξεργασία παραγγελιών και εξυπηρέτηση πελατών",
            "Συνεχής παρακολούθηση των εξελίξεων του κλάδου, του ανταγωνισμού καθώς και αναζήτηση νέων πελατών",
            "Παρακολούθηση και τακτοποίηση αποθεμάτων, παραγγελιών και παραλαβών",
            "Διαχείριση ταμείου"
        ]
    },
    {
        title: "Dairy Zone Coordinator",
        company: "Καλλιακούδης Raw Milk Trade",
        period: "12/2014 - 08/2018",
        description: "Συλλογή και εμπορία φρέσκου ανεπεξέργαστου γάλακτος",
        responsibilities: [
            "Συλλογή φρέσκου γάλακτος με ειδικά μέσα",
            "Αποθήκευση και ποιοτικός έλεγχος νωπού γάλακτος",
            "Οργάνωση ζώνης γάλακτος (προγραμματισμός - δρομολόγια - σημεία)",
            "Παράδοση προϊόντων σε βιοτεχνίες",
            "Έκδοση παραστατικών πωλήσεων και αγορών",
            "Λήψη παραγγελιών πελατών",
            "Κλείσιμο συμφωνιών",
            "Διαχείριση δεδομένων ΕΛΟΓΑΚ",
            "Παρακολούθηση ανταγωνισμού"
        ]
    },
    {
        title: "HACCP Supervisor",
        company: "Γεράσιμος Καλλιακούδης & Σία ΟΕ",
        period: "12/2012 - 12/2014",
        description: "Διαχειριστής πιστοποιημένου συστήματος ασφάλειας τροφίμων HACCP",
        responsibilities: [
            "Εκπαίδευση και ενημέρωση του προσωπικού σχετικά με την ασφάλεια των τροφίμων",
            "Παρακολούθηση και ανάλυση κινδύνων σε κρίσιμα σημεία ελέγχου",
            "Διασφάλιση της συμμόρφωσης με τα πρότυπα υγιεινής",
            "Τήρηση αρχείων"
        ]
    },
    {
        title: "Business Owner - Self Employed",
        company: "Kalliakoudis K. Trans",
        period: "08/2010 - 11/2012",
        description: "Μεταφορική εταιρεία εμπορευμάτων με άδεια Δημοσίας Χρήσης",
        responsibilities: [
            "Μεταφορά παλετοποιημένων & χύμα προϊόντων, πρώτων υλών, βιομηχανικών προϊόντων & ζωοτροφών",
            "Συνεργασία με κόμβους logistics, αποθήκες & εργοστάσια",
			"Πιστοποίηση για μεταφορά ζωοτροφών",
			"Δυνατότητα μόνιμης συνεργασίας B2B και συμβάσεων",
            "Δρομολόγια εντός Ελλάδας"
        ]
    }
];
// Skill details data
const skillDetailsData = [
    {
        name: "Excel",
        level: "Εξειδικευμένο",
        experience: "5+ έτη εμπειρίας",
        certification: "ECDL Expert (EL200638866KK)",
        description: "Καθημερινή χρήση για price management και data analysis στο Pharm24.gr",
        achievements: [
            "Δημιουργία pivot tables για ανάλυση τιμών 20.000+ προϊόντων",
            "Αυτοματοποίηση τιμοκαταλόγων με lookup functions",
            "Weekly reporting για price comparisons και margins",
            "Integration Excel data με Prisma Win ERP system"
        ],
        tools: ["Pivot Tables", "VLOOKUP/XLOOKUP", "Επικύρωση Δεδομένων", "Conditional Formatting", "Macros"]
    },
    {
        name: "Entersoft",
        level: "Προχωρημένο",
        experience: "2+ έτη εμπειρίας",
        description: "Integration με e-shop για stock και pricing updates",
        achievements: [
            "Διαχείριση inventory sync μεταξύ physical stores και e-shop",
            "Product codes creation και management για φάρμακα/παραφάρμακα",
            "Price updates automation από suppliers στο e-shop",
            "Stock availability real-time monitoring"
        ],
        tools: ["Μαζική Μεταβολή Εγγραφών", "Συγχρονισμός Τιμών", "Κωδικοποίηση Προϊόντων", "Παρακολούθηση Αποθέματος"]
    },
	{
        name: "Prisma Win (Megasoft)",
        level: "Προχωρημένο",
        experience: "8+ έτη εμπειρίας",
        description: "Stock, τιμολόγιση καρτέλες πελατών",
        achievements: [
            "Διαχείριση inventory",
            "Έκδοση παραστατικών",
            "Καρτέλες πελατών",
            "Στατιστικά"
        ],
        tools: ["Διαχείριση Αποθέματος", "Καρτέλες Πελατών", "Έκδοση Παραστατικών", "Στατιστικά Πωλήσεων"]
    },
    {
        name: "Photoshop & Lightroom",
        level: "Προχωρημένο",
        experience: "3+ έτη εμπειρίας",
        description: "Βασική επεξεργασία εικόνων για e-shop",
        achievements: [
            "Soft editing φωτογραφιών προϊόντων",
            "Δημιουργία product badges",
            "Δημιουργία banner",
            "Φωτογράφιση προϊόντων και επεξεργασία των φωτογραφιών"
        ],
        tools: ["Scripts", "Badges", "Background", "File types"]
    },
	//  E-commerce skills
   {
        name: "Product Management",
        level: "Εξειδικευμένο",
        experience: "2+ έτη εμπειρίας",
        description: "20.000+ προϊόντα Pharm24.gr, Συντονισμός Ομάδας",
        achievements: [
            "Καταχώρηση και εμπλουτισμός 20.000+ pharmaceutical products",
            "Quality control processes για product information accuracy",
            "Συντονισμός ομάδας για 3-person content team",
            "Product categorization και attribute management"
        ],
        tools: ["Καταλογοποίηση Προϊόντων", "Διασφάλιση Ποιότητας", "Διαχείριση Ομάδας", "Επικύρωση Δεδομένων"]
    },
   {
        name: "Price Management",
        level: "Εξειδικευμένο",
        experience: "2+ έτη εμπειρίας",
        description: "Εβδομαδιαίες ενημερώσεις τιμών, ενεργοποίηση/απενεργοποίηση εκπτωτικών πλάνων",
        achievements: [
            "Weekly τιμοκαταλόγων updates από 50+ suppliers",
            "Promotional campaigns setup και monitoring",
            "Discount policies management για gift/sample programs",
            "Price comparison analysis για competitive positioning"
        ],
        tools: ["Παρακολούθηση Τιμών", "Προωθητικές Καμπάνιες", "Διαχείριση Εκπτώσεων", "Ανάλυση Ανταγωνισμού"]
    },
	{
        name: "Content Strategy",
        level: "Προχωρημένο",
        experience: "2+ έτη εμπειρίας",
        description: "Αναδιάρθρωση προβολής στο e-shop συμπληρωμάτων διατροφής, βελτιστοποίηση SEO",
        achievements: [
            "Brand pages αναμόρφωση για premium supplement brands",
            "Product descriptions optimization για SEO και conversions",
            "Content compliance για pharmaceutical regulations",
            "Brand storytelling και product positioning"
        ],
        tools: ["Συγγραφή Περιεχομένου", "Διαχείριση Brand", "Περιεχόμενο SEO", "Compliance Writing"]
    },
	{
        name: "SEO Strategy",
        level: "Μεσαίο",
        experience: "2+ έτη εμπειρίας",
        description: "Αύξηση προβολών >500% στα συμπληρώματα Pharm24.gr",
        achievements: [
            "On-page optimization για 4 βασικά brands συμπληρωμάτων",
            "Meta descriptions και title tags optimization",
            "Keyword research για pharmaceutical products",
            "Content restructuring για καλύτερη search visibility"
        ],
        tools: ["On-page SEO", "Meta Tags", "Keyword Research", "Βελτιστοποίηση Περιεχομένου", "Semrush", "Google Search Console"]
    },
	{
        name: "Marketing Strategy",
        level: "Μεσαίο",
        experience: "2+ έτη εμπειρίας",
        description: "Εφαρμογή πλάνου marketing στο Pharm24.gr",
        achievements: [
            "Στατηγική δώρων και δειγμάτων",
            "Προβολή παρουσίασης προίοντων",
            "Έλεγχος ανταγωνισμού",
            "Content restructuring για καλύτερη search visibility"
        ],
        tools: ["Google Analytics", "Hotjar", "Keyword Research", "Βελτιστοποίηση Περιεχομένου", "Canva"]
    },
    {
        name: "Inventory Sync",
        level: "Προχωρημένο",
        experience: "2+ έτη εμπειρίας",
        description: "Συγχρονισμός φυσικών καταστημάτων και ηλεκτρονικού καταστήματος",
        achievements: [
            "Συγχρονισμός αποθέματος σε πραγματικό χρόνο μεταξύ καναλιών",
            "Παρακολούθηση αποθέματος για φάρμακα με ημερομηνία λήξης",
            "Σύστημα ειδοποιήσεων για χαμηλό απόθεμα",
            "Διαχείριση αποθέματος σε πολλές τοποθεσίες"
        ],
        tools: ["Ενσωμάτωση ERP", "Παρακολούθηση Αποθέματος", "Συγχρονισμός Πολλαπλών Καναλιών", "Inventory Alerts"]
    },
    {
        name: "Team Leadership",
        level: "Προχωρημένο",
        experience: "1+ έτος εμπειρίας",
        description: "Υπεύθυνος ομάδας 3 ατόμων για καταχώρηση προίοντων στο e-shop",
        achievements: [
            "Διοίκηση και συντονισμός ομάδας content 3 ατόμων",
            "Ανάθεση εργασιών και διαχείριση προτεραιοτήτων",
            "Καθημερινός έλεγχος ποιότητας και παρακολούθηση απόδοσης",
            "Εκπαίδευση νέων μελών για καταχώρηση νέων προϊόντων"
        ],
        tools: ["Συντονισμός Ομάδας", "Διαχείριση Εργασιών", "Έλεγχος Ποιότητας", "Εκπαίδευση & Ανάπτυξη", "Clockify"]
    },
    {
        name: "Project Management",
        level: "Μεσαίο",
        experience: "3+ έτη εμπειρίας",
        description: "Λειτουργία καταστήματος, εκκινήσεις προϊόντων, υλοποίηση συστημάτων",
        achievements: [
            "Εγκατάσταση καταστήματος και διαχείριση λειτουργιών για delicatessen",
            "Συντονισμός εκκίνησης νέων προϊόντων",
            "Υλοποίηση συστημάτων για POS, απόθεμα ζύγιση και τιμολόγιση",
            "Διαχείριση σχέσεων προμηθευτών"
        ],
        tools: ["Διαχείριση Πόρων", "Διαχείριση Χρονοδιαγράμματος", "Ενημέρωση Υπευθύνων", "Σχεδιασμός Διαδικασιών"]
    },
    {
        name: "Βελτιστοποίηση Διαδικασιών",
        level: "Μεσαίο",
        experience: "5+ έτη εμπειρίας",
        description: "Απλοποίηση διαδικασιών παραλαβής/αποστολής, αυτοματοποίηση επαναλαμβανόμενων εργασιών, κόστος-effective λύσεις",
        achievements: [
            "Εντοπισμός κρίσιμων διαδικασιών που χρειάζονται βελτίωση",
            "Χαρτογραφία ροής εργασίας (workflow mapping)",
            "Ελαχιστοποίηση χρόνου κύκλου (faster turnover)",
            "Quality standards establishment για content accuracy"
        ],
        tools: ["Ανάλυση Διαδικασιών", "Πρότυπα Ποιότητας", "Σχεδιασμός Ροής Εργασίας", "Efficiency Optimization"]
    },
    {
        name: "Διαχείρηση & Ανάθεση Αρμοδιοτήτων",
        level: "Προχωρημένο",
        experience: "",
        description: "Παρακίνηση και ενίσχυση της απόδοσης, δημιουργία θετικού περιβάλλοντος εργασίας, αποτελεσματική κατανομή πόρων",
        achievements: [
            "Διαχείριση Προτεραιοτήτων",
            "Παρακολούθηση Απόδοσης",
            "Εκπαίδευση",
            "Κατανομή εργασιών ανάλογα με τις δεξιότητες κάθε μέλους",
			"Ανάλυση δεδομένων απόδοσης (με χρήση tools όπως Clockify)",
			"Ανάθεση deadlines και deliverables"
        ],
        tools: ["Professional Writing", "Επικοινωνία με Πελάτες", "Δημιουργία Περιεχομένου", "Τεκμηρίωση"]
    },
	// Languages
	{
        name: "Ελληνικά",
        level: "Μητρική γλώσσα",
        experience: "",
        description: "Επαγγελματική γλώσσα επικοινωνίας, δημιουργία περιεχομένου",
        achievements: [
            "Επαγγελματική συγγραφή περιεχομένου για προϊόντα παραφάρμακου",
            "Επικοινωνία με πελάτες και υποστήριξη",
            "Περιγραφές προϊόντων και διαφημιστικό κείμενο",
            "Τεκμηρίωση"
        ],
        tools: ["Επαγγελματική Συγγραφή", "Επικοινωνία με Πελάτες", "Δημιουργία Περιεχομένου", "Τεκμηρίωση"]
    },
    {
        name: "Αγγλικά",
        level: "Μεσαίο (Β2 Certified - Καλή γνώση)",
        experience: "Κρατικό Πιστοποιητικό Γλωσσομάθειας - Αριθμός Μητρώου: KB/16028",
        description: "Επαγγελματική γλώσσα επικοινωνίας, δημιουργία περιεχομένου",
        achievements: [
            "Επικοινωνία με διεθνείς προμηθευτές φαρμακευτικών και παραφαρμακευτικών προϊόντων",
            "Τεχνικά εγχειρίδια ανάγνωσης και εφαρμογής",
            "Online έρευνα για πληροφορίες προϊόντων και τάσεις",
            "Περιγραφές προϊόντων στα Αγγλικά για παγκοσμίου κλάσης προϊόντα"
        ],
        tools: ["Επαγγελματική Επικοινωνία", "Τεχνική Ανάγνωση", "Δεξιότητες Έρευνας", "Τεκμηρίωση"]
    }
];
const throttle = (fn, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    fn(...args);
  };
};
const CACHED_DOM = {
  sections: document.querySelectorAll('section'),
  navLinks: document.querySelectorAll('.nav-link'),
};
// Navigation functionality
class NavigationManager {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }
    init() {
        this.hamburger?.addEventListener('click', () => this.toggleMobileMenu());
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
    }
    toggleMobileMenu() {
        this.hamburger?.classList.toggle('active');
        this.navMenu?.classList.toggle('active');
    }
    closeMobileMenu() {
        this.hamburger?.classList.remove('active');
        this.navMenu?.classList.remove('active');
    }
	
    updateActiveLink() {
  const scrollPos = window.scrollY + 100;
  CACHED_DOM.sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    
    if (scrollPos >= top && scrollPos <= bottom) {
      CACHED_DOM.navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`a[href="#${id}"]`)?.classList.add('active');
    }
  });
}
}
// Scroll animations manager
class AnimationManager {
    constructor() {
        this.init();
    }
    init() {
        this.revealSections();
        this.initHeroAnimations();
        this.initProfilePulse();
    }
    revealSections() {
        const sections = document.querySelectorAll('.section');
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        sections.forEach(section => {
			if (section.classList.contains('visible')) return;
            const elementTop = section.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                section.classList.add('visible');
                // Animate skill badges when skills section becomes visible
                if (section.id === 'skills' && !section.classList.contains('skills-animated')) {
                    section.classList.add('skills-animated');
                    this.animateSkillBadges();
                }
            }
        });
    }
    animateSkillBadges() {
        const skillBadges = document.querySelectorAll('.skill-badge');
        skillBadges.forEach((badge, index) => {
            badge.style.opacity = '0';
            badge.style.transform = 'translateY(30px)';
            setTimeout(() => {
                badge.style.transition = 'all 0.6s ease';
                badge.style.opacity = '1';
                badge.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    initHeroAnimations() {
        const heroElements = document.querySelectorAll('.hero-text > *');
        heroElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            setTimeout(() => {
                element.style.transition = 'all 0.8s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
        // Profile card animation
        const profileCard = document.querySelector('.profile-card');
        if (profileCard) {
            setTimeout(() => {
                profileCard.style.transform = 'translateY(0)';
                profileCard.style.opacity = '1';
            }, 600);
        }
    }
    initProfilePulse() {
        setInterval(() => {
            const avatar = document.querySelector('.profile-avatar');
            if (avatar) {
                avatar.classList.add('animate-pulse');
                setTimeout(() => {
                    avatar.classList.remove('animate-pulse');
                }, 2000);
            }
        }, 5000);
    }
}
// Share Manager Class
class ShareManager {
    constructor() {
        this.shareButton = document.getElementById('shareButton');
        this.pageUrl = window.location.href;
        this.pageTitle = document.title;
        this.init();
    }

    init() {
        this.shareButton?.addEventListener('click', () => this.share());
    }

    share() {
        // Δοκιμή native sharing
        if (navigator.share) {
            navigator.share({
                title: this.pageTitle,
                text: 'Δείτε το CV μου',
                url: this.pageUrl
            }).catch(err => console.log('Share cancelled'));
        } else {
            // Fallback: Copy to clipboard
            this.copyUrl();
        }
    }

    copyUrl() {
        const url = this.pageUrl;

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(url)
                .then(() => this.showToast('✔️ Αντιγράφηκε!'))
                .catch(() => this.fallbackCopy(url));
        } else {
            this.fallbackCopy(url);
        }
    }
    fallbackCopy(url) {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        
        try {
            document.execCommand('copy');
            this.showToast('✔️ Αντιγράφηκε!');
        } catch (err) {
            this.showToast('❌ Σφάλμα');
        }
        
        document.body.removeChild(textarea);
    }
    showToast(message) {
        // Αφαίρεση παλιών
        const old = document.querySelector('.copy-toast');
        if (old) old.remove();
        const toast = document.createElement('div');
        toast.className = 'copy-toast';
        toast.textContent = message;
        toast.style.background = message.includes('✔️') ? 'var(--color-primary)' : 'var(--color-error)';
        toast.style.color = 'white';
        toast.style.padding = '10px 15px';
        toast.style.borderRadius = '6px';
        toast.style.position = 'fixed';
        toast.style.bottom = '22px';
        toast.style.right = '30%';
        toast.style.zIndex = '10000';
        toast.style.fontSize = '14px';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }
}
// Modal manager for experience and skill details
class ModalManager {
    constructor() {
        this.modal = document.getElementById('experienceModal');
        this.closeBtn = document.querySelector('.close');
        this.init();
    }
    init() {
        this.closeBtn?.addEventListener('click', () => this.closeModal());
        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.closeModal();
            }
        });
    }
    showExperienceDetails(index) {
        const details = experienceDetails[index];
        if (!details) return;
        document.getElementById('modalTitle').textContent = details.title;
        document.getElementById('modalCompany').textContent = details.company;
        document.getElementById('modalPeriod').textContent = details.period;
        document.getElementById('modalDescription').textContent = details.description;
        const responsibilitiesList = document.getElementById('modalResponsibilities');
        responsibilitiesList.innerHTML = '';
        details.responsibilities.forEach(resp => {
            const li = document.createElement('li');
            li.textContent = resp;
            responsibilitiesList.appendChild(li);
        });
        this.openModal();
    }
showSkillDetails(index) {
    const skill = skillDetailsData[index];
    if (!skill) return;
    document.getElementById('modalTitle').textContent = skill.name;
    document.getElementById('modalCompany').textContent = `Επίπεδο: ${skill.level}`;
    document.getElementById('modalPeriod').textContent = skill.experience + (skill.certification ? ` • ${skill.certification}` : '');
    document.getElementById('modalDescription').textContent = skill.description;
    const responsibilitiesList = document.getElementById('modalResponsibilities');
    responsibilitiesList.innerHTML = ''; // Καθαρισμός όλων των παλιών στοιχείων
    // Βρες και σβήσε τα παλιά "Εργαλεία" headers και lists
    const modalContentParent = responsibilitiesList.parentNode;
    const oldToolsHeaders = modalContentParent.querySelectorAll('h4');
    const oldToolsLists = modalContentParent.querySelectorAll('div[style*="flex"]');
    oldToolsHeaders.forEach(el => {
        if (el.textContent.includes('Εργαλεία')) {
            el.remove();
        }
    });
    oldToolsLists.forEach(el => {
        if (el.style.display === 'flex') {
            el.remove();
        }
    });
    // Πρόσθεσε τα νέα achievements
    if (skill.achievements) {
        skill.achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.textContent = achievement;
            responsibilitiesList.appendChild(li);
        });
    }
    // Πρόσθεσε τα νέα tools
    if (skill.tools) {
        const toolsTitle = document.createElement('h4');
        toolsTitle.textContent = 'Εργαλεία & Τεχνολογίες:';
        toolsTitle.style.marginTop = 'var(--space-20)';
        modalContentParent.appendChild(toolsTitle);
        const toolsList = document.createElement('div');
        toolsList.style.display = 'flex';
        toolsList.style.flexWrap = 'wrap';
        toolsList.style.gap = 'var(--space-8)';
        toolsList.style.marginTop = 'var(--space-12)';
        skill.tools.forEach(tool => {
            const toolBadge = document.createElement('span');
            toolBadge.textContent = tool;
            toolBadge.style.background = 'var(--color-bg-1)';
            toolBadge.style.color = 'var(--color-primary)';
            toolBadge.style.padding = 'var(--space-6) var(--space-12)';
            toolBadge.style.borderRadius = 'var(--radius-full)';
            toolBadge.style.fontSize = 'var(--font-size-xs)';
            toolBadge.style.fontWeight = 'var(--font-weight-medium)';
            toolsList.appendChild(toolBadge);
        });
        modalContentParent.appendChild(toolsList);
    }
    this.openModal();
}
    openModal() {
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
// Contact form manager
class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.successMessage = document.getElementById('successMessage');
        this.init();
    }
    init() {
        this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        // Validate form data
        if (!this.validateForm(data)) {
            return;
        }
        // Simulate form submission
        this.simulateSubmission();
    }
    validateForm(data) {
        const { name, email, subject, message } = data;
        if (!name.trim()) {
            this.showError('Παρακαλώ εισάγετε το όνομά σας');
            return false;
        }
        if (!email.trim() || !this.isValidEmail(email)) {
            this.showError('Παρακαλώ εισάγετε έγκυρο email');
            return false;
        }
        if (!subject.trim()) {
            this.showError('Παρακαλώ εισάγετε θέμα');
            return false;
        }
        if (!message.trim()) {
            this.showError('Παρακαλώ εισάγετε μήνυμα');
            return false;
        }
        return true;
    }
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    showError(message) {
        // Create or update error message
        let errorDiv = this.form.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.background = 'rgba(var(--color-red-500-rgb), 0.1)';
            errorDiv.style.color = 'var(--color-error)';
            errorDiv.style.padding = 'var(--space-12)';
            errorDiv.style.borderRadius = 'var(--radius-base)';
            errorDiv.style.border = '1px solid rgba(var(--color-red-500-rgb), 0.3)';
            errorDiv.style.marginTop = 'var(--space-16)';
            this.form.appendChild(errorDiv);
        }
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        // Remove error after 3 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 3000);
    }
    simulateSubmission() {
        // Hide any existing error messages
        const errorDiv = this.form.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        setTimeout(() => {
            this.successMessage.style.display = 'block';
            this.form.reset();
            
            setTimeout(() => {
                this.successMessage.style.display = 'none';
            }, 3000);
        }, 500);
    }
}
// Navbar scroll effect manager
class NavbarManager {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }
    init() {
        this.handleScroll();
    }
    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            this.navbar.style.boxShadow = 'var(--shadow-sm)';
        } else {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            this.navbar.style.boxShadow = 'none';
        }
    }
}
// Main application controller
class CVApplication {
    constructor() {
        this.navigationManager = new NavigationManager();
        this.animationManager = new AnimationManager();
        this.modalManager = new ModalManager();
        // this.contactFormManager = new ContactFormManager(); // Disabled for Formspree
        this.navbarManager = new NavbarManager();
		this.scrollToTopButton = new ScrollToTopButton();
		this.shareManager = new ShareManager();
        this.init();
    }
    init() {
        this.attachEventListeners();
        this.exposeGlobalFunctions();
    }
    attachEventListeners() {
  const handleScrollThrottled = throttle(() => {
    this.navigationManager.updateActiveLink();
    this.animationManager.revealSections();
    this.navbarManager.handleScroll();
  }, 100); // Κάθε 100ms μόνο

  window.addEventListener('scroll', handleScrollThrottled);

  window.addEventListener('load', () => {
    this.animationManager.revealSections();
    this.navigationManager.updateActiveLink();
  });
}
    exposeGlobalFunctions() {
        // Expose functions to global scope for HTML onclick handlers
        window.showExperienceDetails = (index) => {
            this.modalManager.showExperienceDetails(index);
        };
        window.showSkillDetails = (index) => {
            this.modalManager.showSkillDetails(index);
        };
        window.downloadCV = () => {
            window.print();
        };
    }
}
// Scroll to top button functionality
class ScrollToTopButton {
    constructor() {
        this.btn = document.querySelector('.scroll-to-top-btn');
        this.init();
    }

    init() {
        const handleScrollThrottled = throttle(() => this.handleScroll(), 100);
        window.addEventListener('scroll', handleScrollThrottled);
        this.btn?.addEventListener('click', (e) => this.scrollToTop(e));
    }

    handleScroll() {
        if (window.scrollY > 300) {
            this.btn?.classList.add('show');
        } else {
            this.btn?.classList.remove('show');
        }
    }

    scrollToTop(e) {
        e.preventDefault();
        
        // ✨ NEW: Reset URL to root without hash
        history.replaceState(null, '', window.location.pathname);
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
// Initialize application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CVApplication();
    });
} else {
    new CVApplication();
}