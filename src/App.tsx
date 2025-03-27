import React from 'react';
import { Heading, Divider } from '@digdir/designsystemet-react';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import HelpCard from './components/helpCard';
import OktaWidget from './components/oktaWidget';
import { PageContainer } from './components/custom';

const App: React.FC = () => {
  return (
    <PageContainer>
      <Header />

      <div className="page-header">
        <div className="title-container">
          <Heading level={1} className="page-title" data-size="xl">Logg inn</Heading>
          <Divider className="title-divider" aria-hidden="true" />
        </div>
      </div>

      <main className="help-card">
        <HelpCard />
        <OktaWidget />
      </main>

      <Footer />
    </PageContainer>
  );
};

export default App;
