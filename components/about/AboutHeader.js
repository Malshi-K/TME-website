import React from 'react';
import Link from 'next/link';

const AboutHeader = () => {
  return (
    <section className="w-full relative bg-gray-900">
      {/* Container for fixed height */}
      <div className="w-full h-[400px] relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/page-title/about-us.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm font-medium text-white/80 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              <span className="text-white/60">/</span>
              <Link href="/about-us" className="hover:text-white transition-colors">
                ABOUT US
              </Link>
            </nav>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold">
              About Us
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;