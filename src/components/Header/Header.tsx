import React from 'react';
import { Link } from '@digdir/designsystemet-react';
import logoRedcross from '../../assets/logoRedcross.svg';

interface HeaderProps {
  // Add any props if needed
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="top-bar">
      <Link href="https://www.rodekors.no" className="logo-container">
        <div className="logo-content">
          <img
            src={logoRedcross}
            className="logo"
            alt="Røde Kors logo"
            width="181"
            height="56"
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
