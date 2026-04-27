// ============================================================
// Configuración central — datos fallback si Sanity no responde
// ============================================================

export const waPhone = '+584141234567'

export const waLink = (premsg = 'Hola, quiero información sobre sus servicios de remodelación') =>
  `https://wa.me/${waPhone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(premsg)}`

export const siteConfig = {
  name: 'Reformat Venezuela',
  tagline: 'Remodelaciones Premium',
  address: 'Venezuela',
  phone: '+58 414 123 4567',
  phoneRaw: '+584141234567',
  phoneWa: '+584141234567',
  email: 'contacto@reformat.com',
  whatsapp: waPhone,
  schedule: 'Lun - Vie: 8am - 5pm | Sáb: 8am - 1pm',
  url: 'https://reformat-venezuela.vercel.app',
  years: '15',
  projects: '500',
}

export const services = [
  {
    id: 'cocinas',
    slug: 'cocinas',
    path: '/servicios/cocinas',
    title: 'Cocinas',
    name: 'Cocinas',
    shortDescription: 'Diseño y remodelación de cocinas modernas y funcionales adaptadas a tu estilo de vida.',
    shortDesc: 'Diseño y remodelación de cocinas modernas y funcionales.',
    fullDescription: 'Transformamos tu cocina en el corazón de tu hogar. Nuestro equipo de diseñadores y constructores trabaja contigo para crear espacios que combinan funcionalidad, estética y calidad premium.',
    icon: 'UtensilsCrossed',
    iconName: 'UtensilsCrossed',
    features: ['Diseño 3D personalizado', 'Gabinetes a medida', 'Encimeras premium', 'Iluminación LED integrada', 'Plomería y electricidad incluidos', 'Garantía de 5 años'],
    priceFrom: 'Consultar',
    order: 1,
  },
  {
    id: 'banos',
    slug: 'banos',
    path: '/servicios/banos',
    title: 'Baños',
    name: 'Baños',
    shortDescription: 'Renovamos tu baño con acabados de primera y diseño funcional para tu día a día.',
    shortDesc: 'Renovamos tu baño con acabados de primera.',
    fullDescription: 'Tu baño merece ser un santuario personal. Nos encargamos de todo: desde el diseño hasta los acabados finales.',
    icon: 'Bath',
    iconName: 'Bath',
    features: ['Duchas a ras de suelo', 'Bañeras exentas y jacuzzis', 'Vanities personalizados', 'Porcelanatos premium'],
    priceFrom: 'Consultar',
    order: 2,
  },
  {
    id: 'electricos',
    slug: 'electricos',
    path: '/servicios/electricos',
    title: 'Instalaciones Eléctricas',
    name: 'Instalaciones Eléctricas',
    shortDescription: 'Instalaciones eléctricas seguras y modernas para tu hogar o negocio.',
    shortDesc: 'Instalaciones eléctricas seguras y modernas.',
    fullDescription: 'La electricidad es la columna vertebral de cualquier remodelación.',
    icon: 'Zap',
    iconName: 'Zap',
    features: ['Cuadro eléctrico nuevo', 'Iluminación LED y empotrada', 'Tomas adicionales', 'Domótica'],
    priceFrom: 'Consultar',
    order: 3,
  },
  {
    id: 'fontaneria',
    slug: 'fontaneria',
    path: '/servicios/fontaneria',
    title: 'Fontanería',
    name: 'Fontanería',
    shortDescription: 'Soluciones completas de fontanería con materiales de primera calidad.',
    shortDesc: 'Soluciones completas de fontanería.',
    fullDescription: 'Fontanería profesional para cualquier proyecto de remodelación.',
    icon: 'Wrench',
    iconName: 'Wrench',
    features: ['Tuberías de cobre y PEX', 'Instalación de sanitarios', 'Sistemas de filtrado'],
    priceFrom: 'Consultar',
    order: 4,
  },
  {
    id: 'integral',
    slug: 'integral',
    path: '/servicios/integral',
    title: 'Remodelación Integral',
    name: 'Remodelación Integral',
    shortDescription: 'Transformación completa de tu vivienda o local de inicio a fin.',
    shortDesc: 'Transformación completa de inicio a fin.',
    fullDescription: '¿Necesitas renovar tu vivienda por completo? Nos encargamos de absolutamente todo.',
    icon: 'Building2',
    iconName: 'Building2',
    features: ['Diseño integral personalizado', 'Todos los oficios coordinados', 'Gestión de permisos', 'Llave en mano'],
    priceFrom: 'Consultar',
    order: 5,
  },
  {
    id: 'pisos',
    slug: 'pisos',
    path: '/servicios/pisos',
    title: 'Pisos y Revestimientos',
    name: 'Pisos y Revestimientos',
    shortDescription: 'Instalación profesional de pisos, porcelanatos, cerámicas y más.',
    shortDesc: 'Instalación profesional de pisos.',
    fullDescription: 'El piso define el carácter de cualquier espacio.',
    icon: 'Layers',
    iconName: 'Layers',
    features: ['Porcelanatos de gran formato', 'Cerámicas decorativas', 'Vinilo click', 'Microcemento'],
    priceFrom: 'Consultar',
    order: 6,
  },
  {
    id: 'pintura',
    slug: 'pintura',
    path: '/servicios/pintura',
    title: 'Pintura',
    name: 'Pintura',
    shortDescription: 'Pintura interior y exterior con acabados profesionales y limpios.',
    shortDesc: 'Pintura con acabados profesionales.',
    fullDescription: 'El cambio más visible y económico para transformar un espacio.',
    icon: 'Paintbrush',
    iconName: 'Paintbrush',
    features: ['Pintura plástica premium', 'Estuco y texturas', 'Microcemento decorativo', 'Lacado'],
    priceFrom: 'Consultar',
    order: 7,
  },
  {
    id: 'consultoria',
    slug: 'consultoria',
    path: '/servicios/consultoria',
    title: 'Consultoría de Diseño',
    name: 'Consultoría de Diseño',
    shortDescription: 'Asesoría profesional de diseño de interiores para tu proyecto.',
    shortDesc: 'Asesoría profesional de diseño.',
    fullDescription: '¿No sabes por dónde empezar? Nuestra consultoría te da la dirección.',
    icon: 'Palette',
    iconName: 'Palette',
    features: ['Mood board personalizado', 'Renders 3D fotorrealistas', 'Selección de materiales', 'Plan de acción'],
    priceFrom: 'Consultar',
    order: 8,
  },
]

