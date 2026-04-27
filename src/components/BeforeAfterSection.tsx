'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WP = 'https://reformat-venezuela.online/wp-content/uploads';

/**
 * NOTE: This section is commented out until Ruben provides actual
 * BEFORE photos. The current WP site only has AFTER photos, so any
 * "before/after" comparison with stock images or unrelated shots
 * would look inconsistent and confusing to visitors.
 *
 * TODO: Add real before/after pairs when available.
 */
export default function BeforeAfterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 blueprint-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">
              Antes &amp; Después
            </span>
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            La magia en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
              imágenes
            </span>
          </h2>

          {/* Placeholder until real before photos arrive */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              { label: 'Remodelación de Cocina', after: `${WP}/2025/11/4f9e75a852947810e2fc262e92ceb26aaf4b9449.jpg` },
              { label: 'Remodelación de Baño', after: `${WP}/2025/11/image-7.jpg` },
            ].map((item, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-video border border-white/10">
                <img src={item.after} alt={item.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand/70 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center px-4">
                    <p className="text-white/40 text-sm mb-2">📷 Antes</p>
                    <p className="text-white font-bold text-lg">{item.label}</p>
                    <p className="text-white/60 text-xs mt-2">Foto "antes" pendiente</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/30 text-sm mt-8">
            Sección en construcción — se agregarán fotos reales "antes" pronto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
