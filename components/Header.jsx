"use client";
import React, { useState } from "react";
import Image from "next/image";
import GradientButton from "./GradientButton";

const Header = () => {
  const [isVisaOptionsOpen, setVisaOptionsOpen] = useState(false);
  const [isVisaInfoOpen, setVisaInfoOpen] = useState(false);

  // Dropdown content
  const visaOptions = [
    "Residence Visa",
    "Work Visa",
    "Student Visa",
    "Visitor Visa",
    "Investor Visa",
  ];

  const visaInfoLinks = [
    "Accredited Employer",
    "Work Visa Form",
    "Work visa form",
    "Partnership visa form",
    "Student Visa Form",
    "General Visitor Visa Form (Main Applicant)",
    "Parent & Grandparent Visitor Visa Form (Main Applicant)",
    "Visitor Visa form (Secondary Applicant – Partner)",
    "Visitor Visa Form (Secondary Applicant – Dependant Child)",
  ];

  return (
    <header className="w-full">
      {/* Main Navigation */}
      <nav className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <Image
                  src="/images/logo.jpg"
                  alt="TME Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                  priority
                />
              </a>
            </div>

            {/* Center Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="group relative py-2 text-customRed hover:text-red-500 font-bold text-md uppercase tracking-wider"
              >
                <span>HOME</span>
                <span className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <a
                href="/about-us"
                className="group relative py-2 text-customGray hover:text-red-500 font-bold text-md uppercase tracking-wider"
              >
                <span>ABOUT US</span>
                <span className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <div
                className="relative group"
                onMouseEnter={() => setVisaOptionsOpen(true)}
                onMouseLeave={() => setVisaOptionsOpen(false)}
              >
                <a
                  href="/visa-options"
                  className="group relative py-2 text-customGray hover:text-red-500 font-bold text-md uppercase tracking-wider"
                >
                  <span>VISA OPTIONS</span>
                  <span className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
                {isVisaOptionsOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg py-2 z-50">
                    {visaOptions.map((option, index) => (
                      <a
                        key={index}
                        href={`/visa-options/${option
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm text-customGray hover:text-red-500 hover:bg-gray-50"
                      >
                        {option}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div
                className="relative group"
                onMouseEnter={() => setVisaInfoOpen(true)}
                onMouseLeave={() => setVisaInfoOpen(false)}
              >
                <a
                  href="/visa-info-links"
                  className="group relative py-2 text-customGray hover:text-red-500 font-bold text-md uppercase tracking-wider"
                >
                  <span>VISA INFO LINKS</span>
                  <span className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
                {isVisaInfoOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white shadow-lg py-2 z-50">
                    {visaInfoLinks.map((link, index) => (
                      <a
                        key={index}
                        href={`/visa-info/${link
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm text-customGray hover:text-red-500 hover:bg-gray-50"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="/service-fees"
                className="group relative py-2 text-customGray hover:text-red-500 font-bold text-md uppercase tracking-wider"
              >
                <span>SERVICE FEES</span>
                <span className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <a
                href="/news"
                className="group relative py-2 text-customGray hover:text-red-500 font-bold text-md uppercase tracking-wider"
              >
                <span>NEWS</span>
                <span className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
            </div>

            <GradientButton className="text-md font-bold px-6 py-2">
              Contact Us
            </GradientButton>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
