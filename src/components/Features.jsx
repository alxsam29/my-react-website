import React from 'react';

function Features() {
  const featuresList = [
    {
      icon: "⚡",
      badge: "Viteză Extremă",
      title: "Performanță Instantanee",
      desc: "Vite 6 și Hot Module Replacement (HMR) asigură reîncărcarea la milisecundă și timpi minimi de procesare."
    },
    {
      icon: "🌙",
      badge: "UX Adaptabil",
      title: "Dark Mode Persistent",
      desc: "Comutare lină între teme cu salvare în localStorage și adaptare la preferințele de sistem ale utilizatorului."
    },
    {
      icon: "📱",
      badge: "Mobile-First",
      title: "100% Responsiv",
      desc: "Aspect impecabil pe orice dispozitiv, de la smartphone-uri compacte până la monitoare ultra-wide."
    },
    {
      icon: "🎨",
      badge: "Personalizare Simplă",
      title: "Design Modern & Curat",
      desc: "Variabile CSS native, efecte de sticlă (glassmorphism), ierarhie semantică corectă și micro-animații fluide."
    }
  ];

  return (
    <section id="features" className="features-section" aria-label="Funcționalități principale">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Avantaje Cheie</span>
          <h2 className="section-title">Construit pentru viitorul web</h2>
          <p className="section-description">
            O structură solidă combinată cu cele mai bune practici din ecosistemul React.
          </p>
        </div>

        <div className="features-grid">
          {featuresList.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-card-header">
                <span className="feature-icon" aria-hidden="true">{f.icon}</span>
                <span className="feature-badge">{f.badge}</span>
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
