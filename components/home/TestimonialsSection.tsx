'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Testimonial } from '@/types';

export default function TestimonialsSection() {
  const t = useTranslations('homepage.testimonials');

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'Tech Innovations Inc.',
      role: 'VP of Global Operations',
      content: 'Outstanding service! Their team delivered accurate translations for our software localization project ahead of schedule. Highly recommended.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      company: 'Global Medical Solutions',
      role: 'Director of International Affairs',
      content: 'Professional and reliable. They handle our medical document translations with exceptional accuracy and attention to detail.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Maria Rodriguez',
      company: 'International Law Associates',
      role: 'Senior Partner',
      content: 'We trust them with all our legal translation needs. Their certified translators understand the nuances of legal terminology perfectly.',
      rating: 5,
    },
  ];

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
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              <FaQuoteLeft className="text-3xl text-blue-100 absolute top-6 left-6" />
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}