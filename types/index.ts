export type ServiceLanguage = 
  | 'english'
  | 'german'
  | 'french'
  | 'spanish'
  | 'italian'
  | 'portuguese'
  | 'russian'
  | 'chinese'
  | 'japanese'
  | 'arabic'
  | 'turkish'
  | 'korean';

export type Industry = 
  | 'technology'
  | 'healthcare'
  | 'finance'
  | 'legal'
  | 'manufacturing'
  | 'retail'
  | 'education'
  | 'government';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export interface OrderFormData {
  sourceLanguage: string;
  targetLanguage: string;
  documentType: string;
  wordCount: number;
  deadline: string;
  files?: FileList;
  additionalNotes?: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    company: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}