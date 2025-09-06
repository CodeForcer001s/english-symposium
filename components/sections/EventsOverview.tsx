"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Feather,
  BookOpen,
  Crown,
  ScrollText,
  PenTool,
  Sparkles,
  Stars,
  Zap,
  Brain,
  Lightbulb,
  Target,
  Eye,
  Heart,
  Diamond,
  Flame,
  Quote,
  Key,
  Search,
} from "lucide-react";
import { Button } from "../ui/button";
import { eventsData } from "@/app/data/events"; // Import the events data

const backgroundIcons = [
  Feather,
  BookOpen,
  Crown,
  ScrollText,
  PenTool,
  Sparkles,
  Stars,
  Zap,
  Brain,
  Lightbulb,
  Target,
  Eye,
  Heart,
  Diamond,
  Flame,
  Quote,
  Key,
  Search,
];

const EventsOverview = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Memoize background elements to prevent recreation on every render
  const backgroundElements = useMemo(() => {
    return Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      IconComponent: backgroundIcons[index % backgroundIcons.length],
      size: Math.random() * 80 + 40,
      duration: Math.random() * 30 + 20,
      initialTop: Math.random() * 100,
      initialLeft: Math.random() * 100,
      initialRotate: Math.random() * 360,
      animateRotate1: Math.random() * 180,
      animateRotate2: Math.random() * 180 + 180,
      animateX: Math.random() * 60 - 30,
      animateY: Math.random() * 60 - 30,
      delay: Math.random() * 10,
    }));
  }, []);

  // Memoize floating elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 8 }).map((_, index) => ({
      id: index,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  // Memoize dust particles
  const dustParticles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, index) => ({
      id: index,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
    }));
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="events"
      className="relative bg-black min-h-screen py-20 sm:py-24 overflow-hidden"
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap");

        .font-cinzel {
          font-family: "Cinzel", serif;
        }
        .font-cormorant {
          font-family: "Cormorant Garamond", serif;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
      `}</style>

      {/* Optimized Animated Background Icons */}
      {isMounted && (
        <div className="absolute inset-0 z-0">
          {backgroundElements.map((element) => {
            const IconComponent = element.IconComponent;

            return (
              <motion.div
                key={element.id}
                className="absolute text-amber-900/15 will-change-transform"
                initial={{
                  top: `${element.initialTop}%`,
                  left: `${element.initialLeft}%`,
                  rotate: element.initialRotate,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: [0, 0.2, 0],
                  rotate: [element.animateRotate1, element.animateRotate2],
                  scale: [0.5, 1, 0.5],
                  x: [0, element.animateX, 0],
                  y: [0, element.animateY, 0],
                }}
                transition={{
                  duration: element.duration,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: element.delay,
                  ease: "easeInOut",
                }}
                style={{
                  transform: `translate(-50%, -50%)`,
                  filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.1))",
                }}
              >
                <IconComponent
                  style={{ width: element.size, height: element.size }}
                />
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950/20 via-transparent to-amber-950/20 z-1"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Optimized Section Header - Shows immediately */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent leading-tight drop-shadow-2xl font-cinzel tracking-wide">
              Literary Events
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-8 max-w-xs rounded-full"
            ></motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-amber-200 max-w-4xl mx-auto leading-relaxed font-cormorant italic"
          >
            Five extraordinary challenges designed to test every facet of
            <span className="text-amber-300 font-medium not-italic">
              {" "}
              literary mastery
            </span>{" "}
            and
            <span className="text-yellow-300 font-medium not-italic">
              {" "}
              creative expression
            </span>
          </motion.p>
        </motion.div>

        {/* Optimized Events Grid - Cards appear immediately on scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative will-change-transform"
            >
              {/* Enhanced Card with Dark Brown Gradients */}
              <div className="relative bg-black backdrop-blur-sm border-2 border-amber-700/60 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 group-hover:border-amber-500/80">
                {/* Enhanced Cover Image with Dark Overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                  <motion.img
                    src={event.coverImage}
                    alt={`${event.title} Cover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 will-change-transform"
                    whileHover={{ scale: 1.05, opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Enhanced Floating Icon with Golden Glow */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                    className="absolute top-4 right-4"
                  >
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${event.color} text-stone-900 shadow-xl backdrop-blur-sm border-2 border-amber-300/70 group-hover:border-amber-200 transition-all duration-300`}
                      style={{
                        boxShadow:
                          "0 10px 25px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <event.icon className="w-7 h-7 drop-shadow-sm" />
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Card Content with Literary Typography */}
                <div className="p-8 text-center relative bg-gradient-to-b from-stone-900/50 to-stone-900/80">
                  {/* Golden accent line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

                  {/* Title Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.15 }}
                    className="mb-6"
                  >
                    <h3 className="text-3xl font-bold text-amber-200 mb-3 tracking-wide drop-shadow-lg font-cinzel">
                      {event.title}
                    </h3>
                    <p className="text-amber-300 font-semibold text-lg mb-4 tracking-wide font-playfair italic">
                      {event.subtitle}
                    </p>
                    <div
                      className={`h-1 w-20 bg-gradient-to-r ${event.color} mx-auto rounded-full shadow-lg shadow-amber-400/40`}
                    ></div>
                  </motion.div>

                  {/* Enhanced Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                    className="text-amber-100 leading-relaxed mb-8 text-base font-cormorant"
                  >
                    {event.description}
                  </motion.p>

                  {/* Enhanced Action Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.25 }}
                  >
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${event.color} text-stone-900 font-bold text-lg py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-300/70 hover:border-amber-200 hover:scale-105 relative overflow-hidden font-playfair`}
                      style={{
                        boxShadow:
                          "0 8px 25px rgba(251, 191, 36, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <motion.a
                        href={`/events/${event.id}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-3 relative z-10"
                      >
                        <Sparkles className="w-5 h-5" />
                        Explore Challenge
                        <Sparkles className="w-5 h-5" />
                        {/* Button shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        ></motion.div>
                      </motion.a>
                    </Button>
                  </motion.div>
                </div>

                {/* Enhanced Border Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/10 via-yellow-400/15 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optimized Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="flex items-center justify-center gap-6 text-amber-400 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Crown className="w-8 h-8" />
            </motion.div>
            <motion.p
              className="text-xl font-semibold text-amber-200 tracking-wider font-cinzel"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Choose Your Literary Adventure
            </motion.p>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Crown className="w-8 h-8" />
            </motion.div>
          </div>

          {/* Additional decorative golden line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto max-w-lg rounded-full"
          ></motion.div>
        </motion.div>
      </div>

      {/* Optimized Floating Elements - Minimal on mobile */}
      {isMounted && window.innerWidth >= 768 && (
        <div className="absolute inset-0 z-5">
          {floatingElements.map((element) => (
            <motion.div
              key={`floating-${element.id}`}
              className="absolute will-change-transform"
              initial={{
                top: `${element.top}%`,
                left: `${element.left}%`,
                scale: 0,
              }}
              animate={{
                scale: [0, 0.8, 0],
                rotate: [0, 180, 360],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut",
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full blur-sm shadow-lg shadow-amber-400/50"></div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Minimal floating for mobile */}
      {isMounted && window.innerWidth < 768 && (
        <div className="absolute inset-0 z-5">
          {floatingElements.slice(0, 2).map((element) => (
            <motion.div
              key={`floating-${element.id}`}
              className="absolute will-change-transform"
              initial={{
                top: `${element.top}%`,
                left: `${element.left}%`,
                scale: 0,
              }}
              animate={{
                scale: [0, 0.5, 0],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: element.duration * 0.8,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Optimized golden dust particles - Minimal on mobile */}
      {isMounted && window.innerWidth >= 768 && (
        <div className="absolute inset-0 z-3">
          {dustParticles.map((_, index) => (
            <motion.div
              key={`dust-${index}`}
              className="absolute w-1 h-1 bg-amber-300/40 rounded-full will-change-transform"
              initial={{
                top: `${dustParticles[index].top}%`,
                left: `${dustParticles[index].left}%`,
              }}
              animate={{
                y: [-10, -40, -10],
                opacity: [0, 0.4, 0],
                scale: [0, 0.8, 0],
              }}
              transition={{
                duration: dustParticles[index].duration,
                repeat: Infinity,
                delay: dustParticles[index].delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Ultra minimal dust for mobile */}
      {isMounted && window.innerWidth < 768 && (
        <div className="absolute inset-0 z-3">
          {dustParticles.slice(0, 2).map((_, index) => (
            <motion.div
              key={`dust-${index}`}
              className="absolute w-1 h-1 bg-amber-300/20 rounded-full will-change-transform"
              initial={{
                top: `${dustParticles[index].top}%`,
                left: `${dustParticles[index].left}%`,
              }}
              animate={{
                y: [-5, -20, -5],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: dustParticles[index].duration * 0.6,
                repeat: Infinity,
                delay: dustParticles[index].delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default EventsOverview;
