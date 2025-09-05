"use client";
import React from "react";
import {
  BookOpen,
  GraduationCap,
  Users,
  Feather,
  Library,
  Scroll,
  Pen,
  Crown,
  Star,
  Trophy,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Added for enhanced animations

const About = () => {
  const eventHighlights = [
    { number: "5", label: "COMPETITIONS", color: "text-yellow-400" },
    { number: "100+", label: "PARTICIPANTS", color: "text-amber-400" },
    { number: "6-8", label: "HOURS", color: "text-yellow-300" },
    { number: "10", label: "AWARDS", color: "text-yellow-500" },
  ];
  const [particles, setParticles] = useState<
    { left: string; top: string; duration: string; delay: string }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(generated);
  }, []);
  const categories = [
    "Poetry",
    "Classical Literature",
    "Creative Writing",
    "Literary Analysis",
    "Rhetoric",
  ];

  return (
    <section
      className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="about"
    >
      {/* Enhanced Animated Background Icons */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse">
          <BookOpen className="w-12 h-12 text-yellow-400" />
        </div>
        <div
          className="absolute top-40 right-20 animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          <Feather className="w-10 h-10 text-amber-300" />
        </div>
        <div
          className="absolute bottom-32 left-32 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <Scroll className="w-14 h-14 text-yellow-500" />
        </div>
        <div
          className="absolute top-60 left-1/2 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "2s" }}
        >
          <Pen className="w-8 h-8 text-yellow-400" />
        </div>
        <div
          className="absolute bottom-20 right-16 animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          <Crown className="w-16 h-16 text-amber-600" />
        </div>
        <div
          className="absolute top-32 right-1/3 animate-bounce"
          style={{ animationDuration: "5s" }}
        >
          <Library className="w-12 h-12 text-yellow-400" />
        </div>
        <div
          className="absolute bottom-60 left-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <Trophy className="w-10 h-10 text-amber-300" />
        </div>
        <div
          className="absolute top-80 right-40 animate-bounce"
          style={{ animationDuration: "6s" }}
        >
          <Sparkles className="w-9 h-9 text-yellow-300" />
        </div>
      </div>

      {/* Golden Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30"
            style={{
              left: p.left,
              top: p.top,
              animation: `float ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Main Header with Golden Effects */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent animate-shimmer relative font-manuscript">
              The Event Has Arrived!
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent opacity-50 blur-sm"></div>
            </h1>
          </div>

          <div className="relative inline-block">
            <div className="bg-gradient-to-r from-yellow-900/80 via-amber-800/60 to-yellow-900/80 backdrop-blur-sm p-4 rounded-2xl border-2 border-yellow-400/50 shadow-2xl shadow-yellow-400/30 hover:shadow-yellow-400/50 transition-all duration-300">
              <div className="absolute inset-1 border border-yellow-400/30 rounded-xl animate-pulse font-bold"></div>
              <span className="text-yellow-100 text-xl tracking-wide">
                REGISTER FOR{" "}
              </span>
              <span className="text-yellow-300 text-2xl font-bold font-manuscript tracking-wider animate-glow">
                Litlaya '25
              </span>
            </div>
            {/* Enhanced Decorative corners with golden glow */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-400 animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-400 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-400 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-400 animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Enhanced Left Column - Main Event Card */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-yellow-600/50 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Library className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 font-serif">
                  LITERARY EXCELLENCE
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Our literary symposium will stand as a landmark event that
                brings together some of the brightest minds to compete in five
                distinct events spanning poetry, classical literature, and
                creative writing. The participants will have demonstrated
                exceptional literary prowess and innovation through a series of
                rigorous challenges. This symposium is set to inspire future
                collaborations, ignite a culture of creative problem-solving,
                and push the boundaries of what students and literature
                enthusiasts can achieve in competitive environments.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-yellow-600/20 to-amber-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-600/30 hover:border-yellow-400/60 hover:bg-gradient-to-r hover:from-yellow-600/30 hover:to-amber-600/30 transition-all duration-300 cursor-pointer"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image and Event Highlights */}
          <div
            className="lg:col-span-2 flex flex-col gap-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Image occupying the top part of the right column */}
            <div className="rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-600/50 transition-all duration-300 shadow-lg shadow-yellow-400/10">
              <img
                src="https://thumbs.dreamstime.com/b/write-manuscript-writing-ink-antique-feather-dokument-ancient-355757280.jpg"
                alt="Mysterious literary concept"
                className="w-full h-auto object-cover" // w-full for full width, h-auto to maintain aspect ratio, max-h-96 to prevent it from being too tall
              />
            </div>
          </div>
        </div>
        {/* Event Highlights with Reduced Padding, directly below the image */}
        <div className="bg-black mb-12 backdrop-blur-sm border border-gray-700 rounded-xl p-4 h-full hover:border-yellow-600/50 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center animate-glow font-serif">
            EVENT HIGHLIGHTS
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {eventHighlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center animate-scale-in hover:transform hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-yellow-900/20 to-amber-900/20 rounded-lg p-2 border border-yellow-700/30 hover:border-yellow-500/50"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div
                  className={`text-3xl md:text-4xl font-bold mb-1 ${highlight.color} animate-pulse`}
                >
                  {highlight.number}
                </div>
                <div className="text-gray-300 text-xs font-medium tracking-wide">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================= */}
        {/* START: Enhanced Institution Card (Replaced from previous code) */}
        {/* ============================================================= */}
        <div
          className="relative overflow-hidden bg-black backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-6 sm:p-8 mb-8 animate-slide-up group hover:border-yellow-500/60 hover:shadow-2xl hover:shadow-yellow-400/15 transition-all duration-500"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Subtle background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            {/* DESKTOP & TABLET HEADER */}
            <div className="hidden md:flex items-center justify-between gap-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0"
              >
                <div className="p-1 bg-black rounded-full transition-all duration-300 h-full w-full">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFJahbEPx4fZYUIzN1lbjyJ-2_r7BonNw5g&s"
                    alt="College Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

              <h2
                className="text-center text-3xl lg:text-4xl xl:text-5xl font-extrabold font-serif bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent animate-glow"
                style={{ textShadow: "0 2px 10px rgba(251, 191, 36, 0.2)" }}
              >
                ST. JOSEPH'S INSTITUTE OF TECHNOLOGY
              </h2>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0"
              >
                <div className="p-1 bg-black rounded-full group-hover:ring-yellow-500/70 transition-all duration-300 h-full w-full">
                  <img
                    src="/year-logo.png"
                    alt="Department/Year Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </div>

            {/* MOBILE HEADER */}
            <div className="md:hidden flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="w-16 h-16 p-1 bg-black rounded-full ring-2 ring-yellow-600/40">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFJahbEPx4fZYUIzN1lbjyJ-2_r7BonNw5g&s"
                    alt="College Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="w-16 h-16 p-1 bg-black rounded-full ring-2 ring-yellow-600/40">
                  <img
                    src="/year-logo.png"
                    alt="Department/Year Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-extrabold font-serif bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent animate-glow leading-tight">
                ST. JOSEPH'S INSTITUTE OF TECHNOLOGY
              </h2>
            </div>

            {/* Department (always below) */}
            <p className="text-yellow-300 text-sm sm:text-base md:text-lg animate-glow font-semibold tracking-wide text-center mt-4">
              ENGLISH DEPARTMENT
            </p>

            {/* Values Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-6">
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-400/30">
                  <GraduationCap className="w-8 h-8 text-black" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-yellow-300 transition-colors duration-300 text-center">
                  Excellence
                </span>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-400/30">
                  <Lightbulb className="w-8 h-8 text-black" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-yellow-300 transition-colors duration-300 text-center">
                  Innovation
                </span>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-400/30">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-yellow-300 transition-colors duration-300 text-center">
                  Collaboration
                </span>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-400/30">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-yellow-300 transition-colors duration-300 text-center">
                  Research
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* =========================================================== */}
        {/* END: Enhanced Institution Card */}
        {/* =========================================================== */}

        {/* Enhanced Vision Card */}
        {/* Enhanced & Responsive Vision Card */}
        <div
          className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 backdrop-blur-sm border border-yellow-600/30 rounded-xl p-6 sm:p-8 animate-slide-up hover:border-yellow-400/60 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300"
          style={{ animationDelay: "0.6s" }}
        >
          {/* Responsive container for icon and title */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left mb-6">
            {/* Icon container */}
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center sm:mr-4 shadow-lg shadow-yellow-400/30 mb-4 sm:mb-0">
              <Crown className="w-7 h-7 text-black" />
            </div>

            {/* Responsive Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 animate-glow font-serif">
              DRIVING LITERARY INNOVATION FORWARD
            </h3>
          </div>

          {/* Responsive Paragraph Text */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed hover:text-gray-200 transition-colors duration-300">
            The English department is a hub for cutting-edge literary research
            and education. Through hands-on competitions and scholarly
            collaboration, our students and faculty drive impactful advancements
            in literature and creative expression, preparing for careers at the
            forefront of literary arts and addressing real-world challenges
            through the power of words and ideas.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(251, 191, 36, 0.8),
              0 0 30px rgba(251, 191, 36, 0.5);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 3rem !important;
          }

          .flex-between-mobile {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 640px) {
          .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default About;
