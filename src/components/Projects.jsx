import React, { useRef } from 'react';

function Projects({ onNavigate }) {
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
            <h2>FolioTech</h2>
            <p>
              Platformă web interactivă, concepută și dezvoltată integral de mine: design, interfață și cod.
              Ai o idee similară? O putem construi și pe a ta.
            </p>
            <a
              className="btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#contact');
              }}
              data-mag
            >
              Vreau ceva similar
            </a>
          </div>
          <div className="mock" ref={mockRef} onPointerMove={handleMockMove} onPointerLeave={handleMockLeave}>
            <div className="win">
              <i style={{ width: '40%' }}></i>
              <i className="g"></i>
              <i style={{ width: '85%' }}></i>
              <i style={{ width: '60%' }}></i>
            </div>
            <span className="chip c1"><i></i>Încărcare rapidă</span>
            <span className="chip c2"><i></i>Responsive</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
