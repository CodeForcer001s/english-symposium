"use client";

import React from "react";
import { motion } from "framer-motion";
import { Event } from "@/app/data/events";
import { Phone, Feather, Scroll, Drama } from "lucide-react"; // Added more thematic icons

interface EventCoordinatorsProps {
  event: Event;
}

const EventCoordinators: React.FC<EventCoordinatorsProps> = ({ event }) => {
  // Access coordinators directly from the event prop
  const { coordinators } = event;

  // If there are no coordinators for the event, don't render the section
  if (!coordinators || coordinators.length === 0) {
    return null;
  }

  return (
    // Section with a deep black background and a subtle theatrical overlay
    <section className="py-24 bg-black relative font-serif overflow-hidden">
      {/* Background overlay for texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #4a3a1f, transparent 70%)",
        }}
      ></div>

      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 360 }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.15, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 2,
            }}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {i % 3 === 0 && <Feather className="w-16 h-16 text-amber-500" />}
            {i % 3 === 1 && <Scroll className="w-16 h-16 text-amber-500" />}
            {i % 3 === 2 && <Drama className="w-16 h-16 text-amber-500" />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-600 bg-clip-text text-transparent tracking-wider">
            Event Coordinators
          </h2>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent mx-auto mb-6 max-w-md"></div>
          <p className="text-xl text-amber-100/70 max-w-3xl mx-auto italic">
            For inquiries and missives, please seek audience with our appointed
            coordinators.
          </p>
        </motion.div>

        {/* Ornate Golden Border Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative p-1 border-transparent rounded-2xl bg-clip-border"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, #DAA520, #B8860B, #DAA520)",
          }}
        >
          <div className="bg-black rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {coordinators.map((coordinator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="bg-zinc-900/60 backdrop-blur-lg border border-amber-600/30 rounded-xl p-8 shadow-2xl shadow-amber-900/10 relative group hover:border-amber-500/60 transition-all duration-400"
                >
                  {/* Ornate corner decoration */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-amber-700/50 group-hover:border-amber-600 transition-colors"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-amber-700/50 group-hover:border-amber-600 transition-colors"></div>

                  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mb-1">
                        {coordinator.name}
                      </h3>
                      <p className="text-amber-300/80 mb-3 text-sm tracking-widest uppercase">
                        {coordinator.role}
                      </p>
                      <div className="flex items-center justify-center sm:justify-start text-amber-200/80 group-hover:text-amber-100 transition-colors">
                        <Phone className="w-4 h-4 mr-2" />
                        <a
                          href={`tel:${coordinator.phone}`}
                          className="hover:text-amber-300 transition-colors"
                        >
                          {coordinator.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventCoordinators;
