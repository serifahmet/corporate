# Corporate Translation Services Website

A modern, responsive website for a translation, localization, and interpreting company built with Next.js 14 and TypeScript.

## 🚀 Features

### Core Features
- **Multi-language Support**: Full internationalization with 6 languages (English, Turkish, German, French, Spanish, Arabic)
- **Mobile-First Design**: Responsive design optimized for all devices
- **SEO Optimized**: Server-side rendering with Next.js App Router
- **Modern UI**: Clean, corporate design with smooth animations

### Pages & Components
- **Homepage**: Hero section with animated gradient, about sections, languages grid, industries, testimonials
- **Language Services**: Dynamic pages for each of the 12 supported languages with order forms
- **Contact Page**: Full contact form with validation
- **Layout Components**: Header with dropdown navigation, language switcher, footer

### Technical Features
- **Next.js 14**: Latest App Router with server-side rendering
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with responsive design
- **Framer Motion**: Smooth animations and transitions
- **React Hook Form**: Form handling with validation
- **next-intl**: Internationalization with locale-based routing

## 📁 Project Structure

```
ceviri-next/
├── app/
│   ├── [locale]/                 # Locale-based routing
│   │   ├── page.tsx             # Homepage
│   │   ├── layout.tsx           # Locale layout
│   │   ├── contact/             # Contact page
│   │   └── languages/[language]/ # Language service pages
│   ├── api/                     # API routes
│   │   ├── contact/             # Contact form handler
│   │   └── order/               # Order form handler
│   └── layout.tsx               # Root layout
├── components/
│   ├── layout/                  # Header, Footer, LanguageSwitcher
│   ├── home/                    # Homepage sections
│   ├── forms/                   # Contact and Order forms
│   └── ui/                      # Reusable UI components
├── messages/                    # Translation files
├── lib/                         # Utilities and constants
├── types/                       # TypeScript type definitions
└── public/                      # Static assets
```

## 🌍 Supported Languages

**Website UI Languages:**
- English (en)
- Turkish (tr)  
- German (de)
- French (fr)
- Spanish (es)
- Arabic (ar) - with RTL support

**Translation Services Languages:**
- English, German, French, Spanish
- Italian, Portuguese, Russian, Chinese
- Japanese, Arabic, Turkish, Korean

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Forms**: React Hook Form
- **Internationalization**: next-intl
- **Icons**: React Icons
- **UI Components**: Radix UI

## 📱 Mobile-First Design

The website is built with a mobile-first approach:
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface elements
- Hamburger menu for mobile navigation
- Optimized typography and spacing for all screen sizes

## 🎨 Design Features

- **Animated Hero Section**: Gradient background with smooth animations
- **Corporate Color Scheme**: Professional blue and purple gradients
- **Smooth Transitions**: Framer Motion animations throughout
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Accessible Design**: ARIA labels, keyboard navigation, proper contrast

## 🔧 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 🌐 URL Structure

- Homepage: `/en`, `/tr`, `/de`, etc.
- Language services: `/en/languages/english`, `/tr/languages/turkish`, etc.
- Contact: `/en/contact`, `/tr/contact`, etc.

## 📧 Forms & API

- **Contact Form**: Sends inquiries to `/api/contact`
- **Order Form**: Handles translation requests at `/api/order`
- Both forms include validation and error handling

## 🎯 SEO Optimizations

- Server-side rendering for all pages
- Proper meta tags and descriptions
- Language-specific URLs
- Structured data ready
- Optimized images with next/image

## 🚀 Deployment

The project is ready for deployment on Vercel, Netlify, or any platform supporting Next.js.

## 📝 License

Built for corporate use - all rights reserved.