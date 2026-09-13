import React from 'react';

function Projects() {
  const featuredProject = {
    title: "FolioTech",
    subtitle: "Platformă Interactivă de Gestiune & Vânzări",
    description: "O platformă modernă dedicată managementului și vânzării foliilor de protecție pentru smartphone-uri, dotată cu control de stoc în timp real, interfață rapidă și flux optimizat de plasare și procesare a comenzilor.",
    url: "https://foliotech.base44.app/",
    logo: "https://media.base44.com/images/public/6a3aaf7aa9de1f0f82b09e18/f4f0777e6_logo.png",
    tags: ["React", "Vite", "Platformă Web", "Gestiune Stocuri", "Responsive UI"],
    metrics: [
      { label: "Viteză încărcare", val: "< 1s" },
      { label: "Optimizare mobil", val: "100%" },
      { label: "Control stocuri", val: "Timp Real" }
    ]
  };

  const otherProjects = [
    {
      title: "Nova Commerce",
      category: "Magazin Online & Showroom",
      description: "Concept de magazin online minimalist cu sistem de filtrare dinamic, coș interactiv și finalizare rapidă a comenzii.",
      tags: ["React 19", "E-Commerce", "CSS Modern", "Micro-animații"],
      status: "Demo Proiect"
    },
    {
      title: "Pulse Landing",
      category: "Landing Page de Conversie",
      description: "Pagină de prezentare orientată spre conversie, structură persuasivă, timpi de răspuns la milisecundă și SEO avansat.",
      tags: ["UI/UX Design", "Copywriting Web", "SEO On-Page", "Vercel"],
      status: "Demo Proiect"
    }
  ];

  return (
    <section id="projects" className="projects-section" aria-label="Proiecte recente">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Portofoliu & Lucrări</span>
          <h2 className="section-title">Proiecte Recente</h2>
          <p className="section-description">
            O privire asupra soluțiilor digitale pe care le construiesc, cu accent pe performanță, design curat și utilitate reală pentru afaceri.
          </p>
        </div>

        {/* Proiectul Fanion: FolioTech */}
        <div className="featured-project-card">
          <div className="featured-badge">⭐ Proiect Recent în Lumina Reflectoarelor</div>
          <div className="featured-grid">
            <div className="featured-content">
              <div className="featured-header">
                <img 
                  src={featuredProject.logo} 
                  alt="Logo FolioTech" 
                  className="project-logo"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div>
                  <h3 className="featured-title">{featuredProject.title}</h3>
                  <p className="featured-subtitle">{featuredProject.subtitle}</p>
                </div>
              </div>

              <p className="featured-description">{featuredProject.description}</p>

              <div className="tags-container">
                {featuredProject.tags.map((tag, idx) => (
                  <span className="tech-chip" key={idx}>{tag}</span>
                ))}
              </div>

              <div className="featured-metrics">
                {featuredProject.metrics.map((m, idx) => (
                  <div className="metric-box" key={idx}>
                    <span className="metric-val">{m.val}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="featured-actions">
                <a 
                  href={featuredProject.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-live-project"
                >
                  Vezi Proiectul Live ↗
                </a>
                <span className="live-indicator">
                  <span className="live-dot"></span> Online la foliotech.base44.app
                </span>
              </div>
            </div>

            <div className="featured-visual">
              <div className="browser-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="mockup-url">https://foliotech.base44.app</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-preview-inner">
                    <span className="mockup-icon">📱</span>
                    <h4>FolioTech Platform</h4>
                    <p>Sistem integrat de vânzare și evidență a foliilor de protecție</p>
                    <a 
                      href={featuredProject.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mockup-btn"
                    >
                      Deschide aplicația
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alte proiecte din portofoliu */}
        <div className="other-projects-grid">
          {otherProjects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-card-header">
                <span className="project-category">{proj.category}</span>
                <span className="project-status-tag">{proj.status}</span>
              </div>
              <h4 className="project-card-title">{proj.title}</h4>
              <p className="project-card-desc">{proj.description}</p>
              <div className="tags-container">
                {proj.tags.map((tag, tIdx) => (
                  <span className="tech-chip-small" key={tIdx}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
