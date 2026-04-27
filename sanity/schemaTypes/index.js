import { defineType, defineArrayMember } from 'sanity'

export const serviceType = defineType({
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
      type: 'text',
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
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
      group: 'content'
    },
    {
      name: 'features',
      title: 'Características',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
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
})

export const heroType = defineType({
  name: 'hero',
  title: '🏠 Hero Principal',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenido', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    {
      name: 'badgeText',
      title: 'Badge',
      type: 'string',
      description: 'Etiqueta superior (ej: "Remodelaciones Premium en Venezuela")',
      group: 'content'
    },
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      group: 'content'
    },
    {
      name: 'highlight',
      title: 'Palabra Destacada',
      type: 'string',
      description: 'Palabra en color brand (ej: "Espacios")',
      group: 'content'
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
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
      description: 'Imagen hero principal (1920x1080 recomendado)',
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
})

export const testimonialType = defineType({
  name: 'testimonial',
  title: '⭐ Testimonios',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenido', default: true },
  ],
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      group: 'content'
    },
    {
      name: 'role',
      title: 'Cargo/Ubicación',
      type: 'string',
      group: 'content'
    },
    {
      name: 'photo',
      title: 'Foto',
      type: 'image',
      description: 'Foto del cliente',
      options: { hotspot: true },
      group: 'content'
    },
    {
      name: 'text',
      title: 'Testimonio',
      type: 'text',
      rows: 4,
      group: 'content'
    },
    {
      name: 'rating',
      title: 'Valoración',
      type: 'number',
      description: '1-5 estrellas',
      initialValue: 5,
      group: 'content'
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición (0 = primero)',
      group: 'content'
    }
  ]
})

export const projectType = defineType({
  name: 'project',
  title: '📸 Proyectos (Galería)',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenido', default: true },
  ],
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      group: 'content'
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      group: 'content'
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Cocina', value: 'cocina' },
          { title: 'Baño', value: 'bano' },
          { title: 'Electricos', value: 'electricos' },
          { title: 'Fontanería', value: 'fontaneria' },
          { title: 'Integral', value: 'integral' },
          { title: 'Pisos', value: 'pisos' },
          { title: 'Pintura', value: 'pintura' },
          { title: 'Consultoría', value: 'consultoria' },
        ],
        layout: 'dropdown',
      },
      group: 'content'
    },
    {
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [defineArrayMember({ 
        type: 'image', 
        options: { hotspot: true },
        fields: [
          { name: 'caption', title: 'Caption', type: 'string' },
          { name: 'isBefore', title: '¿Es foto "antes"?', type: 'boolean' }
        ]
      })],
      group: 'content'
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición',
      group: 'content'
    }
  ]
})

export const aboutType = defineType({
  name: 'about',
  title: '👥 Sobre Nosotros',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenido', default: true },
  ],
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      group: 'content'
    },
    {
      name: 'highlight',
      title: 'Palabra Destacada',
      type: 'string',
      group: 'content'
    },
    {
      name: 'introduction',
      title: 'Introducción',
      type: 'text',
      rows: 4,
      group: 'content'
    },
    {
      name: 'image',
      title: 'Imagen Principal',
      type: 'image',
      options: { hotspot: true },
      group: 'content'
    },
    {
      name: 'paragraphs',
      title: 'Párrafos',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      group: 'content'
    },
    {
      name: 'values',
      title: 'Valores',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icono (lucide)', type: 'string' },
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'text' },
          ]
        })
      ],
      group: 'content'
    }
  ]
})

export const statsType = defineType({
  name: 'stats',
  title: '📊 Estadísticas',
  type: 'document',
  fields: [
    {
      name: 'stats',
      title: 'Estadísticas',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'number', title: 'Número', type: 'string' },
            { name: 'label', title: 'Etiqueta', type: 'string' },
          ]
        })
      ]
    }
  ]
})
