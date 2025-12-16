
"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function usePageReloader() {
  const pathname = usePathname();
  const lastPathname = useRef(pathname);

  useEffect(() => {
    if (lastPathname.current !== pathname) {
      lastPathname.current = pathname;
      window.location.reload();
    }
  }, [pathname]);
}
