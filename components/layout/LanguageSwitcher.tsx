'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HiChevronDown } from 'react-icons/hi';
import { locales, type Locale } from '@/i18n';

const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  tr: 'Türkçe',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  ar: 'العربية',
};

const LOCALE_FLAGS: Record<Locale, string> = {
  en: '🇬🇧',
  tr: '🇹🇷',
  de: '🇩🇪',
  fr: '🇫🇷',
  es: '🇪🇸',
  ar: '🇸🇦',
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: Locale) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <span className="text-lg">{LOCALE_FLAGS[locale]}</span>
          <span className="hidden sm:inline">{LOCALE_NAMES[locale]}</span>
          <HiChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[140px] bg-white rounded-md p-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
          sideOffset={5}
        >
          {locales.map((loc) => (
            <DropdownMenu.Item
              key={loc}
              onSelect={() => handleLanguageChange(loc)}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer outline-none"
            >
              <span className="text-lg">{LOCALE_FLAGS[loc]}</span>
              <span>{LOCALE_NAMES[loc]}</span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}