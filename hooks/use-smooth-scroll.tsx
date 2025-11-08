'use client';

import * as React from 'react';

interface UseSmoothScrollOptions {
  offset?: number;
  duration?: number;
}

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const { offset = 80, duration = 800 } = options;

  const scrollToElement = React.useCallback(
    (elementId: string) => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    },
    [offset, duration]
  );

  const scrollToTop = React.useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return { scrollToElement, scrollToTop };
}
