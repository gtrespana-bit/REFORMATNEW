'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Phone, MessageCircle, Mail, Send } from 'lucide-react';
import { siteConfig, waLink } from '@/lib/data';

export default function ContactoPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Redirect to WhatsApp with form data
    const msg = `Hola ReformaT! Soy ${formData.name}. ${formData.message}`;
    window.open(waLink(msg), '_blank');
  };

  return (
    <>
      <section className="min-h-[40vh] flex items-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100 to-dark" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Contacta con <span className="text-brand">nosotros</span></h1>
          <p className="text-lg text-white/50 max-w-2xl">Presupuesto gratuito y sin compromiso. Estamos aquí para ayudarte.</p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="glass rounded-2xl p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand mt-0.5" />
                    <div>
                      <p className="font-medium">{siteConfig.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand mt-0.5" />
                    <div>
                      <a href={`tel:${siteConfig.phoneRaw}`} className="text-white/70 hover:text-white">{siteConfig.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand mt-0.5" />
                    <div>
                      <p className="text-white/70">{siteConfig.schedule}</p>
                    </div>
                  </div>
                </div>
              </div>

              <a href={waLink('Hola ReformaT!')} target="_blank" className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <div>
                  <p className="font-medium">WhatsApp Directo</p>
                  <p className="text-sm text-green-400/60">Respuesta inmediata</p>
                </div>
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2 glass rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-4">Mensaje enviado</h3>
                  <p className="text-white/50 mb-6">Te hemos redirigido a WhatsApp. Si no se abrió, haz clic aquí:</p>
                  <a href={waLink('Hola ReformaT!')} target="_blank" className="btn-glow px-8 py-4 text-white rounded-xl inline-flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />Abrir WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-white/50 mb-2 block">Nombre completo</label>
                      <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-xl text-white focus:border-brand focus:outline-none transition-colors" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="text-sm text-white/50 mb-2 block">Email</label>
                      <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-xl text-white focus:border-brand focus:outline-none transition-colors" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-white/50 mb-2 block">Teléfono</label>
                      <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-xl text-white focus:border-brand focus:outline-none transition-colors" placeholder="+58..." />
                    </div>
                    <div>
                      <label className="text-sm text-white/50 mb-2 block">Servicio</label>
                      <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-xl text-white focus:border-brand focus:outline-none transition-colors">
                        <option value="">Seleccionar servicio</option>
                        <option value="cocinas">Remodelación de Cocinas</option>
                        <option value="banos">Remodelación de Baños</option>
                        <option value="electricos">Servicios Eléctricos</option>
                        <option value="fontaneria">Fontanería</option>
                        <option value="integral">Remodelación Integral</option>
                        <option value="pisos">Pisos y Revestimientos</option>
                        <option value="pintura">Pintura y Acabados</option>
                        <option value="consultoria">Consultoría</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-white/50 mb-2 block">Mensaje</label>
                    <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-xl text-white focus:border-brand focus:outline-none transition-colors resize-none" placeholder="Cuéntanos sobre tu proyecto..." />
                  </div>
                  <button type="submit" className="btn-glow px-8 py-4 text-white rounded-xl inline-flex items-center gap-2 w-full justify-center">
                    <Send className="w-4 h-4" />Enviar y Contactar por WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
