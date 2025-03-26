import React from 'react';
import { Heading, Paragraph, Link, Card } from '@digdir/designsystemet-react';
import { ExternalLinkIcon } from '../Icons';

interface LoginCardProps {
  // Add any props if needed
}

const LoginCard: React.FC<LoginCardProps> = () => {
  return (
    <Card className="login-card" aria-labelledby="vipps-login-title">
      <div className="login-content">
        <div className="login-header">
          <span className="new-badge" aria-label="Ny funksjonalitet">Nytt</span>
          <Heading level={2} id="vipps-login-title" className="login-title">Logg inn med Vipps</Heading>
        </div>

        <div className="login-info">
          <div className="help-body">
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

        <div className="help-body">
          <Heading level={3} className="login-subtitle">Andre alternativer</Heading>
          <Paragraph className="login-description">
            Bruk Okta-appen eller brukernavnet og passordet du har fått fra
            oss tidligere.
          </Paragraph>
        </div>
      </div>
      
      <div className="help-container">
        <Link href="/hjelp" className="help-link" aria-label="Trenger du hjelp? Åpner i ny fane" target="_blank" rel="noopener noreferrer">
          <span className="help-text">Trenger du hjelp?</span>
          <ExternalLinkIcon className="external-link-icon" />
        </Link>
      </div>
    </Card>
  );
};

export default LoginCard;
