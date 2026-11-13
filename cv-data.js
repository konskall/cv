// Όλο το περιεχόμενο του site και του βιογραφικού, σε ελληνικά (el) και αγγλικά (en).
// Για να αλλάξεις κείμενο, θέση εργασίας ή έργο, αλλάζεις μόνο αυτό το αρχείο.
// Μετά από αλλαγή στο βιογραφικό θέλουν ανανέωση και τα δύο PDF: άνοιξε τη σελίδα
// στον Chrome, πάτησε Ctrl+P και «Αποθήκευση ως PDF» (μία φορά σε κάθε γλώσσα).
window.CV_DATA = {
  // Αρχεία PDF που κατεβάζει το κουμπί λήψης, ανά γλώσσα
  pdf: {
    el: 'Kalliakoudis_Konstantinos_CV.pdf',
    en: 'Kalliakoudis_Konstantinos_CV_EN.pdf'
  },
  contact: {
    phone: '+30 698 303 3004',
    tel: '+306983033004',
    email: 'konskall@gmail.com',
    linkedin: 'linkedin.com/in/konstantinos-kalliakoudis-902b90103',
    linkedinUrl: 'https://www.linkedin.com/in/konstantinos-kalliakoudis-902b90103',
    site: 'konskall.github.io/cv',
    siteUrl: 'https://konskall.github.io/cv/'
  },

  el: {
    docTitle: 'Κωνσταντίνος Καλλιακούδης - CV & Portfolio',
    pdfTitle: 'Κωνσταντίνος Καλλιακούδης - Βιογραφικό',
    name: 'Κωνσταντίνος Καλλιακούδης',
    role: 'Product Content Coordinator, E-commerce',
    city: 'Σπάρτη Λακωνίας',
    photoAlt: 'Φωτογραφία του Κωνσταντίνου Καλλιακούδη',
    labels: {
      summary: 'Προφίλ',
      highlights: 'Βασικά Επιτεύγματα',
      experience: 'Επαγγελματική Εμπειρία',
      education: 'Εκπαίδευση',
      training: 'Πιστοποιήσεις & Επιμόρφωση',
      skills: 'Δεξιότητες',
      languages: 'Γλώσσες',
      projects: 'Προσωπικά Έργα',
      extra: 'Πρόσθετα Στοιχεία',
      page: 'Σελίδα',
      of: 'από'
    },
    summary: 'Product Content Coordinator σε online φαρμακείο με 20.000+ κωδικούς προϊόντων. Συντονίζω ομάδα 3 ατόμων για την καταχώρηση προϊόντων, τις ενημερώσεις τιμών, τα εκπτωτικά πλάνα και το SEO on-page, με Entersoft ERP και Excel. Πτυχιούχος Εφαρμοσμένης Πληροφορικής με 15+ χρόνια εμπειρίας σε e-commerce, λιανική, τρόφιμα και μεταφορές. Σχεδιάζω και δημιουργώ δικές μου web εφαρμογές.',
    // Κάθε επίτευγμα: [έντονη αρχή, υπόλοιπη πρόταση]
    highlights: [
      ['Σημαντική αύξηση', 'προβολών και αγορών στα συμπληρώματα διατροφής του Pharm24.gr, μετά την αναμόρφωση του προϊοντικού περιεχομένου.'],
      ['20.000+', 'κωδικοί προϊόντων στο e-shop, με καθημερινό έλεγχο περιεχομένου και εβδομαδιαίες ενημερώσεις τιμών.'],
      ['3 άτομα', 'στην ομάδα περιεχομένου που συντονίζω, μετά από προαγωγή σε 16 μήνες από τη θέση Data Entry Agent.']
    ],
    jobs: [
      {
        title: 'Product Content Coordinator',
        org: 'Pharm24.gr, Σπάρτη Λακωνίας',
        date: '09/2024 – σήμερα',
        bullets: [
          'Συντονίζω ομάδα 3 ατόμων και κατανέμω τις αρμοδιότητες καταχώρησης προϊόντων.',
          'Ελέγχω και διορθώνω καθημερινά τα καταχωρημένα προϊόντα σε e-shop με 20.000+ κωδικούς.',
          'Ενημερώνω τιμές βάσει τιμοκαταλόγων και ενεργοποιώ ή απενεργοποιώ τα πλάνα εκπτώσεων.',
          'Διαχειρίζομαι την πολιτική δώρων και δειγμάτων στα καλάθια.',
          'Εφαρμόζω τη στρατηγική SEO στο προϊοντικό περιεχόμενο.'
        ]
      },
      {
        title: 'Data Entry Agent',
        org: 'Pharm24.gr, Σπάρτη Λακωνίας',
        date: '05/2023 – 09/2024',
        bullets: [
          'Αναμόρφωσα το περιεχόμενο των brands συμπληρωμάτων διατροφής, με σημαντική αύξηση προβολών και αγορών.',
          'Δημιούργησα κωδικούς προϊόντων για φάρμακα και παραφάρμακα.',
          'Βελτιστοποίησα το προϊοντικό περιεχόμενο για τις μηχανές αναζήτησης (SEO).'
        ]
      },
      {
        title: 'Store Manager',
        org: 'Καλλιακούδης Delicatessen, Σπάρτη',
        date: '09/2018 – 05/2023',
        bullets: [
          'Είχα την πλήρη διαχείριση καταστήματος delicatessen με τυριά και παραδοσιακά προϊόντα, μαζί με το ταμείο.',
          'Διαχειρίστηκα απόθεμα, παραγγελίες, παραλαβές και προμηθευτές.',
          'Εξυπηρέτησα πελάτες και αναζήτησα νέους, παρακολουθώντας τον κλάδο και τον ανταγωνισμό.'
        ]
      },
      {
        title: 'Dairy Zone Coordinator',
        org: 'Καλλιακούδης Raw Milk Trade',
        date: '12/2014 – 08/2018',
        bullets: [
          'Οργάνωσα τη ζώνη συλλογής γάλακτος: προγραμματισμός, δρομολόγια και σημεία συλλογής.',
          'Είχα την αποθήκευση και τον ποιοτικό έλεγχο του νωπού γάλακτος.',
          'Έκλεισα συμφωνίες, έλαβα παραγγελίες και εξέδωσα παραστατικά αγορών και πωλήσεων.',
          'Διαχειρίστηκα τα δεδομένα ΕΛΟΓΑΚ.'
        ]
      },
      {
        title: 'HACCP Supervisor',
        org: 'Γεράσιμος Καλλιακούδης & Σία ΟΕ',
        date: '12/2012 – 12/2014',
        bullets: [
          'Διαχειρίστηκα πιστοποιημένο σύστημα ασφάλειας τροφίμων HACCP.',
          'Εκπαίδευσα το προσωπικό και παρακολούθησα τα κρίσιμα σημεία ελέγχου.',
          'Διασφάλισα τη συμμόρφωση με τα πρότυπα υγιεινής και τήρησα τα αρχεία.'
        ]
      },
      {
        title: 'Business Owner',
        org: 'Kalliakoudis K. Trans',
        date: '08/2010 – 11/2012',
        bullets: [
          'Λειτούργησα μεταφορική εταιρεία εμπορευμάτων με άδεια Δημοσίας Χρήσης και δρομολόγια εντός Ελλάδας.',
          'Συνεργάστηκα με κόμβους logistics, αποθήκες και εργοστάσια.'
        ]
      }
    ],
    education: [
      {
        title: 'Πτυχίο Εφαρμοσμένης Πληροφορικής στη Διοίκηση & τα Χρηματοοικονομικά',
        org: 'Πανεπιστήμιο Πατρών',
        date: '2006 – 2010',
        note: 'Πτυχιακή εργασία: Χρηματιστήριο Παραγώγων Αθηνών και σύγχρονα χρηματοοικονομικά προϊόντα.'
      }
    ],
    training: [
      { title: 'AI Automations & Ηλεκτρονικό Εμπόριο', org: 'Οικονομικό Πανεπιστήμιο Αθηνών, GR.EC.A.', date: '2026' },
      { title: 'Executive eCommerce Certification', org: 'Οικονομικό Πανεπιστήμιο Αθηνών, GR.EC.A.', date: '2026' },
      { title: 'Social Media Marketing', org: 'UCert', date: '2026' },
      { title: 'SEO Academy', org: 'Ελληνοαμερικανική Ένωση (HAU)', date: '2025' },
      { title: 'ECDL Expert', org: 'ECDL Foundation, αρ. EL200638866KK', date: '' }
    ],
    skills: [
      ['E-commerce', ['Product Content Management', 'Price Management', 'Εκπτωτικά πλάνα & προωθήσεις', 'Content Strategy', 'SEO on-page', 'Inventory Sync', 'Marketing Strategy']],
      ['Συστήματα & εργαλεία', ['Entersoft ERP', 'Prisma Win (Megasoft)', 'Microsoft Excel (Pivot Tables, XLOOKUP, Macros)', 'Adobe Photoshop', 'Adobe Lightroom']],
      ['Διοίκηση', ['Συντονισμός ομάδας', 'Ανάθεση αρμοδιοτήτων', 'Project Management', 'Βελτιστοποίηση διαδικασιών']]
    ],
    languages: [
      ['Ελληνικά', 'Μητρική γλώσσα'],
      ['Αγγλικά', 'B2, Κρατικό Πιστοποιητικό Γλωσσομάθειας']
    ],
    projects: [
      { name: 'Mybnbmanager', desc: 'Πλατφόρμα διαχείρισης βραχυχρόνιων ενοικιάσεων.', url: 'mybnbmanager.gr', href: 'https://www.mybnbmanager.gr/' },
      { name: 'Aoraton Chat', desc: 'Κρυπτογραφημένη συνομιλία σε πραγματικό χρόνο, με ιδιωτικά δωμάτια.', url: 'aoraton.com', href: 'https://aoraton.com/' },
      { name: 'SpriteHunter', desc: 'Πρόγνωση Red Sprites με ζωντανούς κεραυνούς EUMETSAT.', url: 'spritehunter.vercel.app', href: 'https://spritehunter.vercel.app/' },
      { name: 'AURA', desc: 'Ελληνόφωνος βοηθός AI για συσκευή ESP32-S3.', url: 'github.com/konskall/aura', href: 'https://github.com/konskall/aura' },
      { name: 'SnapTour', desc: 'Αναγνώριση μνημείων με AI και ηχητικές ξεναγήσεις.', url: 'konskall.github.io/snaptour', href: 'https://konskall.github.io/snaptour/index.html' }
    ],
    extra: ['Εκπληρωμένες στρατιωτικές υποχρεώσεις', 'Επαγγελματικό δίπλωμα οδήγησης, κατηγορία Γ']
  },

  en: {
    docTitle: 'Konstantinos Kalliakoudis - CV & Portfolio',
    pdfTitle: 'Konstantinos Kalliakoudis - CV',
    name: 'Konstantinos Kalliakoudis',
    role: 'Product Content Coordinator, E-commerce',
    city: 'Sparta, Greece',
    photoAlt: 'Photo of Konstantinos Kalliakoudis',
    labels: {
      summary: 'Profile',
      highlights: 'Key Achievements',
      experience: 'Work Experience',
      education: 'Education',
      training: 'Certifications & Training',
      skills: 'Skills',
      languages: 'Languages',
      projects: 'Personal Projects',
      extra: 'Additional Information',
      page: 'Page',
      of: 'of'
    },
    summary: 'Product Content Coordinator at an online pharmacy with 20,000+ product codes. Lead a 3-person team responsible for product entry, price updates, discount plans and on-page SEO, using Entersoft ERP and Excel. Applied Informatics graduate with 15+ years of experience across e-commerce, retail, food and transport. Design and build my own web apps.',
    highlights: [
      ['Significant increase', 'in views and purchases for dietary supplements at Pharm24.gr, after reworking the product content.'],
      ['20,000+', 'product codes on the e-shop, with daily content checks and weekly price updates.'],
      ['3 people', 'in the content team I coordinate, after promotion from Data Entry Agent within 16 months.']
    ],
    jobs: [
      {
        title: 'Product Content Coordinator',
        org: 'Pharm24.gr, Sparta, Greece',
        date: '09/2024 – Present',
        bullets: [
          'Lead a 3-person team and assign product-entry responsibilities.',
          'Review and correct product listings daily on an e-shop with 20,000+ product codes.',
          'Update prices from price lists and enable or disable discount plans.',
          'Manage the gift and sample policy in the shopping cart.',
          'Apply the SEO strategy to product content.'
        ]
      },
      {
        title: 'Data Entry Agent',
        org: 'Pharm24.gr, Sparta, Greece',
        date: '05/2023 – 09/2024',
        bullets: [
          'Reworked the content for dietary-supplement brands, significantly increasing views and purchases.',
          'Created product codes for medicines and parapharmaceuticals.',
          'Optimized product content for search engines (SEO).'
        ]
      },
      {
        title: 'Store Manager',
        org: 'Kalliakoudis Delicatessen, Sparta',
        date: '09/2018 – 05/2023',
        bullets: [
          'Ran a delicatessen store selling cheeses and traditional products, including the cash desk.',
          'Managed stock, orders, deliveries and suppliers.',
          'Served customers and sought new ones, while tracking the industry and competitors.'
        ]
      },
      {
        title: 'Dairy Zone Coordinator',
        org: 'Kalliakoudis Raw Milk Trade',
        date: '12/2014 – 08/2018',
        bullets: [
          'Organized the milk collection zone: scheduling, routes and collection points.',
          'Handled storage and quality control of raw milk.',
          'Closed deals, took orders and issued purchase and sales documents.',
          'Managed ELOGAK data.'
        ]
      },
      {
        title: 'HACCP Supervisor',
        org: 'Gerasimos Kalliakoudis & Co.',
        date: '12/2012 – 12/2014',
        bullets: [
          'Managed a certified HACCP food safety system.',
          'Trained staff and monitored critical control points.',
          'Ensured compliance with hygiene standards and kept records.'
        ]
      },
      {
        title: 'Business Owner',
        org: 'Kalliakoudis K. Trans',
        date: '08/2010 – 11/2012',
        bullets: [
          'Ran a freight transport company with a Public Use license and routes across Greece.',
          'Worked with logistics hubs, warehouses and factories.'
        ]
      }
    ],
    education: [
      {
        title: "Bachelor's Degree in Applied Informatics in Management & Finance",
        org: 'University of Patras',
        date: '2006 – 2010',
        note: 'Thesis: The Athens Derivatives Exchange and modern financial products.'
      }
    ],
    training: [
      { title: 'AI Automations & E-commerce', org: 'Athens University of Economics and Business, GR.EC.A.', date: '2026' },
      { title: 'Executive eCommerce Certification', org: 'Athens University of Economics and Business, GR.EC.A.', date: '2026' },
      { title: 'Social Media Marketing', org: 'UCert', date: '2026' },
      { title: 'SEO Academy', org: 'Hellenic American Union (HAU)', date: '2025' },
      { title: 'ECDL Expert', org: 'ECDL Foundation, no. EL200638866KK', date: '' }
    ],
    skills: [
      ['E-commerce', ['Product Content Management', 'Price Management', 'Discount Plans & Promotions', 'Content Strategy', 'On-page SEO', 'Inventory Sync', 'Marketing Strategy']],
      ['Systems & tools', ['Entersoft ERP', 'Prisma Win (Megasoft)', 'Microsoft Excel (Pivot Tables, XLOOKUP, Macros)', 'Adobe Photoshop', 'Adobe Lightroom']],
      ['Management', ['Team Leadership', 'Task Delegation', 'Project Management', 'Process Optimization']]
    ],
    languages: [
      ['Greek', 'Native'],
      ['English', 'B2, Greek State Certificate of Language Proficiency']
    ],
    projects: [
      { name: 'Mybnbmanager', desc: 'Short-term rental management platform.', url: 'mybnbmanager.gr', href: 'https://www.mybnbmanager.gr/' },
      { name: 'Aoraton Chat', desc: 'Encrypted real-time chat with private rooms.', url: 'aoraton.com', href: 'https://aoraton.com/' },
      { name: 'SpriteHunter', desc: 'Red Sprite forecasts with live EUMETSAT lightning.', url: 'spritehunter.vercel.app', href: 'https://spritehunter.vercel.app/' },
      { name: 'AURA', desc: 'Greek-first AI assistant for an ESP32-S3 device.', url: 'github.com/konskall/aura', href: 'https://github.com/konskall/aura' },
      { name: 'SnapTour', desc: 'AI landmark recognition with audio tours.', url: 'konskall.github.io/snaptour', href: 'https://konskall.github.io/snaptour/index.html' }
    ],
    extra: ['Military service completed', 'Professional driving licence, category C']
  }
};

