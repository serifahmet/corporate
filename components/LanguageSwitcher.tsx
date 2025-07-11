'use client';

import {useState} from 'react';
import {useLocale} from 'next-intl';

type Locale = 'en' | 'tr';

const languages = [
  { code: 'tr' as Locale, name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en' as Locale, name: 'English', flag: '🇺🇸' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale() as Locale;
  
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];
  
  const changeLanguage = (locale: Locale) => {
    // For static export, we'll use localStorage to store the language preference
    // and reload the page to apply changes
    localStorage.setItem('preferredLanguage', locale);
    window.location.reload();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#161b22] hover:bg-[#21262d] transition-colors border border-[#30363d]"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium">{currentLanguage.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-[#161b22] rounded-lg shadow-lg border border-[#30363d] z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-[#21262d] first:rounded-t-lg last:rounded-b-lg transition-colors ${
                locale === language.code ? 'bg-[#21262d] text-white' : 'text-gray-300'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
              {locale === language.code && (
                <svg className="w-4 h-4 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}