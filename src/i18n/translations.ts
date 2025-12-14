export type Language = 'es' | 'en' | 'fr' | 'de';

export const languages: Language[] = ['es', 'en', 'fr', 'de'];

export const languageNames: Record<Language, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
};

export const translations = {
  es: {
    // Meta
    meta: {
      home: {
        title: 'Automatización y Chatbots para WhatsApp e Instagram | Más Leads, Más Citas',
        description: 'Especialista en chatbots de IA para WhatsApp e Instagram. Automatiza tu captación de leads, cualifica prospectos y agenda citas 24/7 sin intervención humana.',
      },
      services: {
        title: 'Servicios de Automatización y Chatbots | WhatsApp, Instagram, CRM',
        description: 'Chatbots inteligentes para WhatsApp e Instagram, automatizaciones de CRM, email y calendarios. Soluciones personalizadas para tu negocio digital.',
      },
      solutions: {
        title: 'Soluciones de Automatización por Caso de Uso | Captación y Cualificación',
        description: 'Soluciones específicas: generación de leads, agendado automático, respuesta a objeciones y recuperación de leads fríos con chatbots e IA.',
      },
      process: {
        title: 'Proceso de Implementación | Del Diagnóstico al Mantenimiento',
        description: 'Metodología probada en 5 pasos: diagnóstico, diseño conversacional, implementación, pruebas y mantenimiento continuo de tus automatizaciones.',
      },
      contact: {
        title: 'Contacto | Solicita Tu Auditoría de Automatización Gratuita',
        description: 'Cuéntame tu caso y descubre cómo automatizar tu captación de leads con chatbots para WhatsApp e Instagram. Respuesta en menos de 24h.',
      },
    },
    // Navigation
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      solutions: 'Soluciones',
      process: 'Proceso',
      contact: 'Contacto',
      cta: 'Solicitar Auditoría',
    },
    // Hero
    hero: {
      badge: 'Automatización Inteligente',
      title: 'Convierte Conversaciones en Clientes con IA',
      subtitle: 'Chatbots para WhatsApp e Instagram que captan, cualifican y agendan citas automáticamente. Más leads, más citas, menos tiempo perdido.',
      cta: 'Cuéntame Tu Caso',
      ctaSecondary: 'Ver Cómo Funciona',
      stats: {
        leads: 'Leads Cualificados',
        time: 'Ahorro de Tiempo',
        available: 'Disponibilidad',
      },
    },
    // Benefits
    benefits: {
      title: 'Por Qué Automatizar Tu Captación',
      subtitle: 'Deja de perder oportunidades por no responder a tiempo',
      items: [
        {
          title: 'Respuesta Instantánea 24/7',
          description: 'Tu chatbot responde en segundos, cualquier día, a cualquier hora. Sin esperas, sin leads perdidos.',
        },
        {
          title: 'Cualificación Automática',
          description: 'Filtra y puntúa leads según tus criterios. Solo dedica tiempo a prospectos realmente interesados.',
        },
        {
          title: 'Agendado Sin Fricción',
          description: 'Integración directa con tu calendario. Los leads agendan citas sin necesidad de intervención humana.',
        },
        {
          title: 'Escalabilidad Real',
          description: 'Atiende 10 o 1000 conversaciones simultáneas con la misma calidad y velocidad de respuesta.',
        },
        {
          title: 'Seguimiento Automatizado',
          description: 'Secuencias de follow-up que recuperan leads fríos y maximizan tu tasa de conversión.',
        },
        {
          title: 'Datos y Métricas',
          description: 'Dashboard con métricas clave: conversaciones, cualificaciones, citas agendadas y más.',
        },
      ],
    },
    // How it works
    howItWorks: {
      title: 'Cómo Funciona',
      subtitle: 'Un sistema simple pero potente',
      steps: [
        {
          number: '01',
          title: 'El lead inicia conversación',
          description: 'Por WhatsApp, Instagram o el canal que elijas. El chatbot responde al instante.',
        },
        {
          number: '02',
          title: 'Cualificación inteligente',
          description: 'Preguntas estratégicas para entender necesidades y filtrar por criterios definidos.',
        },
        {
          number: '03',
          title: 'Respuesta a objeciones',
          description: 'El bot resuelve dudas frecuentes y maneja objeciones con respuestas preparadas.',
        },
        {
          number: '04',
          title: 'Agendado o derivación',
          description: 'Lead cualificado = cita agendada automáticamente o derivación a tu equipo de cierre.',
        },
      ],
    },
    // Use Cases
    useCases: {
      title: 'Casos de Uso Principales',
      subtitle: 'Soluciones adaptadas a cada necesidad',
      items: [
        {
          title: 'Setters Automatizados',
          description: 'Chatbots que actúan como setters 24/7: cualifican, superan objeciones y agendan llamadas.',
          icon: 'calendar',
        },
        {
          title: 'Soporte y FAQs',
          description: 'Responde preguntas frecuentes al instante, liberando a tu equipo para tareas de alto valor.',
          icon: 'support',
        },
        {
          title: 'Captación de Leads',
          description: 'Convierte seguidores y visitas en leads cualificados con conversaciones naturales.',
          icon: 'magnet',
        },
        {
          title: 'Seguimiento y Nurturing',
          description: 'Secuencias automáticas que mantienen el engagement y recuperan leads fríos.',
          icon: 'repeat',
        },
      ],
    },
    // Testimonials
    testimonials: {
      title: 'Lo Que Dicen Mis Clientes',
      subtitle: 'Resultados reales de negocios como el tuyo',
      items: [
        {
          quote: 'Pasamos de responder manualmente 50 mensajes diarios a automatizar el 80%. Ahora solo hablo con leads realmente interesados.',
          author: 'María G.',
          role: 'Coach de Negocios',
          metric: '+120% citas agendadas',
        },
        {
          quote: 'El chatbot cualifica mejor que muchos humanos. Filtra perfectamente según mis criterios y agenda directamente en mi calendario.',
          author: 'Carlos R.',
          role: 'Consultor de Marketing',
          metric: '3h/día ahorradas',
        },
        {
          quote: 'Implementación rápida y soporte excelente. En 2 semanas ya estaba funcionando y generando resultados.',
          author: 'Laura M.',
          role: 'Fundadora, Agencia Digital',
          metric: '+45% tasa de respuesta',
        },
      ],
    },
    // For Who
    forWho: {
      title: 'Para Quién Es',
      isFor: {
        title: 'Esto es para ti si...',
        items: [
          'Tienes un negocio digital y recibes consultas por WhatsApp o Instagram',
          'Pierdes leads por no responder a tiempo',
          'Quieres más citas sin contratar más setters',
          'Buscas escalar sin que escalen tus horas de trabajo',
          'Valoras tu tiempo y quieres automatizar tareas repetitivas',
        ],
      },
      isNotFor: {
        title: 'Esto NO es para ti si...',
        items: [
          'No tienes un producto o servicio validado',
          'Esperas resultados mágicos sin optimizar',
          'No estás dispuesto a invertir en tu negocio',
          'Prefieres hacer todo manualmente',
        ],
      },
    },
    // FAQ
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        {
          question: '¿Cuánto tiempo tarda la implementación?',
          answer: 'Dependiendo de la complejidad, entre 1 y 3 semanas. Un chatbot básico de cualificación puede estar listo en 7 días.',
        },
        {
          question: '¿Qué necesito para empezar?',
          answer: 'Una cuenta de WhatsApp Business o Instagram para empresas, acceso a las herramientas que uses (CRM, calendario) y definir tus criterios de cualificación.',
        },
        {
          question: '¿Es compatible con mi CRM/herramientas actuales?',
          answer: 'Trabajo con la mayoría de CRMs y herramientas del mercado: HubSpot, Pipedrive, Calendly, Google Calendar, Notion, Airtable, y muchos más.',
        },
        {
          question: '¿Quién se encarga del mantenimiento?',
          answer: 'Ofrezco planes de mantenimiento mensual que incluyen optimizaciones, ajustes y soporte. También puedo formar a tu equipo para gestión interna.',
        },
        {
          question: '¿Cuáles son los límites del bot?',
          answer: 'El bot maneja conversaciones predefinidas y variaciones naturales. Para casos muy específicos o complejos, deriva la conversación a un humano.',
        },
        {
          question: '¿Cómo se manejan los datos y la privacidad?',
          answer: 'Todos los datos se procesan cumpliendo RGPD. Las conversaciones se almacenan de forma segura y puedes exportar o eliminar datos en cualquier momento.',
        },
        {
          question: '¿Funciona con WhatsApp personal?',
          answer: 'Se requiere WhatsApp Business API para automatizaciones profesionales. Te ayudo con la configuración si no lo tienes.',
        },
        {
          question: '¿Puedo ver el bot antes de contratar?',
          answer: 'Sí, en la auditoría inicial te muestro ejemplos reales y puedes interactuar con demos de chatbots similares a lo que necesitas.',
        },
      ],
    },
    // CTA Section
    ctaSection: {
      title: '¿Listo Para Automatizar Tu Captación?',
      subtitle: 'Agenda una auditoría gratuita y descubre cómo un chatbot puede transformar tu negocio.',
      cta: 'Solicitar Auditoría Gratuita',
    },
    // Footer
    footer: {
      description: 'Especialista en automatización y chatbots de IA para negocios digitales.',
      links: {
        services: 'Servicios',
        solutions: 'Soluciones',
        process: 'Proceso',
        contact: 'Contacto',
      },
      legal: {
        privacy: 'Política de Privacidad',
        terms: 'Aviso Legal',
        cookies: 'Cookies',
      },
      copyright: '© 2024 Todos los derechos reservados.',
    },
    // Services Page
    services: {
      title: 'Servicios de Automatización y Chatbots',
      subtitle: 'Soluciones personalizadas para escalar tu captación de leads',
      whatsapp: {
        title: 'Chatbots para WhatsApp',
        description: 'Automatiza tu canal más directo de comunicación con clientes.',
        features: [
          'Respuesta instantánea a mensajes entrantes',
          'Cualificación de leads con preguntas estratégicas',
          'Respuesta automática a FAQs y objeciones',
          'Derivación inteligente a tu equipo de ventas',
          'Integración con tu CRM y calendario',
        ],
        results: 'Reduce tiempo de respuesta de horas a segundos',
        timeline: 'Implementación: 1-2 semanas',
      },
      instagram: {
        title: 'Chatbots para Instagram',
        description: 'Convierte seguidores en clientes con automatización de DMs.',
        features: [
          'Respuesta automática a DMs y menciones',
          'Activación por keywords en comentarios',
          'Filtros y cualificación de interesados',
          'Secuencias de nurturing automatizadas',
          'Agendado directo desde Instagram',
        ],
        results: 'Aprovecha el 100% de las interacciones',
        timeline: 'Implementación: 2-3 semanas',
      },
      automations: {
        title: 'Automatizaciones de Flujos',
        description: 'Conecta tus herramientas y elimina tareas manuales repetitivas.',
        features: [
          'Sincronización entre CRM, email y calendario',
          'Pipelines de ventas automatizados',
          'Notificaciones y alertas inteligentes',
          'Generación automática de reportes',
          'Workflows personalizados',
        ],
        results: 'Ahorra +10 horas semanales en tareas manuales',
        timeline: 'Implementación: 1-3 semanas',
      },
      integrations: {
        title: 'Integraciones',
        description: 'Conecta todas tus herramientas en un ecosistema fluido.',
        features: [
          'CRMs: HubSpot, Pipedrive, Salesforce, etc.',
          'Calendarios: Calendly, Google Calendar, Cal.com',
          'Formularios: Typeform, Tally, Google Forms',
          'Hojas de cálculo: Google Sheets, Airtable, Notion',
          'Email: Mailchimp, ConvertKit, ActiveCampaign',
        ],
        results: 'Flujo de datos sin interrupciones',
        timeline: 'Configuración: 3-5 días por integración',
      },
    },
    // Solutions Page
    solutions: {
      title: 'Soluciones por Caso de Uso',
      subtitle: 'Problemas específicos, soluciones específicas',
      items: [
        {
          title: 'Generar y Filtrar Leads Automáticamente',
          problem: 'Recibes muchas consultas pero pocas son leads cualificados. Pierdes tiempo con curiosos.',
          solution: 'Chatbot que filtra automáticamente según tus criterios: presupuesto, urgencia, tipo de proyecto.',
          result: 'Solo hablas con leads que cumplen tus requisitos. +60% eficiencia en ventas.',
          cta: 'Automatizar mi filtrado',
        },
        {
          title: 'Agendar Llamadas Sin Intervención',
          problem: 'El back-and-forth para coordinar horarios consume horas cada semana.',
          solution: 'Bot que muestra disponibilidad, gestiona zonas horarias y confirma citas automáticamente.',
          result: 'Citas agendadas 24/7 sin tu intervención. Cero no-shows con recordatorios.',
          cta: 'Automatizar mi agenda',
        },
        {
          title: 'Responder Objeciones y FAQs',
          problem: 'Las mismas preguntas una y otra vez. Tu equipo pierde tiempo respondiendo lo mismo.',
          solution: 'Base de conocimiento integrada en el chatbot que responde naturalmente a dudas frecuentes.',
          result: 'Resolución instantánea del 80% de dudas. Equipo enfocado en cerrar ventas.',
          cta: 'Automatizar respuestas',
        },
        {
          title: 'Recuperación de Leads Fríos',
          problem: 'Leads que mostraron interés pero nunca cerraron. Base de datos que no trabajas.',
          solution: 'Secuencias automatizadas de reactivación con mensajes personalizados y ofertas.',
          result: 'Reactiva hasta el 15% de leads fríos. Ventas extra sin inversión en ads.',
          cta: 'Recuperar mis leads',
        },
      ],
    },
    // Process Page
    process: {
      title: 'Proceso de Implementación',
      subtitle: 'Una metodología probada para resultados garantizados',
      steps: [
        {
          number: '01',
          title: 'Diagnóstico',
          description: 'Analizamos tu situación actual: canales, volumen de leads, herramientas, objetivos y métricas clave.',
          duration: '1-2 días',
          deliverable: 'Informe de diagnóstico + propuesta personalizada',
        },
        {
          number: '02',
          title: 'Diseño Conversacional',
          description: 'Creamos los flujos de conversación, scripts, respuestas a objeciones y criterios de cualificación.',
          duration: '3-5 días',
          deliverable: 'Mapa de flujos + scripts aprobados',
        },
        {
          number: '03',
          title: 'Implementación',
          description: 'Construimos el chatbot, configuramos integraciones y conectamos con tus herramientas existentes.',
          duration: '5-10 días',
          deliverable: 'Bot funcional en entorno de pruebas',
        },
        {
          number: '04',
          title: 'Pruebas y Optimización',
          description: 'Testing exhaustivo, ajustes de respuestas y optimización basada en casos reales.',
          duration: '3-5 días',
          deliverable: 'Bot optimizado listo para producción',
        },
        {
          number: '05',
          title: 'Lanzamiento y Mantenimiento',
          description: 'Go-live, monitorización inicial y plan de mantenimiento continuo con mejoras mensuales.',
          duration: 'Ongoing',
          deliverable: 'Reportes mensuales + optimizaciones continuas',
        },
      ],
    },
    // Contact Page
    contact: {
      title: 'Cuéntame Tu Caso',
      subtitle: 'Completa el formulario y te respondo en menos de 24 horas',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        channel: 'Canal de interés',
        channelOptions: {
          whatsapp: 'WhatsApp',
          instagram: 'Instagram',
          both: 'Ambos',
        },
        businessType: 'Tipo de negocio',
        businessTypePlaceholder: 'Ej: Coaching, Agencia, Consultoría...',
        goal: 'Objetivo principal',
        goalOptions: {
          leads: 'Generar más leads',
          appointments: 'Agendar más llamadas',
          support: 'Automatizar soporte',
          other: 'Otro',
        },
        message: 'Cuéntame tu caso',
        messagePlaceholder: 'Describe brevemente tu situación actual y qué te gustaría lograr...',
        privacy: 'Acepto la política de privacidad y el tratamiento de mis datos',
        submit: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado! Te respondo en menos de 24h.',
        error: 'Error al enviar. Por favor, inténtalo de nuevo.',
      },
      alternatives: {
        title: 'Otras formas de contacto',
        email: 'Email directo',
        social: 'Redes sociales',
      },
    },
    // Legal Pages
    legal: {
      privacy: {
        title: 'Política de Privacidad',
        content: 'Contenido de la política de privacidad. Este texto debe ser personalizado según la legislación aplicable y los datos específicos del negocio.',
      },
      terms: {
        title: 'Aviso Legal',
        content: 'Contenido del aviso legal. Este texto debe ser personalizado según la legislación aplicable y los datos específicos del negocio.',
      },
      cookies: {
        title: 'Política de Cookies',
        content: 'Contenido de la política de cookies. Este texto debe ser personalizado según la legislación aplicable y los datos específicos del negocio.',
      },
    },
  },
  en: {
    meta: {
      home: {
        title: 'WhatsApp & Instagram Chatbots | More Leads, More Appointments',
        description: 'AI chatbot specialist for WhatsApp and Instagram. Automate lead capture, qualify prospects, and schedule appointments 24/7 without human intervention.',
      },
      services: {
        title: 'Automation & Chatbot Services | WhatsApp, Instagram, CRM',
        description: 'Intelligent chatbots for WhatsApp and Instagram, CRM automations, email and calendars. Custom solutions for your digital business.',
      },
      solutions: {
        title: 'Automation Solutions by Use Case | Lead Capture & Qualification',
        description: 'Specific solutions: lead generation, automatic scheduling, objection handling, and cold lead recovery with chatbots and AI.',
      },
      process: {
        title: 'Implementation Process | From Diagnosis to Maintenance',
        description: 'Proven 5-step methodology: diagnosis, conversational design, implementation, testing, and continuous maintenance of your automations.',
      },
      contact: {
        title: 'Contact | Request Your Free Automation Audit',
        description: 'Tell me about your case and discover how to automate lead capture with WhatsApp and Instagram chatbots. Response within 24h.',
      },
    },
    nav: {
      home: 'Home',
      services: 'Services',
      solutions: 'Solutions',
      process: 'Process',
      contact: 'Contact',
      cta: 'Request Audit',
    },
    hero: {
      badge: 'Intelligent Automation',
      title: 'Turn Conversations Into Customers With AI',
      subtitle: 'WhatsApp and Instagram chatbots that capture, qualify, and schedule appointments automatically. More leads, more appointments, less wasted time.',
      cta: 'Tell Me Your Case',
      ctaSecondary: 'See How It Works',
      stats: {
        leads: 'Qualified Leads',
        time: 'Time Saved',
        available: 'Availability',
      },
    },
    benefits: {
      title: 'Why Automate Your Lead Capture',
      subtitle: 'Stop losing opportunities by not responding in time',
      items: [
        {
          title: 'Instant 24/7 Response',
          description: 'Your chatbot responds in seconds, any day, any time. No waiting, no lost leads.',
        },
        {
          title: 'Automatic Qualification',
          description: 'Filter and score leads based on your criteria. Only spend time on truly interested prospects.',
        },
        {
          title: 'Frictionless Scheduling',
          description: 'Direct calendar integration. Leads book appointments without human intervention.',
        },
        {
          title: 'Real Scalability',
          description: 'Handle 10 or 1000 simultaneous conversations with the same quality and speed.',
        },
        {
          title: 'Automated Follow-up',
          description: 'Follow-up sequences that recover cold leads and maximize your conversion rate.',
        },
        {
          title: 'Data and Metrics',
          description: 'Dashboard with key metrics: conversations, qualifications, scheduled appointments, and more.',
        },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'A simple but powerful system',
      steps: [
        {
          number: '01',
          title: 'Lead starts conversation',
          description: 'Via WhatsApp, Instagram, or your chosen channel. The chatbot responds instantly.',
        },
        {
          number: '02',
          title: 'Intelligent qualification',
          description: 'Strategic questions to understand needs and filter by defined criteria.',
        },
        {
          number: '03',
          title: 'Objection handling',
          description: 'The bot resolves common questions and handles objections with prepared responses.',
        },
        {
          number: '04',
          title: 'Scheduling or handoff',
          description: 'Qualified lead = automatically scheduled appointment or handoff to your closing team.',
        },
      ],
    },
    useCases: {
      title: 'Main Use Cases',
      subtitle: 'Solutions adapted to each need',
      items: [
        {
          title: 'Automated Setters',
          description: 'Chatbots that act as 24/7 setters: qualify, overcome objections, and book calls.',
          icon: 'calendar',
        },
        {
          title: 'Support & FAQs',
          description: 'Answer frequent questions instantly, freeing your team for high-value tasks.',
          icon: 'support',
        },
        {
          title: 'Lead Capture',
          description: 'Convert followers and visitors into qualified leads through natural conversations.',
          icon: 'magnet',
        },
        {
          title: 'Follow-up & Nurturing',
          description: 'Automatic sequences that maintain engagement and recover cold leads.',
          icon: 'repeat',
        },
      ],
    },
    testimonials: {
      title: 'What My Clients Say',
      subtitle: 'Real results from businesses like yours',
      items: [
        {
          quote: 'We went from manually responding to 50 daily messages to automating 80%. Now I only talk to truly interested leads.',
          author: 'Maria G.',
          role: 'Business Coach',
          metric: '+120% appointments booked',
        },
        {
          quote: 'The chatbot qualifies better than many humans. It filters perfectly according to my criteria and schedules directly in my calendar.',
          author: 'Carlos R.',
          role: 'Marketing Consultant',
          metric: '3h/day saved',
        },
        {
          quote: 'Quick implementation and excellent support. Within 2 weeks it was up and running and generating results.',
          author: 'Laura M.',
          role: 'Founder, Digital Agency',
          metric: '+45% response rate',
        },
      ],
    },
    forWho: {
      title: 'Who Is This For',
      isFor: {
        title: 'This is for you if...',
        items: [
          'You have a digital business and receive inquiries via WhatsApp or Instagram',
          'You lose leads by not responding in time',
          'You want more appointments without hiring more setters',
          'You want to scale without scaling your work hours',
          'You value your time and want to automate repetitive tasks',
        ],
      },
      isNotFor: {
        title: 'This is NOT for you if...',
        items: [
          'You don\'t have a validated product or service',
          'You expect magic results without optimization',
          'You\'re not willing to invest in your business',
          'You prefer to do everything manually',
        ],
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'How long does implementation take?',
          answer: 'Depending on complexity, between 1 and 3 weeks. A basic qualification chatbot can be ready in 7 days.',
        },
        {
          question: 'What do I need to get started?',
          answer: 'A WhatsApp Business or Instagram Business account, access to your tools (CRM, calendar), and defined qualification criteria.',
        },
        {
          question: 'Is it compatible with my current CRM/tools?',
          answer: 'I work with most CRMs and tools on the market: HubSpot, Pipedrive, Calendly, Google Calendar, Notion, Airtable, and many more.',
        },
        {
          question: 'Who handles maintenance?',
          answer: 'I offer monthly maintenance plans that include optimizations, adjustments, and support. I can also train your team for internal management.',
        },
        {
          question: 'What are the bot\'s limitations?',
          answer: 'The bot handles predefined conversations and natural variations. For very specific or complex cases, it hands off to a human.',
        },
        {
          question: 'How is data and privacy handled?',
          answer: 'All data is processed in compliance with GDPR. Conversations are stored securely and you can export or delete data at any time.',
        },
        {
          question: 'Does it work with personal WhatsApp?',
          answer: 'WhatsApp Business API is required for professional automations. I help with setup if you don\'t have it.',
        },
        {
          question: 'Can I see the bot before hiring?',
          answer: 'Yes, in the initial audit I show you real examples and you can interact with demos of chatbots similar to what you need.',
        },
      ],
    },
    ctaSection: {
      title: 'Ready To Automate Your Lead Capture?',
      subtitle: 'Schedule a free audit and discover how a chatbot can transform your business.',
      cta: 'Request Free Audit',
    },
    footer: {
      description: 'Specialist in AI automation and chatbots for digital businesses.',
      links: {
        services: 'Services',
        solutions: 'Solutions',
        process: 'Process',
        contact: 'Contact',
      },
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Legal Notice',
        cookies: 'Cookies',
      },
      copyright: '© 2024 All rights reserved.',
    },
    services: {
      title: 'Automation and Chatbot Services',
      subtitle: 'Customized solutions to scale your lead capture',
      whatsapp: {
        title: 'WhatsApp Chatbots',
        description: 'Automate your most direct customer communication channel.',
        features: [
          'Instant response to incoming messages',
          'Lead qualification with strategic questions',
          'Automatic response to FAQs and objections',
          'Intelligent handoff to your sales team',
          'Integration with your CRM and calendar',
        ],
        results: 'Reduce response time from hours to seconds',
        timeline: 'Implementation: 2-3 weeks',
      },
      instagram: {
        title: 'Instagram Chatbots',
        description: 'Convert followers into customers with DM automation.',
        features: [
          'Automatic response to DMs and mentions',
          'Keyword activation from comments',
          'Filters and qualification of interested parties',
          'Automated nurturing sequences',
          'Direct scheduling from Instagram',
        ],
        results: 'Leverage 100% of interactions',
        timeline: 'Implementation: 1-2 weeks',
      },
      automations: {
        title: 'Workflow Automations',
        description: 'Connect your tools and eliminate repetitive manual tasks.',
        features: [
          'Sync between CRM, email, and calendar',
          'Automated sales pipelines',
          'Smart notifications and alerts',
          'Automatic report generation',
          'Custom workflows',
        ],
        results: 'Save +10 hours weekly on manual tasks',
        timeline: 'Implementation: 1-3 weeks',
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect all your tools into a fluid ecosystem.',
        features: [
          'CRMs: HubSpot, Pipedrive, Salesforce, etc.',
          'Calendars: Calendly, Google Calendar, Cal.com',
          'Forms: Typeform, Tally, Google Forms',
          'Spreadsheets: Google Sheets, Airtable, Notion',
          'Email: Mailchimp, ConvertKit, ActiveCampaign',
        ],
        results: 'Seamless data flow',
        timeline: 'Setup: 3-5 days per integration',
      },
    },
    solutions: {
      title: 'Solutions by Use Case',
      subtitle: 'Specific problems, specific solutions',
      items: [
        {
          title: 'Generate and Filter Leads Automatically',
          problem: 'You receive many inquiries but few are qualified leads. You waste time with tire-kickers.',
          solution: 'Chatbot that automatically filters according to your criteria: budget, urgency, project type.',
          result: 'You only talk to leads that meet your requirements. +60% sales efficiency.',
          cta: 'Automate my filtering',
        },
        {
          title: 'Schedule Calls Without Intervention',
          problem: 'Back-and-forth to coordinate schedules consumes hours every week.',
          solution: 'Bot that shows availability, manages time zones, and confirms appointments automatically.',
          result: '24/7 scheduled appointments without your intervention. Zero no-shows with reminders.',
          cta: 'Automate my calendar',
        },
        {
          title: 'Answer Objections and FAQs',
          problem: 'The same questions over and over. Your team wastes time answering the same things.',
          solution: 'Knowledge base integrated into the chatbot that naturally responds to frequent questions.',
          result: 'Instant resolution of 80% of questions. Team focused on closing sales.',
          cta: 'Automate responses',
        },
        {
          title: 'Cold Lead Recovery',
          problem: 'Leads who showed interest but never closed. A database you don\'t work on.',
          solution: 'Automated reactivation sequences with personalized messages and offers.',
          result: 'Reactivate up to 15% of cold leads. Extra sales without ad investment.',
          cta: 'Recover my leads',
        },
      ],
    },
    process: {
      title: 'Implementation Process',
      subtitle: 'A proven methodology for guaranteed results',
      steps: [
        {
          number: '01',
          title: 'Diagnosis',
          description: 'We analyze your current situation: channels, lead volume, tools, objectives, and key metrics.',
          duration: '1-2 days',
          deliverable: 'Diagnosis report + customized proposal',
        },
        {
          number: '02',
          title: 'Conversational Design',
          description: 'We create conversation flows, scripts, objection responses, and qualification criteria.',
          duration: '3-5 days',
          deliverable: 'Flow map + approved scripts',
        },
        {
          number: '03',
          title: 'Implementation',
          description: 'We build the chatbot, configure integrations, and connect with your existing tools.',
          duration: '5-10 days',
          deliverable: 'Functional bot in test environment',
        },
        {
          number: '04',
          title: 'Testing and Optimization',
          description: 'Exhaustive testing, response adjustments, and optimization based on real cases.',
          duration: '3-5 days',
          deliverable: 'Optimized bot ready for production',
        },
        {
          number: '05',
          title: 'Launch and Maintenance',
          description: 'Go-live, initial monitoring, and continuous maintenance plan with monthly improvements.',
          duration: 'Ongoing',
          deliverable: 'Monthly reports + continuous optimizations',
        },
      ],
    },
    contact: {
      title: 'Tell Me Your Case',
      subtitle: 'Fill out the form and I\'ll respond within 24 hours',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        channel: 'Channel of interest',
        channelOptions: {
          whatsapp: 'WhatsApp',
          instagram: 'Instagram',
          both: 'Both',
        },
        businessType: 'Business type',
        businessTypePlaceholder: 'E.g.: Coaching, Agency, Consulting...',
        goal: 'Main goal',
        goalOptions: {
          leads: 'Generate more leads',
          appointments: 'Schedule more calls',
          support: 'Automate support',
          other: 'Other',
        },
        message: 'Tell me your case',
        messagePlaceholder: 'Briefly describe your current situation and what you\'d like to achieve...',
        privacy: 'I accept the privacy policy and the processing of my data',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent! I\'ll respond within 24h.',
        error: 'Error sending. Please try again.',
      },
      alternatives: {
        title: 'Other ways to contact',
        email: 'Direct email',
        social: 'Social media',
      },
    },
    legal: {
      privacy: {
        title: 'Privacy Policy',
        content: 'Privacy policy content. This text should be customized according to applicable legislation and specific business data.',
      },
      terms: {
        title: 'Legal Notice',
        content: 'Legal notice content. This text should be customized according to applicable legislation and specific business data.',
      },
      cookies: {
        title: 'Cookie Policy',
        content: 'Cookie policy content. This text should be customized according to applicable legislation and specific business data.',
      },
    },
  },
  fr: {
    meta: {
      home: {
        title: 'Chatbots WhatsApp & Instagram | Plus de Leads, Plus de RDV',
        description: 'Spécialiste en chatbots IA pour WhatsApp et Instagram. Automatisez la capture de leads, qualifiez les prospects et planifiez des RDV 24/7.',
      },
      services: {
        title: 'Services d\'Automatisation et Chatbots | WhatsApp, Instagram, CRM',
        description: 'Chatbots intelligents pour WhatsApp et Instagram, automatisations CRM, email et calendriers. Solutions personnalisées pour votre business digital.',
      },
      solutions: {
        title: 'Solutions d\'Automatisation par Cas d\'Usage | Capture et Qualification',
        description: 'Solutions spécifiques : génération de leads, prise de RDV automatique, gestion des objections et réactivation de leads froids avec chatbots et IA.',
      },
      process: {
        title: 'Processus d\'Implémentation | Du Diagnostic à la Maintenance',
        description: 'Méthodologie éprouvée en 5 étapes : diagnostic, design conversationnel, implémentation, tests et maintenance continue de vos automatisations.',
      },
      contact: {
        title: 'Contact | Demandez Votre Audit d\'Automatisation Gratuit',
        description: 'Parlez-moi de votre cas et découvrez comment automatiser la capture de leads avec des chatbots WhatsApp et Instagram. Réponse sous 24h.',
      },
    },
    nav: {
      home: 'Accueil',
      services: 'Services',
      solutions: 'Solutions',
      process: 'Processus',
      contact: 'Contact',
      cta: 'Demander un Audit',
    },
    hero: {
      badge: 'Automatisation Intelligente',
      title: 'Transformez les Conversations en Clients avec l\'IA',
      subtitle: 'Chatbots WhatsApp et Instagram qui capturent, qualifient et planifient des RDV automatiquement. Plus de leads, plus de RDV, moins de temps perdu.',
      cta: 'Parlez-moi de Votre Cas',
      ctaSecondary: 'Voir Comment Ça Marche',
      stats: {
        leads: 'Leads Qualifiés',
        time: 'Temps Économisé',
        available: 'Disponibilité',
      },
    },
    benefits: {
      title: 'Pourquoi Automatiser Votre Capture de Leads',
      subtitle: 'Arrêtez de perdre des opportunités en ne répondant pas à temps',
      items: [
        {
          title: 'Réponse Instantanée 24/7',
          description: 'Votre chatbot répond en secondes, n\'importe quel jour, à n\'importe quelle heure. Pas d\'attente, pas de leads perdus.',
        },
        {
          title: 'Qualification Automatique',
          description: 'Filtrez et notez les leads selon vos critères. Ne consacrez du temps qu\'aux prospects vraiment intéressés.',
        },
        {
          title: 'Planification Sans Friction',
          description: 'Intégration directe avec votre calendrier. Les leads prennent RDV sans intervention humaine.',
        },
        {
          title: 'Scalabilité Réelle',
          description: 'Gérez 10 ou 1000 conversations simultanées avec la même qualité et rapidité.',
        },
        {
          title: 'Suivi Automatisé',
          description: 'Séquences de relance qui récupèrent les leads froids et maximisent votre taux de conversion.',
        },
        {
          title: 'Données et Métriques',
          description: 'Tableau de bord avec métriques clés : conversations, qualifications, RDV planifiés, et plus.',
        },
      ],
    },
    howItWorks: {
      title: 'Comment Ça Marche',
      subtitle: 'Un système simple mais puissant',
      steps: [
        {
          number: '01',
          title: 'Le lead démarre la conversation',
          description: 'Via WhatsApp, Instagram ou le canal de votre choix. Le chatbot répond instantanément.',
        },
        {
          number: '02',
          title: 'Qualification intelligente',
          description: 'Questions stratégiques pour comprendre les besoins et filtrer selon vos critères.',
        },
        {
          number: '03',
          title: 'Gestion des objections',
          description: 'Le bot résout les questions courantes et gère les objections avec des réponses préparées.',
        },
        {
          number: '04',
          title: 'Planification ou transfert',
          description: 'Lead qualifié = RDV planifié automatiquement ou transfert à votre équipe de closing.',
        },
      ],
    },
    useCases: {
      title: 'Principaux Cas d\'Utilisation',
      subtitle: 'Solutions adaptées à chaque besoin',
      items: [
        {
          title: 'Setters Automatisés',
          description: 'Chatbots qui agissent comme setters 24/7 : qualifient, surmontent les objections et prennent des RDV.',
          icon: 'calendar',
        },
        {
          title: 'Support & FAQs',
          description: 'Répondez aux questions fréquentes instantanément, libérant votre équipe pour des tâches à haute valeur.',
          icon: 'support',
        },
        {
          title: 'Capture de Leads',
          description: 'Convertissez followers et visiteurs en leads qualifiés grâce à des conversations naturelles.',
          icon: 'magnet',
        },
        {
          title: 'Suivi & Nurturing',
          description: 'Séquences automatiques qui maintiennent l\'engagement et récupèrent les leads froids.',
          icon: 'repeat',
        },
      ],
    },
    testimonials: {
      title: 'Ce Que Disent Mes Clients',
      subtitle: 'Résultats réels d\'entreprises comme la vôtre',
      items: [
        {
          quote: 'Nous sommes passés de 50 messages manuels par jour à automatiser 80%. Maintenant je ne parle qu\'aux leads vraiment intéressés.',
          author: 'Marie G.',
          role: 'Coach Business',
          metric: '+120% RDV planifiés',
        },
        {
          quote: 'Le chatbot qualifie mieux que beaucoup d\'humains. Il filtre parfaitement selon mes critères et planifie directement dans mon agenda.',
          author: 'Charles R.',
          role: 'Consultant Marketing',
          metric: '3h/jour économisées',
        },
        {
          quote: 'Implémentation rapide et excellent support. En 2 semaines c\'était opérationnel et générait des résultats.',
          author: 'Laura M.',
          role: 'Fondatrice, Agence Digitale',
          metric: '+45% taux de réponse',
        },
      ],
    },
    forWho: {
      title: 'Pour Qui Est-Ce',
      isFor: {
        title: 'C\'est pour vous si...',
        items: [
          'Vous avez un business digital et recevez des demandes via WhatsApp ou Instagram',
          'Vous perdez des leads en ne répondant pas à temps',
          'Vous voulez plus de RDV sans embaucher plus de setters',
          'Vous voulez scaler sans augmenter vos heures de travail',
          'Vous valorisez votre temps et voulez automatiser les tâches répétitives',
        ],
      },
      isNotFor: {
        title: 'Ce n\'est PAS pour vous si...',
        items: [
          'Vous n\'avez pas de produit ou service validé',
          'Vous attendez des résultats magiques sans optimisation',
          'Vous n\'êtes pas prêt à investir dans votre business',
          'Vous préférez tout faire manuellement',
        ],
      },
    },
    faq: {
      title: 'Questions Fréquentes',
      items: [
        {
          question: 'Combien de temps prend l\'implémentation ?',
          answer: 'Selon la complexité, entre 1 et 3 semaines. Un chatbot de qualification basique peut être prêt en 7 jours.',
        },
        {
          question: 'De quoi ai-je besoin pour commencer ?',
          answer: 'Un compte WhatsApp Business ou Instagram Business, accès à vos outils (CRM, calendrier), et vos critères de qualification définis.',
        },
        {
          question: 'Est-ce compatible avec mon CRM/outils actuels ?',
          answer: 'Je travaille avec la plupart des CRM et outils du marché : HubSpot, Pipedrive, Calendly, Google Calendar, Notion, Airtable, et bien d\'autres.',
        },
        {
          question: 'Qui gère la maintenance ?',
          answer: 'J\'offre des plans de maintenance mensuels incluant optimisations, ajustements et support. Je peux aussi former votre équipe pour une gestion interne.',
        },
        {
          question: 'Quelles sont les limites du bot ?',
          answer: 'Le bot gère les conversations prédéfinies et variations naturelles. Pour les cas très spécifiques ou complexes, il transfère à un humain.',
        },
        {
          question: 'Comment sont gérées les données et la confidentialité ?',
          answer: 'Toutes les données sont traitées en conformité RGPD. Les conversations sont stockées de façon sécurisée et vous pouvez exporter ou supprimer les données à tout moment.',
        },
        {
          question: 'Ça fonctionne avec WhatsApp personnel ?',
          answer: 'L\'API WhatsApp Business est requise pour les automatisations professionnelles. Je vous aide avec la configuration si vous ne l\'avez pas.',
        },
        {
          question: 'Puis-je voir le bot avant de m\'engager ?',
          answer: 'Oui, lors de l\'audit initial je vous montre des exemples réels et vous pouvez interagir avec des démos de chatbots similaires à vos besoins.',
        },
      ],
    },
    ctaSection: {
      title: 'Prêt à Automatiser Votre Capture de Leads ?',
      subtitle: 'Planifiez un audit gratuit et découvrez comment un chatbot peut transformer votre business.',
      cta: 'Demander un Audit Gratuit',
    },
    footer: {
      description: 'Spécialiste en automatisation et chatbots IA pour business digitaux.',
      links: {
        services: 'Services',
        solutions: 'Solutions',
        process: 'Processus',
        contact: 'Contact',
      },
      legal: {
        privacy: 'Politique de Confidentialité',
        terms: 'Mentions Légales',
        cookies: 'Cookies',
      },
      copyright: '© 2024 Tous droits réservés.',
    },
    services: {
      title: 'Services d\'Automatisation et Chatbots',
      subtitle: 'Solutions personnalisées pour scaler votre capture de leads',
      whatsapp: {
        title: 'Chatbots WhatsApp',
        description: 'Automatisez votre canal de communication client le plus direct.',
        features: [
          'Réponse instantanée aux messages entrants',
          'Qualification des leads avec questions stratégiques',
          'Réponse automatique aux FAQs et objections',
          'Transfert intelligent vers votre équipe commerciale',
          'Intégration avec votre CRM et calendrier',
        ],
        results: 'Réduisez le temps de réponse de heures à secondes',
        timeline: 'Implémentation : 2-3 semaines',
      },
      instagram: {
        title: 'Chatbots Instagram',
        description: 'Convertissez vos followers en clients avec l\'automatisation des DMs.',
        features: [
          'Réponse automatique aux DMs et mentions',
          'Activation par mots-clés dans les commentaires',
          'Filtres et qualification des intéressés',
          'Séquences de nurturing automatisées',
          'Planification directe depuis Instagram',
        ],
        results: 'Exploitez 100% des interactions',
        timeline: 'Implémentation : 1-2 semaines',
      },
      automations: {
        title: 'Automatisations de Workflows',
        description: 'Connectez vos outils et éliminez les tâches manuelles répétitives.',
        features: [
          'Synchronisation entre CRM, email et calendrier',
          'Pipelines de vente automatisés',
          'Notifications et alertes intelligentes',
          'Génération automatique de rapports',
          'Workflows personnalisés',
        ],
        results: 'Économisez +10 heures par semaine sur les tâches manuelles',
        timeline: 'Implémentation : 1-3 semaines',
      },
      integrations: {
        title: 'Intégrations',
        description: 'Connectez tous vos outils dans un écosystème fluide.',
        features: [
          'CRMs : HubSpot, Pipedrive, Salesforce, etc.',
          'Calendriers : Calendly, Google Calendar, Cal.com',
          'Formulaires : Typeform, Tally, Google Forms',
          'Tableurs : Google Sheets, Airtable, Notion',
          'Email : Mailchimp, ConvertKit, ActiveCampaign',
        ],
        results: 'Flux de données sans interruption',
        timeline: 'Configuration : 3-5 jours par intégration',
      },
    },
    solutions: {
      title: 'Solutions par Cas d\'Usage',
      subtitle: 'Problèmes spécifiques, solutions spécifiques',
      items: [
        {
          title: 'Générer et Filtrer les Leads Automatiquement',
          problem: 'Vous recevez beaucoup de demandes mais peu sont des leads qualifiés. Vous perdez du temps avec les curieux.',
          solution: 'Chatbot qui filtre automatiquement selon vos critères : budget, urgence, type de projet.',
          result: 'Vous ne parlez qu\'aux leads qui répondent à vos exigences. +60% d\'efficacité commerciale.',
          cta: 'Automatiser mon filtrage',
        },
        {
          title: 'Planifier des Appels Sans Intervention',
          problem: 'Les allers-retours pour coordonner les horaires consomment des heures chaque semaine.',
          solution: 'Bot qui affiche les disponibilités, gère les fuseaux horaires et confirme les RDV automatiquement.',
          result: 'RDV planifiés 24/7 sans votre intervention. Zéro no-shows avec rappels.',
          cta: 'Automatiser mon agenda',
        },
        {
          title: 'Répondre aux Objections et FAQs',
          problem: 'Les mêmes questions encore et encore. Votre équipe perd du temps à répéter les mêmes réponses.',
          solution: 'Base de connaissances intégrée au chatbot qui répond naturellement aux questions fréquentes.',
          result: 'Résolution instantanée de 80% des questions. Équipe focalisée sur le closing.',
          cta: 'Automatiser les réponses',
        },
        {
          title: 'Réactivation des Leads Froids',
          problem: 'Des leads qui ont montré de l\'intérêt mais n\'ont jamais converti. Une base de données inexploitée.',
          solution: 'Séquences de réactivation automatisées avec messages personnalisés et offres.',
          result: 'Réactivez jusqu\'à 15% des leads froids. Ventes supplémentaires sans investissement pub.',
          cta: 'Récupérer mes leads',
        },
      ],
    },
    process: {
      title: 'Processus d\'Implémentation',
      subtitle: 'Une méthodologie éprouvée pour des résultats garantis',
      steps: [
        {
          number: '01',
          title: 'Diagnostic',
          description: 'Nous analysons votre situation actuelle : canaux, volume de leads, outils, objectifs et métriques clés.',
          duration: '1-2 jours',
          deliverable: 'Rapport de diagnostic + proposition personnalisée',
        },
        {
          number: '02',
          title: 'Design Conversationnel',
          description: 'Nous créons les flux de conversation, scripts, réponses aux objections et critères de qualification.',
          duration: '3-5 jours',
          deliverable: 'Carte des flux + scripts approuvés',
        },
        {
          number: '03',
          title: 'Implémentation',
          description: 'Nous construisons le chatbot, configurons les intégrations et connectons à vos outils existants.',
          duration: '5-10 jours',
          deliverable: 'Bot fonctionnel en environnement de test',
        },
        {
          number: '04',
          title: 'Tests et Optimisation',
          description: 'Tests exhaustifs, ajustements des réponses et optimisation basée sur des cas réels.',
          duration: '3-5 jours',
          deliverable: 'Bot optimisé prêt pour la production',
        },
        {
          number: '05',
          title: 'Lancement et Maintenance',
          description: 'Mise en production, monitoring initial et plan de maintenance continue avec améliorations mensuelles.',
          duration: 'Continu',
          deliverable: 'Rapports mensuels + optimisations continues',
        },
      ],
    },
    contact: {
      title: 'Parlez-moi de Votre Cas',
      subtitle: 'Remplissez le formulaire et je vous réponds sous 24 heures',
      form: {
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre@email.com',
        channel: 'Canal d\'intérêt',
        channelOptions: {
          whatsapp: 'WhatsApp',
          instagram: 'Instagram',
          both: 'Les deux',
        },
        businessType: 'Type de business',
        businessTypePlaceholder: 'Ex: Coaching, Agence, Consulting...',
        goal: 'Objectif principal',
        goalOptions: {
          leads: 'Générer plus de leads',
          appointments: 'Planifier plus d\'appels',
          support: 'Automatiser le support',
          other: 'Autre',
        },
        message: 'Parlez-moi de votre cas',
        messagePlaceholder: 'Décrivez brièvement votre situation actuelle et ce que vous aimeriez accomplir...',
        privacy: 'J\'accepte la politique de confidentialité et le traitement de mes données',
        submit: 'Envoyer le Message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé ! Je vous réponds sous 24h.',
        error: 'Erreur d\'envoi. Veuillez réessayer.',
      },
      alternatives: {
        title: 'Autres moyens de contact',
        email: 'Email direct',
        social: 'Réseaux sociaux',
      },
    },
    legal: {
      privacy: {
        title: 'Politique de Confidentialité',
        content: 'Contenu de la politique de confidentialité. Ce texte doit être personnalisé selon la législation applicable et les données spécifiques du business.',
      },
      terms: {
        title: 'Mentions Légales',
        content: 'Contenu des mentions légales. Ce texte doit être personnalisé selon la législation applicable et les données spécifiques du business.',
      },
      cookies: {
        title: 'Politique de Cookies',
        content: 'Contenu de la politique de cookies. Ce texte doit être personnalisé selon la législation applicable et les données spécifiques du business.',
      },
    },
  },
  de: {
    meta: {
      home: {
        title: 'WhatsApp & Instagram Chatbots | Mehr Leads, Mehr Termine',
        description: 'KI-Chatbot-Spezialist für WhatsApp und Instagram. Automatisieren Sie Lead-Erfassung, qualifizieren Sie Interessenten und planen Sie Termine 24/7.',
      },
      services: {
        title: 'Automatisierung & Chatbot-Services | WhatsApp, Instagram, CRM',
        description: 'Intelligente Chatbots für WhatsApp und Instagram, CRM-Automatisierungen, E-Mail und Kalender. Maßgeschneiderte Lösungen für Ihr digitales Business.',
      },
      solutions: {
        title: 'Automatisierungslösungen nach Anwendungsfall | Lead-Erfassung & Qualifizierung',
        description: 'Spezifische Lösungen: Lead-Generierung, automatische Terminplanung, Einwandbehandlung und Reaktivierung kalter Leads mit Chatbots und KI.',
      },
      process: {
        title: 'Implementierungsprozess | Von der Diagnose zur Wartung',
        description: 'Bewährte 5-Schritte-Methodik: Diagnose, Konversationsdesign, Implementierung, Tests und kontinuierliche Wartung Ihrer Automatisierungen.',
      },
      contact: {
        title: 'Kontakt | Fordern Sie Ihr kostenloses Automatisierungs-Audit an',
        description: 'Erzählen Sie mir von Ihrem Fall und entdecken Sie, wie Sie Lead-Erfassung mit WhatsApp und Instagram Chatbots automatisieren können. Antwort innerhalb von 24h.',
      },
    },
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      solutions: 'Lösungen',
      process: 'Prozess',
      contact: 'Kontakt',
      cta: 'Audit Anfordern',
    },
    hero: {
      badge: 'Intelligente Automatisierung',
      title: 'Verwandeln Sie Gespräche in Kunden mit KI',
      subtitle: 'WhatsApp und Instagram Chatbots, die automatisch erfassen, qualifizieren und Termine vereinbaren. Mehr Leads, mehr Termine, weniger Zeitverschwendung.',
      cta: 'Erzählen Sie mir Ihren Fall',
      ctaSecondary: 'Sehen Sie wie es funktioniert',
      stats: {
        leads: 'Qualifizierte Leads',
        time: 'Zeitersparnis',
        available: 'Verfügbarkeit',
      },
    },
    benefits: {
      title: 'Warum Ihre Lead-Erfassung automatisieren',
      subtitle: 'Verlieren Sie keine Chancen mehr durch verzögerte Antworten',
      items: [
        {
          title: 'Sofortige Antwort 24/7',
          description: 'Ihr Chatbot antwortet in Sekunden, an jedem Tag, zu jeder Zeit. Keine Wartezeit, keine verlorenen Leads.',
        },
        {
          title: 'Automatische Qualifizierung',
          description: 'Filtern und bewerten Sie Leads nach Ihren Kriterien. Investieren Sie Zeit nur in wirklich interessierte Interessenten.',
        },
        {
          title: 'Reibungslose Terminplanung',
          description: 'Direkte Kalenderintegration. Leads buchen Termine ohne menschliches Eingreifen.',
        },
        {
          title: 'Echte Skalierbarkeit',
          description: 'Bearbeiten Sie 10 oder 1000 gleichzeitige Gespräche mit der gleichen Qualität und Geschwindigkeit.',
        },
        {
          title: 'Automatisiertes Follow-up',
          description: 'Follow-up-Sequenzen, die kalte Leads reaktivieren und Ihre Konversionsrate maximieren.',
        },
        {
          title: 'Daten und Metriken',
          description: 'Dashboard mit Schlüsselmetriken: Gespräche, Qualifizierungen, geplante Termine und mehr.',
        },
      ],
    },
    howItWorks: {
      title: 'So Funktioniert Es',
      subtitle: 'Ein einfaches aber leistungsstarkes System',
      steps: [
        {
          number: '01',
          title: 'Lead startet Gespräch',
          description: 'Über WhatsApp, Instagram oder Ihren gewählten Kanal. Der Chatbot antwortet sofort.',
        },
        {
          number: '02',
          title: 'Intelligente Qualifizierung',
          description: 'Strategische Fragen um Bedürfnisse zu verstehen und nach definierten Kriterien zu filtern.',
        },
        {
          number: '03',
          title: 'Einwandbehandlung',
          description: 'Der Bot beantwortet häufige Fragen und behandelt Einwände mit vorbereiteten Antworten.',
        },
        {
          number: '04',
          title: 'Terminplanung oder Übergabe',
          description: 'Qualifizierter Lead = automatisch geplanter Termin oder Übergabe an Ihr Closing-Team.',
        },
      ],
    },
    useCases: {
      title: 'Hauptanwendungsfälle',
      subtitle: 'Lösungen für jeden Bedarf angepasst',
      items: [
        {
          title: 'Automatisierte Setter',
          description: 'Chatbots, die als 24/7-Setter agieren: qualifizieren, Einwände überwinden und Anrufe buchen.',
          icon: 'calendar',
        },
        {
          title: 'Support & FAQs',
          description: 'Beantworten Sie häufige Fragen sofort und befreien Sie Ihr Team für hochwertige Aufgaben.',
          icon: 'support',
        },
        {
          title: 'Lead-Erfassung',
          description: 'Verwandeln Sie Follower und Besucher in qualifizierte Leads durch natürliche Gespräche.',
          icon: 'magnet',
        },
        {
          title: 'Follow-up & Nurturing',
          description: 'Automatische Sequenzen, die Engagement aufrechterhalten und kalte Leads reaktivieren.',
          icon: 'repeat',
        },
      ],
    },
    testimonials: {
      title: 'Was Meine Kunden Sagen',
      subtitle: 'Echte Ergebnisse von Unternehmen wie Ihrem',
      items: [
        {
          quote: 'Wir sind von 50 manuellen Nachrichten täglich auf 80% Automatisierung umgestiegen. Jetzt spreche ich nur noch mit wirklich interessierten Leads.',
          author: 'Maria G.',
          role: 'Business Coach',
          metric: '+120% gebuchte Termine',
        },
        {
          quote: 'Der Chatbot qualifiziert besser als viele Menschen. Er filtert perfekt nach meinen Kriterien und plant direkt in meinen Kalender.',
          author: 'Karl R.',
          role: 'Marketing Berater',
          metric: '3h/Tag gespart',
        },
        {
          quote: 'Schnelle Implementierung und exzellenter Support. In 2 Wochen war es einsatzbereit und generierte Ergebnisse.',
          author: 'Laura M.',
          role: 'Gründerin, Digital Agentur',
          metric: '+45% Antwortrate',
        },
      ],
    },
    forWho: {
      title: 'Für Wen Ist Das',
      isFor: {
        title: 'Das ist für Sie, wenn...',
        items: [
          'Sie ein digitales Business haben und Anfragen über WhatsApp oder Instagram erhalten',
          'Sie Leads verlieren, weil Sie nicht rechtzeitig antworten',
          'Sie mehr Termine wollen, ohne mehr Setter einzustellen',
          'Sie skalieren möchten, ohne Ihre Arbeitsstunden zu erhöhen',
          'Sie Ihre Zeit schätzen und repetitive Aufgaben automatisieren möchten',
        ],
      },
      isNotFor: {
        title: 'Das ist NICHT für Sie, wenn...',
        items: [
          'Sie kein validiertes Produkt oder Service haben',
          'Sie magische Ergebnisse ohne Optimierung erwarten',
          'Sie nicht bereit sind, in Ihr Business zu investieren',
          'Sie alles manuell machen möchten',
        ],
      },
    },
    faq: {
      title: 'Häufig Gestellte Fragen',
      items: [
        {
          question: 'Wie lange dauert die Implementierung?',
          answer: 'Je nach Komplexität zwischen 1 und 3 Wochen. Ein einfacher Qualifizierungs-Chatbot kann in 7 Tagen fertig sein.',
        },
        {
          question: 'Was brauche ich zum Starten?',
          answer: 'Ein WhatsApp Business oder Instagram Business Konto, Zugang zu Ihren Tools (CRM, Kalender) und definierte Qualifizierungskriterien.',
        },
        {
          question: 'Ist es mit meinem aktuellen CRM/Tools kompatibel?',
          answer: 'Ich arbeite mit den meisten CRMs und Tools auf dem Markt: HubSpot, Pipedrive, Calendly, Google Calendar, Notion, Airtable und viele mehr.',
        },
        {
          question: 'Wer kümmert sich um die Wartung?',
          answer: 'Ich biete monatliche Wartungspläne mit Optimierungen, Anpassungen und Support. Ich kann auch Ihr Team für interne Verwaltung schulen.',
        },
        {
          question: 'Was sind die Grenzen des Bots?',
          answer: 'Der Bot verarbeitet vordefinierte Gespräche und natürliche Variationen. Bei sehr spezifischen oder komplexen Fällen übergibt er an einen Menschen.',
        },
        {
          question: 'Wie werden Daten und Datenschutz gehandhabt?',
          answer: 'Alle Daten werden DSGVO-konform verarbeitet. Gespräche werden sicher gespeichert und Sie können Daten jederzeit exportieren oder löschen.',
        },
        {
          question: 'Funktioniert es mit persönlichem WhatsApp?',
          answer: 'Die WhatsApp Business API ist für professionelle Automatisierungen erforderlich. Ich helfe bei der Einrichtung, falls Sie sie nicht haben.',
        },
        {
          question: 'Kann ich den Bot vor der Beauftragung sehen?',
          answer: 'Ja, im initialen Audit zeige ich Ihnen echte Beispiele und Sie können mit Demos von Chatbots interagieren, die Ihren Bedürfnissen ähnlich sind.',
        },
      ],
    },
    ctaSection: {
      title: 'Bereit, Ihre Lead-Erfassung zu Automatisieren?',
      subtitle: 'Planen Sie ein kostenloses Audit und entdecken Sie, wie ein Chatbot Ihr Business transformieren kann.',
      cta: 'Kostenloses Audit Anfordern',
    },
    footer: {
      description: 'Spezialist für KI-Automatisierung und Chatbots für digitale Unternehmen.',
      links: {
        services: 'Leistungen',
        solutions: 'Lösungen',
        process: 'Prozess',
        contact: 'Kontakt',
      },
      legal: {
        privacy: 'Datenschutz',
        terms: 'Impressum',
        cookies: 'Cookies',
      },
      copyright: '© 2024 Alle Rechte vorbehalten.',
    },
    services: {
      title: 'Automatisierung und Chatbot-Services',
      subtitle: 'Maßgeschneiderte Lösungen zur Skalierung Ihrer Lead-Erfassung',
      whatsapp: {
        title: 'WhatsApp Chatbots',
        description: 'Automatisieren Sie Ihren direktesten Kundenkommunikationskanal.',
        features: [
          'Sofortige Antwort auf eingehende Nachrichten',
          'Lead-Qualifizierung mit strategischen Fragen',
          'Automatische Antwort auf FAQs und Einwände',
          'Intelligente Übergabe an Ihr Vertriebsteam',
          'Integration mit Ihrem CRM und Kalender',
        ],
        results: 'Reduzieren Sie die Antwortzeit von Stunden auf Sekunden',
        timeline: 'Implementierung: 2-3 Wochen',
      },
      instagram: {
        title: 'Instagram Chatbots',
        description: 'Konvertieren Sie Follower in Kunden mit DM-Automatisierung.',
        features: [
          'Automatische Antwort auf DMs und Erwähnungen',
          'Keyword-Aktivierung aus Kommentaren',
          'Filter und Qualifizierung von Interessenten',
          'Automatisierte Nurturing-Sequenzen',
          'Direkte Terminplanung aus Instagram',
        ],
        results: 'Nutzen Sie 100% der Interaktionen',
        timeline: 'Implementierung: 1-2 Wochen',
      },
      automations: {
        title: 'Workflow-Automatisierungen',
        description: 'Verbinden Sie Ihre Tools und eliminieren Sie repetitive manuelle Aufgaben.',
        features: [
          'Synchronisierung zwischen CRM, E-Mail und Kalender',
          'Automatisierte Vertriebspipelines',
          'Intelligente Benachrichtigungen und Alerts',
          'Automatische Berichtserstellung',
          'Benutzerdefinierte Workflows',
        ],
        results: 'Sparen Sie +10 Stunden wöchentlich bei manuellen Aufgaben',
        timeline: 'Implementierung: 1-3 Wochen',
      },
      integrations: {
        title: 'Integrationen',
        description: 'Verbinden Sie alle Ihre Tools in einem fließenden Ökosystem.',
        features: [
          'CRMs: HubSpot, Pipedrive, Salesforce, etc.',
          'Kalender: Calendly, Google Calendar, Cal.com',
          'Formulare: Typeform, Tally, Google Forms',
          'Tabellen: Google Sheets, Airtable, Notion',
          'E-Mail: Mailchimp, ConvertKit, ActiveCampaign',
        ],
        results: 'Nahtloser Datenfluss',
        timeline: 'Einrichtung: 3-5 Tage pro Integration',
      },
    },
    solutions: {
      title: 'Lösungen nach Anwendungsfall',
      subtitle: 'Spezifische Probleme, spezifische Lösungen',
      items: [
        {
          title: 'Leads Automatisch Generieren und Filtern',
          problem: 'Sie erhalten viele Anfragen, aber wenige sind qualifizierte Leads. Sie verschwenden Zeit mit Neugierigen.',
          solution: 'Chatbot, der automatisch nach Ihren Kriterien filtert: Budget, Dringlichkeit, Projekttyp.',
          result: 'Sie sprechen nur mit Leads, die Ihren Anforderungen entsprechen. +60% Vertriebseffizienz.',
          cta: 'Meine Filterung automatisieren',
        },
        {
          title: 'Anrufe Ohne Eingreifen Planen',
          problem: 'Das Hin-und-Her zur Terminkoordination kostet jede Woche Stunden.',
          solution: 'Bot, der Verfügbarkeit anzeigt, Zeitzonen verwaltet und Termine automatisch bestätigt.',
          result: '24/7 geplante Termine ohne Ihr Eingreifen. Null No-Shows mit Erinnerungen.',
          cta: 'Meinen Kalender automatisieren',
        },
        {
          title: 'Einwände und FAQs Beantworten',
          problem: 'Immer wieder dieselben Fragen. Ihr Team verschwendet Zeit mit gleichen Antworten.',
          solution: 'In den Chatbot integrierte Wissensdatenbank, die häufige Fragen natürlich beantwortet.',
          result: 'Sofortige Lösung von 80% der Fragen. Team fokussiert auf Abschlüsse.',
          cta: 'Antworten automatisieren',
        },
        {
          title: 'Kalte Leads Reaktivieren',
          problem: 'Leads, die Interesse zeigten, aber nie abgeschlossen haben. Eine ungenutzte Datenbank.',
          solution: 'Automatisierte Reaktivierungssequenzen mit personalisierten Nachrichten und Angeboten.',
          result: 'Reaktivieren Sie bis zu 15% der kalten Leads. Extra-Verkäufe ohne Werbeausgaben.',
          cta: 'Meine Leads reaktivieren',
        },
      ],
    },
    process: {
      title: 'Implementierungsprozess',
      subtitle: 'Eine bewährte Methodik für garantierte Ergebnisse',
      steps: [
        {
          number: '01',
          title: 'Diagnose',
          description: 'Wir analysieren Ihre aktuelle Situation: Kanäle, Lead-Volumen, Tools, Ziele und Schlüsselmetriken.',
          duration: '1-2 Tage',
          deliverable: 'Diagnosebericht + maßgeschneiderter Vorschlag',
        },
        {
          number: '02',
          title: 'Konversationsdesign',
          description: 'Wir erstellen Gesprächsabläufe, Skripte, Antworten auf Einwände und Qualifizierungskriterien.',
          duration: '3-5 Tage',
          deliverable: 'Ablaufkarte + genehmigte Skripte',
        },
        {
          number: '03',
          title: 'Implementierung',
          description: 'Wir bauen den Chatbot, konfigurieren Integrationen und verbinden mit Ihren bestehenden Tools.',
          duration: '5-10 Tage',
          deliverable: 'Funktionsfähiger Bot in Testumgebung',
        },
        {
          number: '04',
          title: 'Tests und Optimierung',
          description: 'Umfassende Tests, Anpassung der Antworten und Optimierung basierend auf realen Fällen.',
          duration: '3-5 Tage',
          deliverable: 'Optimierter Bot bereit für Produktion',
        },
        {
          number: '05',
          title: 'Start und Wartung',
          description: 'Go-live, initiales Monitoring und kontinuierlicher Wartungsplan mit monatlichen Verbesserungen.',
          duration: 'Laufend',
          deliverable: 'Monatliche Berichte + kontinuierliche Optimierungen',
        },
      ],
    },
    contact: {
      title: 'Erzählen Sie Mir Ihren Fall',
      subtitle: 'Füllen Sie das Formular aus und ich antworte innerhalb von 24 Stunden',
      form: {
        name: 'Name',
        namePlaceholder: 'Ihr Name',
        email: 'E-Mail',
        emailPlaceholder: 'ihre@email.de',
        channel: 'Kanal von Interesse',
        channelOptions: {
          whatsapp: 'WhatsApp',
          instagram: 'Instagram',
          both: 'Beide',
        },
        businessType: 'Business-Typ',
        businessTypePlaceholder: 'Z.B.: Coaching, Agentur, Beratung...',
        goal: 'Hauptziel',
        goalOptions: {
          leads: 'Mehr Leads generieren',
          appointments: 'Mehr Anrufe planen',
          support: 'Support automatisieren',
          other: 'Anderes',
        },
        message: 'Erzählen Sie mir Ihren Fall',
        messagePlaceholder: 'Beschreiben Sie kurz Ihre aktuelle Situation und was Sie erreichen möchten...',
        privacy: 'Ich akzeptiere die Datenschutzrichtlinie und die Verarbeitung meiner Daten',
        submit: 'Nachricht Senden',
        sending: 'Wird gesendet...',
        success: 'Nachricht gesendet! Ich antworte innerhalb von 24h.',
        error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
      },
      alternatives: {
        title: 'Andere Kontaktmöglichkeiten',
        email: 'Direkte E-Mail',
        social: 'Soziale Medien',
      },
    },
    legal: {
      privacy: {
        title: 'Datenschutzrichtlinie',
        content: 'Inhalt der Datenschutzrichtlinie. Dieser Text sollte gemäß der geltenden Gesetzgebung und den spezifischen Geschäftsdaten angepasst werden.',
      },
      terms: {
        title: 'Impressum',
        content: 'Inhalt des Impressums. Dieser Text sollte gemäß der geltenden Gesetzgebung und den spezifischen Geschäftsdaten angepasst werden.',
      },
      cookies: {
        title: 'Cookie-Richtlinie',
        content: 'Inhalt der Cookie-Richtlinie. Dieser Text sollte gemäß der geltenden Gesetzgebung und den spezifischen Geschäftsdaten angepasst werden.',
      },
    },
  },
};

export type TranslationKey = keyof typeof translations.es;
