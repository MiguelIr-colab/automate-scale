export type Language = 'es' | 'en' | 'fr' | 'de';

export const languages: Language[] = ['es', 'en', 'fr', 'de'];

export const languageNames: Record<Language, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
};

export const SIGNUP_URL = 'https://crm.aiassistan-bots.ch';

export const translations = {
  es: {
    // Meta
    meta: {
      home: {
        title: 'SmartSetter IA – Agente de Ventas con IA para Instagram y WhatsApp',
        description: 'SmartSetter IA responde tus DMs de Instagram y WhatsApp, cualifica leads y agenda reuniones en tu calendario, 24/7. Regístrate y actívalo en minutos.',
      },
      services: {
        title: 'Cómo Funciona SmartSetter IA | Agente de Ventas 24/7',
        description: 'Un sistema de agentes IA que responde, cualifica, hace seguimiento y agenda por ti en Instagram y WhatsApp. Así vende SmartSetter IA mientras tú te enfocas en cerrar.',
      },
      solutions: {
        title: 'Casos de Uso | Cualificación y Agendado Automático con IA',
        description: 'Genera, cualifica y agenda leads automáticamente desde Instagram y WhatsApp. Descubre cómo creadores, coaches y agencias usan SmartSetter IA para vender sin perder tiempo.',
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
      services: 'Producto',
      solutions: 'Casos de Uso',
      process: 'Proceso',
      contact: 'Contacto',
      cta: 'Hablar con Nosotros',
      ctaSignup: 'Regístrate Gratis',
    },
    // Hero
    hero: {
      badge: 'Ya en producción',
      title: 'Convierte Conversaciones en Clientes con IA',
      subtitle: 'SmartSetter IA es el agente que responde tus DMs de Instagram y WhatsApp, cualifica cada lead y agenda la reunión directamente en tu calendario. Sin desarrollos a medida ni meses de espera: regístrate y actívalo hoy.',
      cta: 'Habla con Nosotros',
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
          description: 'Tu agente IA responde en segundos, cualquier día, a cualquier hora. Sin esperas, sin leads perdidos.',
        },
        {
          title: 'Cualificación Automática',
          description: 'Filtra y puntúa leads según tus criterios. Solo dedicas tiempo a prospectos realmente interesados.',
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
          description: 'Panel con métricas clave: conversaciones, cualificaciones, citas agendadas y más.',
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
          description: 'Por Instagram, WhatsApp o el canal que elijas. Tu agente IA responde al instante.',
        },
        {
          number: '02',
          title: 'Cualificación inteligente',
          description: 'Preguntas estratégicas para entender necesidades y filtrar por criterios definidos.',
        },
        {
          number: '03',
          title: 'Respuesta a objeciones',
          description: 'El agente resuelve dudas frecuentes y maneja objeciones con respuestas preparadas.',
        },
        {
          number: '04',
          title: 'Agendado o derivación',
          description: 'Lead cualificado = cita agendada automáticamente en tu calendario, o derivación a tu equipo de cierre.',
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
          description: 'Tu agente actúa como setter 24/7: cualifica, supera objeciones y agenda llamadas.',
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
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'Resultados reales de creadores y coaches como tú',
      items: [
        {
          quote: 'Pasamos de responder manualmente 50 mensajes diarios a automatizar el 80%. Ahora solo hablo con leads realmente interesados.',
          author: 'María G.',
          role: 'Coach de Negocios',
          metric: '+120% citas agendadas',
        },
        {
          quote: 'El agente cualifica mejor que muchos humanos. Filtra perfectamente según mis criterios y agenda directamente en mi calendario.',
          author: 'Carlos R.',
          role: 'Consultor de Marketing',
          metric: '3h/día ahorradas',
        },
        {
          quote: 'Nos registramos y en un par de días ya estaba funcionando y generando citas.',
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
          'Eres creador de contenido, coach o agencia y recibes consultas por Instagram o WhatsApp',
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
          'Esperas resultados mágicos sin definir bien tu proceso de ventas',
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
          question: '¿Cuánto tarda en estar activo mi agente?',
          answer: 'Minutos. Te registras, conectas tu cuenta de Instagram o WhatsApp Business y defines tus criterios de cualificación. No hay desarrollo a medida ni semanas de espera.',
        },
        {
          question: '¿Qué necesito para empezar?',
          answer: 'Una cuenta de WhatsApp Business o Instagram para empresas y unos minutos para definir tus criterios de cualificación y tu calendario de citas.',
        },
        {
          question: '¿Es compatible con mi CRM/herramientas actuales?',
          answer: 'SmartSetter IA se integra con Calendly, Google Calendar y las principales herramientas de agenda. Seguimos ampliando integraciones con CRMs externos.',
        },
        {
          question: '¿Quién se encarga del mantenimiento?',
          answer: 'Nosotros. Las mejoras, ajustes y nuevas funciones del agente se despliegan automáticamente como parte de tu plan, sin que tengas que hacer nada.',
        },
        {
          question: '¿Cuáles son los límites del agente?',
          answer: 'El agente maneja conversaciones predefinidas y variaciones naturales. Para casos muy específicos o complejos, puede derivar la conversación a un humano.',
        },
        {
          question: '¿Cómo se manejan los datos y la privacidad?',
          answer: 'Todos los datos se procesan cumpliendo RGPD. Las conversaciones se almacenan de forma segura y puedes exportar o eliminar tus datos en cualquier momento.',
        },
        {
          question: '¿Funciona con WhatsApp personal?',
          answer: 'Se requiere WhatsApp Business API para automatizaciones profesionales. Te guiamos en la configuración durante el registro.',
        },
        {
          question: '¿Puedo probarlo antes de pagar?',
          answer: 'Sí, regístrate gratis y prueba el agente con tu propia cuenta antes de elegir un plan.',
        },
      ],
    },
    // CTA Section
    ctaSection: {
      title: '¿Listo Para Automatizar Tu Captación?',
      subtitle: 'Regístrate gratis y descubre cómo un agente IA puede transformar tu negocio hoy mismo.',
      cta: 'Hablar con Nosotros',
    },
    // Footer
    footer: {
      description: 'El agente de ventas con IA para creadores de contenido, coaches y agencias digitales.',
      links: {
        services: 'Producto',
        solutions: 'Casos de Uso',
        process: 'Proceso',
        contact: 'Contacto',
      },
      legal: {
        privacy: 'Política de Privacidad',
        terms: 'Aviso Legal',
        cookies: 'Cookies',
      },
      copyright: '© 2026 Todos los derechos reservados.',
    },
    // Services Page
    services: {
      title: 'Cómo Funciona SmartSetter IA',
      subtitle: 'Un agente de IA ya integrado, listo para vender por ti',
      whatsapp: {
        title: 'Agente en WhatsApp',
        description: 'Tu canal más directo de comunicación, atendido 24/7 por IA.',
        features: [
          'Respuesta instantánea a mensajes entrantes',
          'Cualificación de leads con preguntas estratégicas',
          'Respuesta automática a FAQs y objeciones',
          'Derivación inteligente a tu equipo cuando hace falta',
          'Agendado directo en tu calendario',
        ],
        results: 'Reduce el tiempo de respuesta de horas a segundos',
        timeline: 'Activo en minutos tras el registro',
      },
      instagram: {
        title: 'Agente en Instagram',
        description: 'Convierte comentarios y DMs en clientes, sin perder ni una conversación.',
        features: [
          'Respuesta automática a DMs y menciones',
          'Activación por palabras clave en comentarios',
          'Filtros y cualificación de interesados',
          'Secuencias de seguimiento automatizadas',
          'Agendado directo desde Instagram',
        ],
        results: 'Aprovecha el 100% de tus interacciones',
        timeline: 'Activo en minutos tras el registro',
      },
      automations: {
        title: 'Seguimiento Proactivo',
        description: 'Tu agente vuelve a escribir a los leads que se enfriaron, en el momento justo.',
        features: [
          'Secuencias de follow-up programadas automáticamente',
          'Reactivación inteligente de leads fríos',
          'Notificaciones cuando un lead necesita atención humana',
          'Análisis y scoring de cada conversación',
        ],
        results: 'Recupera hasta un 15% de leads que se habían enfriado',
        timeline: 'Incluido en tu plan, sin configuración extra',
      },
      integrations: {
        title: 'Agenda y Analítica',
        description: 'Todo conectado: reuniones agendadas solas y un panel con lo que importa.',
        features: [
          'Integración directa con Calendly y Google Calendar',
          'Recordatorios automáticos para reducir no-shows',
          'Panel con métricas de conversaciones y cualificaciones',
          'Historial completo de cada conversación',
        ],
        results: 'Cero coordinación manual de horarios',
        timeline: 'Conecta tu calendario en 2 minutos',
      },
    },
    // Solutions Page
    solutions: {
      title: 'Casos de Uso Reales',
      subtitle: 'Problemas concretos que SmartSetter IA ya resuelve',
      items: [
        {
          title: 'Generar y Filtrar Leads Automáticamente',
          problem: 'Recibes muchas consultas pero pocas son leads cualificados. Pierdes tiempo con curiosos.',
          solution: 'Tu agente filtra automáticamente según tus criterios: presupuesto, urgencia, tipo de proyecto.',
          result: 'Solo hablas con leads que cumplen tus requisitos. +60% eficiencia en ventas.',
          cta: 'Pruébalo Gratis',
        },
        {
          title: 'Agendar Llamadas Sin Intervención',
          problem: 'El ir y venir para coordinar horarios consume horas cada semana.',
          solution: 'Tu agente muestra disponibilidad, gestiona zonas horarias y confirma citas automáticamente.',
          result: 'Citas agendadas 24/7 sin tu intervención. Cero no-shows con recordatorios.',
          cta: 'Pruébalo Gratis',
        },
        {
          title: 'Responder Objeciones y FAQs',
          problem: 'Las mismas preguntas una y otra vez. Tu equipo pierde tiempo respondiendo lo mismo.',
          solution: 'Base de conocimiento integrada en el agente que responde naturalmente a dudas frecuentes.',
          result: 'Resolución instantánea del 80% de dudas. Tu equipo enfocado en cerrar ventas.',
          cta: 'Pruébalo Gratis',
        },
        {
          title: 'Recuperación de Leads Fríos',
          problem: 'Leads que mostraron interés pero nunca cerraron. Una base de datos que no trabajas.',
          solution: 'Secuencias automatizadas de reactivación con mensajes personalizados.',
          result: 'Reactiva hasta el 15% de leads fríos. Ventas extra sin invertir en ads.',
          cta: 'Pruébalo Gratis',
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
        title: 'SmartSetter IA – AI Sales Agent for Instagram and WhatsApp',
        description: 'SmartSetter IA replies to your Instagram and WhatsApp DMs, qualifies leads, and books meetings on your calendar, 24/7. Sign up and activate it in minutes.',
      },
      services: {
        title: 'How SmartSetter IA Works | Your 24/7 Sales Agent',
        description: 'An AI agent system that replies, qualifies, follows up, and books for you on Instagram and WhatsApp. This is how SmartSetter IA sells while you focus on closing.',
      },
      solutions: {
        title: 'Use Cases | AI-Powered Qualification & Scheduling',
        description: 'Generate, qualify, and schedule leads automatically from Instagram and WhatsApp. See how creators, coaches, and agencies use SmartSetter IA to sell without wasting time.',
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
      services: 'Product',
      solutions: 'Use Cases',
      process: 'Process',
      contact: 'Contact',
      cta: 'Talk To Us',
      ctaSignup: 'Sign Up Free',
    },
    hero: {
      badge: 'Live now',
      title: 'Turn Conversations Into Customers With AI',
      subtitle: 'SmartSetter IA is the agent that replies to your Instagram and WhatsApp DMs, qualifies every lead, and books the meeting straight into your calendar. No custom development, no months of waiting: sign up and activate it today.',
      cta: 'Talk To Us',
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
          description: 'Your AI agent responds in seconds, any day, any time. No waiting, no lost leads.',
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
          description: 'Via Instagram, WhatsApp, or your chosen channel. Your AI agent responds instantly.',
        },
        {
          number: '02',
          title: 'Intelligent qualification',
          description: 'Strategic questions to understand needs and filter by defined criteria.',
        },
        {
          number: '03',
          title: 'Objection handling',
          description: 'The agent resolves common questions and handles objections with prepared responses.',
        },
        {
          number: '04',
          title: 'Scheduling or handoff',
          description: 'Qualified lead = automatically scheduled appointment on your calendar, or handoff to your closing team.',
        },
      ],
    },
    useCases: {
      title: 'Main Use Cases',
      subtitle: 'Solutions adapted to each need',
      items: [
        {
          title: 'Automated Setters',
          description: 'Your agent acts as a 24/7 setter: qualifies, overcomes objections, and books calls.',
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
      title: 'What Our Clients Say',
      subtitle: 'Real results from creators and coaches like you',
      items: [
        {
          quote: 'We went from manually responding to 50 daily messages to automating 80%. Now I only talk to truly interested leads.',
          author: 'Maria G.',
          role: 'Business Coach',
          metric: '+120% appointments booked',
        },
        {
          quote: 'The agent qualifies better than many humans. It filters perfectly according to my criteria and schedules directly in my calendar.',
          author: 'Carlos R.',
          role: 'Marketing Consultant',
          metric: '3h/day saved',
        },
        {
          quote: 'We signed up and within a couple of days it was already running and booking meetings.',
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
          'You\'re a content creator, coach, or agency receiving inquiries via Instagram or WhatsApp',
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
          'You expect magic results without defining your sales process',
          'You\'re not willing to invest in your business',
          'You prefer to do everything manually',
        ],
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'How soon is my agent up and running?',
          answer: 'Minutes. You sign up, connect your Instagram or WhatsApp Business account, and set your qualification criteria. No custom development, no weeks of waiting.',
        },
        {
          question: 'What do I need to get started?',
          answer: 'A WhatsApp Business or Instagram Business account, and a few minutes to define your qualification criteria and booking calendar.',
        },
        {
          question: 'Is it compatible with my current CRM/tools?',
          answer: 'SmartSetter IA integrates with Calendly, Google Calendar, and major scheduling tools. We\'re continuously expanding integrations with external CRMs.',
        },
        {
          question: 'Who handles maintenance?',
          answer: 'We do. Improvements, adjustments, and new agent features roll out automatically as part of your plan — no action needed from you.',
        },
        {
          question: 'What are the agent\'s limitations?',
          answer: 'The agent handles predefined conversations and natural variations. For very specific or complex cases, it can hand off the conversation to a human.',
        },
        {
          question: 'How is data and privacy handled?',
          answer: 'All data is processed in compliance with GDPR. Conversations are stored securely and you can export or delete your data at any time.',
        },
        {
          question: 'Does it work with personal WhatsApp?',
          answer: 'WhatsApp Business API is required for professional automation. We guide you through setup during sign-up.',
        },
        {
          question: 'Can I try it before paying?',
          answer: 'Yes, sign up for free and test the agent with your own account before choosing a plan.',
        },
      ],
    },
    ctaSection: {
      title: 'Ready To Automate Your Lead Capture?',
      subtitle: 'Sign up for free and discover how an AI agent can transform your business today.',
      cta: 'Talk To Us',
    },
    footer: {
      description: 'The AI sales agent for content creators, coaches, and digital agencies.',
      links: {
        services: 'Product',
        solutions: 'Use Cases',
        process: 'Process',
        contact: 'Contact',
      },
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Legal Notice',
        cookies: 'Cookies',
      },
      copyright: '© 2026 All rights reserved.',
    },
    services: {
      title: 'How SmartSetter IA Works',
      subtitle: 'An AI agent already built and ready to sell for you',
      whatsapp: {
        title: 'WhatsApp Agent',
        description: 'Your most direct communication channel, handled 24/7 by AI.',
        features: [
          'Instant response to incoming messages',
          'Lead qualification with strategic questions',
          'Automatic response to FAQs and objections',
          'Smart handoff to your team when needed',
          'Direct booking on your calendar',
        ],
        results: 'Reduce response time from hours to seconds',
        timeline: 'Live within minutes of signing up',
      },
      instagram: {
        title: 'Instagram Agent',
        description: 'Turn comments and DMs into customers without missing a single conversation.',
        features: [
          'Automatic response to DMs and mentions',
          'Keyword activation from comments',
          'Filtering and qualification of interested leads',
          'Automated follow-up sequences',
          'Direct booking from Instagram',
        ],
        results: 'Capture 100% of your interactions',
        timeline: 'Live within minutes of signing up',
      },
      automations: {
        title: 'Proactive Follow-up',
        description: 'Your agent reaches back out to leads who went cold, at exactly the right time.',
        features: [
          'Automatically scheduled follow-up sequences',
          'Smart reactivation of cold leads',
          'Alerts when a lead needs a human touch',
          'Scoring and analysis of every conversation',
        ],
        results: 'Recover up to 15% of leads who went cold',
        timeline: 'Included in your plan, no extra setup',
      },
      integrations: {
        title: 'Scheduling & Analytics',
        description: 'Everything connected: meetings book themselves and a dashboard shows what matters.',
        features: [
          'Direct integration with Calendly and Google Calendar',
          'Automatic reminders to reduce no-shows',
          'Dashboard with conversation and qualification metrics',
          'Full history of every conversation',
        ],
        results: 'Zero manual schedule coordination',
        timeline: 'Connect your calendar in 2 minutes',
      },
    },
    solutions: {
      title: 'Real Use Cases',
      subtitle: 'Concrete problems SmartSetter IA already solves',
      items: [
        {
          title: 'Generate and Filter Leads Automatically',
          problem: 'You receive many inquiries but few are qualified leads. You waste time with tire-kickers.',
          solution: 'Your agent automatically filters according to your criteria: budget, urgency, project type.',
          result: 'You only talk to leads that meet your requirements. +60% sales efficiency.',
          cta: 'Try It Free',
        },
        {
          title: 'Schedule Calls Without Intervention',
          problem: 'Back-and-forth to coordinate schedules consumes hours every week.',
          solution: 'Your agent shows availability, manages time zones, and confirms appointments automatically.',
          result: '24/7 scheduled appointments without your intervention. Zero no-shows with reminders.',
          cta: 'Try It Free',
        },
        {
          title: 'Answer Objections and FAQs',
          problem: 'The same questions over and over. Your team wastes time answering the same things.',
          solution: 'A knowledge base built into the agent that naturally answers frequent questions.',
          result: 'Instant resolution of 80% of questions. Your team focused on closing sales.',
          cta: 'Try It Free',
        },
        {
          title: 'Cold Lead Recovery',
          problem: 'Leads who showed interest but never closed. A database you don\'t work on.',
          solution: 'Automated reactivation sequences with personalized messages.',
          result: 'Reactivate up to 15% of cold leads. Extra sales without ad spend.',
          cta: 'Try It Free',
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
        title: 'SmartSetter IA – Agent de Vente IA pour Instagram et WhatsApp',
        description: 'SmartSetter IA répond à vos DMs Instagram et WhatsApp, qualifie les leads et planifie des RDV dans votre agenda, 24/7. Inscrivez-vous et activez-le en quelques minutes.',
      },
      services: {
        title: 'Comment Fonctionne SmartSetter IA | Votre Agent de Vente 24/7',
        description: 'Un système d\'agents IA qui répond, qualifie, relance et planifie pour vous sur Instagram et WhatsApp. Voici comment SmartSetter IA vend pendant que vous vous concentrez sur le closing.',
      },
      solutions: {
        title: 'Cas d\'Usage | Qualification et Prise de RDV par IA',
        description: 'Générez, qualifiez et planifiez des leads automatiquement depuis Instagram et WhatsApp. Découvrez comment créateurs, coachs et agences utilisent SmartSetter IA pour vendre sans perdre de temps.',
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
      services: 'Produit',
      solutions: 'Cas d\'Usage',
      process: 'Processus',
      contact: 'Contact',
      cta: 'Nous Contacter',
      ctaSignup: 'Inscription Gratuite',
    },
    hero: {
      badge: 'Déjà en production',
      title: 'Transformez les Conversations en Clients avec l\'IA',
      subtitle: 'SmartSetter IA est l\'agent qui répond à vos DMs Instagram et WhatsApp, qualifie chaque lead et planifie le RDV directement dans votre agenda. Sans développement sur mesure ni mois d\'attente : inscrivez-vous et activez-le dès aujourd\'hui.',
      cta: 'Nous Contacter',
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
          description: 'Votre agent IA répond en quelques secondes, n\'importe quel jour, à n\'importe quelle heure. Pas d\'attente, pas de leads perdus.',
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
          description: 'Via Instagram, WhatsApp ou le canal de votre choix. Votre agent IA répond instantanément.',
        },
        {
          number: '02',
          title: 'Qualification intelligente',
          description: 'Questions stratégiques pour comprendre les besoins et filtrer selon vos critères.',
        },
        {
          number: '03',
          title: 'Gestion des objections',
          description: 'L\'agent résout les questions courantes et gère les objections avec des réponses préparées.',
        },
        {
          number: '04',
          title: 'Planification ou transfert',
          description: 'Lead qualifié = RDV planifié automatiquement dans votre agenda, ou transfert à votre équipe de closing.',
        },
      ],
    },
    useCases: {
      title: 'Principaux Cas d\'Utilisation',
      subtitle: 'Solutions adaptées à chaque besoin',
      items: [
        {
          title: 'Setters Automatisés',
          description: 'Votre agent agit comme setter 24/7 : qualifie, surmonte les objections et prend des RDV.',
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
      title: 'Ce Que Disent Nos Clients',
      subtitle: 'Résultats réels de créateurs et coachs comme vous',
      items: [
        {
          quote: 'Nous sommes passés de 50 messages manuels par jour à automatiser 80%. Maintenant je ne parle qu\'aux leads vraiment intéressés.',
          author: 'Marie G.',
          role: 'Coach Business',
          metric: '+120% RDV planifiés',
        },
        {
          quote: 'L\'agent qualifie mieux que beaucoup d\'humains. Il filtre parfaitement selon mes critères et planifie directement dans mon agenda.',
          author: 'Charles R.',
          role: 'Consultant Marketing',
          metric: '3h/jour économisées',
        },
        {
          quote: 'Nous nous sommes inscrits et en deux jours c\'était déjà opérationnel et générait des RDV.',
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
          'Vous êtes créateur de contenu, coach ou agence et recevez des demandes via Instagram ou WhatsApp',
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
          'Vous attendez des résultats magiques sans définir votre process de vente',
          'Vous n\'êtes pas prêt à investir dans votre business',
          'Vous préférez tout faire manuellement',
        ],
      },
    },
    faq: {
      title: 'Questions Fréquentes',
      items: [
        {
          question: 'En combien de temps mon agent est-il actif ?',
          answer: 'Quelques minutes. Vous vous inscrivez, connectez votre compte Instagram ou WhatsApp Business et définissez vos critères de qualification. Pas de développement sur mesure, pas de semaines d\'attente.',
        },
        {
          question: 'De quoi ai-je besoin pour commencer ?',
          answer: 'Un compte WhatsApp Business ou Instagram Business, et quelques minutes pour définir vos critères de qualification et votre agenda.',
        },
        {
          question: 'Est-ce compatible avec mon CRM/outils actuels ?',
          answer: 'SmartSetter IA s\'intègre avec Calendly, Google Calendar et les principaux outils d\'agenda. Nous élargissons continuellement les intégrations avec des CRM externes.',
        },
        {
          question: 'Qui gère la maintenance ?',
          answer: 'Nous. Les améliorations, ajustements et nouvelles fonctionnalités de l\'agent sont déployés automatiquement dans le cadre de votre abonnement, sans aucune action de votre part.',
        },
        {
          question: 'Quelles sont les limites de l\'agent ?',
          answer: 'L\'agent gère les conversations prédéfinies et variations naturelles. Pour les cas très spécifiques ou complexes, il peut transférer la conversation à un humain.',
        },
        {
          question: 'Comment sont gérées les données et la confidentialité ?',
          answer: 'Toutes les données sont traitées en conformité RGPD. Les conversations sont stockées de façon sécurisée et vous pouvez exporter ou supprimer vos données à tout moment.',
        },
        {
          question: 'Ça fonctionne avec WhatsApp personnel ?',
          answer: 'L\'API WhatsApp Business est requise pour l\'automatisation professionnelle. Nous vous accompagnons dans la configuration lors de l\'inscription.',
        },
        {
          question: 'Puis-je l\'essayer avant de payer ?',
          answer: 'Oui, inscrivez-vous gratuitement et testez l\'agent avec votre propre compte avant de choisir un abonnement.',
        },
      ],
    },
    ctaSection: {
      title: 'Prêt à Automatiser Votre Capture de Leads ?',
      subtitle: 'Inscrivez-vous gratuitement et découvrez comment un agent IA peut transformer votre business dès aujourd\'hui.',
      cta: 'Nous Contacter',
    },
    footer: {
      description: 'L\'agent de vente IA pour créateurs de contenu, coachs et agences digitales.',
      links: {
        services: 'Produit',
        solutions: 'Cas d\'Usage',
        process: 'Processus',
        contact: 'Contact',
      },
      legal: {
        privacy: 'Politique de Confidentialité',
        terms: 'Mentions Légales',
        cookies: 'Cookies',
      },
      copyright: '© 2026 Tous droits réservés.',
    },
    services: {
      title: 'Comment Fonctionne SmartSetter IA',
      subtitle: 'Un agent IA déjà en place, prêt à vendre pour vous',
      whatsapp: {
        title: 'Agent WhatsApp',
        description: 'Votre canal de communication le plus direct, géré 24/7 par l\'IA.',
        features: [
          'Réponse instantanée aux messages entrants',
          'Qualification des leads avec questions stratégiques',
          'Réponse automatique aux FAQs et objections',
          'Transfert intelligent vers votre équipe quand nécessaire',
          'Prise de RDV directe dans votre agenda',
        ],
        results: 'Réduisez le temps de réponse de heures à secondes',
        timeline: 'Actif quelques minutes après l\'inscription',
      },
      instagram: {
        title: 'Agent Instagram',
        description: 'Transformez commentaires et DMs en clients, sans perdre une seule conversation.',
        features: [
          'Réponse automatique aux DMs et mentions',
          'Activation par mots-clés dans les commentaires',
          'Filtres et qualification des intéressés',
          'Séquences de suivi automatisées',
          'Prise de RDV directe depuis Instagram',
        ],
        results: 'Exploitez 100% de vos interactions',
        timeline: 'Actif quelques minutes après l\'inscription',
      },
      automations: {
        title: 'Suivi Proactif',
        description: 'Votre agent relance les leads qui se sont refroidis, au moment idéal.',
        features: [
          'Séquences de relance programmées automatiquement',
          'Réactivation intelligente des leads froids',
          'Alertes quand un lead a besoin d\'une intervention humaine',
          'Analyse et scoring de chaque conversation',
        ],
        results: 'Réactivez jusqu\'à 15% des leads refroidis',
        timeline: 'Inclus dans votre abonnement, sans configuration',
      },
      integrations: {
        title: 'Agenda et Analytique',
        description: 'Tout est connecté : les RDV se planifient seuls et un tableau de bord montre l\'essentiel.',
        features: [
          'Intégration directe avec Calendly et Google Calendar',
          'Rappels automatiques pour réduire les no-shows',
          'Tableau de bord avec métriques de conversations et qualifications',
          'Historique complet de chaque conversation',
        ],
        results: 'Zéro coordination manuelle des horaires',
        timeline: 'Connectez votre agenda en 2 minutes',
      },
    },
    solutions: {
      title: 'Cas d\'Usage Réels',
      subtitle: 'Des problèmes concrets que SmartSetter IA résout déjà',
      items: [
        {
          title: 'Générer et Filtrer les Leads Automatiquement',
          problem: 'Vous recevez beaucoup de demandes mais peu sont des leads qualifiés. Vous perdez du temps avec les curieux.',
          solution: 'Votre agent filtre automatiquement selon vos critères : budget, urgence, type de projet.',
          result: 'Vous ne parlez qu\'aux leads qui répondent à vos exigences. +60% d\'efficacité commerciale.',
          cta: 'Essayer Gratuitement',
        },
        {
          title: 'Planifier des Appels Sans Intervention',
          problem: 'Les allers-retours pour coordonner les horaires consomment des heures chaque semaine.',
          solution: 'Votre agent affiche les disponibilités, gère les fuseaux horaires et confirme les RDV automatiquement.',
          result: 'RDV planifiés 24/7 sans votre intervention. Zéro no-shows avec rappels.',
          cta: 'Essayer Gratuitement',
        },
        {
          title: 'Répondre aux Objections et FAQs',
          problem: 'Les mêmes questions encore et encore. Votre équipe perd du temps à répéter les mêmes réponses.',
          solution: 'Une base de connaissances intégrée à l\'agent qui répond naturellement aux questions fréquentes.',
          result: 'Résolution instantanée de 80% des questions. Équipe focalisée sur le closing.',
          cta: 'Essayer Gratuitement',
        },
        {
          title: 'Réactivation des Leads Froids',
          problem: 'Des leads qui ont montré de l\'intérêt mais n\'ont jamais converti. Une base de données inexploitée.',
          solution: 'Séquences de réactivation automatisées avec messages personnalisés.',
          result: 'Réactivez jusqu\'à 15% des leads froids. Ventes supplémentaires sans investissement pub.',
          cta: 'Essayer Gratuitement',
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
        title: 'SmartSetter IA – KI-Vertriebsagent für Instagram und WhatsApp',
        description: 'SmartSetter IA beantwortet Ihre Instagram- und WhatsApp-DMs, qualifiziert Leads und plant Termine in Ihrem Kalender, 24/7. Registrieren Sie sich und aktivieren Sie ihn in Minuten.',
      },
      services: {
        title: 'So Funktioniert SmartSetter IA | Ihr 24/7-Vertriebsagent',
        description: 'Ein System aus KI-Agenten, das für Sie auf Instagram und WhatsApp antwortet, qualifiziert, nachfasst und Termine plant. So verkauft SmartSetter IA, während Sie sich aufs Abschließen konzentrieren.',
      },
      solutions: {
        title: 'Anwendungsfälle | Qualifizierung und Terminplanung mit KI',
        description: 'Generieren, qualifizieren und planen Sie Leads automatisch von Instagram und WhatsApp. Erfahren Sie, wie Creator, Coaches und Agenturen SmartSetter IA nutzen, um ohne Zeitverlust zu verkaufen.',
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
      services: 'Produkt',
      solutions: 'Anwendungsfälle',
      process: 'Prozess',
      contact: 'Kontakt',
      cta: 'Kontaktieren Sie Uns',
      ctaSignup: 'Kostenlos Registrieren',
    },
    hero: {
      badge: 'Bereits im Einsatz',
      title: 'Verwandeln Sie Gespräche in Kunden mit KI',
      subtitle: 'SmartSetter IA ist der Agent, der Ihre Instagram- und WhatsApp-DMs beantwortet, jeden Lead qualifiziert und den Termin direkt in Ihrem Kalender plant. Ohne individuelle Entwicklung, ohne monatelange Wartezeit: Registrieren Sie sich und aktivieren Sie ihn noch heute.',
      cta: 'Kontaktieren Sie Uns',
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
          description: 'Ihr KI-Agent antwortet in Sekunden, an jedem Tag, zu jeder Zeit. Keine Wartezeit, keine verlorenen Leads.',
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
          description: 'Über Instagram, WhatsApp oder Ihren gewählten Kanal. Ihr KI-Agent antwortet sofort.',
        },
        {
          number: '02',
          title: 'Intelligente Qualifizierung',
          description: 'Strategische Fragen um Bedürfnisse zu verstehen und nach definierten Kriterien zu filtern.',
        },
        {
          number: '03',
          title: 'Einwandbehandlung',
          description: 'Der Agent beantwortet häufige Fragen und behandelt Einwände mit vorbereiteten Antworten.',
        },
        {
          number: '04',
          title: 'Terminplanung oder Übergabe',
          description: 'Qualifizierter Lead = automatisch geplanter Termin in Ihrem Kalender oder Übergabe an Ihr Closing-Team.',
        },
      ],
    },
    useCases: {
      title: 'Hauptanwendungsfälle',
      subtitle: 'Lösungen für jeden Bedarf angepasst',
      items: [
        {
          title: 'Automatisierte Setter',
          description: 'Ihr Agent agiert als 24/7-Setter: qualifiziert, überwindet Einwände und bucht Anrufe.',
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
      title: 'Was Unsere Kunden Sagen',
      subtitle: 'Echte Ergebnisse von Creators und Coaches wie Ihnen',
      items: [
        {
          quote: 'Wir sind von 50 manuellen Nachrichten täglich auf 80% Automatisierung umgestiegen. Jetzt spreche ich nur noch mit wirklich interessierten Leads.',
          author: 'Maria G.',
          role: 'Business Coach',
          metric: '+120% gebuchte Termine',
        },
        {
          quote: 'Der Agent qualifiziert besser als viele Menschen. Er filtert perfekt nach meinen Kriterien und plant direkt in meinen Kalender.',
          author: 'Karl R.',
          role: 'Marketing Berater',
          metric: '3h/Tag gespart',
        },
        {
          quote: 'Wir haben uns registriert und innerhalb von zwei Tagen lief es schon und generierte Termine.',
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
          'Sie Content Creator, Coach oder Agentur sind und Anfragen über Instagram oder WhatsApp erhalten',
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
          'Sie magische Ergebnisse erwarten, ohne Ihren Verkaufsprozess zu definieren',
          'Sie nicht bereit sind, in Ihr Business zu investieren',
          'Sie alles manuell machen möchten',
        ],
      },
    },
    faq: {
      title: 'Häufig Gestellte Fragen',
      items: [
        {
          question: 'Wie schnell ist mein Agent einsatzbereit?',
          answer: 'Minuten. Sie registrieren sich, verbinden Ihr Instagram- oder WhatsApp-Business-Konto und legen Ihre Qualifizierungskriterien fest. Keine individuelle Entwicklung, keine Wochen Wartezeit.',
        },
        {
          question: 'Was brauche ich zum Starten?',
          answer: 'Ein WhatsApp Business- oder Instagram-Business-Konto und ein paar Minuten, um Ihre Qualifizierungskriterien und Ihren Terminkalender festzulegen.',
        },
        {
          question: 'Ist es mit meinem aktuellen CRM/Tools kompatibel?',
          answer: 'SmartSetter IA integriert sich mit Calendly, Google Calendar und den wichtigsten Terminplanungs-Tools. Wir erweitern die Integrationen mit externen CRMs laufend.',
        },
        {
          question: 'Wer kümmert sich um die Wartung?',
          answer: 'Wir. Verbesserungen, Anpassungen und neue Agent-Funktionen werden automatisch im Rahmen Ihres Plans ausgerollt – ohne dass Sie etwas tun müssen.',
        },
        {
          question: 'Was sind die Grenzen des Agenten?',
          answer: 'Der Agent verarbeitet vordefinierte Gespräche und natürliche Variationen. Bei sehr spezifischen oder komplexen Fällen kann er das Gespräch an einen Menschen übergeben.',
        },
        {
          question: 'Wie werden Daten und Datenschutz gehandhabt?',
          answer: 'Alle Daten werden DSGVO-konform verarbeitet. Gespräche werden sicher gespeichert und Sie können Ihre Daten jederzeit exportieren oder löschen.',
        },
        {
          question: 'Funktioniert es mit persönlichem WhatsApp?',
          answer: 'Die WhatsApp Business API ist für professionelle Automatisierung erforderlich. Wir begleiten Sie bei der Einrichtung während der Registrierung.',
        },
        {
          question: 'Kann ich es testen, bevor ich bezahle?',
          answer: 'Ja, registrieren Sie sich kostenlos und testen Sie den Agenten mit Ihrem eigenen Konto, bevor Sie einen Plan wählen.',
        },
      ],
    },
    ctaSection: {
      title: 'Bereit, Ihre Lead-Erfassung zu Automatisieren?',
      subtitle: 'Registrieren Sie sich kostenlos und entdecken Sie, wie ein KI-Agent Ihr Business schon heute transformieren kann.',
      cta: 'Kontaktieren Sie Uns',
    },
    footer: {
      description: 'Der KI-Vertriebsagent für Content Creator, Coaches und digitale Agenturen.',
      links: {
        services: 'Produkt',
        solutions: 'Anwendungsfälle',
        process: 'Prozess',
        contact: 'Kontakt',
      },
      legal: {
        privacy: 'Datenschutz',
        terms: 'Impressum',
        cookies: 'Cookies',
      },
      copyright: '© 2026 Alle Rechte vorbehalten.',
    },
    services: {
      title: 'So Funktioniert SmartSetter IA',
      subtitle: 'Ein KI-Agent, der bereits läuft und für Sie verkauft',
      whatsapp: {
        title: 'WhatsApp-Agent',
        description: 'Ihr direktester Kommunikationskanal, 24/7 von KI betreut.',
        features: [
          'Sofortige Antwort auf eingehende Nachrichten',
          'Lead-Qualifizierung mit strategischen Fragen',
          'Automatische Antwort auf FAQs und Einwände',
          'Intelligente Übergabe an Ihr Team, wenn nötig',
          'Direkte Terminbuchung in Ihrem Kalender',
        ],
        results: 'Reduzieren Sie die Antwortzeit von Stunden auf Sekunden',
        timeline: 'Aktiv wenige Minuten nach der Registrierung',
      },
      instagram: {
        title: 'Instagram-Agent',
        description: 'Verwandeln Sie Kommentare und DMs in Kunden, ohne ein einziges Gespräch zu verpassen.',
        features: [
          'Automatische Antwort auf DMs und Erwähnungen',
          'Keyword-Aktivierung aus Kommentaren',
          'Filter und Qualifizierung von Interessenten',
          'Automatisierte Follow-up-Sequenzen',
          'Direkte Terminbuchung aus Instagram',
        ],
        results: 'Nutzen Sie 100% Ihrer Interaktionen',
        timeline: 'Aktiv wenige Minuten nach der Registrierung',
      },
      automations: {
        title: 'Proaktives Follow-up',
        description: 'Ihr Agent meldet sich bei abgekühlten Leads genau zum richtigen Zeitpunkt zurück.',
        features: [
          'Automatisch geplante Follow-up-Sequenzen',
          'Intelligente Reaktivierung kalter Leads',
          'Benachrichtigungen, wenn ein Lead menschliche Betreuung braucht',
          'Analyse und Scoring jedes Gesprächs',
        ],
        results: 'Reaktivieren Sie bis zu 15% der abgekühlten Leads',
        timeline: 'Im Plan enthalten, ohne zusätzliche Einrichtung',
      },
      integrations: {
        title: 'Terminplanung und Analytik',
        description: 'Alles verbunden: Termine planen sich von selbst und ein Dashboard zeigt, was zählt.',
        features: [
          'Direkte Integration mit Calendly und Google Calendar',
          'Automatische Erinnerungen zur Reduzierung von No-Shows',
          'Dashboard mit Gesprächs- und Qualifizierungsmetriken',
          'Vollständige Historie jedes Gesprächs',
        ],
        results: 'Keine manuelle Terminkoordination mehr',
        timeline: 'Verbinden Sie Ihren Kalender in 2 Minuten',
      },
    },
    solutions: {
      title: 'Echte Anwendungsfälle',
      subtitle: 'Konkrete Probleme, die SmartSetter IA bereits löst',
      items: [
        {
          title: 'Leads Automatisch Generieren und Filtern',
          problem: 'Sie erhalten viele Anfragen, aber wenige sind qualifizierte Leads. Sie verschwenden Zeit mit Neugierigen.',
          solution: 'Ihr Agent filtert automatisch nach Ihren Kriterien: Budget, Dringlichkeit, Projekttyp.',
          result: 'Sie sprechen nur mit Leads, die Ihren Anforderungen entsprechen. +60% Vertriebseffizienz.',
          cta: 'Kostenlos Testen',
        },
        {
          title: 'Anrufe Ohne Eingreifen Planen',
          problem: 'Das Hin-und-Her zur Terminkoordination kostet jede Woche Stunden.',
          solution: 'Ihr Agent zeigt Verfügbarkeit an, verwaltet Zeitzonen und bestätigt Termine automatisch.',
          result: '24/7 geplante Termine ohne Ihr Eingreifen. Null No-Shows mit Erinnerungen.',
          cta: 'Kostenlos Testen',
        },
        {
          title: 'Einwände und FAQs Beantworten',
          problem: 'Immer wieder dieselben Fragen. Ihr Team verschwendet Zeit mit gleichen Antworten.',
          solution: 'Eine in den Agenten integrierte Wissensdatenbank, die häufige Fragen natürlich beantwortet.',
          result: 'Sofortige Lösung von 80% der Fragen. Team fokussiert auf Abschlüsse.',
          cta: 'Kostenlos Testen',
        },
        {
          title: 'Kalte Leads Reaktivieren',
          problem: 'Leads, die Interesse zeigten, aber nie abgeschlossen haben. Eine ungenutzte Datenbank.',
          solution: 'Automatisierte Reaktivierungssequenzen mit personalisierten Nachrichten.',
          result: 'Reaktivieren Sie bis zu 15% der kalten Leads. Extra-Verkäufe ohne Werbeausgaben.',
          cta: 'Kostenlos Testen',
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
