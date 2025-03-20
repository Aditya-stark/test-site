import { FC } from 'react';
import { Link } from 'react-router-dom';

const Smo: FC = () => {
  const smoServices = [
    {
      title: "Social Media Strategy",
      description: "Custom-tailored social media strategies aligned with your business goals and target audience.",
      icon: "📊"
    },
    {
      title: "Content Creation",
      description: "Engaging and shareable content creation for all major social media platforms.",
      icon: "✍️"
    },
    {
      title: "Community Management",
      description: "Active engagement with your audience and building meaningful relationships.",
      icon: "👥"
    },
    {
      title: "Social Media Advertising",
      description: "Targeted paid social campaigns to reach and engage your ideal audience.",
      icon: "🎯"
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and insights to measure and improve performance.",
      icon: "📈"
    },
    {
      title: "Brand Monitoring",
      description: "Real-time monitoring of brand mentions and sentiment analysis.",
      icon: "🔍"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-[#01014b] to-[#320048]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&q=75')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Social Media Optimization</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Enhance your brand's social media presence and engage with your audience effectively
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {smoServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#01014b] mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Why Choose Our SMO Services?
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Increased Brand Awareness",
                description: "Build a strong brand presence across all major social media platforms",
                icon: "🌟"
              },
              {
                title: "Higher Engagement Rates",
                description: "Create compelling content that drives user interaction and engagement",
                icon: "💬"
              },
              {
                title: "Lead Generation",
                description: "Convert social media followers into qualified leads and customers",
                icon: "🎯"
              },
              {
                title: "Brand Loyalty",
                description: "Build lasting relationships with your audience through consistent engagement",
                icon: "❤️"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#01014b] mb-4">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Measuring Success
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "Engagement Rate", value: "↑ 150%" },
              { metric: "Follower Growth", value: "↑ 200%" },
              { metric: "Brand Mentions", value: "↑ 180%" },
              { metric: "Lead Generation", value: "↑ 120%" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#0ba5bf] mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#01014b] to-[#320048] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Boost Your Social Media Presence?</h2>
          <p className="text-lg text-gray-300 mb-12">
            Let's create a social media strategy that helps you connect with your audience and achieve your business goals.
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

export default Smo;
