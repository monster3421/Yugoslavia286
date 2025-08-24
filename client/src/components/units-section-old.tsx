import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Bed, Sofa, UtensilsCrossed, Trees, ZoomIn, ChevronLeft, ChevronRight, Building, Home, Maximize, Eye } from "lucide-react";
import { useState, useMemo } from "react";
import { useLazyLoading } from "@/hooks/useLazyLoading";

// Import all updated floor plan images
import newplan1 from "@assets/Screenshot 2025-08-21 at 14-53-23 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748876.png";
import newplan2 from "@assets/Screenshot 2025-08-21 at 14-53-28 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748876.png";
import newplan3 from "@assets/Screenshot 2025-08-21 at 14-53-34 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748876.png";
import newplan4 from "@assets/Screenshot 2025-08-21 at 14-53-38 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan5 from "@assets/Screenshot 2025-08-21 at 14-53-43 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan6 from "@assets/Screenshot 2025-08-21 at 14-53-48 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan7 from "@assets/Screenshot 2025-08-21 at 14-53-51 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan8 from "@assets/Screenshot 2025-08-21 at 14-53-55 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan9 from "@assets/Screenshot 2025-08-21 at 14-53-58 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan10 from "@assets/Screenshot 2025-08-21 at 14-54-07 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan11 from "@assets/Screenshot 2025-08-21 at 14-54-11 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan12 from "@assets/Screenshot 2025-08-21 at 14-54-16 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan13 from "@assets/Screenshot 2025-08-21 at 14-54-22 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan14 from "@assets/Screenshot 2025-08-21 at 14-54-27 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan15 from "@assets/Screenshot 2025-08-21 at 14-54-32 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809748877.png";
import newplan16 from "@assets/Screenshot 2025-08-21 at 14-52-59 yugoslavia286_broshure.cdr - yugoslavia286_broshure-2.pdf_1755809774714.png";
import vienaASecond from "@assets/image_1755810108533.png";
import vienaBFirst from "@assets/image_1755810271634.png";
import vienaBSecond from "@assets/image_1755810357021.png";
import vienaCFirst from "@assets/image_1755810428189.png";
import vienaCSecond from "@assets/image_1755810439551.png";
import vienaDFirst from "@assets/image_1755810531307.png";
import vienaDSecond from "@assets/image_1755810544902.png";
import franciaAFirst from "@assets/image_1755810689972.png";
import franciaASecond from "@assets/image_1755810700842.png";

