import React, { useEffect, useRef } from 'react';

const STEPS = [
  { n: '1', title: 'Discuție', desc: 'Îmi spui ce vrei să obții. Primești o estimare de preț și termen.' },
  { n: '2', title: 'Schiță', desc: 'Îți arăt structura și aspectul înainte să scriu cod, apoi ajustăm.' },
  { n: '3', title: 'Dezvoltare', desc: 'Construiesc site-ul și ți-l arăt la fiecare etapă pentru feedback.' },
  { n: '4', title: 'Lansare', desc: 'Îl pun online pe domeniul tău și îți arăt cum îl administrezi singur.' },
];

function Process() {
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
        <h2 className="rv">Cum lucrăm împreună</h2>
        <p className="sub rv">Patru pași, fără surprize.</p>
        <div className="steps" ref={stepsRef}>
          <div className="fill" ref={fillRef}></div>
          {STEPS.map((step) => (
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
