'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Environment, Float } from '@react-three/drei';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';

/* ═══════════════════════════════════════════════════════════
   Interactive 3D Floor Plan — ReformaT Venezuela
   
   TO DISABLE: Simply replace in page.tsx:
     <Interactive3DSection />
   with any placeholder component. This file is self-contained.
   ═══════════════════════════════════════════════════════════ */

// ── Room data ──
const ROOMS = [
  {
    id: 'cocina',
    label: 'Cocina',
    color: '#DD183B',
    hoverColor: '#FF2A52',
    description: 'Remodelación de Cocina',
    path: '/servicios/cocinas',
    pos: [2.5, 0, 1.5] as [number, number, number],
    size: [3, 0.08, 3] as [number, number, number],
    wallInfo: { x: -1, z: 0, w: 0.1, d: 3, h: 1.5 }, // west wall section
  },
  {
    id: 'bano',
    label: 'Baño',
    color: '#3B8DD7',
    hoverColor: '#5BA0E7',
    description: 'Remodelación de Baño',
    path: '/servicios/banos',
    pos: [-2.5, 0, 2.5] as [number, number, number],
    size: [3, 0.08, 3] as [number, number, number],
    wallInfo: undefined,
  },
  {
    id: 'sala',
    label: 'Sala',
    color: '#2ECC71',
    hoverColor: '#48E08A',
    description: 'Reforma Integral',
    path: '/servicios/integral',
    pos: [2.5, 0, -2] as [number, number, number],
    size: [3, 0.08, 4] as [number, number, number],
    wallInfo: undefined,
  },
  {
    id: 'dormitorio',
    label: 'Dormitorio',
    color: '#F39C12',
    hoverColor: '#F5B041',
    description: 'Consultoría de Diseño',
    path: '/servicios/consultoria',
    pos: [-2.5, 0, -1.5] as [number, number, number],
    size: [3, 0.08, 4] as [number, number, number],
    wallInfo: undefined,
  },
] as const;

// ── Single room mesh with hover/click ──
function RoomRoom({
  room,
  hovered,
  onEnter,
  onLeave,
  onClick,
}: {
  room: (typeof ROOMS)[number];
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      {/* Room floor */}
      <mesh
        ref={meshRef}
        position={room.pos}
        onPointerEnter={(e) => { e.stopPropagation(); onEnter(); }}
        onPointerLeave={onLeave}
        onClick={onClick}
      >
        <boxGeometry args={room.size} />
        <meshStandardMaterial
          color={hovered ? room.hoverColor : room.color}
          transparent
          opacity={hovered ? 0.7 : 0.3}
          emissive={hovered ? room.hoverColor : room.color}
          emissiveIntensity={hovered ? 0.3 : 0.05}
        />
      </mesh>
      {/* Room label */}
      <Text
        position={[room.pos[0], 0.15, room.pos[2]]}
        rotation={[0, 0, 0]}
        fontSize={0.35}
        color={hovered ? '#fff' : 'rgba(255,255,255,0.5)'}
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {room.label}
      </Text>
    </group>
  );
}

