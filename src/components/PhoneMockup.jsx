import React, { useState, useEffect } from 'react';

const chat = [
  { me: false, t: 'Salut! Vreau un site pentru afacerea mea.' },
  { me: true, t: 'Sigur! Landing page, magazin sau platformă?' },
  { me: false, t: 'Un magazin online, cu plată cu cardul.' },
  { me: true, t: 'Perfect. Îți trimit azi o ofertă cu preț și termen. ✅' },
];

function PhoneMockup() {
  const [n, setN] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setN((v) => (v >= chat.length + 2 ? 1 : v + 1));
    }, 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="phone-wrapper">
      <div className="phone-ambient-glow" />
      <div className="phone-body">
        <div className="phone-screen">
          {/* Status bar */}
          <div className="phone-status-bar">
            <span>9:41</span>
            <span className="phone-notch" />
            <span>100%</span>
          </div>

          {/* Contact Header inside Phone */}
          <div className="phone-contact-header">
            <div className="phone-avatar">A</div>
            <div>
              <p className="phone-contact-name">Alex · Web dev</p>
              <p className="phone-status-indicator">
                <span className="status-dot"></span> online
              </p>
            </div>
          </div>

          {/* Chat message body */}
          <div className="phone-messages">
            {chat.slice(0, Math.min(n, chat.length)).map((m, i) => (
              <div
                key={i}
                className={`phone-bubble ${m.me ? 'me' : 'client'} ${
                  i === Math.min(n, chat.length) - 1 ? 'pop-in' : ''
                }`}
              >
                {m.t}
              </div>
            ))}
            {n < chat.length && (
              <div className="phone-typing-indicator">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="typing-dot"
                    style={{ animationDelay: `${d * 180}ms` }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Chat fake input */}
          <div className="phone-input-bar">
            <span>Scrie un mesaj…</span>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <span className="phone-badge b1">React</span>
      <span className="phone-badge b2">SEO</span>
      <span className="phone-badge b3">100/100</span>
      <span className="phone-badge b4">Mobile</span>
    </div>
  );
}

export default PhoneMockup;
