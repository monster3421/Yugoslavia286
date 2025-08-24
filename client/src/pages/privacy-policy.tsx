import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Privacy Policy - Yugoslavia 286";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('privacy.backToHome')}
              </Button>
            </Link>
            <div className="text-2xl font-display font-bold text-gray-900">
              Yugoslavia <span className="text-luxury-teal">286</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {t('privacy.title')}
          </h1>
          
          <p className="text-gray-600 mb-8">
            {t('privacy.lastUpdated')}: {t('privacy.date')}
          </p>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.introduction.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.introduction.content')}
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.collection.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacy.collection.intro')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>{t('privacy.collection.personal')}</li>
                <li>{t('privacy.collection.contact')}</li>
                <li>{t('privacy.collection.preferences')}</li>
                <li>{t('privacy.collection.technical')}</li>
              </ul>
            </section>

            {/* Use of Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.usage.title')}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>{t('privacy.usage.communication')}</li>
                <li>{t('privacy.usage.services')}</li>
                <li>{t('privacy.usage.marketing')}</li>
                <li>{t('privacy.usage.improvement')}</li>
                <li>{t('privacy.usage.legal')}</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.sharing.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacy.sharing.intro')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>{t('privacy.sharing.partners')}</li>
                <li>{t('privacy.sharing.legal')}</li>
                <li>{t('privacy.sharing.business')}</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.security.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.security.content')}
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.rights.title')}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>{t('privacy.rights.access')}</li>
                <li>{t('privacy.rights.correction')}</li>
                <li>{t('privacy.rights.deletion')}</li>
                <li>{t('privacy.rights.portability')}</li>
                <li>{t('privacy.rights.objection')}</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.cookies.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.cookies.content')}
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.thirdParty.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacy.thirdParty.intro')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>{t('privacy.thirdParty.analytics')}</li>
                <li>{t('privacy.thirdParty.social')}</li>
                <li>{t('privacy.thirdParty.communications')}</li>
                <li>{t('privacy.thirdParty.maps')}</li>
              </ul>
            </section>

            {/* Social Media Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.facebook.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.facebook.content')}
              </p>
            </section>

            {/* Advertising and Marketing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.advertising.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacy.advertising.intro')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>{t('privacy.advertising.targeted')}</li>
                <li>{t('privacy.advertising.email')}</li>
                <li>{t('privacy.advertising.retargeting')}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.advertising.optOut')}
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.dataRetention.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.dataRetention.content')}
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.international.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.international.content')}
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.minors.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.minors.content')}
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacy.contact.intro')}
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Yugoslavia 286</p>
                <p className="text-gray-700">Yugoslavia 286, Puerto Vallarta Jalisco MX</p>
                <p className="text-gray-700">Email: ventas@yugoslavia286.com</p>
                <p className="text-gray-700">Phone: +52 322 124 4144</p>
              </div>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.changes.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.changes.content')}
              </p>
            </section>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/">
              <Button className="bg-luxury-teal hover:bg-luxury-teal/90 text-white">
                {t('privacy.backToHome')}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}