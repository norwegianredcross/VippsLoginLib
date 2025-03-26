import React from 'react';
import { Heading } from '@digdir/designsystemet-react';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import LoginCard from './components/LoginCard';
import OktaWidget from './components/FormCard';

const App: React.FC = () => {
  return (
    <div className="page-container">
      <Header />

      <div className="page-header">
        <div className="title-container">
          <Heading level={1} className="page-title">Logg inn</Heading>
          <hr className="divider" aria-hidden="true" />
        </div>
      </div>

      <main className="help-card">
        <LoginCard />
        <OktaWidget />
      </main>

      <Footer />
    </div>
  );
};

export default App;
