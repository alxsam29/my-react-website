import React, { useEffect, useRef, useState } from 'react';
import PhoneMockup from './PhoneMockup.jsx';

function Hero({ onNavigate, t }) {
  const canvasRef = useRef(null);
  const [typed, setTyped] = useState('');
  const words = t.hero.words;

  // Typewriter effect
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if (prefersReduced) {
      setTyped(words[0]);
      return;
    }

    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIdx];
      setTyped(word.slice(0, charIdx));

      if (!deleting && charIdx === word.length) {
        deleting = true;
        timer = setTimeout(tick, 1600);
        return;
      }
      if (deleting && charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
      }
      charIdx += deleting ? -1 : 1;
      timer = setTimeout(tick, deleting ? 35 : 80);
    };

    tick();
    return () => clearTimeout(timer);
  }, [words]);

  // Canvas particle network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    let particles = [];
    let mouseX = -999;
    let mouseY = -999;
    let W, H;
    let animId;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((W * H) / 16000);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const parent = canvas.parentNode;
    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const handleLeave = () => {
      mouseX = mouseY = -999;
    };
    parent.addEventListener('pointermove', handleMove);
    parent.addEventListener('pointerleave', handleLeave);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140 && d > 0) {
            p.x += (dx / d) * 1.8;
            p.y += (dy / d) * 1.8;
          }
        }
        ctx.fillStyle = 'rgba(34,227,197,.8)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, 6.3);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ex = p.x - q.x;
          const ey = p.y - q.y;
          const dd = ex * ex + ey * ey;
          if (dd < 14000) {
            ctx.strokeStyle = `rgba(108,92,255,${0.5 * (1 - dd / 14000)})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        const ddx = p.x - mouseX;
        const ddy = p.y - mouseY;
        if (ddx * ddx + ddy * ddy < 20000) {
          ctx.strokeStyle = 'rgba(34,227,197,.6)';
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }
      if (!prefersReduced) animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      parent.removeEventListener('pointermove', handleMove);
      parent.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <section className="hero" style={{ padding: 0 }} id="top">
      <canvas id="net" ref={canvasRef} aria-hidden="true"></canvas>
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="tag">
              <b></b>{t.hero.available}
            </div>
            <h1>
              {t.hero.h1Prefix}{' '}
              <span className="line2" aria-live="off">
                <span>{typed}</span>
                <span className="caret"></span>
              </span>
            </h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta">
              <a
                className="btn"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('#contact');
                }}
              >
                {t.hero.talkCta}
              </a>
              <a
                className="btn ghost"
                href="#proiecte"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('#proiecte');
                }}
              >
                {t.hero.projectsCta}
              </a>
            </div>
            <div className="hero-badges">
              {t.hero.badges.map((b) => (
                <span key={b} className="hero-tag-badge">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-phone-col">
            <PhoneMockup t={t} />
          </div>
        </div>
      </div>
      <div className="scroll" aria-hidden="true"></div>
    </section>
  );
}

export default Hero;
