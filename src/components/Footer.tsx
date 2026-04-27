import Link from 'next/link';
import { siteConfig, waLink, services } from '@/lib/data';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  const serviceLinks = services.slice(0, 4);

  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-black mb-4"><span className="text-brand">Reforma</span>T</h2>
            <p className="text-white/40 max-w-md leading-relaxed mb-4">Más de 20 años transformando espacios con calidad en San Diego, Valencia y toda la zona metropolitana de Carabobo, Venezuela.</p>
            <p className="text-white/30 text-sm">{siteConfig.schedule}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Servicios</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(s => (
                <li key={s.slug}><Link href={s.path} className="text-sm text-white/40 hover:text-brand transition-colors">{s.title}</Link></li>
              ))}
              <li><Link href="/servicios/integral" className="text-sm text-white/40 hover:text-brand transition-colors">Remodelación Integral</Link></li>
              <li><Link href="/servicios/pisos" className="text-sm text-white/40 hover:text-brand transition-colors">Pisos y Revestimientos</Link></li>
              <li><Link href="/servicios/pintura" className="text-sm text-white/40 hover:text-brand transition-colors">Pintura</Link></li>
            </ul>
          </div>

          <div><h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Empresa</h3>
            <ul className="space-y-2.5">
              <li><Link href="/sobre-nosotros" className="text-sm text-white/40 hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/proceso" className="text-sm text-white/40 hover:text-white transition-colors">Proceso</Link></li>
              <li><Link href="/galeria" className="text-sm text-white/40 hover:text-white transition-colors">Galería</Link></li>
              <li><Link href="/contacto" className="text-sm text-white/40 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-brand mt-0.5" /><a href={`tel:${siteConfig.whatsapp}`} className="text-sm text-white/40 hover:text-white">{siteConfig.phone}</a></li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-brand mt-0.5" /><span className="text-sm text-white/40">{siteConfig.address}</span></li>
              <li className="flex items-start gap-3"><Clock className="w-4 h-4 text-brand mt-0.5" /><span className="text-sm text-white/40">{siteConfig.schedule}</span></li>
            </ul>
            <a href={waLink('Hola ReformaT!')} target="_blank" className="mt-4 flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-green-400 border border-green-400/20 rounded-xl hover:bg-green-400/10 transition-colors">
              <MessageCircle className="w-4 h-4" />WhatsApp Directo
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} ReformaT Venezuela. Todos los derechos reservados.</p>
          <p className="text-xs text-white/20">Diseñado con ❤️ para transformar Venezuela</p>
        </div>
      </div>
    </footer>
  );
}
