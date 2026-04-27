# 🏗️ Reformat Venezuela - Premium Remodeling Website

> Next.js 14 + Sanity CMS web application for Reformat Venezuela

## 🚀 Quick Start

```bash
cp .env.example .env.local
# Fill in SANITY_PROJECT_ID and SANITY_STUDIO_URL
npm install
npm run dev
```

## 📝 Sanity CMS Configuration

1. Create a Sanity project at https://sanity.io
2. Get your `projectId` from the dashboard
3. Add it to `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
```

## 🛠️ Deploy

- Vercel: `vercel deploy`
- Sanity Studio: `npx sanity deploy`
