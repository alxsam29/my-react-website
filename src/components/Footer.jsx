import React from 'react';

function Footer({ t }) {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} Alex</span>
        <span>{t.footer.builtWith}</span>
      </div>
    </footer>
  );
}

export default Footer;
