'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICE_LANGUAGES, LANGUAGE_FLAGS } from '@/lib/constants';

export default function LanguagesSection() {
  const t = useTranslations();

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('homepage.languages.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('homepage.languages.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_LANGUAGES.map((language, index) => (
            <motion.div
              key={language}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link
                href={`/languages/${language}`}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 group"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{LANGUAGE_FLAGS[language]}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {t(`languages.${language}`)}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Professional Services
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}