import React from 'react';

function Hero({ onOpenContact }) {
  return (
    <section className="hero" aria-label="Prezentare dezvoltator">
      <div className="hero-profile-area">
        <div className="avatar-wrapper">
          <div className="avatar-icon">💻</div>
          <span className="avatar-ring"></span>
        </div>

        <div className="hero-status-pill">
          <span className="badge-pulse"></span>
          <span>Disponibil pentru proiecte & colaborări</span>
        </div>
      </div>

      <h1 className="hero-title">
        Salut, sunt <span className="hero-name-highlight">Alex Sârbu</span> 👋 <br />
        <span className="hero-gradient-text">Web Developer & UI Creator</span>
      </h1>

      <p className="hero-subtitle">
        Construiesc site-uri web ultra-rapide, aplicații interactive (precum <strong>FolioTech</strong>) și magazine online de impact. Transform ideile tale în produse digitale de succes, optimizate pentru mobil și vânzări.
      </p>

      <div className="hero-cta-group">
        <button 
          className="btn-hero-primary" 
          onClick={onOpenContact}
        >
          Cere o Ofertă Gratuită 🚀
        </button>
        <a 
          href="#projects" 
          className="btn-hero-secondary"
        >
          Vezi Proiectele Mele ↓
        </a>
      </div>

      <div className="hero-quick-pills">
        <a 
          href="https://wa.me/40727316319?text=Salut%20Alex%2C%20am%20v%C4%83zut%20portofoliul%20t%C4%83u%20%C8%99i%20a%C8%99%20dori%20s%C4%83%20discut%C4%83m%20despre%20un%20proiect%20web!" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="quick-pill quick-pill-whatsapp"
        >
          <span>💬</span> WhatsApp: 0727 316 319
        </a>
        <a 
          href="mailto:alxsarbu29@gmail.com" 
          className="quick-pill"
        >
          <span>✉️</span> alxsarbu29@gmail.com
        </a>
        <a 
          href="https://github.com/alxsam29" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="quick-pill"
        >
          <span>🐙</span> GitHub: alxsam29
        </a>
      </div>
    </section>
  );
}

export default Hero;
