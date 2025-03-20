import { FC } from "react";
import { Link } from "react-router-dom";

const AboutUs: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-[#01014b] to-[#320048]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&q=75')] bg-cover bg-center"></div>
        <div className="relative max-w-6xl mx-auto px-4 pt-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About Our Company</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Learn about our journey, our values, and the team behind M AVENUE
            TECHNOSOFT
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#01014b] mb-6 relative">
                Our Story
                <span className="block w-16 h-1 bg-[#0ba5bf] mt-4"></span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                M AVENUE TECHNOSOFT started with a vision to bridge the gap
                between businesses and technology. Founded in 2015, we set out
                on a mission to create IT solutions that truly address the
                specific needs of our clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over the years, we've grown from a small team of passionate
                technologists to a comprehensive system integration company
                serving businesses across various sectors including BFSI,
                IT/ITES, Government, and other PSUs.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&q=75"
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Our Core Values
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#003579] transform transition duration-300 hover:-translate-y-2">
              <div className="text-[#003579] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#01014b] mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from project
                delivery to customer support.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#0ba5bf] transform transition duration-300 hover:-translate-y-2">
              <div className="text-[#0ba5bf] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#01014b] mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace new technologies and methodologies to deliver
                cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#320048] transform transition duration-300 hover:-translate-y-2">
              <div className="text-[#320048] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#01014b] mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We believe in the power of teamwork, both within our
                organization and with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Our Leadership Team
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#0ba5bf]">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&q=75&fit=crop&w=400&h=400"
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#01014b]">Rahul Sharma</h3>
              <p className="text-[#0ba5bf] font-medium mb-3">
                Chief Executive Officer
              </p>
              <p className="text-gray-600">
                20+ years of experience in IT solutions and business leadership.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#0ba5bf]">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&q=75&fit=crop&w=400&h=400"
                    alt="CTO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#01014b]">Priya Patel</h3>
              <p className="text-[#0ba5bf] font-medium mb-3">
                Chief Technology Officer
              </p>
              <p className="text-gray-600">
                Expert in emerging technologies and digital transformation.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#0ba5bf]">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&q=75&fit=crop&w=400&h=400"
                    alt="COO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#01014b]">Vijay Mehta</h3>
              <p className="text-[#0ba5bf] font-medium mb-3">
                Chief Operations Officer
              </p>
              <p className="text-gray-600">
                Specializes in streamlining operations and optimizing business
                processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Why Choose Us
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-y-12 gap-x-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-[#003579]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#01014b] mb-2">
                  Trusted Expertise
                </h3>
                <p className="text-gray-700">
                  With years of industry experience, our team brings trusted
                  expertise to every project.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-[#0ba5bf]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#01014b] mb-2">
                  Cutting-Edge Solutions
                </h3>
                <p className="text-gray-700">
                  We leverage the latest technologies to deliver innovative and
                  effective solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-[#320048]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#01014b] mb-2">
                  Client-Centric Approach
                </h3>
                <p className="text-gray-700">
                  We put our clients' needs first, ensuring tailored solutions
                  that address specific challenges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-[#003579]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#01014b] mb-2">
                  Comprehensive Support
                </h3>
                <p className="text-gray-700">
                  Our 24/7 support team ensures your systems run smoothly at all
                  times.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-block bg-[#0ba5bf] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#00e3f5] transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
