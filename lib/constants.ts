import { ServiceLanguage, Industry } from '@/types';

export const SERVICE_LANGUAGES: ServiceLanguage[] = [
  'english',
  'german',
  'french',
  'spanish',
  'italian',
  'portuguese',
  'russian',
  'chinese',
  'japanese',
  'arabic',
  'turkish',
  'korean'
];

export const INDUSTRIES: Industry[] = [
  'technology',
  'healthcare',
  'finance',
  'legal',
  'manufacturing',
  'retail',
  'education',
  'government'
];

export const LANGUAGE_FLAGS: Record<ServiceLanguage, string> = {
  english: '🇬🇧',
  german: '🇩🇪',
  french: '🇫🇷',
  spanish: '🇪🇸',
  italian: '🇮🇹',
  portuguese: '🇵🇹',
  russian: '🇷🇺',
  chinese: '🇨🇳',
  japanese: '🇯🇵',
  arabic: '🇸🇦',
  turkish: '🇹🇷',
  korean: '🇰🇷'
};

export const DOCUMENT_TYPES = [
  'Legal Documents',
  'Technical Manuals',
  'Medical Records',
  'Business Reports',
  'Marketing Materials',
  'Website Content',
  'Software Documentation',
  'Academic Papers',
  'Patents',
  'Certificates',
  'Other'
];

export const SERVICE_TYPES = [
  'Document Translation',
  'Website Localization',
  'Software Localization',
  'Interpreting Services',
  'Transcription',
  'Subtitling',
  'Voice Over',
  'Desktop Publishing',
  'Other'
];