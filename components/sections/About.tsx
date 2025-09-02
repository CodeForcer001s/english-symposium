"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  MapPin,
  Users,
  Feather,
  Library,
} from "lucide-react";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const infoItems = [
    {
      icon: GraduationCap,
      label: "Institution",
      value: "St. Joseph's College of Arts & Science",
    },
    {
      icon: BookOpen,
      label: "Department",
      value: "English Language & Literature",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
    },
    {
      icon: Users,
      label: "Audience",
      value: "Undergraduate & Postgraduate Students",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-slate-200 py-20 px-4 sm:px-6 lg:px-8">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Image */}
          <motion.div
            className="order-2 lg:order-1"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "tween",
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-lg blur-xl opacity-50" />
              <img
                src="https://st3.depositphotos.com/16174436/18954/i/450/depositphotos_189547686-stock-photo-old-book-pen-inkwell-wooden.jpg"
                alt="Classical Literature"
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-lg border border-amber-600/30"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "tween",
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              },
            }}
          >
            {/* Header */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Library className="w-6 h-6 text-amber-400 mr-2" />
                <span className="text-amber-300 font-medium tracking-wide">
                  Literary Symposium
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">About </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 font-serif italic">
                  Litlaya
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-amber-600/20">
              <p className="text-lg leading-relaxed text-slate-300">
                Step into the grandeur of the Renaissance at{" "}
                <span className="text-amber-300 font-semibold">Litlaya</span>, a
                prestigious literary symposium dedicated to celebrating the
                profound beauty and enduring legacy of classical and
                contemporary literature. This event is a beacon for young minds
                eager to explore the depths of human expression through words.
              </p>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50 hover:border-amber-600/40 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-amber-200 text-sm mb-1">
                        {item.label}
                      </h3>
                      <p className="text-slate-300 text-sm">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final Description */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-amber-600/20">
              <div className="flex items-start space-x-3">
                <Feather className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <p className="text-base leading-relaxed text-slate-300 italic">
                  Prepare to engage in spirited debates, eloquent recitations,
                  and creative writing challenges that will test your
                  intellectual prowess and artistic flair. Litlaya is more than
                  an event; its a celebration of words, ideas, and the timeless
                  human spirit.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
