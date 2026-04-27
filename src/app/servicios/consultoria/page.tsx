import { Metadata } from 'next';
import { services, siteConfig } from '@/lib/data';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = { title: 'Consultoría y Asesoría', description: 'Asesoramiento profesional para proyectos de remodelación en Carabobo.' };

export default function ConsultoriaPage() {
  const svc = services.find(s => s.slug === 'consultoria')!;
  const other = services.filter(s => s.slug !== 'consultoria').slice(0, 3);

  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={svc.heroImage} alt={svc.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Volver al inicio</Link>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">Consultoría y <span className="text-brand">Asesoría</span></h1>
          <p className="text-lg text-white/50 max-w-xl">Te guiamos en cada paso de tu proyecto de remodelación para que sea un éxito.</p>
          <div className="flex items-center gap-4 mt-6">
            <div className="glass rounded-xl px-4 py-2 text-sm text-white/60 flex items-center gap-2"><Clock className="w-4 h-4" />{svc.timeline}</div>
            <div className="glass rounded-xl px-4 py-2 text-sm text-white/60 flex items-center gap-2"><MapPin className="w-4 h-4" />{siteConfig.address}</div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-6">Expertos que <span className="text-brand">te guían</span></h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{svc.longDescription}</p>
              <p className="text-white/60 text-lg leading-relaxed mb-8">Más de 20 años en el sector nos permiten ofrecerte un asesoramiento basado en la experiencia real, no en teorías. Cada consejo es práctico y orientado a resultados.</p>
              <a href={`https://wa.me/${siteConfig.phoneWa}?text=Hola! Me interesa una consultoría.`} target="_blank" className="btn-glow px-8 py-4 text-base font-semibold text-white rounded-xl inline-flex items-center gap-2"><MessageCircle className="w-5 h-5" />Consulta Gratuita</a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Servicios incluidos</h3>
              <ul className="space-y-4">
                {svc.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" /><span className="text-white/70">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-dark-100/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black mb-12 text-center">¿Cómo funciona?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass rounded-2xl p-8">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-3">1. Nos Contactas</h3>
              <p className="text-sm text-white/50">Escríbenos por WhatsApp y cuéntanos tu idea.</p>
            </div>
            <div className="text-center glass rounded-2xl p-8">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">2. Evaluamos</h3>
              <p className="text-sm text-white/50">Visitamos el espacio y analizamos necesidades.</p>
            </div>
            <div className="text-center glass rounded-2xl p-8">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3">3. Te Asesoramos</h3>
              <p className="text-sm text-white/50">Te damos un plan detallado con opciones y presupuesto.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black mb-12 text-center">Preguntas Frecuentes</h2>
          <FAQSection faqs={svc.faqs} />
        </div>
      </section>

      <section className="py-16 bg-dark-100/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black mb-8">También ofrecemos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {other.map((s: typeof services[0]) => (
              <Link key={s.slug} href={s.path} className="group bg-dark border border-white/5 rounded-xl p-6 hover:border-brand/30 transition-all">
                <h3 className="text-lg font-bold mb-2 group-hover:text-brand transition-colors">{s.title}</h3>
                <p className="text-sm text-white/50">{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
