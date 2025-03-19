import { FC } from "react";

const Customers: FC = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechGrowth Solutions",
      company: "TechGrowth Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content:
        "M AVENUE TECHNOSOFT has transformed our digital marketing strategy with their SEO and content marketing services. Our organic traffic has increased by 150% in just six months!",
    },
    {
      name: "Priya Singh",
      role: "Marketing Director",
      company: "RetailNova",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content:
        "Their social media management has been exceptional. Our engagement rates have doubled, and we're seeing real conversion from our social channels now.",
    },
    {
      name: "Vikram Mehta",
      role: "Founder",
      company: "FinanceHub",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      content:
        "The performance marketing campaigns delivered by M AVENUE TECHNOSOFT have consistently provided an outstanding ROI. Their data-driven approach has been key to our success.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-[#01014b] to-[#320048]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&q=75')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Success Stories</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            See how we've helped businesses achieve their digital transformation
            goals
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Client Testimonials
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#01014b]">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#0ba5bf]">{testimonial.role}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;
