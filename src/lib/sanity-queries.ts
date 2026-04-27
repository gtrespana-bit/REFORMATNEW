import { groq } from 'next-sanity'
import { client } from './sanity'

// =====================================================
// QUERIES GROQ - Sanity
// Todas las queries para obtener contenido del CMS
// =====================================================

// HERO — datos de la sección principal
export const heroQuery = groq`
  *[_type == "hero" && !(_id in path("drafts.**"))][0] {
    _id,
    badgeText,
    title,
    highlight,
    subtitle,
    ctaPrimaryText,
    ctaPrimaryLink,
    ctaSecondaryText,
    ctaSecondaryLink,
    backgroundImage {
      asset-> { url },
      alt,
      hotspot { x, y, height, width }
    },
    seoTitle,
    seoDescription
  }
`

// SERVICIOS — todos ordenados
export const servicesQuery = groq`
  *[_type == "service" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    name,
    slug,
    shortDescription,
    fullDescription,
    iconName,
    heroImage { asset-> { url } },
    features,
    order
  }
`

// SERVICIO INDIVIDUAL — por slug
export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    name,
    slug,
    shortDescription,
    fullDescription,
    iconName,
    heroImage { asset-> { url } },
    features,
    images[] { asset-> { url } },
    seoTitle,
    seoDescription
  }
`

// SERVICIOS SLUGS — para generateStaticParams
export const serviceSlugsQuery = groq`
  *[_type == "service" && defined(slug.current)] { "slug": slug.current }
`

// TESTIMONIOS
export const testimonialsQuery = groq`
  *[_type == "testimonial" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    name,
    role,
    text,
    rating,
    photo { asset-> { url } },
    order
  }
`

// PROYECTOS (Galería)
export const projectsQuery = groq`
  *[_type == "project" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    title,
    description,
    category,
    images[] {
      asset-> { url },
      caption,
      isBefore
    },
    order
  }
`

// SOBRE NOSOTROS
export const aboutQuery = groq`
  *[_type == "about"][0] {
    _id,
    title,
    highlight,
    introduction,
    image { asset-> { url } },
    paragraphs,
    values[] {
      icon,
      title,
      description
    }
  }
`

// ESTADÍSTICAS
export const statsQuery = groq`
  *[_type == "stats"][0] {
    stats[] {
      number,
      label
    }
  }
`

// =====================================================
// FETCHERS — Functions para llamar las queries
// =====================================================

export async function getHero() {
  try {
    return await client.fetch(heroQuery)
  } catch {
    return null
  }
}

export async function getServices() {
  try {
    return await client.fetch(servicesQuery, {}, { next: { revalidate: 60 } })
  } catch {
    return null
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    return await client.fetch(serviceBySlugQuery, { slug }, { next: { revalidate: 60 } })
  } catch {
    return null
  }
}

export async function getServiceSlugs() {
  try {
    return await client.fetch(serviceSlugsQuery)
  } catch {
    return []
  }
}

export async function getTestimonials() {
  try {
    return await client.fetch(testimonialsQuery, {}, { next: { revalidate: 60 } })
  } catch {
    return null
  }
}

export async function getProjects() {
  try {
    return await client.fetch(projectsQuery, {}, { next: { revalidate: 60 } })
  } catch {
    return null
  }
}

export async function getAbout() {
  try {
    return await client.fetch(aboutQuery)
  } catch {
    return null
  }
}

export async function getStats() {
  try {
    return await client.fetch(statsQuery)
  } catch {
    return null
  }
}