export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&q=80', alt: 'Cocina moderna', category: 'Cocina' },
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&q=80', alt: 'Baño premium', category: 'Baño' },
  { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&q=80', alt: 'Sala remodelada', category: 'Integral' },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop&q=80', alt: 'Baño minimalista', category: 'Baño' },
  { src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop&q=80', alt: 'Cocina gourmet', category: 'Cocina' },
  { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop&q=80', alt: 'Pisos de porcelanato', category: 'Pisos' },
  { src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop&q=80', alt: 'Pintura interior', category: 'Pintura' },
  { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop&q=80', alt: 'Espacio moderno', category: 'Integral' },
]

export const processSteps = [
  { num: 1, title: 'Contacto Inicial', desc: 'Cuéntanos tu idea por WhatsApp o formulario', icon: 'MessageCircle' },
  { num: 2, title: 'Visita Técnica', desc: 'Visitamos tu espacio y tomamos medidas', icon: 'Ruler' },
  { num: 3, title: 'Diseño y Presupuesto', desc: 'Creamos el diseño y presupuesto detallado', icon: 'Palette' },
  { num: 4, title: 'Aprobación', desc: 'Revisas, ajustamos y aprobamos juntos', icon: 'CheckCircle' },
  { num: 5, title: 'Ejecución', desc: 'Nuestro equipo ejecuta la obra con calidad', icon: 'Hammer' },
  { num: 6, title: 'Entrega', desc: 'Limpieza final y entrega de tu espacio soñado', icon: 'Home' },
]

export const testimonials = [
  { name: 'María González', role: 'Caracas, Venezuela', text: 'Reformat transformó nuestra cocina por completo. Excelente calidad y atención.', rating: 5 },
  { name: 'Carlos Mendoza', role: 'Valencia, Venezuela', text: 'Remodelación integral perfecta. Muy profesionales y limpios.', rating: 5 },
  { name: 'Ana Rodríguez', role: 'Maracaibo, Venezuela', text: 'El baño quedó espectacular. El equipo es muy amable y profesional.', rating: 5 },
]

export const faqGeneral = [
  { q: '¿Cuánto tiempo tarda una remodelación?', a: 'Depende del proyecto. Una cocina puede tomar 2-4 semanas, un baño 1-2 semanas, y una integral 2-3 meses.' },
  { q: '¿Ofrecen garantía?', a: 'Sí, todos nuestros trabajos tienen garantía de 1 año mínimo.' },
  { q: '¿En qué zonas trabajan?', a: 'Principalmente en Carabobo y Caracas. Consultanos para otras zonas.' },
  { q: '¿El presupuesto es gratis?', a: 'Sí, el presupuesto y la primera visita son completamente gratis.' },
]

export default { siteConfig, services, galleryImages, processSteps, testimonials, faqGeneral, waLink, waPhone }
