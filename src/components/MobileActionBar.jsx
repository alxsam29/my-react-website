import React from 'react';

function MobileActionBar({ onOpenContact }) {
  return (
    <aside className="mobile-floating-bar" aria-label="Acțiuni rapide de contact pe mobil">
      <div className="mobile-bar-inner">
        <a 
          href="https://wa.me/40727316319?text=Salut%20Alex%2C%20am%20v%C4%83zut%20portofoliul%20t%C4%83u%20%C8%99i%20a%C8%99%20dori%20s%C4%83%20discut%C4%83m%20despre%20un%20proiect%20web!" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-floating-whatsapp"
          aria-label="Deschide WhatsApp pentru discuție directă"
        >
          <span className="floating-pulse-dot"></span>
          <span className="floating-icon">💬</span>
          <span className="floating-text">WhatsApp</span>
        </a>

        <button 
          type="button" 
          onClick={onOpenContact} 
          className="btn-floating-quote"
          aria-label="Cere o ofertă gratuită de preț"
        >
          <span className="floating-icon">🚀</span>
          <span className="floating-text">Cere Ofertă</span>
        </button>
      </div>
    </aside>
  );
}

export default MobileActionBar;
