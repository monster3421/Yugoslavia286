import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import versallesImage from "@assets/Screenshot 2025-08-18 at 19-46-51 yugoslavia286_broshure.cdr - yugoslavia286_broshure-1.pdf_1755568069698.png";

export default function VersallesSection() {
  const { t } = useTranslation();
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Side */}
          <div className="animate-fade-in space-y-6">
            <div 
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              onClick={() => setIsImageOpen(true)}
            >
              <img
                src={versallesImage}
                alt="YUG 286 SLAVIA - Aerial View with Rooftop Pool"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 h-12 w-12 transition-all duration-300" />
              </div>
            </div>

            {/* Investment Factors - Under Image */}
            <div className="space-y-4">
              <div className="bg-luxury-teal/10 p-4 rounded-lg border-l-4 border-luxury-teal">
                <h4 className="font-bold text-luxury-teal text-sm mb-2">
                  {t('versalles.factors.airport.title')}
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  {t('versalles.factors.airport.subtitle')}
                </p>
                <p className="text-xs text-gray-700">
                  {t('versalles.factors.airport.description')}
                </p>
              </div>

              <div className="bg-light-teal/10 p-4 rounded-lg border-l-4 border-light-teal">
                <h4 className="font-bold text-light-teal text-sm mb-2">
                  {t('versalles.factors.appreciation.title')}
                </h4>
                <p className="text-xs text-gray-700">
                  {t('versalles.factors.appreciation.description')}
                </p>
              </div>

              <div className="bg-dark-gray/10 p-4 rounded-lg border-l-4 border-dark-gray">
                <h4 className="font-bold text-dark-gray text-sm mb-2">
                  {t('versalles.factors.growth.title')}
                </h4>
                <p className="text-xs text-gray-700">
                  {t('versalles.factors.growth.description')}
                </p>
              </div>
            </div>

            {/* Image Modal */}
            <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
              <DialogContent className="max-w-none w-full h-full p-0 border-0 bg-black" style={{ maxWidth: 'none', maxHeight: 'none' }}>
                <DialogTitle className="sr-only">
                  YUG 286 SLAVIA - Aerial View with Rooftop Pool - Full Size View
                </DialogTitle>
                <div className="modal-zoom-container zoomable-container">
                  <img
                    src={versallesImage}
                    alt="YUG 286 SLAVIA - Aerial View with Rooftop Pool - Full Size"
                    className="zoomable-image"
                    style={{
                      touchAction: 'pan-x pan-y pinch-zoom',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      WebkitTouchCallout: 'none'
                    }}
                  />
                  <button 
                    className="modal-close-button absolute top-4 right-4 z-10 bg-transparent hover:bg-black/30 text-white w-12 h-12 flex items-center justify-center transition-all"
                    onClick={() => setIsImageOpen(false)}
                  >
                    <span className="text-2xl font-bold drop-shadow-lg">×</span>
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-gray mb-6">
                {t('versalles.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {t('versalles.subtitle')}
              </p>
            </div>

            {/* Investment Highlights */}
            <div className="space-y-6">
              <div className="bg-warm-gray p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark-gray mb-4">
                  {t('versalles.recognition.title')}
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="border-l-4 border-luxury-teal pl-4">
                    <p className="text-sm leading-relaxed">
                      {t('versalles.recognition.quote1')}
                    </p>
                  </div>
                  <div className="border-l-4 border-light-teal pl-4">
                    <p className="text-sm leading-relaxed">
                      {t('versalles.recognition.quote2')}
                    </p>
                  </div>
                  <div className="border-l-4 border-dark-gray pl-4">
                    <p className="text-sm leading-relaxed">
                      {t('versalles.recognition.quote3')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center bg-luxury-teal/10 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-luxury-teal mb-2">
                    {t('versalles.stats.roi')}
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    {t('versalles.stats.roiLabel')}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {t('versalles.stats.roiPeriod')}
                  </div>
                </div>

                <div className="text-center bg-light-teal/10 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-light-teal mb-2">
                    {t('versalles.stats.appreciation')}
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    {t('versalles.stats.appreciationLabel')}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {t('versalles.stats.appreciationPeriod')}
                  </div>
                </div>

                <div className="text-center bg-dark-gray/10 p-6 rounded-xl">
                  <div className="text-lg font-bold text-dark-gray mb-2">
                    {t('versalles.stats.dualRentability')}
                  </div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    {t('versalles.stats.dualDescription')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}