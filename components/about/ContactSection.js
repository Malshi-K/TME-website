"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="bg-customGray min-h-screen py-16 mb-6">
      <div className="container mx-auto px-20">
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="mb-12">
              <p className="text-customRed mb-2">| Contact Us |</p>
              <h2 className="text-4xl font-serif">Get In Touch</h2>
            </div>

            <div className="space-y-6 max-w-md">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-customRed" size={24} />
                <p className="text-lg">
                  32 Euclid Avenue, Te Rapa, Hamilton 3200
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-customRed" size={24} />
                <p className="text-lg">+64 7 834 3932</p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-customRed" size={24} />
                <p className="text-lg">+64 21 455 062</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-customRed" size={24} />
                <p className="text-lg">tme.angela@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <Facebook className="text-customRed" size={24} />
                <a
                  href="#"
                  className="text-lg hover:text-customRed transition-colors"
                >
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-customRed text-white rounded-lg p-8">
              <h2 className="text-3xl font-serif mb-8">Leave A Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-3 bg-transparent border border-white/30 rounded text-white placeholder-white/70"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full p-3 bg-transparent border border-white/30 rounded text-white placeholder-white/70"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={6}
                    className="w-full p-3 bg-transparent border border-white/30 rounded text-white placeholder-white/70 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-white text-customRed font-semibold rounded hover:bg-opacity-90 transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
