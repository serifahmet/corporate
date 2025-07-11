'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaGlobe, FaUsers, FaClock } from 'react-icons/fa';

export default function AboutSection() {
  const t = useTranslations('homepage.about');

  const features = [
    { icon: FaCheckCircle, key: 'quality' },
    { icon: FaUsers, key: 'experts' },
    { icon: FaGlobe, key: 'languages' },
    { icon: FaClock, key: 'availability' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('description')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, key }) => (
                <div key={key} className="flex items-start space-x-3">
                  <Icon className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{t(`features.${key}`)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/placeholder.svg"
              alt="Professional translation team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}