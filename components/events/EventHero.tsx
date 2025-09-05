"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Event } from "@/app/data/events"; // Assuming your Event type is here
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button

interface EventHeroProps {
  event: Event;
}

const EventHero: React.FC<EventHeroProps> = ({ event }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${event.coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px) brightness(0.6)",
          }}
        ></div>
        {/* Enhanced gradient overlay for deeper black theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/90 z-20"></div>
        {/* Additional radial gradient for spotlight effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black/80 z-25"></div>
      </div>

      {/* Decorative Golden Border Frame */}
      <div className="absolute inset-4 z-20 border-2 border-amber-400/30 rounded-lg pointer-events-none">
        <div className="absolute inset-2 border border-amber-500/50 rounded-md">
          <div className="absolute inset-2 border border-amber-300/20 rounded-sm"></div>
        </div>
      </div>

      {/* Corner Decorative Elements */}
      <div className="absolute top-6 left-6 z-25 pointer-events-none">
        <div className="w-8 h-8 border-l-2 border-t-2 border-amber-400"></div>
      </div>
      <div className="absolute top-6 right-6 z-25 pointer-events-none">
        <div className="w-8 h-8 border-r-2 border-t-2 border-amber-400"></div>
      </div>
      <div className="absolute bottom-6 left-6 z-25 pointer-events-none">
        <div className="w-8 h-8 border-l-2 border-b-2 border-amber-400"></div>
      </div>
      <div className="absolute bottom-6 right-6 z-25 pointer-events-none">
        <div className="w-8 h-8 border-r-2 border-b-2 border-amber-400"></div>
      </div>

      {/* Content Container with Enhanced Design */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          {/* Enhanced Event Icon with Golden Glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mx-auto mb-10"
          >
            <div className="relative inline-block">
              {/* Outer glow effect */}
              <div className="absolute -inset-4 bg-amber-400/20 rounded-full blur-xl"></div>
              <div
                className={`relative p-6 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/30 backdrop-blur-md border-2 border-amber-400/60 shadow-2xl`}
              >
                {/* Inner golden border */}
                <div className="absolute inset-1 rounded-full border border-amber-300/40"></div>
                <event.icon className="w-14 h-14 text-amber-300 relative z-10" />
              </div>
            </div>
          </motion.div>

          {/* Enhanced Title with Manuscript Font */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold font-manuscript mb-6 leading-tight"
            style={{
              background:
                "linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #f59e0b 75%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 30px rgba(251, 191, 36, 0.3)",
            }}
          >
            {event.title}
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl text-amber-200 font-medium font-manuscript mb-8 tracking-wide"
            style={{
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
            }}
          >
            {event.subtitle}
          </motion.p>

          {/* Ornate Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="relative mx-auto mb-10 max-w-2xl"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 bg-amber-400 rotate-45 border border-amber-300"></div>
            </div>
            <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
            </div>
            <div className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-black/40 rounded-lg border border-amber-400/20 backdrop-blur-sm"></div>
            <p className="relative text-xl sm:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed font-manuscript px-6 py-4">
              {event.description}
            </p>
          </motion.div>

          {/* === NEW: ACTION BUTTONS === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              asChild
              size="lg"
              className="bg-amber-400 text-slate-900 hover:bg-amber-300 transition-all duration-300 font-bold text-lg px-8 py-6 rounded-md shadow-lg shadow-amber-500/20 transform hover:scale-105"
            >
              <Link href={event.registerLink || "/register"} target="_blank">Register Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-amber-400 text-amber-300 bg-amber-400/10 transition-all duration-300 font-bold text-lg px-8 py-6 rounded-md transform hover:scale-105"
            >
              <a href="#rules">Learn More</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-25 pointer-events-none"></div>
    </section>
  );
};

export default EventHero;
