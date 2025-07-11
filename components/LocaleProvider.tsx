'use client';

import {NextIntlClientProvider} from 'next-intl';
import {useEffect, useState} from 'react';

type Locale = 'en' | 'tr';

interface LocaleProviderProps {
  children: React.ReactNode;
}

export default function LocaleProvider({children}: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>('en');
  const [messages, setMessages] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLocaleData = async () => {
      // Get stored language preference or default to 'en'
      const storedLocale = (localStorage.getItem('preferredLanguage') as Locale) || 'en';
      
      try {
        // Dynamically import the messages for the current locale
        const messagesModule = await import(`../messages/${storedLocale}.json`);
        setMessages(messagesModule.default);
        setLocale(storedLocale);
      } catch {
        // Fallback to English if loading fails
        const messagesModule = await import(`../messages/en.json`);
        setMessages(messagesModule.default);
        setLocale('en');
      }
      
      setIsLoading(false);
    };

    loadLocaleData();
  }, []);

  if (isLoading || !messages) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}