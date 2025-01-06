// AboutSection.js
import React from "react";
import { Building2 } from "lucide-react";
import GradientButtonPrimary from "../constants/GradientButtonPrimary";

const AboutSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Image and Success Rate */}
          <div className="relative w-full lg:flex-1 max-w-lg mx-auto lg:mx-0">
            {/* Image Container */}
            <div className="relative">
              <img
                src="/images/about.jpg"
                alt="Passport and airline ticket"
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
              {/* Success Rate Circle */}
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-4 sm:-left-6 lg:-left-8 w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 bg-white rounded-full shadow-xl flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-red-500 font-bold text-xl sm:text-2xl">95%</div>
                <div className="text-gray-600 text-xs sm:text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="text-red-500 font-medium text-sm sm:text-base">
              | Immigration Services |
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-red-500 leading-tight">
              Welcome To Total Migration & Enterprises Limited.
            </h2>

            <p className="text-gray-600 text-sm sm:text-base">
              Kia Ora! New Zealand is an outstanding lifestyle destination, and we
              are here to make it happen for you. We assess your immigration
              situation, establish eligibility, gather information, identify
              barriers, evaluate options; give advice, and then represent you
              through the immigration application process to ensure the best
              possible outcome in a professional, ethical and responsible manner.
            </p>

            {/* Service Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
              <div className="space-y-2 sm:space-y-4 p-4 sm:p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-serif text-gray-700 flex items-center gap-2 justify-center lg:justify-start">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                  27 YEARS
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  IMMIGRATION INDUSTRY EXPERIENCE
                </p>
              </div>

              <div className="space-y-2 sm:space-y-4 p-4 sm:p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-serif text-gray-700 flex items-center gap-2 justify-center lg:justify-start">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                  11 YEARS
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  QUALITY IMMIGRATION ADVICE AND SERVICES
                </p>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <GradientButtonPrimary className="w-full sm:w-auto">
                About Us
              </GradientButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;