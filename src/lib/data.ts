// ============================================================
// Datos por defecto (fallback) — Se usan cuando Sanity no responde
// o mientras metes contenido en el CMS
// ============================================================

export const fallbackData = {
  hero: {
    badgeText: 'Remodelaciones Premium en Venezuela',
    title: 'Transformamos',
    highlight: 'Espacios',
    subtitle: 'Más de 15 años convirtiendo casas en hogares soñados. Diseñamos, construimos y remodelamos con calidad que se nota.',
    ctaPrimary: { text: 'Ver Nuestros Proyectos', href: '/proceso' },
    ctaSecondary: { text: 'Contáctanos', href: '/contacto' },
  },
  services: [
    {
      _id: 'cocinas',
      name: 'Cocinas',
      slug: { current: 'cocinas' },
      shortDescription: 'Diseño y remodelación de cocinas modernas y funcionales.',
      fullDescription: 'Transformamos tu cocina en el corazón de tu hogar.',
      iconName: 'UtensilsCrossed',
      features: ['Diseño 3D personalizado', 'Gabinetes a medida', 'Encimeras premium', 'Iluminación LED integrada'],
      order: 1,
    },
    {
      _id: 'banos',
      name: 'Baños',
      slug: { current: 'banos' },
      shortDescription: 'Renovamos tu baño con acabados de primera.',
      fullDescription: 'Tu baño merece ser un santuario personal.',
      iconName: 'Bath',
      features: ['Duchas a ras de suelo', 'Vanities personalizados', 'Porcelanatos premium'],
      order: 2,
    },
    {
      _id: 'electricos',
      name: 'Instalaciones Eléctricas',
      slug: { current: 'electricos' },
      shortDescription: 'Instalaciones eléctricas seguras y modernas.',
      fullDescription: 'Electricidad segura y eficiente.',
      iconName: 'Zap',
      features: ['Cuadro eléctrico nuevo', 'Iluminación LED', 'Domótica'],
      order: 3,
    },
    {
      _id: 'fontaneria',
      name: 'Fontanería',
      slug: { current: 'fontaneria' },
      shortDescription: 'Soluciones completas de fontanería.',
      fullDescription: 'Fontanería profesional.',
      iconName: 'Wrench',
      features: ['Tuberías de cobre y PEX', 'Sistemas de filtrado'],
      order: 4,
    },
    {
      _id: 'integral',
      name: 'Remodelación Integral',
      slug: { current: 'integral' },
      shortDescription: 'Transformación completa de inicio a fin.',
      fullDescription: 'Nos encargamos de absolutamente todo.',
      iconName: 'Building2',
      features: ['Diseño integral', 'Todos los oficios', 'Llave en mano'],
      order: 5,
    },
    {
      _id: 'pisos',
      name: 'Pisos y Revestimientos',
      slug: { current: 'pisos' },
      shortDescription: 'Instalación profesional de pisos.',
      fullDescription: 'El piso define el carácter del espacio.',
      iconName: 'Layers',
      features: ['Porcelanatos', 'Vinilos', 'Microcemento'],
      order: 6,
    },
    {
      _id: 'pintura',
      name: 'Pintura',
      slug: { current: 'pintura' },
      shortDescription: 'Pintura con acabados profesionales.',
      fullDescription: 'Pintura profesional.',
      iconName: 'Paintbrush',
      features: ['Pintura premium', 'Estuco', 'Lacado'],
      order: 7,
    },
    {
      _id: 'consultoria',
      name: 'Consultoría de Diseño',
      slug: { current: 'consultoria' },
      shortDescription: 'Asesoría profesional de diseño.',
      fullDescription: 'Te ayudamos con todo.',
      iconName: 'Palette',
      features: ['Mood board', 'Renders 3D', 'Plan de acción'],
      order: 8,
    },
  ],
  testimonials: [
    { name: 'María G.', role: 'Caracas', text: 'Excelente trabajo en nuestra cocina.', rating: 5 },
    { name: 'Carlos M.', role: 'Valencia', text: 'Remodelación integral perfecta.', rating: 5 },
    { name: 'Ana R.', role: 'Maracaibo', text: 'El baño quedó espectacular.', rating: 5 },
  ],
  stats: {
    stats: [
      { number: '15+', label: 'Años de Experiencia' },
      { number: '500+', label: 'Proyectos Completados' },
      { number: '350+', label: 'Clientes Satisfechos' },
    ],
  },
}

export default fallbackData
