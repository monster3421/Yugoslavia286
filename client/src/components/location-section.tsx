import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Plane, Anchor, Building, ShoppingBag, ZoomIn } from "lucide-react";
import { useState } from "react";
import locationImage from "@assets/Screenshot 2025-08-18 at 18-40-23 yugoslavia286_broshure.cdr - yugoslavia286_broshure-1.pdf_1755564069179.png";

export default function LocationSection() {
  const { t } = useTranslation();
  const [isImageOpen, setIsImageOpen] = useState(false);

  const locations = [
    {
      icon: Plane,
      titleKey: 'airport.title',
      distanceKey: 'airport.distance'
    },
    {
      icon: Anchor,
      titleKey: 'marina.title',
      distanceKey: 'marina.distance'
    },
    {
      icon: Building,
      titleKey: 'downtown.title',
      distanceKey: 'downtown.distance'
    },
    {
      icon: ShoppingBag,
      titleKey: 'shopping.title',
      distanceKey: 'shopping.distance'
    }
  ];

  return (
    <section id="location" className="py-20 bg-warm-gray">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-gray mb-6">
            {t('location.title')}
          </h2>
          <p className="text-xl text-gray-600">{t('location.subtitle')}</p>
        </div>

        <div className="animate-fade-in">
          <div 
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={() => setIsImageOpen(true)}
          >
            <img 
              src={locationImage}
              alt="Yugoslavia 286 - Puerto Vallarta Location" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 h-12 w-12 transition-all duration-300" />
            </div>
          </div>

          {/* Image Modal */}
          <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
            <DialogContent className="max-w-7xl w-full max-h-[95vh] p-0 border-0">
              <DialogTitle className="sr-only">
                Yugoslavia 286 - Puerto Vallarta Location - Full Size View
              </DialogTitle>
              <div className="relative bg-black">
                <img
                  src={locationImage}
                  alt="Yugoslavia 286 - Puerto Vallarta Location - Full Size"
                  className="w-full h-auto max-h-[95vh] object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
