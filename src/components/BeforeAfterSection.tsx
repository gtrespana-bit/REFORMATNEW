'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface BeforeAfterImage {
  src: string;
  alt: string;
}

function BeforeAfterSlider({ before, after }: { before: BeforeAfterImage; after: BeforeAfterImage }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(0.5);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setSliderPos(pos);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-col-resize select-none group"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After (background) */}
      <img src={after.src} alt="Después" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPos * 100}% 0 0)`,
        }}
      >
        <img src={before.src} alt="Antes" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-20 transition-none"
        style={{ left: `${sliderPos * 100}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-4 h-4 text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 4l-4 8 4 8M16 4l4 8-4 8" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white/80 z-10">Antes</div>
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand z-10">Después</div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const comparisons = [
    {
      before: { src: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/image-6.jpg', alt: 'Antes cocina' },
      after: { src: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/af78d08c764a5acd9a01ea460f3ceb209a99bdac-1024x683.jpg', alt: 'Después cocina' },
      label: 'Remodelación de Cocina',
    },
    {
      before: { src: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/c11d4a42c2df886466dc228fe305556c5a1c7dce.jpg', alt: 'Antes baño' },
      after: { src: 'https://reformat-venezuela.online/wp-content/uploads/2025/11/4f9e75a852947810e2fc262e92ceb26aaf4b9449-1024x683.jpg', alt: 'Después baño' },
      label: 'Transformación de Baño',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">Antes & Después</span>
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            La magia en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">imágenes</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Desliza para ver la transformación. Esto es lo que hacemos.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {comparisons.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <BeforeAfterSlider before={c.before} after={c.after} />
              <h3 className="text-center mt-4 text-lg font-bold text-white/80">{c.label}</h3>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8">
          💡 Desliza horizontalmente sobre las imágenes para ver el antes y después
        </p>
      </div>
    </section>
  );
}
