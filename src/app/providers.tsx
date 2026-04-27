'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className="page-transition"
      key={pathname}
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
    >
      {children}
    </div>
  );
}
