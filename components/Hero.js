"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Plane } from "lucide-react";
import GradientButtonPrimary from "./GradientButtonPrimary";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [planePosition, setPlanePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get mouse position relative to window
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smoothly update plane position
  useEffect(() => {
    const updatePlanePosition = () => {
      setPlanePosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1
      }));
    };

    const animationFrame = requestAnimationFrame(updatePlanePosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Immigration Consulting"
          fill
          className="object-cover"
          priority
        />
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-customRed to-transparent" />
      </div>

      {/* Animated Plane */}
      <div 
        className="absolute pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${planePosition.x}px, ${planePosition.y}px) rotate(${Math.atan2(
            mousePosition.y - planePosition.y,
            mousePosition.x - planePosition.x
          ) * (180 / Math.PI)}deg)`,
          left: -20,
          top: -20,
        }}
      >
        <Plane className="text-white w-10 h-10" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-24">
        {/* Category Tag */}
        <div className="inline-block bg-customGray/30 text-white px-6 py-2 mb-8">
          Immigration Services Provider
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8">
            Total Migration & Enterprises Limited
          </h1>

          {/* CTA Button */}
          <GradientButtonPrimary className="font-bold text-md">
            Visa Options
          </GradientButtonPrimary>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
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