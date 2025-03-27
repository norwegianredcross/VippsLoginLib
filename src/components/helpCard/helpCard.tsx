import React from 'react';
import { Heading, Paragraph, Link, Card, Divider } from '@digdir/designsystemet-react';
import { ExternalLinkIcon } from '../Icons';
import { Badge } from '../custom';

interface HelpCardProps {
  // Add any props if needed
}

const HelpCard: React.FunctionComponent<HelpCardProps> = (props) => {
  return (
    <Card className="login-card" aria-labelledby="vipps-login-title">
      <div className="login-content">
        <div className="login-header">
          <Badge aria-label="Ny funksjonalitet">Nytt</Badge>
          <Heading level={2} id="vipps-login-title" className="login-title" data-size="md">Logg inn med Vipps</Heading>
        </div>

        <div className="login-info">
          <div className="help-body">
            <Heading level={3} className="login-subtitle" data-size="xs">Ny bruker?</Heading>
            <Paragraph className="login-description">
              Hvis du ønsker å logge inn med Vipps for første gang, må vi
              koble Røde Kors-profilen din til Vipps. Klikk på Vipps-knappen
              for å komme videre.
            </Paragraph>

            <Heading level={3} className="login-subtitle" data-size="xs">Eksisterende bruker?</Heading>
            <Paragraph className="login-description">
              Du kan nå logge inn med Vipps ved å klikke på Vipps-knappen.
            </Paragraph>
          </div>
        </div>

        <div className="help-body">
        <Heading level={2} id="vipps-login-title" className="login-title" data-size="md">Andre alternativer</Heading>
          <Paragraph className="login-description">
            Bruk Okta-appen eller brukernavnet og passordet du har fått fra
            oss tidligere.
          </Paragraph>
        </div>
      </div>
      
      <Divider className="help-divider" />
      
      <div className="help-container">
        <Link href="https://www.rodekors.no/om/kontakt/frivilligservice/" className="help-link" aria-label="Trenger du hjelp? Åpner i ny fane" target="_blank" rel="noopener noreferrer">
          <span className="help-text">Trenger du hjelp?</span>
          <ExternalLinkIcon className="external-link-icon" />
        </Link>
      </div>
    </Card>
  );
};

export default HelpCard;
