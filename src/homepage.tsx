import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-[#01014b] to-[#320048] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1535957998253-26ae1ef29506?auto=format&q=75')] bg-cover bg-center"></div>
        <div className="relative max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            M AVENUE TECHNOSOFT PVT LTD
          </h1>
          <p className="text-2xl font-medium text-[#00e3f5] tracking-wider mb-8">
            INSPIRE. INNOVATE. CONNECT.
          </p>
          <Link to="/contact">
            <button className="bg-[#0ba5bf] hover:bg-[#00e3f5] text-white font-bold uppercase py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Get Started
            </button>
          </Link>
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
              M AVENUE TECHNOSOFT, as a leading System Integrator, creates
              world-class IT solutions that meet the specific needs of our
              clients. Representing the most innovative manufacturers, we take
              the industry by storm at the leading edge of the technological
              wave with our specialty in managed IT services for small and
              medium-sized businesses, BFSI, IT/ITES, Government, and other
              PSUs.
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
                  M Avenue Technosoft is organized around a single principle:
                  presiding over all beginnings and transitions with a
                  multi-dimensional approach in the field of IT-driven services.
                  As concepts of business and technology evolve with the passage
                  of time, we wish to hold forth as the beginnings to newer
                  endeavors and provide passages to nurture on-going businesses.
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
                  Allow businesses to get the most out of their communications
                  investments. We will continue to lead in simplifying the
                  complexities of real-time management across vendor
                  infrastructure and providing clarity in order to optimize user
                  experience in this ever-changing world of enterprise
                  collaboration.
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
              Our goal is to utilize our combined strengths to deliver an
              exceptional and unique level of services through exemplary
              performance. Wherever we operate, we want to be seen as an
              outstanding multi-cultural design company who works in
              collaboration to deliver aesthetics and functionality for clients,
              exceed design challenges, and respond to their budgets and time
              frames.
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
                <h3 className="text-xl font-bold text-[#01014b] mb-3">
                  Performance Marketing
                </h3>
                <p className="text-gray-600">
                  Optimized digital marketing campaigns
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-gradient-to-r from-[#003579] to-[#0ba5bf]"></div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#01014b] mb-3">
                  Content Marketing
                </h3>
                <p className="text-gray-600">
                  Strategic content creation and distribution
                </p>
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
                "Dedicated team with Team lead for your Brand",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start py-2 border-b border-gray-200"
                >
                  <div className="text-[#0ba5bf] mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
