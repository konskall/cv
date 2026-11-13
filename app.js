// Στήνει τη σελίδα από το περιεχόμενο του cv-data.js: τα φύλλα A4 του βιογραφικού,
// τις κάρτες του portfolio και τα κείμενα του site στη γλώσσα που έχει επιλεγεί.
// Επίσης: εναλλαγή γλώσσας και θέματος, μενού κινητού, φόρμα επικοινωνίας με
// reCAPTCHA, κοινοποίηση και κουμπί επιστροφής στην κορυφή.
//
// Κανόνας για το έγγραφο: όλο το κείμενο ρέει σε μία στήλη, με τη σειρά του DOM.
// Ημερομηνίες, ετικέτες και σύνδεσμοι μένουν μέσα στη γραμμή τους και όχι σε
// ξεχωριστές στήλες, γιατί τα συστήματα ελέγχου βιογραφικών (ATS) διαβάζουν τις
// στήλες χώρια και μπερδεύουν τη σειρά.
(function () {
  'use strict';

  const DATA = window.CV_DATA;
  const root = document.documentElement;
  const params = new URLSearchParams(location.search);
  const $ = id => document.getElementById(id);

  // Ποιες ενότητες μπαίνουν σε κάθε σελίδα A4. «exp:0-3» = θέσεις εργασίας 1 έως 4.
  // Αν προστεθεί κείμενο και μια σελίδα ξεχειλίσει, μετακίνησε μια ενότητα στην επόμενη.
  const PAGES = [
    ['head', 'summary', 'highlights', 'exp:0-3'],
    ['expMore:4-5', 'education', 'training', 'skills', 'languages', 'projects', 'extra']
  ];

  const stored = key => { try { return localStorage.getItem(key); } catch (e) { return null; } };
  const store = (key, value) => { try { localStorage.setItem(key, value); } catch (e) { /* storage blocked */ } };

  // ?lang=en και ?theme=dark ανοίγουν τη σελίδα έτσι χωρίς να αλλάζουν την αποθηκευμένη
  // επιλογή. ?photo=0 κρύβει τη φωτογραφία (για PDF χωρίς φωτογραφία).
  let lang = params.get('lang') || stored('cv-lang') || 'el';
  if (lang !== 'en') lang = 'el';
  if (params.get('theme') === 'dark' || params.get('theme') === 'light') root.setAttribute('data-theme', params.get('theme'));
  if (params.get('photo') === '0') root.classList.add('no-photo');

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ui = key => DATA[lang].ui[key];

  /* ---------- Εικονίδια ---------- */
  const ICONS = {
    pin: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    phone: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
    mail: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
  };
  // Τα εικονίδια είναι διανυσματικά σχήματα και όχι χαρακτήρες, άρα δεν μπαίνουν στο κείμενο του PDF
  const icon = name => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${ICONS[name]}"/></svg>`;
  const SUN = '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>';
  const MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';

  /* ---------- Φύλλα βιογραφικού ---------- */
  const SEP = '<span class="sep"> | </span>';
  const ext = 'target="_blank" rel="noopener"';
  // Κείμενο εγγράφου: λέξεις με ενωτικό (e-commerce, on-page) δεν σπάνε στο τέλος της γραμμής,
  // γιατί όποιος διαβάζει το PDF αυτόματα ενώνει τα δύο μισά χωρίς το ενωτικό («ecommerce»)
  const txt = s => esc(s).replace(/[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+/g, word => `<span class="nb">${word}</span>`);
  // Οι τρεις ενότητες κρατούν τα id που είχαν στο παλιό site, για να δουλεύουν οι παλιοί σύνδεσμοι (#experience κ.λπ.)
  const ANCHORS = { exp: 'experience', skills: 'skills', edu: 'education' };
  const section = (cls, title, body) => `<section class="sec sec-${cls}"${ANCHORS[cls] ? ` id="${ANCHORS[cls]}"` : ''}><h2>${esc(title)}</h2>${body}</section>`;

  // «ημερομηνία | οργανισμός», πάντα μέσα στην ίδια γραμμή
  const meta = (cls, org, date) => {
    const parts = [];
    if (date) parts.push(`<span class="${cls}-date">${esc(date)}</span>`);
    parts.push(`<span class="${cls}-org">${esc(org)}</span>`);
    return `<p class="${cls}-meta">${parts.join(SEP)}</p>`;
  };
  const job = j => `<div class="job"><h3 class="job-title">${esc(j.title)}</h3>${meta('job', j.org, j.date)}<ul class="bullets">${j.bullets.map(b => `<li>${txt(b)}</li>`).join('')}</ul></div>`;
  const item = i => `<div class="item"><h3 class="item-title">${esc(i.title)}</h3>${meta('item', i.org, i.date)}${i.note ? `<p class="item-note">${txt(i.note)}</p>` : ''}</div>`;
  const labelled = rows => `<ul class="lines">${rows.map(([k, v]) => `<li><b>${esc(k)}:</b> ${txt(v)}</li>`).join('')}</ul>`;

  const blocks = {
    head(t) {
      const c = DATA.contact;
      return `
        <header class="cv-head">
          <div class="cv-id">
            <h1 class="cv-name">${esc(t.name)}</h1>
            <p class="cv-role">${esc(t.role)}</p>
          </div>
          <ul class="cv-contact">
            <li>${icon('pin')}<span>${esc(t.city)}</span></li>
            <li><a href="tel:${c.tel}">${icon('phone')}<span>${c.phone}</span></a></li>
            <li><a href="mailto:${c.email}">${icon('mail')}<span>${c.email}</span></a></li>
            <li><a href="${c.linkedinUrl}" ${ext}>${icon('linkedin')}<span>${c.linkedin}</span></a></li>
            <li><a href="${c.siteUrl}">${icon('github')}<span>${c.site}</span></a></li>
          </ul>
          <img class="cv-photo" src="img/photo.jpg" width="520" height="520" alt="${esc(t.photoAlt)}" fetchpriority="high" decoding="async">
        </header>`;
    },
    summary: t => section('summary', t.labels.summary, `<p>${txt(t.summary)}</p>`),
    highlights: t => section('highlights', t.labels.highlights,
      `<ul class="facts">${t.highlights.map(([lead, rest]) => `<li><strong>${esc(lead)}</strong> ${txt(rest)}</li>`).join('')}</ul>`),
    exp: (t, a, b) => section('exp', t.labels.experience, t.jobs.slice(a, b + 1).map(job).join('')),
    // συνέχεια της εμπειρίας στην επόμενη σελίδα, χωρίς να επαναλαμβάνεται ο τίτλος
    expMore: (t, a, b) => `<div class="sec sec-exp sec-cont">${t.jobs.slice(a, b + 1).map(job).join('')}</div>`,
    education: t => section('edu', t.labels.education, t.education.map(item).join('')),
    training: t => section('training', t.labels.training,
      `<ul class="lines">${t.training.map(i => `<li><b>${esc(i.title)}</b>, ${esc(i.org)}${i.date ? ', ' + esc(i.date) : ''}</li>`).join('')}</ul>`),
    skills: t => section('skills', t.labels.skills, labelled(t.skills.map(([k, list]) => [k, list.join(', ')]))),
    languages: t => section('languages', t.labels.languages, labelled(t.languages)),
    projects: t => section('projects', t.labels.projects,
      `<ul class="lines projects">${t.projects.map(p =>
        `<li><b>${esc(p.name)}:</b> ${txt(p.desc)} <a class="p-url" href="${p.href}" ${ext}>${esc(p.url)}</a></li>`).join('')}</ul>`),
    extra: t => section('extra', t.labels.extra, `<p class="run">${t.extra.map(esc).join(SEP)}</p>`)
  };

  function renderBlock(t, spec) {
    const [name, range] = spec.split(':');
    if (!range) return blocks[name](t);
    const [a, b] = range.split('-').map(Number);
    return blocks[name](t, a, b);
  }

  function renderSheets() {
    const t = DATA[lang];
    $('sheets').innerHTML = PAGES.map((specs, i) => `
      <article class="page">
        ${specs.map(s => renderBlock(t, s)).join('')}
        <p class="page-foot"><span>${esc(t.name)}</span><span>${esc(t.labels.page)} ${i + 1} ${esc(t.labels.of)} ${PAGES.length}</span></p>
      </article>`).join('');
  }

  /* ---------- Portfolio ---------- */
  function portfolioCard(p) {
    const media = `<img src="${p.img}" alt="" width="800" height="500" loading="lazy" decoding="async">`;
    const body = `
      <div class="pf-body">
        <p class="pf-type">${esc(p.type)}</p>
        <h3 class="pf-name">${esc(p.name)}</h3>
        <p class="pf-desc">${esc(p.desc)}</p>
        <p class="pf-url">${esc(p.url)}${p.soon ? `<span class="pf-soon">${esc(ui('soon'))}</span>` : ''}</p>
      </div>`;
    // Όσο ένα site δεν είναι online, η κάρτα του δεν είναι σύνδεσμος
    if (p.soon) return `<li><div class="pf">${media}${body}</div></li>`;
    return `<li><a class="pf" href="${p.href}" ${ext}>${media}${body}<span class="sr-only">(${esc(ui('opensNew'))})</span></a></li>`;
  }

  /* ---------- Γλώσσα ---------- */
  function applyLang() {
    const t = DATA[lang];
    root.lang = lang;
    document.title = t.docTitle;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t.ui[el.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t.ui[el.dataset.i18nAria]));
    // Το κουμπί γλώσσας δείχνει τη γλώσσα στην οποία θα αλλάξει
    $('langToggle').textContent = lang === 'el' ? 'EN' : 'ΕΛ';
    $('langToggle').setAttribute('aria-label', t.ui.langAria);
    $('pdfLink').href = DATA.pdf[lang];
    $('pdfLink').title = t.ui.pdfAria;
    $('ctCity').textContent = t.city;
    $('footYear').textContent = new Date().getFullYear();
    $('pfGrid').innerHTML = t.portfolio.map(portfolioCard).join('');
    renderSheets();
    clearStatus();
  }

  /* ---------- Θέμα ---------- */
  const currentTheme = () => (root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  let themeTimer;

  function paintTheme() {
    $('themeIcon').innerHTML = currentTheme() === 'dark' ? MOON : SUN;
    // Το χρώμα της γραμμής του browser στο κινητό ακολουθεί το θέμα της σελίδας
    const desk = getComputedStyle(root).getPropertyValue('--desk').trim();
    if (desk) document.querySelectorAll('meta[name="theme-color"]').forEach(m => m.setAttribute('content', desk));
  }

  function setTheme(next, animate) {
    if (animate) {
      // Για λίγο όλα τα χρώματα αλλάζουν με μετάβαση, ώστε η εναλλαγή να μην «πετάγεται»
      root.classList.add('theme-switching');
      clearTimeout(themeTimer);
      themeTimer = setTimeout(() => root.classList.remove('theme-switching'), 450);
    }
    root.setAttribute('data-theme', next);
    paintTheme();
    renderCaptcha();
  }

  /* ---------- Μενού κινητού ---------- */
  function setMenu(open) {
    $('navLinks').classList.toggle('open', open);
    $('menuBtn').setAttribute('aria-expanded', String(open));
  }
  const menuOpen = () => $('navLinks').classList.contains('open');

  // Τονίζει στο μενού την ενότητα που φαίνεται στην οθόνη
  function markActiveLink() {
    const line = window.scrollY + window.innerHeight * 0.35;
    let active = 'cv';
    ['cv', 'portfolio', 'contact'].forEach(id => { if ($(id).offsetTop <= line) active = id; });
    document.querySelectorAll('#navLinks a').forEach(a => {
      if (a.getAttribute('href') === '#' + active) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }

  /* ---------- Φόρμα επικοινωνίας ---------- */
  let statusTimer;
  function clearStatus() {
    clearTimeout(statusTimer);
    const el = $('formStatus');
    el.className = 'form-status';
    el.textContent = '';
  }
  function showStatus(kind, message) {
    clearStatus();
    const el = $('formStatus');
    el.className = `form-status ${kind}`;
    el.textContent = message;
    // Η επιτυχία σβήνει μόνη της. Το σφάλμα μένει μέχρι την επόμενη προσπάθεια.
    if (kind === 'ok') statusTimer = setTimeout(clearStatus, 6000);
  }

  // Το reCAPTCHA φορτώνει όταν ο επισκέπτης πλησιάσει στη φόρμα και όχι με το άνοιγμα
  // της σελίδας, γιατί είναι το πιο βαρύ κομμάτι της.
  let captchaId = null;
  let captchaRequested = false;

  function loadCaptcha() {
    if (captchaRequested || !DATA.form.recaptchaKey) return;
    captchaRequested = true;
    window.cvCaptchaReady = renderCaptcha;
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?onload=cvCaptchaReady&render=explicit&hl=${lang}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  // Στήνει το widget στο τρέχον θέμα. Καλείται ξανά σε αλλαγή θέματος, εκτός αν
  // ο επισκέπτης έχει ήδη λύσει το captcha (για να μη χαθεί η απάντησή του).
  function renderCaptcha() {
    const box = $('recaptchaContainer');
    if (!box || typeof window.grecaptcha?.render !== 'function') return;
    if (captchaId !== null) {
      try { if (window.grecaptcha.getResponse(captchaId)) return; } catch (e) { /* widget gone, render again */ }
    }
    const slot = document.createElement('div');
    box.replaceChildren(slot);
    try {
      captchaId = window.grecaptcha.render(slot, { sitekey: DATA.form.recaptchaKey, theme: currentTheme() });
    } catch (e) {
      captchaId = null;
    }
    fitCaptcha();
  }

  // Το widget έχει σταθερό μέγεθος 304×78 και μένει στο κέντρο της φόρμας (style.css).
  // Όπου η φόρμα είναι πιο στενή από αυτό (μικρά κινητά), μικραίνει ολόκληρο για να χωρά.
  function fitCaptcha() {
    const box = $('recaptchaContainer');
    const slot = box.firstElementChild;
    if (!slot) return;
    const scale = Math.min(1, box.clientWidth / 304);
    slot.style.transform = scale < 1 ? `scale(${scale})` : '';
    box.style.height = scale < 1 ? `${Math.ceil(78 * scale)}px` : '';
  }

  // true αν το captcha συμπληρώθηκε, ή αν το script δεν φόρτωσε καθόλου
  // (fail-open: προτιμότερο να περάσει το μήνυμα παρά να κολλήσει η φόρμα)
  function hasValidCaptcha() {
    if (captchaId === null || typeof window.grecaptcha?.getResponse !== 'function') return true;
    let token;
    try { token = window.grecaptcha.getResponse(captchaId); } catch (e) { return true; }
    if (!token) { showStatus('err', ui('captchaComplete')); return false; }
    return true;
  }
  function resetCaptcha() {
    try { if (captchaId !== null) window.grecaptcha.reset(captchaId); } catch (e) { /* no widget rendered */ }
  }

  // Επιστρέφει το πρώτο πεδίο με πρόβλημα και το μήνυμά του, ή null
  function firstInvalid(form) {
    const value = name => form.elements[name].value.trim();
    if (!value('name')) return ['name', ui('enterName')];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email'))) return ['email', ui('validEmail')];
    if (!value('subject')) return ['subject', ui('enterSubject')];
    if (!value('message')) return ['message', ui('enterMessage')];
    return null;
  }

  function setSending(form, sending) {
    const button = form.querySelector('[type="submit"]');
    button.disabled = sending;
    button.textContent = ui(sending ? 'sending' : 'send');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));

    const invalid = firstInvalid(form);
    if (invalid) {
      const field = form.elements[invalid[0]];
      field.setAttribute('aria-invalid', 'true');
      field.focus();
      showStatus('err', invalid[1]);
      return;
    }
    if (DATA.form.recaptchaKey && !hasValidCaptcha()) return;

    clearStatus();
    setSending(form, true);
    fetch(DATA.form.endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(response => {
        if (response.ok) {
          showStatus('ok', ui('sent'));
          form.reset();
        } else {
          showStatus('err', ui('sendError'));
        }
        resetCaptcha();
      })
      .catch(() => showStatus('err', ui('sendError')))
      .finally(() => setSending(form, false));
  }

  /* ---------- Κοινοποίηση ---------- */
  function toast(message) {
    document.querySelector('.toast')?.remove();
    const el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2400);
  }
  function fallbackCopy(url) {
    const area = document.createElement('textarea');
    area.value = url;
    area.setAttribute('readonly', '');
    area.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.appendChild(area);
    area.select();
    try { document.execCommand('copy'); toast(ui('copied')); } catch (e) { toast(ui('copyError')); }
    area.remove();
  }
  function share() {
    const url = location.origin + location.pathname;
    if (navigator.share) {
      navigator.share({ title: document.title, text: ui('shareText'), url }).catch(() => { /* cancelled by the visitor */ });
    } else if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url).then(() => toast(ui('copied'))).catch(() => fallbackCopy(url));
    } else {
      fallbackCopy(url);
    }
  }

  /* ---------- Εκκίνηση ---------- */
  $('chips').innerHTML = DATA.interests.map(i => `<li>${esc(i)}</li>`).join('');
  applyLang();
  paintTheme();
  root.classList.add('ready');

  // Ο έλεγχος των πεδίων γίνεται εδώ, με μηνύματα στη γλώσσα της σελίδας.
  // Χωρίς JavaScript η φόρμα στέλνει απευθείας στο Formspree με τον έλεγχο του browser.
  $('contactForm').noValidate = true;
  $('contactForm').addEventListener('submit', handleSubmit);
  $('contactForm').addEventListener('input', e => e.target.removeAttribute('aria-invalid'));
  $('contactForm').addEventListener('focusin', loadCaptcha);
  if ('IntersectionObserver' in window) {
    const watcher = new IntersectionObserver(entries => {
      if (entries.some(en => en.isIntersecting)) { loadCaptcha(); watcher.disconnect(); }
    }, { rootMargin: '600px 0px' });
    watcher.observe($('contact'));
  } else {
    loadCaptcha();
  }

  $('langToggle').addEventListener('click', () => {
    lang = lang === 'el' ? 'en' : 'el';
    store('cv-lang', lang);
    applyLang();
  });
  $('themeToggle').addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    store('cv-theme', next);
    setTheme(next, true);
  });
  $('shareButton').addEventListener('click', share);
  $('menuBtn').addEventListener('click', e => {
    const open = !menuOpen();
    setMenu(open);
    // Άνοιγμα από το πληκτρολόγιο (detail 0): η εστίαση πάει στον πρώτο σύνδεσμο,
    // γιατί οι σύνδεσμοι βρίσκονται πριν από το κουμπί και το Tab θα τους προσπερνούσε
    if (open && e.detail === 0) $('navLinks').querySelector('a').focus();
  });
  $('toTop').addEventListener('click', e => {
    e.preventDefault();
    history.replaceState(null, '', location.pathname + location.search);
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });

  // Το μενού κινητού κλείνει με επιλογή συνδέσμου, με κλικ έξω από αυτό ή με Escape
  document.addEventListener('click', e => {
    if (!menuOpen() || e.target.closest('#menuBtn')) return;
    if (e.target.closest('#navLinks a') || !e.target.closest('#navLinks')) setMenu(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menuOpen()) { setMenu(false); $('menuBtn').focus(); }
  });

  // Όσο ο επισκέπτης δεν έχει διαλέξει θέμα, η σελίδα ακολουθεί το θέμα της συσκευής
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', e => {
    if (!stored('cv-theme') && !params.get('theme')) setTheme(e.matches ? 'dark' : 'light', true);
  });

  // Στην εκτύπωση και στην «Αποθήκευση ως PDF» το έγγραφο παίρνει τον τίτλο του βιογραφικού
  window.addEventListener('beforeprint', () => { document.title = DATA[lang].pdfTitle; });
  window.addEventListener('afterprint', () => { document.title = DATA[lang].docTitle; });

  let ticking = false;
  function onScroll() {
    $('toTop').classList.toggle('show', window.scrollY > 300);
    $('siteNav').classList.toggle('scrolled', window.scrollY > 50);
    markActiveLink();
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', () => { markActiveLink(); fitCaptcha(); }, { passive: true });

  // Η σελίδα στήνεται μετά το άνοιγμα, άρα ένας σύνδεσμος με #ενότητα θέλει ξανά κύλιση εκεί
  if (location.hash.length > 1) {
    let target = null;
    try { target = $(decodeURIComponent(location.hash.slice(1))); } catch (e) { /* malformed hash */ }
    if (target) target.scrollIntoView({ behavior: 'instant' });
  }
  onScroll();
})();
