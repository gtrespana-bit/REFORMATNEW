import { siteConfig, waLink } from '@/lib/data';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessSection from '@/components/ProcessSection';
import StatsSection from '@/components/StatsSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Interactive3DSection from '@/components/Interactive3DSectionWrapper';
import { faqGeneral } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Marquee de confianza */}
      <div className="border-y border-white/5 bg-dark-100/30 overflow-hidden py-4">
        <div className="marquee whitespace-nowrap flex gap-8 text-sm text-white/30 font-medium">
          {Array.from({ length: 2 }).map((_, setIdx) => (
            <div key={setIdx} className="flex gap-8">
              {['+20 Años de experiencia', '+150 Proyectos completados', '100% Satisfacción garantizada', 'Presupuesto gratuito', 'San Diego & Valencia, Carabobo', 'Profesionales certificados', '+20 Años de experiencia', '+150 Proyectos completados', '100% Satisfacción garantizada', 'Presupuesto gratuito', 'San Diego & Valencia, Carabobo', 'Profesionales certificados'].map((text, i) => (
                <span key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full" />{text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <StatsSection />

      <ServicesGrid />

      <BeforeAfterSection />

      <Interactive3DSection />

      <ProcessSection />

      <TestimonialsSection />

      {/* CTA Final */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-100/50" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand/5 blur-[100px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6">
            ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-gold-light">transformar</span> tu espacio?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">Presupuesto gratuito y sin compromiso. Escríbenos por WhatsApp y te respondemos hoy.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink()} target="_blank" className="btn-glow px-8 py-4 text-base font-semibold text-white rounded-xl inline-flex items-center justify-center gap-2">
              Solicitar Presupuesto <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/sobre-nosotros" className="px-8 py-4 text-base font-medium text-white/70 border border-white/15 rounded-xl hover:bg-white/5 hover:border-white/25 transition-all inline-flex items-center justify-center gap-2">Conócenos</Link>
          </div>
        </div>
      </section>

      {/* FAQ General */}
      <section className="py-20 bg-dark-100/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
            Preguntas <span className="text-brand">Frecuentes</span>
          </h2>
          <FAQSection faqs={faqGeneral} />
        </div>
      </section>
    </>
  );
}
