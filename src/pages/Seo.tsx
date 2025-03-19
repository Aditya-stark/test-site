import { FC } from 'react';
import { Link } from 'react-router-dom';

const Seo: FC = () => {
  const seoServices = [
    {
      title: "Keyword Research & Strategy",
      description: "In-depth keyword analysis and strategic planning to target high-value search terms.",
      icon: "🔍"
    },
    {
      title: "On-Page SEO",
      description: "Optimization of meta tags, content structure, and internal linking for better search visibility.",
      icon: "📝"
    },
    {
      title: "Technical SEO",
      description: "Website architecture, speed optimization, and mobile responsiveness improvements.",
      icon: "⚙️"
    },
    {
      title: "Content Optimization",
      description: "Creating and optimizing content to match search intent and drive organic traffic.",
      icon: "📊"
    },
    {
      title: "Link Building",
      description: "Strategic backlinking campaigns to build domain authority and improve rankings.",
      icon: "🔗"
    },
    {
      title: "Local SEO",
      description: "Optimizing your presence for local search results and Google My Business.",
      icon: "📍"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-[#01014b] to-[#320048]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&q=75')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Search Engine Optimization</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#01014b] mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Our SEO Process
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Audit & Analysis", description: "Complete website analysis and competitor research" },
              { step: 2, title: "Strategy Development", description: "Custom SEO strategy based on analysis results" },
              { step: 3, title: "Implementation", description: "Executing optimization techniques and content strategy" },
              { step: 4, title: "Monitor & Optimize", description: "Continuous monitoring and strategy refinement" }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-lg p-8 text-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#0ba5bf] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#01014b] mb-4">{phase.title}</h3>
                  <p className="text-gray-700">{phase.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-[#0ba5bf] transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#01014b] to-[#320048] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Improve Your Search Rankings?</h2>
          <p className="text-lg text-gray-300 mb-12">
            Get started with our SEO services today and see the difference in your online visibility.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#0ba5bf] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#00e3f5] transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default Seo;
