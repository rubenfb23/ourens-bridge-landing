
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ManifestoSection from '../components/ManifestoSection';
import SpotlightSection from '../components/SpotlightSection';
import CommunityPulseSection from '../components/CommunityPulseSection';
import ConnectSection from '../components/ConnectSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ManifestoSection />
        <SpotlightSection />
        <CommunityPulseSection />
        <ConnectSection />
      </main>
    </div>
  );
};

export default Index;
