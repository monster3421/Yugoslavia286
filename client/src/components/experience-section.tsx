import { useTranslation } from "react-i18next";
import experienceImage from "@assets/Screenshot 2025-08-19 at 08-43-09 yugoslavia286_broshure.cdr - yugoslavia286_broshure-1.pdf_1755614606514.png";

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-gray mb-6">
            Experience the Magic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Live the Puerto Vallarta lifestyle
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Content - Left Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={experienceImage}
                alt={t('experience.imageAlt')}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="space-y-8">            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('experience.description1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('experience.description2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('experience.description3')}
              </p>
            </div>


          </div>
        </div>
        </div>
    </section>
  );
}