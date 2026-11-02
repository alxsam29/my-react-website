import { useEffect, useRef } from 'react';

/**
 * IntersectionObserver-based reveal-on-scroll hook.
 * Adds the `in` class when the element enters the viewport.
 * Respects prefers-reduced-motion (elements appear instantly).
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    if (prefersReduced) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe the ref element and all `.rv` / `.st` descendants
    const targets = el.querySelectorAll('.rv,.st');
    if (targets.length === 0) {
      io.observe(el);
    } else {
      targets.forEach((t) => io.observe(t));
    }

    return () => io.disconnect();
  }, []);

  return ref;
}
