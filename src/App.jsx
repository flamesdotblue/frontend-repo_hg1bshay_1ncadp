import React from 'react';
import HeroCover from './components/HeroCover';
import StudioOverview from './components/StudioOverview';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import FooterCTA from './components/FooterCTA';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroCover />
      <StudioOverview />
      <CapabilitiesGrid />
      <FooterCTA />
    </div>
  );
};

export default App;
