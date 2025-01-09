"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  MapPin,
  Clock,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import GradientButton from "./GradientButton";
import Link from "next/link";

const Header = () => {
  const [isVisaOptionsOpen, setVisaOptionsOpen] = useState(false);
  const [isVisaInfoOpen, setVisaInfoOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
      <div className="h-[144px]" />
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        {/* Top Bar with Shaped Background */}
        <div className="relative h-11">
          {/* Light Background */}
          <div className="absolute inset-0 bg-[#F8F3F0]"></div>

          {/* Dark Background with Shape */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[400px] bg-customGray"
            style={{
              clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          ></div>

          {/* Content */}
          <div className="relative h-full">
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-between items-center h-full">
                {/* Left Side */}
                <div className="hidden md:flex items-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-red-500" />
                    <a
                      href="mailto:tme.angela@gmail.com"
                      className="text-sm text-gray-700 hover:text-gray-900"
                    >
                      tme.angela@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-gray-700">
                      32 Euclid Avenue, Te Rapa, Hamilton 3200
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-gray-700">
                      Mon - Fri / 10AM - 5PM
                    </span>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-6">
                  <div className="hidden md:flex items-center space-x-4">
                    <Link
                      href="/faqs"
                      className="text-sm text-white hover:text-gray-200 font-medium"
                    >
                      FAQ's
                    </Link>
                    <span className="text-gray-400">/</span>
                    <Link
                      href="/support"
                      className="text-sm text-white hover:text-gray-200 font-medium"
                    >
                      Support
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href="#" className="text-white hover:text-gray-200">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="text-white hover:text-gray-200">
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a href="#" className="text-white hover:text-gray-200">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="bg-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src="/images/logo.jpg"
                  alt="TME Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a
                  href="/"
                  className="group relative py-2 text-red-600 hover:text-red-500 font-bold text-md uppercase tracking-wider"
                >
                  <span>HOME</span>
                  <span className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>

                <a
                  href="/about-us"
                  className="group relative py-2 text-gray-600 hover:text-red-500 font-bold text-md uppercase tracking-wider"
                >
                  <span>ABOUT US</span>
                  <span className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>

                {/* Desktop Dropdowns */}
                <div
                  className="relative group"
                  onMouseEnter={() => setVisaOptionsOpen(true)}
                  onMouseLeave={() => setVisaOptionsOpen(false)}
                >
                  <a
                    href="/visa-options"
                    className="group relative py-2 text-gray-600 hover:text-red-500 font-bold text-md uppercase tracking-wider"
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
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-gray-50"
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
                    className="group relative py-2 text-gray-600 hover:text-red-500 font-bold text-md uppercase tracking-wider"
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
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-gray-50"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="/service-fees"
                  className="group relative py-2 text-gray-600 hover:text-red-500 font-bold text-md uppercase tracking-wider"
                >
                  <span>SERVICE FEES</span>
                  <span className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>

                <a
                  href="/news"
                  className="group relative py-2 text-gray-600 hover:text-red-500 font-bold text-md uppercase tracking-wider"
                >
                  <span>NEWS</span>
                  <span className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
              </div>

              {/* Contact Us Button - Desktop */}
              <Link href="/contact-us">
                <GradientButton className="hidden lg:block">
                  Contact Us
                </GradientButton>
              </Link>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-4">
                <div className="flex flex-col space-y-4">
                  <a
                    href="/"
                    className="text-red-600 font-bold text-md uppercase tracking-wider px-4 py-2"
                  >
                    HOME
                  </a>
                  <a
                    href="/about-us"
                    className="text-gray-600 font-bold text-md uppercase tracking-wider px-4 py-2"
                  >
                    ABOUT US
                  </a>

                  {/* Mobile Accordion for Visa Options */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setVisaOptionsOpen(!isVisaOptionsOpen)}
                      className="w-full text-left text-gray-600 font-bold text-md uppercase tracking-wider px-4 py-2"
                    >
                      VISA OPTIONS
                    </button>
                    {isVisaOptionsOpen && (
                      <div className="pl-8 space-y-2">
                        {visaOptions.map((option, index) => (
                          <a
                            key={index}
                            href={`/visa-options/${option
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block text-sm text-gray-600"
                          >
                            {option}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mobile Accordion for Visa Info Links */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setVisaInfoOpen(!isVisaInfoOpen)}
                      className="w-full text-left text-gray-600 font-bold text-md uppercase tracking-wider px-4 py-2"
                    >
                      VISA INFO LINKS
                    </button>
                    {isVisaInfoOpen && (
                      <div className="pl-8 space-y-2">
                        {visaInfoLinks.map((link, index) => (
                          <a
                            key={index}
                            href={`/visa-info/${link
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block text-sm text-gray-600"
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href="/service-fees"
                    className="text-gray-600 font-bold text-md uppercase tracking-wider px-4 py-2"
                  >
                    SERVICE FEES
                  </a>
                  <a
                    href="/news"
                    className="text-gray-600 font-bold text-md uppercase tracking-wider px-4 py-2"
                  >
                    NEWS
                  </a>

                  {/* Contact Us Button - Mobile */}
                  <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-6 py-2 mx-4 rounded hover:from-red-600 hover:to-red-700 transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
