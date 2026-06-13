// Current UI language helper (driven by <html lang> set by LanguageManager)
function currentLang() {
    return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'el';
}
// UI strings (toasts, validation, modal labels) in both languages
const MSG = {
    el: {
        enterName: 'Παρακαλώ εισάγετε το όνομά σας',
        validEmail: 'Παρακαλώ εισάγετε έγκυρο email',
        enterSubject: 'Παρακαλώ εισάγετε θέμα',
        enterMessage: 'Παρακαλώ εισάγετε μήνυμα',
        captchaLoading: 'Το captcha φορτώνει ακόμη, δοκιμάστε ξανά σε λίγο.',
        captchaComplete: 'Παρακαλώ ολοκληρώστε το captcha!',
        sendError: 'Σφάλμα κατά την αποστολή. Δοκιμάστε ξανά.',
        sendErrorShort: 'Σφάλμα κατά την αποστολή',
        shareText: 'Δείτε το CV μου',
        copied: '✔️ Αντιγράφηκε!',
        copyError: '❌ Σφάλμα',
        level: 'Επίπεδο:',
        toolsTitle: 'Εργαλεία & Τεχνολογίες:'
    },
    en: {
        enterName: 'Please enter your name',
        validEmail: 'Please enter a valid email',
        enterSubject: 'Please enter a subject',
        enterMessage: 'Please enter a message',
        captchaLoading: 'The captcha is still loading, please try again shortly.',
        captchaComplete: 'Please complete the captcha!',
        sendError: 'Error while sending. Please try again.',
        sendErrorShort: 'Error while sending',
        shareText: 'Check out my CV',
        copied: '✔️ Copied!',
        copyError: '❌ Error',
        level: 'Level:',
        toolsTitle: 'Tools & Technologies:'
    }
};
function t(key) { return MSG[currentLang()][key]; }

