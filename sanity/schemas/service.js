// ============================================================
// SCHEMA: Servicio
// Cada servicio que ofreces (cocinas, baños, etc.)
// ============================================================
export default {
  name: 'service',
  title: '🔧 Servicios',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenido', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      description: 'Nombre del servicio (ej: "Cocinas")',
      group: 'content'
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Se genera automáticamente desde el nombre',
      options: {
        source: 'name',
        maxLength: 96,
      },
      group: 'content'
    },
    {
      name: 'shortDescription',
      title: 'Descripción Corta',
      type: 'text',
      description: 'Resumen para la página de servicios',
      group: 'content'
    },
    {
      name: 'fullDescription',
      title: 'Descripción Completa',
      type: 'markdown',
      description: 'Texto completo de la página del servicio',
      group: 'content'
    },
    {
      name: 'iconName',
      title: 'Icono (lucide)',
      type: 'string',
      description: 'Nombre del icono de lucide-react (ej: "UtensilsCrossed")',
      group: 'content'
    },
    {
      name: 'heroImage',
      title: 'Imagen Hero',
      type: 'image',
      description: 'Imagen principal del servicio',
      options: { hotspot: true },
      group: 'content'
    },
    {
      name: 'images',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'content'
    },
    {
      name: 'features',
      title: 'Características',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de características/beneficios',
      group: 'content'
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición (0 = primero)',
      group: 'content'
    },
    {
      name: 'seoTitle',
      title: 'Título SEO',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'seoDescription',
      title: 'Descripción SEO',
      type: 'text',
      group: 'seo',
    }
  ]
}
