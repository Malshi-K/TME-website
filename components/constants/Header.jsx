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
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import BorderButton2 from "./BorderButton2";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  // Navigation Links Component
  const NavLink = ({ href, children, isActive }) => (
    <a
      href={href}
      className={`group relative py-2 ${
        isActive ? "text-red-600" : "text-gray-600"
      } hover:text-red-500 font-bold text-md uppercase tracking-wider transition-colors duration-200`}
    >
      <span>{children}</span>
      <span className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </a>
  );

  return (
    <>
      {/* Responsive top spacing */}
      <div className="h-[100px] md:h-[144px]" />

      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <div className="relative h-11 hidden md:block">
          {/* Light Background */}
          <div className="absolute inset-0 bg-[#F8F3F0]"></div>

          {/* Dark Background with Shape */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[200px] bg-customGray"
            style={{
              clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          ></div>

          {/* Content */}
          <div className="relative h-full">
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-between items-center h-full">
                {/* Left Side */}
                <div className="flex items-center space-x-8">
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

        {/* Main Navigation */}
        <nav className="bg-white py-4 md:py-6">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Logo - Responsive sizing */}
              <div className="flex items-center">
                <img
                  src="/images/logo.jpg"
                  alt="TME Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                <NavLink href="/" isActive={true}>
                  HOME
                </NavLink>
                <NavLink href="/about-us">ABOUT US</NavLink>

                {/* Desktop Dropdowns */}
                <div
                  className="relative group"
                  onMouseEnter={() => setVisaOptionsOpen(true)}
                  onMouseLeave={() => setVisaOptionsOpen(false)}
                >
                  <button className="flex items-center space-x-1 group relative py-2 text-gray-600 hover:text-red-500 font-bold text-md uppercase tracking-wider">
                    <span>VISA OPTIONS</span>
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                  {isVisaOptionsOpen && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-lg py-2 z-50 rounded-md">
                      {visaOptions.map((option, index) => (
                        <a
                          key={index}
                          href={`/visa-options/${option
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-gray-50 transition-colors duration-200"
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

                <NavLink href="/service-fees">SERVICE FEES</NavLink>
                <NavLink href="/news">NEWS</NavLink>

                {/* Contact Us Button - Desktop */}
                <Link href="/contact-us">
                  <BorderButton2 className="hidden lg:block">
                    Contact Us
                  </BorderButton2>
                </Link>
              </div>
            </div>

            {/* Mobile Menu - Slide down animation */}
            <div
              className={`lg:hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "max-h-screen opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              <div className="flex flex-col space-y-2 mt-4 bg-gray-50 rounded-lg p-4">
                <a
                  href="/"
                  className="text-red-600 font-bold text-md uppercase tracking-wider px-4 py-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  HOME
                </a>
                <a
                  href="/about-us"
                  className="text-gray-600 font-bold text-md uppercase tracking-wider px-4 py-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  ABOUT US
                </a>

                {/* Mobile Accordions with smooth transitions */}
                <div className="space-y-2">
                  <button
                    onClick={() => setVisaOptionsOpen(!isVisaOptionsOpen)}
                    className="w-full flex justify-between items-center text-left text-gray-600 font-bold text-md uppercase tracking-wider px-4 py-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  >
                    <span>VISA OPTIONS</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isVisaOptionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-200 ${
                      isVisaOptionsOpen ? "max-h-96" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {visaOptions.map((option, index) => (
                      <a
                        key={index}
                        href={`/visa-options/${option
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block text-sm text-gray-600 hover:text-red-500 px-6 py-2 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {option}
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href="/service-fees"
                  className="text-gray-600 font-bold text-md uppercase tracking-wider px-4 py-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  SERVICE FEES
                </a>
                <a
                  href="/news"
                  className="text-gray-600 font-bold text-md uppercase tracking-wider px-4 py-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  NEWS
                </a>

                {/* Contact Us Button - Mobile */}
                <Link href="/contact-us">
                  <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-6 py-3 rounded-md hover:from-red-600 hover:to-red-700 transition-all duration-300 mt-2">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
