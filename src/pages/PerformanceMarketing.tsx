import { FC } from 'react';
import { Link } from 'react-router-dom';

const PerformanceMarketing: FC = () => {
  const services = [
    {
      title: "PPC Advertising",
      description: "Strategic pay-per-click campaigns across Google, Bing, and other platforms.",
      icon: "💰"
    },
    {
      title: "Display Advertising",
      description: "Targeted display ads to reach your audience across the web.",
      icon: "🎯"
    },
    {
      title: "Remarketing",
      description: "Re-engage previous visitors and customers with personalized ads.",
      icon: "🔄"
    },
    {
      title: "Analytics & Tracking",
      description: "Advanced tracking and analytics to measure campaign performance.",
      icon: "📊"
    },
    {
      title: "Conversion Optimization",
      description: "Optimize landing pages and funnels for maximum conversion rates.",
      icon: "📈"
    },
    {
      title: "A/B Testing",
      description: "Data-driven testing to improve campaign effectiveness.",
      icon: "🔬"
    }
  ];

  const metrics = [
    { label: "Average ROI", value: "300%", icon: "💹" },
    { label: "Click-Through Rate", value: "4.5%", icon: "🎯" },
    { label: "Conversion Rate", value: "12%", icon: "🎉" },
    { label: "Cost Reduction", value: "25%", icon: "💰" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-[#01014b] to-[#320048]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=75')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Performance Marketing</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Data-driven marketing strategies to maximize your ROI and drive measurable results
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#01014b] mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Performance Metrics
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-3xl font-bold text-[#0ba5bf] mb-2">{metric.value}</div>
                <div className="text-gray-700">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Our Approach
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Research & Analysis", description: "Deep market research and competitor analysis" },
              { step: 2, title: "Strategy Development", description: "Custom performance marketing strategy" },
              { step: 3, title: "Campaign Execution", description: "Launch and manage targeted campaigns" },
              { step: 4, title: "Optimization", description: "Continuous testing and improvement" }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0ba5bf] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#01014b] mb-3">{phase.title}</h3>
                  <p className="text-gray-700">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#01014b] to-[#320048] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Maximize Your Marketing ROI?</h2>
          <p className="text-lg text-gray-300 mb-12">
            Let's create a performance marketing strategy that delivers measurable results for your business.
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

export default PerformanceMarketing;
