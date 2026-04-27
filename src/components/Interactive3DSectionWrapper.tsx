'use client';

import dynamic from 'next/dynamic';

const Lazy3D = dynamic(
  () => import('./Interactive3DSection'),
  {
    loading: () => (
      <div className="w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center bg-dark rounded-3xl border border-white/5">
        <div className="w-12 h-12 border-3 border-brand/30 border-t-brand rounded-full animate-spin mb-4" />
        <p className="text-sm text-white/40">Cargando modelo 3D...</p>
      </div>
    ),
    ssr: false,
  }
);

export default function Interactive3DSection() {
  return <Lazy3D />;
}
