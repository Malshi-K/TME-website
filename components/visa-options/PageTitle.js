import React from "react";

const PageTitle = ({ title }) => {
  return (
    <section className="relative w-full h-96">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 h-full"
        style={{
          backgroundImage: "url('/images/page-title/visa-options.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>

      {/* Content Container */}
      <div className="relative h-full z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-full">
          {/* Content Section - Right Side Only */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-800 leading-tight">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;