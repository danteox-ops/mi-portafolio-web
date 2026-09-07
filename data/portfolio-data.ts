export interface Project {
  id: string;
  title: string;
  category: "Arquitectura" | "Interiorismo" | "Carpintería" | "Desarrollo Web" | "Efímero";
  subtitle: string;
  location: string;
  year: string;
  image: string;
  gallery: string[];
  description: string;
  challenge: string;
  solution: string;
  tools: string[];
  features: string[];
  featured: boolean;
  link?: string;
  github?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  category: "Espacial & Físico" | "Carpintería & Mobiliario" | "Tecnología & Digital";
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: { name: string; level: string; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: "Daniel Esteban Cantero Frías",
  shortName: "Daniel Cantero",
  title: "Arquitecto · Diseñador de Interiores · Desarrollador Web Full Stack & QA",
  location: "Cartagena, Colombia",
  license: "A37512025-1067957304",
  licenseCouncil: "Consejo Profesional Nacional de Arquitectura y sus Profesiones Auxiliares (CPNAA)",
  email: "canteroconstruc28@gmail.com",
  phone: "+57 300 116 4695",
  whatsappUrl: "https://wa.me/573001164695?text=Hola%20Daniel,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.",
  profileImage: "/images/profile.jpeg",
  status: "Disponible para Proyectos & Consultoría",
  education: [
    {
      degree: "Título Profesional en Arquitectura",
      institution: "Universidad de San Buenaventura",
      status: "Titulado",
      verified: true,
    },
    {
      degree: "Diplomado en Diseño de Interiores",
      institution: "Universidad de San Buenaventura",
      status: "Certificado",
      verified: true,
    },
    {
      degree: "Matrícula Profesional CPNAA",
      institution: "Consejo Profesional Nacional de Arquitectura (Colombia)",
      status: "Vigente (A37512025-1067957304)",
      verified: true,
    }
  ],
  bio: `Arquitecto con formación complementaria en diseño de interiores, carpintería arquitectónica y desarrollo de software full stack. Especialista en la creación de propuestas que fusionan la sensibilidad espacial, la precisión artesanal del mobiliario a medida y la vanguardia de la tecnología digital. 
  
  Mi enfoque multidisciplinar me permite abordar proyectos desde el plano y la maqueta física hasta la arquitectura de sistemas web de alto rendimiento, bases de datos y aseguramiento de calidad (QA Testing).`,
  disciplines: [
    {
      name: "Arquitectura & Espacio",
      desc: "Diseño contextual, residencial, comercial y efímero con integración bioclimática."
    },
    {
      name: "Diseño de Interiores",
      desc: "Iluminación por capas, balance cromático, texturas y ergonomía sensorial."
    },
    {
      name: "Carpintería a Medida",
      desc: "Despiece técnico, selección de maderas nobles, herrajes y fabricación de autor."
    },
    {
      name: "Desarrollo Full Stack & QA",
      desc: "Frontend reactivo, Backend escalable, Bases de Datos relacionales/NoSQL y Testing riguroso."
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "romeros-pizza",
    title: "Remodelación Pizzería Romero's Pizza",
    category: "Interiorismo",
    subtitle: "Renovación Integral & Mobiliario de Autor",
    location: "Cartagena, Colombia",
    year: "2024",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80"
    ],
    description: "Renovación integral del espacio gastronómico 'Romero's Pizza' en Cartagena. El proyecto consistió en la reestructuración completa del flujo operativo y la experiencia de los comensales, logrando un ambiente cálido, acogedor y sofisticado.",
    challenge: "Maximizar el aforo sin comprometer la comodidad visual ni acústica, transformando un local preexistente de volumetría rígida en un espacio envolvente y contemporáneo.",
    solution: "Diseño de mobiliario integrado a medida fabricado en carpintería de madera noble, celosías con patrones decorativos, e iluminación estratificada (capas neutras técnicas combinadas con acentos cálidos regulables).",
    tools: ["Archicad", "SketchUp", "Twinmotion", "Carpintería a Medida", "AutoCAD"],
    features: [
      "Conceptualización cálida y contemporánea con estética artesanal italiana.",
      "Diseño de bancas corridas y mesas en madera con ensamble oculto.",
      "Sistema de iluminación por capas para atmósferas diurnas y nocturnas.",
      "Tratamiento acústico y revestimientos en madera ranurada.",
      "Modelado 3D fotorrealista y planos técnicos para ejecución en obra."
    ],
    featured: true
  },
  {
    id: "casa-palma-modular",
    title: "Residencia Bioclimática Alma",
    category: "Arquitectura",
    subtitle: "Vivienda Unifamiliar Sostenible",
    location: "Bolívar, Colombia",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
    ],
    description: "Propuesta arquitectónica de vivienda contemporánea que armoniza el concreto a la vista con pérgolas de madera teca para ventilación cruzada natural adaptada al clima caribeño.",
    challenge: "Optimizar el confort térmico pasivo reduciendo el consumo energético de climatización.",
    solution: "Orientación estratégica de fachadas, celosías de carpintería artesanal y patios interiores que canalizan las brisas predominantes.",
    tools: ["Archicad", "Twinmotion", "Photoshop", "AutoCAD"],
    features: [
      "Ventilación cruzada pasiva e iluminación cenital filtrada.",
      "Carpintería exterior en maderas locales tratadas con aceites naturales.",
      "Integración fluida entre áreas sociales y jardines secos."
    ],
    featured: true
  },
  {
    id: "plataforma-arqui-flow",
    title: "ArquiManager Platform (Web Full Stack)",
    category: "Desarrollo Web",
    subtitle: "Software de Gestión de Obra & Cubicaciones",
    location: "Cartagena / Remoto",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
    ],
    description: "Aplicación web completa (Frontend + Backend + Base de Datos + Suite de QA) creada para arquitectos y contratistas para calcular despieces de carpintería, cubicación de materiales y presupuestos en tiempo real.",
    challenge: "Digitalizar fórmulas complejas de cálculo de despieces de madera y optimización de tableros con interfaz reactiva y validación de datos infalible.",
    solution: "Arquitectura Next.js con TypeScript en el frontend, API REST en Node.js, base de datos relacional PostgreSQL y batería de tests automatizados con Jest y Cypress.",
    tools: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Jest / QA"],
    features: [
      "Frontend intuitivo con diseño dark mode minimalista.",
      "Algoritmo de optimización de corte de tableros de carpintería.",
      "Base de datos relacional con control transaccional de costos.",
      "Suite de QA Testing con cobertura de pruebas unitarias y e2e.",
      "Exportación automática de fichas técnicas en PDF."
    ],
    featured: true
  },
  {
    id: "pabellon-efimero-arte",
    title: "Pabellón Efímero 'Eco-Vínculo'",
    category: "Efímero",
    subtitle: "Arquitectura Temporal & Modular",
    location: "Cartagena, Colombia",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
    ],
    description: "Estructura modular desmontable para exhibición cultural y ferias de diseño, construida con ensambles de madera y lonas tensadas reflectivas.",
    challenge: "Facilidad de montaje en menos de 24 horas y huella de carbono cero en su desmantelamiento.",
    solution: "Sistema de encastres geométricos sin tornillería destructiva, permitiendo su reutilización en múltiples configuraciones.",
    tools: ["SketchUp", "AutoCAD", "Twinmotion", "Carpintería Modular"],
    features: [
      "Montaje rápido 100% reutilizable.",
      "Juego de sombras dinámicas durante las distintas horas del sol.",
      "Optimización espacial para alto tráfico peatonal."
    ],
    featured: false
  },
  {
    id: "mobiliario-linea-origen",
    title: "Colección de Mobiliario 'Origen'",
    category: "Carpintería",
    subtitle: "Piezas de Autor en Madera y Metal",
    location: "Cartagena, Colombia",
    year: "2023",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80"
    ],
    description: "Serie de mesas de comedor, consolas y credenzas que exploran ensambles tradicionales japoneses combinados con acabados contemporáneos en roble y cedro.",
    challenge: "Garantizar estabilidad estructural duradera sin recurrir a herrajes visibles.",
    solution: "Desarrollo de uniones tipo espiga y caja con tolerancias milimétricas en taller.",
    tools: ["Carpintería Fina", "SketchUp", "Planos de Taller"],
    features: [
      "Madera maciza certificada con acabado al aceite mate.",
      "Detalles de ensamble a la vista como elemento estético.",
      "Ergonomía estudiada para uso residencial de alta exigencia."
    ],
    featured: false
  },
  {
    id: "qa-testing-suite",
    title: "Suite de Automatización & QA Testing",
    category: "Desarrollo Web",
    subtitle: "Control de Calidad & Pruebas E2E / API",
    location: "Remoto",
    year: "2024",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80"
    ],
    description: "Framework de pruebas y aseguramiento de calidad con integración continua, verificación de casos de uso críticos, validación de APIs y análisis de rendimiento para plataformas web complejas.",
    challenge: "Prevenir regresiones y garantizar tiempos de respuesta óptimos bajo cargas de usuarios.",
    solution: "Implementación de suites de pruebas con Jest para lógica de negocio, Cypress / Playwright para flujos de usuario y Postman para pruebas de integración de endpoints.",
    tools: ["QA Testing", "Jest", "Cypress", "Postman", "TypeScript", "CI/CD"],
    features: [
      "Matriz de pruebas exhaustiva y planes de aseguramiento de calidad (QA).",
      "Pruebas de carga, estrés y accesibilidad WCAG.",
      "Automatización de pruebas de regresión y validación de base de datos."
    ],
    featured: false
  }
];

