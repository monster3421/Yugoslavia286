import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Import amenity images from brochure
import amenity1 from "@assets/Screenshot 2025-08-18 at 19-12-20 yugoslavia286_broshure.cdr - yugoslavia286_broshure-1.pdf_1755565997415.png";
import amenity2 from "@assets/Screenshot 2025-08-18 at 19-12-51 yugoslavia286_broshure.cdr - yugoslavia286_broshure-1.pdf_1755565997415.png";
import amenity3 from "@assets/Screenshot 2025-08-18 at 19-12-56 yugoslavia286_broshure.cdr - yugoslavia286_broshure-1.pdf_1755565997415.png";

export default function AmenitiesSection() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  // Array of all amenity images
  const amenityImages = [amenity1, amenity2, amenity3];

  const openCarousel = (index: number) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % amenityImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + amenityImages.length) % amenityImages.length);
  };

  return (
    <section id="amenities" className="py-20 bg-warm-gray">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-gray mb-6">
            {t('amenities.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('amenities.subtitle')}
          </p>
        </div>

        {/* Swimming Pool - Full Width Hero Image */}
        <div className="mb-8 animate-fade-in">
          <div 
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={() => openCarousel(0)}
          >
            <img
              src={amenity1}
              alt="Rooftop Pool & Terrace"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 h-12 w-12 transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Other Amenities - Smaller Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
          {amenityImages.slice(1).map((image, index) => (
            <div 
              key={index + 1}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openCarousel(index + 1)}
            >
              <img
                src={image}
                alt={`Amenity ${index + 2}`}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 h-8 w-8 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Modal */}
        <Dialog open={isCarouselOpen} onOpenChange={setIsCarouselOpen}>
          <DialogContent className="max-w-none w-full h-full p-0 border-0 bg-black" style={{ maxWidth: 'none', maxHeight: 'none' }}>
            <DialogTitle className="sr-only">
              Amenity Gallery - Image {currentImageIndex + 1} of {amenityImages.length}
            </DialogTitle>
            <div className="modal-zoom-container zoomable-container">
              <img
                src={amenityImages[currentImageIndex]}
                alt={`Amenity ${currentImageIndex + 1} - Full Size`}
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
                {currentImageIndex + 1} / {amenityImages.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
