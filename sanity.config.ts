import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'ReformaT CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'u3oxom3h',
  dataset: 'production',
  plugins: [deskTool()],
})
