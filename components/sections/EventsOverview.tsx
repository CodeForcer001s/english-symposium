"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ScrollText,
  Search,
  Quote,
  Key,
  Mic,
  Feather,
  BookOpen,
  Crown,
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
} from "lucide-react";
import { Button } from "../ui/button";

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
  // Solution 1: Using useEffect to generate client-side only random values
  const [backgroundElements, setBackgroundElements] = useState<any[]>([]);
  const [floatingElements, setFloatingElements] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Generate background icons with consistent random values
    const bgElements = Array.from({ length: 35 }).map((_, index) => ({
      id: index,
      IconComponent: backgroundIcons[index % backgroundIcons.length],
      size: Math.random() * 100 + 50,
      duration: Math.random() * 40 + 25,
      initialTop: Math.random() * 100,
      initialLeft: Math.random() * 100,
      initialRotate: Math.random() * 360,
      animateRotate1: Math.random() * 360,
      animateRotate2: Math.random() * 360 + 180,
      animateRotate3: Math.random() * 360 + 360,
      animateX: Math.random() * 120 - 60,
      animateY: Math.random() * 120 - 60,
      delay: Math.random() * 15,
    }));
    setBackgroundElements(bgElements);

    // Generate floating elements with consistent random values
    const floatElements = Array.from({ length: 12 }).map((_, index) => ({
      id: index,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 8,
    }));
    setFloatingElements(floatElements);
  }, []);

  const events = [
    {
      id: "litwit",
      title: "LITWIT",
      subtitle: "Literature Quiz with a Twist",
      description:
        "Test your literary knowledge through multiple rounds including rapid fire questions, audio-visual challenges, and twisted tale reconstructions.",
      icon: ScrollText,
      color: "from-amber-600 via-yellow-500 to-amber-600",
      coverImage:
        "https://files.brainfall.com/wp-content/uploads/2020/08/the_ultimate_english_literature_quiz_featured.jpg",
    },
    {
      id: "penman",
      title: "PENMAN'S CODE",
      subtitle: "Author and Plot Deduction",
      description:
        "Decode mysterious clues to identify famous authors and their masterworks through layered puzzles and plot deductions.",
      icon: Search,
      color: "from-yellow-600 via-amber-500 to-yellow-600",
      coverImage: "/penman.jpg",
    },
    {
      id: "mindquote",
      title: "MIND QUOTE",
      subtitle: "Match Quotes to Authors",
      description:
        "Challenge your memory of literary quotations by matching famous lines to their authors and original works.",
      icon: Quote,
      color: "from-amber-500 via-yellow-400 to-amber-500",
      coverImage:
        "https://static.vecteezy.com/system/resources/previews/010/354/340/non_2x/poetry-day-background-template-free-vector.jpg",
    },
    {
      id: "litcrypt",
      title: "LITCRYPT",
      subtitle: "Decode Literary Ciphers",
      description:
        "Unravel complex literary ciphers, anagrams, and coded messages inspired by classical literature.",
      icon: Key,
      color: "from-yellow-500 via-amber-400 to-yellow-500",
      coverImage: "https://i.imgur.com/c4fJ2gH.jpeg",
    },
    {
      id: "eloquentia",
      title: "ELOQUENTIA",
      subtitle: "Oratory Challenge",
      description:
        "Demonstrate the art of public speaking through impromptu speeches, dramatic recitations, and persuasive presentations.",
      icon: Mic,
      color: "from-amber-400 via-yellow-300 to-amber-400",
      coverImage: "https://i.imgur.com/m3N0Z9X.jpeg",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-stone-950 via-amber-950 to-stone-950 min-h-screen py-20 sm:py-24 overflow-hidden">
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

      {/* Enhanced Animated Background Icons */}
      <div className="absolute inset-0 z-0" suppressHydrationWarning>
        {isMounted &&
          backgroundElements.map((element) => {
            const IconComponent = element.IconComponent;

            return (
              <motion.div
                key={element.id}
                className="absolute text-amber-900/15"
                initial={{
                  top: `${element.initialTop}%`,
                  left: `${element.initialLeft}%`,
                  rotate: element.initialRotate,
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  opacity: [0, 0.15, 0.25, 0.15, 0],
                  rotate: [
                    element.animateRotate1,
                    element.animateRotate2,
                    element.animateRotate3,
                  ],
                  scale: [0.3, 1.2, 0.8, 1.2, 0.3],
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

      {/* Subtle overlay instead of heavy curtain effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950/20 via-transparent to-amber-950/20 z-1"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent leading-tight drop-shadow-2xl font-cinzel tracking-wide">
              Literary Events
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-8 max-w-xs rounded-full"
            ></motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
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

        {/* Enhanced Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Enhanced Card with Dark Brown Gradients */}
              <div className="relative bg-gradient-to-br from-stone-900 via-amber-900/30 to-stone-900 backdrop-blur-sm border-2 border-amber-700/60 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 group-hover:border-amber-500/80">
                {/* Enhanced Cover Image with Dark Overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                  <motion.img
                    src={event.coverImage}
                    alt={`${event.title} Cover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                    whileHover={{ scale: 1.1, opacity: 0.8 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-amber-900/40 to-stone-900/60"></div>

                  {/* Enhanced Floating Icon with Golden Glow */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
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

                  {/* Golden corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-400/60 rounded-tl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-400/60 rounded-br-3xl"></div>
                </div>

                {/* Enhanced Card Content with Literary Typography */}
                <div className="p-8 text-center relative bg-gradient-to-b from-stone-900/50 to-stone-900/80">
                  {/* Golden accent line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

                  {/* Title Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
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
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="text-amber-100 leading-relaxed mb-8 text-base font-cormorant"
                  >
                    {event.description}
                  </motion.p>

                  {/* Enhanced Action Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
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

        {/* Enhanced Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="flex items-center justify-center gap-6 text-amber-400 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Crown className="w-8 h-8" />
            </motion.div>
          </div>

          {/* Additional decorative golden line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto max-w-lg rounded-full"
          ></motion.div>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements with Golden Particles */}
      <div className="absolute inset-0 z-5" suppressHydrationWarning>
        {isMounted &&
          floatingElements.map((element) => (
            <motion.div
              key={`floating-${element.id}`}
              className="absolute"
              initial={{
                top: `${element.top}%`,
                left: `${element.left}%`,
                scale: 0,
              }}
              animate={{
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360],
                opacity: [0, 0.6, 0],
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

      {/* Additional golden dust particles */}
      <div className="absolute inset-0 z-3" suppressHydrationWarning>
        {isMounted &&
          Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={`dust-${index}`}
              className="absolute w-1 h-1 bg-amber-300/40 rounded-full"
              initial={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>
    </section>
  );
};

export default EventsOverview;
