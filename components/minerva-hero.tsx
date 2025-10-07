"use client";

import React, { useState } from "react";

const MinervaHero = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Sample video thumbnails - replace with actual video URLs
  const videos = [
    "/videomy.mp4",
    "/new-video.mp4",
    "/videomy.mp4",
    "/new-video.mp4",
    "/videomy.mp4",
    "/new-video.mp4",
    "/videomy.mp4",
  ];

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const slider = e.currentTarget;
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const slider = e.currentTarget;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Function to get video size based on index
  const getVideoSize = (index: number) => {
    // Indexes 1, 3, 5 (2nd, 4th, 6th videos) are bigger
    const isBigger = [1, 3, 5].includes(index);
    return {
      width: isBigger ? "240px" : "180px",
      height: isBigger ? "280px" : "220px",
    } as const;
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black mb-8 tracking-tight">
            Power. from Knowledge. to Serve.
          </h1>
          <div className="space-y-3 text-black">
            <p className="text-base md:text-lg">
Mohamed bin Zayed University of Artificial Intelligence empowers visionary minds to advance the frontiers of AI and drive real-world impact.            </p>
            <p className="text-base md:text-lg">
             Our cutting-edge research environment and global community equip you not just to master AI — but to lead the transformation shaping humanity’s future.
            </p>
          </div>
        </div>

        {/* Draggable Video Strip */}
        <div
          className="relative w-full overflow-x-auto overflow-y-hidden scrollbar-hide"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" as const }}
        >
          <div
            className="flex items-center gap-6 px-6 w-max cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
          >
            {videos.map((video, index) => {
              const size = getVideoSize(index);
              return (
                <div
                  key={index}
                  className="relative flex-shrink-0 overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transform transition-all duration-300"
                  style={{
                    width: size.width,
                    height: size.height,
                  }}
                >
                  {/* Video Placeholder */}
                  <div className="relative w-full h-full select-none">
                    <img
                      src={video}
                      alt={`Student experience ${index + 1}`}
                      className="w-full h-full object-cover pointer-events-none"
                      draggable="false"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gradient overlay removed for white background */}

      {/* Hide Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MinervaHero;


