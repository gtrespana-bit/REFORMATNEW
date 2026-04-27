import type { Metadata } from 'next';
import { siteConfig } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Providers } from './providers';
import './globals.css';

const LOCAL_KEYWORDS =
  'remodelación de cocina San Diego Valencia Carabobo,remodelación de baño Carabobo,reforma integral Venezuela,empresa de reformas San Diego Carabobo,remodelaciones Valencia Carabobo,flores de remodelación de cocinas,remodelación de baños y cocinas en Venezuela,fontanería San Diego Carabobo,servicios eléctricos Valencia Carabobo,pintura profesional Venezuela,microcemento Venezuela,porcelanato San Diego,remodelación de viviendas Carabobo,reformas integrales Venezuela,contratista de remodelación en Carabobo,mejor empresa de remodelación en San Diego,remodelar cocina precios Venezuela';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#business`,
      name: 'ReformaT Venezuela',
      alternateName: 'Reformat Venezuela',
      description:
        'Expertos en remodelación de cocinas, baños, electricidad, fontanería y reformas integrales en San Diego, Valencia y todo Carabobo. Más de 20 años de experiencia.',
      url: siteConfig.url,
      telephone: siteConfig.phoneRaw,
      image: `${siteConfig.url}/og-image.jpg`,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Diego',
        addressRegion: 'Carabobo',
        addressCountry: 'VE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 10.22,
        longitude: -68.03,
      },
      areaServed: [
        { '@type': 'City', name: 'San Diego' },
        { '@type': 'City', name: 'Valencia' },
        { '@type': 'State', name: 'Carabobo' },
        { '@type': 'Country', name: 'Venezuela' },
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 10.22, longitude: -68.03 },
        geoRadius: '100 km',
      },
      knowsAbout: [
        'Remodelación de cocinas',
        'Remodelación de baños',
        'Reformas integrales',
        'Fontanería',
        'Servicios eléctricos',
        'Pisos y revestimientos',
        'Pintura profesional',
      ],
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
      ],
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: 'ReformaT Venezuela',
      description: 'Empresa de remodelación de viviendas en San Diego y Valencia, Carabobo.',
      inLanguage: 'es',
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Remodelación de Cocinas y Baños en San Diego, Valencia — Carabobo`,
    template: '%s | ReformaT Venezuela',
  },
  description:
    'Expertos en remodelación de cocinas, baños, electricidad, fontanería y reformas integrales en San Diego y Valencia, Carabobo. +20 años de experiencia. Presupuesto gratuito.',
  openGraph: {
    title: `${siteConfig.name} | Remodelaciones Premium en Carabobo`,
    description:
      'Transformamos espacios con calidad en San Diego, Valencia y toda Carabobo. Presupuesto gratuito sin compromiso.',
    type: 'website',
    locale: 'es_VE',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${siteConfig.name} — Remodelaciones Premium en San Diego y Valencia, Carabobo` }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.ico' },
  keywords: LOCAL_KEYWORDS.split(','),
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  other: { 'google-site-verification': '' /* rellena con el de Google Search Console */ },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
