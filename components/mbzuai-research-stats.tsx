import React from 'react';

const MBZUAIResearchStats = () => {
  const stats = [
    {
      number: "2,500+",
      description: "Research publications by MBZUAI faculty and students"
    },
    {
      number: "150+",
      description: "Active research projects across AI domains"
    },
    {
      number: "50+",
      description: "Industry partnerships driving AI innovation"
    },
    {
      number: "300+",
      description: "Patents filed in machine learning and AI technologies"
    },
    {
      number: "$500M+",
      description: "Research funding secured for groundbreaking AI projects"
    },
    {
      number: "85+",
      description: "Countries represented in our research collaborations"
    }
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            CS Department Achievements 
          </h2>
          <p className="text-xl md:text-2xl text-gray-900 max-w-4xl mx-auto font-light">
            Pioneering artificial intelligence research that shapes the future of technology and society
          </p>
        </div>

        {/* Top Border */}
        <div className="border-t-2 border-gray-300 mb-16"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mb-16">
          {stats.slice(0, 3).map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                {stat.number}
              </div>
              <p className="text-base text-gray-900 leading-relaxed max-w-sm mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mb-16">
          {stats.slice(3, 6).map((stat, index) => (
            <div key={index + 3} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                {stat.number}
              </div>
              <p className="text-base text-gray-900 leading-relaxed max-w-sm mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="border-t-2 border-gray-300 mb-12"></div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-4 transition-colors duration-300">
            Explore Our Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default MBZUAIResearchStats;
