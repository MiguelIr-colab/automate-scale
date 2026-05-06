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

// Datos del titular - personalizar
const OWNER = {
  name: 'Pedro Miguel Irurzun — SmartSetter IA',
  legal: 'Autónomo',
  address: 'Suiza',
  email: 'pedro.miguel.iros@gmail.com',
};

// ===================== ESPAÑOL =====================
const es: LegalContent = {
  terms: {
    title: 'Aviso Legal',
    lastUpdated: 'Última actualización: 2026',
    sections: [
      {
        heading: 'Titular del sitio web',
        body: [
          `${OWNER.name}`,
          `Forma jurídica: ${OWNER.legal}`,
          `Dirección: ${OWNER.address}`,
          `Correo electrónico: ${OWNER.email}`,
        ],
      },
      {
        heading: 'Actividad',
        body: [
          'El presente sitio web tiene como finalidad la presentación y oferta de servicios de automatización, implementación de agentes de texto, asistentes de IA, gestión de conversaciones y soluciones tecnológicas para negocios online.',
        ],
      },
      {
        heading: 'Responsabilidad',
        body: [
          'El titular actúa como proveedor tecnológico. Los clientes que contratan los servicios son responsables del uso que hagan de las herramientas implementadas, así como de los datos, comunicaciones, sistemas y finalidades que utilicen.',
          'El titular no garantiza resultados comerciales específicos derivados del uso de los servicios.',
        ],
      },
      {
        heading: 'Propiedad intelectual',
        body: [
          'Todos los contenidos del sitio web son propiedad del titular o se utilizan con autorización, quedando prohibida su reproducción sin consentimiento.',
        ],
      },
      {
        heading: 'Legislación aplicable',
        body: [
          'Este sitio se rige por la legislación suiza, sin perjuicio de la aplicación de normativa imperativa de otros territorios cuando resulte aplicable.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 2026',
    sections: [
      {
        heading: '1. Responsable del tratamiento',
        body: [
          `Titular: ${OWNER.name}`,
          `Dirección: ${OWNER.address}`,
          `Email: ${OWNER.email}`,
        ],
      },
      {
        heading: '2. Datos personales recopilados',
        body: [
          'A través de este sitio web se recopilan:',
          '- Nombre y apellidos',
          '- Dirección de correo electrónico',
          '- Información facilitada voluntariamente por el usuario',
          'Adicionalmente, en el marco de los servicios prestados a clientes, el titular puede tratar datos personales proporcionados por terceros (clientes del titular), incluyendo:',
          '- Datos de contacto',
          '- Contenido de conversaciones',
          '- Información comercial',
          'También pueden tratarse metadatos técnicos como identificadores de usuario, dirección IP, información del dispositivo, historial de uso, estado de conversaciones, etiquetas comerciales y datos procedentes de CRM o herramientas conectadas por el cliente.',
        ],
      },
      {
        heading: '3. Finalidad del tratamiento',
        body: [
          'Los datos se tratan para:',
          '- Responder a consultas',
          '- Prestar servicios contratados',
          '- Gestión técnica y operativa de sistemas automatizados',
          '- Integración de herramientas de comunicación, automatización e inteligencia artificial',
          '- Mantenimiento, supervisión y mejora del funcionamiento técnico',
          '- Resolución de incidencias técnicas',
          '- Cumplimiento de obligaciones legales o de seguridad',
        ],
      },
      {
        heading: '4. Servicios de automatización y rol del titular',
        body: [
          'El titular ofrece servicios de automatización de comunicaciones mediante herramientas tecnológicas integradas en plataformas de terceros, incluyendo redes sociales y servicios de mensajería como Instagram y WhatsApp (operados por Meta).',
          'En este contexto:',
          '- El cliente del titular actúa como responsable del tratamiento de los datos personales de sus usuarios, clientes o contactos',
          '- El cliente determina la finalidad del tratamiento, los medios utilizados y la base legal aplicable',
          '- El titular actúa como encargado del tratamiento, limitándose a procesar los datos conforme a las instrucciones del cliente y exclusivamente para la prestación del servicio contratado',
          'El titular no decide:',
          '- la finalidad del tratamiento',
          '- el contenido de los datos',
          '- el uso final de la información',
          'El titular no comercializa los datos tratados por cuenta de clientes ni los utiliza para fines propios, salvo cuando sea estrictamente necesario para prestar, mantener o mejorar técnicamente el servicio.',
          'El cliente es responsable de informar a sus usuarios, obtener los consentimientos necesarios y cumplir la normativa aplicable en materia de protección de datos.',
        ],
      },
      {
        heading: '5. Conservación de datos',
        body: [
          '- Datos derivados de servicios de automatización: hasta 3 meses',
          '- Posteriormente, eliminación automática, salvo que exista una obligación legal, contractual o técnica que requiera una conservación superior',
          '- Los datos recibidos mediante formularios de contacto podrán conservarse hasta 5 años desde la última comunicación, salvo obligación legal de conservación',
        ],
      },
      {
        heading: '6. Herramientas y terceros',
        body: [
          'Este sitio web y los servicios ofrecidos pueden utilizar herramientas y proveedores externos, incluyendo:',
          '- Google Analytics (análisis de navegación)',
          '- Plataformas de comunicación gestionadas por Meta (Instagram, WhatsApp)',
          '- Sistemas CRM, herramientas de automatización, servicios de hosting, almacenamiento o mensajería necesarios para la prestación del servicio',
          'Estos terceros pueden tratar datos personales conforme a sus propias políticas de privacidad.',
        ],
      },
      {
        heading: 'Transferencias internacionales',
        body: [
          'Debido al uso de herramientas tecnológicas y proveedores externos, los datos personales pueden ser tratados o transferidos a países situados fuera del Espacio Económico Europeo o Suiza.',
          'En estos casos, se adoptan las garantías adecuadas conforme a la normativa aplicable, como cláusulas contractuales estándar u otros mecanismos legalmente reconocidos.',
        ],
      },
      {
        heading: '7. Base legal del tratamiento',
        body: [
          'El tratamiento de datos personales se basa en:',
          '- Consentimiento del usuario',
          '- Ejecución de un contrato o medidas precontractuales',
          '- Interés legítimo del titular en gestionar y mejorar los servicios',
          '- Cumplimiento de obligaciones legales, cuando corresponda',
          'En el caso de datos tratados por cuenta de clientes, la base legal corresponde al cliente como responsable del tratamiento.',
        ],
      },
      {
        heading: '8. Derechos del usuario',
        body: [
          'Las personas cuyos datos personales sean tratados pueden ejercer, cuando proceda conforme a la normativa aplicable, sus derechos de:',
          '- Acceso',
          '- Rectificación',
          '- Supresión',
          '- Limitación del tratamiento',
          '- Oposición',
          '- Portabilidad, cuando sea aplicable',
          '- Retirada del consentimiento',
          `Las solicitudes pueden dirigirse a: ${OWNER.email}`,
          'Cuando los datos sean tratados por cuenta de un cliente, la solicitud podrá tener que dirigirse al cliente responsable del tratamiento.',
        ],
      },
      {
        heading: '9. Seguridad de los datos',
        body: [
          'El titular aplica medidas técnicas y organizativas razonables para proteger los datos personales, si bien no puede garantizar la seguridad absoluta de sistemas conectados a internet.',
        ],
      },
      {
        heading: '10. Limitación de responsabilidad',
        body: [
          'El titular no es responsable del uso que los clientes hagan de los datos tratados mediante los servicios proporcionados, ni de la legalidad de sus bases de datos, listas de contactos, comunicaciones, finalidades o consentimientos obtenidos.',
          'Cada cliente es responsable de cumplir la normativa aplicable respecto a sus propios usuarios, clientes o contactos.',
        ],
      },
      {
        heading: '11. Legislación aplicable',
        body: [
          'El tratamiento de datos se realiza conforme a la legislación suiza de protección de datos aplicable.',
          'Cuando resulte aplicable por razón del territorio, los usuarios o los servicios ofrecidos, también podrá aplicarse el Reglamento General de Protección de Datos u otra normativa local imperativa.',
        ],
      },
      {
        heading: '12. Modificaciones',
        body: [
          'El titular podrá modificar esta política para adaptarla a cambios legales o técnicos.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    lastUpdated: 'Última actualización: 2026',
    intro:
      'Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y cookies analíticas para analizar el uso del sitio web y mejorar sus servicios.',
    sections: [
      {
        heading: '1. Tipos de cookies utilizadas',
        body: [
          '- Cookies técnicas (necesarias para el funcionamiento)',
          '- Cookies analíticas',
        ],
      },
      {
        heading: '2. Cookies de terceros',
        body: [
          'Este sitio utiliza:',
          '- Google Analytics',
          'Google Analytics puede recopilar datos técnicos como dirección IP, identificadores online, páginas visitadas, duración de la visita, navegador y otra información de uso, conforme a sus propias políticas de privacidad.',
        ],
      },
      {
        heading: '3. Base legal',
        body: ['El uso de cookies analíticas se basa en el consentimiento del usuario.'],
      },
      {
        heading: '4. Gestión de cookies',
        body: [
          'El usuario puede:',
          '- Aceptar o rechazar cookies mediante el banner',
          '- Configurar su navegador para bloquearlas',
        ],
      },
      {
        heading: '5. Transferencias internacionales',
        body: [
          'El uso de servicios como Google Analytics puede implicar transferencias de datos fuera del Espacio Económico Europeo o Suiza. En estos casos, se aplican las garantías adecuadas conforme a la normativa aplicable.',
          'Las cookies analíticas o no necesarias se utilizarán cuando el usuario las acepte, cuando dicho consentimiento resulte exigible conforme a la normativa aplicable.',
        ],
      },
      {
        heading: '6. Actualizaciones',
        body: ['Esta política puede modificarse en función de cambios técnicos o legales.'],
      },
    ],
  },
};

// ===================== ENGLISH =====================
const en: LegalContent = {
  terms: {
    title: 'Legal Notice',
    lastUpdated: 'Last updated: 2026',
    sections: [
      {
        heading: 'Website owner',
        body: [
          `${OWNER.name}`,
          `Legal form: Self-employed`,
          `Address: ${OWNER.address}`,
          `Email: ${OWNER.email}`,
        ],
      },
      {
        heading: 'Activity',
        body: [
          'This website presents and offers automation services, deployment of text agents, AI assistants, conversation management and technology solutions for online businesses.',
        ],
      },
      {
        heading: 'Liability',
        body: [
          'The owner acts as a technology provider. Clients who contract the services are responsible for the use they make of the implemented tools, as well as the data, communications, systems and purposes they use them for.',
          'The owner does not guarantee specific commercial results from the use of the services.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'All content on this website is owned by the owner or used with authorization. Reproduction without consent is prohibited.',
        ],
      },
      {
        heading: 'Applicable law',
        body: [
          'This site is governed by Swiss law, without prejudice to the application of mandatory regulations from other jurisdictions where applicable.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: 2026',
    sections: [
      {
        heading: '1. Data controller',
        body: [
          `Owner: ${OWNER.name}`,
          `Address: ${OWNER.address}`,
          `Email: ${OWNER.email}`,
        ],
      },
      {
        heading: '2. Personal data collected',
        body: [
          'Through this website we collect:',
          '- First and last name',
          '- Email address',
          '- Information voluntarily provided by the user',
          'Additionally, when providing services to clients, the owner may process personal data provided by third parties (the owner\'s clients), including:',
          '- Contact data',
          '- Conversation content',
          '- Commercial information',
          'Technical metadata may also be processed, such as user identifiers, IP address, device information, usage history, conversation status, commercial tags and data from CRM or tools connected by the client.',
        ],
      },
      {
        heading: '3. Purpose of processing',
        body: [
          'Data is processed to:',
          '- Respond to inquiries',
          '- Provide contracted services',
          '- Technical and operational management of automated systems',
          '- Integration of communication, automation and AI tools',
          '- Maintenance, monitoring and improvement of technical operation',
          '- Resolve technical incidents',
          '- Comply with legal or security obligations',
        ],
      },
      {
        heading: '4. Automation services and role of the owner',
        body: [
          'The owner offers communication automation services using technology tools integrated into third-party platforms, including social networks and messaging services such as Instagram and WhatsApp (operated by Meta).',
          'In this context:',
          '- The owner\'s client acts as data controller for the personal data of its users, customers or contacts',
          '- The client determines the purpose of processing, the means used and the applicable legal basis',
          '- The owner acts as data processor, limited to processing data in accordance with the client\'s instructions and exclusively for the provision of the contracted service',
          'The owner does not decide:',
          '- the purpose of processing',
          '- the content of the data',
          '- the final use of the information',
          'The owner does not commercialize data processed on behalf of clients nor use it for own purposes, unless strictly necessary to provide, maintain or technically improve the service.',
          'The client is responsible for informing its users, obtaining the necessary consents and complying with applicable data protection regulations.',
        ],
      },
      {
        heading: '5. Data retention',
        body: [
          '- Data from automation services: up to 3 months',
          '- Subsequently, automatic deletion, unless a legal, contractual or technical obligation requires longer retention',
          '- Data received via contact forms may be retained for up to 5 years from the last communication, unless legal retention is required',
        ],
      },
      {
        heading: '6. Tools and third parties',
        body: [
          'This website and the services offered may use external tools and providers, including:',
          '- Google Analytics (browsing analysis)',
          '- Communication platforms managed by Meta (Instagram, WhatsApp)',
          '- CRM systems, automation tools, hosting, storage or messaging services necessary for service delivery',
          'These third parties may process personal data in accordance with their own privacy policies.',
        ],
      },
      {
        heading: 'International transfers',
        body: [
          'Due to the use of technology tools and external providers, personal data may be processed or transferred to countries outside the European Economic Area or Switzerland.',
          'In such cases, appropriate safeguards are adopted in accordance with applicable regulations, such as standard contractual clauses or other legally recognized mechanisms.',
        ],
      },
      {
        heading: '7. Legal basis for processing',
        body: [
          'The processing of personal data is based on:',
          '- User consent',
          '- Performance of a contract or pre-contractual measures',
          '- Legitimate interest of the owner in managing and improving services',
          '- Compliance with legal obligations, where applicable',
          'For data processed on behalf of clients, the legal basis corresponds to the client as data controller.',
        ],
      },
      {
        heading: '8. User rights',
        body: [
          'Persons whose personal data is processed may exercise, where applicable under the relevant regulations, their rights of:',
          '- Access',
          '- Rectification',
          '- Erasure',
          '- Restriction of processing',
          '- Objection',
          '- Portability, where applicable',
          '- Withdrawal of consent',
          `Requests can be sent to: ${OWNER.email}`,
          'When data is processed on behalf of a client, the request may need to be addressed to the client as data controller.',
        ],
      },
      {
        heading: '9. Data security',
        body: [
          'The owner applies reasonable technical and organizational measures to protect personal data, although absolute security of internet-connected systems cannot be guaranteed.',
        ],
      },
      {
        heading: '10. Limitation of liability',
        body: [
          'The owner is not responsible for the use that clients make of the data processed through the services provided, nor for the legality of their databases, contact lists, communications, purposes or consents obtained.',
          'Each client is responsible for complying with the applicable regulations regarding their own users, customers or contacts.',
        ],
      },
      {
        heading: '11. Applicable law',
        body: [
          'Data processing is carried out in accordance with applicable Swiss data protection law.',
          'Where applicable due to territory, users or services offered, the General Data Protection Regulation or other mandatory local regulations may also apply.',
        ],
      },
      {
        heading: '12. Modifications',
        body: ['The owner may modify this policy to adapt it to legal or technical changes.'],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    lastUpdated: 'Last updated: 2026',
    intro:
      'This website uses technical cookies necessary for its operation and analytical cookies to analyze the use of the website and improve its services.',
    sections: [
      {
        heading: '1. Types of cookies used',
        body: ['- Technical cookies (necessary for operation)', '- Analytical cookies'],
      },
      {
        heading: '2. Third-party cookies',
        body: [
          'This site uses:',
          '- Google Analytics',
          'Google Analytics may collect technical data such as IP address, online identifiers, pages visited, visit duration, browser and other usage information, in accordance with its own privacy policies.',
        ],
      },
      {
        heading: '3. Legal basis',
        body: ['The use of analytical cookies is based on user consent.'],
      },
      {
        heading: '4. Cookie management',
        body: [
          'The user may:',
          '- Accept or reject cookies via the banner',
          '- Configure the browser to block them',
        ],
      },
      {
        heading: '5. International transfers',
        body: [
          'The use of services such as Google Analytics may involve data transfers outside the European Economic Area or Switzerland. In such cases, appropriate safeguards apply in accordance with applicable regulations.',
          'Analytical or non-essential cookies will be used when the user accepts them, when such consent is required under applicable regulations.',
        ],
      },
      {
        heading: '6. Updates',
        body: ['This policy may be modified based on technical or legal changes.'],
      },
    ],
  },
};

// ===================== FRANÇAIS =====================
const fr: LegalContent = {
  terms: {
    title: 'Mentions Légales',
    lastUpdated: 'Dernière mise à jour : 2026',
    sections: [
      {
        heading: 'Titulaire du site web',
        body: [
          `${OWNER.name}`,
          `Forme juridique : Indépendant`,
          `Adresse : ${OWNER.address}`,
          `Email : ${OWNER.email}`,
        ],
      },
      {
        heading: 'Activité',
        body: [
          "Ce site web a pour but la présentation et l'offre de services d'automatisation, de déploiement d'agents textuels, d'assistants IA, de gestion des conversations et de solutions technologiques pour les entreprises en ligne.",
        ],
      },
      {
        heading: 'Responsabilité',
        body: [
          "Le titulaire agit en tant que prestataire technologique. Les clients qui souscrivent aux services sont responsables de l'utilisation qu'ils font des outils mis en œuvre, ainsi que des données, communications, systèmes et finalités qu'ils utilisent.",
          "Le titulaire ne garantit pas de résultats commerciaux spécifiques découlant de l'utilisation des services.",
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        body: [
          "Tous les contenus du site web sont la propriété du titulaire ou utilisés avec autorisation. Toute reproduction sans consentement est interdite.",
        ],
      },
      {
        heading: 'Législation applicable',
        body: [
          "Ce site est régi par la législation suisse, sans préjudice de l'application de réglementations impératives d'autres territoires lorsque cela s'applique.",
        ],
      },
    ],
  },
  privacy: {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : 2026',
    sections: [
      {
        heading: '1. Responsable du traitement',
        body: [
          `Titulaire : ${OWNER.name}`,
          `Adresse : ${OWNER.address}`,
          `Email : ${OWNER.email}`,
        ],
      },
      {
        heading: '2. Données personnelles collectées',
        body: [
          'Sur ce site web, nous collectons :',
          '- Nom et prénom',
          '- Adresse e-mail',
          "- Informations fournies volontairement par l'utilisateur",
          "De plus, dans le cadre des services fournis aux clients, le titulaire peut traiter des données personnelles fournies par des tiers (les clients du titulaire), notamment :",
          '- Données de contact',
          '- Contenu des conversations',
          '- Informations commerciales',
          "Des métadonnées techniques peuvent également être traitées, telles que les identifiants utilisateur, l'adresse IP, les informations sur l'appareil, l'historique d'utilisation, l'état des conversations, les étiquettes commerciales et les données provenant du CRM ou d'outils connectés par le client.",
        ],
      },
      {
        heading: '3. Finalité du traitement',
        body: [
          'Les données sont traitées pour :',
          '- Répondre aux demandes',
          '- Fournir les services contractés',
          '- Gestion technique et opérationnelle des systèmes automatisés',
          "- Intégration d'outils de communication, d'automatisation et d'IA",
          '- Maintenance, supervision et amélioration du fonctionnement technique',
          '- Résolution des incidents techniques',
          '- Respect des obligations légales ou de sécurité',
        ],
      },
      {
        heading: '4. Services d\'automatisation et rôle du titulaire',
        body: [
          "Le titulaire propose des services d'automatisation des communications via des outils technologiques intégrés à des plateformes tierces, y compris des réseaux sociaux et des services de messagerie tels qu'Instagram et WhatsApp (exploités par Meta).",
          'Dans ce contexte :',
          "- Le client du titulaire agit en tant que responsable du traitement des données personnelles de ses utilisateurs, clients ou contacts",
          '- Le client détermine la finalité du traitement, les moyens utilisés et la base légale applicable',
          "- Le titulaire agit en tant que sous-traitant, se limitant à traiter les données conformément aux instructions du client et exclusivement pour la fourniture du service contracté",
          'Le titulaire ne décide pas :',
          '- la finalité du traitement',
          '- le contenu des données',
          "- l'utilisation finale de l'information",
          "Le titulaire ne commercialise pas les données traitées pour le compte des clients et ne les utilise pas à ses propres fins, sauf si cela est strictement nécessaire pour fournir, maintenir ou améliorer techniquement le service.",
          "Le client est responsable d'informer ses utilisateurs, d'obtenir les consentements nécessaires et de respecter la réglementation applicable en matière de protection des données.",
        ],
      },
      {
        heading: '5. Conservation des données',
        body: [
          "- Données issues des services d'automatisation : jusqu'à 3 mois",
          '- Ensuite, suppression automatique, sauf obligation légale, contractuelle ou technique nécessitant une conservation plus longue',
          "- Les données reçues via les formulaires de contact peuvent être conservées jusqu'à 5 ans à compter de la dernière communication, sauf obligation légale de conservation",
        ],
      },
      {
        heading: '6. Outils et tiers',
        body: [
          'Ce site web et les services proposés peuvent utiliser des outils et fournisseurs externes, notamment :',
          '- Google Analytics (analyse de navigation)',
          '- Plateformes de communication gérées par Meta (Instagram, WhatsApp)',
          '- Systèmes CRM, outils d\'automatisation, services d\'hébergement, de stockage ou de messagerie nécessaires à la fourniture du service',
          'Ces tiers peuvent traiter des données personnelles conformément à leurs propres politiques de confidentialité.',
        ],
      },
      {
        heading: 'Transferts internationaux',
        body: [
          "En raison de l'utilisation d'outils technologiques et de fournisseurs externes, les données personnelles peuvent être traitées ou transférées vers des pays situés hors de l'Espace économique européen ou de la Suisse.",
          'Dans ces cas, des garanties appropriées sont adoptées conformément à la réglementation applicable, telles que les clauses contractuelles types ou d\'autres mécanismes légalement reconnus.',
        ],
      },
      {
        heading: '7. Base légale du traitement',
        body: [
          'Le traitement des données personnelles repose sur :',
          "- Le consentement de l'utilisateur",
          "- L'exécution d'un contrat ou de mesures précontractuelles",
          '- L\'intérêt légitime du titulaire à gérer et améliorer les services',
          '- Le respect des obligations légales, le cas échéant',
          'Pour les données traitées pour le compte des clients, la base légale correspond au client en tant que responsable du traitement.',
        ],
      },
      {
        heading: '8. Droits des utilisateurs',
        body: [
          "Les personnes dont les données personnelles sont traitées peuvent exercer, lorsque cela est applicable selon la réglementation, leurs droits :",
          "- D'accès",
          '- De rectification',
          "- D'effacement",
          '- De limitation du traitement',
          "- D'opposition",
          '- De portabilité, le cas échéant',
          '- De retrait du consentement',
          `Les demandes peuvent être adressées à : ${OWNER.email}`,
          "Lorsque les données sont traitées pour le compte d'un client, la demande peut devoir être adressée au client responsable du traitement.",
        ],
      },
      {
        heading: '9. Sécurité des données',
        body: [
          "Le titulaire applique des mesures techniques et organisationnelles raisonnables pour protéger les données personnelles, bien que la sécurité absolue des systèmes connectés à Internet ne puisse être garantie.",
        ],
      },
      {
        heading: '10. Limitation de responsabilité',
        body: [
          "Le titulaire n'est pas responsable de l'utilisation que les clients font des données traitées via les services fournis, ni de la légalité de leurs bases de données, listes de contacts, communications, finalités ou consentements obtenus.",
          'Chaque client est responsable du respect de la réglementation applicable concernant ses propres utilisateurs, clients ou contacts.',
        ],
      },
      {
        heading: '11. Législation applicable',
        body: [
          'Le traitement des données est effectué conformément à la législation suisse applicable en matière de protection des données.',
          "Lorsque cela s'applique en raison du territoire, des utilisateurs ou des services proposés, le Règlement Général sur la Protection des Données ou d'autres réglementations locales impératives peuvent également s'appliquer.",
        ],
      },
      {
        heading: '12. Modifications',
        body: ["Le titulaire peut modifier cette politique pour l'adapter aux changements légaux ou techniques."],
      },
    ],
  },
  cookies: {
    title: 'Politique de Cookies',
    lastUpdated: 'Dernière mise à jour : 2026',
    intro:
      'Ce site web utilise des cookies techniques nécessaires à son fonctionnement et des cookies analytiques pour analyser l\'utilisation du site et améliorer ses services.',
    sections: [
      {
        heading: '1. Types de cookies utilisés',
        body: ['- Cookies techniques (nécessaires au fonctionnement)', '- Cookies analytiques'],
      },
      {
        heading: '2. Cookies tiers',
        body: [
          'Ce site utilise :',
          '- Google Analytics',
          "Google Analytics peut collecter des données techniques telles que l'adresse IP, les identifiants en ligne, les pages visitées, la durée de la visite, le navigateur et d'autres informations d'utilisation, conformément à ses propres politiques de confidentialité.",
        ],
      },
      {
        heading: '3. Base légale',
        body: ["L'utilisation des cookies analytiques repose sur le consentement de l'utilisateur."],
      },
      {
        heading: '4. Gestion des cookies',
        body: [
          "L'utilisateur peut :",
          '- Accepter ou refuser les cookies via la bannière',
          '- Configurer son navigateur pour les bloquer',
        ],
      },
      {
        heading: '5. Transferts internationaux',
        body: [
          "L'utilisation de services tels que Google Analytics peut impliquer des transferts de données hors de l'Espace économique européen ou de la Suisse. Dans ces cas, des garanties appropriées s'appliquent conformément à la réglementation applicable.",
          "Les cookies analytiques ou non nécessaires seront utilisés lorsque l'utilisateur les accepte, lorsque ce consentement est requis selon la réglementation applicable.",
        ],
      },
      {
        heading: '6. Mises à jour',
        body: ['Cette politique peut être modifiée en fonction des changements techniques ou légaux.'],
      },
    ],
  },
};

// ===================== DEUTSCH =====================
const de: LegalContent = {
  terms: {
    title: 'Impressum',
    lastUpdated: 'Letzte Aktualisierung: 2026',
    sections: [
      {
        heading: 'Inhaber der Website',
        body: [
          `${OWNER.name}`,
          `Rechtsform: Selbstständig`,
          `Adresse: ${OWNER.address}`,
          `E-Mail: ${OWNER.email}`,
        ],
      },
      {
        heading: 'Tätigkeit',
        body: [
          'Diese Website dient der Präsentation und dem Angebot von Automatisierungsdienstleistungen, der Implementierung von Text-Agenten, KI-Assistenten, Konversationsmanagement und technologischen Lösungen für Online-Unternehmen.',
        ],
      },
      {
        heading: 'Haftung',
        body: [
          'Der Inhaber agiert als Technologieanbieter. Kunden, die die Dienste in Anspruch nehmen, sind verantwortlich für die Verwendung der implementierten Tools sowie für die Daten, Kommunikationen, Systeme und Zwecke, für die sie sie nutzen.',
          'Der Inhaber garantiert keine bestimmten kommerziellen Ergebnisse aus der Nutzung der Dienste.',
        ],
      },
      {
        heading: 'Geistiges Eigentum',
        body: [
          'Alle Inhalte dieser Website sind Eigentum des Inhabers oder werden mit Genehmigung verwendet. Eine Vervielfältigung ohne Zustimmung ist untersagt.',
        ],
      },
      {
        heading: 'Anwendbares Recht',
        body: [
          'Diese Website unterliegt dem schweizerischen Recht, unbeschadet der Anwendung zwingender Vorschriften anderer Gebiete, soweit anwendbar.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Datenschutzerklärung',
    lastUpdated: 'Letzte Aktualisierung: 2026',
    sections: [
      {
        heading: '1. Verantwortlicher',
        body: [
          `Inhaber: ${OWNER.name}`,
          `Adresse: ${OWNER.address}`,
          `E-Mail: ${OWNER.email}`,
        ],
      },
      {
        heading: '2. Erhobene personenbezogene Daten',
        body: [
          'Über diese Website werden erhoben:',
          '- Vor- und Nachname',
          '- E-Mail-Adresse',
          '- Vom Nutzer freiwillig bereitgestellte Informationen',
          'Darüber hinaus kann der Inhaber im Rahmen der für Kunden erbrachten Dienstleistungen personenbezogene Daten verarbeiten, die von Dritten (Kunden des Inhabers) bereitgestellt werden, einschließlich:',
          '- Kontaktdaten',
          '- Konversationsinhalte',
          '- Geschäftsinformationen',
          'Es können auch technische Metadaten verarbeitet werden, wie Benutzerkennungen, IP-Adresse, Geräteinformationen, Nutzungsverlauf, Konversationsstatus, geschäftliche Tags und Daten aus CRM- oder vom Kunden verbundenen Tools.',
        ],
      },
      {
        heading: '3. Zweck der Verarbeitung',
        body: [
          'Die Daten werden verarbeitet, um:',
          '- Anfragen zu beantworten',
          '- Vertraglich vereinbarte Dienste zu erbringen',
          '- Technische und betriebliche Verwaltung automatisierter Systeme',
          '- Integration von Kommunikations-, Automatisierungs- und KI-Tools',
          '- Wartung, Überwachung und Verbesserung des technischen Betriebs',
          '- Behebung technischer Vorfälle',
          '- Erfüllung gesetzlicher oder sicherheitsrelevanter Verpflichtungen',
        ],
      },
      {
        heading: '4. Automatisierungsdienste und Rolle des Inhabers',
        body: [
          'Der Inhaber bietet Dienste zur Automatisierung der Kommunikation über technologische Tools an, die in Plattformen Dritter integriert sind, einschließlich sozialer Netzwerke und Messaging-Diensten wie Instagram und WhatsApp (betrieben von Meta).',
          'In diesem Zusammenhang:',
          '- Der Kunde des Inhabers fungiert als Verantwortlicher für die Verarbeitung der personenbezogenen Daten seiner Nutzer, Kunden oder Kontakte',
          '- Der Kunde bestimmt den Zweck der Verarbeitung, die verwendeten Mittel und die anwendbare Rechtsgrundlage',
          '- Der Inhaber fungiert als Auftragsverarbeiter und beschränkt sich darauf, die Daten gemäß den Anweisungen des Kunden und ausschließlich für die Erbringung des vertraglich vereinbarten Dienstes zu verarbeiten',
          'Der Inhaber entscheidet nicht über:',
          '- den Zweck der Verarbeitung',
          '- den Inhalt der Daten',
          '- die endgültige Verwendung der Informationen',
          'Der Inhaber vermarktet die im Auftrag von Kunden verarbeiteten Daten nicht und verwendet sie nicht für eigene Zwecke, es sei denn, dies ist für die Bereitstellung, Wartung oder technische Verbesserung des Dienstes unbedingt erforderlich.',
          'Der Kunde ist dafür verantwortlich, seine Nutzer zu informieren, die erforderlichen Einwilligungen einzuholen und die geltenden Datenschutzbestimmungen einzuhalten.',
        ],
      },
      {
        heading: '5. Aufbewahrung der Daten',
        body: [
          '- Daten aus Automatisierungsdiensten: bis zu 3 Monate',
          '- Anschließend automatische Löschung, sofern keine gesetzliche, vertragliche oder technische Verpflichtung eine längere Aufbewahrung erfordert',
          '- Über Kontaktformulare erhaltene Daten können bis zu 5 Jahre nach der letzten Kommunikation aufbewahrt werden, sofern keine gesetzliche Aufbewahrungspflicht besteht',
        ],
      },
      {
        heading: '6. Tools und Dritte',
        body: [
          'Diese Website und die angebotenen Dienste können externe Tools und Anbieter nutzen, einschließlich:',
          '- Google Analytics (Navigationsanalyse)',
          '- Von Meta verwaltete Kommunikationsplattformen (Instagram, WhatsApp)',
          '- CRM-Systeme, Automatisierungstools, Hosting-, Speicher- oder Messaging-Dienste, die für die Erbringung des Dienstes erforderlich sind',
          'Diese Dritten können personenbezogene Daten gemäß ihren eigenen Datenschutzrichtlinien verarbeiten.',
        ],
      },
      {
        heading: 'Internationale Übermittlungen',
        body: [
          'Aufgrund der Nutzung technologischer Tools und externer Anbieter können personenbezogene Daten in Länder außerhalb des Europäischen Wirtschaftsraums oder der Schweiz verarbeitet oder übermittelt werden.',
          'In diesen Fällen werden geeignete Garantien gemäß den geltenden Vorschriften ergriffen, wie Standardvertragsklauseln oder andere rechtlich anerkannte Mechanismen.',
        ],
      },
      {
        heading: '7. Rechtsgrundlage der Verarbeitung',
        body: [
          'Die Verarbeitung personenbezogener Daten basiert auf:',
          '- Einwilligung des Nutzers',
          '- Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen',
          '- Berechtigtem Interesse des Inhabers an der Verwaltung und Verbesserung der Dienste',
          '- Erfüllung gesetzlicher Verpflichtungen, sofern zutreffend',
          'Bei Daten, die im Auftrag von Kunden verarbeitet werden, entspricht die Rechtsgrundlage dem Kunden als Verantwortlichem.',
        ],
      },
      {
        heading: '8. Rechte der Nutzer',
        body: [
          'Personen, deren personenbezogene Daten verarbeitet werden, können, sofern nach den geltenden Vorschriften zutreffend, ihre Rechte ausüben auf:',
          '- Auskunft',
          '- Berichtigung',
          '- Löschung',
          '- Einschränkung der Verarbeitung',
          '- Widerspruch',
          '- Datenübertragbarkeit, sofern zutreffend',
          '- Widerruf der Einwilligung',
          `Anfragen können gerichtet werden an: ${OWNER.email}`,
          'Wenn Daten im Auftrag eines Kunden verarbeitet werden, muss die Anfrage gegebenenfalls an den verantwortlichen Kunden gerichtet werden.',
        ],
      },
      {
        heading: '9. Datensicherheit',
        body: [
          'Der Inhaber wendet angemessene technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten an, kann jedoch keine absolute Sicherheit von mit dem Internet verbundenen Systemen garantieren.',
        ],
      },
      {
        heading: '10. Haftungsbeschränkung',
        body: [
          'Der Inhaber ist nicht verantwortlich für die Verwendung, die Kunden von den über die bereitgestellten Dienste verarbeiteten Daten machen, noch für die Rechtmäßigkeit ihrer Datenbanken, Kontaktlisten, Kommunikationen, Zwecke oder eingeholten Einwilligungen.',
          'Jeder Kunde ist verantwortlich für die Einhaltung der geltenden Vorschriften in Bezug auf seine eigenen Nutzer, Kunden oder Kontakte.',
        ],
      },
      {
        heading: '11. Anwendbares Recht',
        body: [
          'Die Datenverarbeitung erfolgt gemäß dem geltenden schweizerischen Datenschutzrecht.',
          'Sofern aufgrund des Gebiets, der Nutzer oder der angebotenen Dienste anwendbar, kann auch die Datenschutz-Grundverordnung oder andere zwingende lokale Vorschriften gelten.',
        ],
      },
      {
        heading: '12. Änderungen',
        body: ['Der Inhaber kann diese Richtlinie ändern, um sie an rechtliche oder technische Änderungen anzupassen.'],
      },
    ],
  },
  cookies: {
    title: 'Cookie-Richtlinie',
    lastUpdated: 'Letzte Aktualisierung: 2026',
    intro:
      'Diese Website verwendet technische Cookies, die für ihren Betrieb erforderlich sind, sowie analytische Cookies, um die Nutzung der Website zu analysieren und ihre Dienste zu verbessern.',
    sections: [
      {
        heading: '1. Verwendete Cookie-Arten',
        body: ['- Technische Cookies (für den Betrieb erforderlich)', '- Analytische Cookies'],
      },
      {
        heading: '2. Cookies von Drittanbietern',
        body: [
          'Diese Website verwendet:',
          '- Google Analytics',
          'Google Analytics kann technische Daten wie IP-Adresse, Online-Identifikatoren, besuchte Seiten, Besuchsdauer, Browser und andere Nutzungsinformationen gemäß seinen eigenen Datenschutzrichtlinien sammeln.',
        ],
      },
      {
        heading: '3. Rechtsgrundlage',
        body: ['Die Verwendung analytischer Cookies basiert auf der Einwilligung des Nutzers.'],
      },
      {
        heading: '4. Cookie-Verwaltung',
        body: [
          'Der Nutzer kann:',
          '- Cookies über das Banner akzeptieren oder ablehnen',
          '- Seinen Browser konfigurieren, um sie zu blockieren',
        ],
      },
      {
        heading: '5. Internationale Übermittlungen',
        body: [
          'Die Nutzung von Diensten wie Google Analytics kann Datenübermittlungen außerhalb des Europäischen Wirtschaftsraums oder der Schweiz beinhalten. In diesen Fällen gelten geeignete Garantien gemäß den anwendbaren Vorschriften.',
          'Analytische oder nicht erforderliche Cookies werden verwendet, wenn der Nutzer ihnen zustimmt, sofern eine solche Zustimmung gemäß den anwendbaren Vorschriften erforderlich ist.',
        ],
      },
      {
        heading: '6. Aktualisierungen',
        body: ['Diese Richtlinie kann aufgrund technischer oder rechtlicher Änderungen geändert werden.'],
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
      'Usamos cookies técnicas necesarias y, con tu consentimiento, cookies analíticas para mejorar el sitio.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    learnMore: 'Más información',
  },
  en: {
    title: 'Cookies',
    description:
      'We use necessary technical cookies and, with your consent, analytical cookies to improve the site.',
    accept: 'Accept',
    reject: 'Reject',
    learnMore: 'Learn more',
  },
  fr: {
    title: 'Cookies',
    description:
      "Nous utilisons des cookies techniques nécessaires et, avec votre consentement, des cookies analytiques pour améliorer le site.",
    accept: 'Accepter',
    reject: 'Refuser',
    learnMore: 'En savoir plus',
  },
  de: {
    title: 'Cookies',
    description:
      'Wir verwenden notwendige technische Cookies und mit Ihrer Zustimmung analytische Cookies zur Verbesserung der Website.',
    accept: 'Akzeptieren',
    reject: 'Ablehnen',
    learnMore: 'Mehr erfahren',
  },
};
