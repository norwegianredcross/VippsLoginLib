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
          <Link href="/personvern" className="footer-link">Personvern</Link>
          <Link href="/informasjonskapsler" className="footer-link">Informasjonskapsler</Link>
        </nav>
        
        <ContactInfo />
      </div>
    </footer>
  );
};

export default Footer;
