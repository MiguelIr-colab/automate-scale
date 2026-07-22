import { Language } from './translations';

export interface LegalSection {
  heading?: string;
  body: string[]; // each item = paragraph; lines starting with "- " become list items
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
}

export interface LegalContent {
  privacy: LegalDocument;
  terms: LegalDocument;
  cookies: LegalDocument;
}

// Datos del titular — personalizar si cambia la forma jurídica o el contacto
const OWNER = {
  es: {
    name: 'Pedro Irurzun — Smart Setter AI',
    legal: 'Autónomo (empresario individual)',
    address: 'Zúrich, Suiza',
    email: 'privacy@aiassistant-bots.ch',
  },
  en: {
    name: 'Pedro Irurzun — Smart Setter AI',
    legal: 'Sole proprietorship (self-employed individual)',
    address: 'Zurich, Switzerland',
    email: 'privacy@aiassistant-bots.ch',
  },
  fr: {
    name: 'Pedro Irurzun — Smart Setter AI',
    legal: 'Entrepreneur individuel (indépendant)',
    address: 'Zurich, Suisse',
    email: 'privacy@aiassistant-bots.ch',
  },
  de: {
    name: 'Pedro Irurzun — Smart Setter AI',
    legal: 'Einzelunternehmer (selbstständig)',
    address: 'Zürich, Schweiz',
    email: 'privacy@aiassistant-bots.ch',
  },
};

