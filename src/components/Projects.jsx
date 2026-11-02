import React, { useRef } from 'react';

function Projects({ onNavigate, t }) {
  const mockRef = useRef(null);

  const handleMockMove = (e) => {
    const mk = mockRef.current;
    if (!mk) return;
    const rect = mk.getBoundingClientRect();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if (!prefersReduced) {
      mk.style.transform = `rotateX(${(((e.clientY - rect.top) / rect.height - 0.5) * -14)}deg) rotateY(${(((e.clientX - rect.left) / rect.width - 0.5) * 14)}deg)`;
    }
  };

  const handleMockLeave = () => {
    if (mockRef.current) mockRef.current.style.transform = '';
  };

  return (
    <section id="proiecte">
      <div className="wrap">
        <div className="proj rv">
          <div>
            <h2>{t.projects.title}</h2>
            <p>{t.projects.desc}</p>
            <a
              className="btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#contact');
              }}
              data-mag
            >
              {t.projects.cta}
            </a>
          </div>
          <div className="mock" ref={mockRef} onPointerMove={handleMockMove} onPointerLeave={handleMockLeave}>
            <div className="win">
              <i style={{ width: '40%' }}></i>
              <i className="g"></i>
              <i style={{ width: '85%' }}></i>
              <i style={{ width: '60%' }}></i>
            </div>
            <span className="chip c1"><i></i>{t.projects.fastLoad}</span>
            <span className="chip c2"><i></i>{t.projects.responsive}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
