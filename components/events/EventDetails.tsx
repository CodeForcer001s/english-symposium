"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Event } from "@/app/data/events";
import {
  Users,
  ScrollText,
  MapPin,
  Calendar,
  Clock,
  Award,
  BookMarked,
  ChevronDown,
  UserCircle
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EventDetailsProps {
  event: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  const [expandedRound, setExpandedRound] = useState<number | null>(null);

  const keyDetails = [
    { icon: MapPin, label: "Venue", value: event.venue },
    { icon: Calendar, label: "Date", value: event.date },
    { icon: Clock, label: "Time", value: event.time },
    { icon: UserCircle, label: "Team Members", value: event.teamComposition },
  ];

  return (
    <section
      className="relative overflow-hidden bg-black text-white min-h-screen"
      style={{ fontFamily: "Cinzel, serif" }}
    >
      {/* Floating golden particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 space-y-20 md:space-y-24">
        {/* --- NEW: Section Title & Description --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="max-md:text-6xl text-9xl font-extrabold bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4 font-manuscript"
          
          >
            Event Details
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
              },
            }}
            className="text-lg md:text-2xl text-amber-200/90 max-w-4xl mx-auto"
          >
            {event.subtitle}
          </motion.p>
        </motion.div>

        {/* --- Enhanced Section 1: About & Details --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 md:h-full rounded-xl overflow-hidden shadow-2xl shadow-yellow-500/20 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={event.coverImage}
              alt="Event atmosphere"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <div className="md:order-first space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <ScrollText className="w-7 h-7 text-black" />
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-6">
              About the Event
            </h2>

            <div className="relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-yellow-400/20 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <p className="text-lg text-amber-100/90 leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="space-y-4 mt-8">
              {keyDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center group cursor-pointer"
                >
                  <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-amber-900/60 to-yellow-900/60 rounded-xl flex items-center justify-center mr-4 border border-yellow-500/30 group-hover:border-yellow-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/20">
                    <detail.icon className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-yellow-300/70 uppercase tracking-wider text-sm mb-1">
                      {detail.label}
                    </h4>
                    <p className="text-lg font-semibold text-white group-hover:text-yellow-100 transition-colors duration-300">
                      {detail.value}
                    </p>
                  </div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-yellow-400/50 group-hover:to-yellow-400 transition-all duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Enhanced Section 2: Event Rounds Accordion --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="md:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-80 md:h-full rounded-xl overflow-hidden shadow-2xl shadow-yellow-500/20 group"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-yellow-400/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="https://t4.ftcdn.net/jpg/01/64/83/47/360_F_164834714_2UMLp8c0bszO8T3kpuKjTPBNcmVO8ad0.jpg"
                alt="Competition concept"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <Award className="w-7 h-7 text-black" />
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-8">
              Event Structure
            </h2>

            <div className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-xl border border-yellow-400/20 overflow-hidden backdrop-blur-sm">
              <div className="border-t-2 border-yellow-500/30"></div>
              {event.eventStructure.map((round, index) => (
                <div
                  key={index}
                  className="border-b border-yellow-500/20 last:border-b-0"
                >
                  <motion.button
                    onClick={() =>
                      setExpandedRound(expandedRound === index ? null : index)
                    }
                    className="w-full flex justify-between items-center py-6 px-6 text-left hover:bg-yellow-400/5 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent group-hover:from-yellow-200 group-hover:to-yellow-400 transition-all duration-300">
                      {round.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedRound === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-all duration-300"
                    >
                      <ChevronDown className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedRound === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="w-full h-0.5 bg-gradient-to-r from-yellow-400/50 to-transparent mb-4"></div>
                          <p className="text-lg text-amber-100/90 leading-relaxed">
                            {round.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Enhanced Section 3: Rules & Regulations --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 md:h-full rounded-xl overflow-hidden shadow-2xl shadow-yellow-500/20 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="https://st2.depositphotos.com/4012355/10655/i/950/depositphotos_106550764-stock-photo-rules-and-regulations.jpg"
              alt="Rules and guidelines concept"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <div className="md:order-first space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <BookMarked className="w-7 h-7 text-black" />
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-8">
              Rules & Regulations
            </h2>

            <div className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-xl border border-yellow-400/20 p-6 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <ul className="space-y-4">
                {event.generalRules.map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <div className="w-6 h-6 mt-1.5 flex-shrink-0 bg-yellow-400/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-yellow-400/30 transition-all duration-300">
                      <Users className="w-4 h-4 text-yellow-400" />
                    </div>
                    <p className="text-lg text-amber-100/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {rule}
                    </p>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: event.generalRules.length * 0.1 }}
                  className="flex items-start group border-t border-yellow-400/20 pt-4"
                >
                  <div className="w-6 h-6 mt-1.5 flex-shrink-0 bg-yellow-400/30 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-4 h-4 text-yellow-400" />
                  </div>
                  <p className="text-lg font-semibold text-yellow-100 group-hover:text-white transition-colors duration-300">
                    {event.teamComposition}
                  </p>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* --- Enhanced CTA Section --- */}
        <div className="relative text-center py-20 md:py-24 rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-900/20 to-transparent" />

          {/* Golden border */}
          <div className="absolute inset-4 border border-yellow-400/30 rounded-xl"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
            className="relative z-10 space-y-8"
          >
            {/* Decorative elements */}
            <div className="flex justify-center items-center mb-6">
              <div className="w-4 h-4 border-2 border-yellow-400 rotate-45 mx-4"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent mb-4">
              The Stage Awaits
            </h2>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent blur-sm"></div>
              <p className="text-amber-200/90 text-lg sm:text-xl mb-8 relative z-10 leading-relaxed">
                Join the finest literary minds and compete for glory. Secure
                your place in the annals of history.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-lg blur-lg opacity-30"></div>
              <Button
                asChild
                size="lg"
                className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 text-black font-bold text-lg sm:text-xl px-10 sm:px-12 py-6 sm:py-7 rounded-lg shadow-xl shadow-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/60 transition-all duration-300 border border-yellow-300/50"
              >
                <Link
                  href="https://conoscenza2025.stjosephstechnology.ac.in/registration/"
                  target="_blank"
                >
                  Register Now
                </Link>
              </Button>
            </motion.div>

            {/* Bottom decorative elements */}
            <div className="flex justify-center items-center mt-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full mx-3 animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
