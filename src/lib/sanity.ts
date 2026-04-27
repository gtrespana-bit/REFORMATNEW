import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// @sanity/image-url v7+ doesn't export SanityImageSource; use a broad type
type SanityImageSource = string | { _ref: string } | { _type: 'image'; asset: { _ref: string } }

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'u3oxom3h'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
})

const builder = imageUrlBuilder({ projectId, dataset })

export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto('format').fit('max').quality(85)
}

// Helper: resolve image URL to string
export function imageUrl(source: SanityImageSource | undefined, width = 800, height = 600): string | undefined {
  if (!source) return undefined
  try {
    return urlFor(source).width(width).height(height).url()
  } catch {
    return undefined
  }
}
