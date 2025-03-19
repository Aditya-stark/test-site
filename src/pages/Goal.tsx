import { FC } from 'react';

const Goal: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-[#01014b] to-[#320048]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&q=75')] bg-cover bg-center"></div>
        <div className="relative  max-w-6xl mx-auto px-4 pt-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Goals</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Driving excellence through innovation and collaboration
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#01014b] mb-6 relative">
                Our Vision for Excellence
                <span className="block w-16 h-1 bg-[#0ba5bf] mt-4"></span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our goal is to utilize our combined strengths to deliver an exceptional and unique level of services through exemplary performance. Wherever we operate, we want to be seen as an outstanding multi-cultural design company who works in collaboration to deliver aesthetics and functionality for clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We strive to exceed design challenges and respond effectively to our clients' budgets and time frames, ensuring optimal results and satisfaction.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#01014b] to-[#320048] transform rotate-3 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=75" 
                alt="Business Achievement" 
                className="relative  rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-16 relative">
            Key Objectives
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence in Service",
                description: "Delivering exceptional and unique services through exemplary performance and innovation.",
                icon: "🎯"
              },
              {
                title: "Collaborative Approach",
                description: "Working together as a multi-cultural team to create outstanding solutions for our clients.",
                icon: "🤝"
              },
              {
                title: "Client Success",
                description: "Meeting and exceeding client expectations while respecting budgets and timelines.",
                icon: "⭐"
              }
            ].map((objective, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-4">{objective.icon}</div>
                <h3 className="text-xl font-bold text-[#01014b] mb-4">{objective.title}</h3>
                <p className="text-gray-700">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Goal;
