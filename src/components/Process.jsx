import React, { useEffect, useRef } from 'react';

function Process({ t }) {
  const stepsRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const updateFill = () => {
      const steps = stepsRef.current;
      const fill = fillRef.current;
      if (!steps || !fill) return;
      const rect = steps.getBoundingClientRect();
      const progress = (window.innerHeight * 0.6 - rect.top) / rect.height;
      fill.style.height = `${Math.max(0, Math.min(1, progress)) * 100}%`;
    };
    updateFill();
    window.addEventListener('scroll', updateFill, { passive: true });
    return () => window.removeEventListener('scroll', updateFill);
  }, []);

  return (
    <section id="proces">
      <div className="wrap">
        <h2 className="rv">{t.process.title}</h2>
        <p className="sub rv">{t.process.subtitle}</p>
        <div className="steps" ref={stepsRef}>
          <div className="fill" ref={fillRef}></div>
          {t.process.steps.map((step) => (
            <div className="st" key={step.n} data-n={step.n}>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