// ===================== ESPAÑOL =====================
const es: LegalContent = {
  terms: {
    title: 'Términos de servicio',
    lastUpdated: 'Última actualización: 22 de julio de 2026',
    intro:
      'Estos Términos regulan el acceso y uso de Smart Setter AI (el "Servicio"), operado por Pedro Irurzun, empresario individual con domicilio en Zúrich, Suiza. Al crear una cuenta o usar el Servicio, el negocio o la persona que lo hace ("Cliente", "tú") acepta estos Términos.',
    sections: [
      {
        heading: '1. Elegibilidad',
        body: [
          'Debes tener al menos 18 años y estar autorizado para actuar en nombre del negocio cuya cuenta profesional de Instagram y página de Facebook conectas al Servicio. Si usas el Servicio en nombre de una organización, declaras tener autoridad para vincularla a estos Términos.',
        ],
      },
      {
        heading: '2. Descripción del Servicio',
        body: [
          'El Servicio permite al Cliente:',
          '- Conectar una cuenta profesional/empresarial de Instagram vinculada a una página de Facebook.',
          '- Configurar agentes de IA que responden automáticamente a comentarios, mensajes directos y respuestas a historias.',
          '- Configurar palabras clave que activan respuestas automáticas en comentarios.',
          '- Programar mensajes de seguimiento y, opcionalmente, conectar Calendly para reservar citas.',
          '- Consultar en un panel el historial de conversaciones, el scoring de leads y estadísticas de uso.',
          '- Subir documentos del negocio para alimentar una base de conocimiento de IA usada por los agentes.',
        ],
      },
      {
        heading: '3. Cuenta y acceso',
        body: [
          'Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de toda actividad realizada bajo tu cuenta.',
          'Debes ser titular, o estar debidamente autorizado a administrar, la cuenta de Instagram y la página de Facebook que conectas.',
          'Podemos suspender o restringir el acceso si detectamos uso fraudulento, incumplimiento de estos Términos, o infracción de las Condiciones de la Plataforma de Meta o las Normas de la Comunidad de Instagram.',
        ],
      },
      {
        heading: '4. Responsabilidades del Cliente',
        body: [
          'Como Cliente, aceptas que:',
          '- Eres el responsable del tratamiento de los datos personales de los Leads que interactúan con tu cuenta de Instagram (ver nuestra Política de privacidad), y eres el único responsable de contar con una base legal válida para tratarlos.',
          '- Cumplirás la normativa de protección de datos aplicable (RGPD, LPD suiza, CCPA cuando corresponda) y cualquier obligación legal de informar de que una persona interactúa con un sistema de IA (como el artículo 50 del Reglamento de IA de la UE) cuando te sea aplicable.',
          '- Cumplirás las Condiciones de la Plataforma de Meta (developers.facebook.com/policy) y las Normas de la Comunidad de Instagram.',
          '- No usarás el Servicio para enviar spam, contenido engañoso, ilegal o que infrinja derechos de terceros.',
          '- Eres responsable de revisar y validar la configuración del negocio (oferta, tono, FAQs, reglas de escalado) usada para generar las respuestas automáticas.',
        ],
      },
      {
        heading: '5. Contenido generado por IA',
        body: [
          'Las respuestas enviadas por los agentes de IA se generan a partir de la configuración que proporcionas. Eres responsable de revisarla y puedes desactivar el agente o tomar el control manual de cualquier conversación en cualquier momento. No garantizamos que las respuestas sean siempre exactas, adecuadas o estén libres de errores.',
        ],
      },
      {
        heading: '6. Tarifas',
        body: [
          'Las tarifas del Servicio son las establecidas en el plan de precios o la propuesta acordada contigo por separado. Salvo que la ley exija lo contrario, no son reembolsables. Podemos modificarlas de forma prospectiva con un aviso razonable.',
        ],
      },
      {
        heading: '7. Propiedad intelectual',
        body: [
          'Conservamos todos los derechos sobre el Servicio, su software, diseño y tecnología subyacente. Conservas todos los derechos sobre tu propio contenido de negocio, tu configuración y los datos que subas. Nos concedes una licencia limitada para tratar ese contenido únicamente para prestarte el Servicio.',
        ],
      },
      {
        heading: '8. Confidencialidad',
        body: [
          'Cada parte mantendrá confidencial la información técnica y de negocio no pública de la otra, usándola solo en la medida necesaria para cumplir estos Términos, salvo obligación legal de divulgación.',
        ],
      },
      {
        heading: '9. Protección de datos',
        body: [
          'El tratamiento de datos personales a través del Servicio se describe en nuestra Política de privacidad. En la medida en que tratemos datos personales como encargados por tu cuenta, estos Términos junto con la Política de privacidad constituyen nuestro acuerdo de tratamiento de datos; si necesitas un anexo más detallado, contáctanos.',
        ],
      },
      {
        heading: '10. Disponibilidad del Servicio',
        body: [
          'Hacemos esfuerzos razonables por mantener el Servicio disponible, pero no garantizamos un uptime del 100%. El Servicio depende de APIs de terceros (Meta, Anthropic, OpenAI, Calendly) fuera de nuestro control, y no somos responsables de las caídas o restricciones causadas por estos proveedores.',
        ],
      },
      {
        heading: '11. Suspensión y cancelación',
        body: [
          'Puedes dejar de usar el Servicio y desconectar tu cuenta de Instagram en cualquier momento. Podemos suspender o cancelar tu acceso si incumples estos Términos, haces un uso indebido del Servicio, o infringes las políticas de Meta, avisándote cuando sea razonablemente posible. Tras la cancelación, el borrado de datos se gestiona según nuestra Política de privacidad.',
        ],
      },
      {
        heading: '12. Exclusión de garantías y limitación de responsabilidad',
        body: [
          'El Servicio se proporciona "tal cual" y "según disponibilidad". En la medida permitida por la ley, excluimos toda garantía expresa o implícita. Nuestra responsabilidad total no excederá las tarifas que hayas pagado en los 12 meses anteriores a la reclamación, y no seremos responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, ni de pérdida de beneficios o de datos —incluidas las consecuencias de acciones tomadas por Meta sobre tu cuenta. Nada aquí limita una responsabilidad que no pueda limitarse conforme a la ley aplicable.',
        ],
      },
      {
        heading: '13. Indemnización',
        body: [
          'Aceptas indemnizarnos frente a reclamaciones, daños y gastos derivados de tu uso del Servicio en incumplimiento de estos Términos, de la ley aplicable o de las políticas de Meta, o del contenido que configures para que envíen los agentes.',
        ],
      },
      {
        heading: '14. Ley aplicable y jurisdicción',
        body: [
          'Estos Términos se rigen por el derecho suizo. Cualquier disputa estará sometida a la jurisdicción exclusiva de los tribunales del Cantón de Zúrich, Suiza, salvo que una normativa imperativa de protección al consumidor disponga lo contrario.',
        ],
      },
      {
        heading: '15. Cambios en estos Términos',
        body: [
          'Podemos actualizar estos Términos para reflejar cambios en el Servicio o en los requisitos legales/de Meta. Actualizaremos la fecha de "Última actualización" cuando lo hagamos, y comunicaremos los cambios materiales a los Clientes activos.',
        ],
      },
      {
        heading: '16. Disposiciones varias',
        body: [
          'Si alguna disposición resulta inaplicable, el resto permanecerá en vigor. Estos Términos constituyen el acuerdo completo entre tú y nosotros, salvo cualquier propuesta o acuerdo escrito firmado por ambas partes, que prevalecerá sobre lo que aquí entre en conflicto.',
        ],
      },
      {
        heading: '17. Contacto',
        body: [`${OWNER.es.name} — ${OWNER.es.address}`, `Email: ${OWNER.es.email}`],
      },
    ],
  },
  privacy: {
    title: 'Política de privacidad',
    lastUpdated: 'Última actualización: 22 de julio de 2026',
    intro:
      'Esta política explica qué datos personales tratamos, por qué, con quién los compartimos y qué derechos tienes, ya seas visitante de esta web, un Cliente de Smart Setter AI, o un Lead (alguien que escribe a un Cliente por Instagram).',
    sections: [
      {
        heading: '1. Quiénes somos',
        body: [
          `Titular: ${OWNER.es.name}`,
          `Forma jurídica: ${OWNER.es.legal}`,
          `Domicilio: ${OWNER.es.address}`,
          `Contacto: ${OWNER.es.email}`,
        ],
      },
      {
        heading: '2. Nuestro papel: responsable vs. encargado del tratamiento',
        body: [
          'Sobre los datos de esta web y de la propia cuenta del Cliente en el Servicio, actuamos como responsables del tratamiento.',
          'Sobre los datos de los Leads (las personas que escriben al Cliente por Instagram), el Cliente es el responsable del tratamiento y nosotros actuamos como encargados: solo tratamos esos datos siguiendo sus instrucciones, para prestar el Servicio.',
        ],
      },
      {
        heading: '3. Formulario de contacto de esta web',
        body: [
          'Si rellenas el formulario de contacto, recogemos tu nombre, email, mensaje, canal de interés y tipo de negocio, junto con tu dirección IP y la página de origen. Estos datos se envían por correo electrónico a nuestro equipo para responderte; no se almacenan en ninguna base de datos.',
          'El formulario está protegido con Google reCAPTCHA (v3) para prevenir spam — Google recibe una señal técnica de tu interacción con la página para calcular una puntuación anti-fraude; ver la política de privacidad de Google (policies.google.com/privacy).',
        ],
      },
      {
        heading: '4. Datos del Servicio (Clientes y Leads)',
        body: [
          'Cuenta y negocio del Cliente: email, nombre, contraseña (cifrada), configuración del negocio (oferta, tono, horarios, reglas de escalado) y documentos que subas para la base de conocimiento de IA.',
          'Datos de Instagram (vía la API de Meta): identificadores y token OAuth de tu cuenta; y de cada Lead que te escribe, su identificador y nombre de usuario de Instagram, el contenido de mensajes/comentarios/respuestas a historias, y adjuntos.',
          'Datos de agendamiento (vía Calendly, opcional): nombre y email del invitado, hora de la cita.',
          'Datos generados por IA: puntuación e interés del lead, resumen de conversación, informes de calidad/objeciones.',
          'Datos técnicos: logs de error (identificadores técnicos, códigos de estado) y contadores de uso de API para facturación — sin contenido de mensajes.',
          'Cookies: una única cookie de sesión estrictamente necesaria para mantener conectado al equipo del Cliente en el panel del Servicio. No usamos cookies de publicidad ni analítica en el panel.',
        ],
      },
      {
        heading: '5. Para qué tratamos estos datos',
        body: [
          'Para responder consultas de contacto; para prestar el Servicio (enviar/recibir mensajes de Instagram, generar respuestas de IA, detectar palabras clave, programar seguimientos y citas, mostrar el historial y scoring); para asegurar y operar el Servicio (autenticación, prevención de fraude, facturación); y, con datos anonimizados, para mejorar los prompts de IA por defecto.',
          'No usamos los datos de los Leads con fines publicitarios, y no vendemos datos personales a terceros.',
        ],
      },
      {
        heading: '6. Bases legales (RGPD / LPD suiza)',
        body: [
          '- Consentimiento: al enviar el formulario de contacto.',
          '- Ejecución de un contrato: tratamiento de los datos de la cuenta del Cliente para prestar el Servicio.',
          '- Interés legítimo: seguridad del Servicio, prevención de fraude/abuso, mejora de la fiabilidad y de la calidad de los prompts de IA (de forma agregada/anonimizada).',
          'Para los datos de los Leads, la base legal aplicable la determina y garantiza el Cliente, como responsable de ese tratamiento.',
        ],
      },
      {
        heading: '7. Con quién compartimos los datos',
        body: [
          '- Meta / Instagram: tokens OAuth y contenido de mensajes, para enviar/recibir mensajes, comentarios y respuestas a historias.',
          '- Anthropic (API de Claude), EEUU: historial de conversación, datos de perfil del Lead y configuración del negocio, para generar las respuestas del agente de IA.',
          '- OpenAI, EEUU: texto de documentos subidos y consultas de búsqueda derivadas de conversaciones, para generar embeddings de búsqueda (RAG).',
          '- Calendly, EEUU: nombre y email del invitado, horarios, para agendar citas cuando el Cliente activa esta función.',
          '- Google reCAPTCHA, EEUU: señal técnica de interacción con el formulario de contacto, para prevenir spam.',
          '- Proveedor de envío de email: contenido del formulario de contacto y alertas del Servicio.',
          '- Sentry (opcional): contexto técnico del error, sin contenido de mensajes.',
          '- Proveedores de hosting/CDN de esta web y del Servicio, como infraestructura.',
          'No compartimos datos personales con ningún otro tercero salvo obligación legal o instrucción expresa del Cliente.',
        ],
      },
      {
        heading: '8. Transferencias internacionales de datos',
        body: [
          'Los servidores del Servicio están ubicados en Francia (Unión Europea). Esta web se sirve a través de un proveedor de hosting/CDN internacional. Algunos de nuestros encargados (Anthropic, OpenAI, Calendly, Google) tienen sede en Estados Unidos. Cuando los datos se transfieren fuera de Suiza/el EEE, nos apoyamos en las garantías reconocidas por la LPD suiza y, cuando corresponda, el RGPD de la UE — como las Cláusulas Contractuales Tipo u otro mecanismo de adecuación/transferencia equivalente.',
        ],
      },
      {
        heading: '9. Conservación de los datos',
        body: [
          'Los mensajes de contacto se conservan solo en el correo electrónico enviado, sin almacenamiento adicional en base de datos. Actualmente no aplicamos un plazo de expiración automático a los datos de Leads o conversaciones del Servicio — se conservan mientras la cuenta del Cliente y la integración de Instagram permanezcan activas, salvo borrado según la Sección 10.',
        ],
      },
      {
        heading: '10. Borrado de datos y tus derechos',
        body: [
          'Si eres un Lead y quieres que se borren tus datos: revoca el acceso de Smart Setter AI desde tu configuración de Instagram/Facebook (Meta nos notificará y borraremos tus datos en cualquier negocio de la plataforma con el que hayas interactuado); o contacta directamente con el negocio al que escribiste; o escríbenos indicando la cuenta de Instagram en cuestión.',
          'Si eres un Cliente, puedes borrar los datos de un Lead concreto desde tu panel, y solicitar el borrado de toda tu cuenta contactándonos.',
          `Según tu ubicación, puedes tener derechos de acceso, rectificación, limitación o portabilidad de tus datos, de oposición a determinados tratamientos, y de reclamación ante una autoridad de control — en Suiza, el IFPDT/FDPIC; en la UE, tu autoridad local. Contacta con ${OWNER.es.email}.`,
        ],
      },
      {
        heading: '11. Tratamiento automatizado y contenido generado por IA',
        body: [
          'Las respuestas a los Leads pueden generarse automáticamente mediante un agente de IA configurado por el Cliente. Cuando la ley aplicable (como el Reglamento de IA de la UE) exija informar de que se interactúa con una IA, el Cliente es responsable de garantizar ese aviso a su propia audiencia.',
        ],
      },
      {
        heading: '12. Seguridad',
        body: [
          'Los tokens de acceso de Instagram y Calendly se almacenan cifrados en reposo. Las comunicaciones vía webhooks de Meta se verifican con firmas HMAC-SHA256. El acceso al panel requiere autenticación. Ningún sistema es 100% seguro, pero aplicamos medidas técnicas y organizativas razonables y proporcionadas al riesgo.',
        ],
      },
      {
        heading: '13. Menores',
        body: [
          'Nuestro Servicio está dirigido a negocios y a sus representantes autorizados, que deben tener al menos 18 años. Los Leads son usuarios finales de Instagram, por lo que se aplica la edad mínima propia de Instagram (13 años, o superior si la ley local lo exige).',
        ],
      },
      {
        heading: '14. Cambios en esta política',
        body: [
          'Podemos actualizar esta política para reflejar cambios en el Servicio o en los requisitos legales/de la plataforma de Meta. Actualizaremos la fecha de "Última actualización" cuando lo hagamos.',
        ],
      },
      {
        heading: '15. Contacto',
        body: [`${OWNER.es.name} — ${OWNER.es.address}`, `Email: ${OWNER.es.email}`],
      },
    ],
  },
  cookies: {
    title: 'Política de cookies',
    lastUpdated: 'Última actualización: 22 de julio de 2026',
    intro:
      'Esta web usa el mínimo posible de cookies y tecnologías similares. No usamos cookies de publicidad ni de analítica propia.',
    sections: [
      {
        heading: '1. Qué usamos realmente',
        body: [
          '- Preferencia de cookies: guardamos tu elección del banner de cookies en el almacenamiento local de tu navegador (localStorage), no en una cookie, y solo para no volver a mostrarte el banner.',
          '- Google reCAPTCHA (v3): en el formulario de contacto, para prevenir spam. Google puede establecer cookies propias y recibir datos técnicos de tu navegador con este fin.',
          '- Cookie de sesión del panel del Servicio: si eres Cliente y accedes al panel de Smart Setter AI, se usa una única cookie de sesión estrictamente necesaria para mantenerte conectado.',
        ],
      },
      {
        heading: '2. Lo que NO usamos',
        body: [
          'No usamos Google Analytics ni ninguna otra herramienta de analítica o publicidad de terceros en esta web.',
        ],
      },
      {
        heading: '3. Base legal',
        body: [
          'La cookie de sesión y la preferencia de cookies son estrictamente necesarias para el funcionamiento del sitio y no requieren consentimiento. reCAPTCHA se activa únicamente al usar el formulario de contacto, como medida de seguridad necesaria para prestar ese servicio.',
        ],
      },
      {
        heading: '4. Gestión',
        body: [
          'Puedes configurar tu navegador para bloquear cookies de terceros como las de Google reCAPTCHA, aunque esto podría impedir el envío del formulario de contacto.',
        ],
      },
      {
        heading: '5. Actualizaciones',
        body: ['Esta política puede modificarse si cambian las tecnologías usadas en la web.'],
      },
    ],
  },
};

