"use client";
import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
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
          <div className="relative">
            {/* Header */}
            <div className="mb-8">
              <p className="text-customRed font-medium mb-2">| Our Client Review |</p>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-customGray">
                What Our Clients Say About TME
              </h2>
            </div>

            {/* Testimonial Cards */}
            <div className="relative overflow-hidden">
              <div className="w-full">
                <Card key={testimonials[currentSlide].id} className="bg-white shadow-lg rounded-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16 border-2 border-customRed">
                        <AvatarImage
                          src={testimonials[currentSlide].avatar}
                          alt={testimonials[currentSlide].name}
                        />
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold text-customGray">
                          {testimonials[currentSlide].name}
                        </h3>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[currentSlide].rating)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-5 h-5 fill-customRed text-customRed"
                        />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-700 leading-relaxed">
                      {testimonials[currentSlide].content}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-customRed hover:bg-red-50"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4 text-customRed" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-customRed hover:bg-red-50"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4 text-customRed" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? "bg-customRed" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;