import React from 'react';
import logoRedcross from '../../assets/logoRedcross.svg';

interface HeaderProps {
  // Add any props if needed
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="top-bar">
      <a href="https://www.rodekors.no" className="logo-container">
        <img
          src={logoRedcross}
          className="logo"
          alt="Røde Kors logo"
          width="181"
          height="56"
        />
      </a>
    </header>
  );
};

export default Header;
