export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Global Translation Services
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#languages" className="text-gray-700 hover:text-blue-600">Languages</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Quote
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center gradient-bg">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Translation & Localization Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Trusted by Fortune 500 companies worldwide for accurate, culturally-adapted content in over 100 languages
          </p>
          <div className="space-x-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all">
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Excellence in Language Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 20 years of experience, we provide comprehensive translation, localization, and interpreting services to global enterprises.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <p className="text-gray-700">ISO 17100:2015 Certified Quality</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <p className="text-gray-700">10,000+ Professional Linguists</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <p className="text-gray-700">100+ Languages Supported</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Professional Team Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Now on the left */}
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Language Services Overview
              </div>
            </div>

            {/* Text Content - Now on the right */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Services
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 text-2xl mt-1">📄</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Document Translation
                      </h3>
                      <p className="text-gray-600">
                        Professional translation for legal, technical, medical, and business documents
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 text-2xl mt-1">💻</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Software Localization
                      </h3>
                      <p className="text-gray-600">
                        Adapt your software, apps, and games for global markets
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 text-2xl mt-1">🎧</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Interpreting Services
                      </h3>
                      <p className="text-gray-600">
                        On-site, remote, and conference interpreting solutions
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
      <section id="languages" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Languages We Support
            </h2>
            <p className="text-lg text-gray-600">
              Select a language to learn more about our specialized services
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { flag: '🇬🇧', name: 'English' },
              { flag: '🇩🇪', name: 'German' },
              { flag: '🇫🇷', name: 'French' },
              { flag: '🇪🇸', name: 'Spanish' },
              { flag: '🇮🇹', name: 'Italian' },
              { flag: '🇵🇹', name: 'Portuguese' },
              { flag: '🇷🇺', name: 'Russian' },
              { flag: '🇨🇳', name: 'Chinese' },
              { flag: '🇯🇵', name: 'Japanese' },
              { flag: '🇸🇦', name: 'Arabic' },
              { flag: '🇹🇷', name: 'Turkish' },
              { flag: '🇰🇷', name: 'Korean' }
            ].map((lang) => (
              <div key={lang.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{lang.flag}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {lang.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Professional Services</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-white">
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
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
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
              <div key={testimonial.name} className="bg-white rounded-lg shadow-lg p-8 relative">
                <div className="text-3xl text-blue-100 absolute top-6 left-6">&ldquo;</div>
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Global Translation Services
            </h3>
            <p className="text-gray-400 mb-6">
              Professional translation and localization services trusted by Fortune 500 companies worldwide.
            </p>
            <p className="text-gray-400">
              © 2024 Global Translation Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}