import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import OrderForm from '@/components/forms/OrderForm';
import { SERVICE_LANGUAGES, LANGUAGE_FLAGS } from '@/lib/constants';
import { ServiceLanguage } from '@/types';

interface LanguagePageProps {
  params: Promise<{
    language: string;
    locale: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICE_LANGUAGES.map((language) => ({
    language,
  }));
}

export default async function LanguagePage({ params }: LanguagePageProps) {
  const { language } = await params;
  
  if (!SERVICE_LANGUAGES.includes(language as ServiceLanguage)) {
    notFound();
  }

  const t = await getTranslations();
  const lang = language as ServiceLanguage;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">{LANGUAGE_FLAGS[lang]}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t(`languages.${lang}`)} Translation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional {t(`languages.${lang}`)} translation services for documents, 
            websites, software, and more. Certified linguists ensure accuracy and cultural relevance.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our {t(`languages.${lang}`)} Services?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Native-speaking certified translators
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Industry-specific expertise
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Rigorous quality assurance process
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Fast turnaround times
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Competitive pricing
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our {t(`languages.${lang}`)} Services Include:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Document Translation</h3>
                  <p className="text-gray-600">Legal, medical, technical, and business documents</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Website Localization</h3>
                  <p className="text-gray-600">Complete website adaptation for local markets</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Software Localization</h3>
                  <p className="text-gray-600">UI/UX adaptation for software and mobile apps</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Marketing Translation</h3>
                  <p className="text-gray-600">Culturally adapted marketing materials</p>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Technology', 'Healthcare', 'Finance', 'Legal', 'Manufacturing', 'Retail'].map(
                  (industry) => (
                    <span
                      key={industry}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {industry}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <OrderForm sourceLanguage={language} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}