'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';

const iconMap: Record<string, string> = {
  UtensilsCrossed: '🍽️', Bath: '🛁', Zap: '⚡', Wrench: '🔧',
  Building: '🏢', Layers: '📐', Paintbrush: '🎨', Lightbulb: '💡',
};

export default function ServicesGrid() {
  const [hovered, setHovered] = useState<string | null>(null);

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } } };

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">Nuestros Servicios</span>
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            Soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">completas</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Cada servicio diseñado para transformar tu espacio con la máxima calidad.</p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {services.map((s) => (
            <Link key={s.slug} href={s.path} onMouseEnter={() => setHovered(s.slug)} onMouseLeave={() => setHovered(null)}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${hovered === s.slug ? 'border-brand/30 shadow-2xl shadow-brand/10 scale-[1.02]' : 'border-white/5 hover:border-white/10'} border bg-dark-100/50 backdrop-blur-sm`}>
              <div className="relative h-56 overflow-hidden">
                <img src={s.heroImage} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110" loading="lazy" />
              </div>
              <div className="relative p-6 bg-gradient-to-b from-dark-100/95 to-dark-100/90 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{iconMap[s.icon] || '🔧'}</span>
                  <h3 className="text-lg font-black group-hover:text-brand transition-colors">{s.title}</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-3">{s.shortDesc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-white/30 font-semibold uppercase tracking-wider">{s.timeline}</span>
                  <span className="text-sm text-brand font-bold group-hover:text-brand-light transition-colors">{s.priceFrom}</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm text-brand font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  Ver más <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
