'use client';

import { motion, useInView } from 'framer-motion';
import { Award, Building, Users, Star, CheckCircle, Clock } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

function Counter({ target, duration = 2000, suffix = '' }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16.67);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16.67);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { icon: Clock, value: 20, label: 'Años de Experiencia', suffix: '+', color: 'from-brand to-brand-light' },
  { icon: CheckCircle, value: 500, label: 'Proyectos Completados', suffix: '+', color: 'from-brand-light to-gold' },
  { icon: Users, value: 30, label: 'Profesionales', suffix: '+', color: 'from-gold to-brand' },
  { icon: Star, value: 100, label: 'Satisfacción', suffix: '%', color: 'from-yellow-400 to-brand' },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark-100 to-dark" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-brand/5 blur-[80px]" />
        <div className="absolute top-1/2 right-0 w-[250px] h-[250px] rounded-full bg-gold/5 blur-[60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Resultados que <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-gold-light">hablan</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">Números que respaldan nuestra trayectoria.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 text-center group hover:border-brand/20 transition-all duration-500"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-white/40 font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
