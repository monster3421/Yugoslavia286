import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";

import heroVideo from "@assets/WhatsApp Video 2025-08-21 at 2.06.13 PM_1755807599583.mp4";
import brochurePdf from "@assets/yugoslavia286_broshure-2_1755807122337.pdf";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const { logPerformanceMetrics } = usePerformanceOptimization();


  const scrollToAmenities = () => {
    const element = document.getElementById('amenities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openContactForm = () => {
    const event = new CustomEvent('openContactForm');
    window.dispatchEvent(event);
  };

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = brochurePdf;
    link.download = 'Yugoslavia-286-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden hero-section">
      {/* Hero Background - Optimized Video */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover hero-video"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMUYyOTM3Ii8+Cjx0ZXh0IHg9Ijk2MCIgeT0iNTQwIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4cHgiPkxvYWRpbmcuLi48L3RleHQ+Cjwvc3ZnPgo="
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            <span className="text-white">
              Yugoslavia
            </span>{' '}
            <span className="text-light-teal">
              286
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            {i18n.language === 'es' ? 'tu refugio • your refuge' : 'your refuge • tu refugio'}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openContactForm}
              className="bg-luxury-teal hover:bg-light-teal text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              {t('hero.scheduleVisit')}
            </Button>
            <Button
              onClick={downloadBrochure}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 border-2 border-white hover:bg-white hover:text-dark-gray px-8 py-4 rounded-lg font-semibold text-lg transition-all bg-[#ffffff] text-[#00ace0]"
            >
              <Download className="h-5 w-5" />
              {i18n.language === 'es' ? 'Descargar Brochure' : 'Download Brochure'}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>


    </section>
  );
}
