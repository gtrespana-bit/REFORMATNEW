import { Metadata } from 'next';
import { processSteps, siteConfig } from '@/lib/data';
import Link from 'next/link';
import { Clock, MapPin, MessageCircle } from 'lucide-react';

export const metadata: Metadata = { title: 'Nuestro Proceso', description: 'Un proceso transparente de principio a fin. Así trabajamos en cada reforma.' };

export default function ProcesoPage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100 to-dark" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">Proceso</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Cómo <span className="text-brand">trabajamos</span></h1>
          <p className="text-lg text-white/50 max-w-2xl">Un proceso transparente de principio a fin. Sin sorpresas.</p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand/30 via-brand/10 to-transparent hidden sm:block" />

            {processSteps.map((step, i) => (
              <div key={step.num} className={`relative flex gap-6 md:gap-0 mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-dark-100 border-2 border-brand/30 rounded-full flex items-center justify-center text-2xl z-10 shadow-lg shadow-brand/10">
                  {['🔍','📋','💰','📅','🔨','✨'][i]}
                </div>

                <div className={`pl-24 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="text-xs font-semibold text-brand mb-1 block">Paso {step.num}</span>
                  <h3 className="text-2xl font-black mb-3">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-100/50 border-y border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">¿Quieres comenzar tu proyecto?</h2>
          <p className="text-white/50 mb-8">Escríbenos por WhatsApp.</p>
          <a href={`https://wa.me/${siteConfig.phoneWa}?text=Hola%20ReformaT!%20Quiero%20comenzar%20un%20proyecto.`} target="_blank" className="btn-glow px-8 py-4 text-base font-semibold text-white rounded-xl inline-flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />WhatsApp Directo
          </a>
        </div>
      </section>
    </>
  );
}
