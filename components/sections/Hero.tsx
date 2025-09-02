"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Scroll,
  Calendar,
  MapPin,
  Feather,
  BookOpen,
  Star,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-13T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Enhanced Background with Dark Renaissance imagery */}
      <div className="absolute inset-0">
        {/* Base background with a dark, textured theme */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // Dark gray/slate SVG background pattern
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='parchment' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23111827'/%3E%3Ccircle cx='10' cy='10' r='0.5' fill='%23374151' opacity='0.3'/%3E%3Ccircle cx='5' cy='5' r='0.3' fill='%234b5563' opacity='0.4'/%3E%3Ccircle cx='15' cy='15' r='0.4' fill='%23374151' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23parchment)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-black/90 to-gray-950/90" />

        {/* Subtle texture overlay - changed to a light color with low opacity */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Responsive Ornate decorative border frame - changed to brighter amber */}
      <div className="absolute inset-3 sm:inset-4 md:inset-6 lg:inset-8 border-2 sm:border-3 md:border-4 border-double border-amber-500/30 rounded-lg md:rounded-xl">
        <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-amber-400/20 rounded-md lg:rounded-lg"></div>
      </div>

      {/* Responsive Corner ornaments */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 lg:top-12 lg:left-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border-l-2 border-t-2 sm:border-l-3 sm:border-t-3 md:border-l-4 md:border-t-4 border-amber-500/40 rounded-tl-xl md:rounded-tl-3xl"></div>
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 lg:top-12 lg:right-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border-r-2 border-t-2 sm:border-r-3 sm:border-t-3 md:border-r-4 md:border-t-4 border-amber-500/40 rounded-tr-xl md:rounded-tr-3xl"></div>
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 lg:bottom-12 lg:left-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border-l-2 border-b-2 sm:border-l-3 sm:border-b-3 md:border-l-4 md:border-b-4 border-amber-500/40 rounded-bl-xl md:rounded-bl-3xl"></div>
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border-r-2 border-b-2 sm:border-r-3 sm:border-b-3 md:border-r-4 md:border-b-4 border-amber-500/40 rounded-br-xl md:rounded-br-3xl"></div>

      {/* Enhanced floating decorative elements - Icon colors brightened */}
      <motion.div
        className="absolute top-12 left-8 sm:top-16 sm:left-12 md:top-20 md:left-16 lg:top-24 lg:left-24 opacity-10 sm:opacity-15 md:opacity-20 lg:opacity-30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative">
          <Crown className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 text-amber-500" />
          <motion.div
            className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2"
            animate={{ rotate: [0, 360], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-yellow-400" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-16 right-8 sm:top-20 sm:right-12 md:top-24 md:right-16 lg:top-32 lg:right-32 opacity-10 sm:opacity-15 md:opacity-20 lg:opacity-25"
        animate={{
          rotate: [0, -15, 15, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Feather className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-amber-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-8 sm:bottom-16 sm:right-12 md:bottom-20 md:right-16 lg:bottom-24 lg:right-24 opacity-10 sm:opacity-15 md:opacity-20 lg:opacity-30"
        animate={{
          rotate: [360, 0],
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Scroll className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 text-amber-300" />
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-8 sm:bottom-20 sm:left-12 md:bottom-24 md:left-16 lg:bottom-32 lg:left-32 opacity-10 sm:opacity-15 md:opacity-20 lg:opacity-25"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BookOpen className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-amber-400" />
      </motion.div>

      {/* Floating stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10 sm:opacity-15 md:opacity-20"
          style={{
            top: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 60 + 20}%`,
          }}
          animate={{
            scale: [0.5, 1, 0.5],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Star className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Enhanced Title - Light text gradient */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6 sm:mb-8 md:mb-12"
        >
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-amber-100 mb-4 sm:mb-6 drop-shadow-2xl relative z-10 leading-tight font-manuscript">
              <span className="bg-gradient-to-b from-amber-200 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
                Litlaya
              </span>
            </h1>

            {/* Decorative underline */}
            <motion.div
              className="flex items-center justify-center mb-4 sm:mb-6 md:mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-12 sm:w-16 md:w-20 lg:w-24"></div>
              <div className="mx-2 sm:mx-3 md:mx-4 w-2 h-2 sm:w-3 sm:h-3 bg-amber-400 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-12 sm:w-16 md:w-20 lg:w-24"></div>
            </motion.div>
          </div>

          <motion.p
            className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-slate-300 font-serif tracking-wide px-2 sm:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            A Literary Symposium of Renaissance Grandeur
          </motion.p>
        </motion.div>

        {/* Enhanced Subtitle - Dark background card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-amber-500/30 shadow-2xl max-w-4xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-200 leading-relaxed font-serif">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl float-left text-yellow-400 font-bold leading-none mr-2 sm:mr-3 mt-0.5 sm:mt-1">
                W
              </span>
              here scholars gather in the spirit of Shakespeare, to celebrate
              the eternal power of literature through five magnificent
              competitions of wit and wisdom. Join us for an extraordinary
              journey through the realms of eloquence and artistry.
            </p>
          </div>
        </motion.div>

        {/* Enhanced Event Details - Dark info tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-12 mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border border-amber-600/50 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400" />
            <span className="font-semibold text-slate-100 text-xs sm:text-sm md:text-base lg:text-lg">
              September 13, 2025
            </span>
          </motion.div>
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border border-amber-600/50 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400" />
            <span className="font-semibold text-slate-100 text-xs sm:text-sm md:text-base lg:text-lg">
              College Auditorium
            </span>
          </motion.div>
        </motion.div>

        {/* Enhanced Countdown Timer - Dark theme */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-gradient-to-br from-slate-900/70 to-gray-900/70 backdrop-blur-lg rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-amber-500/40 shadow-2xl max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            <motion.h3
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-200 mb-4 sm:mb-6 md:mb-8 font-serif"
              animate={{
                textShadow: [
                  "0 0 5px rgba(252, 211, 77, 0.3)",
                  "0 0 20px rgba(252, 211, 77, 0.5)",
                  "0 0 5px rgba(252, 211, 77, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Symposium Commences In
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-black/30 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border-2 border-amber-500/60 shadow-lg relative overflow-hidden"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-lg sm:rounded-xl md:rounded-2xl"></div>
                  <div className="relative z-10">
                    <motion.div
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-100 mb-1 sm:mb-2"
                      animate={{
                        scale: item.label === "Seconds" ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 1,
                        repeat: item.label === "Seconds" ? Infinity : 0,
                      }}
                    >
                      {item.value.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="text-xs sm:text-sm font-semibold text-amber-300 uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="space-y-3 sm:space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6 xl:space-x-8 flex flex-col md:flex-row items-center justify-center max-w-2xl mx-auto"
        >
          <motion.button
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg sm:rounded-xl md:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-amber-400 w-full sm:w-auto"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <Scroll className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
              Register Now
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          <motion.button
            className="group relative overflow-hidden bg-transparent border-2 sm:border-3 border-amber-500 text-amber-300 hover:text-white font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg sm:rounded-xl md:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl shadow-xl transition-all duration-300 hover:shadow-2xl w-full sm:w-auto"
            whileHover={{ y: -3, borderColor: "#f59e0b" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
              View Events
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced floating particles - colors are fine for dark theme */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0
                ? "w-1 h-1 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-amber-400/40"
                : i % 3 === 1
                ? "w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-yellow-500/30"
                : "w-0.5 h-0.5 sm:w-1 sm:h-1 bg-orange-400/50"
            }`}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: typeof window !== "undefined" ? window.innerHeight + 10 : 800,
            }}
            animate={{
              y: -50,
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Ambient light effect - will pop nicely on dark theme */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-amber-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.05, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
