"use client";

import React from "react";
import { motion } from "framer-motion";
import { Event } from "@/app/data/events";
import { CheckCircle } from "lucide-react";

interface EventRulesProps {
  event: Event;
}

const EventRules: React.FC<EventRulesProps> = ({ event }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
            General Rules
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6 max-w-xs"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please adhere to these guidelines throughout the competition
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-10 shadow-xl">
          <ul className="space-y-6">
            {event.generalRules.map((rule, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <div
                  className={`p-1 rounded-full bg-gradient-to-br ${event.color} text-white mr-4 mt-1 flex-shrink-0`}
                >
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-gray-300 text-lg">{rule}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventRules;
