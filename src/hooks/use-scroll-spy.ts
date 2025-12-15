"use client";

import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (
  selectors: string[],
  options?: IntersectionObserverInit
): string => {
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const elements = selectors.map((selector) =>
      document.getElementById(selector)
    );

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      let activeEntry: IntersectionObserverEntry | null = null;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (!activeEntry || entry.intersectionRatio > activeEntry.intersectionRatio) {
                activeEntry = entry;
            }
        }
      });
      
      if (activeEntry) {
          setActiveId(activeEntry.target.id);
      } else {
        // If nothing is intersecting, check scroll position
        const sortedEntries = [...entries].sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const firstAbove = sortedEntries.find(entry => entry.boundingClientRect.top > (options?.rootMargin ? parseInt(options.rootMargin, 10) : 0));
        
        if (firstAbove) {
            const index = sortedEntries.indexOf(firstAbove);
            if (index > 0) {
                setActiveId(sortedEntries[index - 1].target.id);
            }
        } else if (sortedEntries.length > 0) {
            // If all are above, set last one as active
            setActiveId(sortedEntries[sortedEntries.length - 1].target.id);
        }
      }

    }, options);

    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });

    return () => observer.current?.disconnect();
  }, [selectors, options]);

  return activeId;
};
