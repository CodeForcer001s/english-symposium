"use client";

import React from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { Event } from "@/app/data/events";
import {
  Sparkles,
  Clock,
  Users,
  MapPin,
  Calendar,
  Scroll,
  Eye,
  Flame,
  Shield,
  Sword,
  Crown,
} from "lucide-react";

interface EventRoundsProps {
  event: Event;
}

const EventRounds: React.FC<EventRoundsProps> = ({ event }) => {
  // Animation variants for content revealing
  const contentRevealVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.8,
    },
    revealed: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const imageRevealVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
    },
    revealed: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-serif">
      {/* Mystical Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-600/15 to-amber-700/15 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 rounded-full bg-gradient-to-r from-gold-600/15 to-yellow-800/15 blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-amber-600/15 to-yellow-700/15 blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -50, -20],
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
            {i % 3 === 0 ? (
              <Flame className="w-5 h-5 text-yellow-500/50" />
            ) : i % 3 === 1 ? (
              <Shield className="w-4 h-4 text-amber-500/50" />
            ) : (
              <Sword className="w-4 h-4 text-gold-500/50" />
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-yellow-600/25 to-amber-700/25 border-3 border-yellow-600/50 mb-8 relative">
            <event.icon className="w-12 h-12 text-yellow-400" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-yellow-500/70"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
              }}
            />
          </div>

          <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent mb-6 font-serif">
            {event.title}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl md:text-4xl text-gray-300 mb-12 font-serif italic"
          >
            "{event.subtitle}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            <div className="flex items-center gap-3 text-gray-300 bg-gradient-to-r from-yellow-900/40 to-amber-900/40 px-6 py-3 rounded-full backdrop-blur-sm border-2 border-yellow-600/40">
              <Calendar className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-gradient-to-r from-yellow-900/40 to-amber-900/40 px-6 py-3 rounded-full backdrop-blur-sm border-2 border-yellow-600/40">
              <Clock className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-gradient-to-r from-yellow-900/40 to-amber-900/40 px-6 py-3 rounded-full backdrop-blur-sm border-2 border-yellow-600/40">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">{event.venue}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-gradient-to-r from-yellow-900/40 to-amber-900/40 px-6 py-3 rounded-full backdrop-blur-sm border-2 border-yellow-600/40">
              <Users className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">{event.teamComposition}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline Section Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4 font-serif flex items-center justify-center gap-4">
            <Crown className="w-10 h-10 text-yellow-400" />
            Event Timeline
            <Crown className="w-10 h-10 text-yellow-400" />
          </h2>
          <p className="text-xl text-gray-400 font-serif italic">
            Each chapter of destiny revealed
          </p>
        </motion.div>

        {/* Timeline Content */}
        <div className="relative max-w-7xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 max-md:hidden bg-gradient-to-b from-yellow-500 to-amber-600 h-full shadow-lg"></div>

          <div className="space-y-24">
            {event.eventStructure.map((round, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="revealed"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.3 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 max-md:hidden">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 border-4 border-black flex items-center justify-center relative z-10">
                    <Sparkles className="w-6 h-6 text-black" />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-yellow-400/50"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>

                {/* Content Container - Alternating Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image Section */}
                  <motion.div
                    className={`w-full ${
                      index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    }`}
                    variants={imageRevealVariants}
                  >
                    <div className="relative group">
                      <img
                        src={
                          round.cardImage ||
                          `https://picsum.photos/seed/${index}/600/400`
                        }
                        alt={`Vision of ${round.title}`}
                        className="w-full h-80 object-cover rounded-2xl border-3 border-yellow-600/50 shadow-2xl group-hover:shadow-yellow-400/30 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                    </div>
                  </motion.div>

                  {/* Text Content Section */}
                  <motion.div
                    className={`w-full ${
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                    }`}
                    variants={contentRevealVariants}
                  >
                    <div className="bg-gradient-to-br from-black/80 to-yellow-900/20 rounded-2xl p-8 border-2 border-yellow-600/40 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-amber-800 via-yellow-800 to-amber-900 pointer-events-none"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="text-5xl">
                            {round.mysticalSymbol || "⚔️"}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent font-serif">
                              {round.title}
                            </h3>
                            <p className="text-gray-400 text-lg italic font-serif">
                              "{round.arcana || "A New Challenge Awaits"}"
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-200 text-lg leading-relaxed font-serif bg-gradient-to-r from-yellow-200 to-amber-300 bg-clip-text text-transparent">
                          {round.description}
                        </p>
                      </div>
                      {/* Decorative Corners */}
                      <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-yellow-600/50"></div>
                      <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-yellow-600/50"></div>
                      <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-yellow-600/50"></div>
                      <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-yellow-600/50"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rules Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="max-w-6xl mx-auto mt-32"
        >
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent font-serif flex items-center justify-center gap-4">
            <Scroll className="w-10 h-10 text-yellow-400" />
           Rules & Regulations
            <Scroll className="w-10 h-10 text-yellow-400" />
          </h2>

          <div className="bg-gradient-to-br from-black/90 to-yellow-900/10 backdrop-blur-sm rounded-3xl border-3 border-yellow-600/50 p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-amber-800 via-yellow-800 to-amber-900 pointer-events-none"></div>

            <div className="relative z-10 grid gap-6">
              {event.generalRules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2 + index * 0.1, duration: 0.8 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                  <p className="text-gray-200 font-serif leading-relaxed text-lg group-hover:text-gray-100 transition-colors duration-300 bg-gradient-to-r from-yellow-200 to-amber-300 bg-clip-text text-transparent">
                    {rule}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Decorative Corners */}
            <div className="absolute top-4 left-4 w-10 h-10 border-l-3 border-t-3 border-yellow-600/50"></div>
            <div className="absolute top-4 right-4 w-10 h-10 border-r-3 border-t-3 border-yellow-600/50"></div>
            <div className="absolute bottom-4 left-4 w-10 h-10 border-l-3 border-b-3 border-yellow-600/50"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 border-r-3 border-b-3 border-yellow-600/50"></div>
          </div>
        </motion.div>
      </div>

      {/* Ambient Elements */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border-3 border-yellow-600/40 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity },
        }}
      >
        <div className="w-full h-full border-2 border-yellow-600/30 rounded-full flex items-center justify-center">
          <Eye className="w-8 h-8 text-yellow-600/50" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 w-14 h-14"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Sparkles className="w-full h-full text-yellow-600/60" />
      </motion.div>
    </div>
  );
};

export default EventRounds;
