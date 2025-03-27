import React from 'react';
import { Heading, Link } from '@digdir/designsystemet-react';

interface ContactInfoProps {
  className?: string;
}

/**
 * Contact information component using Digdir design system tokens via CSS
 */
const ContactInfo: React.FC<ContactInfoProps> = ({ className = '' }) => {
  return (
    <address
      className={`contact-info ${className}`}
      aria-labelledby="contact-heading"
    >
      <Heading 
        level={2} 
        id="contact-heading" 
        data-size="sm"
        className="service-label"
      >
        FRIVILLIGSERVICE:
      </Heading>
      
      <dl className="contact-info-list">
        <div className="contact-item">
          <dt className="contact-label">
            E-post:
          </dt>
          <dd className="contact-row">
            <Link href="mailto:frivilligservice@redcross.no" className="contact-value">
              frivilligservice@redcross.no
            </Link>
          </dd>
        </div>
        
        <div className="contact-item">
          <dt className="contact-label">
            Telefon:
          </dt>
          <dd className="contact-row">
            <Link href="tel:22054000" className="contact-value">
              22 05 40 00
            </Link>
            <span className="extension">
              (tastevalg 3)
            </span>
          </dd>
        </div>
      </dl>
    </address>
  );
};

export default ContactInfo;
