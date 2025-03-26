import React from 'react';
import { Heading, Paragraph, Link, Card } from '@digdir/designsystemet-react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="page-container">
      <header className="main-header">
        <a href="https://www.rodekors.no" className="logo-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ffa4a2eff3ef4483182f81bf7f1b4b8e3%2F678fc6d5da03f6d256e901b5921f0db99f3a48e9"
            className="logo"
            alt="Røde Kors logo"
            width="181"
            height="56"
          />
        </a>
      </header>

      <div className="title-section">
        <div className="title-container">
          <Heading level={1} className="page-title">Logg inn</Heading>
          <hr className="divider" aria-hidden="true" />
        </div>
      </div>

      <main className="main-content">
        <Card className="login-card" aria-labelledby="vipps-login-title">
          <div className="login-content">
            <div className="login-header">
              <span className="new-badge" aria-label="Ny funksjonalitet">Nytt</span>
              <Heading level={2} id="vipps-login-title" className="login-title">Logg inn med Vipps</Heading>
            </div>

            <div className="login-info">
              <div className="login-text">
                <Heading level={3} className="login-subtitle">Ny bruker?</Heading>
                <Paragraph className="login-description">
                  Hvis du ønsker å logge inn med Vipps for første gang, må vi
                  koble Røde Kors-profilen din til Vipps. Klikk på Vipps-knappen
                  for å komme videre.
                </Paragraph>

                <Heading level={3} className="login-subtitle">Eksisterende bruker?</Heading>
                <Paragraph className="login-description">
                  Du kan nå logge inn med Vipps ved å klikke på Vipps-knappen.
                </Paragraph>
              </div>
            </div>

            <div className="alternative-login">
              <Heading level={3} className="login-subtitle">Andre alternativer</Heading>
              <Paragraph className="login-description">
                Bruk Okta-appen eller brukernavnet og passordet du har fått fra
                oss tidligere.
              </Paragraph>
            </div>
          </div>
          
          <div className="help-container">
            <Link href="/hjelp" className="help-footer" aria-label="Trenger du hjelp? Åpner i ny fane" target="_blank" rel="noopener noreferrer">
              <span className="help-text">Trenger du hjelp?</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="external-link-icon"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M11.9988 8.66644V12.6652C11.9988 13.0187 11.8584 13.3577 11.6084 13.6077C11.3585 13.8577 11.0194 13.9981 10.6659 13.9981H3.33487C2.98136 13.9981 2.64233 13.8577 2.39236 13.6077C2.14239 13.3577 2.00195 13.0187 2.00195 12.6652V5.33414C2.00195 4.98063 2.14239 4.64159 2.39236 4.39162C2.64233 4.14165 2.98136 4.00122 3.33487 4.00122H7.33363"
                  stroke="currentColor"
                  strokeWidth="1.2796"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 2.00171H13.9988V6.00046"
                  stroke="currentColor"
                  strokeWidth="1.2796"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66797 9.33276L13.999 2.00171"
                  stroke="currentColor"
                  strokeWidth="1.2796"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </Card>

        <Card className="form-card" aria-label="Alternative innloggingsmetoder">
          <div className="form-content">
            {/* Content for alternative login methods will go here */}
          </div>
        </Card>
      </main>

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
              <dt className="contact-label">E-post:</dt>
              <dd className="contact-row">
                <Link href="mailto:frivilligservice@redcross.no" className="contact-value">frivilligservice@redcross.no</Link>
              </dd>
              <dt className="contact-label">Telefon:</dt>
              <dd className="contact-row">
                <Link href="tel:22054000" className="contact-value">22 05 40 00</Link>
                <span className="extension">(tastevalg 3)</span>
              </dd>
            </dl>
          </address>
        </div>
      </footer>
    </div>
  );
};

export default App;
