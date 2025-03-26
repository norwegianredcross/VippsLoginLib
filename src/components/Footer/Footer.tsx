import React from 'react';
import { Link } from '@digdir/designsystemet-react';

interface FooterProps {
  // Add any props if needed
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="site-footer">
      <hr className="footer-divider" aria-hidden="true" />
      <div className="footer-content">
        <nav className="footer-links" aria-label="Footer navigasjon">
          <Link href="/personvern" className="footer-link">Personvern</Link>
          <Link href="/informasjonskapsler" className="footer-link">Informasjonskapsler</Link>
        </nav>
        
        <address className="contact-info" aria-labelledby="contact-heading">
          <h2 className="service-label" id="contact-heading">FRIVILLIGSERVICE:</h2>
          <dl>
            <div className="contact-item">
              <dt className="contact-label">E-post:</dt>
              <dd className="contact-row">
                <Link href="mailto:frivilligservice@redcross.no" className="contact-value">frivilligservice@redcross.no</Link>
              </dd>
            </div>
            <div className="contact-item">
              <dt className="contact-label">Telefon:</dt>
              <dd className="contact-row">
                <Link href="tel:22054000" className="contact-value">22 05 40 00</Link>
                <span className="extension">(tastevalg 3)</span>
              </dd>
            </div>
          </dl>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
