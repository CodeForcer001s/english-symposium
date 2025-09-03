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
  const [showDetails, setShowDetails] = useState(false);
  const [writingText, setWritingText] = useState("");
  const [currentWritingIndex, setCurrentWritingIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const playbillText = `${event.title}`;

  // Intersection Observer for scroll-based animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
            // Reset animations when out of view
            setShowDetails(false);
            setWritingText("");
            setCurrentWritingIndex(0);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Trigger curtain opening when in view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowDetails(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Quill writing effect
  useEffect(() => {
    if (showDetails && currentWritingIndex < playbillText.length) {
      const timer = setTimeout(() => {
        setWritingText((prev) => prev + playbillText[currentWritingIndex]);
        setCurrentWritingIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [showDetails, currentWritingIndex, playbillText]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-black"
      style={{ fontFamily: "Cinzel, serif" }}
    >
      {/* Load Cinzel font */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cinzel+Decorative:wght@400;700&display=swap");
      `}</style>

      {/* Flickering candlelight effect */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-yellow-400/40 blur-sm"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              scale: [0.5, 1.3, 0.7, 1.1, 0.5],
              opacity: [0.3, 0.9, 0.4, 0.8, 0.3],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Stage Curtains */}
      <div className="absolute inset-0 z-50">
        {/* Left Curtain */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: showDetails ? "-100%" : 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute top-0 left-0 w-[52%] h-full"
          style={{
            background: `linear-gradient(90deg, 
              #8B0000 0%, 
              #A0001C 15%, 
              #8B0000 30%, 
              #6B0000 50%, 
              #8B0000 70%, 
              #A0001C 85%, 
              #8B0000 100%
            )`,
          }}
        >
          {/* Curtain pleats */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 h-full opacity-50"
                style={{
                  left: `${i * 16.67}%`,
                  width: "12%",
                  background: `linear-gradient(90deg, 
                    rgba(0,0,0,0.4) 0%, 
                    transparent 50%, 
                    rgba(0,0,0,0.3) 100%
                  )`,
                }}
              />
            ))}
          </div>
          <div className="absolute right-0 top-0 w-3 sm:w-6 h-full bg-gradient-to-l from-black/70 to-transparent"></div>
        </motion.div>

        {/* Right Curtain */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: showDetails ? "100%" : 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute top-0 right-0 w-[52%] h-full"
          style={{
            background: `linear-gradient(-90deg, 
              #8B0000 0%, 
              #A0001C 15%, 
              #8B0000 30%, 
              #6B0000 50%, 
              #8B0000 70%, 
              #A0001C 85%, 
              #8B0000 100%
            )`,
          }}
        >
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 h-full opacity-50"
                style={{
                  right: `${i * 16.67}%`,
                  width: "12%",
                  background: `linear-gradient(-90deg, 
                    rgba(0,0,0,0.4) 0%, 
                    transparent 50%, 
                    rgba(0,0,0,0.3) 100%
                  )`,
                }}
              />
            ))}
          </div>
          <div className="absolute left-0 top-0 w-3 sm:w-6 h-full bg-gradient-to-r from-black/70 to-transparent"></div>
        </motion.div>

        {/* Curtain Rod */}
        <div className="absolute top-0 left-0 w-full h-2 sm:h-3 bg-gradient-to-b from-yellow-600 to-yellow-800 shadow-lg z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-70"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-40 min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              className="w-full mx-auto"
            >
              {/* Parchment Background */}
              <div
                className="relative rounded-lg sm:rounded-xl lg:rounded-2xl shadow-2xl p-3 sm:p-6 md:p-8 lg:p-12 xl:p-16 border-2 sm:border-4"
                style={{
                  fontFamily: "Cinzel, serif",
                  background: `linear-gradient(135deg, 
                    #FFF8DC 0%, 
                    #FFFACD 25%, 
                    #F5DEB3 50%, 
                    #FFFACD 75%, 
                    #FFF8DC 100%
                  )`,
                  borderColor: "#DAA520",
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(218, 165, 32, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)
                  `,
                  boxShadow: `
                    inset 0 0 60px rgba(218, 165, 32, 0.15),
                    0 25px 50px -12px rgba(0, 0, 0, 0.8),
                    0 0 100px rgba(255, 215, 0, 0.4)
                  `,
                }}
              >
                {/* Golden Border Design */}
                <div
                  className="absolute inset-2 sm:inset-4 rounded-md sm:rounded-xl"
                  style={{
                    border: "1px sm:border-2 solid rgba(218, 165, 32, 0.6)",
                  }}
                >
                  <div
                    className="absolute inset-1 sm:inset-2 rounded-sm sm:rounded-lg"
                    style={{ border: "1px solid rgba(255, 215, 0, 0.4)" }}
                  ></div>
                </div>

                {/* Corner Flourishes */}
                {[
                  { pos: "top-2 left-2 sm:top-6 sm:left-6", rotate: "0" },
                  { pos: "top-2 right-2 sm:top-6 sm:right-6", rotate: "90" },
                  {
                    pos: "bottom-2 left-2 sm:bottom-6 sm:left-6",
                    rotate: "-90",
                  },
                  {
                    pos: "bottom-2 right-2 sm:bottom-6 sm:right-6",
                    rotate: "180",
                  },
                ].map((corner, i) => (
                  <div
                    key={i}
                    className={`absolute ${corner.pos} w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10`}
                    style={{ transform: `rotate(${corner.rotate}deg)` }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full fill-current"
                      style={{ color: "#DAA520" }}
                    >
                      <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                ))}

                {/* Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
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
                      <Feather
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                        style={{ color: "#DAA520" }}
                      />
                    </motion.div>

                    <div className="text-center">
                      <h1
                        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-1 sm:mb-2"
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
                          style={{ color: "#B8860B" }}
                        >
                          |
                        </motion.span>
                      </h1>
                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.6 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium italic"
                        style={{
                          color: "#B8860B",
                          fontFamily: "Cinzel, serif",
                        }}
                      >
                        {event.subtitle}
                      </motion.p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="h-0.5 sm:h-1 mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, #DAA520, #FFD700, #DAA520, transparent)",
                    }}
                  ></motion.div>
                </motion.div>

                {/* Event Information Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8, duration: 0.8 }}
                  className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-6 sm:mb-8 md:mb-12"
                >
                  {/* Event Description */}
                  <div className="space-y-4 sm:space-y-6">
                    <div
                      className="rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-2 shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #FFFACD, #FFF8DC, #FFFACD)",
                        borderColor: "#DAA520",
                      }}
                    >
                      <h2
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 pb-1 sm:pb-2"
                        style={{
                          fontFamily: "Cinzel Decorative, serif",
                          color: "#B8860B",
                          borderBottom:
                            "1px sm:border-2 solid rgba(218, 165, 32, 0.5)",
                        }}
                      >
                        The Performance
                      </h2>
                      <p
                        className="leading-relaxed text-sm sm:text-base md:text-lg font-medium italic"
                        style={{ color: "#8B6914" }}
                      >
                        "{event.description}"
                      </p>
                    </div>

                    {/* Team Composition */}
                    <div
                      className="rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-2 shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #FFF8DC, #FFFACD, #FFF8DC)",
                        borderColor: "#FFD700",
                      }}
                    >
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div
                          className="p-2 sm:p-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#DAA520" }}
                        >
                          <Users className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2"
                            style={{
                              fontFamily: "Cinzel, serif",
                              color: "#B8860B",
                            }}
                          >
                            Company Size
                          </h3>
                          <p
                            className="font-medium text-sm sm:text-base md:text-lg"
                            style={{ color: "#8B6914" }}
                          >
                            {event.teamComposition}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Details */}
                  <div className="space-y-4 sm:space-y-6">
                    <h2
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pb-1 sm:pb-2"
                      style={{
                        fontFamily: "Cinzel Decorative, serif",
                        color: "#B8860B",
                        borderBottom:
                          "1px sm:border-2 solid rgba(218, 165, 32, 0.5)",
                      }}
                    >
                      Performance Details
                    </h2>

                    <div className="space-y-3 sm:space-y-4">
                      {[
                        {
                          icon: MapPin,
                          label: "Theatre",
                          value: event.venue,
                          delay: 3.2,
                        },
                        {
                          icon: Calendar,
                          label: "Performance Date",
                          value: event.date,
                          delay: 3.4,
                        },
                        {
                          icon: Clock,
                          label: "Curtain Time",
                          value: event.time,
                          delay: 3.6,
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: item.delay, duration: 0.6 }}
                          className="rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-2 shadow-lg"
                          style={{
                            background:
                              "linear-gradient(135deg, #FFFACD, #FFF8DC, #FFFACD)",
                            borderColor: "#FFD700",
                          }}
                        >
                          <div className="flex items-start space-x-3 sm:space-x-4">
                            <div
                              className="p-2 sm:p-3 rounded-full flex-shrink-0"
                              style={{ backgroundColor: "#DAA520" }}
                            >
                              <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3
                                className="text-base sm:text-lg font-bold mb-0.5 sm:mb-1"
                                style={{
                                  fontFamily: "Cinzel, serif",
                                  color: "#B8860B",
                                }}
                              >
                                {item.label}
                              </h3>
                              <p
                                className="font-medium text-sm sm:text-base md:text-lg"
                                style={{ color: "#8B6914" }}
                              >
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
                  transition={{ delay: 3.8, duration: 0.8 }}
                  className="mb-6 sm:mb-8 md:mb-12"
                >
                  <h2
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center pb-2 sm:pb-4"
                    style={{
                      fontFamily: "Cinzel Decorative, serif",
                      color: "#B8860B",
                      borderBottom:
                        "1px sm:border-2 solid rgba(218, 165, 32, 0.5)",
                    }}
                  >
                    Acts & Scenes
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {event.eventStructure.map((structure, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 4 + index * 0.2, duration: 0.6 }}
                        className="rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-xl border border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        style={{
                          background:
                            "linear-gradient(135deg, #FFFACD, #FFF8DC, #FFFACD)",
                          borderColor: "#FFD700",
                        }}
                      >
                        <div className="flex items-center mb-2 sm:mb-4">
                          <div
                            className="p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                            style={{ backgroundColor: "#DAA520" }}
                          >
                            <BookOpen className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <h3
                            className="text-sm sm:text-base md:text-lg font-bold"
                            style={{
                              fontFamily: "Cinzel, serif",
                              color: "#B8860B",
                            }}
                          >
                            {structure.title}
                          </h3>
                        </div>
                        <p
                          className="text-xs sm:text-sm md:text-base leading-relaxed font-medium"
                          style={{ color: "#8B6914" }}
                        >
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
                  transition={{ delay: 4.5, duration: 0.8 }}
                  className="rounded-lg sm:rounded-xl p-3 sm:p-6 md:p-8 border-2 sm:border-4 shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFF8DC, #FFFACD, #F5DEB3, #FFFACD, #FFF8DC)",
                    borderColor: "#DAA520",
                  }}
                >
                  <h2
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center pb-2 sm:pb-4"
                    style={{
                      fontFamily: "Cinzel Decorative, serif",
                      color: "#B8860B",
                      borderBottom:
                        "2px sm:border-4 solid rgba(218, 165, 32, 0.6)",
                    }}
                  >
                    Theatre Rules & Regulations
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    {event.generalRules.map((rule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 4.8 + index * 0.1, duration: 0.6 }}
                        className="flex items-start space-x-3 sm:space-x-4 rounded-md sm:rounded-lg p-2 sm:p-3 md:p-4 border"
                        style={{
                          background: "rgba(255, 215, 0, 0.1)",
                          borderColor: "rgba(218, 165, 32, 0.3)",
                        }}
                      >
                        <div
                          className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"
                          style={{ backgroundColor: "#DAA520" }}
                        ></div>
                        <p
                          className="text-xs sm:text-sm md:text-base leading-relaxed font-medium flex-1"
                          style={{ color: "#8B6914" }}
                        >
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
                    delay: 5.2,
                    duration: 1,
                    type: "spring",
                    bounce: 0.3,
                  }}
                  className="flex justify-center mt-6 sm:mt-8 md:mt-12"
                >
                  <div className="relative">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl border-2 sm:border-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #DAA520, #FFD700, #DAA520)",
                        borderColor: "#B8860B",
                      }}
                    >
                      <ScrollText className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div
                      className="absolute -inset-1 sm:-inset-2 rounded-full border border-2 opacity-30"
                      style={{ borderColor: "#FFD700" }}
                    ></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Golden Spotlight */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255, 215, 0, 0.1)" }}
        />
      </div>
    </section>
  );
};

export default EventDetails;
