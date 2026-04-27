import { Metadata } from 'next';
import { services, processSteps, faqGeneral, siteConfig } from '@/lib/data';

export const metadata: Metadata = { title: 'Sobre Nosotros', description: 'Conoce al equipo detrás de ReformaT Venezuela.' };

export default function SobrePage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100 to-dark" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">Nosotros</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Sobre <span className="text-brand">Nosotros</span></h1>
          <p className="text-lg text-white/50 max-w-2xl">Más de 20 años construyendo confianza, un espacio a la vez.</p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6">Nuestra <span className="text-brand">historia</span></h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">ReformaT Venezuela nació de la pasión por transformar espacios. Comenzamos como una pequeña empresa en España, donde ganamos experiencia y reputación. Ahora hemos traído ese conocimiento y calidad a Venezuela.</p>
              <p className="text-white/60 text-lg leading-relaxed mb-6">Nuestro equipo está formado por profesionales especializados en cada área de la remodelación: albañilería, electricidad, fontanería, carpintería, pintura y más. Trabajamos con materiales de primera calidad y garantizamos cada proyecto.</p>
              <div className="glass rounded-2xl p-6 border-l-4 border-brand">
                <p className="text-white/70 italic leading-relaxed">"Cada proyecto es una oportunidad de superar expectativas. No solo remodelamos espacios, creamos experiencias que duran toda la vida."</p>
                <p className="text-brand font-semibold mt-3">— Fundador, ReformaT Venezuela</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-brand mb-2">20+</div>
                <p className="text-white/50 text-sm">Años de Experiencia</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-brand mb-2">500+</div>
                <p className="text-white/50 text-sm">Proyectos Completados</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-brand mb-2">30+</div>
                <p className="text-white/50 text-sm">Profesionales</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-brand mb-2">100%</div>
                <p className="text-white/50 text-sm">Satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-100/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black mb-12 text-center">Nuestros <span className="text-brand">valores</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Calidad sin compromiso</h3>
              <p className="text-white/50 text-sm leading-relaxed">Usamos materiales premium y técnicas profesionales para garantizar resultados duraderos.</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Transparencia total</h3>
              <p className="text-white/50 text-sm leading-relaxed">Presupuestos detallados, comunicación constante y sin sorpresas.</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Eficiencia</h3>
              <p className="text-white/50 text-sm leading-relaxed">Cumplimos plazos y optimizamos recursos para darte el mejor resultado.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
