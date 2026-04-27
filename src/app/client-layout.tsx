'use client';

import { usePathname } from 'next/navigation';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
