'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  FaLaptop, 
  FaHeartbeat, 
  FaChartLine, 
  FaGavel,
  FaIndustry,
  FaShoppingCart,
  FaGraduationCap,
  FaUniversity
} from 'react-icons/fa';
import { INDUSTRIES } from '@/lib/constants';

export default function IndustriesSection() {
  const t = useTranslations();

  const industryIcons = {
    technology: FaLaptop,
    healthcare: FaHeartbeat,
    finance: FaChartLine,
    legal: FaGavel,
    manufacturing: FaIndustry,
    retail: FaShoppingCart,
    education: FaGraduationCap,
    government: FaUniversity,
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('homepage.industries.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('homepage.industries.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industryIcons[industry];
            return (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors duration-200 group cursor-pointer"
              >
                <Icon className="text-4xl text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(`industries.${industry}`)}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}