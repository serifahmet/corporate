'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { OrderFormData } from '@/types';
import { SERVICE_LANGUAGES, DOCUMENT_TYPES } from '@/lib/constants';

interface OrderFormProps {
  sourceLanguage?: string;
}

export default function OrderForm({ sourceLanguage }: OrderFormProps) {
  const t = useTranslations('forms');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OrderFormData>();

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg shadow-lg p-6 md:p-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {t('order.title')}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Source Language */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('order.sourceLanguage')}
          </label>
          <select
            {...register('sourceLanguage', { required: t('validation.required') })}
            defaultValue={sourceLanguage}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a language</option>
            {SERVICE_LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {t(`languages.${lang}`)}
              </option>
            ))}
          </select>
          {errors.sourceLanguage && (
            <p className="mt-1 text-sm text-red-600">{errors.sourceLanguage.message}</p>
          )}
        </div>

        {/* Target Language */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('order.targetLanguage')}
          </label>
          <select
            {...register('targetLanguage', { required: t('validation.required') })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a language</option>
            {SERVICE_LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {t(`languages.${lang}`)}
              </option>
            ))}
          </select>
          {errors.targetLanguage && (
            <p className="mt-1 text-sm text-red-600">{errors.targetLanguage.message}</p>
          )}
        </div>

        {/* Document Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('order.documentType')}
          </label>
          <select
            {...register('documentType', { required: t('validation.required') })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select document type</option>
            {DOCUMENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.documentType && (
            <p className="mt-1 text-sm text-red-600">{errors.documentType.message}</p>
          )}
        </div>

        {/* Word Count */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('order.wordCount')}
          </label>
          <input
            type="number"
            {...register('wordCount', { 
              required: t('validation.required'),
              min: { value: 1, message: 'Must be at least 1' }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="1000"
          />
          {errors.wordCount && (
            <p className="mt-1 text-sm text-red-600">{errors.wordCount.message}</p>
          )}
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('order.deadline')}
          </label>
          <input
            type="date"
            {...register('deadline', { required: t('validation.required') })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.deadline && (
            <p className="mt-1 text-sm text-red-600">{errors.deadline.message}</p>
          )}
        </div>

        {/* Additional Notes */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('order.additionalNotes')}
          </label>
          <textarea
            {...register('additionalNotes')}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Any special requirements or instructions..."
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-8 border-t pt-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.name')}
            </label>
            <input
              type="text"
              {...register('contactInfo.name', { required: t('validation.required') })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.contactInfo?.name && (
              <p className="mt-1 text-sm text-red-600">{errors.contactInfo.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.email')}
            </label>
            <input
              type="email"
              {...register('contactInfo.email', { 
                required: t('validation.required'),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t('validation.emailInvalid')
                }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.contactInfo?.email && (
              <p className="mt-1 text-sm text-red-600">{errors.contactInfo.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.phone')}
            </label>
            <input
              type="tel"
              {...register('contactInfo.phone', { required: t('validation.required') })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.contactInfo?.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.contactInfo.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.company')}
            </label>
            <input
              type="text"
              {...register('contactInfo.company', { required: t('validation.required') })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.contactInfo?.company && (
              <p className="mt-1 text-sm text-red-600">{errors.contactInfo.company.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : t('common.cta.orderNow')}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-md">
          {t('contact.success')}
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-md">
          {t('contact.error')}
        </div>
      )}
    </motion.form>
  );
}