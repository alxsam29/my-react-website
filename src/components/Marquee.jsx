import React from 'react';

const TECHS = [
  'React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js',
  'Vercel', 'SEO', 'UI Design', 'Responsive', 'E-commerce',
];

function Marquee() {
  // Duplicate the list twice for seamless loop
  const items = [...TECHS, ...TECHS, ...TECHS, ...TECHS];
  return (
    <div className="mq" aria-hidden="true">
      <div>
        {items.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
