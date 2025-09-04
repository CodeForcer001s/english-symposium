"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Event } from "@/app/data/events";
import {
  Users,
  BookOpen,
  ScrollText,
  MapPin,
  Calendar,
  Clock,
  Feather,
} from "lucide-react";

interface EventDetailsProps {
  event: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  const [writingText, setWritingText] = useState("");
  const [currentWritingIndex, setCurrentWritingIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const playbillText = `EVENT DETAILS`;

  // Literary quotes for floating pages
  const literaryQuotes = [
    "All the world's a stage...",
    "To be or not to be...",
    "What dreams may come...",
    "Fair is foul, and foul is fair...",
    "Romeo, Romeo, wherefore art thou...",
    "Once upon a midnight dreary...",
    "It was the best of times...",
    "Call me Ishmael...",
    "In the beginning was the Word...",
    "Shall I compare thee to a summer's day...",
    "Double, double toil and trouble...",
    "Now is the winter of our discontent...",
  ];

  // Observer to trigger animations when the component is scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        // Added 'obs' to reference the observer itself
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Stop observing after the animation has been triggered once
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Quill writing effect for the main title
  useEffect(() => {
    if (isInView && currentWritingIndex < playbillText.length) {
      const timer = setTimeout(() => {
        setWritingText((prev) => prev + playbillText[currentWritingIndex]);
        setCurrentWritingIndex((prev) => prev + 1);
      }, 85);
      return () => clearTimeout(timer);
    }
  }, [isInView, currentWritingIndex, playbillText]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden"
      style={{
        fontFamily: "Cinzel, serif",
        background: "radial-gradient(ellipse at center, #2c1e12, #0a0a0a)",
      }}
    >
      {/* Import custom fonts */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cinzel+Decorative:wght@400;700&family=Dancing+Script:wght@400;500;600;700&display=swap");
      `}</style>

      {/* Floating Manuscript Pages */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const size = 40 + Math.random() * 60; // 40-100px width
          const height = size * (1.2 + Math.random() * 0.4); // Vary height ratio
          const startX = Math.random() * 100;
          const startY = 110 + Math.random() * 20; // Start below viewport
          const endY = -20 - Math.random() * 20; // End above viewport
          const duration = 15 + Math.random() * 10; // 15-25 seconds
          const delay = Math.random() * 10; // Stagger appearance
          const quote =
            literaryQuotes[Math.floor(Math.random() * literaryQuotes.length)];

          return (
            <motion.div
              key={i}
              className="absolute group cursor-default"
              style={{
                width: `${size}px`,
                height: `${height}px`,
                left: `${startX}%`,
              }}
              initial={{
                y: `${startY}vh`,
                opacity: 0,
                rotate: Math.random() * 20 - 10,
                scale: 0.8,
              }}
              animate={{
                y: `${endY}vh`,
                opacity: [0, 0.3 + Math.random() * 0.2, 0],
                rotate: [
                  Math.random() * 20 - 10,
                  Math.random() * 30 - 15,
                  Math.random() * 20 - 10,
                ],
                x: [
                  0,
                  (Math.random() - 0.5) * 100,
                  (Math.random() - 0.5) * 150,
                ],
                scale: [0.8, 1, 0.9],
              }}
              transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "linear",
                opacity: { duration: duration * 0.8, ease: "easeInOut" },
                rotate: { duration: duration * 0.6, ease: "easeInOut" },
                x: { duration: duration * 0.7, ease: "easeInOut" },
                scale: { duration: duration * 0.5, ease: "easeInOut" },
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Manuscript Page */}
              <div
                className="w-full h-full relative rounded-sm shadow-lg transition-all duration-300 group-hover:shadow-amber-500/30 group-hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(253, 246, 227, 0.85) 0%, 
                    rgba(245, 222, 179, 0.9) 50%, 
                    rgba(238, 203, 173, 0.85) 100%)`,
                  backdropFilter: "blur(1px)",
                  border: "1px solid rgba(218, 165, 32, 0.3)",
                  boxShadow: `
                    0 2px 8px rgba(0, 0, 0, 0.3),
                    inset 0 1px 2px rgba(255, 255, 255, 0.2),
                    0 0 0 1px rgba(218, 165, 32, 0.2)
                  `,
                }}
              >
                {/* Paper texture overlay */}
                <div
                  className="absolute inset-0 rounded-sm opacity-20"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
                      radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "8px 8px, 12px 12px",
                  }}
                />

                {/* Literary quote */}
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 2, duration: 2 }}
                    className="text-center leading-tight group-hover:opacity-80 transition-opacity duration-300"
                    style={{
                      fontSize: `${Math.max(6, size / 12)}px`,
                      fontFamily: "Dancing Script, cursive",
                      color: "rgba(101, 67, 33, 0.7)",
                      textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
                      fontWeight: "500",
                    }}
                  >
                    {quote}
                  </motion.p>
                </div>

                {/* Decorative corner flourishes */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-amber-600/40 rounded-tl-sm" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-amber-600/40 rounded-tr-sm" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-amber-600/40 rounded-bl-sm" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-amber-600/40 rounded-br-sm" />

                {/* Hover glow effect */}
                <div className="absolute -inset-1 rounded-md bg-gradient-to-br from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/20 group-hover:to-amber-600/10 transition-all duration-300 -z-10" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Flickering embers effect */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-amber-500/30 blur-sm"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              scale: [0.5, 1.3, 0.7, 1.1, 0.5],
              opacity: [0.3, 0.9, 0.4, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Golden Spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(218, 165, 32, 0.1)" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
        <AnimatePresence>
          {isInView && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full mx-auto rounded-lg sm:rounded-xl lg:rounded-2xl p-1 bg-black shadow-2xl shadow-black/50"
            >
              <div
                className="relative rounded-md sm:rounded-lg lg:rounded-xl p-3 sm:p-6 md:p-8 lg:p-12 xl:p-16"
                style={{
                  background: "rgba(10, 10, 10, 0.8)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                    <motion.div
                      animate={{
                        rotate: [0, -5, 2, -3, 0],
                        x: [0, -1, 1, -1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="mb-2 sm:mb-0 sm:mr-4 md:mr-6"
                    >
                      <Feather className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-amber-500" />
                    </motion.div>

                    <div className="text-center">
                      <h1
                        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-1 sm:mb-2"
                        style={{
                          fontFamily: "Cinzel Decorative, serif",
                          background:
                            "linear-gradient(135deg, #DAA520, #FFD700, #FFA500, #FFD700, #DAA520)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          lineHeight: "1.1",
                        }}
                      >
                        {writingText}
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          className="text-amber-600"
                        >
                          |
                        </motion.span>
                      </h1>
                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                        className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium italic text-amber-300"
                      >
                        {event.subtitle}
                      </motion.p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2.2, duration: 1.2 }}
                    className="h-0.5 sm:h-1 mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl bg-gradient-to-r from-transparent via-amber-600 to-transparent"
                  ></motion.div>
                </motion.div>

                {/* Event Information Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 1 }}
                  className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-6 sm:mb-8 md:mb-12"
                >
                  {/* Left Column */}
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-black/40 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-amber-800/60 shadow-lg shadow-black/30">
                      <h2
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 pb-1 sm:pb-2 text-amber-500 border-b border-amber-800/60"
                        style={{ fontFamily: "Cinzel Decorative, serif" }}
                      >
                        The Performance
                      </h2>
                      <p className="leading-relaxed text-sm sm:text-base md:text-lg font-medium italic text-amber-200">
                        "{event.description}"
                      </p>
                    </div>

                    <div className="bg-black/40 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-amber-800/60 shadow-lg shadow-black/30">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="p-2 sm:p-3 rounded-full flex-shrink-0 bg-amber-600/80">
                          <Users className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-amber-400">
                            Company Size
                          </h3>
                          <p className="font-medium text-sm sm:text-base md:text-lg text-amber-200">
                            {event.teamComposition}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Performance Details */}
                  <div className="space-y-4 sm:space-y-6">
                    <h2
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pb-1 sm:pb-2 text-amber-500 border-b border-amber-800/60"
                      style={{ fontFamily: "Cinzel Decorative, serif" }}
                    >
                      Performance Details
                    </h2>

                    <div className="space-y-3 sm:space-y-4">
                      {[
                        {
                          icon: MapPin,
                          label: "Theatre",
                          value: event.venue,
                          delay: 2.8,
                        },
                        {
                          icon: Calendar,
                          label: "Performance Date",
                          value: event.date,
                          delay: 3.0,
                        },
                        {
                          icon: Clock,
                          label: "Curtain Time",
                          value: event.time,
                          delay: 3.2,
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: item.delay, duration: 0.8 }}
                          className="bg-black/40 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-amber-800/60 shadow-lg shadow-black/30"
                        >
                          <div className="flex items-start space-x-3 sm:space-x-4">
                            <div className="p-2 sm:p-3 rounded-full flex-shrink-0 bg-amber-600/80">
                              <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base sm:text-lg font-bold mb-0.5 sm:mb-1 text-amber-400">
                                {item.label}
                              </h3>
                              <p className="font-medium text-sm sm:text-base md:text-lg text-amber-200">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Event Structure */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5, duration: 1 }}
                  className="mb-6 sm:mb-8 md:mb-12"
                >
                  <h2
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center pb-2 sm:pb-4 text-amber-500 border-b-2 border-amber-800/60"
                    style={{ fontFamily: "Cinzel Decorative, serif" }}
                  >
                    Acts & Scenes
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {event.eventStructure.map((structure, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 3.8 + index * 0.3, duration: 0.8 }}
                        className="bg-black/40 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-amber-800/60 shadow-lg shadow-black/30 transition-all duration-300 hover:border-amber-500 hover:shadow-amber-600/20 hover:shadow-2xl hover:-translate-y-1"
                      >
                        <div className="flex items-center mb-2 sm:mb-4">
                          <div className="p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3 flex-shrink-0 bg-amber-600/80">
                            <BookOpen className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <h3 className="text-sm sm:text-base md:text-lg font-bold text-amber-400">
                            {structure.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed font-medium text-amber-200">
                          {structure.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* General Rules */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4.2, duration: 1 }}
                  className="bg-black/40 rounded-lg sm:rounded-xl p-3 sm:p-6 md:p-8 border-2 border-amber-800/60 shadow-2xl shadow-black/40"
                >
                  <h2
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center pb-2 sm:pb-4 text-amber-500 border-b-2 border-amber-700/80"
                    style={{ fontFamily: "Cinzel Decorative, serif" }}
                  >
                    Theatre Rules & Regulations
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    {event.generalRules.map((rule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 4.5 + index * 0.2, duration: 0.8 }}
                        className="flex items-start space-x-3 sm:space-x-4"
                      >
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 bg-amber-600"></div>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed font-medium flex-1 text-amber-200">
                          {rule}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Royal Seal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    delay: 5.0,
                    duration: 1.2,
                    type: "spring",
                    bounce: 0.3,
                  }}
                  className="flex justify-center mt-6 sm:mt-8 md:mt-12"
                >
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl border-2 sm:border-4 bg-gradient-to-br from-yellow-700 via-amber-500 to-yellow-700 border-amber-800">
                      <ScrollText className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="absolute -inset-1 sm:-inset-2 rounded-full border border-amber-500 opacity-30"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventDetails;
