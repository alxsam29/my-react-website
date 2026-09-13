import React from 'react';

function Process() {
  const steps = [
    {
      num: "01",
      title: "Discuție & Strategie",
      desc: "Vorbim despre ideea ta, obiectivele afacerii și publicul țintă. Stabilim arhitectura ideală și conținutul de care ai nevoie."
    },
    {
      num: "02",
      title: "Design & Prototip",
      desc: "Creionez aspectul vizual: estetică modernă, contrast corect, animații subtile și o structură care ghidează vizitatorul spre acțiune."
    },
    {
      num: "03",
      title: "Dezvoltare & Testare",
      desc: "Scriu cod curat și rapid folosind React și tehnologii moderne. Mă asigur că site-ul se mișcă impecabil pe orice telefon sau tabletă."
    },
    {
      num: "04",
      title: "Lansare & Suport",
      desc: "Publicăm site-ul online (pe Vercel / server dedicat), configurăm domeniul și rămân alături de tine pentru modificări ulterioare."
    }
  ];

  return (
    <section id="process" className="process-section" aria-label="Procesul de lucru">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Simplu și Transparent</span>
          <h2 className="section-title">Cum Colaborăm</h2>
          <p className="section-description">
            Un proces predictibil, fără bătăi de cap tehnice pentru tine, de la prima idee până când site-ul tău este live pe internet.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, idx) => (
            <div className="process-step-card" key={idx}>
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
