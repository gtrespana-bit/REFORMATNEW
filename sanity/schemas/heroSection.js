// ============================================================
// SCHEMA: Hero Section
// El primer bloque que ven los visitantes
// ============================================================
export default {
  name: 'heroSection',
  title: '🏠 Hero (Página Principal)',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenido', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    {
      name: 'badgeText',
      title: 'Badge Texto',
      type: 'string',
      description: 'Etiqueta superior (ej: "Remodelaciones Premium en Venezuela")',
      group: 'content'
    },
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Texto grande del hero',
      group: 'content'
    },
    {
      name: 'highlight',
      title: 'Palabra Destacada',
      type: 'string',
      description: 'Palabra en color brand (ej: "Espacios" en "Transformamos Espacios")',
      group: 'content'
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      description: 'Descripción debajo del título',
      group: 'content'
    },
    {
      name: 'ctaPrimaryText',
      title: 'Botón Principal - Texto',
      type: 'string',
      group: 'content'
    },
    {
      name: 'ctaPrimaryLink',
      title: 'Botón Principal - Enlace',
      type: 'string',
      group: 'content'
    },
    {
      name: 'ctaSecondaryText',
      title: 'Botón Secundario - Texto',
      type: 'string',
      group: 'content'
    },
    {
      name: 'ctaSecondaryLink',
      title: 'Botón Secundario - Enlace',
      type: 'string',
      group: 'content'
    },
    {
      name: 'backgroundImage',
      title: 'Imagen de Fondo',
      type: 'image',
      description: 'Imagen hero principal (recomendado: 1920x1080)',
      options: { hotspot: true },
      group: 'content'
    },
    {
      name: 'seoTitle',
      title: 'Título SEO',
      type: 'string',
      group: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'Descripción SEO',
      type: 'text',
      group: 'seo'
    }
  ]
}
