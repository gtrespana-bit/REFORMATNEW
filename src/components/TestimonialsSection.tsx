'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { Star, Quote } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-100/30 to-dark" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">Testimonios</span>
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">clientes</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Cada proyecto es una historia de confianza.</p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={item}
              className="glass rounded-2xl p-6 group hover:border-brand/20 transition-all duration-500 hover:shadow-lg hover:shadow-brand/5 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-brand/20 mb-4 group-hover:text-brand/40 transition-colors" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-dark rounded-full flex items-center justify-center text-sm font-bold">{t.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}</div>
                <div>
                  <span className="font-semibold text-sm">{t.name}</span>
                  <span className="block text-xs text-white/40">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
