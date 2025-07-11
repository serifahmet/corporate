'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from '../components/LanguageSwitcher';
import NavigationDropdown from '../components/NavigationDropdown';
import ThemeToggle from '../components/ThemeToggle';
import Script from 'next/script';

export default function HomePage() {
  const t = useTranslations();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TranslationService",
    "name": "cevirim.com",
    "alternateName": "Profesyonel Çeviri Hizmetleri",
    "url": "https://cevirim.com",
    "logo": "https://cevirim.com/logo.png",
    "description": "100'den fazla dilde profesyonel çeviri, yerelleştirme ve tercümanlık hizmetleri",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "sameAs": [
      "https://twitter.com/cevirimcom",
      "https://facebook.com/cevirimcom",
      "https://linkedin.com/company/cevirimcom"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Turkish", "English", "German", "French", "Spanish", "Arabic"]
    },
    "areaServed": "Worldwide",
    "serviceType": ["Document Translation", "Software Localization", "Interpreting Services"],
    "priceRange": "$$"
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen" style={{backgroundColor: 'var(--bg-primary)'}}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-opacity-90" style={{backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)'}}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold transition-colors" style={{color: 'var(--text-primary)'}}>
              {t('common.companyName')}
            </Link>
            
            {/* Center Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationDropdown 
                label={t('navigation.product')}
                items={[
                  { label: t('navigation.dropdown.documentTranslation'), href: '#' },
                  { label: t('navigation.dropdown.softwareLocalization'), href: '#' },
                  { label: t('navigation.dropdown.interpretingServices'), href: '#' },
                  { label: t('navigation.dropdown.machineTranslation'), href: '#' },
                ]}
              />
              <NavigationDropdown 
                label={t('navigation.solutions')}
                items={[
                  { label: t('industries.technology'), href: '#' },
                  { label: t('industries.healthcare'), href: '#' },
                  { label: t('industries.finance'), href: '#' },
                  { label: t('industries.legal'), href: '#' },
                ]}
              />
              <NavigationDropdown 
                label={t('navigation.resources')}
                items={[
                  { label: t('navigation.dropdown.blog'), href: '#' },
                  { label: t('navigation.dropdown.caseStudies'), href: '#' },
                  { label: t('navigation.dropdown.faq'), href: '#' },
                  { label: t('navigation.dropdown.apiDocs'), href: '#' },
                ]}
              />
              <a href="#" className="nav-link">
                {t('navigation.enterprise')}
              </a>
              <a href="#" className="nav-link">
                {t('navigation.pricing')}
              </a>
            </div>
            
            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSwitcher />
              <button className="nav-link">
                {t('common.cta.signIn')}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-[90vh] flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-tight" style={{color: 'var(--text-primary)'}}>
            {t('homepage.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            {t('homepage.hero.subtitle')}
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary whitespace-nowrap flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('common.cta.callNow')}
            </button>
            <button className="btn-outline whitespace-nowrap">
              {t('common.cta.requestDemo')}
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Document icon */}
          <div className="absolute top-20 left-10 md:left-20 float-animation float-animation-delay-1">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-purple-500/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          
          {/* Globe icon */}
          <div className="absolute top-40 right-10 md:right-32 float-animation float-animation-delay-2">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-10 h-10 md:w-14 md:h-14 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          {/* Headphones icon */}
          <div className="absolute bottom-20 left-20 md:left-40 float-animation float-animation-delay-3">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-pink-500/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Sliding Logos */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-lg" style={{color: 'var(--text-secondary)'}}>
              Trusted by leading companies worldwide
            </p>
          </div>
          <div className="logos-container">
            <div className="logos-slider">
              {/* First set of logos */}
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Microsoft</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Google</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Amazon</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Apple</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Netflix</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Meta</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Tesla</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Spotify</div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Microsoft</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Google</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Amazon</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Apple</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Netflix</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Meta</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Tesla</div>
              </div>
              <div className="logo-item">
                <div className="text-4xl font-bold" style={{color: 'var(--text-muted)'}}>Spotify</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24" style={{backgroundColor: 'var(--bg-secondary)'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                {t('homepage.about.title')}
              </h2>
              <p className="text-lg mb-8" style={{color: 'var(--text-secondary)'}}>
                {t('homepage.about.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-xl" style={{color: 'var(--accent-color)'}}>✓</span>
                  <p style={{color: 'var(--text-secondary)'}}>{t('homepage.about.features.quality')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl" style={{color: 'var(--accent-color)'}}>✓</span>
                  <p style={{color: 'var(--text-secondary)'}}>{t('homepage.about.features.experts')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl" style={{color: 'var(--accent-color)'}}>✓</span>
                  <p style={{color: 'var(--text-secondary)'}}>{t('homepage.about.features.languages')}</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-[#161b22] rounded-lg overflow-hidden border border-[#30363d]">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                Professional Team Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#161b22]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Now on the left */}
            <div className="relative h-96 bg-[#0d1117] rounded-lg overflow-hidden border border-[#30363d] order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                Language Services Overview
              </div>
            </div>

            {/* Text Content - Now on the right */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-8">
                {t('homepage.services.title')}
              </h2>
              <div className="space-y-6">
                <div className="bg-[#0d1117] p-6 rounded-lg hover:bg-[#161b22] transition-colors cursor-pointer group border border-[#30363d]">
                  <div className="flex items-start space-x-4">
                    <div className="text-purple-400 text-2xl mt-1">📄</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {t('homepage.services.translation.title')}
                      </h3>
                      <p className="text-gray-400">
                        {t('homepage.services.translation.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0d1117] p-6 rounded-lg hover:bg-[#161b22] transition-colors cursor-pointer group border border-[#30363d]">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 text-2xl mt-1">💻</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {t('homepage.services.localization.title')}
                      </h3>
                      <p className="text-gray-400">
                        {t('homepage.services.localization.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0d1117] p-6 rounded-lg hover:bg-[#161b22] transition-colors cursor-pointer group border border-[#30363d]">
                  <div className="flex items-start space-x-4">
                    <div className="text-pink-400 text-2xl mt-1">🎧</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {t('homepage.services.interpreting.title')}
                      </h3>
                      <p className="text-gray-400">
                        {t('homepage.services.interpreting.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-24" style={{backgroundColor: 'var(--bg-secondary)', minHeight: '400px'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
              {t('homepage.languages.title')}
            </h2>
            <p className="text-lg" style={{color: 'var(--text-secondary)'}}>
              {t('homepage.languages.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { flag: '🇬🇧', key: 'english' },
              { flag: '🇩🇪', key: 'german' },
              { flag: '🇫🇷', key: 'french' },
              { flag: '🇪🇸', key: 'spanish' },
              { flag: '🇮🇹', key: 'italian' },
              { flag: '🇵🇹', key: 'portuguese' },
              { flag: '🇷🇺', key: 'russian' },
              { flag: '🇨🇳', key: 'chinese' },
              { flag: '🇯🇵', key: 'japanese' },
              { flag: '🇸🇦', key: 'arabic' },
              { flag: '🇹🇷', key: 'turkish' },
              { flag: '🇰🇷', key: 'korean' }
            ].map((lang) => (
              <div key={lang.key} className="p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer group border border-[#30363d]" style={{backgroundColor: 'var(--bg-primary)'}}>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{lang.flag}</span>
                  <div>
                    <h3 className="text-xl font-semibold transition-colors" style={{color: 'var(--text-primary)'}}>
                      {t(`languages.${lang.key}`)}
                    </h3>
                    <p className="text-sm mt-1" style={{color: 'var(--text-muted)'}}>Professional Services</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Hidden for now */}
      {/* <section id="industries" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Specialized expertise across diverse sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '💻', name: 'Technology' },
              { icon: '🏥', name: 'Healthcare' },
              { icon: '💰', name: 'Finance' },
              { icon: '⚖️', name: 'Legal' },
              { icon: '🏭', name: 'Manufacturing' },
              { icon: '🛍️', name: 'Retail' },
              { icon: '🎓', name: 'Education' },
              { icon: '🏛️', name: 'Government' }
            ].map((industry) => (
              <div key={industry.name} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24" style={{backgroundColor: 'var(--bg-primary)', minHeight: '400px'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
              What Our Clients Say
            </h2>
            <p className="text-lg" style={{color: 'var(--text-secondary)'}}>
              Trusted by leading companies worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                company: 'Tech Innovations Inc.',
                role: 'VP of Global Operations',
                content: 'Outstanding service! Their team delivered accurate translations for our software localization project ahead of schedule. Highly recommended.',
                rating: 5
              },
              {
                name: 'Dr. Michael Chen',
                company: 'Global Medical Solutions',
                role: 'Director of International Affairs',
                content: 'Professional and reliable. They handle our medical document translations with exceptional accuracy and attention to detail.',
                rating: 5
              },
              {
                name: 'Maria Rodriguez',
                company: 'International Law Associates',
                role: 'Senior Partner',
                content: 'We trust them with all our legal translation needs. Their certified translators understand the nuances of legal terminology perfectly.',
                rating: 5
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="rounded-lg shadow-lg p-8 relative border border-[#30363d]" style={{backgroundColor: 'var(--bg-secondary)'}}>
                <div className="text-3xl absolute top-6 left-6" style={{color: 'var(--accent-color)', opacity: 0.3}}>&ldquo;</div>
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="mb-6 italic" style={{color: 'var(--text-secondary)'}}>
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="border-t pt-4" style={{borderColor: 'var(--border-color)'}}>
                    <p className="font-semibold" style={{color: 'var(--text-primary)'}}>{testimonial.name}</p>
                    <p className="text-sm" style={{color: 'var(--text-muted)'}}>{testimonial.role}</p>
                    <p className="text-sm" style={{color: 'var(--accent-color)'}}>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Hidden for now */}
      {/* <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Contact us for a free consultation and quote
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="document">Document Translation</option>
                    <option value="localization">Software Localization</option>
                    <option value="interpreting">Interpreting Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project..."></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-[#0d1117] border-t border-[#30363d] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('common.companyName')}
            </h3>
            <p className="text-gray-400 mb-6">
              Professional translation and localization services trusted by Fortune 500 companies worldwide.
            </p>
            <p className="text-gray-500">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}