export const siteConfig = {
  name: 'ReformaT Venezuela',
  tagline: 'Transformamos espacios, creamos experiencias',
  url: 'https://reformat-venezuela.online',
  phone: '+58 422-799-7043',
  phoneRaw: '+584227997043',
  phoneWa: '584227997043',
  address: 'San Diego, Carabobo, Venezuela',
  schedule: 'Lun - Sáb: 7:00 AM - 6:00 PM',
  years: '20',
  
  projects: '500',
};

export function waLink(message: string = 'Hola ReformaT! Me interesa un presupuesto.') {
  return `https://wa.me/${siteConfig.phoneWa}?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    slug: 'cocinas', path: '/servicios/cocinas',
    icon: 'UtensilsCrossed',
    title: 'Remodelación de Cocinas',
    summary: 'Diseñamos y remodelamos cocinas funcionales y modernas con los mejores acabados.',
    longDescription: 'Transformamos tu cocina en el corazón de tu hogar. Desde el diseño conceptual hasta el último acabado, nuestro equipo de profesionales trabaja con dedicación para crear el espacio que siempre soñaste.',
    features: ['Diseño personalizado de espacios', 'Instalación de gabinetes a medida', 'Encimeras de granito, mármol o cuarzo', 'Revestimientos y backsplash modernos', 'Iluminación funcional y decorativa', 'Optimización del espacio de almacenamiento'],
    heroImage: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/af78d08c764a5acd9a01ea460f3ceb209a99bdac-1024x683.jpg',
    timeline: '2 a 4 semanas', from: 'Desde $800',
    galleryImages: [
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/af78d08c764a5acd9a01ea460f3ceb209a99bdac-1024x683.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/af78d08c764a5acd9a01ea460f3ceb209a99bdac.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/a7074628ae5503c045cbce2a327c2ea08459cb11-1024x683.jpg',
    ],
    faqs: [
      { q: '¿Cuánto tiempo tarda una remodelación de cocina?', a: 'Dependiendo de la magnitud, entre 2 y 4 semanas. Te damos un cronograma claro al inicio.' },
      { q: '¿El presupuesto incluye materiales?', a: 'Sí. El presupuesto detalla mano de obra, materiales y cronograma. Sin costos ocultos.' },
      { q: '¿Puedo elegir los materiales?', a: 'Por supuesto. Te asesoramos en la selección de materiales según tu presupuesto y estilo.' },
    ],
  },
  {
    slug: 'banos', path: '/servicios/banos',
    icon: 'Bath',
    title: 'Remodelación de Baños',
    summary: 'Convertimos tu baño en un espacio de confort y elegancia con acabados premium.',
    longDescription: 'Tu baño merece una transformación completa. Trabajamos con materiales de primera calidad para garantizar durabilidad, estética y funcionalidad en cada detalle.',
    features: ['Instalación de sanitarios modernos', 'Duchas y bañeras de diseño', 'Azulejos y revestimientos decorativos', 'Grifería de alta gama', 'Sistemas de ventilación eficientes', 'Iluminación LED ambiental'],
    heroImage: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/4f9e75a852947810e2fc262e92ceb26aaf4b9449-1024x683.jpg',
    timeline: '2 a 3 semanas', from: 'Desde $500',
    galleryImages: [
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/4f9e75a852947810e2fc262e92ceb26aaf4b9449-1024x683.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/4f9e75a852947810e2fc262e92ceb26aaf4b9449.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/c11d4a42c2df886466dc228fe305556c5a1c7dce-1024x683.jpg',
    ],
    faqs: [
      { q: '¿Qué incluye la remodelación de baño?', a: 'Incluye diseño, demolición si necesaria, instalación completa, sanitarios, grifería y acabados.' },
      { q: '¿Puedo elegir los materiales?', a: 'Por supuesto. Te asesoramos en la selección de materiales según tu presupuesto y estilo.' },
    ],
  },
  {
    slug: 'electricos', path: '/servicios/electricos',
    icon: 'Zap',
    title: 'Servicios Eléctricos',
    summary: 'Instalaciones y reparaciones eléctricas profesionales y seguras.',
    longDescription: 'La infraestructura eléctrica de tu hogar es fundamental. Nuestro equipo de técnicos especializados garantiza instalaciones seguras, eficientes y cumpliendo todas las normas.',
    features: ['Instalación eléctrica completa', 'Reparación de fallas eléctricas', 'Iluminación LED y decorativa', 'Cuadros eléctricos y breakers', 'Puesta a tierra y seguridad', 'Automatizaciones y domótica'],
    heroImage: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/c11d4a42c2df886466dc228fe305556c5a1c7dce-1024x683.jpg',
    timeline: '1 a 2 semanas', from: 'Desde $200',
    galleryImages: [
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/c11d4a42c2df886466dc228fe305556c5a1c7dce-1024x683.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/c11d4a42c2df886466dc228fe305556c5a1c7dce.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-7.jpg',
    ],
    faqs: [
      { q: '¿Trabajan con emergencias eléctricas?', a: 'Sí. Contacta por WhatsApp y atendemos lo antes posible.' },
      { q: '¿Ofrecen garantía en los trabajos?', a: 'Sí. Todos nuestros trabajos están garantizados.' },
    ],
  },
  {
    slug: 'fontaneria', path: '/servicios/fontaneria',
    icon: 'Wrench',
    title: 'Fontanería Profesional',
    summary: 'Instalaciones y reparaciones de fontanería con materiales de primera calidad.',
    longDescription: 'Desde una simple reparación de grifo hasta la instalación completa de tuberías, nuestro fontanero profesional garantiza un trabajo impecable, limpio y duradero.',
    features: ['Reparación de fugas y goteos', 'Instalación de tuberías nuevas', 'Sistemas de drenaje', 'Instalación de calentadores', 'Desatascos y limpieza', 'Mantenimiento preventivo'],
    heroImage: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/c11d4a42c2df886466dc228fe305556c5a1c7dce-1024x683.jpg',
    timeline: '1 a 2 semanas', from: 'Desde $150',
    galleryImages: [
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/c11d4a42c2df886466dc228fe305556c5a1c7dce-1024x683.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-6.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-7.jpg',
    ],
    faqs: [
      { q: '¿Atienden solo reformas grandes?', a: 'No. Atendemos desde pequeñas reparaciones hasta instalaciones completas.' },
      { q: '¿Cuánto cuesta una reparación de fuga?', a: 'Depende del tipo y ubicación. Te damos un presupuesto gratuito.' },
    ],
  },
  {
    slug: 'integral', path: '/servicios/integral',
    icon: 'Building',
    title: 'Remodelación Integral',
    summary: 'Reforma completa de tu vivienda o local comercial de principio a fin.',
    longDescription: 'Si necesitas transformar tu espacio por completo, nuestro servicio de remodelación integral se encarga de todo: desde la demolición hasta el último acabado. Coordinamos todos los gremios para que no tengas que preocuparte de nada.',
    features: ['Proyecto llave en mano', 'Demolición y desescombro', 'Coordinación de todos los gremios', 'Diseño interior personalizado', 'Acabados de primera calidad', 'Entrega en plazo garantizado'],
    heroImage: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/a7074628ae5503c045cbce2a327c2ea08459cb11-1024x683.jpg',
    timeline: '1 a 3 meses', from: 'Desde $2.500',
    galleryImages: [
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/a7074628ae5503c045cbce2a327c2ea08459cb11-1024x683.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-6.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-7.jpg',
    ],
    faqs: [
      { q: '¿Qué incluye la remodelación integral?', a: 'Diseño, demolición, albañilería, electricidad, fontanería, carpintería, pintura y acabados. Todo coordinado.' },
      { q: '¿Puedo vivir en la casa durante la reforma?', a: 'Depende de la magnitud. En reformas parciales sí, en integrales te recomendamos mudanza temporal.' },
      { q: '¿Qué nivel de calidad usan?', a: 'Usamos materiales de primera calidad y marcas reconocidas. Cada elección es transparente.' },
    ],
  },
  {
    slug: 'pisos', path: '/servicios/pisos',
    icon: 'Layers',
    title: 'Pisos y Revestimientos',
    summary: 'Instalación profesional de porcelanatos, cerámica, vinílicos y más.',
    longDescription: 'El piso es la base de cualquier espacio. Instalamos porcelanatos, cerámicos, vinílicos flotantes, laminados y más con precisión milimétrica y acabados perfectos.',
    features: ['Porcelanatos y cerámicos', 'Vinílico SPC flotante', 'Laminados y MDF', 'Nivelación de pisos', 'Zócalos y remates', 'Reparación y restitución'],
    heroImage: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-6.jpg',
    timeline: '1 a 3 semanas', from: 'Desde $400',
    galleryImages: [
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-6.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/af78d08c764a5acd9a01ea460f3ceb209a99bdac-1024x683.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/a7074628ae5503c045cbce2a327c2ea08459cb11-1024x683.jpg',
    ],
    faqs: [
      { q: '¿Qué tipo de pisos instalan?', a: 'Porcelanatos, cerámicos, vinílicos, laminados, madera natural. Te asesoramos para elegir el mejor.' },
      { q: '¿Cuánto dura la instalación?', a: 'Depende del área. Un piso de 50m² se suele instalar en 3-5 días.' },
    ],
  },
  {
    slug: 'pintura', path: '/servicios/pintura',
    icon: 'Paintbrush',
    title: 'Pintura y Acabados',
    summary: 'Pintura interior y exterior, estuco, microcemento y acabados decorativos.',
    longDescription: 'La pintura transforma radicalmente cualquier espacio. Desde una sencilla mano de pintura hasta acabados decorativos de alta gama, nuestro equipo garantiza limpieza, precisión y resultados impecables.',
    features: ['Pintura interior y exterior', 'Estuco veneciano y empaste', 'Microcemento decorativo', 'Pintura decorativa y texturizada', 'Preparación y reparación de paredes', 'Acabados de lujo y personalizados'],
    heroImage: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-7.jpg',
    timeline: '1 a 2 semanas', from: 'Desde $300',
    galleryImages: [
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-7.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/4f9e75a852947810e2fc262e92ceb26aaf4b9449-1024x683.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/a7074628ae5503c045cbce2a327c2ea08459cb11-1024x683.jpg',
    ],
    faqs: [
      { q: '¿Qué tipo de pintura usan?', a: 'Pinturas premium de marcas reconocidas (PPG, Sherwin Williams). Acabados duraderos y lavables.' },
      { q: '¿Tienen protección de los muebles?', a: 'Sí. Protegemos todos los muebles con plásticos especiales y los devolvemos intactos.' },
    ],
  },
  {
    slug: 'consultoria', path: '/servicios/consultoria',
    icon: 'Lightbulb',
    title: 'Consultoría y Asesoría',
    summary: 'Te asesoramos en el diseño y planificación de tu proyecto de remodelación.',
    longDescription: '¿Tienes una idea en mente pero no sabes por dónde empezar? Nuestra consultoría te ayuda a definir estilos, materiales, presupuesto y plazos para que tu proyecto sea un éxito desde el primer día.',
    features: ['Asesoría personalizada de diseño', 'Presupuestos detallados y transparentes', 'Selección de materiales y acabados', 'Planificación de proyecto completa', 'Supervisión de obra', 'Coordinación con proveedores'],
    heroImage: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-6.jpg',
    timeline: '1 a 3 días', from: 'Consulta gratuita',
    galleryImages: [
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/a7074628ae5503c045cbce2a327c2ea08459cb11-1024x683.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-7.jpg',
      'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-6.jpg',
    ],
    faqs: [
      { q: '¿La consultoría es gratuita?', a: 'La primera consulta es sin costo. Te escuchamos y te asesoramos sin compromiso.' },
      { q: '¿Qué incluye la supervisión de obra?', a: 'Visitas periódicas para verificar calidad, avances, y resolver problemas en tiempo real.' },
    ],
  },
];

export const testimonials = [
  { name: 'María A.', initials: 'MA', location: 'Valencia, Carabobo', text: 'Reformaron mi cocina completa y quedó espectacular. Cumplieron con el presupuesto y el tiempo prometido. Muy profesionales.', rating: 5 },
  { name: 'José C.', initials: 'JC', location: 'San Diego, Carabobo', text: 'El equipo de ReformaT transformó nuestro baño por completo. Excelente calidad de materiales y acabados impecables.', rating: 5 },
  { name: 'Luis R.', initials: 'LR', location: 'Valencia, Carabobo', text: 'Contraté para reparar la instalación eléctrica de mi local. Rápidos, limpios y con precio justo.', rating: 5 },
  { name: 'Carmen D.', initials: 'CD', location: 'San Diego, Carabobo', text: 'Pedí presupuesto para remodelar mi baño y no me defraudaron. El resultado superó mis expectativas.', rating: 5 },
  { name: 'Pedro G.', initials: 'PG', location: 'Valencia, Carabobo', text: 'Hicieron la reforma integral de mi vivienda y el resultado es increíble. Parecía otra casa. 100% recomendados.', rating: 5 },
  { name: 'Ana M.', initials: 'AM', location: 'Guacara, Carabobo', text: 'Instalaron porcelanato en toda mi casa. Acabados perfectos, sin manchas y con un detalle impresionante.', rating: 5 },
];

export const processSteps = [
  { num: 1, title: 'Evaluación Inicial', desc: 'Contactamos, escuchamos tus ideas y visitamos el espacio.', icon: '🔍' },
  { num: 2, title: 'Diagnóstico y Propuesta', desc: 'Analizamos condiciones e identificamos necesidades.', icon: '📋' },
  { num: 3, title: 'Presupuesto Detallado', desc: 'Recibes presupuesto con desglose de materiales, mano de obra y cronograma.', icon: '💰' },
  { num: 4, title: 'Planificación', desc: 'Organizamos fechas, equipos y materiales.', icon: '📅' },
  { num: 5, title: 'Ejecución', desc: 'Trabajo con precisión, limpieza y comunicación constante.', icon: '🔨' },
  { num: 6, title: 'Revisión Final', desc: 'Verificamos cada detalle y entregamos tu espacio transformado.', icon: '✨' },
];

export const faqGeneral = [
  { q: '¿Qué tipo de reformas realizan?', a: 'Remodelaciones de cocinas, baños, servicios eléctricos, fontanería, pisos, pintura y reformas integrales. También negocios y locales comerciales.' },
  { q: '¿Atienden reformas pequeñas o solo grandes?', a: 'Todo tipo de proyectos, desde pequeñas reparaciones hasta reformas integrales.' },
  { q: '¿Trabajan solo en San Diego y Valencia?', a: 'Foco en San Diego y Valencia, pero atendemos en toda la zona metropolitana de Carabobo.' },
  { q: '¿Ofrecen presupuesto gratuito?', a: 'Sí, sin compromiso. Presupuesto detallado con desglose transparente.' },
  { q: '¿Cuánto tiempo tarda una reforma?', a: 'Parciales: 2-3 semanas. Integrales: 1 a 3 meses. Te damos cronograma claro al inicio.' },
  { q: '¿Puedo ver ejemplos de trabajos?', a: 'Sí. Solicita fotos por WhatsApp o visítanos para ver portafolio con antes y después.' },
  { q: '¿Qué incluye el presupuesto?', a: 'Mano de obra, materiales, desglose por partida y cronograma. Sin sorpresas.' },
  { q: '¿Dan garantía en los trabajos?', a: 'Sí. Todos nuestros trabajos tienen garantía de calidad y post-venta.' },
];

export const galleryImages = [
  { src: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/a7074628ae5503c045cbce2a327c2ea08459cb11-1024x683.jpg', alt: 'Remodelación integral', category: 'todos' },
  { src: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/af78d08c764a5acd9a01ea460f3ceb209a99bdac-1024x683.jpg', alt: 'Cocina moderna', category: 'cocinas' },
  { src: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/4f9e75a852947810e2fc262e92ceb26aaf4b9449-1024x683.jpg', alt: 'Baño remodelado', category: 'banos' },
  { src: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/c11d4a42c2df886466dc228fe305556c5a1c7dce-1024x683.jpg', alt: 'Trabajos eléctricos', category: 'electricos' },
  { src: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-6.jpg', alt: 'Remodelación vivienda', category: 'todos' },
  { src: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-7.jpg', alt: 'Acabados premium', category: 'todos' },
];

export const stats = [
  { value: siteConfig.years, label: 'Años de Experiencia', icon: 'award' },
  { value: siteConfig.projects, label: 'Proyectos Completados', icon: 'building' },
  { value: '30+', label: 'Profesionales', icon: 'users' },
];
