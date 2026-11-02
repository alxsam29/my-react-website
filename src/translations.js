export const translations = {
  ro: {
    // Nav & Common
    nav: {
      services: 'Servicii',
      projects: 'Proiecte',
      process: 'Proces',
      faq: 'Întrebări',
      contact: 'Contact',
      cta: 'Cere o ofertă',
      home: 'Acasă',
      backToSite: '← Înapoi la site',
      themeToggle: 'Schimbă tema',
      langToggle: 'Schimbă limba',
    },
    // Hero
    hero: {
      available: 'Disponibil pentru proiecte noi',
      h1Prefix: 'Construiesc site-uri care',
      words: ['aduc clienți.', 'se încarcă instant.', 'impresionează.', 'vând non-stop.'],
      lead: 'Sunt Alex, web developer. Landing page-uri, magazine online și platforme React, de la idee la lansare.',
      talkCta: 'Hai să vorbim',
      projectsCta: 'Vezi proiectele',
      badges: ['React', 'Responsive', 'SEO', 'Încărcare rapidă'],
    },
    // Phone Mockup
    phone: {
      status: 'online',
      chat: [
        { me: false, t: 'Salut! Vreau un site pentru afacerea mea.' },
        { me: true, t: 'Sigur! Landing page, magazin sau platformă?' },
        { me: false, t: 'Un magazin online, cu plată cu cardul.' },
        { me: true, t: 'Perfect. Îți trimit azi o ofertă cu preț și termen. ✅' },
      ],
      inputPlaceholder: 'Scrie un mesaj…',
    },
    // Services
    services: {
      title: 'Ce pot construi pentru tine',
      subtitle: 'De la o pagină simplă la o platformă completă, cu același accent pe viteză și pe aspect.',
      items: [
        {
          title: 'Landing page',
          desc: 'O pagină care explică clar oferta ta și îl duce pe vizitator spre contact. Rapidă pe telefon, bună în Google.',
        },
        {
          title: 'Magazin online',
          desc: 'Catalog, coș și plată online, cu produse pe care le editezi singur, fără să ceri ajutor.',
        },
        {
          title: 'Platforme web',
          desc: 'Conturi de utilizator, panouri admin și funcții interactive construite în React.',
        },
      ],
    },
    // Projects
    projects: {
      title: 'FolioTech',
      desc: 'Platformă web interactivă, concepută și dezvoltată integral de mine: design, interfață și cod. Ai o idee similară? O putem construi și pe a ta.',
      cta: 'Vreau ceva similar',
      fastLoad: 'Încărcare rapidă',
      responsive: 'Responsive',
    },
    // Process
    process: {
      title: 'Cum lucrăm împreună',
      subtitle: 'Patru pași, fără surprize.',
      steps: [
        { n: '1', title: 'Discuție', desc: 'Îmi spui ce vrei să obții. Primești o estimare de preț și termen.' },
        { n: '2', title: 'Schiță', desc: 'Îți arăt structura și aspectul înainte să scriu cod, apoi ajustăm.' },
        { n: '3', title: 'Dezvoltare', desc: 'Construiesc site-ul și ți-l arăt la fiecare etapă pentru feedback.' },
        { n: '4', title: 'Lansare', desc: 'Îl pun online pe domeniul tău și îți arăt cum îl administrezi singur.' },
      ],
    },
    // FAQ
    faq: {
      title: 'Întrebări frecvente',
      items: [
        { q: 'Cât durează să am un site?', a: 'Un landing page durează de obicei între una și trei săptămâni. Magazinele și platformele cer mai mult, în funcție de funcții.' },
        { q: 'Cât costă?', a: 'Depinde de numărul de pagini și de funcții. După prima discuție primești o ofertă clară, fără costuri ascunse.' },
        { q: 'Pot modifica singur conținutul?', a: 'Da. Îți arăt cum îți schimbi textele, pozele și produsele. Pentru modificări mai mari sunt la un mesaj distanță.' },
        { q: 'Ce se întâmplă după lansare?', a: 'Rămân disponibil pentru corecturi și îmbunătățiri, lunar sau doar când ai nevoie.' },
      ],
    },
    // Contact Section (bottom of home)
    contactCta: {
      title: 'Ai un proiect în minte?',
      desc: 'Spune-mi ce ai nevoie și primești o ofertă clară, cu preț și termen.',
      btn: 'Cere o ofertă',
    },
    // Contact Page
    contactPage: {
      eyebrow: 'Contact',
      title: 'Hai să construim',
      titleGradient: 'ceva bun împreună',
      subtitle: 'Spune-mi câteva lucruri despre proiect și revin cu întrebări, idei și o ofertă clară, cu preț și termen.',
      pills: ['Apel gratuit de descoperire', 'Fără obligații', 'NDA la cerere'],
      metrics: [
        ['< 24h', 'răspuns în zile lucrătoare'],
        ['30 min', 'discuție gratuită'],
        ['€0', 'cost pentru prima discuție'],
        ['RO · EN', 'vorbim ambele limbi'],
      ],
      subjects: ['Cerere ofertă', 'Soluții web', 'Automatizări', 'Parteneriat', 'Altceva'],
      interests: ['Landing page', 'Magazin online', 'Platformă web', 'Automatizări AI / n8n', 'Mentenanță 24/7', 'Nu sunt sigur încă'],
      budgets: ['sub 1.000€', '1.000 – 3.000€', '3.000 – 10.000€', 'peste 10.000€', 'Nu sunt sigur încă'],
      budgetNotice: 'Bugetul mă ajută să-ți propun soluția potrivită. Nu e un angajament: oferta finală o primești după discuție.',
      subjectLabel: 'Despre ce este vorba?',
      nameLabel: 'Nume *',
      namePlaceholder: 'Numele tău',
      companyLabel: 'Companie',
      companyPlaceholder: 'Numele firmei',
      emailLabel: 'Email *',
      emailPlaceholder: 'nume@exemplu.ro',
      phoneLabel: 'Telefon',
      phonePlaceholder: '7xx xxx xxx',
      interestsLabel: 'Ce te interesează?',
      budgetLabel: 'Buget orientativ',
      methodLabel: 'Cum preferi să te contactez?',
      detailsLabel: 'Detalii proiect',
      detailsPlaceholder: 'Ce vrei să construim? Ce problemă rezolvă? Ai un termen limită?',
      optional: '(opțional)',
      multiple: '(poți alege mai multe)',
      gdpr: 'Sunt de acord ca datele mele să fie folosite doar pentru a răspunde acestei cereri. Nu le partajez cu nimeni.',
      submitEmail: '🚀 Trimite cererea pe email',
      submitting: 'Se trimite cererea…',
      orDirect: 'sau trimite direct',
      writeWa: '💬 Scrie pe WhatsApp (+40 727 316 319)',
      ticker: [
        'Răspuns în sub 24h',
        'Apel gratuit de 30 min',
        'Ofertă clară, fără costuri ascunse',
        'NDA la cerere',
        'Cod curat și rapid',
        'Suport după lansare',
        'Design personalizat',
      ],
      stepsTitle: 'Ce se întâmplă',
      stepsTitleGradient: 'după ce trimiți',
      stepsEyebrow: 'Pașii următori',
      steps: [
        ['Citim cererea', 'Analizez ce mi-ai trimis și pregătesc întrebările potrivite, ca să nu pierdem timp.'],
        ['Apel de 30 minute', 'Discutăm obiectivele, publicul și ce înseamnă succes pentru proiectul tău. Gratuit.'],
        ['Ofertă și arhitectură clară', 'Primești o propunere scrisă: ce construim, cu ce tehnologii, preț fix și termen.'],
        ['Începem dezvoltarea', 'După acord, pornim. Vezi progresul pe parcurs și ai un link de previzualizare.'],
      ],
      faqEyebrow: 'Întrebări',
      faqTitle: 'Înainte',
      faqTitleGradient: 'să ne scrii',
      faqs: [
        ['Cât de repede primesc răspuns?', 'În zile lucrătoare răspund în mai puțin de 24 de ore, de cele mai multe ori în aceeași zi. Pe WhatsApp e de obicei și mai rapid.'],
        ['Prima discuție costă ceva?', 'Nu. Primul apel de 30 de minute este gratuit și fără nicio obligație. Scopul e să vedem dacă și cum te pot ajuta.'],
        ['Trebuie să știu exact ce specificații vreau?', 'Deloc. Spune-mi problema sau ideea, iar eu te ajut să o transformi într-un plan clar. Poți bifa „Nu sunt sigur încă”.'],
        ['Ce se întâmplă cu informațiile mele? Semnați NDA?', 'Datele tale sunt folosite doar pentru a-ți răspunde. Dacă proiectul e sensibil, semnez un acord de confidențialitate (NDA) înainte să intrăm în detalii.'],
      ],
      successTitle: 'Mesajul a fost trimis cu succes!',
      successDesc: (name, email) => `Mulțumesc, ${name}! Voi citi detaliile și revin în cel mult 24 de ore pe ${email}.`,
      successFaster: 'Vrei un răspuns și mai rapid?',
      successWaDesc: 'Poți trimite aceleași detalii direct pe WhatsApp cu un singur click:',
      openWaNow: '💬 Deschide pe WhatsApp acum',
      sendAnother: 'Trimite alt mesaj',
    },
    // Footer
    footer: {
      builtWith: 'Construit cu React și atenție la detalii',
    },
  },

  en: {
    // Nav & Common
    nav: {
      services: 'Services',
      projects: 'Projects',
      process: 'Process',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Get a Quote',
      home: 'Home',
      backToSite: '← Back to website',
      themeToggle: 'Toggle theme',
      langToggle: 'Change language',
    },
    // Hero
    hero: {
      available: 'Available for new projects',
      h1Prefix: 'I build websites that',
      words: ['bring clients.', 'load instantly.', 'impress.', 'sell 24/7.'],
      lead: "I'm Alex, web developer. Landing pages, e-commerce stores, and React platforms from idea to launch.",
      talkCta: "Let's talk",
      projectsCta: 'View projects',
      badges: ['React', 'Responsive', 'SEO', 'Instant Loading'],
    },
    // Phone Mockup
    phone: {
      status: 'online',
      chat: [
        { me: false, t: 'Hi! I want a website for my business.' },
        { me: true, t: 'Sure! Landing page, online shop, or web app?' },
        { me: false, t: 'An online shop with card payments.' },
        { me: true, t: 'Awesome. Sending you a proposal with timeline & quote today. ✅' },
      ],
      inputPlaceholder: 'Type a message…',
    },
    // Services
    services: {
      title: 'What I can build for you',
      subtitle: 'From a simple high-converting page to a full web platform, prioritizing speed and aesthetics.',
      items: [
        {
          title: 'Landing Page',
          desc: 'A page that clearly communicates your offer and converts visitors into leads. Mobile-fast & SEO optimized.',
        },
        {
          title: 'Online Store',
          desc: 'Catalog, shopping cart & online checkout, with easy product management you control without hassle.',
        },
        {
          title: 'Web Platforms',
          desc: 'User accounts, admin dashboards, and custom interactive features built in React.',
        },
      ],
    },
    // Projects
    projects: {
      title: 'FolioTech',
      desc: 'Interactive web platform designed and engineered entirely by me: UI/UX, interface, and code. Have a similar vision? Let us build yours.',
      cta: 'I want something similar',
      fastLoad: 'Fast Loading',
      responsive: 'Responsive',
    },
    // Process
    process: {
      title: 'How we work together',
      subtitle: 'Four straightforward steps, zero surprises.',
      steps: [
        { n: '1', title: 'Discovery', desc: 'Tell me your goals. You receive a clear scope, estimate, and timeline.' },
        { n: '2', title: 'Wireframe', desc: 'I showcase the layout & look before coding so we align perfectly.' },
        { n: '3', title: 'Development', desc: 'I build your site with continuous demos for your feedback.' },
        { n: '4', title: 'Launch', desc: 'We go live on your domain and I guide you on managing it effortlessly.' },
      ],
    },
    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How long does it take to build a website?', a: 'A landing page typically takes 1 to 3 weeks. E-commerce and custom platforms take longer depending on features.' },
        { q: 'How much does it cost?', a: 'Pricing depends on the scope and complexity. After our initial chat, you get a clear proposal with no hidden fees.' },
        { q: 'Can I edit the content myself?', a: 'Yes! I will show you how to update copy, images, and products easily. For bigger upgrades, I am just a message away.' },
        { q: 'What happens after launch?', a: 'I remain available for ongoing maintenance, support, and improvements whenever you need.' },
      ],
    },
    // Contact Section (bottom of home)
    contactCta: {
      title: 'Have a project in mind?',
      desc: 'Tell me what you need and get a clear proposal with timeline & pricing.',
      btn: 'Get a Quote',
    },
    // Contact Page
    contactPage: {
      eyebrow: 'Contact',
      title: "Let's build",
      titleGradient: 'something great together',
      subtitle: 'Tell me a few details about your project and I will get back with ideas, questions, and a clear proposal.',
      pills: ['Free 30-min discovery call', 'No obligations', 'NDA upon request'],
      metrics: [
        ['< 24h', 'response on business days'],
        ['30 min', 'free consultation'],
        ['€0', 'cost for first call'],
        ['RO · EN', 'fluent in both languages'],
      ],
      subjects: ['Quote request', 'Web solutions', 'Automations', 'Partnership', 'Other'],
      interests: ['Landing page', 'Online store', 'Web platform', 'AI Automations / n8n', '24/7 Maintenance', 'Not sure yet'],
      budgets: ['under €1,000', '€1,000 – €3,000', '€3,000 – €10,000', 'over €10,000', 'Not sure yet'],
      budgetNotice: 'Budget helps me tailor the right solution. Not a commitment: final quote is provided after discussion.',
      subjectLabel: 'What is this regarding?',
      nameLabel: 'Name *',
      namePlaceholder: 'Your name',
      companyLabel: 'Company',
      companyPlaceholder: 'Company name',
      emailLabel: 'Email *',
      emailPlaceholder: 'name@example.com',
      phoneLabel: 'Phone',
      phonePlaceholder: '7xx xxx xxx',
      interestsLabel: 'What are you interested in?',
      budgetLabel: 'Estimated budget',
      methodLabel: 'Preferred contact method',
      detailsLabel: 'Project details',
      detailsPlaceholder: 'What are we building? What problem does it solve? Do you have a deadline?',
      optional: '(optional)',
      multiple: '(multiple choice)',
      gdpr: 'I agree that my data will be used solely to respond to this request. No data is shared with third parties.',
      submitEmail: '🚀 Send request via email',
      submitting: 'Sending request…',
      orDirect: 'or message directly',
      writeWa: '💬 Chat on WhatsApp (+40 727 316 319)',
      ticker: [
        'Response under 24h',
        'Free 30-min discovery call',
        'Transparent quote, zero hidden costs',
        'NDA upon request',
        'Clean & high-speed code',
        'Post-launch support',
        'Bespoke modern design',
      ],
      stepsTitle: 'What happens',
      stepsTitleGradient: 'after you submit',
      stepsEyebrow: 'Next steps',
      steps: [
        ['Reviewing request', 'I analyze your submission and prepare focused questions so we respect your time.'],
        ['30-min call', 'We discuss your objectives, target audience, and definitions of success. Completely free.'],
        ['Proposal & roadmap', 'You receive a written plan: scope, tech stack, fixed cost, and delivery schedule.'],
        ['We start building', 'Once aligned, we begin development with progress demos along the way.'],
      ],
      faqEyebrow: 'FAQ',
      faqTitle: 'Before',
      faqTitleGradient: 'you write to us',
      faqs: [
        ['How quickly do you reply?', 'On business days, I reply in under 24 hours, often the same day. WhatsApp is usually even faster.'],
        ['Does the first call cost anything?', 'No. The first 30-minute discovery call is 100% free with no strings attached.'],
        ['Do I need full technical specifications?', 'Not at all. Share your goal or problem and I will help shape it into a clear plan.'],
        ['What happens with my information? Can we sign an NDA?', 'Your info is solely used to reply to your inquiry. For sensitive projects, I happily sign an NDA upfront.'],
      ],
      successTitle: 'Message sent successfully!',
      successDesc: (name, email) => `Thank you, ${name}! I will review the details and get back to you within 24 hours at ${email}.`,
      successFaster: 'Need a faster reply?',
      successWaDesc: 'You can forward the exact same details straight to WhatsApp with one click:',
      openWaNow: '💬 Open on WhatsApp now',
      sendAnother: 'Send another message',
    },
    // Footer
    footer: {
      builtWith: 'Crafted with React & attention to detail',
    },
  },
};
