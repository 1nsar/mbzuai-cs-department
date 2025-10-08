import React from 'react';

const UniversityCollaborations = () => {
  const partners = [
    {
      name: "Carnegie Mellon University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carnegie_Mellon_University_seal.svg/200px-Carnegie_Mellon_University_seal.svg.png"
    },
    {
      name: "NYUAD",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/New_York_University_Abu_Dhabi_seal.svg/200px-New_York_University_Abu_Dhabi_seal.svg.png"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png"
    },
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/200px-OpenAI_Logo.svg.png"
    },
    {
      name: "G42",
      logo: "https://g42.ai/wp-content/uploads/2023/06/G42-Logo.svg"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Collaborations
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            MBZUAI partners with leading global universities and organizations to provide students with unparalleled opportunities for advanced learning, research collaboration, and real-world impact.          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={
                  partner.name === "OpenAI"
                    ? "h-12 md:h-16 w-auto object-contain"
                    : "h-16 md:h-20 w-auto object-contain"
                }
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `<div class=\"text-2xl font-bold text-gray-800\">${partner.name}</div>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityCollaborations;
