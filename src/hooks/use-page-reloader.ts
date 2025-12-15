'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function usePageReloader() {
  const pathname = usePathname();
  const lastPathRef = useRef<string | null>(null);

  useEffect(() => {
    // On initial load, store the path in session storage and ref
    if (typeof window !== 'undefined') {
      const sessionPath = sessionStorage.getItem('lastPath');
      if (!sessionPath) {
        sessionStorage.setItem('lastPath', pathname);
      }
      lastPathRef.current = sessionStorage.getItem('lastPath');

      // If the current path is different from the last stored path, it's a navigation
      if (lastPathRef.current !== pathname) {
        sessionStorage.setItem('lastPath', pathname);
        window.location.reload();
      }
    }
  }, [pathname]);
}
