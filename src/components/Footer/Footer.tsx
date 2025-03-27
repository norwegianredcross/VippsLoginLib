import React from 'react';
import { Link, Divider } from '@digdir/designsystemet-react';
import { ContactInfo } from '../custom';

interface FooterProps {
  // Add any props if needed
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="site-footer">
      <Divider className="footer-divider" aria-hidden="true" />
      <div className="footer-content">
        <nav className="footer-links" aria-label="Footer navigasjon">
          <Link href="https://www.mittrodekors.no/Account/Login/ExternalAuthenticationFailed" className="footer-link" target="_blank" rel="noopener noreferrer">Personvern</Link>
          <Link href="https://www.mittrodekors.no/informasjonskapsler" className="footer-link" target="_blank" rel="noopener noreferrer">Informasjonskapsler</Link>
        </nav>
        
        <ContactInfo />
      </div>
    </footer>
  );
};

export default Footer;
