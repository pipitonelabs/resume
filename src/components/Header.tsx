import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Joseph Pipitone - Cloud Engineer</h1>
      <div className="contact-info">
        2 Gilhall Circle • Fairport, NY 14450 •{' '}
        <a href="tel:585-978-1735">585-978-1735</a> •{' '}
        <a href="mailto:joe@pipitonelabs.com">joe@pipitonelabs.com</a>
      </div>
      <p>
        <strong>GitHub:</strong>{' '}
        <a href="https://github.com/pipitonelabs" target="_blank" rel="noopener noreferrer">
          @pipitonelabs
        </a>
      </p>
    </header>
  );
};

export default Header;