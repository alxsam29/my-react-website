import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} Alex</span>
        <span>Construit cu React și atenție la detalii</span>
      </div>
    </footer>
  );
}

export default Footer;
