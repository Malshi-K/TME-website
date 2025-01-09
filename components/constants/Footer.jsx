"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-customGray text-white py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Contact Section */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.jpg"
                alt="ImmiPro"
                width={120}
                height={40}
                className="h-auto w-auto"
              />
            </Link>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <Phone className="text-red-500 w-5 h-5 shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="block hover:text-red-400 transition-colors">+64 7 834 3932</span>
                  <span className="block hover:text-red-400 transition-colors">+64 21 455 062</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <Mail className="text-red-500 w-5 h-5 shrink-0" />
                <span className="hover:text-red-400 transition-colors break-all">
                  tme.angela@gmail.com
                </span>
              </div>
              
              <div className="flex items-start gap-3 group">
                <MapPin className="text-red-500 w-5 h-5 shrink-0 mt-1" />
                <span className="hover:text-red-400 transition-colors">
                  32 Euclid Avenue, Te Rapa, Hamilton 3200
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-3">
              <Link 
                href="#" 
                className="bg-white p-2 rounded-full hover:bg-red-500 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
              </Link>
              <Link 
                href="#" 
                className="bg-white p-2 rounded-full hover:bg-red-500 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
              </Link>
              <Link 
                href="#" 
                className="bg-white p-2 rounded-full hover:bg-red-500 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
              </Link>
            </div>
          </div>

          {/* Visa Links */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-serif font-bold">Visa Options</h3>
            <ul className="space-y-3">
              {[
                { title: "Residence Visa", href: "/about" },
                { title: "Work Visa", href: "/team" },
                { title: "Student Visa", href: "/news" },
                { title: "Visitor Visa", href: "/project" },
                { title: "Investor Visa", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="hover:text-red-400 transition-colors inline-block py-1"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Video Section */}
          <div className="w-full">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/Atf_Af1q_5w"
                title="100% Pure New Zealand: A Welcoming Journey"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-4 border-t border-gray-700">
          <p className="text-center text-sm sm:text-base text-gray-400">
            Copyright © {new Date().getFullYear()} GDC Digital Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;