import React from 'react';
import { Card } from '@digdir/designsystemet-react';

interface OktaWidgetProps {
  // Add any props if needed
}

const OktaWidget: React.FC<OktaWidgetProps> = () => {
  return (
    <Card className="okta-widget" aria-label="Alternative innloggingsmetoder">
      <div className="form-content">
        {/* Content for alternative login methods will go here */}
      </div>
    </Card>
  );
};

export default OktaWidget;
