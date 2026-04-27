// ============================================================
// SCHEMA: Servicio Individual
// ============================================================
export default {
  name: 'service',
  title: '🔧 Servicios',
  type: 'document',
  groups: [
    { name: 'content', title: '📝 Contenido', default: true },
    { name: 'images', title: '🖼️ Imágenes' },
    { name: 'seo', title: '🔍 SEO' },
  ],
  fields: [
    { name: 'name', title: 'Nombre', type: 'string' },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    },
    {
      name: 'shortDescription',
      title: 'Descripción Corta (para la tarjeta)',
      type: 'text',
      rows: 2,
      group: 'content',
    },
    {
      name: 'fullDescription',
      title: 'Descripción Completa (página del servicio)',
      type: 'text',
      rows: 8,
      group: 'content',
    },
    {
      name: 'iconName',
      title: 'Nombre del Icono (lucide-react)',
      type: 'string',
      description: 'Ej: UtensilsCrossed, Bath, Wrench',
      group: 'content',
    },
    {
      name: 'heroImage',
      title: 'Imagen Hero',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
      group: 'images',
    },
    {
      name: 'galleryImages',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'caption', title: 'Descripción', type: 'string' }],
        },
      ],
      group: 'images',
    },
    {
      name: 'features',
      title: 'Características / Beneficios',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de puntos clave del servicio',
      group: 'content',
    },
    {
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: '0 = primero en la lista',
      group: 'content',
    },
    { name: 'seoTitle', title: 'Título SEO', type: 'string', group: 'seo' },
    { name: 'seoDescription', title: 'Descripción SEO', type: 'text', rows: 2, group: 'seo' },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'heroImage',
    },
  },
}
