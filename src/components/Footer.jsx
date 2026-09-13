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
              <span className="brand-title">Alex Sârbu</span>
            </div>
            <p className="footer-tagline">
              Web Developer specializat în site-uri de înaltă performanță, platforme interactive și magazine online moderne.
            </p>
            <div className="footer-contact-info">
              <p>📱 WhatsApp / Tel: <a href="https://wa.me/40727316319" target="_blank" rel="noopener noreferrer">+40 727 316 319</a></p>
              <p>✉️ Email: <a href="mailto:alxsarbu29@gmail.com">alxsarbu29@gmail.com</a></p>
            </div>
          </div>

          <div className="footer-nav">
            <h4>Navigare</h4>
            <ul>
              <li><a href="#projects">Proiecte Recente</a></li>
              <li><a href="#services">Servicii Oferite</a></li>
              <li><a href="#process">Procesul de Lucru</a></li>
              <li><a href="#contact">Contact & WhatsApp</a></li>
            </ul>
          </div>

          <div className="footer-tech">
            <h4>Tehnologii Folosite</h4>
            <div className="tech-tags">
              <span className="tech-tag">React 19</span>
              <span className="tech-tag">Vite 6</span>
              <span className="tech-tag">JavaScript ES6+</span>
              <span className="tech-tag">CSS3 / Flexbox / Grid</span>
              <span className="tech-tag">Vercel</span>
              <span className="tech-tag">GitHub</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alex Sârbu (alxsam29). Toate drepturile rezervate.</p>
          <div className="footer-bottom-actions">
            <a 
              href="https://github.com/alxsam29" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-footer-link"
            >
              GitHub: alxsam29 ↗
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
