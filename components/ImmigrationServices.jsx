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
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const services = [
    {
      Icon: (
        <MapPinHouse className="w-full h-full text-white hover:text-customRed" />
      ),
      title: "To live in New Zealand permanently",
      buttonText: "Residence Visa",
      action: "READ MORE",
    },
    {
      Icon: <Book className="w-full h-full text-white hover:text-customRed" />,
      title: "To study full-time in New Zealand",
      buttonText: "Student Visa",
      action: "READ MORE",
    },
    {
      Icon: (
        <BriefcaseBusiness className="w-full h-full text-white hover:text-customRed" />
      ),
      title: "To work (full-time) in New Zealand",
      buttonText: "Work Visa",
      action: "READ MORE",
    },
    {
      Icon: <Globe className="w-full h-full text-white hover:text-customRed" />,
      title: "To visit New Zealand as a visitor",
      buttonText: "Visitor Visa",
      action: "READ MORE",
    },
    {
      Icon: (
        <SearchCheck className="w-full h-full text-white hover:text-customRed" />
      ),
      title: "Invest in New Zealand and obtain a residency",
      buttonText: "Investor Visa",
      action: "READ MORE",
    },
    {
      Icon: (
        <MessageCircleCode className="w-full h-full text-white hover:text-customRed" />
      ),
      title: "Please contact us and let us know how we can help",
      buttonText: "Complex Cases",
      action: "READ MORE",
    },
  ];

  return (
    <div className="relative min-h-screen p-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/services-map.png")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-customGray/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-sm mb-4 text-white">
            <span className="text-customRed font-bold">|</span> Visa Categories{" "}
            <span className="text-customRed font-bold">|</span>
          </p>
          <h1 className="text-4xl font-serif mb-8 text-white">
            Enabling Your Immigration
            <br />
            Successfully
          </h1>
        </div>

        {/* Services Carousel */}
        <div className="relative px-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_20%] pl-4"
                >
                  <Card className="bg-transparent border-none relative">
                    <CardHeader>
                      <div className="w-12 h-12 mb-4">{service.Icon}</div>
                      <div className="relative group">
                        <p className="text-white pb-2 mb-4">
                          {service.buttonText}
                        </p>
                        {/* Line and Airplane */}
                        <div className="relative h-1 mt-1">
                          <div className="absolute w-full h-px bg-gray-600" />
                          <div className="absolute w-full h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                          <div className="absolute -top-2 left-0 group-hover:left-full transform -translate-y-1/2 transition-all duration-1000 flex items-center">
                            <Plane className="w-4 h-4 text-white transform rotate-45" />
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl text-white font-serif">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative group">
                        <Button
                          variant="link"
                          className="text-white hover:text-blue-200 p-0 flex items-center gap-2"
                        >
                          {service.action}
                          <span className="text-lg">→</span>
                        </Button>
                        <div className="absolute bottom-0 left-0 w-[100px] h-px bg-dotted">
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
    </div>
  );
};

export default ImmigrationServices;