export const SERVICES: Service[] = [
  {
    id: "diseno-arquitectonico",
    title: "Diseño Arquitectónico Contextual",
    subtitle: "Espacios con Propósito & Confort",
    category: "Espacial & Físico",
    description: "Conceptualización y desarrollo integral de proyectos residenciales, comerciales, hoteleros y urbanos. Soluciones que responden al entorno climático, a la normativa y a la identidad de cada cliente.",
    iconName: "Compass",
    deliverables: [
      "Planos arquitectónicos ejecutivos (plantas, cortes, fachadas)",
      "Cálculo de áreas, zonificación y memorias técnicas",
      "Estrategias bioclimáticas y eficiencia energética",
      "Tramitación y cumplimiento de normativa CPNAA"
    ]
  },
  {
    id: "diseno-interiores",
    title: "Diseño de Interiores & Iluminación",
    subtitle: "Atmósferas Sensoriales & Funcionales",
    category: "Espacial & Físico",
    description: "Transformación de espacios interiores para generar experiencias memorables. Armonización de materiales nobles, texturas, acústica y esquemas de iluminación por capas (cálidas y neutras).",
    iconName: "Sparkles",
    deliverables: [
      "Moodboards de acabados y paletas de colores",
      "Planos de iluminación estratificada y circuitos",
      "Selección y especificación de revestimientos y textiles",
      "Supervisión y montaje estético final"
    ]
  },
  {
    id: "carpinteria-medida",
    title: "Carpintería Arquitectónica & Mobiliario",
    subtitle: "Detalle Constructivo & Precisión de Taller",
    category: "Carpintería & Mobiliario",
    description: "Diseño, cubicación y fabricación de mobiliario a medida de alta gama. Conocimiento profundo en tipos de madera, tableros, ensambles estructurales y herrajes de última generación.",
    iconName: "Hammer",
    deliverables: [
      "Planos de taller con despiece milimétrico y cotas de corte",
      "Selección de maderas macizas y enchapes premium",
      "Diseño de cocinas, closets, celosías, barras y panelados",
      "Control de calidad en ensamble e instalación en obra"
    ]
  },
  {
    id: "desarrollo-fullstack",
    title: "Desarrollo Web Full Stack",
    subtitle: "Frontend Moderno, Backend Sólido & APIs",
    category: "Tecnología & Digital",
    description: "Ingeniería de software y desarrollo web moderno. Creación de aplicaciones interactivas, dashboards y plataformas con arquitectura limpia, velocidad extrema y diseño responsivo.",
    iconName: "Code2",
    deliverables: [
      "Frontend con React, Next.js, TypeScript y Tailwind CSS",
      "Backend en Node.js, Express y desarrollo de APIs RESTful",
      "Diseño e integración de Bases de Datos (PostgreSQL, MySQL, MongoDB)",
      "Diseño UI/UX con enfoque arquitectónico y responsive design"
    ]
  },
  {
    id: "qa-testing",
    title: "QA Testing & Calidad de Software",
    subtitle: "Pruebas Rigurosas & Estabilidad Total",
    category: "Tecnología & Digital",
    description: "Aseguramiento de la calidad en software. Diseño y ejecución de planes de pruebas exhaustivos (manuales y automatizados) para asegurar que el sistema funcione sin errores en producción.",
    iconName: "CheckCircle2",
    deliverables: [
      "Diseño de matrices y planes de prueba de software (QA)",
      "Pruebas funcionales, de usabilidad y casos extremos (Edge Cases)",
      "Automatización de pruebas unitarias e integración (Jest, Cypress)",
      "Testing de endpoints y consistencia de datos en BD"
    ]
  },
  {
    id: "modelado-3d-renders",
    title: "Modelado 3D & Renders Fotorrealistas",
    subtitle: "Visualización Inmersiva de Alto Impacto",
    category: "Espacial & Físico",
    description: "Representación tridimensional avanzada para proyectos inmobiliarios y comerciales. Renders hiperrealistas, recorridos virtuales e infografías arquitectónicas.",
    iconName: "Layers",
    deliverables: [
      "Modelado BIM y paramétrico en Archicad y SketchUp",
      "Renders en alta resolución y recorridos con Twinmotion",
      "Postproducción digital en Adobe Photoshop",
      "Material visual listo para marketing inmobiliario y clientes"
    ]
  }
];

