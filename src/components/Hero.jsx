import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to My Modern Website</h1>
      <p>Discover the power of React and modern web design with sleek aesthetics and fluid responsiveness.</p>
      <button onClick={() => alert('Welcome aboard! 🚀')}>Get Started</button>
    </section>
  );
}

export default Hero;
