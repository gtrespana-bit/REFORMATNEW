// ============================================================
// SCHEMA: Hero - La primera sección que ven los visitantes
// ============================================================
export default {
  name: 'hero',
  title: '🏠 Hero (Sección Principal)',
  type: 'document',
  groups: [
    { name: 'content', title: '📝 Contenido', default: true },
    { name: 'images', title: '🖼️ Imágenes' },
    { name: 'seo', title: '🔍 SEO' },
  ],
  fields: [
    {
      name: 'badgeText',
      title: 'Badge (texto superior)',
      type: 'string',
      description: 'Ej: "Remodelaciones Premium en Venezuela"',
      group: 'content',
    },
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      group: 'content',
    },
    {
      name: 'highlight',
      title: 'Palabra Destacada',
      type: 'string',
      description: 'La palabra que aparece en color brand (Ej: "Espacios")',
      group: 'content',
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 3,
      description: 'Descripción debajo del título',
      group: 'content',
    },
    {
      name: 'ctaPrimary',
      title: '🔘 Botón Principal',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto', type: 'string' },
        { name: 'href', title: 'Enlace', type: 'string' },
      ],
      group: 'content',
    },
    {
      name: 'ctaSecondary',
      title: '🔘 Botón Secundario',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto', type: 'string' },
        { name: 'href', title: 'Enlace', type: 'string' },
      ],
      group: 'content',
    },
    {
      name: 'backgroundImage',
      title: 'Imagen de Fondo',
      type: 'image',
      description: 'La imagen de fondo del hero (1920x1080 recomendado)',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
      group: 'images',
    },
    {
      name: 'seoTitle',
      title: 'Título SEO (etiqueta del navegador)',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'seoDescription',
      title: 'Descripción SEO (Google)',
      type: 'text',
      rows: 2,
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage',
    },
  },
}
