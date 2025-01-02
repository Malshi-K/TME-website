import React from "react";
import { Button } from "@/components/ui/button";
import { Building2, Check } from "lucide-react";
import GradientButtonPrimary from "./GradientButtonPrimary";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Side - Image and Success Rate */}
      <div className="relative flex-1 max-w-lg">
        <img
          src="/images/about.jpg"
          alt="Passport and airline ticket"
          className="rounded-lg w-full h-auto max-w-md"
        />
        {/* Success Rate Circle */}
        <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
          <div className="text-customRed font-bold text-2xl">95%</div>
          <div className="text-customGray text-xs">Success Rate</div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 space-y-6">
        <div className="text-customRed font-medium">
          | Immigration Services |
        </div>

        <h2 className="text-4xl font-serif text-customRed">
          Welcome To Total Migration & Enterprises Limited.
        </h2>

        <p className="text-gray-600">
          Kia Ora! New Zealand is an outstanding lifestyle destination, and we
          are here to make it happen for you. We assess your immigration
          situation, establish eligibility, gather information, identify
          barriers, evaluate options; give advice, and then represent you
          through the immigration application process to ensure the best
          possible outcome in a professional, ethical and responsible manner.
        </p>

        {/* Service Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-customGray flex items-center gap-2">
              <Building2 className="w-6 h-6 text-customRed" />
              27 YEARS
            </h3>
            <p className="text-gray-600">IMMIGRATION INDUSTRY EXPERIENCE</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-serif text-customGray flex items-center gap-2">
              <Building2 className="w-6 h-6 text-customRed" />
              11 YEARS
            </h3>
            <p className="text-gray-600">
              QUALITY IMMIGRATION ADVICE AND SERVICES
            </p>
          </div>
        </div>

        <GradientButtonPrimary>About Us</GradientButtonPrimary>
      </div>
    </div>
  );
};

export default AboutSection;
