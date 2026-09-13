import React from 'react';

function Stats() {
  const statsList = [
    { value: '< 50ms', label: 'Timp răspuns HMR (Vite 6)' },
    { value: 'React 19', label: 'Cea mai nouă versiune React' },
    { value: '100%', label: 'Design complet adaptabil' },
    { value: '0 Dependențe grele', label: 'CSS Vanilla de înaltă performanță' }
  ];

  return (
    <section id="stats" className="stats-section" aria-label="Statistici cheie">
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
