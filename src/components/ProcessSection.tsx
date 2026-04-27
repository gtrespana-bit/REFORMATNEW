'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { processSteps, siteConfig } from '@/lib/data';

const icons: string[] = ['🔍', '📋', '💰', '📅', '🔨', '✨'];

function StepCard({ step, index, align }: { step: typeof processSteps[0]; index: number; align: 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: align === 'left' ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative flex items-start gap-6 md:gap-0 mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Connector line */}
      <div className="absolute left-12 md:left-1/2 md:-translate-x-1/2 top-12 bottom-0 w-px bg-gradient-to-b from-brand/20 to-transparent hidden sm:block" />

      {/* Step number */}
      <div className="relative z-10 flex-shrink-0 w-24 h-24 bg-dark-100/80 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center text-4xl group-hover:border-brand/30 transition-all shadow-lg shadow-black/20">
        {icons[index]}
      </div>

      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <span className="text-xs font-semibold text-brand mb-2 block">Paso {step.num}</span>
        <h3 className="text-2xl md:text-3xl font-black mb-3">{step.title}</h3>
        <p className="text-white/50 leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      <div className="noise" />

      <motion.div style={{ y: yBg }} className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[100px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">Proceso</span>
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            Cómo <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">trabajamos</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Un proceso transparente de principio a fin. Sin sorpresas.</p>
        </motion.div>

        <div>
          {processSteps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} align={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-16">
          <Link href="/proceso" className="btn-glow px-8 py-4 text-base font-semibold text-white rounded-xl inline-flex items-center gap-2">
            Ver proceso completo <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
