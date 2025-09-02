"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MapPin,
  Mail,
  Phone,
  User,
  Users,
  Link,
  Crown,
} from "lucide-react";

// Placeholder for Google Maps API Key
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual API key

const ContactPage = () => {
  const overallCoordinators = [
    {
      name: "Kailash S",
      year: "IV Year CSE",
      phone: "+91 93397 85032",
      image: "https://i.imgur.com/example-kailash.jpg",
    }, // Placeholder image
    {
      name: "Susritha M",
      year: "IV Year CSE",
      phone: "+91 70101 68721",
      image: "https://i.imgur.com/example-susritha.jpg",
    }, // Placeholder image
  ];

  const eventCoordinators = [
    {
      name: "Aravind Krishna B",
      year: "IV Year CSE",
      phone: "+91 98406 98896",
      image: "https://i.imgur.com/example-aravind.jpg",
    }, // Placeholder image
    {
      name: "Lochana N",
      year: "IV Year CSE",
      phone: "+91 73389 56391",
      image: "https://i.imgur.com/example-lochana.jpg",
    }, // Placeholder image
  ];

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=St.+Joseph's+Institute+of+Technology,+Chennai,+Tamil+Nadu`;

  return (
    <section className="bg-slate-950 min-h-screen py-16 sm:py-20 relative overflow-hidden">
      {/* Background glowing elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
        animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000"
        animate={{ x: [-15, 15, -15], y: [15, -15, 15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="inline-block p-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 mb-4 shadow-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-manuscript text-amber-100 mb-4 drop-shadow-lg">
            Contact the Ministry
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-manuscript">
            Reach Out to Our Magical Coordinators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Coordinators */}
          <div className="lg:col-span-1 space-y-8">
            {/* Overall Coordinators Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-slate-900 border border-purple-500/30 rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-purple-400/20 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold font-manuscript text-amber-200 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-purple-400" /> Overall
                Coordinators
              </h2>
              <div className="space-y-6">
                {overallCoordinators.map((coord, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <img
                      src={`https://api.dicebear.com/8.x/initials/svg?seed=${coord.name}`} // DiceBear for initials avatar
                      alt={coord.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow-md"
                    />
                    <div>
                      <p className="text-xl font-semibold text-slate-100">
                        {coord.name}
                      </p>
                      <p className="text-sm text-slate-300">{coord.year}</p>
                      <p className="text-sm text-blue-400 flex items-center">
                        <Phone className="w-4 h-4 mr-2" /> {coord.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Event Coordinators Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-slate-900 border border-blue-500/30 rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-blue-400/20 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold font-manuscript text-amber-200 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-blue-400" /> Event
                Coordinators
              </h2>
              <div className="space-y-6">
                {eventCoordinators.map((coord, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <img
                      src={`https://api.dicebear.com/8.x/initials/svg?seed=${coord.name}`} // DiceBear for initials avatar
                      alt={coord.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow-md"
                    />
                    <div>
                      <p className="text-xl font-semibold text-slate-100">
                        {coord.name}
                      </p>
                      <p className="text-sm text-slate-300">{coord.year}</p>
                      <p className="text-sm text-blue-400 flex items-center">
                        <Phone className="w-4 h-4 mr-2" /> {coord.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Institution Details & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Institution Details Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-slate-900 border border-amber-500/30 rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-amber-400/20 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold font-manuscript text-amber-200 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-amber-400" /> Institution
                Details
              </h2>
              <div className="space-y-4 text-slate-200">
                <p className="flex items-start">
                  <Crown className="w-5 h-5 mr-3 mt-1 text-amber-400 flex-shrink-0" />
                  St. Joseph's Institute of Technology
                </p>
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0" />
                  OMR, Chennai - 600 119
                </p>
                <p className="flex items-start">
                  <Link className="w-5 h-5 mr-3 mt-1 text-green-400 flex-shrink-0" />
                  <a
                    href="https://stjosephstechnology.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    https://stjosephstechnology.ac.in/
                  </a>
                </p>
                <p className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <a
                    href="mailto:contact@stjosephstechnology.ac.in"
                    className="text-blue-400 hover:underline"
                  >
                    contact@stjosephstechnology.ac.in
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Locate Us on the Map Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="bg-slate-900 border border-red-500/30 rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-red-400/20 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold font-manuscript text-amber-200 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-red-400" /> Locate Us on
                the Map
              </h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-slate-700 shadow-md">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">
                Ensure your Google Maps API key is correctly configured for the
                map to display.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
