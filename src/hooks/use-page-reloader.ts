'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const SESSION_STORAGE_KEY = 'lastPathname';

export const usePageReloader = () => {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // On the very first render, we store the initial path in sessionStorage.
    // We use a ref to ensure this only runs once per component lifecycle.
    if (isFirstRender.current) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, pathname);
      isFirstRender.current = false;
      return;
    }

    // Get the last path from storage.
    const lastPathname = sessionStorage.getItem(SESSION_STORAGE_KEY);

    // If the current path is different from the last one, it's a navigation.
    if (lastPathname !== pathname) {
      // Update sessionStorage to the new path *before* reloading.
      sessionStorage.setItem(SESSION_STORAGE_KEY, pathname);
      // Trigger a full page reload.
      window.location.reload();
    }
  }, [pathname]);
};
