export type Language = 'es' | 'en' | 'fr' | 'de';

export const languages: Language[] = ['es', 'en', 'fr', 'de'];

export const languageNames: Record<Language, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
};

export const SIGNUP_URL = 'https://crm.aiassistant-bots.ch';

export const translations = {
  es: {
    // Meta
    meta: {
      home: {
        title: 'SmartSetter IA – Agente de Ventas con IA para Instagram',
        description: 'SmartSetter IA responde tus DMs de Instagram, cualifica leads y manda tu link de reservas para agendar, 24/7. Regístrate y actívalo hoy.',
      },
      services: {
        title: 'Cómo Funciona SmartSetter IA | Agente de Ventas 24/7',
        description: 'Un sistema de agentes IA que responde, cualifica, hace seguimiento y agenda por ti en Instagram. Así vende SmartSetter IA mientras tú te enfocas en cerrar.',
      },
      solutions: {
        title: 'Casos de Uso | Cualificación y Agendado Automático con IA',
        description: 'Genera, cualifica y agenda leads automáticamente desde Instagram. Descubre cómo creadores, coaches y agencias usan SmartSetter IA para vender sin perder tiempo.',
      },
      process: {
        title: 'Cómo Empezar | De Cero a Tu Agente Vendiendo en Instagram',
        description: '5 pasos: regístrate, conecta tu Instagram, cuéntanos tu negocio, conecta tu calendario, y tu agente empieza a vender. Sin desarrollo a medida.',
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
      process: 'Cómo Empezar',
      contact: 'Contacto',
      cta: 'Hablar con Nosotros',
      ctaSignup: 'Regístrate Gratis',
    },
    // Hero
    hero: {
      badge: 'Ya en producción',
      title: 'Convierte Conversaciones en Clientes con IA',
      subtitle: 'SmartSetter IA es el agente que responde tus DMs de Instagram, cualifica cada lead y manda tu link de reservas para agendar la reunión. Sin desarrollos a medida ni meses de espera: regístrate y actívalo hoy.',
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
          description: 'El agente manda tu link de reservas y el lead agenda solo, sin que nadie tenga que intervenir.',
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
          description: 'Por Instagram, tu canal principal de ventas. Tu agente IA responde al instante.',
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
          description: 'Lead cualificado = recibe tu link de reservas para agendar solo, o derivación a tu equipo de cierre.',
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
          quote: 'El agente cualifica mejor que muchos humanos. Filtra perfectamente según mis criterios y manda el link de mi calendario en el momento justo.',
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
          'Eres creador de contenido, coach o agencia y recibes consultas por Instagram',
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
          answer: 'Te registras, conectas tu Instagram y tu calendario, y nos cuentas lo esencial de tu negocio. Tu agente queda operativo el mismo día, sin desarrollo a medida.',
        },
        {
          question: '¿Qué necesito para empezar?',
          answer: 'Una cuenta de Instagram de empresa (vinculada a una página de Facebook) y una cuenta de Calendly para las reuniones. Te ayudamos a conectarlo todo.',
        },
        {
          question: '¿Es compatible con mi CRM/herramientas actuales?',
          answer: 'SmartSetter IA se integra con Calendly y Google Calendar para el agendado. Seguimos ampliando integraciones con CRMs externos.',
        },
        {
          question: '¿Quién se encarga del mantenimiento?',
          answer: 'Nosotros. Las mejoras, ajustes y nuevas funciones del agente se despliegan automáticamente como parte de tu plan, sin que tengas que hacer nada.',
        },
        {
          question: '¿Cuáles son los límites del agente?',
          answer: 'El agente maneja conversaciones predefinidas y variaciones naturales. Para casos muy específicos o complejos, cede el control a un humano.',
        },
        {
          question: '¿Cómo se manejan los datos y la privacidad?',
          answer: 'Todos los datos se procesan cumpliendo RGPD. Las conversaciones se almacenan de forma segura y puedes exportar o eliminar tus datos en cualquier momento.',
        },
        {
          question: '¿Cuándo llega WhatsApp?',
          answer: 'Es el próximo canal en el roadmap, pensado para convivir con Instagram en un mismo negocio. Si te interesa, dínoslo al registrarte y te avisamos en cuanto esté disponible.',
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
        process: 'Cómo Empezar',
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
      subtitle: 'Un agente de IA ya integrado, listo para vender por ti en Instagram',
      core: [
        {
          key: 'instagram',
          title: 'Agente en Instagram',
          description: 'Tu canal principal de ventas: responde cada DM al instante, con el contexto completo del lead.',
          features: [
            'Respuesta instantánea a cualquier DM, comentario o respuesta a story',
            'Contexto completo en cada respuesta: qué se ha hablado antes, en qué punto está el lead, qué contenido ha visto',
            'Cede el control a un humano en cuanto detecta que no sabe qué responder',
            'Nunca interfiere si respondes tú mismo desde Instagram o desde el CRM',
          ],
          results: 'Cero DMs sin responder, a cualquier hora',
          timeline: 'Tu canal principal, ya integrado',
        },
        {
          key: 'followups',
          title: 'Seguimiento Proactivo',
          description: 'Vuelve a escribir a los leads que no contestaron, dentro de la ventana real de Instagram.',
          features: [
            'Toques de seguimiento automáticos dentro de las primeras 24h (la ventana que permite Instagram)',
            'Pasado ese plazo, el lead pasa a un panel de seguimiento humano para retomarlo tú a mano',
            'Se detiene solo en cuanto tomas el control o marcas la conversación en manual',
            'Casos de reactivación configurables: recordatorio, oferta, cierre de conversación',
          ],
          results: 'Recupera conversaciones que hoy se quedan sin respuesta',
          timeline: 'Corre solo cada 15 minutos',
        },
        {
          key: 'booking',
          title: 'Agendado con Calendly',
          description: 'El agente manda tu link de reserva y sabe con certeza quién agendó.',
          features: [
            'Envía tu link de Calendly con seguimiento único por conversación',
            'Un webhook confirma la reserva en cuanto el lead elige hora — el agente no tiene que adivinar tu disponibilidad',
            'Si el lead no reserva en 22h, se lo recuerda automáticamente',
            'La reunión queda vinculada a la conversación y al lead en tu panel',
          ],
          results: 'Sabes exactamente qué conversación generó cada reunión',
          timeline: 'Conecta tu cuenta de Calendly en minutos',
        },
      ],
      secondary: {
        title: 'Y Además',
        items: [
          {
            key: 'keywords',
            title: 'Keywords en Comentarios',
            description: 'Detecta palabras clave en los comentarios de tus posts y reels y manda el DM automáticamente, con respuesta pública opcional.',
          },
          {
            key: 'scoring',
            title: 'Scoring + Resumen Pre-Reunión',
            description: 'Cuando un lead agenda, tu agente puntúa interés, intención, urgencia y disponibilidad, y te deja un resumen antes de la llamada: situación, obstáculos y lo que busca.',
          },
          {
            key: 'visionGlobal',
            title: 'Visión Global',
            description: 'Pregúntale a tus datos en lenguaje natural: "¿qué objeción se repite más esta semana?". Solo lectura, nunca toca tus conversaciones.',
          },
          {
            key: 'promptImprovement',
            title: 'Mejora Continua del Agente',
            description: 'Cada semana recibes sugerencias concretas para mejorar cómo vende tu agente, con una simulación de antes/después. Nada se aplica sin que lo apruebes.',
          },
        ],
      },
      upcoming: {
        title: 'Próximamente',
        subtitle: 'En construcción, para cuando tu negocio use más de un canal',
        items: [
          {
            key: 'whatsapp',
            title: 'Agente en WhatsApp',
            description: 'El mismo agente, en WhatsApp Business, conviviendo con Instagram en un mismo negocio.',
          },
        ],
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
          solution: 'Tu agente manda tu link de reservas de Calendly; el lead elige la hora que le va bien y un webhook confirma la cita al instante.',
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
      title: 'Cómo Empezar',
      subtitle: 'De cero a tu agente vendiendo en Instagram, en el mismo día',
      steps: [
        {
          number: '01',
          title: 'Regístrate',
          description: 'Crea tu cuenta con los datos de tu negocio. La activamos nosotros para asegurarnos de que todo funcione bien desde el primer día.',
          duration: '2 minutos',
          deliverable: 'Cuenta creada, activación en curso',
        },
        {
          number: '02',
          title: 'Conecta tu Instagram',
          description: 'Vinculamos tu cuenta de Instagram de empresa para que el agente pueda leer y responder tus DMs y comentarios.',
          duration: '5 minutos',
          deliverable: 'Cuenta de Instagram conectada',
        },
        {
          number: '03',
          title: 'Cuéntanos tu Negocio',
          description: 'Nos das lo esencial — qué vendes, precio, a quién, tono, objeciones habituales — y generamos el prompt de tu agente automáticamente.',
          duration: '10-15 minutos',
          deliverable: 'Agente configurado con tu propio negocio',
        },
        {
          number: '04',
          title: 'Conecta tu Calendario',
          description: 'Enlazamos tu cuenta de Calendly para que el agente pueda mandar tu link de reservas y confirmar citas.',
          duration: '2 minutos',
          deliverable: 'Agenda conectada',
        },
        {
          number: '05',
          title: 'Tu Agente Vende, Tú lo Afinas',
          description: 'El agente ya responde por ti. Cada semana revisas sugerencias de mejora del prompt (las apruebas o las descartas) y ves qué conversaciones necesitan tu atención.',
          duration: 'Continuo',
          deliverable: 'Sugerencias semanales + panel de seguimiento',
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
        title: 'SmartSetter IA – AI Sales Agent for Instagram',
        description: 'SmartSetter IA replies to your Instagram DMs, qualifies leads, and sends your booking link, 24/7. Sign up and activate it today.',
      },
      services: {
        title: 'How SmartSetter IA Works | Your 24/7 Sales Agent',
        description: 'An AI agent system that replies, qualifies, follows up, and books for you on Instagram. This is how SmartSetter IA sells while you focus on closing.',
      },
      solutions: {
        title: 'Use Cases | AI-Powered Qualification & Scheduling',
        description: 'Generate, qualify, and schedule leads automatically from Instagram. See how creators, coaches, and agencies use SmartSetter IA to sell without wasting time.',
      },
      process: {
        title: 'Getting Started | From Zero to Your Agent Selling on Instagram',
        description: '5 steps: sign up, connect your Instagram, tell us about your business, connect your calendar, and your agent starts selling. No custom development.',
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
      process: 'Getting Started',
      contact: 'Contact',
      cta: 'Talk To Us',
      ctaSignup: 'Sign Up Free',
    },
    hero: {
      badge: 'Live now',
      title: 'Turn Conversations Into Customers With AI',
      subtitle: 'SmartSetter IA is the agent that replies to your Instagram DMs, qualifies every lead, and sends your booking link for the meeting. No custom development, no months of waiting: sign up and activate it today.',
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
          description: 'The agent sends your booking link and the lead books it themselves — no one has to step in.',
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
          description: 'Via Instagram, your main sales channel. Your AI agent responds instantly.',
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
          description: 'Qualified lead = receives your booking link to schedule on their own, or handoff to your closing team.',
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
          quote: 'The agent qualifies better than many humans. It filters perfectly according to my criteria and sends my booking link at exactly the right moment.',
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
          'You\'re a content creator, coach, or agency receiving inquiries via Instagram',
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
          answer: 'You sign up, connect your Instagram and your calendar, and tell us the essentials of your business. Your agent is operational the same day, no custom development.',
        },
        {
          question: 'What do I need to get started?',
          answer: 'A business Instagram account (linked to a Facebook page) and a Calendly account for meetings. We help you connect everything.',
        },
        {
          question: 'Is it compatible with my current CRM/tools?',
          answer: 'SmartSetter IA integrates with Calendly and Google Calendar for scheduling. We\'re continuously expanding integrations with external CRMs.',
        },
        {
          question: 'Who handles maintenance?',
          answer: 'We do. Improvements, adjustments, and new agent features roll out automatically as part of your plan — no action needed from you.',
        },
        {
          question: 'What are the agent\'s limitations?',
          answer: 'The agent handles predefined conversations and natural variations. For very specific or complex cases, it hands off control to a human.',
        },
        {
          question: 'How is data and privacy handled?',
          answer: 'All data is processed in compliance with GDPR. Conversations are stored securely and you can export or delete your data at any time.',
        },
        {
          question: 'When is WhatsApp coming?',
          answer: 'It\'s the next channel on our roadmap, designed to coexist with Instagram in the same business. If you\'re interested, tell us at sign-up and we\'ll notify you when it\'s available.',
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
        process: 'Getting Started',
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
      subtitle: 'An AI agent already built and ready to sell for you on Instagram',
      core: [
        {
          key: 'instagram',
          title: 'Instagram Agent',
          description: 'Your main sales channel: replies to every DM instantly, with full context on the lead.',
          features: [
            'Instant response to any DM, comment, or story reply',
            'Full context on every reply: what was discussed before, where the lead stands, what content they\'ve seen',
            'Hands off to a human the moment it doesn\'t know how to respond',
            'Never interferes if you reply yourself from Instagram or the CRM',
          ],
          results: 'Zero unanswered DMs, any time of day',
          timeline: 'Your main channel, already built in',
        },
        {
          key: 'followups',
          title: 'Proactive Follow-up',
          description: 'Reaches back out to leads who didn\'t reply, within Instagram\'s real time window.',
          features: [
            'Automatic follow-up touches within the first 24h (the window Instagram allows)',
            'Past that window, the lead moves to a human follow-up panel for you to pick up manually',
            'Stops the moment you take over or mark the conversation as manual',
            'Configurable reactivation cases: reminder, offer, closing the conversation',
          ],
          results: 'Recovers conversations that today go unanswered',
          timeline: 'Runs automatically every 15 minutes',
        },
        {
          key: 'booking',
          title: 'Booking via Calendly',
          description: 'The agent sends your booking link and knows for certain who booked.',
          features: [
            'Sends your Calendly link with unique tracking per conversation',
            'A webhook confirms the booking the moment the lead picks a time — the agent never has to guess your availability',
            'If the lead hasn\'t booked within 22h, it reminds them automatically',
            'The meeting gets linked to the conversation and lead in your dashboard',
          ],
          results: 'You know exactly which conversation generated each meeting',
          timeline: 'Connect your Calendly account in minutes',
        },
      ],
      secondary: {
        title: 'And Also',
        items: [
          {
            key: 'keywords',
            title: 'Comment Keywords',
            description: 'Detects keywords in the comments on your posts and reels and sends the DM automatically, with an optional public reply.',
          },
          {
            key: 'scoring',
            title: 'Scoring + Pre-Meeting Brief',
            description: 'When a lead books, your agent scores interest, intent, urgency, and availability, and leaves you a brief before the call: situation, obstacles, and what they\'re looking for.',
          },
          {
            key: 'visionGlobal',
            title: 'Global Vision',
            description: 'Ask your data questions in plain language: "what objection came up most this week?" Read-only, never touches your conversations.',
          },
          {
            key: 'promptImprovement',
            title: 'Continuous Agent Improvement',
            description: 'Every week you get concrete suggestions to improve how your agent sells, with a before/after simulation. Nothing applies without your approval.',
          },
        ],
      },
      upcoming: {
        title: 'Coming Soon',
        subtitle: 'In progress, for when your business uses more than one channel',
        items: [
          {
            key: 'whatsapp',
            title: 'WhatsApp Agent',
            description: 'The same agent, on WhatsApp Business, coexisting with Instagram in a single business.',
          },
        ],
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
          solution: 'Your agent sends your Calendly booking link; the lead picks a time that works and a webhook confirms the appointment instantly.',
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
      title: 'Getting Started',
      subtitle: 'From zero to your agent selling on Instagram, the same day',
      steps: [
        {
          number: '01',
          title: 'Sign Up',
          description: 'Create your account with your business details. We activate it ourselves to make sure everything works well from day one.',
          duration: '2 minutes',
          deliverable: 'Account created, activation in progress',
        },
        {
          number: '02',
          title: 'Connect Your Instagram',
          description: 'We link your business Instagram account so the agent can read and reply to your DMs and comments.',
          duration: '5 minutes',
          deliverable: 'Instagram account connected',
        },
        {
          number: '03',
          title: 'Tell Us About Your Business',
          description: 'You give us the essentials — what you sell, price, who to, tone, common objections — and we generate your agent\'s prompt automatically.',
          duration: '10-15 minutes',
          deliverable: 'Agent configured with your own business',
        },
        {
          number: '04',
          title: 'Connect Your Calendar',
          description: 'We link your Calendly account so the agent can send your booking link and confirm meetings.',
          duration: '2 minutes',
          deliverable: 'Calendar connected',
        },
        {
          number: '05',
          title: 'Your Agent Sells, You Fine-Tune It',
          description: 'The agent is already replying for you. Every week you review prompt improvement suggestions (approve or dismiss them) and see which conversations need your attention.',
          duration: 'Ongoing',
          deliverable: 'Weekly suggestions + follow-up dashboard',
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
        title: 'SmartSetter IA – Agent de Vente IA pour Instagram',
        description: 'SmartSetter IA répond à vos DMs Instagram, qualifie les leads et envoie votre lien de réservation, 24/7. Inscrivez-vous et activez-le dès aujourd\'hui.',
      },
      services: {
        title: 'Comment Fonctionne SmartSetter IA | Votre Agent de Vente 24/7',
        description: 'Un système d\'agents IA qui répond, qualifie, relance et planifie pour vous sur Instagram. Voici comment SmartSetter IA vend pendant que vous vous concentrez sur le closing.',
      },
      solutions: {
        title: 'Cas d\'Usage | Qualification et Prise de RDV par IA',
        description: 'Générez, qualifiez et planifiez des leads automatiquement depuis Instagram. Découvrez comment créateurs, coachs et agences utilisent SmartSetter IA pour vendre sans perdre de temps.',
      },
      process: {
        title: 'Comment Commencer | De Zéro à Votre Agent qui Vend sur Instagram',
        description: '5 étapes : inscrivez-vous, connectez votre Instagram, parlez-nous de votre business, connectez votre agenda, et votre agent commence à vendre. Sans développement sur mesure.',
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
      process: 'Comment Commencer',
      contact: 'Contact',
      cta: 'Nous Contacter',
      ctaSignup: 'Inscription Gratuite',
    },
    hero: {
      badge: 'Déjà en production',
      title: 'Transformez les Conversations en Clients avec l\'IA',
      subtitle: 'SmartSetter IA est l\'agent qui répond à vos DMs Instagram, qualifie chaque lead et envoie votre lien de réservation pour le RDV. Sans développement sur mesure ni mois d\'attente : inscrivez-vous et activez-le dès aujourd\'hui.',
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
          description: 'L\'agent envoie votre lien de réservation et le lead planifie lui-même, sans qu\'personne n\'ait à intervenir.',
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
          description: 'Via Instagram, votre canal de vente principal. Votre agent IA répond instantanément.',
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
          description: 'Lead qualifié = reçoit votre lien de réservation pour planifier lui-même, ou transfert à votre équipe de closing.',
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
          quote: 'L\'agent qualifie mieux que beaucoup d\'humains. Il filtre parfaitement selon mes critères et envoie mon lien de réservation au bon moment.',
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
          'Vous êtes créateur de contenu, coach ou agence et recevez des demandes via Instagram',
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
          answer: 'Vous vous inscrivez, connectez votre Instagram et votre agenda, et nous parlez de l\'essentiel de votre business. Votre agent est opérationnel le jour même, sans développement sur mesure.',
        },
        {
          question: 'De quoi ai-je besoin pour commencer ?',
          answer: 'Un compte Instagram professionnel (lié à une page Facebook) et un compte Calendly pour les RDV. Nous vous aidons à tout connecter.',
        },
        {
          question: 'Est-ce compatible avec mon CRM/outils actuels ?',
          answer: 'SmartSetter IA s\'intègre avec Calendly et Google Calendar pour la planification. Nous élargissons continuellement les intégrations avec des CRM externes.',
        },
        {
          question: 'Qui gère la maintenance ?',
          answer: 'Nous. Les améliorations, ajustements et nouvelles fonctionnalités de l\'agent sont déployés automatiquement dans le cadre de votre abonnement, sans aucune action de votre part.',
        },
        {
          question: 'Quelles sont les limites de l\'agent ?',
          answer: 'L\'agent gère les conversations prédéfinies et variations naturelles. Pour les cas très spécifiques ou complexes, il transfère le contrôle à un humain.',
        },
        {
          question: 'Comment sont gérées les données et la confidentialité ?',
          answer: 'Toutes les données sont traitées en conformité RGPD. Les conversations sont stockées de façon sécurisée et vous pouvez exporter ou supprimer vos données à tout moment.',
        },
        {
          question: 'Quand arrive WhatsApp ?',
          answer: 'C\'est le prochain canal sur notre roadmap, pensé pour coexister avec Instagram dans un même business. Si ça vous intéresse, dites-le nous à l\'inscription et nous vous préviendrons dès sa disponibilité.',
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
        process: 'Comment Commencer',
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
      subtitle: 'Un agent IA déjà en place, prêt à vendre pour vous sur Instagram',
      core: [
        {
          key: 'instagram',
          title: 'Agent Instagram',
          description: 'Votre canal de vente principal : répond à chaque DM instantanément, avec le contexte complet du lead.',
          features: [
            'Réponse instantanée à tout DM, commentaire ou réponse à une story',
            'Contexte complet à chaque réponse : ce qui a été dit avant, où en est le lead, quel contenu il a vu',
            'Transfère à un humain dès qu\'il ne sait pas quoi répondre',
            'N\'interfère jamais si vous répondez vous-même depuis Instagram ou le CRM',
          ],
          results: 'Zéro DM sans réponse, à toute heure',
          timeline: 'Votre canal principal, déjà intégré',
        },
        {
          key: 'followups',
          title: 'Suivi Proactif',
          description: 'Relance les leads qui n\'ont pas répondu, dans la vraie fenêtre temporelle d\'Instagram.',
          features: [
            'Relances automatiques dans les premières 24h (la fenêtre autorisée par Instagram)',
            'Passé ce délai, le lead passe dans un panneau de suivi humain que vous reprenez à la main',
            'S\'arrête dès que vous reprenez la main ou passez la conversation en manuel',
            'Cas de réactivation configurables : rappel, offre, clôture de la conversation',
          ],
          results: 'Récupère des conversations qui aujourd\'hui restent sans réponse',
          timeline: 'Tourne automatiquement toutes les 15 minutes',
        },
        {
          key: 'booking',
          title: 'Prise de RDV via Calendly',
          description: 'L\'agent envoie votre lien de réservation et sait avec certitude qui a réservé.',
          features: [
            'Envoie votre lien Calendly avec un suivi unique par conversation',
            'Un webhook confirme la réservation dès que le lead choisit un horaire — l\'agent n\'a jamais à deviner votre disponibilité',
            'Si le lead n\'a pas réservé sous 22h, un rappel automatique lui est envoyé',
            'Le RDV est lié à la conversation et au lead dans votre tableau de bord',
          ],
          results: 'Vous savez exactement quelle conversation a généré chaque RDV',
          timeline: 'Connectez votre compte Calendly en quelques minutes',
        },
      ],
      secondary: {
        title: 'Et Aussi',
        items: [
          {
            key: 'keywords',
            title: 'Mots-Clés en Commentaire',
            description: 'Détecte des mots-clés dans les commentaires de vos posts et reels et envoie le DM automatiquement, avec réponse publique optionnelle.',
          },
          {
            key: 'scoring',
            title: 'Scoring + Résumé Pré-RDV',
            description: 'Quand un lead réserve, votre agent note l\'intérêt, l\'intention, l\'urgence et la disponibilité, et vous laisse un résumé avant l\'appel : situation, obstacles et ce qu\'il recherche.',
          },
          {
            key: 'visionGlobal',
            title: 'Vision Globale',
            description: 'Posez des questions à vos données en langage naturel : "quelle objection revient le plus cette semaine ?". Lecture seule, ne touche jamais à vos conversations.',
          },
          {
            key: 'promptImprovement',
            title: 'Amélioration Continue de l\'Agent',
            description: 'Chaque semaine, vous recevez des suggestions concrètes pour améliorer la façon dont votre agent vend, avec une simulation avant/après. Rien ne s\'applique sans votre validation.',
          },
        ],
      },
      upcoming: {
        title: 'Bientôt Disponible',
        subtitle: 'En cours de construction, pour quand votre business utilise plus d\'un canal',
        items: [
          {
            key: 'whatsapp',
            title: 'Agent WhatsApp',
            description: 'Le même agent, sur WhatsApp Business, coexistant avec Instagram dans un même business.',
          },
        ],
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
          solution: 'Votre agent envoie votre lien de réservation Calendly ; le lead choisit un horaire qui lui convient et un webhook confirme le RDV instantanément.',
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
      title: 'Comment Commencer',
      subtitle: 'De zéro à votre agent qui vend sur Instagram, le jour même',
      steps: [
        {
          number: '01',
          title: 'Inscrivez-vous',
          description: 'Créez votre compte avec les informations de votre business. Nous l\'activons nous-mêmes pour nous assurer que tout fonctionne bien dès le premier jour.',
          duration: '2 minutes',
          deliverable: 'Compte créé, activation en cours',
        },
        {
          number: '02',
          title: 'Connectez Votre Instagram',
          description: 'Nous lions votre compte Instagram professionnel pour que l\'agent puisse lire et répondre à vos DMs et commentaires.',
          duration: '5 minutes',
          deliverable: 'Compte Instagram connecté',
        },
        {
          number: '03',
          title: 'Parlez-Nous de Votre Business',
          description: 'Vous nous donnez l\'essentiel — ce que vous vendez, le prix, à qui, le ton, les objections habituelles — et nous générons automatiquement le prompt de votre agent.',
          duration: '10-15 minutes',
          deliverable: 'Agent configuré avec votre propre business',
        },
        {
          number: '04',
          title: 'Connectez Votre Agenda',
          description: 'Nous lions votre compte Calendly pour que l\'agent puisse envoyer votre lien de réservation et confirmer les RDV.',
          duration: '2 minutes',
          deliverable: 'Agenda connecté',
        },
        {
          number: '05',
          title: 'Votre Agent Vend, Vous l\'Affinez',
          description: 'L\'agent répond déjà pour vous. Chaque semaine, vous examinez des suggestions d\'amélioration du prompt (acceptez ou rejetez-les) et voyez quelles conversations ont besoin de votre attention.',
          duration: 'Continu',
          deliverable: 'Suggestions hebdomadaires + tableau de suivi',
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
        title: 'SmartSetter IA – KI-Vertriebsagent für Instagram',
        description: 'SmartSetter IA beantwortet Ihre Instagram-DMs, qualifiziert Leads und sendet Ihren Buchungslink, 24/7. Registrieren Sie sich und aktivieren Sie ihn noch heute.',
      },
      services: {
        title: 'So Funktioniert SmartSetter IA | Ihr 24/7-Vertriebsagent',
        description: 'Ein System aus KI-Agenten, das für Sie auf Instagram antwortet, qualifiziert, nachfasst und Termine plant. So verkauft SmartSetter IA, während Sie sich aufs Abschließen konzentrieren.',
      },
      solutions: {
        title: 'Anwendungsfälle | Qualifizierung und Terminplanung mit KI',
        description: 'Generieren, qualifizieren und planen Sie Leads automatisch von Instagram. Erfahren Sie, wie Creator, Coaches und Agenturen SmartSetter IA nutzen, um ohne Zeitverlust zu verkaufen.',
      },
      process: {
        title: 'Erste Schritte | Von Null zum Verkaufenden Agenten auf Instagram',
        description: '5 Schritte: registrieren, Instagram verbinden, uns von Ihrem Business erzählen, Kalender verbinden, und Ihr Agent beginnt zu verkaufen. Ohne individuelle Entwicklung.',
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
      process: 'Erste Schritte',
      contact: 'Kontakt',
      cta: 'Kontaktieren Sie Uns',
      ctaSignup: 'Kostenlos Registrieren',
    },
    hero: {
      badge: 'Bereits im Einsatz',
      title: 'Verwandeln Sie Gespräche in Kunden mit KI',
      subtitle: 'SmartSetter IA ist der Agent, der Ihre Instagram-DMs beantwortet, jeden Lead qualifiziert und Ihren Buchungslink für den Termin sendet. Ohne individuelle Entwicklung, ohne monatelange Wartezeit: Registrieren Sie sich und aktivieren Sie ihn noch heute.',
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
          description: 'Der Agent sendet Ihren Buchungslink und der Lead bucht selbst — niemand muss eingreifen.',
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
          description: 'Über Instagram, Ihren wichtigsten Vertriebskanal. Ihr KI-Agent antwortet sofort.',
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
          description: 'Qualifizierter Lead = erhält Ihren Buchungslink, um selbst einen Termin zu planen, oder Übergabe an Ihr Closing-Team.',
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
          quote: 'Der Agent qualifiziert besser als viele Menschen. Er filtert perfekt nach meinen Kriterien und sendet meinen Buchungslink genau im richtigen Moment.',
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
          'Sie Content Creator, Coach oder Agentur sind und Anfragen über Instagram erhalten',
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
          answer: 'Sie registrieren sich, verbinden Ihr Instagram und Ihren Kalender und erzählen uns das Wesentliche über Ihr Business. Ihr Agent ist noch am selben Tag einsatzbereit, ohne individuelle Entwicklung.',
        },
        {
          question: 'Was brauche ich zum Starten?',
          answer: 'Ein geschäftliches Instagram-Konto (verknüpft mit einer Facebook-Seite) und ein Calendly-Konto für Termine. Wir helfen Ihnen, alles zu verbinden.',
        },
        {
          question: 'Ist es mit meinem aktuellen CRM/Tools kompatibel?',
          answer: 'SmartSetter IA integriert sich mit Calendly und Google Calendar für die Terminplanung. Wir erweitern die Integrationen mit externen CRMs laufend.',
        },
        {
          question: 'Wer kümmert sich um die Wartung?',
          answer: 'Wir. Verbesserungen, Anpassungen und neue Agent-Funktionen werden automatisch im Rahmen Ihres Plans ausgerollt – ohne dass Sie etwas tun müssen.',
        },
        {
          question: 'Was sind die Grenzen des Agenten?',
          answer: 'Der Agent verarbeitet vordefinierte Gespräche und natürliche Variationen. Bei sehr spezifischen oder komplexen Fällen übergibt er die Kontrolle an einen Menschen.',
        },
        {
          question: 'Wie werden Daten und Datenschutz gehandhabt?',
          answer: 'Alle Daten werden DSGVO-konform verarbeitet. Gespräche werden sicher gespeichert und Sie können Ihre Daten jederzeit exportieren oder löschen.',
        },
        {
          question: 'Wann kommt WhatsApp?',
          answer: 'Das ist der nächste Kanal auf unserer Roadmap, gedacht für die Koexistenz mit Instagram im selben Business. Wenn Sie daran interessiert sind, sagen Sie es uns bei der Registrierung und wir informieren Sie, sobald es verfügbar ist.',
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
        process: 'Erste Schritte',
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
      subtitle: 'Ein KI-Agent, der bereits läuft und für Sie auf Instagram verkauft',
      core: [
        {
          key: 'instagram',
          title: 'Instagram-Agent',
          description: 'Ihr wichtigster Vertriebskanal: beantwortet jede DM sofort, mit vollem Kontext zum Lead.',
          features: [
            'Sofortige Antwort auf jede DM, jeden Kommentar oder jede Story-Antwort',
            'Voller Kontext bei jeder Antwort: was vorher besprochen wurde, wo der Lead steht, welchen Inhalt er gesehen hat',
            'Übergibt an einen Menschen, sobald er nicht weiß, was er antworten soll',
            'Greift nie ein, wenn Sie selbst über Instagram oder das CRM antworten',
          ],
          results: 'Keine unbeantwortete DM, zu jeder Uhrzeit',
          timeline: 'Ihr wichtigster Kanal, schon eingebaut',
        },
        {
          key: 'followups',
          title: 'Proaktives Follow-up',
          description: 'Meldet sich bei Leads zurück, die nicht geantwortet haben, innerhalb des echten Zeitfensters von Instagram.',
          features: [
            'Automatische Follow-up-Nachrichten innerhalb der ersten 24h (das von Instagram erlaubte Zeitfenster)',
            'Nach diesem Zeitfenster wechselt der Lead in ein Panel für manuelles Follow-up, das Sie selbst übernehmen',
            'Stoppt, sobald Sie die Kontrolle übernehmen oder das Gespräch auf manuell setzen',
            'Konfigurierbare Reaktivierungsfälle: Erinnerung, Angebot, Abschluss des Gesprächs',
          ],
          results: 'Rettet Gespräche, die heute unbeantwortet bleiben',
          timeline: 'Läuft automatisch alle 15 Minuten',
        },
        {
          key: 'booking',
          title: 'Terminbuchung über Calendly',
          description: 'Der Agent sendet Ihren Buchungslink und weiß mit Sicherheit, wer gebucht hat.',
          features: [
            'Sendet Ihren Calendly-Link mit eindeutiger Nachverfolgung pro Gespräch',
            'Ein Webhook bestätigt die Buchung, sobald der Lead eine Uhrzeit wählt — der Agent muss Ihre Verfügbarkeit nie erraten',
            'Wenn der Lead innerhalb von 22h nicht gebucht hat, wird automatisch erinnert',
            'Der Termin wird in Ihrem Dashboard mit dem Gespräch und dem Lead verknüpft',
          ],
          results: 'Sie wissen genau, welches Gespräch zu welchem Termin geführt hat',
          timeline: 'Verbinden Sie Ihr Calendly-Konto in wenigen Minuten',
        },
      ],
      secondary: {
        title: 'Und Außerdem',
        items: [
          {
            key: 'keywords',
            title: 'Keywords in Kommentaren',
            description: 'Erkennt Schlüsselwörter in den Kommentaren Ihrer Posts und Reels und sendet automatisch die DM, mit optionaler öffentlicher Antwort.',
          },
          {
            key: 'scoring',
            title: 'Scoring + Termin-Briefing',
            description: 'Wenn ein Lead bucht, bewertet Ihr Agent Interesse, Absicht, Dringlichkeit und Verfügbarkeit und hinterlässt Ihnen vor dem Anruf ein Briefing: Situation, Hindernisse und was gesucht wird.',
          },
          {
            key: 'visionGlobal',
            title: 'Globale Vision',
            description: 'Stellen Sie Ihren Daten Fragen in natürlicher Sprache: "Welcher Einwand kam diese Woche am häufigsten vor?" Nur lesend, greift nie in Ihre Gespräche ein.',
          },
          {
            key: 'promptImprovement',
            title: 'Kontinuierliche Verbesserung des Agenten',
            description: 'Jede Woche erhalten Sie konkrete Vorschläge, wie Ihr Agent besser verkaufen kann, mit einer Vorher/Nachher-Simulation. Nichts wird ohne Ihre Zustimmung übernommen.',
          },
        ],
      },
      upcoming: {
        title: 'Demnächst',
        subtitle: 'In Arbeit, für wenn Ihr Business mehr als einen Kanal nutzt',
        items: [
          {
            key: 'whatsapp',
            title: 'WhatsApp-Agent',
            description: 'Derselbe Agent, auf WhatsApp Business, im selben Business neben Instagram.',
          },
        ],
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
          solution: 'Ihr Agent sendet Ihren Calendly-Buchungslink; der Lead wählt eine passende Uhrzeit und ein Webhook bestätigt den Termin sofort.',
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
      title: 'Erste Schritte',
      subtitle: 'Von Null zum verkaufenden Agenten auf Instagram, noch am selben Tag',
      steps: [
        {
          number: '01',
          title: 'Registrieren',
          description: 'Erstellen Sie Ihr Konto mit den Daten Ihres Business. Wir aktivieren es selbst, um sicherzustellen, dass von Tag eins an alles funktioniert.',
          duration: '2 Minuten',
          deliverable: 'Konto erstellt, Aktivierung läuft',
        },
        {
          number: '02',
          title: 'Instagram Verbinden',
          description: 'Wir verknüpfen Ihr geschäftliches Instagram-Konto, damit der Agent Ihre DMs und Kommentare lesen und beantworten kann.',
          duration: '5 Minuten',
          deliverable: 'Instagram-Konto verbunden',
        },
        {
          number: '03',
          title: 'Erzählen Sie Uns von Ihrem Business',
          description: 'Sie geben uns das Wesentliche — was Sie verkaufen, Preis, an wen, Tonfall, übliche Einwände — und wir generieren automatisch den Prompt Ihres Agenten.',
          duration: '10-15 Minuten',
          deliverable: 'Agent mit Ihrem eigenen Business konfiguriert',
        },
        {
          number: '04',
          title: 'Kalender Verbinden',
          description: 'Wir verknüpfen Ihr Calendly-Konto, damit der Agent Ihren Buchungslink senden und Termine bestätigen kann.',
          duration: '2 Minuten',
          deliverable: 'Kalender verbunden',
        },
        {
          number: '05',
          title: 'Ihr Agent Verkauft, Sie Feilen Nach',
          description: 'Der Agent antwortet bereits für Sie. Jede Woche prüfen Sie Vorschläge zur Prompt-Verbesserung (annehmen oder ablehnen) und sehen, welche Gespräche Ihre Aufmerksamkeit brauchen.',
          duration: 'Laufend',
          deliverable: 'Wöchentliche Vorschläge + Follow-up-Dashboard',
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
