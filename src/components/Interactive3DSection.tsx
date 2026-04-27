'use client';

import Spline from '@splinetool/react-spline';
function CubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 16-9 5-9-5"/><path d="m21 8-9 5-9-5"/><path d="M12 3 3 8l9 5 9-5Z"/></svg>
  );
}
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Interactive3DSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100/50 to-dark" />
      <div className="noise" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
            <CubeIcon />
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">Vista 3D Interactiva</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Explora tu futuro <span className="text-brand">diseño</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Interactúa con nuestra maqueta 3D. Rota, haz zoom y descubre cada detalle.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-dark-100/30 shadow-2xl shadow-brand/10">
          <Spline
            scene="https://prod.spline.design/6Wq1Y7YGcDFt8XqY/scene.splinecode"
            className="w-full h-[500px] md:h-[600px]"
          />
        </div>

        <p className="text-center mt-8 text-white/30 text-sm">
          💡 Arrastra para rotar • Scroll para zoom
        </p>
      </motion.div>
    </section>
  );
}
