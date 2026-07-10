// ---------- i18n ----------
    const translations = {
      "nav.profil": { it: "Profilo", de: "Profil", en: "Profile" },
      "nav.erfahrung": { it: "Esperienza", de: "Erfahrung", en: "Experience" },
      "nav.kompetenzen": { it: "Competenze", de: "Kompetenzen", en: "Skills" },
      "nav.kontakt": { it: "Contatto", de: "Kontakt", en: "Contact" },
      "hero.tagline": {
        it: "Junior Software Developer — software preciso, dati sicuri.",
        de: "Junior Software Developer — präzise Software, sichere Daten.",
        en: "Junior Software Developer — precise software, secure data."
      },
      "hero.btn1": { it: "Contattami", de: "Kontakt aufnehmen", en: "Get in touch" },
      "hero.btn2": { it: "Vedi esperienza", de: "Erfahrung ansehen", en: "View experience" },
      "profil.eyebrow": { it: "Profilo", de: "Profil", en: "Profile" },
      "profil.title": { it: "Chi sono", de: "Wer ich bin", en: "Who I am" },
      "profil.text": {
        it: "Motivato, aperto all'apprendimento e autonomo — sono convinto che il mio impegno possa portare un valore concreto alla vostra azienda. Esperienza solida con dati e processi sensibili nell'ambito dei dati di navigazione militare, con un forte interesse per la Cyber Security.",
        de: "Motiviert, lernbereit und eigenständig — ich bin überzeugt, durch mein Engagement einen echten Mehrwert für Ihr Unternehmen zu schaffen. Fundierte Erfahrung mit sicherheitsrelevanten Daten und Prozessen im Bereich militärischer Navigationsdaten, mit besonderem Interesse an Cyber Security.",
        en: "Motivated, eager to learn and self-reliant — I'm convinced my commitment can bring real value to your company. Solid experience with security-relevant data and processes in the field of military navigation data, with a strong interest in cyber security."
      },
      "hl1.title": { it: "Precisione", de: "Präzision", en: "Precision" },
      "hl1.text": {
        it: "Lavorare con i dati di navigazione mi ha insegnato ciò che conta davvero: precisione in ogni dettaglio.",
        de: "Arbeit mit Navigationsdaten hat mich gelehrt, worauf es wirklich ankommt: Genauigkeit in jedem Detail.",
        en: "Working with navigation data taught me what really matters: accuracy in every detail."
      },
      "hl2.title": { it: "Sicurezza", de: "Sicherheit", en: "Security" },
      "hl2.text": {
        it: "La sicurezza inizia con codice pulito — il mio obiettivo è crescere nella Cyber Security.",
        de: "Sicherheit beginnt mit sauberem Code — mein Ziel ist die Weiterentwicklung Richtung Cyber Security.",
        en: "Security starts with clean code — my goal is to grow towards cyber security."
      },
      "hl3.title": { it: "Voglia di imparare", de: "Lernbereitschaft", en: "Eagerness to learn" },
      "hl3.text": {
        it: "La voglia di imparare è il mio strumento più produttivo — apprendo nuove tecnologie in modo rapido e pratico.",
        de: "Lernbereitschaft ist mein produktivstes Tool — neue Technologien nehme ich schnell und praxisnah auf.",
        en: "Willingness to learn is my most productive tool — I pick up new technologies quickly and hands-on."
      },
      "erfahrung.eyebrow": { it: "Percorso", de: "Werdegang", en: "Background" },
      "erfahrung.title": { it: "Esperienza professionale", de: "Berufserfahrung", en: "Work Experience" },
      "exp1.role": { it: "Applicatore Informatico AFC", de: "Applikationsentwickler EFZ", en: "Application Developer EFZ" },
      "exp1.now": { it: "oggi", de: "heute", en: "today" },
      "exp1.l1": { it: "Sviluppo e manutenzione di applicazioni nell'ambito dei dati di navigazione militare (NavData)", de: "Entwicklung und Wartung von Applikationen im Bereich militärischer Navigationsdaten (NavData)", en: "Development and maintenance of applications for military navigation data (NavData)" },
      "exp1.l2": { it: "Collaborazione al progetto Swiss Obstacle Database Converter (SODC)", de: "Mitarbeit am Projekt Swiss Obstacle Database Converter (SODC)", en: "Contribution to the Swiss Obstacle Database Converter (SODC) project" },
      "exp1.l3": { it: "Implementazione di processi di validazione ed elaborazione dei dati", de: "Implementierung von Datenvalidierungs- und Verarbeitungsprozessen", en: "Implementation of data validation and processing workflows" },
      "exp1.l4": { it: "Esecuzione di test e controllo qualità, documentazione tecnica", de: "Durchführung von Tests und Qualitätssicherung, technische Dokumentation", en: "Testing, quality assurance and technical documentation" },
      "exp1.l5": { it: "Collaborazione in un ambiente di sviluppo agile (Scrum)", de: "Zusammenarbeit in einem agilen Entwicklungsumfeld (Scrum)", en: "Collaboration in an agile development environment (Scrum)" },
      "exp2.role": { it: "Informatico AFC — Formazione", de: "Informatiker EFZ — Ausbildung", en: "IT Specialist EFZ — Apprenticeship" },
      "exp2.l1": { it: "Solide basi IT: reti, sistemi, infrastruttura IT (TCP/IP, DNS, DHCP)", de: "Fundierte IT-Grundlagen: Netzwerke, Systeme, IT-Infrastruktur (TCP/IP, DNS, DHCP)", en: "Solid IT fundamentals: networks, systems, IT infrastructure (TCP/IP, DNS, DHCP)" },
      "exp2.l2": { it: "Basi di dati, SQL e modellazione dati", de: "Datenbanken, SQL und grundlegende Datenmodellierung", en: "Databases, SQL and fundamental data modeling" },
      "exp2.l3": { it: "Programmazione orientata agli oggetti, primi concetti di IT-Security", de: "Objektorientierte Programmierung, erste IT-Security-Grundlagen", en: "Object-oriented programming, first IT security fundamentals" },
      "exp3.role": { it: "Scuola dell'obbligo", de: "Obligatorische Schulzeit", en: "Compulsory Education" },
      "komp.eyebrow": { it: "Skill", de: "Skills", en: "Skills" },
      "komp.title": { it: "Competenze", de: "Kompetenzen", en: "Skills" },
      "cat.prog": { it: "Programmazione", de: "Programmierung", en: "Programming" },
      "cat.web": { it: "Tecnologie Web", de: "Web Technologien", en: "Web Technologies" },
      "cat.db": { it: "Database & Sistemi", de: "Datenbanken & Systeme", en: "Databases & Systems" },
      "cat.net": { it: "Reti & Sicurezza", de: "Netzwerke & Sicherheit", en: "Networks & Security" },
      "cat.tools": { it: "Strumenti & Metodi", de: "Tools & Methoden", en: "Tools & Methods" },
      "cat.soft": { it: "Soft Skill", de: "Soft Skills", en: "Soft Skills" },
      "chip.datamodel": { it: "SQL & Modellazione dati", de: "SQL & Datenmodellierung", en: "SQL & Data Modeling" },
      "chip.datavalid": { it: "Validazione dati", de: "Datenvalidierung", en: "Data Validation" },
      "chip.itsec": { it: "Basi IT-Security", de: "IT-Sicherheitsgrundlagen", en: "IT Security Fundamentals" },
      "chip.ai": { it: "Automazione con IA", de: "KI-gestützte Automatisierung", en: "AI-assisted Automation" },
      "chip.learn": { it: "Grande voglia di imparare", de: "Hohe Lernbereitschaft", en: "Strong willingness to learn" },
      "chip.team": { it: "Lavoro di squadra", de: "Teamfähigkeit", en: "Team player" },
      "chip.analytic": { it: "Pensiero analitico", de: "Analytisches Denken", en: "Analytical thinking" },
      "chip.self": { it: "Autonomia", de: "Selbstständigkeit", en: "Self-reliance" },
      "lang.title": { it: "Lingue", de: "Sprachen", en: "Languages" },
      "lang.it": { it: "Italiano", de: "Italienisch", en: "Italian" },
      "lang.de": { it: "Tedesco", de: "Deutsch", en: "German" },
      "lang.en": { it: "Inglese", de: "Englisch", en: "English" },
      "lang.fr": { it: "Francese", de: "Französisch", en: "French" },
      "level.native": { it: "Madrelingua", de: "Muttersprache", en: "Native" },
      "level.fluent": { it: "Ottimo", de: "Verhandlungssicher", en: "Fluent" },
      "level.fluent2": { it: "Ottimo", de: "Verhandlungssicher", en: "Fluent" },
      "level.basic": { it: "Base", de: "Grundlagen", en: "Basic" },
      "interests.title": { it: "Interessi", de: "Interessen", en: "Interests" },
      "interests.i1": { it: "Intelligenza Artificiale & Digitalizzazione", de: "Künstliche Intelligenz & Digitalisierung", en: "Artificial Intelligence & Digitalization" },
      "interests.i2": { it: "Cyber Security", de: "Cyber Security", en: "Cyber Security" },
      "interests.i3": { it: "Sport di forza e resistenza", de: "Kraft- und Ausdauersport", en: "Strength & endurance sports" },
      "interests.i4": { it: "Viaggi nel mondo", de: "Weltreisen", en: "World travel" },
      "contact.eyebrow": { it: "Contatto", de: "Kontakt", en: "Contact" },
      "contact.title": { it: "Parliamone", de: "Lass uns sprechen", en: "Let's talk" },
      "contact.subtitle": { it: "Aperto a opportunità in Software Development, Cyber Security e IT.", de: "Offen für Chancen in Software Development, Cyber Security und IT.", en: "Open to opportunities in Software Development, Cyber Security and IT." },
      "contact.location": { it: "Zurigo, Svizzera", de: "Zürich, Schweiz", en: "Zurich, Switzerland" },
      "cv.eyebrow": { it: "In breve", de: "Die Kurzfassung", en: "The short version" },
      "cv.title": { it: "Tutto l'essenziale su una pagina", de: "Alles Wichtige auf einer Seite", en: "Everything that matters, on one page" },
      "cv.text": { it: "Il mio percorso completo, in formato compatto — come PDF per i vostri documenti.", de: "Mein kompletter Werdegang, kompakt zum Mitnehmen — als PDF für Ihre Unterlagen.", en: "My full background, compact and ready to take away — as a PDF for your records." },
      "cv.btn": { it: "Scarica il CV (PDF)", de: "CV herunterladen (PDF)", en: "Download CV (PDF)" },
      "cv.btnSoon": { it: "CV in arrivo", de: "CV bald verfügbar", en: "CV coming soon" },
      "footnote": { it: "© 2026 Gaetano Salonia — Informatico AFC, Sviluppatore di applicazioni", de: "© 2026 Gaetano Salonia — Informatiker EFZ, Applikationsentwickler", en: "© 2026 Gaetano Salonia — IT Specialist EFZ, Application Developer" },
      "aria.menuOpen": { it: "Apri menu", de: "Menü öffnen", en: "Open menu" },
      "aria.menuClose": { it: "Chiudi menu", de: "Menü schliessen", en: "Close menu" },
      "aria.langSwitch": { it: "Seleziona lingua", de: "Sprache wählen", en: "Choose language" },
      "aria.themeToggle": { it: "Cambia tema", de: "Farbschema wechseln", en: "Toggle theme" },
      "aria.scrollDown": { it: "Scorri in basso", de: "Nach unten scrollen", en: "Scroll down" }
    };

    let currentLang = "de";

    function setLanguage(lang) {
      currentLang = lang;
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const entry = translations[el.getAttribute("data-i18n")];
        if (entry && entry[lang]) el.textContent = entry[lang];
      });
      document.querySelectorAll("[data-i18n-aria]").forEach(el => {
        const key = el.getAttribute("data-i18n-aria");
        const entry = translations[key];
        if (entry && entry[lang] && el.getAttribute("aria-expanded") !== "true") {
          el.setAttribute("aria-label", entry[lang]);
        }
      });
      document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
      });
      document.documentElement.setAttribute("lang", lang);
      localStorage.setItem("portfolio-lang", lang);
    }

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
    });

    const savedLang = localStorage.getItem("portfolio-lang");
    if (savedLang && savedLang !== "de") setLanguage(savedLang);

    // ---------- Theme ----------
    const root = document.documentElement;

    function setTheme(theme) {
      root.setAttribute("data-theme", theme);
      localStorage.setItem("portfolio-theme", theme);
    }

    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      root.setAttribute("data-theme", savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      root.setAttribute("data-theme", "light");
    }

    document.getElementById("themeToggle").addEventListener("click", () => {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });

    // ---------- Scroll reveal ----------
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
    } else {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    }

    // ---------- Scroll spy ----------
    const navLinks = document.querySelectorAll("#menu a");
    const sections = [...navLinks].map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);

    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
          });
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });

    sections.forEach(sec => spy.observe(sec));

    // ---------- Mobile menu ----------
    const siteNav = document.getElementById("siteNav");
    const menuToggle = document.getElementById("menuToggle");

    function menuAriaLabel(open) {
      const key = open ? "aria.menuClose" : "aria.menuOpen";
      return translations[key][currentLang] || translations[key].de;
    }

    function closeMenu() {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", menuAriaLabel(false));
    }

    menuToggle.addEventListener("click", () => {
      const open = siteNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      menuToggle.setAttribute("aria-label", menuAriaLabel(open));
    });

    document.querySelectorAll("#menu a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // ---------- Scroll progress & nav state ----------
    const scrollProgress = document.querySelector(".scroll-progress");
    const hero = document.querySelector(".hero");

    let scrollTicking = false;

    function onScroll() {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (scrollProgress) scrollProgress.style.width = progress + "%";
        siteNav.classList.toggle("scrolled", scrollTop > 24);

        if (hero) {
          const heroBottom = hero.offsetTop + hero.offsetHeight;
          const fade = Math.max(0, 1 - scrollTop / (heroBottom * 0.85));
          root.style.setProperty("--bg-opacity", fade.toFixed(3));
        }

        scrollTicking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ---------- Aurora background ----------
    if (!reduceMotion) {
      let targetX = 50;
      let targetY = 50;
      let currentX = 50;
      let currentY = 50;

      document.addEventListener("mousemove", (e) => {
        targetX = (e.clientX / window.innerWidth) * 100;
        targetY = (e.clientY / window.innerHeight) * 100;
      }, { passive: true });

      function tickAurora() {
        currentX += (targetX - currentX) * 0.06;
        currentY += (targetY - currentY) * 0.06;
        root.style.setProperty("--mx", currentX.toFixed(2) + "%");
        root.style.setProperty("--my", currentY.toFixed(2) + "%");
        requestAnimationFrame(tickAurora);
      }

      requestAnimationFrame(tickAurora);
    }

    // ---------- Console Easter Egg ----------
    const gasalMessages = {
      welcome: {
        de: "Du schaust unter die Haube? Respekt.",
        it: "Guardi sotto il cofano? Rispetto.",
        en: "Peeking under the hood? Respect."
      },
      hint: {
        de: "Tipp: gasal.help() für verfügbare Befehle",
        it: "Suggerimento: gasal.help() per i comandi disponibili",
        en: "Hint: gasal.help() for available commands"
      }
    };

    const gasalQuotes = {
      de: [
        "Sicherheit beginnt mit sauberem Code.",
        "Präzision in jedem Detail.",
        "Lernbereitschaft ist mein produktivstes Tool."
      ],
      it: [
        "La sicurezza inizia con codice pulito.",
        "Precisione in ogni dettaglio.",
        "La voglia di imparare è il mio strumento più produttivo."
      ],
      en: [
        "Security starts with clean code.",
        "Accuracy in every detail.",
        "Willingness to learn is my most productive tool."
      ]
    };

    function gasalLang() {
      return localStorage.getItem("portfolio-lang") || currentLang || "de";
    }

    window.gasal = {
      version: "1.0.0",
      help() {
        const lang = gasalLang();
        const lines = {
          de: [
            "gasal.help()    — diese Hilfe",
            "gasal.skills()  — Tech-Stack",
            "gasal.contact() — E-Mail & LinkedIn",
            "gasal.quote()   — Zufallszitat",
            "Konami-Code     — versteckter Bonus"
          ],
          it: [
            "gasal.help()    — questo aiuto",
            "gasal.skills()  — stack tecnologico",
            "gasal.contact() — email & LinkedIn",
            "gasal.quote()   — citazione casuale",
            "Codice Konami   — bonus nascosto"
          ],
          en: [
            "gasal.help()    — this help",
            "gasal.skills()  — tech stack",
            "gasal.contact() — email & LinkedIn",
            "gasal.quote()   — random quote",
            "Konami code     — hidden bonus"
          ]
        };
        console.log(lines[lang].join("\n"));
      },
      skills() {
        console.log(
          "┌─────────────────┬──────────────────────────────┐\n" +
          "│ Category        │ Stack                        │\n" +
          "├─────────────────┼──────────────────────────────┤\n" +
          "│ Languages       │ C++, Java, JS, TS, Python, SQL│\n" +
          "│ Web             │ HTML, CSS, React, Node.js    │\n" +
          "│ Data & Systems  │ SQL, Linux, Windows          │\n" +
          "│ Security        │ TCP/IP, DNS, IT-Security     │\n" +
          "│ Tools           │ Git, Docker, Scrum           │\n" +
          "└─────────────────┴──────────────────────────────┘"
        );
      },
      contact() {
        console.log(
          "%c📧 gaetanosalo@outlook.de",
          "color:#5b9cf6;font-weight:bold",
          "\n🔗 https://www.linkedin.com/in/gaetano-salonia-7802022b3"
        );
      },
      quote() {
        const lang = gasalLang();
        const quotes = gasalQuotes[lang] || gasalQuotes.de;
        const pick = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(`%c"${pick}"`, "font-style:italic;color:#94a0b8");
      }
    };

    const lang = gasalLang();
    console.log(
      `%c◆ gasal-portfolio.dev %cv${window.gasal.version}`,
      "color:#5b9cf6;font-weight:bold;font-size:14px",
      "color:#94a0b8;font-size:11px"
    );
    console.log(`%c${gasalMessages.welcome[lang]}`, "color:#f0f4fa");
    console.log(`%c${gasalMessages.hint[lang]}`, "color:#64708a;font-size:11px");

    const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
    let konamiIndex = 0;

    document.addEventListener("keydown", (e) => {
      if (e.code === konami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konami.length) {
          konamiIndex = 0;
          document.body.classList.add("konami-active");
          const msgs = {
            de: "Konami freigeschaltet — du kennst dich aus.",
            it: "Konami sbloccato — sai il tuo mestiere.",
            en: "Konami unlocked — you know your stuff."
          };
          console.log(`%c🎉 ${msgs[gasalLang()]}`, "color:#5b9cf6;font-weight:bold;font-size:13px");
          setTimeout(() => document.body.classList.remove("konami-active"), 3000);
        }
      } else {
        konamiIndex = e.code === konami[0] ? 1 : 0;
      }
    });
