import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal.js';

function Services({ onOpenContact }) {
  const sectionRef = useScrollReveal();

  const servicesList = [
    {
      icon: "🎯",
      title: "Landing Pages & Prezentare",
      desc: "Pagini moderne de destinație, concepute strategic pentru a capta atenția și a transforma vizitatorii din social media în clienți plătitori.",
      features: ["Design unic & captivant", "Optimizare SEO pe pagină", "Timp de încărcare sub 1s", "Adaptat 100% pentru mobil"]
    },
    {
      icon: "⚡",
      title: "Aplicații Web & Platforme",
      desc: "Soluții web interactive cu funcționalități complexe, panouri de gestiune (dashboard), baze de date și integrări API (precum proiectul FolioTech).",
      features: ["Arhitectură React modernă", "Control stocuri / date live", "Interfață intuitivă de lucru", "Securitate și scalabilitate"]
    },
    {
      icon: "🛍️",
      title: "Magazine Online & E-Commerce",
      desc: "Platforme de vânzare rapidă a produselor tale, cu navigare simplă, catalog dinamic de articole și flux optimizat de finalizare a comenzilor.",
      features: ["Coș de cumpărături rapid", "Filtrare avansată de produse", "Design mobile-first", "Integrare metode de plată/livrare"]
    },
    {
      icon: "🚀",
      title: "Redesign & Optimizare Viteză",
      desc: "Ai deja un site vechi sau lent? Îl reconstruiesc la standardele anului curent, îmbunătățind viteza, poziționarea în Google și aspectul vizual.",
      features: ["Audit complet de performanță", "Scor 90+ pe Google Lighthouse", "Aspect vizual premium", "Mentenanță și suport continuu"]
    }
  ];

  return (
    <section id="services" className="services-section reveal-init" ref={sectionRef} aria-label="Servicii oferite">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Ce Pot Construi Pentru Tine</span>
          <h2 className="section-title">Servicii de Dezvoltare Web</h2>
          <p className="section-description">
            Fiecare proiect este realizat personalizat, fără șabloane generice, pentru a oferi afacerii tale un avantaj competitiv clar.
          </p>
        </div>

        <div className="services-grid reveal-stagger">
          {servicesList.map((srv, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-icon-box">{srv.icon}</div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-description">{srv.desc}</p>
              
              <ul className="service-features-list">
                {srv.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <span className="check-bullet">✓</span> {feat}
                  </li>
                ))}
              </ul>

              <button 
                className="btn-service-inquire"
                onClick={onOpenContact}
              >
                Cere detalii despre acest serviciu →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
