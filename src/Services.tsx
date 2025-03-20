import { FC } from 'react';
import { Link } from 'react-router-dom';

const Services: FC = () => {
  // Service data for easy management
  const mainServices = [
    {
      title: "SEO",
      fullName: "Search Engine Optimization",
      description: "Boost your website's visibility and ranking on search engines through strategic optimization techniques.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      features: [
        "Comprehensive website audit",
        "Keyword research and analysis",
        "On-page and off-page optimization",
        "Content strategy development",
        "Backlink building",
        "Regular performance reporting"
      ],
      link: "/services/seo"
    },
    {
      title: "SMO",
      fullName: "Social Media Optimization",
      description: "Enhance your brand's presence and engagement across social media platforms to reach your target audience effectively.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      features: [
        "Platform-specific strategy development",
        "Content creation and curation",
        "Community management",
        "Influencer outreach",
        "Paid social campaigns",
        "Performance analytics and reporting"
      ],
      link: "/services/smo"
    },
    {
      title: "Performance Marketing",
      fullName: "Performance Marketing",
      description: "Drive measurable results through data-driven marketing campaigns optimized for conversion and ROI.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        "PPC advertising management",
        "Display advertising",
        "Retargeting campaigns",
        "Conversion rate optimization",
        "A/B testing",
        "ROI analysis and reporting"
      ],
      link: "/services/performance-marketing"
    },
    {
      title: "Content Marketing",
      fullName: "Content Marketing",
      description: "Create and distribute valuable, relevant content to attract and engage your target audience and drive profitable customer action.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      features: [
        "Content strategy development",
        "Blog post creation",
        "Infographic design",
        "Whitepaper and e-book production",
        "Video content creation",
        "Content distribution and promotion"
      ],
      link: "/services/content-marketing"
    }
  ];

  const additionalServices = [
    {
      title: "Website Development",
      description: "Custom website design and development tailored to your business needs and brand identity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "App Development",
      description: "Mobile application development for iOS and Android platforms to extend your digital reach.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Email Marketing",
      description: "Strategic email campaigns to nurture leads, engage customers and drive conversions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Graphic Design",
      description: "Creative design solutions including branding, marketing materials, and visual assets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-[#01014b] to-[#320048]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&q=75')] bg-cover bg-center"></div>
        <div className="relative max-w-6xl mx-auto px-4 pt-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to help your business grow and succeed in the digital landscape
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Core Services
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <div className="text-[#0ba5bf] flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#01014b]">{service.title}</h3>
                      <p className="text-lg text-[#0ba5bf]">{service.fullName}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-8">{service.description}</p>
                  
                  <h4 className="text-lg font-semibold text-[#01014b] mb-4">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-[#0ba5bf] mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <Link to={service.link} className="inline-block px-6 py-3 bg-[#003579] text-white rounded-full hover:bg-[#0ba5bf] transition duration-300">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Additional Services
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-[#0ba5bf] flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#01014b] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Our Process
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <div className="rounded-lg bg-gradient-to-br from-[#003579] to-[#0ba5bf] p-8 text-center text-white h-full flex flex-col items-center justify-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p>We analyze your requirements and business goals</p>
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="rounded-lg bg-gradient-to-br from-[#0ba5bf] to-[#00e3f5] p-8 text-center text-white h-full flex flex-col items-center justify-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Strategy</h3>
                <p>We develop a customized plan for your specific needs</p>
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="rounded-lg bg-gradient-to-br from-[#01014b] to-[#003579] p-8 text-center text-white h-full flex flex-col items-center justify-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Execution</h3>
                <p>Our experts implement the strategy with precision</p>
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="rounded-lg bg-gradient-to-br from-[#320048] to-[#01014b] p-8 text-center text-white h-full flex flex-col items-center justify-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Optimization</h3>
                <p>Continuous monitoring and improvement for best results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            What Our Clients Say
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <div className="text-[#0ba5bf] absolute -top-6 left-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 mb-6">M AVENUE TECHNOSOFT has transformed our digital marketing strategy with their SEO and content marketing services. Our organic traffic has increased by 150% in just six months!</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-[#01014b]">Rajesh Kumar</p>
                    <p className="text-sm text-gray-500">CEO, TechGrowth Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <div className="text-[#0ba5bf] absolute -top-6 left-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 mb-6">Their social media management has been exceptional. Our engagement rates have doubled, and we're seeing real conversion from our social channels now.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-[#01014b]">Priya Singh</p>
                    <p className="text-sm text-gray-500">Marketing Director, RetailNova</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <div className="text-[#0ba5bf] absolute -top-6 left-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 mb-6">The performance marketing campaigns delivered by M AVENUE TECHNOSOFT have consistently provided an outstanding ROI. Their data-driven approach has been key to our success.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-[#01014b]">Vikram Mehta</p>
                    <p className="text-sm text-gray-500">Founder, FinanceHub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#01014b] to-[#320048] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Partner with us to unlock the full potential of your business through our comprehensive suite of digital services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-[#0ba5bf] hover:bg-[#00e3f5] text-white font-bold py-4 px-8 rounded-full transition duration-300">
              Get in Touch
            </Link>
            <Link to="/#marketing" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#01014b] text-white font-bold py-4 px-8 rounded-full transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;