import React from 'react';

function Stats() {
  const statsList = [
    { value: '< 1 secundă', label: 'Timp mediu de încărcare pagini' },
    { value: '100% Mobile', label: 'Optimizat pentru traficul din Social Media' },
    { value: 'React 19', label: 'Arhitectură modernă și scalabilă' },
    { value: 'Suport Dedicat', label: 'Asistență și mentenanță continuă' }
  ];

  return (
    <section id="stats" className="stats-section" aria-label="Metrici cheie dezvoltator">
      <div className="container">
        <div className="stats-grid">
          {statsList.map((stat, idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
