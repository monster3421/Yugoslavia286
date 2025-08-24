import { useTranslation } from "react-i18next";
import lifestyleImage from "@assets/Screenshot 2025-08-19 at 08-38-42 yugoslavia286_broshure.cdr - yugoslavia286_broshure-1.pdf_1755614336902.png";

export default function LifestyleSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('lifestyle.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('lifestyle.subtitle')}
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('lifestyle.description1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('lifestyle.description2')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="space-y-2">
                <h4 className="font-semibold text-luxury-teal text-lg">
                  {t('lifestyle.features.location.title')}
                </h4>
                <p className="text-gray-600">
                  {t('lifestyle.features.location.description')}
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-luxury-teal text-lg">
                  {t('lifestyle.features.investment.title')}
                </h4>
                <p className="text-gray-600">
                  {t('lifestyle.features.investment.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={lifestyleImage}
                alt={t('lifestyle.imageAlt')}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}