'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFileAlt, FaLaptopCode, FaHeadphones } from 'react-icons/fa';

export default function ServicesOverview() {
  const t = useTranslations('homepage.services');

  const services = [
    {
      icon: FaFileAlt,
      key: 'translation',
      href: '/services/translation',
    },
    {
      icon: FaLaptopCode,
      key: 'localization',
      href: '/services/localization',
    },
    {
      icon: FaHeadphones,
      key: 'interpreting',
      href: '/services/interpreting',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Now on the left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1"
          >
            <Image
              src="/images/placeholder.svg"
              alt="Language services overview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Text Content - Now on the right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              {t('title')}
            </h2>
            <div className="space-y-6">
              {services.map(({ icon: Icon, key, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <div className="flex items-start space-x-4">
                    <Icon className="text-blue-600 text-2xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t(`${key}.title`)}
                      </h3>
                      <p className="text-gray-600">
                        {t(`${key}.description`)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}