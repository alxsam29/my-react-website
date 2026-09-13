import React from 'react';

function Hero({ onOpenContact }) {
  return (
    <section className="hero" aria-label="Introducere">
      <div className="hero-badge">
        <span className="badge-pulse"></span>
        <span>⚡ Actualizat pentru React 19 & Vite 6</span>
      </div>

      <h1 className="hero-title">
        Experiență Web Modernă, <br className="hero-br" />
        <span className="hero-gradient-text">Rapidă și Fluidă</span>
      </h1>

      <p className="hero-subtitle">
        Descoperă viteza instantanee Vite și eleganța componentelor modulare React, 
        concepute cu o estetică vizuală premium, animații fluide și Dark Mode inteligent.
      </p>

      <div className="hero-cta-group">
        <button 
          className="btn-hero-primary" 
          onClick={onOpenContact}
        >
          Deschide Demo Interactiv 🚀
        </button>
        <a 
          href="#features" 
          className="btn-hero-secondary"
        >
          Vezi funcționalitățile ↓
        </a>
      </div>
    </section>
  );
}

export default Hero;
