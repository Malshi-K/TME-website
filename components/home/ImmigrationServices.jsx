"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plane,
  MapPinHouse,
  Book,
  BriefcaseBusiness,
  Globe,
  SearchCheck,
  MessageCircleCode,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const ImmigrationServices = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      breakpoints: {
        "(min-width: 640px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 }
      }
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const services = [
    {
      Icon: <MapPinHouse className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white transition-colors duration-300 group-hover:text-red-500" />,
      title: "To live in New Zealand permanently",
      buttonText: "Residence Visa",
      action: "READ MORE",
    },
    {
      Icon: <Book className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white transition-colors duration-300 group-hover:text-red-500" />,
      title: "To study full-time in New Zealand",
      buttonText: "Student Visa",
      action: "READ MORE",
    },
    {
      Icon: <BriefcaseBusiness className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white transition-colors duration-300 group-hover:text-red-500" />,
      title: "To work (full-time) in New Zealand",
      buttonText: "Work Visa",
      action: "READ MORE",
    },
    {
      Icon: <Globe className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white transition-colors duration-300 group-hover:text-red-500" />,
      title: "To visit New Zealand as a visitor",
      buttonText: "Visitor Visa",
      action: "READ MORE",
    },
    {
      Icon: <SearchCheck className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white transition-colors duration-300 group-hover:text-red-500" />,
      title: "Invest in New Zealand and obtain a residency",
      buttonText: "Investor Visa",
      action: "READ MORE",
    },
    {
      Icon: <MessageCircleCode className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white transition-colors duration-300 group-hover:text-red-500" />,
      title: "Please contact us and let us know how we can help",
      buttonText: "Complex Cases",
      action: "READ MORE",
    },
  ];

  return (
    <div className="relative min-h-screen py-8 px-4 sm:p-8 md:p-12 lg:p-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/services-map.png")',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <p className="text-sm md:text-base mb-3 md:mb-4 text-white">
            <span className="text-red-500 font-bold">|</span> Visa Categories{" "}
            <span className="text-red-500 font-bold">|</span>
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8 text-white leading-tight">
            Enabling Your Immigration
            <br className="hidden sm:block" />
            Successfully
          </h1>
        </div>

        {/* Services Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
              >
                <Card className="bg-transparent border-none group transition-transform duration-300 hover:scale-105">
                  <CardHeader className="space-y-4">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {service.Icon}
                    </div>
                    <div className="relative">
                      <p className="text-white text-sm md:text-base pb-2 mb-4">
                        {service.buttonText}
                      </p>
                      {/* Animated Line and Airplane */}
                      <div className="relative h-1">
                        <div className="absolute w-full h-px bg-gray-600" />
                        <div className="absolute w-full h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        <div className="absolute -top-2 left-0 group-hover:left-full transform -translate-y-1/2 transition-all duration-1000 flex items-center">
                          <Plane className="w-3 h-3 md:w-4 md:h-4 text-white transform rotate-45" />
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-white font-serif leading-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Button
                        variant="link"
                        className="text-white hover:text-blue-200 p-0 flex items-center gap-2 text-sm md:text-base"
                      >
                        {service.action}
                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                          →
                        </span>
                      </Button>
                      <div className="absolute bottom-0 left-0 w-20 sm:w-24 md:w-28 h-px">
                        <div className="w-full border-b border-dotted border-gray-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmigrationServices;