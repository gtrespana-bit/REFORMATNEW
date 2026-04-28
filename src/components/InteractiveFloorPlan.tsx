'use client';

import { useState, useEffect, useCallback, Fragment } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';

/* ═══════════════════════════════════════════════════════════
   Plano 3D Interactivo — ReformaT Venezuela
   ✓ 4 habitaciones con muebles
   ✓ Hover + click → navegación
   ✓ OrbitControls (zoom, rotar)
   ✓ TO DISABLE: quita <InteractiveFloorPlan /> de HeroSection
   ═══════════════════════════════════════════════════════════ */

type Room = {
  id: string;
  label: string;
  emoji: string;
  color: string;
  floorColor: string;
  description: string;
  path: string;
  px: number; pz: number; sx: number; sz: number;
};

const ROOMS: Room[] = [
  {
    id: 'sala', label: 'Sala', emoji: '🛋️',
    color: '#2ECC71', floorColor: '#c8a97e',
    description: 'Reforma Integral', path: '/servicios/integral',
    px: -2.5, pz: -2.5, sx: 4.5, sz: 4,
  },
  {
    id: 'cocina', label: 'Cocina', emoji: '🍽️',
    color: '#DD183B', floorColor: '#b8956a',
    description: 'Remodelación de Cocina', path: '/servicios/cocinas',
    px: 2.5, pz: -2.5, sx: 4.5, sz: 4,
  },
  {
    id: 'bano', label: 'Baño', emoji: '🛁',
    color: '#3B8DD7', floorColor: '#d4e8f0',
    description: 'Remodelación de Baño', path: '/servicios/banos',
    px: 2.5, pz: 1.5, sx: 4.5, sz: 3,
  },
  {
    id: 'dormitorio', label: 'Dormitorio', emoji: '🛏️',
    color: '#F39C12', floorColor: '#a08060',
    description: 'Consultoría de Diseño', path: '/servicios/consultoria',
    px: -2.5, pz: 1.5, sx: 4.5, sz: 3,
  },
];

/* ── Generic Box ── */
function Box({ position, size, color, opacity = 1 }: {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  opacity?: number;
}) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} transparent={opacity < 1} opacity={opacity} />
    </mesh>
  );
}