// ── Walls ──
function Walls() {
  const wallMat = (color = 'rgba(255,255,255,0.15)') => (
    <meshStandardMaterial color={color} transparent opacity={0.4} />
  );
  const W = 0.12; // wall thickness
  const H = 1.5;  // wall height

  return (
    <group>
      {/* Outer walls */}
      {/* South wall */}
      <mesh position={[0, H / 2, -4]} material={wallMat()}>
        <boxGeometry args={[8, H, W]} />
      </mesh>
      {/* North wall */}
      <mesh position={[0, H / 2, 4]} material={wallMat()}>
        <boxGeometry args={[8, H, W]} />
      </mesh>
      {/* East wall */}
      <mesh position={[4, H / 2, 0]} material={wallMat()}>
        <boxGeometry args={[W, H, 8]} />
      </mesh>
      {/* West wall */}
      <mesh position={[-4, H / 2, 0]} material={wallMat()}>
        <boxGeometry args={[W, H, 8]} />
      </mesh>
      {/* Inner: vertical divider x=0 (kitchen/bathroom above, sala/dorm below) */}
      <mesh position={[0, H / 2, -1.5]} material={wallMat()}>
        <boxGeometry args={[W, H, 5]} />
      </mesh>
      {/* Inner: horizontal divider z=0.75 (kitchen left, sala right for upper area) */}
      {/* Actually let's do it simpler: one divider z=0 */}
      <mesh position={[2.5, H * 0.4, 0]} material={wallMat('rgba(255,255,255,0.1)')}>
        <boxGeometry args={[3, H * 0.8, W]} />
      </mesh>
      <mesh position={[-2.5, H * 0.4, 0.5]} material={wallMat('rgba(255,255,255,0.1)')}>
        <boxGeometry args={[3, H * 0.8, W]} />
      </mesh>
    </group>
  );
}

// ── Floor base ──
function FloorBase() {
  return (
    <mesh position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#111" transparent opacity={0.9} />
    </mesh>
  );
}

// ── 3D Scene ──
function Scene3D() {
  const router = useRouter();
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  const handleRoomClick = useCallback(
    (room: (typeof ROOMS)[number]) => {
      router.push(room.path);
    },
    [router],
  );

  return (
    <>
      <color attach="background" args={['#0a0a0a']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} />
      <pointLight position={[0, 4, 0]} intensity={0.8} color="#DD183B" />

      <Float speed={1} rotationIntensity={0.02} floatIntensity={0.1}>
        <group>
          <FloorBase />
          <Walls />
          {ROOMS.map((room) => (
            <RoomRoom
              key={room.id}
              room={room}
              hovered={hoveredRoom === room.id}
              onEnter={() => setHoveredRoom(room.id)}
              onLeave={() => setHoveredRoom(null)}
              onClick={() => handleRoomClick(room)}
            />
          ))}
        </group>

        <Environment preset="city" />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={6}
          maxDistance={18}
          minPolarAngle={0.3}
          maxPolarAngle={Math.PI / 2.5}
          target={[0, 0, 0]}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Float>
    </>
  );
}

// ── Tooltip ──
const TOOLTIP_MAP: Record<string, { label: string; desc: string }> = {
  cocina: { label: '🍽️ Cocina', desc: 'Clic para remodelación de cocina' },
  bano: { label: '🛁 Baño', desc: 'Clic para remodelación de baño' },
  sala: { label: '🏠 Sala', desc: 'Clic para reforma integral' },
  dormitorio: { label: '🛏️ Dormitorio', desc: 'Clic para consultoría' },
};

// ── Main export ──
export default function Interactive3DSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Fallback />;
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Blueprint grid bg */}
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">
              Interactivo 3D
            </span>
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            Explora tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
              espacio ideal
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Rotá, hacé zoom y hacé clic en cada habitación para ver nuestros servicios.
          </p>
        </div>

        {/* 3D Canvas */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-dark">
          <div className="w-full h-[500px] md:h-[600px]">
            <Canvas
              camera={{ position: [8, 6, 8], fov: 50 }}
              gl={{ antialias: true, alpha: true }}
            >
              <Scene3D />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Fallback if 3D fails ──
function Fallback() {
  return (
    <section className="py-20 md:py-32">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-black mb-4">
          Explora tu <span className="text-brand">espacio ideal</span>
        </h2>
        <p className="text-white/50 mb-8">
          Rotá, hacé zoom y hacé clic en cada habitación para ver nuestros servicios.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ROOMS.map((r) => (
            <a
              key={r.id}
              href={r.path}
              className="p-4 rounded-xl border border-white/5 hover:border-brand/30 transition-all text-center"
            >
              <p className="font-bold text-white">{r.label}</p>
              <p className="text-xs text-white/50 mt-1">{r.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
