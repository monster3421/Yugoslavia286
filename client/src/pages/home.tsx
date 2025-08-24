import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import HeroSection from "@/components/hero-section";
import VersallesSection from "@/components/versalles-section";
import ExperienceSection from "@/components/experience-section";
import LifestyleSection from "@/components/lifestyle-section";
import InvestmentSection from "@/components/investment-section";
import AmenitiesSection from "@/components/amenities-section";

import UnitsSection from "@/components/units-section";
import LocationSection from "@/components/location-section";
import WhatsAppButton from "@/components/whatsapp-button";
import ContactForm from "@/components/contact-form";
import LanguageToggle from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, ZoomIn } from "lucide-react";
import { useState } from "react";

import footerLogo from "@assets/Your paragraph text (300 x 300 px) (300 x 200 px) (300 x 170 px)(1)_1755613731494.png";
import buildingHero from "@assets/Screenshot 2025-08-18 at 14-39-06 yugoslavia286_broshure.cdr - yugoslavia286_broshure-1.pdf_1755807800508.png";

export default function Home() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Yugoslavia 286 - Luxury Condominiums in Puerto Vallarta";
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md z-50 border-b border-white/30">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src={footerLogo} 
                alt="YUG 286 SLAVIA" 
                className="h-12 w-auto object-contain cursor-pointer"
                onClick={() => scrollToSection('home')}
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-light-teal transition-colors"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('amenities')}
                className="text-white hover:text-light-teal transition-colors"
              >
                {t('nav.amenities')}
              </button>
              <button 
                onClick={() => scrollToSection('units')}
                className="text-white hover:text-light-teal transition-colors"
              >
                {t('nav.units')}
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-white hover:text-light-teal transition-colors"
              >
                {t('nav.location')}
              </button>
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:text-light-teal"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-sm border-t border-white/20">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-light-teal"
                >
                  {t('nav.home')}
                </button>
                <button 
                  onClick={() => scrollToSection('amenities')}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-light-teal"
                >
                  {t('nav.amenities')}
                </button>
                <button 
                  onClick={() => scrollToSection('units')}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-light-teal"
                >
                  {t('nav.units')}
                </button>
                <button 
                  onClick={() => scrollToSection('location')}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-light-teal"
                >
                  {t('nav.location')}
                </button>
                <div className="px-3 py-2">
                  <LanguageToggle />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Main Content */}
      <main>
        <HeroSection />
        <VersallesSection />
        <ExperienceSection />
        <LifestyleSection />
        <InvestmentSection />
        <AmenitiesSection />
        <UnitsSection />
        <LocationSection />

        {/* Building Hero Image */}
        <section className="w-full">
          <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
            <img
              src={buildingHero}
              alt="Yugoslavia 286 Building at Sunset"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-luxury-teal text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90">{t('cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-luxury-teal hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                onClick={() => {
                  const event = new CustomEvent('openContactForm');
                  window.dispatchEvent(event);
                }}
              >
                {t('cta.scheduleTour')}
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-[#379997fa] hover:bg-white hover:text-luxury-teal px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                onClick={() => window.open('https://wa.me/523221244144', '_blank')}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                {t('cta.whatsapp')}
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark-gray text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="mb-4">
                  <img 
                    src={footerLogo} 
                    alt="YUG 286 SLAVIA" 
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <p className="text-gray-400 mb-4">{t('footer.description')}</p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/1CD63C8kWA/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/yugoslavia286" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>

                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">{t('footer.contactInfo')}</h4>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>{t('footer.address')}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone mr-2"></i>
                    <span>{t('footer.phone')}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope mr-2"></i>
                    <span>{t('footer.email')}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
                <div className="space-y-2 text-gray-400">
                  <button 
                    onClick={() => scrollToSection('amenities')}
                    className="block hover:text-white transition-colors text-left"
                  >
                    {t('nav.amenities')}
                  </button>
                  <button 
                    onClick={() => scrollToSection('units')}
                    className="block hover:text-white transition-colors text-left"
                  >
                    {t('nav.units')}
                  </button>
                  <button 
                    onClick={() => scrollToSection('location')}
                    className="block hover:text-white transition-colors text-left"
                  >
                    {t('nav.location')}
                  </button>
                  <button 
                    onClick={() => {
                      const event = new CustomEvent('openContactForm');
                      window.dispatchEvent(event);
                    }}
                    className="block hover:text-white transition-colors text-left"
                  >
                    {t('contact.title')}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400">
              <p>&copy; 2024 YUGOSLAVIA286. {t('footer.rights')}</p>
              <Link href="/privacy-policy">
                <button className="text-gray-400 hover:text-white transition-colors mt-4 sm:mt-0">
                  {t('footer.privacyPolicy')}
                </button>
              </Link>
            </div>
          </div>
        </footer>
      </main>
      <WhatsAppButton />
      <ContactForm />
    </div>
  );
}
