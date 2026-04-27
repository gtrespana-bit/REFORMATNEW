import type { Metadata } from 'next';
import { siteConfig } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: { default: `${siteConfig.name} | Remodelaciones Premium en Venezuela`, template: '%s | ReformaT Venezuela' },
  description: 'Expertos en remodelación de cocinas, baños, electricidad, fontanería y reformas integrales en San Diego, Valencia y Carabobo. +20 años de experiencia.',
  openGraph: {
    title: `${siteConfig.name} | Remodelaciones Premium`,
    description: 'Transformamos espacios con calidad. Presupuesto gratuito.',
    type: 'website',
    locale: 'es_VE',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.ico' },
  keywords: ['remodelación', 'reformas', 'cocinas', 'baños', 'Carabobo', 'Valencia', 'Venezuela', 'fontanería', 'electricidad', 'pintura', 'pisos'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans bg-dark text-white antialiased overflow-x-hidden">
        <Navbar />
        <Providers>
          {children}
        </Providers>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
