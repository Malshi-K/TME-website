"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-customGray text-white py-10">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.jpg"
                alt="ImmiPro"
                width={150}
                height={50}
                className="h-auto"
              />
            </Link>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="text-red-500 w-5 h-5" />
                <span>+64 7 834 3932</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-red-500 w-5 h-5" />
                <span>+64 21 455 062</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-red-500 w-5 h-5" />
                <span>tme.angela @gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500 w-5 h-5" />
                <span>32 Euclid Avenue, Te Rapa, Hamilton 3200</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="bg-white p-2 rounded-full hover:bg-red-500 transition-colors">
                <Twitter className="w-5 h-5 text-[#1B2641]" />
              </Link>
              <Link href="#" className="bg-white p-2 rounded-full hover:bg-red-500 transition-colors">
                <Facebook className="w-5 h-5 text-[#1B2641]" />
              </Link>
              <Link href="#" className="bg-white p-2 rounded-full hover:bg-red-500 transition-colors">
                <Linkedin className="w-5 h-5 text-[#1B2641]" />
              </Link>
            </div>
          </div>

          {/* Visa Links */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-bold mb-6">Visa Options</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="hover:text-red-500 transition-colors">
                  Residence Visa
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-red-500 transition-colors">
                  Work Visa
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-red-500 transition-colors">
                  Student Visa
                </Link>
              </li>
              <li>
                <Link href="/project" className="hover:text-red-500 transition-colors">
                  Visitor Visa
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-colors">
                  Investor Visa
                </Link>
              </li>
            </ul>
          </div>

          {/* Video Section */}
          <div className="lg:col-span-1">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden">
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
        <div className="mt-10 pt-2 border-t border-gray-700 text-center">
          <p>Copyright © 2024 GDC Digital Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;