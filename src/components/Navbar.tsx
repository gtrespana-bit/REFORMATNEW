'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig, waLink, services } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const serviceLinks = services.slice(0, 7);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-dark/80 border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="text-xl font-black tracking-tight group">
              <span className="text-brand group-hover:text-brand-light transition-colors">Reforma</span><span>T</span>
              <span className="ml-2 text-[10px] font-medium text-white/30 uppercase tracking-widest hidden sm:inline-block">Venezuela</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${pathname === '/' ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>Inicio</Link>

              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg ${pathname?.startsWith('/servicios') ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
                  Servicios <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className="absolute top-full left-0 w-72 h-3" />
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-72 backdrop-blur-xl bg-dark-100/95 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden p-2 mt-[-1px]">
                    {serviceLinks.map((s) => (
                      <Link key={s.slug} href={s.path}
                        className={`flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all ${pathname === s.path ? 'bg-brand/10 text-brand' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
                        <span className="text-lg">{s.icon === 'Building' ? '🏢' : s.icon === 'Layers' ? '📐' : s.icon === 'Paintbrush' ? '🎨' : s.icon === 'Lightbulb' ? '💡' : s.icon === 'UtensilsCrossed' ? '🍽️' : s.icon === 'Bath' ? '🛁' : s.icon === 'Zap' ? '⚡' : s.icon === 'Wrench' ? '🔧' : null}</span>
                        <div>
                          <div className="font-medium">{s.title}</div>
                          <div className="text-xs text-white/30">{s.timeline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              </div>

              <Link href="/proceso" className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${pathname === '/proceso' ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>Proceso</Link>
              <Link href="/galeria" className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${pathname === '/galeria' ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>Galería</Link>
              <Link href="/sobre-nosotros" className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${pathname === '/sobre-nosotros' ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>Nosotros</Link>
              <Link href="/contacto" className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${pathname === '/contacto' ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>Contacto</Link>

              <a href={waLink('Hola ReformaT! Quiero un presupuesto gratuito.')} target="_blank"
                className="ml-4 px-5 py-2.5 text-sm font-semibold text-white bg-brand rounded-xl hover:bg-brand-light transition-all hover:shadow-lg hover:shadow-brand/25">
                Presupuesto Gratis
              </a>
            </div>

            <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-white/70 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 lg:hidden ${open ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 pointer-events-none'}`} onClick={() => setOpen(false)} />

      {/* Mobile drawer */}
      <div className={`fixed top-0 right-0 bottom-0 w-80 bg-dark-100/95 backdrop-blur-xl border-l border-white/10 z-50 transform transition-transform duration-500 ease-out lg:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Link href="/" onClick={() => setOpen(false)} className="text-lg font-black">
            <span className="text-brand">Reforma</span>T
          </Link>
          <button onClick={() => setOpen(false)} className="p-2 text-white/70 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-1 overflow-y-auto h-full pb-40">
          <Link href="/" onClick={() => setOpen(false)} className={`block px-4 py-3 rounded-xl transition-all ${pathname === '/' ? 'bg-white/5 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}>Inicio</Link>

          <div>
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
              Servicios <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 space-y-1">
                {serviceLinks.map((s) => (
                  <Link key={s.slug} href={s.path} onClick={() => setOpen(false)}
                    className={`block px-4 py-2.5 text-sm rounded-xl transition-all ${pathname === s.path ? 'text-brand bg-brand/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/proceso" onClick={() => setOpen(false)} className={`block px-4 py-3 rounded-xl transition-all ${pathname === '/proceso' ? 'bg-white/5 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}>Proceso</Link>
          <Link href="/galeria" onClick={() => setOpen(false)} className={`block px-4 py-3 rounded-xl transition-all ${pathname === '/galeria' ? 'bg-white/5 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}>Galería</Link>
          <Link href="/sobre-nosotros" onClick={() => setOpen(false)} className={`block px-4 py-3 rounded-xl transition-all ${pathname === '/sobre-nosotros' ? 'bg-white/5 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}>Nosotros</Link>
          <Link href="/contacto" onClick={() => setOpen(false)} className={`block px-4 py-3 rounded-xl transition-all ${pathname === '/contacto' ? 'bg-white/5 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}>Contacto</Link>

          <div className="pt-4 space-y-2 px-4">
            <Link href="/contacto" onClick={() => setOpen(false)} className="block text-center px-5 py-3 text-sm font-semibold text-white bg-brand rounded-xl hover:bg-brand-light transition-colors">
              Presupuesto Gratis
            </Link>
            <a href={waLink('Hola ReformaT!')} target="_blank" className="block text-center w-full px-5 py-3 text-sm font-medium text-green-400 border border-green-400/30 rounded-xl hover:bg-green-400/10 transition-colors">
              💬 WhatsApp Directo
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-4 right-4 p-4 glass rounded-xl">
          <p className="text-xs text-white/40 mb-1">Llámanos</p>
          <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm font-semibold text-white">{siteConfig.phone}</a>
          <p className="text-xs text-white/30 mt-1">{siteConfig.schedule}</p>
        </div>
      </div>
    </>
  );
}
