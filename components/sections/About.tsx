"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookText, GraduationCap, MapPin, Clock, Users } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-slate-200 overflow-hidden py-16 px-4 sm:px-8">
      {/* Background Ornate Border */}
      <div className="absolute inset-3 sm:inset-4 md:inset-6 lg:inset-8 border-2 sm:border-3 md:border-4 border-double border-amber-500/30 rounded-lg md:rounded-xl">
        <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-amber-400/20 rounded-md lg:rounded-lg"></div>
      </div>

      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 sm:p-10 md:p-12 border border-amber-600/30 shadow-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Image */}
        <motion.div
          className="w-full h-80 sm:h-96 lg:h-full rounded-xl overflow-hidden shadow-2xl border border-amber-700/40"
          variants={itemVariants}
        >
          {/* Placeholder for the image */}
          <img
            src="https://st3.depositphotos.com/16174436/18954/i/450/depositphotos_189547686-stock-photo-old-book-pen-inkwell-wooden.jpg" // Replace with your image URL
            alt="Renaissance Library"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </motion.div>

        {/* Right Side: About Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 drop-shadow-lg"
            variants={itemVariants}
          >
            About <span className="font-serif italic">Litlaya</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-slate-300 font-serif"
            variants={itemVariants}
          >
            Step into the grandeur of the Renaissance at{" "}
            <span className="text-yellow-300 font-semibold">Litlaya</span>, a
            prestigious literary symposium dedicated to celebrating the profound
            beauty and enduring legacy of classical and contemporary literature.
            This event is a beacon for young minds eager to explore the depths
            of human expression through words.
          </motion.p>

          <motion.div className="space-y-4 mb-10" variants={containerVariants}>
            <motion.div
              className="flex items-center lg:justify-start justify-center space-x-4 text-lg sm:text-xl text-amber-200"
              variants={itemVariants}
            >
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
              <span className="font-bold">Institution:</span>{" "}
              <span className="text-slate-200 font-medium">
                St. Joseph's College of Arts & Science
              </span>
            </motion.div>
            <motion.div
              className="flex items-center lg:justify-start justify-center space-x-4 text-lg sm:text-xl text-amber-200"
              variants={itemVariants}
            >
              <BookText className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
              <span className="font-bold">Department:</span>{" "}
              <span className="text-slate-200 font-medium">
                Department of English Language & Literature
              </span>
            </motion.div>
            <motion.div
              className="flex items-center lg:justify-start justify-center space-x-4 text-lg sm:text-xl text-amber-200"
              variants={itemVariants}
            >
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
              <span className="font-bold">Location:</span>{" "}
              <span className="text-slate-200 font-medium">
                Chennai, Tamil Nadu, India
              </span>
            </motion.div>
            <motion.div
              className="flex items-center lg:justify-start justify-center space-x-4 text-lg sm:text-xl text-amber-200"
              variants={itemVariants}
            >
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
              <span className="font-bold">Audience:</span>{" "}
              <span className="text-slate-200 font-medium">
                Undergraduate & Postgraduate Students
              </span>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base leading-relaxed text-slate-400 italic font-serif"
            variants={itemVariants}
          >
            Prepare to engage in spirited debates, eloquent recitations, and
            creative writing challenges that will test your intellectual prowess
            and artistic flair. Litlaya is more than an event; it's a
            celebration of words, ideas, and the timeless human spirit.
          </motion.p>
        </div>
      </motion.div>

      {/* Floating decorative elements (optional, similar to Hero) */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-amber-400/10 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 bg-orange-500/10 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.1, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default About;
