import { useEffect, useRef } from 'react';

/**
 * Hook ultra-ușor de animație la scroll, bazat pe IntersectionObserver.
 * Adaugă clasa `is-revealed` pe element când intră în viewport (o singură dată).
 * Nu are dependențe externe și respectă `prefers-reduced-motion`.
 */
export default function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reveal = () => el.classList.add('is-revealed');

    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      reveal();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
