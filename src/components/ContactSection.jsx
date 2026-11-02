import React from 'react';

function ContactSection({ onNavigate }) {
  return (
    <section id="cta" className="contact">
      <div className="wrap">
        <h2 className="rv">Ai un proiect în minte?</h2>
        <p className="rv">Spune-mi ce ai nevoie și primești o ofertă clară, cu preț și termen.</p>
        <a
          className="btn rv"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('#contact');
          }}
          data-mag
        >
          Cere o ofertă
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
