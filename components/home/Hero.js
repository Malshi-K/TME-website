"use client";
import React, { useState, useEffect } from "react";
import { Plane, ChevronDown } from "lucide-react";
import GradientButtonPrimary from "@/components/constants/GradientButtonPrimary";
import GradientButton from "../constants/BorderButton";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [planePosition, setPlanePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device with debouncing
  useEffect(() => {
    let timeoutId;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timeoutId);
    };
  }, []);

  // Enhanced mouse movement effect
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Smooth plane animation with improved performance
  useEffect(() => {
    if (isMobile) return;

    let animationFrameId;
    const updatePlanePosition = () => {
      setPlanePosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.08,
        y: prev.y + (mousePosition.y - prev.y) * 0.08,
      }));
      animationFrameId = requestAnimationFrame(updatePlanePosition);
    };

    animationFrameId = requestAnimationFrame(updatePlanePosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition, isMobile]);

  return (
    <div className="relative min-h-[100svh] bg-gray-100 overflow-hidden">
      {/* Background Image with Optimized Loading */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <picture>
            <source srcSet="/images/hero-bg.webp" type="image/webp" />
            <source srcSet="/images/hero-bg.jpg" type="image/jpeg" />
            <img
              src="/images/hero-bg.jpg"
              alt="Immigration Consulting Background"
              className="object-cover w-full h-full"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          {/* Responsive Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-red-600/90 via-red-600/75 to-transparent 
            sm:from-red-600/85 sm:via-red-600/70 sm:to-transparent 
            lg:from-red-600/80 lg:via-red-600/60 lg:to-transparent"
          />
        </div>
      </div>

      {/* Animated Plane with Enhanced Performance */}
      {!isMobile && (
        <div
          className="absolute hidden md:block pointer-events-none transition-transform duration-75 ease-out will-change-transform"
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

      {/* Main Content */}
      <div className="relative h-full flex flex-col justify-center">
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
          {/* Responsive Category Tag */}
          <div
            className="inline-block bg-customGray backdrop-blur-sm text-white 
            px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 
            mb-4 sm:mb-6 md:mb-8 
            text-xs sm:text-sm md:text-base"
          >
            Immigration Services Provider
          </div>

          {/* Responsive Main Heading */}
          <div className="max-w-4xl space-y-6">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
              font-serif text-white leading-tight 
              tracking-tight sm:tracking-normal"
            >
              Total Migration &<br className="hidden sm:block" /> Enterprises
              Limited
            </h1>

            {/* Subtitle - New Addition */}
            <h6
              className="text-white/90 text-sm sm:text-base md:text-lg lg:text-2xl 
              max-w-lg leading-relaxed"
            >
              Your trusted partner in immigration services, providing expert
              guidance for your journey to New Zealand.
            </h6>

            {/* CTA Buttons with Responsive Spacing */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
              <GradientButtonPrimary className="w-full sm:w-auto text-sm sm:text-base font-bold">
                Explore Visa Options
              </GradientButtonPrimary>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
        flex flex-col items-center gap-2 text-white/90 animate-pulse"
      >
        <span className="text-sm hidden sm:block">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;
