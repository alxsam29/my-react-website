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
            <div className="footer-logo">
              <span className="brand-icon">⚡</span>
              <span className="brand-title">Alex.dev</span>
            </div>
            <p className="footer-tagline">
              Dezvoltator Web specializat în site-uri de înaltă performanță, platforme interactive și experiențe vizuale captivante.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Navigare</h4>
            <ul>
              <li><a href="#projects">Proiecte Recente</a></li>
              <li><a href="#services">Servicii Oferite</a></li>
              <li><a href="#process">Procesul de Lucru</a></li>
              <li><a href="#contact">Contact & Bio Links</a></li>
            </ul>
          </div>

          <div className="footer-tech">
            <h4>Tehnologii Folosite</h4>
            <div className="tech-tags">
              <span className="tech-tag">React 19</span>
              <span className="tech-tag">Vite 6</span>
              <span className="tech-tag">JavaScript ES6+</span>
              <span className="tech-tag">CSS3 / Flexbox / Grid</span>
              <span className="tech-tag">Vercel Deploy</span>
              <span className="tech-tag">Git / GitHub</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alex (alxsam29). Toate drepturile rezervate.</p>
          <div className="footer-bottom-actions">
            <a 
              href="https://github.com/alxsam29" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-footer-link"
            >
              GitHub ↗
            </a>
            <button 
              className="back-to-top-btn" 
              onClick={scrollToTop} 
              aria-label="Mergi înapoi la începutul paginii"
            >
              ↑ Sus
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
