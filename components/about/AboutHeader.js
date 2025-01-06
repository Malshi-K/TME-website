import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutHeader = () => {
  return (
    <section className="w-full relative bg-gray-900">
      {/* Container for fixed height */}
      <div className="w-full h-[400px] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/page-title/about-us.gif"
            alt="About Us Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
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

        {/* Decorative Pattern */}
        <div className="absolute left-0 top-0 h-full w-24 opacity-10">
          <div 
            className="h-full w-full bg-repeat" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h8v8H0zM16 0h8v8h-8zM8 8h8v8H8zM0 16h8v8H0zM16 16h8v8h-8z' fill='%23FFFFFF'/%3E%3C/svg%3E")`,
              backgroundSize: '24px 24px'
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;