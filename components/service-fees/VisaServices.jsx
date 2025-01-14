"use client";
import React, { useState } from "react";
import { Plane, Home, Briefcase, Files } from "lucide-react";
import { Card } from "@/components/ui/card";
import PricingTable from "./PricingTable";
import Image from "next/image";

const VisaServices = () => {
  const [selectedVisa, setSelectedVisa] = useState(null);

  const visaTypes = [
    {
      id: "temporary",
      title: "Temporary Visas",
      icon: Plane,
      color: "bg-red-500",
    },
    {
      id: "residence",
      title: "Residence Visas",
      icon: Home,
      color: "bg-red-500",
    },
    {
      id: "business",
      title: "Business Visas",
      icon: Briefcase,
      color: "bg-red-500",
    },
    {
      id: "other",
      title: "Other Cases",
      icon: Files,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Background */}
      <div className="relative h-[400px] mb-16">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/images/page-title/visa-fees.png"
            alt="Service Banner"
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="!relative !h-[500px]"
          />
        </div>

        {/* Content Container */}
        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
          <h1 className="text-4xl font-serif md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Service Price List
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {visaTypes.map((visa) => {
            const Icon = visa.icon;
            return (
              <Card
                key={visa.id}
                className={`relative overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                  selectedVisa === visa.id ? "ring-2 ring-red-500" : ""
                }`}
                onClick={() => setSelectedVisa(visa.id)}
              >
                {/* Top curved shape */}
                <div
                  className={`absolute top-0 left-0 right-0 h-24 ${visa.color} rounded-b-[100px]`}
                />

                {/* Card content */}
                <div className="relative pt-8 pb-6 px-4 text-center">
                  <div className="mb-4">
                    <Icon className="mx-auto h-8 w-8 text-white" />
                  </div>
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-2">{visa.title}</h3>
                    <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors">
                      Detailed Pricing
                    </button>
                  </div>

                  {/* Bottom curved accent */}
                  <div className="absolute bottom-0 right-0">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      className="fill-gray-200"
                    >
                      <path d="M0 80C0 35.8172 35.8172 0 80 0V80H0Z" />
                    </svg>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Render pricing table when a visa type is selected */}
        {selectedVisa && (
          <div className="my-8 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-6">
              {visaTypes.find((v) => v.id === selectedVisa)?.title} - Detailed
              Pricing
            </h2>
            <PricingTable visaType={selectedVisa} />
          </div>
        )}
      </div>
    </div>
  );
};

export default VisaServices;
