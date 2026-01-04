export type Language = 'en' | 'da';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      team: 'Management Team',
      whyUs: 'Why Choose Us',
      contact: 'Contact',
      legal: 'Legal',
    },
    
    // Header
    header: {
      cta: 'Contact Us',
    },

    // Footer
    footer: {
      company: 'White Global Services ApS',
      address: 'Jernholmen 38, st. tv, 2650 Hvidovre, Denmark',
      cvr: 'CVR: 46051165',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      followUs: 'Follow Us',
      copyright: '© {year} White Global Services ApS. All rights reserved.',
      disclaimer: 'Information provided is for general purposes only.',
    },

    // Home Page
    home: {
      hero: {
        title: 'White Global Services ApS',
        subtitle: 'Connecting Local Services with Global Trade',
        description: 'White Global Services ApS is a Denmark-based company delivering transport services, import–export consultancy, cleaning services, and international trading solutions. We serve both local and global markets with a strong operational presence across Europe and Asia.',
        trustLine: 'Trusted. Professional. Globally Connected.',
        ctaPrimary: 'Contact Us',
        ctaSecondary: 'Our Services',
      },
      whatWeDo: {
        title: 'What We Do',
        subtitle: 'Comprehensive solutions for local and international business needs',
        services: [
          {
            icon: 'truck',
            title: 'Transport & Local Operations',
            description: 'Reliable transport solutions for businesses and individuals across Denmark and Europe.',
          },
          {
            icon: 'globe',
            title: 'Import & Export Consultancy',
            description: 'Expert guidance for smooth international trade operations and compliance.',
          },
          {
            icon: 'sparkles',
            title: 'Professional Cleaning',
            description: 'Commercial cleaning services delivered with quality and reliability.',
          },
          {
            icon: 'package',
            title: 'International Trading',
            description: 'Active import and export operations between Asia and Europe.',
          },
        ],
      },
      about: {
        title: 'About Us',
        description: 'White Global Services ApS was established to deliver dependable, compliant, and cost-effective business services across borders. With deep expertise in logistics, international trade, and operations, we support businesses and individuals with tailored solutions that meet modern market demands.',
        cta: 'Learn More',
      },
      whyUs: {
        title: 'Why Choose Us',
        points: [
          'Experienced management and operations team',
          'Strong international trade networks',
          'Reliable and compliant service delivery',
          'Customer-focused solutions',
          'Local expertise with global reach',
        ],
      },
      regions: {
        title: 'Service Regions',
        subtitle: 'Denmark-based operations with Europe and Asia focus',
        europe: 'Europe',
        asia: 'Asia',
        denmark: 'Denmark HQ',
      },
      cta: {
        title: "Let's simplify your transport, trade, and service operations.",
        button: 'Get in Touch',
      },
    },

    // About Page
    about: {
      title: 'About White Global Services ApS',
      intro: 'White Global Services ApS was established to meet the growing demand for reliable local services and international trade solutions. Our company combines operational expertise with global market knowledge to deliver efficient, compliant, and value-driven services.',
      paragraph2: 'With a professional management team and strong international networks, we support businesses in navigating logistics, trade, and operational challenges with confidence.',
      mission: {
        title: 'Our Mission',
        text: 'Our mission is to deliver high-quality local and international services through professional expertise, operational excellence, and strong global partnerships—ensuring efficiency, compliance, and customer satisfaction.',
      },
      vision: {
        title: 'Our Vision',
        text: 'Our vision is to become a trusted global service provider, recognized for excellence in transport, import–export consultancy, cleaning services, and international trading between Europe and Asia.',
      },
    },

    // Services Page
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions tailored to your business needs',
      cta: 'Request a Quote',
      transport: {
        title: 'Transport Services',
        intro: 'We provide dependable transport solutions for businesses and individuals.',
        features: [
          'Local and regional transport',
          'Commercial and business transport',
          'Tailored logistics support',
        ],
      },
      importExport: {
        title: 'Import & Export Consultancy',
        intro: 'Expert guidance for smooth international trade operations.',
        features: [
          'Import–export documentation',
          'Customs & regulatory compliance guidance',
          'Trade advisory and market entry support',
          'Supply chain coordination',
        ],
      },
      cleaning: {
        title: 'Cleaning Services (Rengøring)',
        intro: 'Professional cleaning solutions for commercial clients—delivered with quality and reliability.',
        features: [
          'Office & commercial cleaning',
          'Flexible service contracts',
          'Quality-controlled and supervised staff',
        ],
      },
      trading: {
        title: 'International Trading',
        intro: 'We actively import and export a wide range of products, mainly between Asia and Europe.',
        categories: [
          'Food products',
          'Textiles and garments',
          'Machinery & industrial equipment',
          'Chemicals',
          'General trading goods',
        ],
        disclaimer: 'Product availability and regulatory requirements vary by market; contact us for specific sourcing and compliance support.',
      },
    },

    // Team Page
    team: {
      title: 'Management Team',
      subtitle: 'Experienced leadership driving our success',
      members: [
        {
          name: 'Samina Nazir',
          role: 'Managing Director',
          description: 'Provides strategic leadership, oversees company operations, and ensures compliance, growth, and long-term vision.',
        },
        {
          name: 'Nasir White',
          role: 'Manager, Local Operations',
          description: 'Manages transport services, cleaning operations, and daily local service execution.',
        },
        {
          name: 'Shahid Nawaz Khan',
          role: 'Manager, Trade & Foreign Operations',
          description: 'Leads international trade activities, import–export operations, and foreign market development.',
        },
      ],
    },

    // Why Choose Us Page
    whyUs: {
      title: 'Why Choose White Global Services ApS',
      subtitle: 'Your trusted partner for local and international business solutions',
      points: [
        'Experienced and professional management',
        'Strong Asia–Europe trade network',
        'Reliable and compliant operations',
        'Customer-focused solutions',
        'Competitive and transparent pricing',
      ],
      values: {
        title: 'Our Core Values',
        items: [
          {
            title: 'Integrity',
            description: 'Honest and transparent operations',
          },
          {
            title: 'Reliability',
            description: 'Consistent service delivery',
          },
          {
            title: 'Professionalism',
            description: 'Skilled and experienced team',
          },
          {
            title: 'Efficiency',
            description: 'Time- and cost-effective solutions',
          },
          {
            title: 'Partnership',
            description: 'Long-term client relationships',
          },
        ],
      },
    },

    // Contact Page
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you',
      info: {
        title: 'Contact Information',
        address: 'Address',
        email: 'Email',
        phone: 'Phone',
        hours: 'Business Hours',
        hoursValue: 'Monday–Friday: 9:00–17:00',
      },
      form: {
        title: 'Send us a Message',
        name: 'Full Name',
        company: 'Company',
        email: 'Email',
        phone: 'Phone',
        service: 'Service Interest',
        servicePlaceholder: 'Select a service',
        serviceOptions: {
          transport: 'Transport Services',
          importExport: 'Import/Export Consultancy',
          cleaning: 'Cleaning Services',
          trading: 'International Trading',
          other: 'Other',
        },
        message: 'Message',
        submit: 'Send Message',
        success: 'Thank you for your message! We will get back to you within 1-2 business days.',
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What is your typical response time?',
            answer: 'We aim to respond to all inquiries within 1-2 business days. For urgent matters, please call us directly.',
          },
          {
            question: 'Which areas do you serve?',
            answer: 'We operate primarily in Denmark with international trade connections across Europe and Asia.',
          },
          {
            question: 'Can you handle custom requirements?',
            answer: 'Yes, we offer tailored solutions to meet specific business needs. Contact us to discuss your requirements.',
          },
          {
            question: 'Do you offer long-term contracts?',
            answer: 'Yes, we offer flexible contract arrangements for ongoing service needs, including transport and cleaning services.',
          },
        ],
      },
    },

    // Legal Page
    legal: {
      title: 'Legal Information',
      privacy: {
        title: 'Privacy Policy',
        content: `White Global Services ApS respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you interact with our website and services.

We collect information you provide directly to us, such as when you fill out a contact form or communicate with us. This may include your name, email address, phone number, and company information.

We use this information to respond to your inquiries, provide our services, and improve our offerings. We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.

You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at info@whiteglobalservices.dk.`,
      },
      cookies: {
        title: 'Cookie Notice',
        content: 'This website uses essential cookies to ensure proper functionality. We may also use analytics cookies to understand how visitors interact with our site. By continuing to use this website, you consent to our use of cookies.',
      },
      company: {
        title: 'Company Information',
        name: 'White Global Services ApS',
        cvr: 'CVR: 46051165',
        address: 'Jernholmen 38, st. tv, 2650 Hvidovre, Denmark',
        email: 'info@whiteglobalservices.dk',
        type: 'Company Type: ApS (Private Limited Company)',
      },
      disclaimer: {
        title: 'Disclaimer',
        content: 'The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.',
      },
    },
  },

  da: {
    // Navigation
    nav: {
      home: 'Hjem',
      about: 'Om Os',
      services: 'Ydelser',
      team: 'Ledelse',
      whyUs: 'Hvorfor Os',
      contact: 'Kontakt',
      legal: 'Juridisk',
    },
    
    // Header
    header: {
      cta: 'Kontakt Os',
    },

    // Footer
    footer: {
      company: 'White Global Services ApS',
      address: 'Jernholmen 38, st. tv, 2650 Hvidovre, Danmark',
      cvr: 'CVR: 46051165',
      quickLinks: 'Hurtige Links',
      services: 'Ydelser',
      contact: 'Kontakt',
      followUs: 'Følg Os',
      copyright: '© {year} White Global Services ApS. Alle rettigheder forbeholdes.',
      disclaimer: 'Oplysninger er kun til generelle formål.',
    },

    // Home Page
    home: {
      hero: {
        title: 'White Global Services ApS',
        subtitle: 'Lokale services med global rækkevidde',
        description: 'White Global Services ApS er en dansk virksomhed, der leverer transportløsninger, import- og eksportkonsulentydelser, rengøringsservice samt international handel mellem Europa og Asien.',
        trustLine: 'Pålidelig. Professionel. Globalt forbundet.',
        ctaPrimary: 'Kontakt Os',
        ctaSecondary: 'Vores Ydelser',
      },
      whatWeDo: {
        title: 'Hvad Vi Gør',
        subtitle: 'Omfattende løsninger til lokale og internationale forretningsbehov',
        services: [
          {
            icon: 'truck',
            title: 'Transport & Lokale Operationer',
            description: 'Pålidelige transportløsninger til virksomheder og privatpersoner i Danmark og Europa.',
          },
          {
            icon: 'globe',
            title: 'Import & Eksport Rådgivning',
            description: 'Ekspertvejledning til gnidningsfri international handel og compliance.',
          },
          {
            icon: 'sparkles',
            title: 'Professionel Rengøring',
            description: 'Erhvervsrengøring leveret med kvalitet og pålidelighed.',
          },
          {
            icon: 'package',
            title: 'International Handel',
            description: 'Aktiv import og eksport mellem Asien og Europa.',
          },
        ],
      },
      about: {
        title: 'Om Os',
        description: 'White Global Services ApS blev grundlagt for at levere pålidelige, compliant og omkostningseffektive forretningsydelser på tværs af grænser. Med dyb ekspertise inden for logistik, international handel og drift støtter vi virksomheder og privatpersoner med skræddersyede løsninger.',
        cta: 'Læs Mere',
      },
      whyUs: {
        title: 'Hvorfor Vælge Os',
        points: [
          'Erfaren ledelses- og driftsteam',
          'Stærke internationale handelsnetværk',
          'Pålidelig og compliant servicelevering',
          'Kundefokuserede løsninger',
          'Lokal ekspertise med global rækkevidde',
        ],
      },
      regions: {
        title: 'Serviceregioner',
        subtitle: 'Dansk baseret drift med fokus på Europa og Asien',
        europe: 'Europa',
        asia: 'Asien',
        denmark: 'Danmark HQ',
      },
      cta: {
        title: 'Lad os forenkle din transport, handel og service operationer.',
        button: 'Kontakt Os',
      },
    },

    // About Page
    about: {
      title: 'Om White Global Services ApS',
      intro: 'White Global Services ApS blev grundlagt for at imødekomme den voksende efterspørgsel efter pålidelige lokale services og internationale handelsløsninger. Vores virksomhed kombinerer driftsekspertise med global markedsviden for at levere effektive, compliant og værdiskabende ydelser.',
      paragraph2: 'Med et professionelt ledelsesteam og stærke internationale netværk støtter vi virksomheder i at navigere logistik, handel og driftsudfordringer med tillid.',
      mission: {
        title: 'Vores Mission',
        text: 'At levere professionelle, effektive og pålidelige lokale og internationale serviceydelser med fokus på kvalitet og kundetilfredshed.',
      },
      vision: {
        title: 'Vores Vision',
        text: 'At blive en betroet global servicepartner inden for transport, handel og service.',
      },
    },

    // Services Page
    services: {
      title: 'Vores Ydelser',
      subtitle: 'Omfattende løsninger tilpasset dine forretningsbehov',
      cta: 'Anmod om Tilbud',
      transport: {
        title: 'Transportservice',
        intro: 'Vi leverer pålidelige transportløsninger til virksomheder og privatpersoner.',
        features: [
          'Lokal og regional transport',
          'Erhvervs- og virksomhedstransport',
          'Skræddersyet logistikstøtte',
        ],
      },
      importExport: {
        title: 'Import & Eksport Rådgivning',
        intro: 'Ekspertvejledning til gnidningsfri international handel.',
        features: [
          'Import-eksport dokumentation',
          'Told- og reguleringsvejledning',
          'Handelsrådgivning og markedsindgang',
          'Supply chain koordinering',
        ],
      },
      cleaning: {
        title: 'Rengøring',
        intro: 'Professionelle rengøringsløsninger til erhvervskunder—leveret med kvalitet og pålidelighed.',
        features: [
          'Kontor- og erhvervsrengøring',
          'Fleksible servicekontrakter',
          'Kvalitetskontrolleret personale',
        ],
      },
      trading: {
        title: 'International Handel',
        intro: 'Vi importerer og eksporterer aktivt et bredt udvalg af produkter, hovedsageligt mellem Asien og Europa.',
        categories: [
          'Fødevarer',
          'Tekstiler og beklædning',
          'Maskiner og industrielt udstyr',
          'Kemikalier',
          'Generelle handelsvarer',
        ],
        disclaimer: 'Produkttilgængelighed og lovkrav varierer efter marked; kontakt os for specifik sourcing og compliance support.',
      },
    },

    // Team Page
    team: {
      title: 'Ledelse',
      subtitle: 'Erfaren ledelse driver vores succes',
      members: [
        {
          name: 'Samina Nazir',
          role: 'Administrerende Direktør',
          description: 'Giver strategisk ledelse, fører tilsyn med virksomhedens drift og sikrer compliance, vækst og langsigtet vision.',
        },
        {
          name: 'Nasir White',
          role: 'Chef for Lokale Operationer',
          description: 'Styrer transporttjenester, rengøringsoperationer og daglig lokal serviceudførelse.',
        },
        {
          name: 'Shahid Nawaz Khan',
          role: 'Chef for Handel & Udenlandske Operationer',
          description: 'Leder internationale handelsaktiviteter, import-eksport operationer og udenlandsk markedsudvikling.',
        },
      ],
    },

    // Why Choose Us Page
    whyUs: {
      title: 'Hvorfor Vælge White Global Services ApS',
      subtitle: 'Din pålidelige partner til lokale og internationale forretningsløsninger',
      points: [
        'Erfaren og professionel ledelse',
        'Stærkt Asien-Europa handelsnetværk',
        'Pålidelig og compliant drift',
        'Kundefokuserede løsninger',
        'Konkurrencedygtige og transparente priser',
      ],
      values: {
        title: 'Vores Kerneværdier',
        items: [
          {
            title: 'Integritet',
            description: 'Ærlig og transparent drift',
          },
          {
            title: 'Pålidelighed',
            description: 'Konsistent servicelevering',
          },
          {
            title: 'Professionalisme',
            description: 'Dygtigt og erfarent team',
          },
          {
            title: 'Effektivitet',
            description: 'Tids- og omkostningseffektive løsninger',
          },
          {
            title: 'Partnerskab',
            description: 'Langsigtede kunderelationer',
          },
        ],
      },
    },

    // Contact Page
    contact: {
      title: 'Kontakt Os',
      subtitle: 'Vi vil gerne høre fra dig',
      info: {
        title: 'Kontaktoplysninger',
        address: 'Adresse',
        email: 'E-mail',
        phone: 'Telefon',
        hours: 'Åbningstider',
        hoursValue: 'Mandag–Fredag: 9:00–17:00',
      },
      form: {
        title: 'Send os en Besked',
        name: 'Fulde Navn',
        company: 'Virksomhed',
        email: 'E-mail',
        phone: 'Telefon',
        service: 'Serviceinteresse',
        servicePlaceholder: 'Vælg en service',
        serviceOptions: {
          transport: 'Transportservice',
          importExport: 'Import/Eksport Rådgivning',
          cleaning: 'Rengøring',
          trading: 'International Handel',
          other: 'Andet',
        },
        message: 'Besked',
        submit: 'Send Besked',
        success: 'Tak for din besked! Vi vender tilbage inden for 1-2 hverdage.',
      },
      faq: {
        title: 'Ofte Stillede Spørgsmål',
        items: [
          {
            question: 'Hvad er jeres typiske svartid?',
            answer: 'Vi bestræber os på at svare på alle henvendelser inden for 1-2 hverdage. Ved hastesager, ring venligst direkte.',
          },
          {
            question: 'Hvilke områder servicerer I?',
            answer: 'Vi opererer primært i Danmark med internationale handelsforbindelser på tværs af Europa og Asien.',
          },
          {
            question: 'Kan I håndtere specielle krav?',
            answer: 'Ja, vi tilbyder skræddersyede løsninger til specifikke forretningsbehov. Kontakt os for at diskutere dine krav.',
          },
          {
            question: 'Tilbyder I langsigtede kontrakter?',
            answer: 'Ja, vi tilbyder fleksible kontraktarrangementer til løbende servicebehov, herunder transport og rengøring.',
          },
        ],
      },
    },

    // Legal Page
    legal: {
      title: 'Juridiske Oplysninger',
      privacy: {
        title: 'Privatlivspolitik',
        content: `White Global Services ApS respekterer dit privatliv og er forpligtet til at beskytte dine personlige data. Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger og beskytter dine oplysninger, når du interagerer med vores hjemmeside og tjenester.

Vi indsamler oplysninger, du giver os direkte, såsom når du udfylder en kontaktformular eller kommunikerer med os. Dette kan omfatte dit navn, e-mailadresse, telefonnummer og virksomhedsoplysninger.

Vi bruger disse oplysninger til at besvare dine henvendelser, levere vores tjenester og forbedre vores tilbud. Vi sælger eller deler ikke dine personlige oplysninger med tredjeparter undtagen som nødvendigt for at levere vores tjenester eller som krævet ved lov.

Du har ret til at få adgang til, rette eller slette dine personlige data. For at udøve disse rettigheder, kontakt os venligst på info@whiteglobalservices.dk.`,
      },
      cookies: {
        title: 'Cookie-meddelelse',
        content: 'Denne hjemmeside bruger essentielle cookies for at sikre korrekt funktionalitet. Vi kan også bruge analysecookies for at forstå, hvordan besøgende interagerer med vores side. Ved at fortsætte med at bruge denne hjemmeside giver du samtykke til vores brug af cookies.',
      },
      company: {
        title: 'Virksomhedsoplysninger',
        name: 'White Global Services ApS',
        cvr: 'CVR: 46051165',
        address: 'Jernholmen 38, st. tv, 2650 Hvidovre, Danmark',
        email: 'info@whiteglobalservices.dk',
        type: 'Virksomhedstype: ApS (Anpartsselskab)',
      },
      disclaimer: {
        title: 'Ansvarsfraskrivelse',
        content: 'Oplysningerne på denne hjemmeside er kun til generelle informationsformål. Selvom vi bestræber os på at holde oplysningerne nøjagtige og opdaterede, giver vi ingen repræsentationer eller garantier af nogen art om fuldstændigheden, nøjagtigheden, pålideligheden eller egnetheden af oplysningerne.',
      },
    },
  },
};

export type Translations = typeof translations.en;
