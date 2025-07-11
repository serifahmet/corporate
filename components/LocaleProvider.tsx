'use client';

import {NextIntlClientProvider} from 'next-intl';
import {useEffect, useState} from 'react';

type Locale = 'en' | 'tr';

interface LocaleProviderProps {
  children: React.ReactNode;
}

export default function LocaleProvider({children}: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>('tr');
  const [messages, setMessages] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLocaleData = async () => {
      // Get stored language preference or default to 'tr'
      const storedLocale = (localStorage.getItem('preferredLanguage') as Locale) || 'tr';
      
      try {
        // Dynamically import the messages for the current locale
        const messagesModule = await import(`../messages/${storedLocale}.json`);
        setMessages(messagesModule.default);
        setLocale(storedLocale);
      } catch {
        // Fallback to Turkish if loading fails
        const messagesModule = await import(`../messages/tr.json`);
        setMessages(messagesModule.default);
        setLocale('tr');
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