import React from 'react';

function Testimonials() {
  const testimonialsList = [
    {
      name: "Radu M.",
      role: "Co-fondator FolioTech",
      text: "Platforma creată de Alex pentru FolioTech a schimbat radical modul în care gestionăm stocurile și procesăm comenzile. Viteza de încărcare și interfața pe mobil sunt impecabile. Un colaborator de nota 10!",
      project: "Platformă Gestiune & Vânzări",
      stars: 5
    },
    {
      name: "Elena D.",
      role: "Antreprenor E-Commerce",
      text: "Designul site-ului arată incredibil de modern și elegant! După relansare, rata de conversie a vizitatorilor veniți din Instagram a crescut simțitor. Comunicarea a fost excelentă pe tot parcursul proiectului.",
      project: "Magazin Online & Showroom",
      stars: 5
    },
    {
      name: "Cristian V.",
      role: "Fondator Servicii Digitale",
      text: "Landing page-ul a fost livrat în timp record (doar 4 zile), respectând toate cerințele mele. Calitatea codului, animațiile fine și atenția la detalii fac toți banii. Recomand cu toată încrederea!",
      project: "Landing Page de Conversie",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section reveal-on-scroll" aria-label="Mărturii și recenzii clienți">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Recenzii & Încredere</span>
          <h2 className="section-title">Ce Spun Clienții</h2>
          <p className="section-description">
            Fiecare proiect este o colaborare dedicată pentru a obține rezultate vizibile și o experiență digitală de cel mai înalt nivel.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsList.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="stars-row" aria-label={`Rating: ${item.stars} stele`}>
                {"★".repeat(item.stars)}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">{item.name.charAt(0)}</div>
                <div className="author-details">
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-role">{item.role}</span>
                  <span className="author-project-badge">{item.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="trust-badges-bar">
          <div className="trust-badge-item">
            <span className="trust-badge-icon">⭐</span>
            <div>
              <strong>100% Clienți Mulțumiți</strong>
              <small>Calitate și atenție la fiecare detaliu</small>
            </div>
          </div>
          <div className="trust-badge-item">
            <span className="trust-badge-icon">⏱️</span>
            <div>
              <strong>Livrare Rapidă (3 - 7 Zile)</strong>
              <small>Fără întârzieri sau blocaje tehnice</small>
            </div>
          </div>
          <div className="trust-badge-item">
            <span className="trust-badge-icon">🛡️</span>
            <div>
              <strong>Garanție & Suport</strong>
              <small>Asistență gratuită post-lansare</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
