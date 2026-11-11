import React, { useRef } from 'react';
import { Navbar } from './components/karate/Navbar';
import { HeroKarate } from './components/karate/HeroKarate';
import { ClubHeritage } from './components/karate/ClubHeritage';
import { FourDojosSection } from './components/karate/FourDojosSection';
import { AgeCategoriesSection } from './components/karate/AgeCategoriesSection';
import { BeltProgression } from './components/karate/BeltProgression';
import { DossierAndPricing } from './components/karate/DossierAndPricing';
import { RegistrationSection, type RegistrationSectionRef } from './components/karate/RegistrationSection';
import { PhotoGallery } from './components/karate/PhotoGallery';
import { FaqSection } from './components/karate/FaqSection';
import { Footer } from './components/karate/Footer';
import { StickyMobileBar } from './components/karate/StickyMobileBar';

export const App: React.FC = () => {
  const registrationRef = useRef<RegistrationSectionRef>(null);

  const handleOpenRegister = (dojoId?: string) => {
    if (dojoId && registrationRef.current) {
      registrationRef.current.setDojo(dojoId);
    } else if (registrationRef.current) {
      registrationRef.current.scrollToForm();
    } else {
      const el = document.getElementById('inscription');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDojo = (dojoId: string) => {
    if (registrationRef.current) {
      registrationRef.current.setDojo(dojoId);
    } else {
      const el = document.getElementById('inscription');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catId: string) => {
    if (registrationRef.current) {
      registrationRef.current.setCategory(catId);
    } else {
      const el = document.getElementById('inscription');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreDojos = () => {
    const el = document.getElementById('dojos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#111827] relative font-sans selection:bg-[#DC2626] selection:text-white pb-14 lg:pb-0">
      {/* Fixed Header */}
      <Navbar onOpenRegister={handleOpenRegister} />

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroKarate
          onOpenRegister={handleOpenRegister}
          onExploreDojos={handleExploreDojos}
        />

        {/* Club Heritage & Martial Values */}
        <ClubHeritage />

        {/* The 4 Dojos in Annaba */}
        <FourDojosSection onSelectDojo={handleSelectDojo} />

        {/* Age Categories & Programs */}
        <AgeCategoriesSection onSelectCategory={handleSelectCategory} />

        {/* Shotokan Belt Progression */}
        <BeltProgression />

        {/* Official Pricing (2000 DA) & Required Dossier */}
        <DossierAndPricing onOpenRegister={() => handleOpenRegister()} />

        {/* Interactive Registration Form & Receipt Generator */}
        <RegistrationSection ref={registrationRef} />

        {/* Dojo Realistic Photos Gallery */}
        <PhotoGallery />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Sticky Mobile Bar for Conversion */}
      <StickyMobileBar onOpenRegister={() => handleOpenRegister()} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