// Φόρμα επικοινωνίας: αποστολή μέσω Formspree και έλεγχος reCAPTCHA v2 (Checkbox).
// Αν το widget εμφανίσει "Invalid site key", άδειασε το recaptchaKey για να μη
// κολλήσει η φόρμα: χωρίς κλειδί, η φόρμα στέλνει κανονικά χωρίς captcha.
window.CV_DATA.form = {
  endpoint: 'https://formspree.io/f/mvgvbwno',
  recaptchaKey: '6LeSfJgtAAAAANvE9CzqEFcvbo85A7rBViVlFQMf'
};
window.CV_DATA.interests = ['Web Development', 'Vibe Coding', 'Hardware Building', 'Ubuntu/Linux', 'E-commerce Optimization', 'Digital Marketing', 'SEO', 'Photography', 'Hiking', 'Astronomy', 'Music', 'Art', 'Cinema', 'Food and Beverage'];

Object.assign(window.CV_DATA.el, {
  ui: {
    logo: 'Κ. Καλλιακούδης',
    skip: 'Μετάβαση στο περιεχόμενο',
    navAria: 'Κύρια πλοήγηση',
    navCv: 'Βιογραφικό',
    navContact: 'Επικοινωνία',
    downloadCv: 'Λήψη CV',
    pdfAria: 'Λήψη βιογραφικού σε PDF',
    langAria: 'Switch to English',
    themeAria: 'Εναλλαγή φωτεινού / σκοτεινού θέματος',
    menuAria: 'Άνοιγμα μενού',
    portfolioSub: 'Προσωπικά έργα & websites που έχω δημιουργήσει',
    soon: 'Σύντομα διαθέσιμο',
    opensNew: 'ανοίγει σε νέα καρτέλα',
    contactTitle: 'Επικοινωνία',
    contactSub: 'Στείλτε μου μήνυμα ή επικοινωνήστε μαζί μου απευθείας',
    sendMessage: 'Στείλτε Μήνυμα',
    fName: 'Όνομα *',
    fSubject: 'Θέμα *',
    fMessage: 'Μήνυμα *',
    send: 'Αποστολή Μηνύματος',
    sending: 'Αποστολή…',
    details: 'Στοιχεία Επικοινωνίας',
    phone: 'Τηλέφωνο',
    location: 'Τοποθεσία',
    share: 'Κοινοποίηση',
    interests: 'Ενδιαφέροντα',
    top: 'Πάνω',
    footer: 'Κωνσταντίνος Καλλιακούδης',
    enterName: 'Παρακαλώ εισάγετε το όνομά σας',
    validEmail: 'Παρακαλώ εισάγετε έγκυρο email',
    enterSubject: 'Παρακαλώ εισάγετε θέμα',
    enterMessage: 'Παρακαλώ εισάγετε μήνυμα',
    captchaComplete: 'Παρακαλώ ολοκληρώστε το captcha!',
    sendError: 'Σφάλμα κατά την αποστολή. Δοκιμάστε ξανά.',
    sent: 'Το μήνυμά σας στάλθηκε επιτυχώς!',
    shareText: 'Δείτε το CV μου',
    copied: 'Ο σύνδεσμος αντιγράφηκε',
    copyError: 'Σφάλμα αντιγραφής'
  },
  portfolio: [
    { name: 'Mybnbmanager', type: 'Tourism & Real Estate', desc: 'Πλατφόρμα διαχείρισης βραχυχρόνιων ενοικιάσεων με γνώση της αγοράς και τεχνολογία αιχμής.', url: 'mybnbmanager.gr', href: 'https://www.mybnbmanager.gr/', img: 'img/portfolio/mybnbmanager.webp' },
    { name: 'Aoraton Chat App', type: 'Business & Communication', desc: 'Κρυπτογραφημένη συνομιλία σε πραγματικό χρόνο, με ιδιωτικά δωμάτια που βασίζονται σε PIN.', url: 'aoraton.com', href: 'https://aoraton.com/', img: 'img/portfolio/aoraton.webp' },
    { name: 'SpriteHunter', type: 'Science & Photography', desc: 'Δωρεάν παρατηρητήριο Red Sprites & TLE με κεραυνούς EUMETSAT σε πραγματικό χρόνο και πρόγνωση καταιγίδων.', url: 'spritehunter.vercel.app', href: 'https://spritehunter.vercel.app/', img: 'img/portfolio/spritehunter.webp' },
    { name: 'AURA', type: 'AI & IoT', desc: 'Ελληνόφωνος βοηθός AI για συσκευή ESP32-S3 με οθόνη AMOLED. Συνομιλεί με φωνή & κείμενο.', url: 'github.com/konskall/aura', href: 'https://github.com/konskall/aura', img: 'img/portfolio/aura.webp' },
    { name: 'SnapTour', type: 'Tourism & Information', desc: 'Εφαρμογή AI αναγνώρισης μνημείων με ηχητικές ξεναγήσεις, σημεία ενδιαφέροντος και εικονικό ξεναγό.', url: 'konskall.github.io/snaptour', href: 'https://konskall.github.io/snaptour/index.html', img: 'img/portfolio/snaptour.webp' },
    { name: 'Smart PDF Compressor', type: 'Tools & Utilities', desc: 'Δωρεάν online εφαρμογή για συμπίεση αρχείων PDF με 3 επιλογές συμπίεσης.', url: 'konskall.github.io/smartpdfcompressor', href: 'https://konskall.github.io/smartpdfcompressor/', img: 'img/portfolio/pdfcompressor.webp' },
    { name: 'Alien Invaders - Space War', type: 'Gaming & Fun', desc: 'Παιχνίδι arcade vintage style διαστημικής μάχης με την εξωγήινη κολεκτίβα Xenophage.', url: 'konskall.github.io/alieninvaders', href: 'https://konskall.github.io/alieninvaders/', img: 'img/portfolio/alieninvaders.webp' },
    { name: 'Delicatessen Store Business Website', type: 'Business & E-commerce', desc: 'Επαγγελματικό website καταστήματος delicatessen με κατάλογο προϊόντων & στοιχεία επικοινωνίας.', url: 'delibykaliakoudis.gr', href: 'https://www.delibykaliakoudis.gr/', img: 'img/portfolio/deli.webp' },
    { name: 'Traditional Dairy Product Production Business', type: 'Business & Production', desc: 'Ιστοσελίδα παρουσίασης βιοτεχνίας παραγωγής παραδοσιακών τυροκομικών προϊόντων.', url: 'gerkaliakoudis.gr', href: 'https://www.gerkaliakoudis.gr/', img: 'img/portfolio/dairy.webp' },
    // soon: true = το site δεν είναι ακόμα online, άρα η κάρτα δεν είναι σύνδεσμος
    { name: 'Eikonologio.gr', type: 'Photography & Hobby', desc: 'Ένα οπτικό ημερολόγιο που συνδυάζει εικόνες με σκέψεις & προβληματισμούς.', url: 'eikonologio.gr', href: 'https://eikonologio.gr/', img: 'img/portfolio/eikonologio.webp', soon: true }
  ]
});