export const TECH_STACK: SkillCategory[] = [
  {
    title: "Arquitectura & Modelado Espacial",
    badge: "BIM & CAD",
    description: "Herramientas líderes de la industria para diseño, planimetría y visualización 3D.",
    skills: [
      { name: "Archicad", level: "Avanzado / BIM", icon: "Box" },
      { name: "AutoCAD", level: "Avanzado / Planos Técnicos", icon: "FileCode" },
      { name: "SketchUp", level: "Avanzado / Modelado 3D", icon: "Boxes" },
      { name: "Twinmotion", level: "Avanzado / Renderizado en Tiempo Real", icon: "Eye" },
      { name: "Adobe Photoshop", level: "Postproducción & Composición", icon: "Image" }
    ]
  },
  {
    title: "Carpintería & Fabricación",
    badge: "Oficio & Precisión",
    description: "Técnicas de taller, ensamble y especificación técnica de madera y herrajes.",
    skills: [
      { name: "Despiece Técnico & Cubicaciones", level: "Avanzado", icon: "Ruler" },
      { name: "Ensambles & Estructuras en Madera", level: "Especialista", icon: "Wrench" },
      { name: "Maderas Nobles & Enchapes", level: "Selección & Acabados", icon: "TreePine" },
      { name: "Herrajes Ocultos & Sistemas Móviles", level: "Especificación", icon: "Settings" }
    ]
  },
  {
    title: "Frontend & Diseño Web",
    badge: "Client-Side",
    description: "Interfaces modernas, responsivas y accesibles con microinteracciones fluidas.",
    skills: [
      { name: "React & Next.js (App Router)", level: "Avanzado", icon: "Code" },
      { name: "TypeScript & JavaScript", level: "Avanzado", icon: "Terminal" },
      { name: "Tailwind CSS & CSS3 Avanzado", level: "Experto en UI/UX", icon: "Palette" },
      { name: "Framer Motion", level: "Animaciones & Gestos", icon: "Sparkles" },
      { name: "HTML5 Semántico & SEO", level: "Optimizado", icon: "Globe" }
    ]
  },
  {
    title: "Backend, Bases de Datos & Lenguajes",
    badge: "Server-Side & Data",
    description: "Lógica de servidor, modelado de datos y múltiples lenguajes de programación.",
    skills: [
      { name: "Node.js & Express", level: "APIs RESTful", icon: "Server" },
      { name: "PostgreSQL & MySQL", level: "Bases de Datos Relacionales", icon: "Database" },
      { name: "MongoDB & NoSQL", level: "Modelado de Documentos", icon: "HardDrive" },
      { name: "Python", level: "Scripts & Lógica", icon: "TerminalSquare" },
      { name: "SQL & Optimización de Consultas", level: "Avanzado", icon: "Table" }
    ]
  },
  {
    title: "QA Testing & Calidad de Software",
    badge: "Aseguramiento & Testing",
    description: "Metodologías de prueba para software robusto, confiable y seguro.",
    skills: [
      { name: "Pruebas Funcionales & Manual QA", level: "Exhaustivo", icon: "CheckCircle2" },
      { name: "Pruebas Unitarias con Jest", level: "Automatización", icon: "ShieldCheck" },
      { name: "Pruebas E2E con Cypress", level: "Flujos de Usuario", icon: "Activity" },
      { name: "Testing de APIs con Postman", level: "Validación de Endpoints", icon: "Send" },
      { name: "Control de Calidad & Bug Tracking", level: "Gestión Rigurosa", icon: "Bug" }
    ]
  }
];

export const NAV_LINKS = [
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Servicios", href: "#servicios" },
  { name: "Habilidades & Stack", href: "#habilidades" },
  { name: "Contacto", href: "#contacto" }
];
