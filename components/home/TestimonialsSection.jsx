"use client";
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Alisha Reddy",
    rating: 5,
    content: "100% recommended. Very friendly service and as well as very helpful team. I got my partnership work visa renewal to a consultant in Auckland but it declined and my partners went through. It was a very hard moment for me and my partner coz we have been married for 9 years. We were giving up all our hopes as all the evidence were given to the previous consultant as the supporting evidence then we were suggested to go to total immigrant to get help as I had only 42 days left to leave the country. I'm so glad and thankful to god that I went to see Manj and team. They helped me gain my status and got my visa no longer then 3 weeks. Thank u so much. 100% recommended for excellent service….",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 2,
    name: "Poonamjit Dhaliwal",
    rating: 5,
    content: "I am very happy to get my open work visa which is just because of Mr Nagra..it was really tough situation when came to him..I got some medical issues during my medical..because of that my file was declined by immigration..but we did not loose our hope we tried visa under section 61 and also applied for IPT section but it was our bad luck at we got negative response..my got rejection again..we got order to leave the country..but still Manj Nagra fight for us.. at last I got my visa after medical clearance … I am really thankful to Manj Nagra as it was impossible without you to get visa.. I advice all my friends and who see message but approach Manj Nagra if you are getting problems in visas Many thanks Poonam",
    avatar: "/path-to-avatar.jpg",
  },
];

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/testimonials-bg.jpg"
                alt="Passport and family"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Testimonials */}
          <div className="relative order-1 lg:order-2">
            {/* Header */}
            <div className="mb-6 sm:mb-8 text-center lg:text-left">
              <p className="text-red-500 font-medium mb-2 text-sm sm:text-base">
                | Our Client Review |
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800">
                What Our Clients Say About TME
              </h2>
            </div>

            {/* Testimonial Cards */}
            <div className="relative">
              <Card className="bg-white shadow-lg rounded-lg">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                    <Avatar className="h-16 w-16 border-2 border-red-500 shrink-0">
                      <AvatarImage
                        src={testimonials[currentSlide].avatar}
                        alt={testimonials[currentSlide].name}
                      />
                    </Avatar>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                        {testimonials[currentSlide].name}
                      </h3>
                      {/* Star Rating */}
                      <div className="flex justify-center sm:justify-start gap-1 mt-2">
                        {[...Array(testimonials[currentSlide].rating)].map((_, index) => (
                          <Star
                            key={index}
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-red-500 text-red-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="relative">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-h-[200px] sm:max-h-[250px] overflow-y-auto pr-2">
                      {testimonials[currentSlide].content}
                    </p>
                    {/* Fade effect for overflow */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Navigation Controls */}
            <div className="mt-6 space-y-4">
              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-2 border-red-500 hover:bg-red-50"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-4 w-4 text-red-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-2 border-red-500 hover:bg-red-50"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-4 w-4 text-red-500" />
                </Button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? "w-4 bg-red-500" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;