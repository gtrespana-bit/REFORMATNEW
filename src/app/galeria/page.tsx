'use client';

import { useState } from 'react';
import { galleryImages } from '@/lib/data';

export default function GaleriaPage() {
  const [filter, setFilter] = useState('todos');
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  const categories = ['todos', ...Object.keys(galleryImages.reduce((acc: Record<string, boolean>, img) => { acc[img.category] = true; return acc; }, {}))];
  const filtered = filter === 'todos' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <>
      <section className="min-h-[40vh] flex items-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100 to-dark" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Nuestra <span className="text-brand">Galería</span></h1>
          <p className="text-lg text-white/50 max-w-2xl">Explora nuestros trabajos y proyectos realizados.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-brand text-white' : 'border border-white/10 text-white/50 hover:text-white hover:border-white/25'}`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImg(i)}
                className="relative aspect-[3/2] rounded-2xl overflow-hidden cursor-pointer group border border-white/5 hover:border-brand/20 transition-all"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img src={filtered[selectedImg]?.src} alt={filtered[selectedImg]?.alt} className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl" onClick={e => e.stopPropagation()} />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-center">{filtered[selectedImg]?.alt}</p>
        </div>
      )}
    </>
  );
}
