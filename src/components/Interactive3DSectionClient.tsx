'use client';

import dynamic from 'next/dynamic';
import { Loading3DIcon } from './Icons';

const Lazy3D = dynamic(
  () => import('./Interactive3DSection'),
  { loading: () => <Loading3DIcon />, ssr: false }
);

export default function Interactive3DSection() {
  return <Lazy3D />;
}
