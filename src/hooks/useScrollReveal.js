import { useEffect } from 'react';

/**
 * Hook pentru animații fluide de tip Scroll Reveal fără librării externe grele.
 * Detectează elementele cu clasa '.reveal-on-scroll' și le adaugă clasa '.is-revealed'
 * când intră în viewport, folosind API-ul nativ IntersectionObserver.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Verificăm dacă browserul suportă IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-on-scroll');

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
