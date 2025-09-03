"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Variants, easeInOut } from "framer-motion";
import { Event } from "@/app/data/events";
import {
  Sparkles,
  Clock,
  Users,
  MapPin,
  Calendar,
  Feather,
  Star,
  Drama, // Keeping Drama import as requested, though Mask reveal is removed
  Scroll,
  Eye,
} from "lucide-react";

interface EventRoundsProps {
  event: Event;
}

const EventRounds: React.FC<EventRoundsProps> = ({ event }) => {
  const [revealedRounds, setRevealedRounds] = useState<Set<number>>(new Set());
  const [isDrawing, setIsDrawing] = useState<{ [key: number]: boolean }>({});

  // Ensure only "quill" is active and auto-trigger it (or just keep the button)
  useEffect(() => {
    // No specific auto-reveal for quill, user clicks the button.
    // We just ensure currentRevealType is always 'quill'.
    // If you want it to auto-reveal each round one by one, similar to constellation,
    // we would add logic here. For now, it's click-to-reveal.
  }, []);

  const revealRound = (index: number) => {
    setIsDrawing((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setRevealedRounds((prev) => new Set([...prev, index]));
      setIsDrawing((prev) => ({ ...prev, [index]: false }));
    }, 2000);
  };

  // Drawing path variants for quill
  const quillPathVariants: Variants = {
    // ✅ FIX: Explicitly typed with Variants
    hidden: { pathLength: 0, opacity: 0 },
    drawing: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  const inkSpillVariantsAnimation: Variants = {
    hidden: { scale: 0, opacity: 0 },
    spill: {
      scale: [0.8, 1.1, 1],
      opacity: [0, 0.7, 0],
      transition: {
        duration: 1.2,
        times: [0, 0.5, 1],
        ease: easeInOut, // This was already correct, using the imported function
      },
    },
  };
  // Parchment reveal variants (retained for revealed content)
  const parchmentVariants: Variants = {
    // ✅ FIX: Explicitly typed with Variants
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      opacity: 0,
    },
    revealed: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const inkSpillVariants: Variants = {
    // ✅ FIX: Explicitly typed with Variants
    hidden: { scale: 0, opacity: 0 },
    spill: {
      scale: [0, 1.2, 1],
      opacity: [0, 0.8, 0.6],
      transition: {
        duration: 1.5,
        times: [0, 0.6, 1],
        ease: "easeOut",
      },
    },
  };

  // --- Manuscript Font Integration Hint ---
  // To use a specific manuscript font (e.g., "MedievalSharp" from Google Fonts),
  // you would typically:
  // 1. Add it to your public/index.html or a _document.js file:
  //    <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet">
  // 2. Extend your Tailwind CSS config (tailwind.config.js):
  //    theme: {
  //      extend: {
  //        fontFamily: {
  //          manuscript: ['MedievalSharp', 'serif'],
  //        },
  //      },
  //    },
  // 3. Then use `font-manuscript` class. For now, we'll use `font-serif`.
  // ----------------------------------------

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-serif">
      {" "}
      {/* Black background, generic serif for manuscript feel */}
      {/* Theatrical background elements - adjusted for black background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-700/10 to-amber-800/10 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 rounded-full bg-gradient-to-r from-purple-700/10 to-indigo-800/10 blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-emerald-700/10 to-teal-800/10 blur-3xl animate-pulse delay-2000"></div>
      </div>
      {/* Floating theatrical elements - simplified and color-adjusted */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              x: [0, 10, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            {i % 2 === 0 ? (
              <Feather className="w-4 h-4 text-yellow-500/40" />
            ) : (
              <Star className="w-3 h-3 text-amber-500/40 fill-current" />
            )}
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-700/20 to-amber-800/20 border-2 border-yellow-700/30 mb-6 relative">
            <event.icon className="w-10 h-10 text-yellow-500" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-yellow-700/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent mb-4 font-serif">
            {event.title}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-serif italic"
          >
            "{event.subtitle}"
          </motion.p>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-yellow-500" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="w-5 h-5 text-yellow-500" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-yellow-500" />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Users className="w-5 h-5 text-yellow-500" />
              <span>{event.teamComposition}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Theatrical Reveal Controls - Simplified to only show Quill option */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent mb-8 font-serif">
            Reveal the Prophecy
          </h2>
        </motion.div>

        {/* Rounds Section - Only Quill Reveal type */}
        <div className="mb-16">
          <div className="space-y-16">
            {event.eventStructure.map((round, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className="relative"
              >
                {/* Ornate Frame */}
                <div className="relative mx-auto">
                  <div className="relative bg-black border-4 border-yellow-700/30 p-12 backdrop-blur-sm rounded-3xl">
                    {/* Corner decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-yellow-700/60"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-yellow-700/60"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-yellow-700/60"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-yellow-700/60"></div>

                    {/* Quill Drawing Animation */}
                    <div className="absolute top-8 right-8">
                      <motion.div
                        animate={
                          isDrawing[index] ? { rotate: [0, -15, 15, 0] } : {}
                        }
                        transition={{
                          duration: 0.5,
                          repeat: isDrawing[index] ? 3 : 0,
                        }}
                      >
                        <Feather className="w-8 h-8 text-yellow-500" />
                      </motion.div>
                    </div>

                    {/* Ink Spill Effect */}
                    <AnimatePresence>
                      {isDrawing[index] && (
                        <motion.div
                          variants={inkSpillVariantsAnimation}
                          initial="hidden"
                          animate="spill"
                          className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-3xl"
                        />
                      )}
                    </AnimatePresence>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-center mb-8">
                        <div className="inline-block text-6xl mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                          {round.mysticalSymbol || "🎭"}
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2 font-serif">
                          {round.title}
                        </h3>
                        <p className="text-gray-400 text-lg italic font-serif">
                          "{round.arcana || "A Tale Unfolds"}"
                        </p>
                      </div>

                      {/* Content reveal */}
                      <AnimatePresence>
                        {!revealedRounds.has(index) ? (
                          <motion.div
                            className="text-center py-8"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => revealRound(index)}
                              className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-8 py-4 rounded-full font-serif font-bold text-lg hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300"
                            >
                              {isDrawing[index]
                                ? "Drawing..."
                                : "Reveal with Quill"}
                            </motion.button>
                          </motion.div>
                        ) : (
                          <motion.div
                            variants={parchmentVariants}
                            initial="hidden"
                            animate="revealed"
                            className="bg-black/50 rounded-2xl p-6 border border-yellow-700/20 flex flex-col items-center"
                          >
                            <p className="text-gray-200 text-lg leading-relaxed font-serif text-center mb-4 bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                              {round.description}
                            </p>
                            {/* Thematic image for quill reveal */}
                            <motion.img
                              src={`https://picsum.photos/seed/${index}/400/250`} // Placeholder image, replace with actual image source
                              alt={`Image for ${round.title}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8, duration: 1 }}
                              className="mt-4 rounded-lg shadow-xl border-2 border-yellow-700/50"
                            />
                            <p className="text-gray-400 text-sm italic font-serif mt-2">
                              {/* Optional: Add a caption for the image */}A
                              glimpse into the {round.title}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rules Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-serif flex items-center justify-center gap-3">
            <Scroll className="w-8 h-8 text-yellow-500" />
            The Sacred Codex
            <Scroll className="w-8 h-8 text-yellow-500" />
          </h2>

          <div className="bg-black/60 backdrop-blur-sm rounded-2xl border-2 border-yellow-700/30 p-8 relative overflow-hidden">
            {/* Parchment texture - adjusted for darker theme */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900 pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              {event.generalRules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-gray-300 font-serif leading-relaxed group-hover:text-gray-100 transition-colors duration-300 bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                    {rule}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-700/30"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-yellow-700/30"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-yellow-700/30"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-700/30"></div>
          </div>
        </motion.div>
      </div>
      {/* Mystical ambient elements - color-adjusted */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border-2 border-yellow-700/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border border-yellow-700/10 rounded-full flex items-center justify-center">
          <Eye className="w-6 h-6 text-yellow-700/30" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 w-12 h-12"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.5, 1],
        }}
      >
        <Sparkles className="w-full h-full text-yellow-700/40" />
      </motion.div>
    </div>
  );
};

export default EventRounds;
