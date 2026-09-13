import React, { useState, useEffect } from 'react';

const WHATSAPP_URL =
  'https://wa.me/40727316319?text=Salut%20Alex%2C%20am%20v%C4%83zut%20portofoliul%20t%C4%83u%20%C8%99i%20a%C8%99%20dori%20s%C4%83%20discut%C4%83m%20despre%20un%20proiect%20web!';

/**
 * Bară plutitoare fixă, vizibilă doar pe ecrane de mobil,
 * cu acces instant la WhatsApp și la formularul de ofertă.
 */
function MobileActionBar({ onOpenContact }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 420);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`mobile-action-bar ${visible ? 'bar-visible' : ''}`}
      role="navigation"
      aria-label="Acțiuni rapide de contact"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bar-btn bar-btn-whatsapp"
      >
        <span className="bar-btn-icon" aria-hidden="true">💬</span>
        WhatsApp
      </a>
      <button
        type="button"
        className="bar-btn bar-btn-offer"
        onClick={onOpenContact}
      >
        <span className="bar-btn-icon" aria-hidden="true">📋</span>
        Cere Ofertă
      </button>
    </div>
  );
}

export default MobileActionBar;
