import React from 'react';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <div className="container">
        <h1>My Modern Site</h1>
        <button 
          className="dark-mode-toggle" 
          onClick={() => toggleDarkMode(!darkMode)}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

export default Header;