export default function UnitsSection() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [galleryRef, isGalleryVisible] = useLazyLoading<HTMLDivElement>(0.1, '100px');

  const features = useMemo(() => [
    { icon: Bed, key: 'bedroom' },
    { icon: Sofa, key: 'living' },
    { icon: UtensilsCrossed, key: 'kitchen' },
    { icon: Trees, key: 'terrace' }
  ], []);

  // Memoized floor plan images for performance - Francia A first, then all other models
  const brochureImages = useMemo(() => [
    franciaAFirst, franciaASecond, newplan1, newplan2, newplan3, newplan4,
    newplan5, newplan6, newplan7, newplan8, newplan9, vienaASecond, 
    vienaBFirst, vienaBSecond, vienaCFirst, vienaCSecond, vienaDFirst, vienaDSecond
  ], []);

  const openContactForm = () => {
    const event = new CustomEvent('openContactForm');
    window.dispatchEvent(event);
  };

  const openCarousel = (index: number) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % brochureImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + brochureImages.length) % brochureImages.length);
  };

  return (
    <section id="units" className="py-20 bg-white" data-updated="v2024">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-gray mb-6">
            {t('units.title')}
          </h2>
          <p className="text-xl text-gray-600">{t('units.subtitle')}</p>
        </div>

        <div className="space-y-16">
          {/* Unit Details Summary */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Card className="bg-warm-gray p-3 rounded-lg mx-0">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold text-dark-gray mb-2">
                    Floor Plan Options
                  </h3>

                  <div className="space-y-1.5">
                    <div className="flex items-center">
                      <Building className="h-3.5 w-3.5 text-luxury-teal mr-1.5" />
                      <span className="text-xs">Different floor plans to choose from</span>
                    </div>
                    <div className="flex items-center">
                      <Home className="h-3.5 w-3.5 text-luxury-teal mr-1.5" />
                      <span className="text-xs">Studio to 2-bedroom layouts</span>
                    </div>
                    <div className="flex items-center">
                      <Maximize className="h-3.5 w-3.5 text-luxury-teal mr-1.5" />
                      <span className="text-xs">Various sizes and configurations</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-3.5 w-3.5 text-luxury-teal mr-1.5" />
                      <span className="text-xs">Ocean and city view options</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button 
                onClick={openContactForm}
                className="w-full bg-luxury-teal hover:bg-light-teal text-white py-2.5 rounded-lg font-semibold text-sm transition-all"
              >
                {t('units.requestPlans')}
              </Button>
            </div>


          </div>

          {/* Floor Plans Gallery - Each Plan with Side Module */}
          <div className="space-y-16">

            {/* Generate each plan with side module and 2 images */}
            {isGalleryVisible && Array.from({ length: Math.ceil(brochureImages.length / 2) }, (_, planIndex) => {
              const startIndex = planIndex * 2;
              const planImages = brochureImages.slice(startIndex, startIndex + 2);
              
              // Define specific floor plan information using translation keys
              const floorPlans = [
                {
                  title: t('units.floorPlans.franciaA.title'),
                  subtitle: t('units.floorPlans.franciaA.subtitle'),
                  model: t('units.floorPlans.franciaA.model'),
                  type: t('units.floorPlans.franciaA.type'),
                  bathrooms: t('units.floorPlans.franciaA.size'),
                  features: [
                    { icon: Building, text: t('units.floorPlans.franciaA.features.location') },
                    { icon: Bed, text: t('units.floorPlans.franciaA.features.bedrooms') },
                    { icon: Maximize, text: t('units.floorPlans.franciaA.features.space') },
                    { icon: Eye, text: t('units.floorPlans.franciaA.features.model') }
                  ]
                },
                {
                  title: t('units.floorPlans.franciaB.title'),
                  subtitle: t('units.floorPlans.franciaB.subtitle'),
                  model: t('units.floorPlans.franciaB.model'),
                  type: t('units.floorPlans.franciaB.type'),
                  bathrooms: t('units.floorPlans.franciaB.size'),
                  features: [
                    { icon: Building, text: t('units.floorPlans.franciaB.features.location') },
                    { icon: Bed, text: t('units.floorPlans.franciaB.features.bedrooms') },
                    { icon: Maximize, text: t('units.floorPlans.franciaB.features.space') },
                    { icon: Eye, text: t('units.floorPlans.franciaB.features.model') }
                  ]
                },
                {
                  title: t('units.floorPlans.franciaC.title'),
                  subtitle: t('units.floorPlans.franciaC.subtitle'),
                  model: t('units.floorPlans.franciaC.model'),
                  type: t('units.floorPlans.franciaC.type'),
                  bathrooms: t('units.floorPlans.franciaC.size'),
                  features: [
                    { icon: Building, text: t('units.floorPlans.franciaC.features.location') },
                    { icon: Bed, text: t('units.floorPlans.franciaC.features.bedrooms') },
                    { icon: Maximize, text: t('units.floorPlans.franciaC.features.space') },
                    { icon: Eye, text: t('units.floorPlans.franciaC.features.model') }
                  ]
                },
                {
                  title: t('units.floorPlans.romaA.title'),
                  subtitle: t('units.floorPlans.romaA.subtitle'),
                  model: t('units.floorPlans.romaA.model'),
                  type: t('units.floorPlans.romaA.type'),
                  bathrooms: t('units.floorPlans.romaA.size'),
                  features: [
                    { icon: Building, text: t('units.floorPlans.romaA.features.location') },
                    { icon: Bed, text: t('units.floorPlans.romaA.features.bedrooms') },
                    { icon: Maximize, text: t('units.floorPlans.romaA.features.space') },
                    { icon: Eye, text: t('units.floorPlans.romaA.features.model') }
                  ]
                },
                {
                  title: t('units.floorPlans.romaB.title'),
                  subtitle: t('units.floorPlans.romaB.subtitle'),
                  model: t('units.floorPlans.romaB.model'),
                  type: t('units.floorPlans.romaB.type'),
                  bathrooms: t('units.floorPlans.romaB.size'),
                  features: [
                    { icon: Building, text: t('units.floorPlans.romaB.features.location') },
                    { icon: Home, text: t('units.floorPlans.romaB.features.bedrooms') },
                    { icon: Maximize, text: t('units.floorPlans.romaB.features.space') },
                    { icon: Eye, text: t('units.floorPlans.romaB.features.model') }
                  ]
                },
                {
                  title: t('units.floorPlans.vienaA.title'),
                  subtitle: t('units.floorPlans.vienaA.subtitle'),
                  model: t('units.floorPlans.vienaA.model'),
                  type: t('units.floorPlans.vienaA.type'),
                  bathrooms: t('units.floorPlans.vienaA.size'),
                  features: [
                    { icon: Building, text: t('units.floorPlans.vienaA.features.location') },
                    { icon: Home, text: t('units.floorPlans.vienaA.features.bedrooms') },
                    { icon: Maximize, text: t('units.floorPlans.vienaA.features.space') },
                    { icon: Eye, text: t('units.floorPlans.vienaA.features.model') }
                  ]
                },
                {
                  title: t('units.floorPlans.vienaB.title'),
                  subtitle: t('units.floorPlans.vienaB.subtitle'),
                  model: t('units.floorPlans.vienaB.model'),
                  type: t('units.floorPlans.vienaB.type'),
                  bathrooms: t('units.floorPlans.vienaB.size'),
                  features: [
                    { icon: Building, text: t('units.floorPlans.vienaB.features.location') },
                    { icon: Home, text: t('units.floorPlans.vienaB.features.bedrooms') },
                    { icon: Maximize, text: t('units.floorPlans.vienaB.features.space') },
                    { icon: Eye, text: t('units.floorPlans.vienaB.features.model') }
                  ]
                },
                {
                  title: t('units.floorPlans.vienaC.title'),
                  subtitle: t('units.floorPlans.vienaC.subtitle'),
                  model: t('units.floorPlans.vienaC.model'),
                  type: t('units.floorPlans.vienaC.type'),
                  bathrooms: t('units.floorPlans.vienaC.size'),
                  features: [
                    { icon: Building, text: t('units.floorPlans.vienaC.features.location') },
                    { icon: Home, text: t('units.floorPlans.vienaC.features.bedrooms') },
                    { icon: Maximize, text: t('units.floorPlans.vienaC.features.space') },
                    { icon: Eye, text: t('units.floorPlans.vienaC.features.model') }
                  ]
                },
                {
                  title: t('units.floorPlans.vienaD.title'),
                  subtitle: t('units.floorPlans.vienaD.subtitle'),
                  model: t('units.floorPlans.vienaD.model'),
                  type: t('units.floorPlans.vienaD.type'),
                  bathrooms: t('units.floorPlans.vienaD.size'),
                  features: [
                    { icon: Building, text: t('units.floorPlans.vienaD.features.location') },
                    { icon: Home, text: t('units.floorPlans.vienaD.features.bedrooms') },
                    { icon: Maximize, text: t('units.floorPlans.vienaD.features.space') },
                    { icon: Eye, text: t('units.floorPlans.vienaD.features.model') }
                  ]
                }
              ];

              // Get the current plan info (cycle through if more plans than defined)
              const currentPlan = floorPlans[planIndex % floorPlans.length];
              
              return (
                <div key={planIndex} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8 animate-fade-in">
                    <Card className="bg-warm-gray p-3 rounded-lg mx-0">
                      <CardContent className="p-0">
                        <h5 className="text-lg font-bold text-dark-gray mb-2">
                          {currentPlan.model} • {currentPlan.type} • {currentPlan.bathrooms}
                        </h5>
                        <div className="space-y-1.5">
                          {currentPlan.features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                              <div key={index} className="flex items-center">
                                <Icon className="h-3.5 w-3.5 text-luxury-teal mr-1.5" />
                                <span className="text-xs">{feature.text}</span>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                    {/* No individual request buttons - only main button at top */}
                  </div>

                  <div className="space-y-6 animate-fade-in">
                    {planImages.length > 0 && (
                      <>
                        <div 
                          className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                          onClick={() => openCarousel(startIndex)}
                        >
                          <img 
                            src={planImages[0]}
                            alt={`Plan ${planIndex + 1} - Main View`}
                            className="w-full h-auto"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 h-12 w-12 transition-all duration-300" />
                          </div>
                        </div>
                        
                        {planImages.length > 1 && (
                          <div className="grid grid-cols-1">
                            <div 
                              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                              onClick={() => openCarousel(startIndex + 1)}
                            >
                              <img 
                                src={planImages[1]}
                                alt={`Plan ${planIndex + 1} - Detail View`}
                                className="w-full h-auto"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 h-8 w-8 transition-all duration-300" />
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
            
            {!isGalleryVisible && (
              <div ref={galleryRef} className="h-96 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
                <span className="text-gray-500">Loading gallery...</span>
              </div>
            )}
          </div>

            {/* Carousel Modal */}
            <Dialog open={isCarouselOpen} onOpenChange={setIsCarouselOpen}>
              <DialogContent className="max-w-none w-full h-full p-0 border-0 bg-black" style={{ maxWidth: 'none', maxHeight: 'none' }}>
                <DialogTitle className="sr-only">
                  Floor Plan Gallery - Image {currentImageIndex + 1} of {brochureImages.length}
                </DialogTitle>
                <div className="modal-zoom-container zoomable-container">
                  <img
                    src={brochureImages[currentImageIndex]}
                    alt={`Floor Plan ${currentImageIndex + 1} - Full Size`}
                    className="zoomable-image"
                    style={{
                      touchAction: 'pan-x pan-y pinch-zoom',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      WebkitTouchCallout: 'none'
                    }}
                  />
                  
                  {/* Navigation Buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="modal-nav-button absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-black/30 text-white z-10"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-8 w-8 drop-shadow-lg" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="modal-nav-button absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-black/30 text-white z-10"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-8 w-8 drop-shadow-lg" />
                  </Button>
                  
                  {/* Close Button */}
                  <button 
                    className="modal-close-button absolute top-4 right-4 z-10 bg-transparent hover:bg-black/30 text-white w-12 h-12 flex items-center justify-center transition-all"
                    onClick={() => setIsCarouselOpen(false)}
                  >
                    <span className="text-2xl font-bold drop-shadow-lg">×</span>
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm z-10">
                    {currentImageIndex + 1} / {brochureImages.length}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
  );
}
