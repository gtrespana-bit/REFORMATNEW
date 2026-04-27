import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import hero from './schemas/hero'
import service from './schemas/service'
import testimonial from './schemas/testimonial'

export const schemaTypes = [hero, service, testimonial]

export default defineConfig({
  name: 'default',
  title: 'ReformaT CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'u3oxom3h',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
