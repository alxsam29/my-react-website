import React from 'react';

function ContactSection({ onNavigate, t }) {
  return (
    <section id="cta" className="contact">
      <div className="wrap">
        <h2 className="rv">{t.contactCta.title}</h2>
        <p className="rv">{t.contactCta.desc}</p>
        <a
          className="btn rv"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('#contact');
          }}
          data-mag
        >
          {t.contactCta.btn}
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