// ===================== ENGLISH =====================
const en: LegalContent = {
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: July 22, 2026',
    intro:
      'These Terms govern access to and use of Smart Setter AI (the "Service"), operated by Pedro Irurzun, an individual entrepreneur based in Zurich, Switzerland. By creating an account or using the Service, the business or individual doing so ("Client", "you") agrees to these Terms.',
    sections: [
      {
        heading: '1. Eligibility',
        body: [
          'You must be at least 18 years old and authorized to act on behalf of the business whose Instagram professional account and Facebook Page you connect to the Service. If you use the Service on behalf of an organization, you represent that you have authority to bind it to these Terms.',
        ],
      },
      {
        heading: '2. Description of the Service',
        body: [
          'The Service allows the Client to:',
          '- Connect an Instagram professional/business account linked to a Facebook Page.',
          '- Configure AI agents that automatically reply to comments, direct messages, and story replies.',
          '- Configure keyword triggers for automated comment replies.',
          '- Schedule follow-up messages and, optionally, connect Calendly to book appointments.',
          '- Review conversation history, lead scoring, and usage statistics in a dashboard.',
          '- Upload business documents to power an AI knowledge base used by the agents.',
        ],
      },
      {
        heading: '3. Account & access',
        body: [
          'You are responsible for the confidentiality of your login credentials and for all activity under your account.',
          'You must be the account holder of, or duly authorized to manage, the Instagram account and Facebook Page you connect.',
          'We may suspend or restrict access if we detect fraudulent use, a violation of these Terms, or a violation of Meta\'s Platform Terms or Instagram\'s Community Guidelines.',
        ],
      },
      {
        heading: '4. Client responsibilities',
        body: [
          'As the Client, you agree that:',
          '- You are the data controller for the personal data of Leads interacting with your Instagram account (see our Privacy Policy), and are solely responsible for having a valid legal basis to process it.',
          '- You will comply with applicable data protection law (GDPR, Swiss FADP, CCPA where applicable) and any legal requirement to disclose that a person is interacting with an AI system (such as Article 50 of the EU AI Act) where applicable to you.',
          '- You will comply with Meta\'s Platform Terms (developers.facebook.com/policy) and Instagram\'s Community Guidelines.',
          '- You will not use the Service to send spam, deceptive, illegal content, or content that infringes the rights of others.',
          '- You are responsible for reviewing and validating the business configuration used to generate automated replies.',
        ],
      },
      {
        heading: '5. AI-generated content',
        body: [
          'Replies sent by the AI agents are generated based on the configuration you provide. You are responsible for reviewing it and may disable the agent or take manual control of any conversation at any time. We do not guarantee that AI-generated responses will always be accurate, appropriate, or error-free.',
        ],
      },
      {
        heading: '6. Fees',
        body: [
          'Fees for the Service are as set out in the pricing plan or order form agreed with you separately. Except as required by law, fees are non-refundable. We may modify our fees prospectively with reasonable notice.',
        ],
      },
      {
        heading: '7. Intellectual property',
        body: [
          'We retain all rights in the Service, its software, design, and underlying technology. You retain all rights to your own business content, configuration, and the data you upload. You grant us a limited license to process that content solely to provide the Service.',
        ],
      },
      {
        heading: '8. Confidentiality',
        body: [
          'Each party will keep the other\'s non-public business and technical information confidential and use it only as necessary to perform under these Terms, except where disclosure is required by law.',
        ],
      },
      {
        heading: '9. Data protection',
        body: [
          'The processing of personal data through the Service is described in our Privacy Policy. To the extent we process personal data as a processor on your behalf, these Terms together with the Privacy Policy constitute our data processing arrangement; contact us if you need a more detailed addendum.',
        ],
      },
      {
        heading: '10. Service availability',
        body: [
          'We make reasonable efforts to keep the Service available but do not guarantee 100% uptime. The Service depends on third-party APIs (Meta, Anthropic, OpenAI, Calendly) outside of our control, and we are not responsible for outages or restrictions caused by these providers.',
        ],
      },
      {
        heading: '11. Suspension and termination',
        body: [
          'You may stop using the Service and disconnect your Instagram account at any time. We may suspend or terminate your access if you breach these Terms, misuse the Service, or violate Meta\'s policies, with notice where reasonably possible. Upon termination, data deletion is handled as described in our Privacy Policy.',
        ],
      },
      {
        heading: '12. Disclaimers and limitation of liability',
        body: [
          'The Service is provided "as is" and "as available." To the maximum extent permitted by law, we disclaim all warranties, express or implied. Our aggregate liability will not exceed the fees you paid us in the 12 months preceding the claim, and we will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits or data — including consequences of actions taken by Meta against your account. Nothing here limits liability that cannot be limited under applicable law.',
        ],
      },
      {
        heading: '13. Indemnification',
        body: [
          'You agree to indemnify us from claims, damages, and expenses arising from your use of the Service in violation of these Terms, applicable law, or Meta\'s policies, or from content you configure the agents to send.',
        ],
      },
      {
        heading: '14. Governing law and jurisdiction',
        body: [
          'These Terms are governed by the laws of Switzerland. Any dispute will be subject to the exclusive jurisdiction of the courts of the Canton of Zurich, Switzerland, except where mandatory consumer-protection law provides otherwise.',
        ],
      },
      {
        heading: '15. Changes to these Terms',
        body: [
          'We may update these Terms to reflect changes to the Service or to legal/Meta platform requirements. We will update the "Last updated" date above when we do, and material changes will be communicated to active Clients.',
        ],
      },
      {
        heading: '16. Miscellaneous',
        body: [
          'If any provision is found unenforceable, the remaining provisions remain in full effect. These Terms constitute the entire agreement between you and us, except for any separate order form or written agreement signed by both parties, which will prevail over conflicting terms here.',
        ],
      },
      {
        heading: '17. Contact',
        body: [`${OWNER.en.name} — ${OWNER.en.address}`, `Email: ${OWNER.en.email}`],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: July 22, 2026',
    intro:
      'This policy explains what personal data we process, why, with whom we share it, and what rights are available to you — whether you are a visitor to this website, a Client of Smart Setter AI, or a Lead (someone who messages a Client on Instagram).',
    sections: [
      {
        heading: '1. Who we are',
        body: [
          `Owner: ${OWNER.en.name}`,
          `Legal form: ${OWNER.en.legal}`,
          `Address: ${OWNER.en.address}`,
          `Contact: ${OWNER.en.email}`,
        ],
      },
      {
        heading: '2. Our role: controller vs. processor',
        body: [
          'For data about this website and the Client\'s own account within the Service, we act as data controller.',
          'For data about Leads (the people who write to the Client on Instagram), the Client is the data controller and we act as its processor — we process this data only on the Client\'s instructions, to provide the Service.',
        ],
      },
      {
        heading: '3. Contact form on this website',
        body: [
          'If you fill in our contact form, we collect your name, email, message, channel of interest, and business type, along with your IP address and referring page. This data is emailed to our team to respond to you; it is not stored in any database.',
          'The form is protected by Google reCAPTCHA (v3) to prevent spam — Google receives a technical signal from your interaction with the page to compute an anti-fraud score; see Google\'s privacy policy (policies.google.com/privacy).',
        ],
      },
      {
        heading: '4. Service data (Clients and Leads)',
        body: [
          'Client account & business data: email, name, password (hashed), business configuration (offer, tone, hours, escalation rules), and documents you upload for the AI knowledge base.',
          'Instagram data (via Meta\'s API): your account identifiers and OAuth token; and for each Lead who messages you, their Instagram user ID and username, the content of messages/comments/story replies, and attachments.',
          'Scheduling data (via Calendly, optional): invitee name and email, appointment time.',
          'AI-generated data: lead score and interest assessment, conversation summary, quality/objection reports.',
          'Technical data: error logs (technical IDs, status codes) and API usage counters for billing — no message content.',
          'Cookies: a single, strictly necessary session cookie to keep the Client\'s team logged in to the Service dashboard. We do not use advertising or analytics cookies in the dashboard.',
        ],
      },
      {
        heading: '5. Why we process this data',
        body: [
          'To respond to contact inquiries; to provide the Service (sending/receiving Instagram messages, generating AI replies, detecting keywords, scheduling follow-ups and appointments, displaying history and scoring); to secure and operate the Service (authentication, fraud prevention, billing); and, with anonymized data, to improve default AI prompts.',
          'We do not use Lead data for advertising, and we do not sell personal data to third parties.',
        ],
      },
      {
        heading: '6. Legal bases (GDPR / Swiss FADP)',
        body: [
          '- Consent: when submitting the contact form.',
          '- Performance of a contract: processing the Client\'s account data to provide the Service.',
          '- Legitimate interests: securing the Service, preventing fraud/abuse, improving reliability and AI prompt quality (in aggregated/anonymized form).',
          'For Lead data, the applicable legal basis is determined and ensured by the Client, as the controller of that data.',
        ],
      },
      {
        heading: '7. Who we share data with',
        body: [
          '- Meta / Instagram: OAuth tokens and message content, to send/receive Instagram messages, comments, and story replies.',
          '- Anthropic (Claude API), USA: conversation history, Lead profile data, and business configuration, to generate the AI agent\'s replies.',
          '- OpenAI, USA: text of uploaded documents and search queries derived from conversations, to generate embeddings for knowledge-base search (RAG).',
          '- Calendly, USA: invitee name and email, appointment times, to schedule meetings when the Client enables this feature.',
          '- Google reCAPTCHA, USA: a technical interaction signal from the contact form, to prevent spam.',
          '- Email delivery provider: contact form content and Service alerts.',
          '- Sentry (optional): technical error context, no message content.',
          '- Hosting/CDN providers for this website and the Service, as infrastructure.',
          'We do not share personal data with any other third party except where required by law, or with the Client\'s explicit instruction.',
        ],
      },
      {
        heading: '8. International data transfers',
        body: [
          'The Service\'s servers are located in France (European Union). This website is served through an international hosting/CDN provider. Some subprocessors (Anthropic, OpenAI, Calendly, Google) are based in the United States. Where personal data is transferred outside Switzerland/the EEA, we rely on safeguards recognized under the Swiss FADP and, where applicable, the EU GDPR — such as Standard Contractual Clauses or an equivalent mechanism.',
        ],
      },
      {
        heading: '9. Data retention',
        body: [
          'Contact form messages are retained only in the email sent, with no additional database storage. We currently apply no automatic expiration to Service Lead or conversation data — it is retained while the Client\'s account and Instagram integration remain active, unless deleted as described in Section 10.',
        ],
      },
      {
        heading: '10. Deletion of data & your rights',
        body: [
          'If you are a Lead and want your data deleted: revoke Smart Setter AI\'s access from your Instagram/Facebook settings (Meta will notify us, and we will delete your data across any business on our platform you\'ve interacted with); or contact the business you messaged directly; or email us with the Instagram handle in question.',
          'If you are a Client, you can delete an individual Lead\'s data from your dashboard, and request deletion of your entire account by contacting us.',
          `Depending on your location, you may have rights to access, correct, restrict, or port your data, object to certain processing, and lodge a complaint with a supervisory authority — in Switzerland, the FDPIC; in the EU, your local authority. Contact ${OWNER.en.email}.`,
        ],
      },
      {
        heading: '11. Automated processing & AI-generated content',
        body: [
          'Replies to Leads may be generated automatically by an AI agent configured by the Client. Where applicable law (such as the EU AI Act) requires that individuals be informed they are interacting with an AI system, the Client is responsible for ensuring this disclosure is made to their own audience.',
        ],
      },
      {
        heading: '12. Security',
        body: [
          'Instagram and Calendly access tokens are encrypted at rest. Communications with Meta\'s webhooks are verified using HMAC-SHA256 signatures. Dashboard access requires authentication. No system is 100% secure, but we apply reasonable, risk-proportionate technical and organizational measures.',
        ],
      },
      {
        heading: '13. Children',
        body: [
          'Our Service is intended for businesses and their authorized representatives, who must be at least 18. Leads are end users of Instagram, so Instagram\'s own minimum age (13, or higher where local law requires) applies.',
        ],
      },
      {
        heading: '14. Changes to this policy',
        body: [
          'We may update this policy to reflect changes to the Service or to legal/Meta platform requirements. We will update the "Last updated" date above when we do.',
        ],
      },
      {
        heading: '15. Contact',
        body: [`${OWNER.en.name} — ${OWNER.en.address}`, `Email: ${OWNER.en.email}`],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    lastUpdated: 'Last updated: July 22, 2026',
    intro:
      'This website uses the minimum possible number of cookies and similar technologies. We do not use advertising or in-house analytics cookies.',
    sections: [
      {
        heading: '1. What we actually use',
        body: [
          '- Cookie preference: we store your choice from the cookie banner in your browser\'s local storage (not a cookie), only so we don\'t show the banner again.',
          '- Google reCAPTCHA (v3): on the contact form, to prevent spam. Google may set its own cookies and receive technical data from your browser for this purpose.',
          '- Service dashboard session cookie: if you are a Client and log in to the Smart Setter AI dashboard, a single, strictly necessary session cookie keeps you logged in.',
        ],
      },
      {
        heading: '2. What we do NOT use',
        body: [
          'We do not use Google Analytics or any other third-party analytics or advertising tool on this website.',
        ],
      },
      {
        heading: '3. Legal basis',
        body: [
          'The session cookie and cookie preference are strictly necessary for the site to function and do not require consent. reCAPTCHA activates only when using the contact form, as a security measure necessary to provide that feature.',
        ],
      },
      {
        heading: '4. Management',
        body: [
          'You can configure your browser to block third-party cookies such as Google reCAPTCHA\'s, though this may prevent submitting the contact form.',
        ],
      },
      {
        heading: '5. Updates',
        body: ['This policy may be updated if the technologies used on the website change.'],
      },
    ],
  },
};

// ===================== FRANÇAIS =====================
const fr: LegalContent = {
  terms: {
    title: "Conditions d'utilisation",
    lastUpdated: 'Dernière mise à jour : 22 juillet 2026',
    intro:
      "Les présentes Conditions régissent l'accès à Smart Setter AI (le « Service ») et son utilisation, exploité par Pedro Irurzun, entrepreneur individuel basé à Zurich, Suisse. En créant un compte ou en utilisant le Service, l'entreprise ou la personne qui le fait (le « Client », « vous ») accepte les présentes Conditions.",
    sections: [
      {
        heading: '1. Éligibilité',
        body: [
          "Vous devez être âgé d'au moins 18 ans et autorisé à agir pour le compte de l'entreprise dont vous connectez le compte professionnel Instagram et la page Facebook au Service. Si vous utilisez le Service pour une organisation, vous déclarez avoir le pouvoir de l'engager par ces Conditions.",
        ],
      },
      {
        heading: '2. Description du Service',
        body: [
          'Le Service permet au Client de :',
          '- Connecter un compte professionnel Instagram lié à une page Facebook.',
          "- Configurer des agents d'IA qui répondent automatiquement aux commentaires, messages directs et réponses aux stories.",
          '- Configurer des mots-clés déclenchant des réponses automatiques aux commentaires.',
          '- Planifier des relances et, en option, connecter Calendly pour réserver des rendez-vous.',
          "- Consulter dans un tableau de bord l'historique des conversations, le score des prospects et des statistiques.",
          "- Téléverser des documents pour alimenter une base de connaissances d'IA.",
        ],
      },
      {
        heading: '3. Compte et accès',
        body: [
          'Vous êtes responsable de la confidentialité de vos identifiants et de toute activité sous votre compte.',
          'Vous devez être titulaire, ou dûment autorisé à administrer, le compte Instagram et la page Facebook connectés.',
          "Nous pouvons suspendre ou restreindre l'accès en cas d'utilisation frauduleuse, de violation des présentes Conditions, ou de violation des Conditions de la Plateforme Meta ou des Règles de la communauté Instagram.",
        ],
      },
      {
        heading: '4. Responsabilités du Client',
        body: [
          'En tant que Client, vous acceptez que :',
          '- Vous êtes le responsable du traitement des données des Prospects interagissant avec votre compte Instagram (voir notre Politique de confidentialité), et seul responsable de disposer d\'une base légale valable.',
          "- Vous vous conformerez au droit de la protection des données applicable (RGPD, LPD suisse, CCPA le cas échéant) et à toute obligation d'informer qu'une personne interagit avec une IA (article 50 du règlement européen sur l'IA) lorsque applicable.",
          '- Vous vous conformerez aux Conditions de la Plateforme Meta et aux Règles de la communauté Instagram.',
          "- Vous n'utiliserez pas le Service pour du spam, du contenu trompeur, illégal, ou portant atteinte aux droits de tiers.",
          "- Vous êtes responsable de la validation de la configuration utilisée pour générer les réponses automatiques.",
        ],
      },
      {
        heading: "5. Contenu généré par l'IA",
        body: [
          "Les réponses des agents d'IA sont générées à partir de votre configuration. Vous pouvez désactiver l'agent ou reprendre le contrôle manuel à tout moment. Nous ne garantissons pas l'exactitude ou l'absence d'erreurs des réponses générées.",
        ],
      },
      {
        heading: '6. Tarifs',
        body: [
          'Les tarifs sont ceux convenus séparément avec vous. Sauf disposition légale contraire, ils ne sont pas remboursables et peuvent être modifiés avec un préavis raisonnable.',
        ],
      },
      {
        heading: '7. Propriété intellectuelle',
        body: [
          'Nous conservons tous les droits sur le Service. Vous conservez tous les droits sur votre contenu et vos données, et nous accordez une licence limitée pour les traiter afin de fournir le Service.',
        ],
      },
      {
        heading: '8. Confidentialité',
        body: [
          'Chaque partie conservera confidentielles les informations non publiques de l\'autre, sauf obligation légale de divulgation.',
        ],
      },
      {
        heading: '9. Protection des données',
        body: [
          'Le traitement des données est décrit dans notre Politique de confidentialité, qui constitue avec ces Conditions notre accord de traitement des données.',
        ],
      },
      {
        heading: '10. Disponibilité du Service',
        body: [
          "Nous ne garantissons pas une disponibilité de 100 %. Le Service dépend d'API tierces (Meta, Anthropic, OpenAI, Calendly) hors de notre contrôle.",
        ],
      },
      {
        heading: '11. Suspension et résiliation',
        body: [
          "Vous pouvez cesser d'utiliser le Service à tout moment. Nous pouvons suspendre ou résilier votre accès en cas de violation de ces Conditions ou des politiques de Meta.",
        ],
      },
      {
        heading: '12. Exclusions de garantie et limitation de responsabilité',
        body: [
          'Le Service est fourni « tel quel ». Notre responsabilité totale n\'excédera pas les tarifs versés au cours des 12 mois précédents, à l\'exclusion des dommages indirects, accessoires ou consécutifs et de la perte de bénéfices ou de données.',
        ],
      },
      {
        heading: '13. Indemnisation',
        body: [
          "Vous nous indemniserez des réclamations découlant de votre utilisation du Service en violation de ces Conditions, du droit applicable ou des politiques de Meta.",
        ],
      },
      {
        heading: '14. Droit applicable et juridiction',
        body: [
          'Ces Conditions sont régies par le droit suisse. Tout litige relèvera des tribunaux du canton de Zurich, Suisse, sauf disposition impérative contraire de protection des consommateurs.',
        ],
      },
      {
        heading: '15. Modifications',
        body: ['Nous pouvons mettre à jour ces Conditions ; les changements significatifs seront communiqués aux Clients actifs.'],
      },
      {
        heading: '16. Dispositions diverses',
        body: [
          "Si une disposition est inapplicable, les autres restent en vigueur. Ces Conditions constituent l'intégralité de l'accord, sauf accord écrit signé par les deux parties.",
        ],
      },
      {
        heading: '17. Contact',
        body: [`${OWNER.fr.name} — ${OWNER.fr.address}`, `Email : ${OWNER.fr.email}`],
      },
    ],
  },
  privacy: {
    title: 'Politique de confidentialité',
    lastUpdated: 'Dernière mise à jour : 22 juillet 2026',
    intro:
      'Cette politique explique quelles données personnelles nous traitons, pourquoi, avec qui nous les partageons, et vos droits — que vous soyez visiteur de ce site, Client de Smart Setter AI, ou Prospect (une personne qui écrit à un Client sur Instagram).',
    sections: [
      {
        heading: '1. Qui sommes-nous',
        body: [
          `Titulaire : ${OWNER.fr.name}`,
          `Forme juridique : ${OWNER.fr.legal}`,
          `Adresse : ${OWNER.fr.address}`,
          `Contact : ${OWNER.fr.email}`,
        ],
      },
      {
        heading: '2. Notre rôle : responsable vs. sous-traitant',
        body: [
          'Pour les données de ce site et du compte propre du Client, nous agissons en tant que responsable du traitement.',
          'Pour les données des Prospects, le Client est le responsable du traitement et nous agissons en tant que sous-traitant.',
        ],
      },
      {
        heading: '3. Formulaire de contact de ce site',
        body: [
          'Si vous remplissez notre formulaire de contact, nous collectons votre nom, e-mail, message, canal d\'intérêt et type d\'entreprise, ainsi que votre adresse IP et la page d\'origine. Ces données sont envoyées par e-mail à notre équipe ; elles ne sont stockées dans aucune base de données.',
          "Le formulaire est protégé par Google reCAPTCHA (v3) contre le spam — Google reçoit un signal technique de votre interaction avec la page pour calculer un score anti-fraude ; voir la politique de confidentialité de Google (policies.google.com/privacy).",
        ],
      },
      {
        heading: '4. Données du Service (Clients et Prospects)',
        body: [
          "Compte et entreprise du Client : e-mail, nom, mot de passe (haché), configuration de l'entreprise, documents téléversés pour la base de connaissances.",
          "Données Instagram (via l'API Meta) : identifiants et jeton OAuth de votre compte ; pour chaque Prospect, son identifiant et nom d'utilisateur Instagram, le contenu des messages/commentaires/réponses aux stories, et les pièces jointes.",
          "Données de rendez-vous (via Calendly, facultatif) : nom et e-mail de l'invité, horaire du rendez-vous.",
          "Données générées par l'IA : score du prospect, résumé de conversation, rapports de qualité/objections.",
          "Données techniques : journaux d'erreurs et compteurs d'utilisation de l'API pour la facturation — sans contenu de message.",
          "Cookies : un unique cookie de session strictement nécessaire pour le tableau de bord du Service.",
        ],
      },
      {
        heading: '5. Pourquoi nous traitons ces données',
        body: [
          "Pour répondre aux demandes de contact ; fournir le Service ; sécuriser et exploiter le Service ; et, avec des données anonymisées, améliorer les invites d'IA par défaut.",
          'Nous ne vendons pas de données personnelles à des tiers et ne les utilisons pas à des fins publicitaires.',
        ],
      },
      {
        heading: '6. Bases légales (RGPD / LPD suisse)',
        body: [
          '- Consentement : lors de la soumission du formulaire de contact.',
          "- Exécution d'un contrat : traitement des données du compte du Client.",
          "- Intérêts légitimes : sécurité du Service, prévention de la fraude, amélioration des invites d'IA.",
          'Pour les données des Prospects, la base légale est déterminée par le Client, responsable de ce traitement.',
        ],
      },
      {
        heading: '7. Avec qui nous partageons les données',
        body: [
          '- Meta / Instagram : jetons OAuth et contenu des messages.',
          "- Anthropic (API Claude), États-Unis : historique de conversation et données de profil, pour générer les réponses de l'agent.",
          '- OpenAI, États-Unis : texte des documents et requêtes de recherche, pour les embeddings RAG.',
          "- Calendly, États-Unis : nom et e-mail de l'invité, pour la prise de rendez-vous.",
          '- Google reCAPTCHA, États-Unis : signal technique du formulaire de contact.',
          "- Fournisseur d'envoi d'e-mails : contenu du formulaire et alertes.",
          '- Sentry (facultatif) : contexte technique de l\'erreur uniquement.',
          '- Fournisseurs d\'hébergement/CDN, en tant qu\'infrastructure.',
          'Nous ne partageons pas ces données avec d\'autres tiers, sauf obligation légale ou instruction du Client.',
        ],
      },
      {
        heading: '8. Transferts internationaux de données',
        body: [
          "Les serveurs du Service sont situés en France (UE). Ce site est servi via un hébergeur/CDN international. Certains sous-traitants (Anthropic, OpenAI, Calendly, Google) sont basés aux États-Unis ; nous nous appuyons alors sur les garanties reconnues par la LPD suisse et le RGPD.",
        ],
      },
      {
        heading: '9. Conservation des données',
        body: [
          "Les messages de contact sont conservés uniquement dans l'e-mail envoyé. Aucune expiration automatique n'est actuellement appliquée aux données des Prospects/conversations du Service.",
        ],
      },
      {
        heading: '10. Suppression des données et vos droits',
        body: [
          "Si vous êtes un Prospect : révoquez l'accès depuis vos paramètres Instagram/Facebook, ou contactez l'entreprise concernée, ou écrivez-nous.",
          'Si vous êtes un Client : supprimez un Prospect depuis votre tableau de bord, ou demandez la suppression de votre compte.',
          `Selon votre lieu de résidence, vous disposez de droits d'accès, de rectification, de suppression, etc. — contactez ${OWNER.fr.email}.`,
        ],
      },
      {
        heading: "11. Traitement automatisé et contenu généré par l'IA",
        body: [
          "Le Client est responsable d'informer son public lorsque la loi applicable (règlement européen sur l'IA) l'exige.",
        ],
      },
      {
        heading: '12. Sécurité',
        body: [
          'Les jetons Instagram et Calendly sont chiffrés au repos ; les webhooks Meta sont vérifiés par signature HMAC-SHA256.',
        ],
      },
      {
        heading: '13. Mineurs',
        body: ["Notre Service s'adresse à des professionnels de 18 ans ou plus ; l'âge minimum d'Instagram s'applique aux Prospects."],
      },
      {
        heading: '14. Modifications',
        body: ['Nous pouvons mettre à jour cette politique ; nous actualiserons la date ci-dessus.'],
      },
      {
        heading: '15. Contact',
        body: [`${OWNER.fr.name} — ${OWNER.fr.address}`, `Email : ${OWNER.fr.email}`],
      },
    ],
  },
  cookies: {
    title: 'Politique de cookies',
    lastUpdated: 'Dernière mise à jour : 22 juillet 2026',
    intro:
      "Ce site utilise le minimum de cookies possible. Nous n'utilisons pas de cookies publicitaires ni d'analytique interne.",
    sections: [
      {
        heading: '1. Ce que nous utilisons réellement',
        body: [
          "- Préférence de cookies : stockée dans le stockage local du navigateur (pas un cookie), uniquement pour ne pas réafficher la bannière.",
          '- Google reCAPTCHA (v3) : sur le formulaire de contact, contre le spam.',
          '- Cookie de session du tableau de bord du Service : pour les Clients connectés.',
        ],
      },
      {
        heading: "2. Ce que nous n'utilisons PAS",
        body: ["Nous n'utilisons pas Google Analytics ni aucun autre outil d'analyse ou de publicité tiers sur ce site."],
      },
      {
        heading: '3. Base légale',
        body: [
          'Le cookie de session et la préférence de cookies sont strictement nécessaires et ne requièrent pas de consentement. reCAPTCHA ne s\'active que lors de l\'utilisation du formulaire de contact.',
        ],
      },
      {
        heading: '4. Gestion',
        body: ['Vous pouvez configurer votre navigateur pour bloquer les cookies tiers comme ceux de Google reCAPTCHA.'],
      },
      {
        heading: '5. Mises à jour',
        body: ['Cette politique peut être mise à jour si les technologies utilisées changent.'],
      },
    ],
  },
};

// ===================== DEUTSCH =====================
const de: LegalContent = {
  terms: {
    title: 'Nutzungsbedingungen',
    lastUpdated: 'Zuletzt aktualisiert: 22. Juli 2026',
    intro:
      'Diese Bedingungen regeln den Zugang zu und die Nutzung von Smart Setter AI (der „Dienst"), betrieben von Pedro Irurzun, Einzelunternehmer mit Sitz in Zürich, Schweiz. Durch die Erstellung eines Kontos oder die Nutzung des Dienstes akzeptiert das Unternehmen bzw. die Person (der „Kunde", „Sie") diese Bedingungen.',
    sections: [
      {
        heading: '1. Anspruchsberechtigung',
        body: [
          'Sie müssen mindestens 18 Jahre alt und berechtigt sein, im Namen des Unternehmens zu handeln, dessen Instagram-Konto und Facebook-Seite Sie verbinden.',
        ],
      },
      {
        heading: '2. Beschreibung des Dienstes',
        body: [
          'Der Dienst ermöglicht dem Kunden:',
          '- Ein professionelles Instagram-Konto mit einer Facebook-Seite zu verbinden.',
          '- KI-Agenten zu konfigurieren, die automatisch auf Kommentare, Direktnachrichten und Story-Antworten reagieren.',
          '- Schlüsselwörter für automatische Kommentarantworten zu konfigurieren.',
          '- Follow-ups zu planen und optional Calendly für Terminbuchungen zu verbinden.',
          '- Konversationsverlauf, Lead-Bewertung und Statistiken im Dashboard einzusehen.',
          '- Dokumente für die KI-Wissensdatenbank hochzuladen.',
        ],
      },
      {
        heading: '3. Konto und Zugang',
        body: [
          'Sie sind für die Vertraulichkeit Ihrer Zugangsdaten verantwortlich.',
          'Sie müssen Inhaber des verbundenen Instagram-Kontos und der Facebook-Seite sein oder zu deren Verwaltung berechtigt sein.',
          'Wir können den Zugang bei Missbrauch oder Verstoss gegen diese Bedingungen oder die Meta-Richtlinien sperren.',
        ],
      },
      {
        heading: '4. Pflichten des Kunden',
        body: [
          'Als Kunde stimmen Sie zu, dass:',
          '- Sie der Verantwortliche für die Daten der Leads sind (siehe unsere Datenschutzerklärung) und für eine gültige Rechtsgrundlage verantwortlich sind.',
          '- Sie anwendbares Datenschutzrecht (DSGVO, Schweizer DSG, CCPA) und KI-Transparenzpflichten (Art. 50 KI-Verordnung der EU) einhalten, soweit anwendbar.',
          '- Sie die Meta-Plattformbedingungen und Instagram-Richtlinien einhalten.',
          '- Sie den Dienst nicht für Spam oder rechtswidrige Inhalte nutzen.',
          '- Sie die Konfiguration der automatischen Antworten überprüfen.',
        ],
      },
      {
        heading: '5. KI-generierte Inhalte',
        body: [
          'Antworten der KI-Agenten basieren auf Ihrer Konfiguration. Sie können den Agenten jederzeit deaktivieren. Wir garantieren keine fehlerfreien Antworten.',
        ],
      },
      {
        heading: '6. Gebühren',
        body: ['Die Gebühren richten sich nach dem separat vereinbarten Preisplan und sind grundsätzlich nicht rückerstattbar.'],
      },
      {
        heading: '7. Geistiges Eigentum',
        body: ['Wir behalten alle Rechte am Dienst; Sie behalten alle Rechte an Ihren Inhalten und Daten.'],
      },
      {
        heading: '8. Vertraulichkeit',
        body: ['Beide Parteien behandeln nicht öffentliche Informationen vertraulich.'],
      },
      {
        heading: '9. Datenschutz',
        body: ['Die Datenverarbeitung ist in unserer Datenschutzerklärung beschrieben, die zusammen mit diesen Bedingungen unsere Datenverarbeitungsvereinbarung bildet.'],
      },
      {
        heading: '10. Verfügbarkeit des Dienstes',
        body: ['Wir garantieren keine 100%ige Verfügbarkeit; der Dienst hängt von Drittanbieter-APIs ab.'],
      },
      {
        heading: '11. Sperrung und Kündigung',
        body: ['Sie können den Dienst jederzeit beenden; wir können bei Verstössen sperren oder kündigen.'],
      },
      {
        heading: '12. Gewährleistungsausschluss und Haftungsbeschränkung',
        body: [
          'Der Dienst wird „wie besehen" bereitgestellt. Unsere Gesamthaftung übersteigt nicht die in den letzten 12 Monaten gezahlten Gebühren; wir haften nicht für Folgeschäden oder entgangenen Gewinn.',
        ],
      },
      {
        heading: '13. Freistellung',
        body: ['Sie stellen uns von Ansprüchen aus einer Nutzung unter Verstoss gegen diese Bedingungen frei.'],
      },
      {
        heading: '14. Anwendbares Recht und Gerichtsstand',
        body: ['Es gilt schweizerisches Recht; Gerichtsstand ist der Kanton Zürich, vorbehaltlich zwingenden Verbraucherschutzrechts.'],
      },
      {
        heading: '15. Änderungen',
        body: ['Wir können diese Bedingungen aktualisieren und informieren aktive Kunden über wesentliche Änderungen.'],
      },
      {
        heading: '16. Sonstiges',
        body: ['Bei Unwirksamkeit einer Bestimmung bleiben die übrigen wirksam.'],
      },
      {
        heading: '17. Kontakt',
        body: [`${OWNER.de.name} — ${OWNER.de.address}`, `E-Mail: ${OWNER.de.email}`],
      },
    ],
  },
  privacy: {
    title: 'Datenschutzerklärung',
    lastUpdated: 'Zuletzt aktualisiert: 22. Juli 2026',
    intro:
      'Diese Erklärung beschreibt, welche personenbezogenen Daten wir verarbeiten, warum, mit wem wir sie teilen und welche Rechte Ihnen zustehen — ob Sie Besucher dieser Website, Kunde von Smart Setter AI, oder ein Lead sind.',
    sections: [
      {
        heading: '1. Wer wir sind',
        body: [
          `Inhaber: ${OWNER.de.name}`,
          `Rechtsform: ${OWNER.de.legal}`,
          `Adresse: ${OWNER.de.address}`,
          `Kontakt: ${OWNER.de.email}`,
        ],
      },
      {
        heading: '2. Unsere Rolle: Verantwortlicher vs. Auftragsverarbeiter',
        body: [
          'Für Daten dieser Website und des eigenen Kontos des Kunden handeln wir als Verantwortlicher.',
          'Für Lead-Daten ist der Kunde der Verantwortliche und wir handeln als Auftragsverarbeiter.',
        ],
      },
      {
        heading: '3. Kontaktformular dieser Website',
        body: [
          'Beim Ausfüllen unseres Kontaktformulars erheben wir Name, E-Mail, Nachricht, Interessenskanal und Unternehmensart sowie Ihre IP-Adresse und die verweisende Seite. Diese Daten werden per E-Mail an unser Team gesendet und nicht in einer Datenbank gespeichert.',
          'Das Formular ist mit Google reCAPTCHA (v3) gegen Spam geschützt — Google erhält ein technisches Signal Ihrer Interaktion, um eine Anti-Betrugs-Bewertung zu berechnen; siehe Googles Datenschutzerklärung (policies.google.com/privacy).',
        ],
      },
      {
        heading: '4. Dienstdaten (Kunden und Leads)',
        body: [
          'Konto- und Unternehmensdaten: E-Mail, Name, Passwort (gehasht), Unternehmenskonfiguration, hochgeladene Dokumente.',
          'Instagram-Daten (über die Meta-API): Kontokennungen und OAuth-Token; für jeden Lead dessen Nutzer-ID/-name, Nachrichten-/Kommentarinhalt, Anhänge.',
          'Terminplanungsdaten (Calendly, optional): Name und E-Mail des Eingeladenen, Termin.',
          'KI-generierte Daten: Lead-Bewertung, Konversationszusammenfassung, Qualitätsberichte.',
          'Technische Daten: Fehlerprotokolle und API-Nutzungszähler — ohne Nachrichteninhalt.',
          'Cookies: ein einziges, unbedingt erforderliches Sitzungscookie für das Dashboard.',
        ],
      },
      {
        heading: '5. Warum wir diese Daten verarbeiten',
        body: [
          'Zur Beantwortung von Kontaktanfragen, zur Bereitstellung des Dienstes, zur Sicherung des Dienstes und, mit anonymisierten Daten, zur Verbesserung der Standard-KI-Prompts.',
          'Wir verwenden Lead-Daten nicht für Werbung und verkaufen keine Daten an Dritte.',
        ],
      },
      {
        heading: '6. Rechtsgrundlagen (DSGVO / Schweizer DSG)',
        body: [
          '- Einwilligung: beim Absenden des Kontaktformulars.',
          '- Vertragserfüllung: Verarbeitung der Kontodaten des Kunden.',
          '- Berechtigte Interessen: Sicherheit, Betrugsprävention, Verbesserung der KI-Prompt-Qualität (aggregiert/anonymisiert).',
          'Für Lead-Daten bestimmt der Kunde als Verantwortlicher die Rechtsgrundlage.',
        ],
      },
      {
        heading: '7. Mit wem wir Daten teilen',
        body: [
          '- Meta / Instagram: OAuth-Tokens und Nachrichteninhalt.',
          '- Anthropic (Claude API), USA: Konversationsverlauf und Profildaten, zur Antwortgenerierung.',
          '- OpenAI, USA: Dokumenttext und Suchanfragen, für RAG-Embeddings.',
          '- Calendly, USA: Name und E-Mail des Eingeladenen, für Terminbuchungen.',
          '- Google reCAPTCHA, USA: technisches Signal des Kontaktformulars.',
          '- E-Mail-Versanddienst: Formularinhalt und Benachrichtigungen.',
          '- Sentry (optional): nur technischer Fehlerkontext.',
          '- Hosting-/CDN-Anbieter als Infrastruktur.',
          'Wir teilen diese Daten mit keinen weiteren Dritten, ausser gesetzlich vorgeschrieben oder auf Anweisung des Kunden.',
        ],
      },
      {
        heading: '8. Internationale Datenübermittlungen',
        body: [
          'Die Server des Dienstes befinden sich in Frankreich (EU). Diese Website wird über einen internationalen Hosting-/CDN-Anbieter bereitgestellt. Einige Auftragsverarbeiter (Anthropic, OpenAI, Calendly, Google) haben ihren Sitz in den USA; wir stützen uns dabei auf die nach Schweizer DSG und DSGVO anerkannten Garantien.',
        ],
      },
      {
        heading: '9. Aufbewahrung der Daten',
        body: [
          'Kontaktnachrichten werden nur in der gesendeten E-Mail aufbewahrt. Für Lead-/Konversationsdaten des Dienstes wenden wir derzeit keine automatische Ablauffrist an.',
        ],
      },
      {
        heading: '10. Löschung von Daten und Ihre Rechte',
        body: [
          'Als Lead: Zugriff in den Instagram-/Facebook-Einstellungen widerrufen, das betreffende Unternehmen kontaktieren, oder uns schreiben.',
          'Als Kunde: einzelne Lead-Daten im Dashboard löschen oder die Löschung des gesamten Kontos beantragen.',
          `Je nach Wohnsitz haben Sie Rechte auf Auskunft, Berichtigung, Löschung usw. — kontaktieren Sie ${OWNER.de.email}.`,
        ],
      },
      {
        heading: '11. Automatisierte Verarbeitung und KI-Inhalte',
        body: ['Der Kunde ist dafür verantwortlich, sein Publikum zu informieren, wenn geltendes Recht (KI-Verordnung der EU) dies verlangt.'],
      },
      {
        heading: '12. Sicherheit',
        body: ['Zugriffstoken werden verschlüsselt gespeichert; Meta-Webhooks werden per HMAC-SHA256 verifiziert.'],
      },
      {
        heading: '13. Minderjährige',
        body: ['Unser Dienst richtet sich an Unternehmen ab 18 Jahren; für Leads gilt das Mindestalter von Instagram.'],
      },
      {
        heading: '14. Änderungen',
        body: ['Wir aktualisieren diese Erklärung bei Änderungen und passen das Datum oben an.'],
      },
      {
        heading: '15. Kontakt',
        body: [`${OWNER.de.name} — ${OWNER.de.address}`, `E-Mail: ${OWNER.de.email}`],
      },
    ],
  },
  cookies: {
    title: 'Cookie-Richtlinie',
    lastUpdated: 'Zuletzt aktualisiert: 22. Juli 2026',
    intro:
      'Diese Website verwendet so wenig Cookies wie möglich. Wir verwenden keine Werbe- oder eigenen Analyse-Cookies.',
    sections: [
      {
        heading: '1. Was wir tatsächlich verwenden',
        body: [
          '- Cookie-Präferenz: im lokalen Speicher des Browsers gespeichert (kein Cookie), nur damit der Banner nicht erneut erscheint.',
          '- Google reCAPTCHA (v3): im Kontaktformular gegen Spam.',
          '- Sitzungscookie des Dashboards: für angemeldete Kunden.',
        ],
      },
      {
        heading: '2. Was wir NICHT verwenden',
        body: ['Wir verwenden weder Google Analytics noch andere Analyse- oder Werbetools von Drittanbietern auf dieser Website.'],
      },
      {
        heading: '3. Rechtsgrundlage',
        body: ['Das Sitzungscookie und die Cookie-Präferenz sind unbedingt erforderlich und benötigen keine Einwilligung. reCAPTCHA wird nur beim Kontaktformular aktiv.'],
      },
      {
        heading: '4. Verwaltung',
        body: ['Sie können Ihren Browser so konfigurieren, dass Drittanbieter-Cookies wie die von Google reCAPTCHA blockiert werden.'],
      },
      {
        heading: '5. Aktualisierungen',
        body: ['Diese Richtlinie kann bei Änderungen der verwendeten Technologien aktualisiert werden.'],
      },
    ],
  },
};

export const legalContent: Record<Language, LegalContent> = { es, en, fr, de };

// Cookie banner translations
export interface CookieBannerStrings {
  title: string;
  description: string;
  accept: string;
  reject: string;
  learnMore: string;
}

export const cookieBannerStrings: Record<Language, CookieBannerStrings> = {
  es: {
    title: 'Cookies',
    description:
      'Usamos solo lo estrictamente necesario (sesión y reCAPTCHA contra spam). No usamos analítica ni publicidad.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    learnMore: 'Más información',
  },
  en: {
    title: 'Cookies',
    description:
      'We use only what is strictly necessary (session and anti-spam reCAPTCHA). We do not use analytics or advertising.',
    accept: 'Accept',
    reject: 'Reject',
    learnMore: 'Learn more',
  },
  fr: {
    title: 'Cookies',
    description:
      "Nous utilisons uniquement le strict nécessaire (session et reCAPTCHA anti-spam). Pas d'analytique ni de publicité.",
    accept: 'Accepter',
    reject: 'Refuser',
    learnMore: 'En savoir plus',
  },
  de: {
    title: 'Cookies',
    description:
      'Wir verwenden nur das unbedingt Notwendige (Sitzung und Anti-Spam-reCAPTCHA). Keine Analyse oder Werbung.',
    accept: 'Akzeptieren',
    reject: 'Ablehnen',
    learnMore: 'Mehr erfahren',
  },
};
