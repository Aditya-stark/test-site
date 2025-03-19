import { FC } from 'react';
import { Link } from 'react-router-dom';

const ContentMarketing: FC = () => {
  const services = [
    {
      title: "Blog Content Creation",
      description: "Expert blog writing services that drive organic traffic and establish thought leadership.",
      icon: "📝"
    },
    {
      title: "Social Media Content",
      description: "Engaging social media content that resonates with your target audience.",
      icon: "💡"
    },
    {
      title: "Video Production",
      description: "High-quality video content creation for multiple platforms and purposes.",
      icon: "🎥"
    },
    {
      title: "Infographic Design",
      description: "Visual content that simplifies complex information and increases engagement.",
      icon: "📊"
    },
    {
      title: "Email Marketing Content",
      description: "Compelling email content that drives conversions and nurtures leads.",
      icon: "📧"
    },
    {
      title: "Content Strategy",
      description: "Comprehensive content planning aligned with your business objectives.",
      icon: "🎯"
    }
  ];

  const contentTypes = [
    {
      type: "Blog Posts",
      benefits: ["Increase organic traffic", "Establish authority", "Drive engagement"],
      icon: "📱"
    },
    {
      type: "Case Studies",
      benefits: ["Build credibility", "Showcase success", "Generate leads"],
      icon: "📈"
    },
    {
      type: "Whitepapers",
      benefits: ["Deep industry insights", "Lead generation", "Thought leadership"],
      icon: "📄"
    },
    {
      type: "Video Content",
      benefits: ["Higher engagement", "Better retention", "Social sharing"],
      icon: "🎬"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-[#01014b] to-[#320048]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&q=75')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Content Marketing</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Create compelling content that engages your audience and drives business growth
          </p>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Content Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Content Types & Benefits
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((content, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl mb-4 text-center">{content.icon}</div>
                <h3 className="text-xl font-bold text-[#01014b] mb-4 text-center">{content.type}</h3>
                <ul className="space-y-2">
                  {content.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-[#0ba5bf] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Our Content Creation Process
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Research", description: "Topic research and audience analysis" },
              { step: 2, title: "Strategy", description: "Content planning and optimization" },
              { step: 3, title: "Creation", description: "Professional content development" },
              { step: 4, title: "Distribution", description: "Multi-channel content promotion" }
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
          <h2 className="text-3xl font-bold mb-8">Ready to Create Engaging Content?</h2>
          <p className="text-lg text-gray-300 mb-12">
            Let's develop a content strategy that connects with your audience and drives results.
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

export default ContentMarketing;
