"use client";
import React, { useState, useEffect } from "react";
import { Plane } from "lucide-react";
import GradientButtonPrimary from "@/components/constants/GradientButtonPrimary";
import GradientButton from "../constants/BorderButton";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [planePosition, setPlanePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse movement effect - only on desktop
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Smooth plane animation - only on desktop
  useEffect(() => {
    if (isMobile) return;

    const updatePlanePosition = () => {
      setPlanePosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
    };

    const animationFrame = requestAnimationFrame(updatePlanePosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition, isMobile]);

  return (
    <div className="relative min-h-[100svh] bg-gray-100 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src="/images/hero-bg.webp"
            alt="Immigration Consulting"
            className="object-cover w-full h-full"
            loading="eager"
          />
          {/* Red Overlay - Adjusted for better mobile visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 via-red-600/70 to-transparent sm:from-red-600/80 sm:via-red-600/60" />
        </div>
      </div>

      {/* Animated Plane - Hidden on mobile */}
      {!isMobile && (
        <div
          className="absolute hidden md:block pointer-events-none transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${planePosition.x}px, ${
              planePosition.y
            }px) rotate(${
              Math.atan2(
                mousePosition.y - planePosition.y,
                mousePosition.x - planePosition.x
              ) *
              (180 / Math.PI)
            }deg)`,
            left: -20,
            top: -20,
          }}
        >
          <Plane className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </div>
      )}

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
          {/* Category Tag */}
          <div className="inline-block bg-customGray backdrop-blur-sm text-white px-4 sm:px-6 py-1 sm:py-2 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base">
            Immigration Services Provider
          </div>

          {/* Main Heading */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-tight mb-6 sm:mb-8">
              Total Migration & Enterprises Limited
            </h1>

            {/* CTA Button */}
            <GradientButton className="font-bold text-md">
            Visa Options
          </GradientButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on smaller screens */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
