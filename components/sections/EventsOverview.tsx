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
import { Button } from "@/components/ui/button";

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
    const bgElements = Array.from({ length: 25 }).map((_, index) => ({
      id: index,
      IconComponent: backgroundIcons[index % backgroundIcons.length],
      size: Math.random() * 80 + 40,
      duration: Math.random() * 30 + 20,
      initialTop: Math.random() * 100,
      initialLeft: Math.random() * 100,
      initialRotate: Math.random() * 360,
      animateRotate1: Math.random() * 360,
      animateRotate2: Math.random() * 360 + 180,
      animateRotate3: Math.random() * 360 + 360,
      animateX: Math.random() * 100 - 50,
      animateY: Math.random() * 100 - 50,
      delay: Math.random() * 10,
    }));
    setBackgroundElements(bgElements);

    // Generate floating elements with consistent random values
    const floatElements = Array.from({ length: 8 }).map((_, index) => ({
      id: index,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
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
      color: "from-purple-600 to-indigo-600",
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
      color: "from-emerald-600 to-teal-600",
      coverImage: "/penman.jpg",
    },
    {
      id: "mindquote",
      title: "MIND QUOTE",
      subtitle: "Match Quotes to Authors",
      description:
        "Challenge your memory of literary quotations by matching famous lines to their authors and original works.",
      icon: Quote,
      color: "from-rose-600 to-pink-600",
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
      color: "from-violet-600 to-purple-600",
      coverImage: "https://i.imgur.com/c4fJ2gH.jpeg",
    },
    {
      id: "eloquentia",
      title: "ELOQUENTIA",
      subtitle: "Oratory Challenge",
      description:
        "Demonstrate the art of public speaking through impromptu speeches, dramatic recitations, and persuasive presentations.",
      icon: Mic,
      color: "from-amber-600 to-orange-600",
      coverImage: "https://i.imgur.com/m3N0Z9X.jpeg",
    },
  ];

  return (
    <section className="relative bg-black min-h-screen py-20 sm:py-24 overflow-hidden">
      {/* Animated Background Icons - Solution 1: useEffect generated */}
      <div className="absolute inset-0 z-0" suppressHydrationWarning>
        {isMounted && backgroundElements.map((element) => {
          const IconComponent = element.IconComponent;

          return (
            <motion.div
              key={element.id}
              className="absolute text-gray-800/30"
              initial={{
                top: `${element.initialTop}%`,
                left: `${element.initialLeft}%`,
                rotate: element.initialRotate,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: [0, 0.1, 0.2, 0.1, 0],
                rotate: [element.animateRotate1, element.animateRotate2, element.animateRotate3],
                scale: [0.5, 1, 0.8, 1, 0.5],
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
              }}
            >
              <IconComponent style={{ width: element.size, height: element.size }} />
            </motion.div>
          );
        })}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black opacity-90 z-1"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold font-manuscript mb-6 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent leading-tight">
              Literary Competitions
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6 max-w-md"
            ></motion.div>
          </motion.div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Five extraordinary challenges designed to test every facet of
            literary mastery and creative expression
          </p>
        </motion.div>

        {/* Events Grid */}
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
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Card Background with Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl"></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-amber-400/50 group-hover:shadow-amber-400/20">
                {/* Cover Image with Overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                  <motion.img
                    src={event.coverImage}
                    alt={`${event.title} Cover`}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Floating Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="absolute top-4 right-4"
                  >
                    <div
                      className={`p-3 rounded-full bg-gradient-to-br ${event.color} text-white shadow-lg backdrop-blur-sm border border-white/20`}
                    >
                      <event.icon className="w-6 h-6" />
                    </div>
                  </motion.div>
                </div>

                {/* Card Content */}
                <div className="p-8 text-center">
                  {/* Title Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    className="mb-6"
                  >
                    <h3 className="text-3xl font-bold text-white font-manuscript mb-2 tracking-wide">
                      {event.title}
                    </h3>
                    <p className="text-amber-300 font-medium text-lg mb-4">
                      {event.subtitle}
                    </p>
                    <div
                      className={`h-0.5 w-16 bg-gradient-to-r ${event.color} mx-auto rounded-full`}
                    ></div>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="text-gray-300 leading-relaxed mb-8 text-base"
                  >
                    {event.description}
                  </motion.p>

                  {/* Action Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  >
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${event.color} text-white font-bold text-lg py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:scale-105`}
                    >
                      <motion.a
                        href={`/events/${event.id}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-5 h-5" />
                        Explore Challenge
                        <Sparkles className="w-5 h-5" />
                      </motion.a>
                    </Button>
                  </motion.div>
                </div>

                {/* Subtle Border Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <p className="text-lg font-medium">
              Choose Your Literary Adventure
            </p>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Additional Floating Elements - Solution 3: suppressHydrationWarning */}
      <div className="absolute inset-0 z-5" suppressHydrationWarning>
        {isMounted && floatingElements.map((element) => (
          <motion.div
            key={`floating-${element.id}`}
            className="absolute"
            initial={{
              top: `${element.top}%`,
              left: `${element.left}%`,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
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
            <div className="w-2 h-2 bg-amber-400/60 rounded-full blur-sm"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsOverview;