"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
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
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Enter Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter Message*"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full p-3 rounded bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded transition-colors duration-300"
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Reach Us</h2>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-600">
              Contact us today to see how we can help to make your visa
              application process easier.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 p-3 rounded">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+64 7 834 3932</p>
                <p className="text-gray-600">+64 21 455 062 </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-500 p-3 rounded">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Find Us</h3>
                <p className="text-gray-600">
                  32 Euclid Avenue , Te Rapa , Hamilton 3200{" "}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-500 p-3 rounded">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-gray-600">tme.manj@gmail.com</p>
                <p className="text-gray-600">tme.angela@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