Object.assign(window.CV_DATA.en, {
  ui: {
    logo: 'K. Kalliakoudis',
    skip: 'Skip to content',
    navAria: 'Main navigation',
    navCv: 'CV',
    navContact: 'Contact',
    downloadCv: 'Download CV',
    pdfAria: 'Download CV as PDF',
    langAria: 'Αλλαγή σε Ελληνικά',
    themeAria: 'Toggle light / dark theme',
    menuAria: 'Open menu',
    portfolioSub: 'Personal projects & websites I have created',
    soon: 'Coming soon',
    opensNew: 'opens in a new tab',
    contactTitle: 'Contact',
    contactSub: 'Send me a message or contact me directly',
    sendMessage: 'Send a Message',
    fName: 'Name *',
    fSubject: 'Subject *',
    fMessage: 'Message *',
    send: 'Send Message',
    sending: 'Sending…',
    details: 'Contact Details',
    phone: 'Phone',
    location: 'Location',
    share: 'Share',
    interests: 'Interests',
    top: 'Top',
    footer: 'Konstantinos Kalliakoudis',
    enterName: 'Please enter your name',
    validEmail: 'Please enter a valid email',
    enterSubject: 'Please enter a subject',
    enterMessage: 'Please enter a message',
    captchaComplete: 'Please complete the captcha!',
    sendError: 'Error while sending. Please try again.',
    sent: 'Your message was sent successfully!',
    shareText: 'Check out my CV',
    copied: 'Link copied',
    copyError: 'Copy failed'
  },
  portfolio: [
    { name: 'Mybnbmanager', type: 'Tourism & Real Estate', desc: 'A short-term rental management platform that combines market expertise with cutting-edge technology.', url: 'mybnbmanager.gr', href: 'https://www.mybnbmanager.gr/', img: 'img/portfolio/mybnbmanager.webp' },
    { name: 'Aoraton Chat App', type: 'Business & Communication', desc: 'Encrypted real-time chat with private, PIN-based rooms.', url: 'aoraton.com', href: 'https://aoraton.com/', img: 'img/portfolio/aoraton.webp' },
    { name: 'SpriteHunter', type: 'Science & Photography', desc: 'A free Red Sprite & TLE observatory with real-time EUMETSAT lightning and thunderstorm forecasts.', url: 'spritehunter.vercel.app', href: 'https://spritehunter.vercel.app/', img: 'img/portfolio/spritehunter.webp' },
    { name: 'AURA', type: 'AI & IoT', desc: 'A Greek-first AI companion for an ESP32-S3 device with an AMOLED screen. It talks by voice & text.', url: 'github.com/konskall/aura', href: 'https://github.com/konskall/aura', img: 'img/portfolio/aura.webp' },
    { name: 'SnapTour', type: 'Tourism & Information', desc: 'An AI app for landmark recognition with audio tours, points of interest and a virtual guide.', url: 'konskall.github.io/snaptour', href: 'https://konskall.github.io/snaptour/index.html', img: 'img/portfolio/snaptour.webp' },
    { name: 'Smart PDF Compressor', type: 'Tools & Utilities', desc: 'A free online app for compressing PDF files with three compression options.', url: 'konskall.github.io/smartpdfcompressor', href: 'https://konskall.github.io/smartpdfcompressor/', img: 'img/portfolio/pdfcompressor.webp' },
    { name: 'Alien Invaders - Space War', type: 'Gaming & Fun', desc: 'A vintage-style arcade space-battle game against the alien Xenophage collective.', url: 'konskall.github.io/alieninvaders', href: 'https://konskall.github.io/alieninvaders/', img: 'img/portfolio/alieninvaders.webp' },
    { name: 'Delicatessen Store Business Website', type: 'Business & E-commerce', desc: 'A professional website presenting a delicatessen store with a product catalog & contact details.', url: 'delibykaliakoudis.gr', href: 'https://www.delibykaliakoudis.gr/', img: 'img/portfolio/deli.webp' },
    { name: 'Traditional Dairy Product Production Business', type: 'Business & Production', desc: 'A website presenting an artisan workshop producing traditional dairy & cheese products.', url: 'gerkaliakoudis.gr', href: 'https://www.gerkaliakoudis.gr/', img: 'img/portfolio/dairy.webp' },
    { name: 'Eikonologio.gr', type: 'Photography & Hobby', desc: 'A visual journal combining images with thoughts & reflections.', url: 'eikonologio.gr', href: 'https://eikonologio.gr/', img: 'img/portfolio/eikonologio.webp', soon: true }
  ]
});
