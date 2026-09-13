import React from 'react';

function SocialLinks({ onOpenContact }) {
  const bioLinks = [
    {
      icon: "💬",
      title: "WhatsApp Direct",
      subtitle: "0727 316 319 • Răspund rapid pentru întrebări sau oferte",
      actionText: "Deschide Chat ↗",
      link: "https://wa.me/40727316319?text=Salut%20Alex%2C%20am%20v%C4%83zut%20portofoliul%20t%C4%83u%20%C8%99i%20a%C8%99%20dori%20s%C4%83%20discut%C4%83m%20despre%20un%20proiect%20web!",
      isExternal: true,
      highlight: true
    },
    {
      icon: "📋",
      title: "Cere o Ofertă Personalizată",
      subtitle: "Completează formularul scurt cu detaliile proiectului tău",
      actionText: "Completează formularul →",
      action: onOpenContact,
      isExternal: false,
      highlight: false
    },
    {
      icon: "✉️",
      title: "Email Direct",
      subtitle: "alxsarbu29@gmail.com • Pentru specificații tehnice sau fișiere",
      actionText: "Trimite Email ↗",
      link: "mailto:alxsarbu29@gmail.com?subject=Cerere%20Colaborare%20Web%20Development",
      isExternal: true,
      highlight: false
    },
    {
      icon: "🐙",
      title: "Profilul meu de GitHub",
      subtitle: "github.com/alxsam29 • Depozite de cod și proiecte open-source",
      actionText: "Vezi GitHub ↗",
      link: "https://github.com/alxsam29",
      isExternal: true,
      highlight: false
    }
  ];

  return (
    <section id="contact" className="bio-links-section" aria-label="Canale de contact și link-uri rapide">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Conectează-te cu mine</span>
          <h2 className="section-title">Hai să Dăm Viață Proiectului Tău!</h2>
          <p className="section-description">
            Alege metoda preferată de contact. Răspund rapid pe WhatsApp și pe email pentru orice solicitare.
          </p>
        </div>

        <div className="bio-cards-container">
          {bioLinks.map((item, idx) => (
            item.isExternal ? (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`bio-link-card ${item.highlight ? 'bio-card-highlight' : ''}`}
                key={idx}
              >
                <div className="bio-card-icon">{item.icon}</div>
                <div className="bio-card-text">
                  <h3 className="bio-card-title">{item.title}</h3>
                  <p className="bio-card-subtitle">{item.subtitle}</p>
                </div>
                <span className="bio-card-action">{item.actionText}</span>
              </a>
            ) : (
              <button 
                type="button" 
                onClick={item.action} 
                className={`bio-link-card ${item.highlight ? 'bio-card-highlight' : ''}`}
                key={idx}
              >
                <div className="bio-card-icon">{item.icon}</div>
                <div className="bio-card-text">
                  <h3 className="bio-card-title">{item.title}</h3>
                  <p className="bio-card-subtitle">{item.subtitle}</p>
                </div>
                <span className="bio-card-action">{item.actionText}</span>
              </button>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;
