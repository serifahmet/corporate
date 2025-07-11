'use client';

import {NextIntlClientProvider} from 'next-intl';
import {useEffect, useState} from 'react';
import trMessages from '../messages/tr.json';
import enMessages from '../messages/en.json';

type Locale = 'en' | 'tr';

interface LocaleProviderProps {
  children: React.ReactNode;
}

const messagesMap = {
  tr: trMessages,
  en: enMessages,
};

export default function LocaleProvider({children}: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>('tr');
  const [messages, setMessages] = useState<Record<string, unknown>>(trMessages);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Get stored language preference or default to 'tr'
    const storedLocale = (localStorage.getItem('preferredLanguage') as Locale) || 'tr';
    
    setLocale(storedLocale);
    setMessages(messagesMap[storedLocale]);
  }, []);

  // During SSR, render with default Turkish messages
  if (!isClient) {
    return (
      <NextIntlClientProvider locale="tr" messages={trMessages}>
        {children}
      </NextIntlClientProvider>
    );
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}