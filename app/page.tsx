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

      {/* Languages Section */}
      <section id="languages" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Languages We Support
            </h2>
            <p className="text-lg text-gray-600">
              Professional translation services in 12 major languages
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
              <div key={lang.name} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{lang.flag}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{lang.name}</h3>
                    <p className="text-sm text-gray-500">Professional Services</p>
                  </div>
                </div>
              </div>
            ))}
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