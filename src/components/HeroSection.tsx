'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, MessageCircle, Award, Star, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { waLink, siteConfig } from '@/lib/data';
import Spline from '@splinetool/react-spline';

const textCycle = ['Cocinas', 'Baños', 'Electricidad', 'Fontanería', 'Pisos', 'Pintura'];

function ParticleField() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4,
    size: 2 + Math.random() * 3,
    opacity: 0.1 + Math.random() * 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

function GradientOrbs() {
  return (
    <>
      <div className="absolute top-20 -right-48 w-[500px] h-[500px] rounded-full bg-brand/8 blur-[80px]" />
      <div className="absolute bottom-20 -left-32 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand/3 blur-[100px]" />
    </>
  );
}

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => setWordIndex(prev => (prev + 1) % textCycle.length), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <ParticleField />
      <GradientOrbs />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-brand uppercase tracking-wider">{siteConfig.address}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-6"
            >
              Transforma tus<br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-gold-light">
                <span
                  key={wordIndex}
                  className="block"
                  style={{
                    animation: 'slideUp 0.5s ease-out forwards',
                  }}
                >
                  {textCycle[wordIndex]}
                </span>
              </span>
              con expertos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/50 max-w-lg mb-8 leading-relaxed"
            >
              Más de {siteConfig.years} años transformando espacios con calidad. Presupuesto sin compromiso en San Diego, Valencia y toda Carabobo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={waLink()} target="_blank" className="btn-glow px-8 py-4 text-base font-semibold text-white rounded-xl flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />WhatsApp Directo
              </a>
              <Link href="/servicios/cocinas" className="px-8 py-4 text-base font-medium text-white/70 border border-white/15 rounded-xl hover:bg-white/5 hover:border-white/25 transition-all flex items-center justify-center gap-2 group">
                Ver Servicios <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-brand" />
                  <span className="text-3xl font-black">{siteConfig.years}+</span>
                </div>
                <span className="text-xs text-white/40">Años de experiencia</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-3xl font-black">{siteConfig.projects}+</span>
                </div>
                <span className="text-xs text-white/40">Proyectos completados</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-3xl font-black">100%</span>
                </div>
                <span className="text-xs text-white/40">Satisfacción garantizada</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-dark-100/50 backdrop-blur-sm">
              <Spline scene="https://prod.spline.design/6Wq1Y7YGcDFt8XqY/scene.splinecode" className="w-full h-[500px]" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-xl px-5 py-3 flex items-center gap-2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="text-lg">🏠</motion.div>
              <span className="text-sm font-semibold text-white">Interactivo 3D</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
