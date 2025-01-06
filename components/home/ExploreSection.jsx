"use client";
import React, { useState } from "react";
import Image from "next/image";

const ExploreSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with Next/Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/video-bg.png"
          alt="Scenic background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          {/* Center Content Container */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Play Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={handlePlayClick}
                className="w-32 h-32 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110 group shadow-lg"
              >
                <span className="uppercase text-gray-700 font-serif text-xl">
                  Play
                </span>
              </button>
            </div>

            {/* Text Content */}
            <div className="text-white space-y-2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold">
                Explore NZ
              </h2>
              <p className="text-xl md:text-2xl font-serif leading-relaxed max-w-3xl mx-auto">
                There are a lot of beautiful places in New Zealand for you to
                visit or settle down in.
              </p>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isPlaying && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-4xl mx-4">
              <div className="relative pt-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/LJoI7_lEqW4?autoplay=1"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute -top-10 right-0 text-white text-xl hover:text-red-500 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Top Wave Overlay */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[60px] text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ExploreSection;