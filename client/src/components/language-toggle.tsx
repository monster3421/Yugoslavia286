import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={i18n.language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => toggleLanguage('en')}
        className={`px-3 py-1 text-sm font-medium ${
          i18n.language === 'en' 
            ? 'bg-luxury-teal text-white border-luxury-teal' 
            : 'text-gray-500 hover:text-luxury-teal border-gray-300'
        }`}
      >
        EN
      </Button>
      <Button
        variant={i18n.language === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => toggleLanguage('es')}
        className={`px-3 py-1 text-sm font-medium ${
          i18n.language === 'es' 
            ? 'bg-luxury-teal text-white border-luxury-teal' 
            : 'text-gray-500 hover:text-luxury-teal border-gray-300'
        }`}
      >
        ES
      </Button>
    </div>
  );
}
