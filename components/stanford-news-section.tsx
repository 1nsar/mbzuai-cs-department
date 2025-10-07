"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const StanfordNewsSection = () => {
  const newsItems = [
    {
      image:
        "/xing-link-box.jpg",
      category: "Department Chair of Computer Science",
      title: "Professor of Computer Science",
      description:
        "In the age of AI, computer science (CS) continues to be the foundational engine driving innovation, understanding, and progress across the computing landscape. From the mathematical underpinnings of algorithms to the infrastructure that powers large-scale model training and deployment, CS provides the essential knowledge and tools that propel the AI revolution. Our department is committed to advancing research and education, with a focus on building efficient, scalable, sustainable, and trustworthy technologies to meet the evolving challenges of computing.",
      link: "Read MBZUAI CS Department News",
      linkUrl: "#",
    },
    {
      image:
        "/photo1.jpg",
      category: "Department Chair of Computer Science",
      title: "Professor of Computer Science",
      description:
        "In the age of AI, computer science (CS) continues to be the foundational engine driving innovation, understanding, and progress across the computing landscape. From the mathematical underpinnings of algorithms to the infrastructure that powers large-scale model training and deployment, CS provides the essential knowledge and tools that propel the AI revolution. Our department is committed to advancing research and education, with a focus on building efficient, scalable, sustainable, and trustworthy technologies to meet the evolving challenges of computing.",
      link: "Read MBZUAI CS Department News",
      linkUrl: "#",
    },
    {
      image:
        "/newphoto4.png",
      category: "Department Chair of Computer Science",
      title: "Professor of Computer Science",
      description:
        "In the age of AI, computer science (CS) continues to be the foundational engine driving innovation, understanding, and progress across the computing landscape. From the mathematical underpinnings of algorithms to the infrastructure that powers large-scale model training and deployment, CS provides the essential knowledge and tools that propel the AI revolution. Our department is committed to advancing research and education, with a focus on building efficient, scalable, sustainable, and trustworthy technologies to meet the evolving challenges of computing.",
      link: "Read MBZUAI CS Department News",
      linkUrl: "#",
    },
  ];

  return (
    <div className="bg-white py-16">
      {/* Top Border */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t-2 border-gray-900 pt-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            MBZUAI CS NEWS
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {item.imageOverlay && (
                  <div className="absolute inset-0 bg-black z-10 flex flex-col items-center justify-center p-8">
                    {/* Siebel Scholars Logo Placeholder */}
                    <div className="mb-6">
                      <div className="w-16 h-16 border-4 border-white rounded-lg mb-4"></div>
                      <div className="text-white text-2xl font-bold text-center">Siebel Scholars</div>
                      <div className="text-white text-sm text-center mt-2">Meet the Class of 2026</div>
                    </div>
                    {/* Scholar Avatars */}
                    <div className="flex gap-3 justify-center">
                      {[1, 2, 3, 4, 5].map((avatar) => (
                        <div
                          key={avatar}
                          className="w-16 h-16 rounded-full bg-gray-700 border-2 border-white overflow-hidden"
                        >
                          <img
                            src={`https://i.pravatar.cc/150?img=${avatar + 10}`}
                            alt={`Scholar ${avatar}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
                  {item.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>

                {/* ...existing code... */}

                <a
                  href={item.linkUrl}
                    className="inline-flex items-center text-blue-700 font-semibold text-sm hover:text-blue-800 transition-colors group mt-auto"
                >
                  {item.link}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-8 text-center">
          <a
            href="#"
              className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors group">
            Read MBZUAI CS Department News
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border-t-2 border-gray-900"></div>
      </div>
    </div>
  );
};

export default StanfordNewsSection;