// Experience details data (per language)
const experienceDetails = {
    el: [
    {
        title: "Product Content Coordinator",
        company: "Pharm24.gr",
        period: "09/2024 - Σήμερα",
        description: "Διαχείριση περιεχομένου σε online φαρμακείο με πάνω από 20.000 προϊόντα - Σπάρτη Λακωνίας",
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
        description: "Καταχώρηση νέων προϊόντων και επεξερασία προϊοντικού περιεχομένου σε online φαρμακείο με πάνω από 20.000 προϊόντα - Σπάρτη Λακωνίας",
        responsibilities: [
            "Αναμόρφωση περιεχομένου για τα brands συμπληρωμάτων διατροφής",
            "Αύξηση προβολών/αγορών >500% μέσω βελτιωμένου περιεχομένου",
            "Δημιουργία κωδικών προϊόντων (φάρμακα & παραφάρμακα)",
            "SEO optimization για καλύτερη εμφάνιση στα αποτελέσματα αναζήτησης"
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
    ],
    en: [
    {
        title: "Product Content Coordinator",
        company: "Pharm24.gr",
        period: "09/2024 - Present",
        description: "Content management at an online pharmacy with over 20,000 products - Sparta, Laconia",
        responsibilities: [
            "Coordinator of a 3-person team",
            "Managing and delegating responsibilities to team members",
            "Daily review and correction of products listed on the e-shop",
            "Enabling and disabling discount plans",
            "Updating and refreshing prices based on price lists",
            "Managing the gift & sample policy in the shopping cart",
            "Implementing SEO strategy"
        ]
    },
    {
        title: "Data Entry Agent",
        company: "Pharm24.gr",
        period: "05/2023 - 09/2024",
        description: "Entering new products and editing product content at an online pharmacy with over 20,000 products - Sparta, Laconia",
        responsibilities: [
            "Reworking content for dietary-supplement brands",
            "500%+ increase in views/purchases through improved content",
            "Creating product codes (medicines & parapharmaceuticals)",
            "SEO optimization for better visibility in search results"
        ]
    },
    {
        title: "Store Manager",
        company: "Kalliakoudis Delicatessen",
        period: "09/2018 - 05/2023",
        description: "Delicatessen store with a variety of cheeses and traditional products - Sparta",
        responsibilities: [
            "Full store management",
            "Inventory and supplier management",
            "Order processing and customer service",
            "Continuously monitoring industry developments and competition, as well as seeking new customers",
            "Monitoring and organizing stock, orders and deliveries",
            "Cash management"
        ]
    },
    {
        title: "Dairy Zone Coordinator",
        company: "Kalliakoudis Raw Milk Trade",
        period: "12/2014 - 08/2018",
        description: "Collection and trade of fresh raw milk",
        responsibilities: [
            "Collecting fresh milk with specialized equipment",
            "Storage and quality control of raw milk",
            "Organizing the milk zone (scheduling - routes - collection points)",
            "Delivering products to small dairy producers and processors",
            "Issuing sales and purchase documents",
            "Taking customer orders",
            "Closing deals",
            "Managing ELOGAK data",
            "Monitoring competition"
        ]
    },
    {
        title: "HACCP Supervisor",
        company: "Gerasimos Kalliakoudis & Co.",
        period: "12/2012 - 12/2014",
        description: "Manager of a certified HACCP food safety system",
        responsibilities: [
            "Training and informing staff on food safety",
            "Monitoring and analyzing hazards at critical control points",
            "Ensuring compliance with hygiene standards",
            "Record keeping"
        ]
    },
    {
        title: "Business Owner - Self Employed",
        company: "Kalliakoudis K. Trans",
        period: "08/2010 - 11/2012",
        description: "Freight transport company with a Public Use license",
        responsibilities: [
            "Transporting palletized & bulk goods, raw materials, industrial products & animal feed",
            "Cooperating with logistics hubs, warehouses & factories",
			"Certification for transporting animal feed",
			"Available for long-term B2B partnerships and contracts",
            "Routes within Greece"
        ]
    }
    ]
};
// Skill details data (per language)
const skillDetailsData = {
    el: [
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
        experience: "3+ έτη εμπειρίας",
        description: "Integration με e-shop για stock και pricing updates",
        achievements: [
            "Διαχείριση inventory sync μεταξύ physical stores και e-shop",
            "Δημιουργία νέων κωδικών και διαχείριση κωδικών φαρμάκου/παραφαρμάκου",
            "Ενεμερώσεις τιμών βάση τιμοκαταλόγου από προμηθευτές στο e-shop",
            "Παρακολούθηση αποθέματος σε πραγματικό χρόνο"
        ],
        tools: ["Μαζική Μεταβολή Εγγραφών", "Συγχρονισμός Τιμών", "Κωδικοποίηση Προϊόντων", "Παρακολούθηση Αποθέματος"]
    },
	{
        name: "Prisma Win (Megasoft)",
        level: "Προχωρημένο",
        experience: "8+ έτη εμπειρίας",
        description: "Stock, τιμολόγιση, καρτέλες πελατών",
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
        level: "Μεσαίο",
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
            "Αναδιάρθρωσημόρφωση σελίδων brand για στρατηγικούς συνεργάτες",
            "Βελτίσωση περιγραφής προϊόντων για SEO και conversions",
            "Συμμόρφωση περιεχομένου σχετικά με τους φαρμακευτικούς κανονισμούς",
            "Brand storytelling και τοποθέτηση προϊόντος"
        ],
        tools: ["Συγγραφή Περιεχομένου", "Διαχείριση Brand", "Περιεχόμενο SEO", "Compliance Writing"]
    },
	{
        name: "SEO Strategy",
        level: "Εξειδικευμένο",
        experience: "2+ έτη εμπειρίας",
        description: "Αύξηση προβολών >500% στα συμπληρώματα Pharm24.gr",
        achievements: [
            "On-page optimization για 4 βασικά brands συμπληρωμάτων",
            "Meta descriptions και title tags optimization",
            "Keyword research για προϊόντα και μάρκες",
            "Αναδιάρθρωση περιεχομένου για καλύτερη ορατότητα στις αναζήτησεις"
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
            "Αναδιάρθρωση περιεχομένου για καλύτερη ορατότητα στις αναζήτησεις"
        ],
        tools: ["Google Analytics", "Hotjar", "Keyword Research", "Βελτιστοποίηση Περιεχομένου", "Canva"]
    },
    {
        name: "Inventory Sync",
        level: "Εξειδικευμένο",
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
    ],
    en: [
    {
        name: "Excel",
        level: "Expert",
        experience: "5+ years of experience",
        certification: "ECDL Expert (EL200638866KK)",
        description: "Daily use for price management and data analysis at Pharm24.gr",
        achievements: [
            "Creating pivot tables to analyze prices of 20,000+ products",
            "Automating price lists with lookup functions",
            "Weekly reporting for price comparisons and margins",
            "Integrating Excel data with the Prisma Win ERP system"
        ],
        tools: ["Pivot Tables", "VLOOKUP/XLOOKUP", "Data Validation", "Conditional Formatting", "Macros"]
    },
    {
        name: "Entersoft",
        level: "Advanced",
        experience: "3+ years of experience",
        description: "Integration with the e-shop for stock and pricing updates",
        achievements: [
            "Managing inventory sync between physical stores and the e-shop",
            "Creating new codes and managing medicine/parapharmaceutical codes",
            "Updating prices on the e-shop based on supplier price lists",
            "Real-time stock monitoring"
        ],
        tools: ["Bulk Record Editing", "Price Synchronization", "Product Coding", "Stock Monitoring"]
    },
	{
        name: "Prisma Win (Megasoft)",
        level: "Advanced",
        experience: "8+ years of experience",
        description: "Stock, invoicing, customer accounts",
        achievements: [
            "Inventory management",
            "Issuing documents",
            "Customer accounts",
            "Statistics"
        ],
        tools: ["Inventory Management", "Customer Accounts", "Document Issuing", "Sales Statistics"]
    },
    {
        name: "Photoshop & Lightroom",
        level: "Intermediate",
        experience: "3+ years of experience",
        description: "Basic image editing for the e-shop",
        achievements: [
            "Soft editing of product photos",
            "Creating product badges",
            "Creating banners",
            "Photographing products and editing the photos"
        ],
        tools: ["Scripts", "Badges", "Background", "File types"]
    },
	//  E-commerce skills
   {
        name: "Product Management",
        level: "Expert",
        experience: "2+ years of experience",
        description: "20,000+ products at Pharm24.gr, team coordination",
        achievements: [
            "Listing and enriching 20,000+ pharmaceutical products",
            "Quality control processes for product information accuracy",
            "Coordinating a 3-person content team",
            "Product categorization and attribute management"
        ],
        tools: ["Product Cataloging", "Quality Assurance", "Team Management", "Data Validation"]
    },
   {
        name: "Price Management",
        level: "Expert",
        experience: "2+ years of experience",
        description: "Weekly price updates, enabling/disabling discount plans",
        achievements: [
            "Weekly price-list updates from 50+ suppliers",
            "Promotional campaign setup and monitoring",
            "Discount policy management for gift/sample programs",
            "Price comparison analysis for competitive positioning"
        ],
        tools: ["Price Monitoring", "Promotional Campaigns", "Discount Management", "Competitor Analysis"]
    },
	{
        name: "Content Strategy",
        level: "Advanced",
        experience: "2+ years of experience",
        description: "Restructuring the e-shop presentation of dietary supplements, SEO optimization",
        achievements: [
            "Reworking brand pages for strategic partners",
            "Improving product descriptions for SEO and conversions",
            "Content compliance with pharmaceutical regulations",
            "Brand storytelling and product positioning"
        ],
        tools: ["Content Writing", "Brand Management", "SEO Content", "Compliance Writing"]
    },
	{
        name: "SEO Strategy",
        level: "Expert",
        experience: "2+ years of experience",
        description: "500%+ increase in views for Pharm24.gr supplements",
        achievements: [
            "On-page optimization for 4 core supplement brands",
            "Meta descriptions and title tags optimization",
            "Keyword research for products and brands",
            "Restructuring content for better search visibility"
        ],
        tools: ["On-page SEO", "Meta Tags", "Keyword Research", "Content Optimization", "Semrush", "Google Search Console"]
    },
	{
        name: "Marketing Strategy",
        level: "Intermediate",
        experience: "2+ years of experience",
        description: "Implementing the marketing plan at Pharm24.gr",
        achievements: [
            "Gift and sample strategy",
            "Product presentation and promotion",
            "Competition monitoring",
            "Restructuring content for better search visibility"
        ],
        tools: ["Google Analytics", "Hotjar", "Keyword Research", "Content Optimization", "Canva"]
    },
    {
        name: "Inventory Sync",
        level: "Expert",
        experience: "2+ years of experience",
        description: "Synchronizing physical stores and the e-shop",
        achievements: [
            "Real-time inventory synchronization across channels",
            "Stock monitoring for medicines with expiry dates",
            "Low-stock alert system",
            "Multi-location inventory management"
        ],
        tools: ["ERP Integration", "Stock Monitoring", "Multi-channel Sync", "Inventory Alerts"]
    },
    {
        name: "Team Leadership",
        level: "Advanced",
        experience: "1+ year of experience",
        description: "Leading a 3-person team for product entry on the e-shop",
        achievements: [
            "Managing and coordinating a 3-person content team",
            "Assigning tasks and managing priorities",
            "Daily quality control and performance monitoring",
            "Training new members on entering new products"
        ],
        tools: ["Team Coordination", "Task Management", "Quality Control", "Training & Development", "Clockify"]
    },
    {
        name: "Project Management",
        level: "Intermediate",
        experience: "3+ years of experience",
        description: "Store operations, product launches, system implementation",
        achievements: [
            "Store setup and operations management for a delicatessen",
            "Coordinating new product launches",
            "Implementing systems for POS, inventory, weighing and invoicing",
            "Managing supplier relationships"
        ],
        tools: ["Resource Management", "Schedule Management", "Stakeholder Updates", "Process Design"]
    },
    {
        name: "Process Optimization",
        level: "Intermediate",
        experience: "5+ years of experience",
        description: "Streamlining receiving/shipping processes, automating repetitive tasks, cost-effective solutions",
        achievements: [
            "Identifying critical processes that need improvement",
            "Workflow mapping",
            "Minimizing cycle time (faster turnover)",
            "Establishing quality standards for content accuracy"
        ],
        tools: ["Process Analysis", "Quality Standards", "Workflow Design", "Efficiency Optimization"]
    },
    {
        name: "Delegation & Task Assignment",
        level: "Advanced",
        experience: "",
        description: "Motivating and boosting performance, creating a positive work environment, effective resource allocation",
        achievements: [
            "Priority Management",
            "Performance Monitoring",
            "Training",
            "Distributing tasks according to each member's skills",
			"Analyzing performance data (using tools such as Clockify)",
			"Assigning deadlines and deliverables"
        ],
        tools: ["Professional Writing", "Customer Communication", "Content Creation", "Documentation"]
    },
	// Languages
	{
        name: "Greek",
        level: "Native",
        experience: "",
        description: "Professional language of communication, content creation",
        achievements: [
            "Professional content writing for parapharmaceutical products",
            "Customer communication and support",
            "Product descriptions and advertising copy",
            "Documentation"
        ],
        tools: ["Professional Writing", "Customer Communication", "Content Creation", "Documentation"]
    },
    {
        name: "English",
        level: "Intermediate (B2 Certified - Good command)",
        experience: "State Certificate of Language Proficiency - Registry No.: KB/16028",
        description: "Professional language of communication, content creation",
        achievements: [
            "Communicating with international suppliers of pharmaceutical and parapharmaceutical products",
            "Reading and applying technical manuals",
            "Online research for product information and trends",
            "Writing English-language product descriptions for premium international brands"
        ],
        tools: ["Professional Communication", "Technical Reading", "Research Skills", "Documentation"]
    }
    ]
};
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
        const open = this.hamburger?.classList.toggle('active');
        this.navMenu?.classList.toggle('active');
        this.hamburger?.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    closeMobileMenu() {
        this.hamburger?.classList.remove('active');
        this.navMenu?.classList.remove('active');
        this.hamburger?.setAttribute('aria-expanded', 'false');
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
        // initProfilePulse() removed: the periodic scale transform on the avatar
        // forced the photo into a low-res compositing layer (blurry on hi-DPI screens)
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
        const avatar = document.querySelector('.profile-avatar');
        if (!avatar) return;
        this.pulseInterval = setInterval(() => {
            avatar.classList.add('animate-pulse');
            setTimeout(() => avatar.classList.remove('animate-pulse'), 2000);
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
                title: document.title,
                text: t('shareText'),
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
                .then(() => this.showToast(t('copied')))
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
            this.showToast(t('copied'));
        } catch (err) {
            this.showToast(t('copyError'));
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
        toast.style.bottom = '80px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.maxWidth = '90vw';
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
        this.closeBtn?.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.closeModal();
            }
        });
        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.closeModal();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.modal && this.modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }
    // Remove any tools section injected by a previous skill modal
    clearInjectedTools() {
        this.modal?.querySelectorAll('.modal-tools').forEach(el => el.remove());
    }
    showExperienceDetails(index) {
        const details = experienceDetails[currentLang()][index];
        if (!details) return;
        this.clearInjectedTools();
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
    const skill = skillDetailsData[currentLang()][index];
    if (!skill) return;
    this.clearInjectedTools();
    document.getElementById('modalTitle').textContent = skill.name;
    document.getElementById('modalCompany').textContent = `${t('level')} ${skill.level}`;
    document.getElementById('modalPeriod').textContent = skill.experience + (skill.certification ? ` • ${skill.certification}` : '');
    document.getElementById('modalDescription').textContent = skill.description;
    const responsibilitiesList = document.getElementById('modalResponsibilities');
    responsibilitiesList.innerHTML = ''; // Καθαρισμός όλων των παλιών στοιχείων
    const modalContentParent = responsibilitiesList.parentNode;
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
        toolsTitle.textContent = t('toolsTitle');
        toolsTitle.className = 'modal-tools';
        toolsTitle.style.marginTop = 'var(--space-20)';
        modalContentParent.appendChild(toolsTitle);
        const toolsList = document.createElement('div');
        toolsList.className = 'modal-tools';
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
        this.lastFocused = document.activeElement;
        this.modal.style.display = 'block';
        this.modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        this.closeBtn?.focus();
    }

    closeModal() {
        this.modal.style.display = 'none';
        this.modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
        this.lastFocused?.focus?.();
    }
}
// Contact form manager
class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.successMessage = document.getElementById('successMessage');
        console.log('ContactFormManager initialized');
        this.init();
    }

    init() {
        this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted');

        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        if (!this.validateForm(data)) {
            return;
        }

        this.simulateSubmission();
    }

    validateForm(data) {
        const { name, email, subject, message } = data;

        if (!name.trim()) {
            this.showError(t('enterName'));
            return false;
        }
        if (!email.trim() || !this.isValidEmail(email)) {
            this.showError(t('validEmail'));
            return false;
        }
        if (!subject.trim()) {
            this.showError(t('enterSubject'));
            return false;
        }
        if (!message.trim()) {
            this.showError(t('enterMessage'));
            return false;
        }

        // ✅ Έλεγχος reCAPTCHA
        if (typeof window.grecaptcha === 'undefined' || typeof window.grecaptcha.getResponse !== 'function') {
            this.showError(t('captchaLoading'));
            return false;
        }
        const token = window.grecaptcha.getResponse();
        if (!token || token.length === 0) {
            this.showError(t('captchaComplete'));
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showError(message) {
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
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 3000);
    }

    simulateSubmission() {
    const errorDiv = this.form.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }

    // Στέλνε στο Formspree
    const formData = new FormData(this.form);

    fetch('https://formspree.io/f/mvgvbwno', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            this.successMessage.style.display = 'block';
            this.form.reset();
            if (window.grecaptcha) window.grecaptcha.reset();

            setTimeout(() => {
                this.successMessage.style.display = 'none';
            }, 3000);
        } else {
            this.showError(t('sendError'));
            if (window.grecaptcha) window.grecaptcha.reset();
        }
    })
    .catch(error => {
        this.showError(t('sendErrorShort'));
        console.error(error);
    });
}
}

