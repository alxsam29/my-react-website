import React from 'react';

function Features() {
  const featuresList = [
    {
      icon: "⚡",
      title: "Fast Performance",
      desc: "React's virtual DOM and Vite's HMR ensure your app loads instantly and runs smoothly."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Looks gorgeous on all devices, from mobile smartphones and tablets to ultra-wide displays."
    },
    {
      icon: "🎨",
      title: "Easy to Customize",
      desc: "Modular components and clean CSS variables make it simple to adapt to your own branding."
    }
  ];

  return (
    <section className="features">
      {featuresList.map((f, i) => (
        <div className="feature" key={i}>
          <span className="feature-icon">{f.icon}</span>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
