import React from "react";
import { Building2 } from "lucide-react";
import GradientButtonPrimary from "../constants/GradientButtonPrimary";

const AboutHeader = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/page-title/about.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-20">
        <div className="flex justify-end">
          {/* Content Section - Right Side Only */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="text-red-500 font-medium text-sm sm:text-base">
              | About Us |
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-customGray leading-tight">
              Total Migration & Enterprises Limited.
            </h2>

            <p className="text-customGray text-sm sm:text-base">
              Kia Ora! New Zealand is an outstanding lifestyle destination, and we
              are here to make it happen for you. We assess your immigration
              situation, establish eligibility, gather information, identify
              barriers, evaluate options; give advice, and then represent you
              through the immigration application process to ensure the best
              possible outcome in a professional, ethical and responsible manner.
            </p>

            {/* Service Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
              <div className="space-y-2 sm:space-y-4 p-4 sm:p-6 bg-white bg-opacity-90 rounded-lg hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-serif text-gray-700 flex items-center gap-2 justify-center lg:justify-start">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                  27 YEARS
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  IMMIGRATION INDUSTRY EXPERIENCE
                </p>
              </div>

              <div className="space-y-2 sm:space-y-4 p-4 sm:p-6 bg-white bg-opacity-90 rounded-lg hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-serif text-gray-700 flex items-center gap-2 justify-center lg:justify-start">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                  11 YEARS
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  QUALITY IMMIGRATION ADVICE AND SERVICES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;