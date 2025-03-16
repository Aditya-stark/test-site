import { FC } from 'react';
import { Link } from 'react-router-dom';

// Define color variables for consistency
const colors = {
  primaryDarkBlue: '#003579',
  tealBlue: '#0ba5bf',
  deepBlue: '#01014b',
  darkPurple: '#320048',
  brightCyan: '#00e3f5',
};

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-[#003579]">M AVENUE</span>
            </div>
                    
            <div className="hidden md:flex items-center space-x-8">
  <Link to="/about" className="text-[#01014b] hover:text-[#0ba5bf] font-medium">About</Link>
  <Link to="/services" className="text-[#01014b] hover:text-[#0ba5bf] font-medium">Services</Link>
  <a href="#goal" className="text-[#01014b] hover:text-[#0ba5bf] font-medium">Goals</a>
  <a href="#marketing" className="text-[#01014b] hover:text-[#0ba5bf] font-medium">Digital Marketing</a>
  <Link to="/contact" className="bg-[#0ba5bf] text-white px-4 py-2 rounded-full hover:bg-[#00e3f5] transition duration-300">Contact Us</Link>
</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-[#01014b] to-[#320048] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1535957998253-26ae1ef29506?auto=format&q=75')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">M AVENUE TECHNOSOFT PVT LTD</h1>
          <p className="text-2xl font-medium text-[#00e3f5] tracking-wider mb-8">INSPIRE. INNOVATE. CONNECT.</p>
          <button className="bg-[#0ba5bf] hover:bg-[#00e3f5] text-white font-bold uppercase py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-12 relative">
            About Us
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#003579]">
            <p className="text-lg text-gray-700 leading-relaxed">
              M AVENUE TECHNOSOFT, as a leading System Integrator, creates world-class IT solutions that meet the specific needs of our clients. Representing the most innovative manufacturers, we take the industry by storm at the leading edge of the technological wave with our specialty in managed IT services for small and medium-sized businesses, BFSI, IT/ITES, Government, and other PSUs.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-[#01014b] mb-8 relative">
                Vision
                <span className="block w-16 h-1 bg-[#0ba5bf] mt-4"></span>
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#003579] h-full">
                <p className="text-lg text-gray-700 leading-relaxed">
                  M Avenue Technosoft is organized around a single principle: presiding over all beginnings and transitions with a multi-dimensional approach in the field of IT-driven services. As concepts of business and technology evolve with the passage of time, we wish to hold forth as the beginnings to newer endeavors and provide passages to nurture on-going businesses.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#01014b] mb-8 relative">
                Mission
                <span className="block w-16 h-1 bg-[#0ba5bf] mt-4"></span>
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#0ba5bf] h-full">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Allow businesses to get the most out of their communications investments. We will continue to lead in simplifying the complexities of real-time management across vendor infrastructure and providing clarity in order to optimize user experience in this ever-changing world of enterprise collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section id="goal" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-12 relative">
            Our Goal
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#320048]">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our goal is to utilize our combined strengths to deliver an exceptional and unique level of services through exemplary performance. Wherever we operate, we want to be seen as an outstanding multi-cultural design company who works in collaboration to deliver aesthetics and functionality for clients, exceed design challenges, and respond to their budgets and time frames.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-12 relative">
            Our Services
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-gradient-to-r from-[#003579] to-[#0ba5bf]"></div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#01014b] mb-3">SEO</h3>
                <p className="text-gray-600">Search Engine Optimization</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-gradient-to-r from-[#003579] to-[#0ba5bf]"></div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#01014b] mb-3">SMO</h3>
                <p className="text-gray-600">Social Media Optimization</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-gradient-to-r from-[#003579] to-[#0ba5bf]"></div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#01014b] mb-3">Performance Marketing</h3>
                <p className="text-gray-600">Optimized digital marketing campaigns</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-gradient-to-r from-[#003579] to-[#0ba5bf]"></div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#01014b] mb-3">Content Marketing</h3>
                <p className="text-gray-600">Strategic content creation and distribution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section id="marketing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-12 relative">
            Digital Marketing Activities
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Website management",
                "SEO optimization",
                "Build strong social presence through daily posts",
                "Active response system to user comments",
                "Creative support for daily postings",
                "Creative for advertisement (max 5 per month)",
                "Creative – Brochure etc. – once a year",
                "Video production Support",
                "Animated videos for social media",
                "Yearly activity calendar and strategy planning",
                "24/7 Support",
                "Dedicated team with Team lead for your Brand"
              ].map((item, index) => (
                <div key={index} className="flex items-start py-2 border-b border-gray-200">
                  <div className="text-[#0ba5bf] mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#01014b] text-white pt-16 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-2">M AVENUE TECHNOSOFT</h3>
              <p className="text-[#00e3f5] font-medium">INSPIRE. INNOVATE. CONNECT.</p>
              <p className="mt-4 text-gray-300">
                Leading the way in IT solutions and digital transformation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-[#0ba5bf] pb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">Services</a></li>
                <li><a href="#marketing" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">Digital Marketing</a></li>
                <li><a href="#goal" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">Our Goal</a></li>
              </ul>
            </div>
            <div id="contact">
              <h4 className="text-lg font-bold mb-4 border-b border-[#0ba5bf] pb-2">Contact Us</h4>
              <p className="mb-2 flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0ba5bf]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@mavenuetechnosoft.com
              </p>
              <p className="mb-2 flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0ba5bf]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 1234567890
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 M AVENUE TECHNOSOFT PVT LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;