// Αρχικοποίηση
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ContactFormManager();
    });
} else {
    new ContactFormManager();
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
        // Toggle a class instead of inline colors so dark-mode CSS can take over
        this.navbar?.classList.toggle('scrolled', window.scrollY > 50);
    }
}
// Theme (light/dark) manager
class ThemeManager {
    constructor() {
        this.root = document.documentElement;
        this.btn = document.getElementById('themeToggle');
        this.icon = document.getElementById('themeIcon');
        this.init();
    }
    init() {
        this.updateIcon();
        this.btn?.addEventListener('click', () => this.toggle());
    }
    current() {
        return this.root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }
    toggle() {
        const next = this.current() === 'dark' ? 'light' : 'dark';
        this.root.setAttribute('data-theme', next);
        try { localStorage.setItem('cv-theme', next); } catch (e) {}
        this.updateIcon();
    }
    updateIcon() {
        if (!this.icon) return;
        this.icon.innerHTML = this.current() === 'dark'
            ? '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'
            : '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>';
    }
}
// Language (Greek / English) manager
class LanguageManager {
    constructor() {
        this.root = document.documentElement;
        this.btn = document.getElementById('langToggle');
        this.label = document.getElementById('langToggleLabel');
        let stored = null;
        try { stored = localStorage.getItem('cv-lang'); } catch (e) {}
        this.lang = (stored === 'en' || stored === 'el') ? stored : 'el';
        this.captureOriginals();
        this.init();
    }
    // Snapshot the original (Greek) content so we can switch back to it
    captureOriginals() {
        document.querySelectorAll('[data-en]').forEach(el => {
            if (el.dataset.el === undefined) el.dataset.el = el.innerHTML;
        });
        document.querySelectorAll('[data-en-aria]').forEach(el => {
            if (el.dataset.elAria === undefined) el.dataset.elAria = el.getAttribute('aria-label') || '';
        });
        document.querySelectorAll('[data-en-title]').forEach(el => {
            if (el.dataset.elTitle === undefined) el.dataset.elTitle = el.getAttribute('title') || '';
        });
    }
    init() {
        this.apply(this.lang);
        this.btn?.addEventListener('click', () => this.toggle());
    }
    current() { return this.lang; }
    toggle() {
        this.apply(this.lang === 'el' ? 'en' : 'el');
    }
    apply(lang) {
        this.lang = lang;
        try { localStorage.setItem('cv-lang', lang); } catch (e) {}
        this.root.setAttribute('lang', lang);
        const en = lang === 'en';
        // innerHTML overrides
        document.querySelectorAll('[data-en]').forEach(el => {
            el.innerHTML = en ? el.dataset.en : el.dataset.el;
        });
        // aria-label overrides
        document.querySelectorAll('[data-en-aria]').forEach(el => {
            el.setAttribute('aria-label', en ? el.dataset.enAria : el.dataset.elAria);
        });
        // title overrides
        document.querySelectorAll('[data-en-title]').forEach(el => {
            el.setAttribute('title', en ? el.dataset.enTitle : el.dataset.elTitle);
        });
        // Document title
        document.title = en
            ? 'Konstantinos Kalliakoudis - CV & Portfolio'
            : 'Καλλιακούδης Κωνσταντίνος - CV & Portfolio';
        // Toggle button shows the language you can switch TO
        if (this.label) this.label.textContent = en ? 'ΕΛ' : 'EN';
        if (this.btn) this.btn.setAttribute('aria-label', en ? 'Αλλαγή σε Ελληνικά' : 'Switch to English');
    }
}
// Main application controller
class CVApplication {
    constructor() {
        this.languageManager = new LanguageManager();
        this.themeManager = new ThemeManager();
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
        this.enableCardKeyboardAccess();
    }
    enableCardKeyboardAccess() {
        // Make the click-only experience/skill cards reachable & operable by keyboard
        const cards = document.querySelectorAll('.timeline-content, .skill-badge');
        cards.forEach(card => {
            if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
            if (!card.hasAttribute('role')) card.setAttribute('role', 'button');
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });
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
