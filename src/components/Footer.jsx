import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-icon">⚡</span>
            <span className="brand-title">My Modern Site</span>
            <p className="footer-tagline">
              Dezvoltat cu pasiune folosind cele mai recente standarde web.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Navigare Rapidă</h4>
            <ul>
              <li><a href="#features">Funcționalități</a></li>
              <li><a href="#stats">Statistici</a></li>
              <li><a href="#newsletter">Noutăți</a></li>
            </ul>
          </div>

          <div className="footer-tech">
            <h4>Tehnologii</h4>
            <div className="tech-tags">
              <span className="tech-tag">React 19</span>
              <span className="tech-tag">Vite 6</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">ESM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} My Modern Site. Toate drepturile rezervate.</p>
          <button 
            className="back-to-top-btn" 
            onClick={scrollToTop} 
            aria-label="Înapoi la începutul paginii"
          >
            ↑ Sus
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