/* ── SALA: sofá L, mesa, TV ── */
function SalaFurniture() {
  return (
    <group>
      {/* Sofa base L-Shape — seat */}
      <Box position={[-2.8, 0.25, -3.3]} size={[2.5, 0.35, 0.6]} color="#666" />
      {/* Sofa backrest */}
      <Box position={[-2.8, 0.55, -3.55]} size={[2.5, 0.5, 0.15]} color="#555" />
      {/* Sofa left armrest section */}
      <Box position={[-4.1, 0.25, -3.0]} size={[0.5, 0.35, 1.4]} color="#666" />
      <Box position={[-4.1, 0.55, -3.0]} size={[0.15, 0.5, 1.4]} color="#555" />
      {/* Coffee table */}
      <Box position={[-1.8, 0.15, -3.2]} size={[1.2, 0.06, 0.55]} color="#8B6914" />
      <Box position={[-2.2, 0.08, -3.35]} size={[0.04, 0.12, 0.04]} color="#654" />
      <Box position={[-1.4, 0.08, -3.35]} size={[0.04, 0.12, 0.04]} color="#654" />
      <Box position={[-2.2, 0.08, -3.05]} size={[0.04, 0.12, 0.04]} color="#654" />
      <Box position={[-1.4, 0.08, -3.05]} size={[0.04, 0.12, 0.04]} color="#654" />
      {/* TV stand + screen */}
      <Box position={[-0.5, 0.3, -4.2]} size={[1.8, 0.25, 0.4]} color="#333" />
      <Box position={[-0.5, 0.7, -4.35]} size={[1.4, 0.8, 0.05]} color="#1a1a1a" />
      {/* Rug */}
      <mesh position={[-2, 0.04, -3.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial color="#8B4513" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

/* ── COCINA: gabinetes, nevera, estufa, fregadero, mesa ── */
function CocinaFurniture() {
  return (
    <group>
      {/* Counter along south wall */}
      <Box position={[2.5, 0.45, -4.15]} size={[4.5, 0.85, 0.65]} color="#e8e8e0" />
      <Box position={[2.5, 0.9, -4.15]} size={[4.5, 0.06, 0.7]} color="#d0c8b8" />
      {/* Side cabinets */}
      <Box position={[4.55, 0.45, -2.8]} size={[0.65, 0.85, 2.5]} color="#e8e8e0" />
      {/* Fridge */}
      <Box position={[4.4, 0.85, -1.3]} size={[0.75, 1.7, 0.7]} color="#ccc" />
      {/* Oven / Stove */}
      <Box position={[1.5, 0.5, -4.15]} size={[0.7, 0.55, 0.6]} color="#444" />
      <Box position={[1.5, 0.92, -4.15]} size={[0.55, 0.04, 0.5]} color="#222" />
      {/* Sink */}
      <Box position={[3.2, 0.92, -4.15]} size={[0.65, 0.04, 0.5]} color="#aaa" />
      {/* Dining table */}
      <Box position={[1.2, 0.4, -2]} size={[1.6, 0.05, 0.9]} color="#a08060" />
      <Box position={[1.2, 0.18, -2]} size={[0.05, 0.32, 0.05]} color="#8B6914" />
      {/* Chairs */}
      <Box position={[1.2, 0.22, -1.35]} size={[0.45, 0.04, 0.4]} color="#8B6914" />
      <Box position={[1.2, 0.22, -2.65]} size={[0.45, 0.04, 0.4]} color="#8B6914" />
      <Box position={[0.45, 0.22, -2]} size={[0.45, 0.04, 0.4]} color="#8B6914" />
      <Box position={[1.95, 0.22, -2]} size={[0.45, 0.04, 0.4]} color="#8B6914" />
      {/* Wall cabinets */}
      <Box position={[2.5, 1.6, -4.35]} size={[4, 0.6, 0.3]} color="#d8d8d0" />
    </group>
  );
}

/* ── BANO: bañera, inodoro, lavabo, espejo ── */
function BanoFurniture() {
  return (
    <group>
      {/* Bathtub */}
      <Box position={[3, 0.25, 2]} size={[2.8, 0.45, 0.9]} color="#eee" />
      <Box position={[3, 0.5, 2]} size={[2.5, 0.06, 0.7]} color="#e0e0e8" />
      {/* Toilet */}
      <Box position={[0.7, 0.2, 2.6]} size={[0.4, 0.35, 0.55]} color="#f5f5f5" />
      <Box position={[0.7, 0.45, 2.75]} size={[0.4, 0.3, 0.08]} color="#f0f0f0" />
      {/* Vanity / Sink */}
      <Box position={[0.7, 0.4, 0.3]} size={[0.7, 0.3, 0.5]} color="#d0c8b8" />
      <Box position={[0.7, 0.6, 0.3]} size={[0.55, 0.06, 0.4]} color="#f5f5f5" />
      {/* Mirror */}
      <mesh position={[0.7, 1.3, 0.05]}>
        <planeGeometry args={[0.65, 0.8]} />
        <meshStandardMaterial color="#c0e0f0" metalness={0.95} roughness={0.05} />
      </mesh>
      {/* Towel rack + towels */}
      <Box position={[3, 1.1, 2.95]} size={[1, 0.025, 0.025]} color="#ccc" />
      <Box position={[2.7, 1.05, 2.95]} size={[0.07, 0.18, 0.03]} color="#eee" />
      <Box position={[2.9, 1.05, 2.95]} size={[0.07, 0.18, 0.03]} color="#eee" />
    </group>
  );
}

/* ── DORMITORIO: cama, mesillas, armario ── */
function DormitorioFurniture() {
  return (
    <group>
      {/* Bed base */}
      <Box position={[-2.5, 0.2, 1.5]} size={[2.2, 0.3, 2.4]} color="#7B4B2A" />
      {/* Mattress */}
      <Box position={[-2.5, 0.45, 1.5]} size={[2, 0.2, 2.2]} color="#f0f0f0" />
      {/* Pillows */}
      <Box position={[-3.1, 0.6, 2.2]} size={[0.55, 0.1, 0.45]} color="#e8e0d0" />
      <Box position={[-1.9, 0.6, 2.2]} size={[0.55, 0.1, 0.45]} color="#e8e0d0" />
      {/* Headboard */}
      <Box position={[-2.5, 0.7, 2.7]} size={[2.2, 1, 0.1]} color="#5C3317" />
      {/* Nightstands */}
      <Box position={[-3.9, 0.2, 1.5]} size={[0.55, 0.4, 0.55]} color="#7B4B2A" />
      <Box position={[-1.1, 0.2, 1.5]} size={[0.55, 0.4, 0.55]} color="#7B4B2A" />
      {/* Lamps */}
      <Box position={[-3.9, 0.55, 1.5]} size={[0.12, 0.25, 0.12]} color="#d4af37" />
      <Box position={[-1.1, 0.55, 1.5]} size={[0.12, 0.25, 0.12]} color="#d4af37" />
      {/* Wardrobe */}
      <Box position={[-4.1, 0.9, 2.6]} size={[1.3, 1.8, 0.6]} color="#4C2310" />
      {/* Rug */}
      <mesh position={[-2.5, 0.04, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 1.3]} />
        <meshStandardMaterial color="#6B4423" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

/* ── Furniture dispatcher ── */
function Furniture({ roomId }: { roomId: string }) {
  switch (roomId) {
    case 'sala': return <SalaFurniture />;
    case 'cocina': return <CocinaFurniture />;
    case 'bano': return <BanoFurniture />;
    case 'dormitorio': return <DormitorioFurniture />;
    default: return null;
  }
}

/* ── Walls ── */
function Walls() {
  const W = 0.1;
  const H = 2.6;
  const wallMat = (op = 0.3) => (
    <meshStandardMaterial color="#eee" transparent opacity={op} side={THREE.DoubleSide} />
  );

  return (
    <group>
      {/* Outer */}
      <mesh position={[0, H / 2, -4.8]}><boxGeometry args={[10, H, W]} />{wallMat(0.35)}</mesh>
      <mesh position={[0, H / 2, 3]}><boxGeometry args={[10, H, W]} />{wallMat(0.35)}</mesh>
      <mesh position={[5, H / 2, -0.9]}><boxGeometry args={[W, H, 7.8]} />{wallMat(0.35)}</mesh>
      <mesh position={[-5, H / 2, -0.9]}><boxGeometry args={[W, H, 7.8]} />{wallMat(0.35)}</mesh>
      {/* Inner divider X */}
      <mesh position={[0.25, H / 2, -0.7]}><boxGeometry args={[W, H, 6.8]} />{wallMat(0.2)}</mesh>
      {/* Inner dividers Z */}
      <mesh position={[2.6, H / 2, -0.4]}><boxGeometry args={[4.4, H * 0.8, W]} />{wallMat(0.18)}</mesh>
      <mesh position={[-2.35, H / 2, 0]}><boxGeometry args={[4.7, H * 0.8, W]} />{wallMat(0.18)}</mesh>
    </group>
  );
}

/* ── Tooltip ── */
function Tooltip({ hovered }: { hovered: Room | null }) {
  if (!hovered) return null;
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 text-center z-10 pointer-events-none">
      <p className="text-white font-bold text-sm">{hovered.emoji} {hovered.description}</p>
      <p className="text-white/40 text-xs mt-1">Haz clic para ver más</p>
    </div>
  );
}

/* ── Room labels overlay ── */
function RoomLabels({ hovered }: { hovered: Room | null }) {
  return (
    <div className="absolute top-3 left-3 space-y-1 pointer-events-none">
      {ROOMS.map((r) => (
        <div
          key={r.id}
          className={`transition-all text-xs px-2 py-0.5 rounded-md ${
            hovered && hovered.id === r.id
              ? 'bg-white/20 text-white font-semibold'
              : 'bg-black/30 text-white/40'
          }`}
        >
          {r.emoji} {r.label}
        </div>
      ))}
    </div>
  );
}

/* ── Main ── */
export default function InteractiveFloorPlan({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [hovered, setHovered] = useState<Room | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleHover = useCallback((id: string | null) => {
    setHovered(id ? ROOMS.find((r) => r.id === id) || null : null);
  }, []);

  const handleNav = useCallback((path: string) => { router.push(path); }, [router]);

  if (!mounted) {
    return (
      <div className={`relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] flex items-center justify-center ${compact ? 'min-h-[350px] h-full' : 'h-[400px] md:h-[500px]'}`}>
        <p className="text-white/30 text-sm">Cargando plano 3D...</p>
      </div>
    );
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] ${compact ? 'min-h-[350px] h-full' : 'h-[400px] md:h-[500px]'}`}>
      <Canvas
        camera={{ position: [0, 10, 9], fov: 50 }}
        gl={{ antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-3, 6, -8]} intensity={0.3} color="#88aaff" />

        <Float speed={0.6} rotationIntensity={0.02} floatIntensity={0.08}>
          {/* Floor base */}
          <mesh position={[0, -0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[12, 12]} />
            <meshStandardMaterial color="#111" />
          </mesh>

          {ROOMS.map((r) => (
            <Fragment key={r.id}>
              {/* Floor tile */}
              <mesh
                position={[r.px, 0.005, r.pz]}
                onPointerEnter={(e) => { e.stopPropagation(); handleHover(r.id); }}
                onPointerLeave={() => handleHover(null)}
                onClick={() => handleNav(r.path)}
              >
                <boxGeometry args={[r.sx - 0.08, 0.04, r.sz - 0.08]} />
                <meshStandardMaterial
                  color={r.floorColor}
                  emissive={r.color}
                  emissiveIntensity={hovered && hovered.id === r.id ? 0.12 : 0.02}
                />
              </mesh>
              {/* Furniture */}
              <group><Furniture roomId={r.id} /></group>
              {/* Invisible hit box */}
              <mesh
                position={[r.px, 0.8, r.pz]}
                onPointerEnter={(e) => { e.stopPropagation(); handleHover(r.id); }}
                onPointerLeave={() => handleHover(null)}
                onClick={() => handleNav(r.path)}
              >
                <boxGeometry args={[r.sx, 2, r.sz]} />
                <meshStandardMaterial transparent opacity={0.001} />
              </mesh>
            </Fragment>
          ))}

          <Walls />
        </Float>

        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={3}
          maxDistance={20}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate
          autoRotateSpeed={0.6}
          makeDefault
          target={[0, 0, -0.75]}
        />
      </Canvas>

      <RoomLabels hovered={hovered} />
      <Tooltip hovered={hovered} />
    </div>
  );
}
