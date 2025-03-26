import React from 'react';
import { Card } from '@digdir/designsystemet-react';

interface FormCardProps {
  // Add any props if needed
}

const OktaWidget: React.FC<FormCardProps> = () => {
  return (
    <Card className="okta-widget" aria-label="Alternative innloggingsmetoder">
      <div className="form-content">
        {/* Content for alternative login methods will go here */}
      </div>
    </Card>
  );
};

export default OktaWidget;
