import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Services } from './components/Services';
import { ForBrands } from './components/ForBrands';
import { ForCreators } from './components/ForCreators';
import { HowItWorks } from './components/HowItWorks';
import { Categories } from './components/Categories';
import { AboutNexora } from './components/AboutNexora';
import { WhyNexora } from './components/WhyNexora';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { BrandModal } from './components/BrandModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export function App() {
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  const handleOpenBrandModal = () => {
    setIsBrandModalOpen(true);
  };

  const handleCloseBrandModal = () => {
    setIsBrandModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090D1A] text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenBrandModal={handleOpenBrandModal} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <Hero onOpenBrandModal={handleOpenBrandModal} />
        <SocialProof />
        <Services onOpenBrandModal={handleOpenBrandModal} />
        <ForBrands onOpenBrandModal={handleOpenBrandModal} />
        <ForCreators />
        <HowItWorks />
        <Categories />
        <AboutNexora />
        <WhyNexora />
        <FAQ />
        <ContactSection />
        <CTASection onOpenBrandModal={handleOpenBrandModal} />
      </main>

      {/* Footer */}
      <Footer onOpenBrandModal={handleOpenBrandModal} />

      {/* Interactive Brand Inquiry Modal */}
      <BrandModal
        isOpen={isBrandModalOpen}
        onClose={handleCloseBrandModal}
      />

      {/* Mobile Sticky Quick CTA Bar */}
      <MobileStickyCTA onOpenBrandModal={handleOpenBrandModal} />
    </div>
  );
}

export default App;
