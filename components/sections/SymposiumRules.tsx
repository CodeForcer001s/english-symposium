"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Variants, easeInOut } from "framer-motion";

import {
  Sparkles,
  Clock,
  Users,
  MapPin,
  Calendar,
  Moon,
  Star,
  Zap,
  Scroll,
  Eye,
  Flame,
  Shield,
  Sword,
  Crown,
  CheckCircle,
  User,
  Shirt,
  Bus,
  Utensils,
  Settings,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

interface RuleCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  borderColor: string;
  rules: Array<{
    title: string;
    description: string;
    importance: "critical" | "important" | "standard";
  }>;
}

const EventRules: React.FC = () => {
  const [reviewedRules, setReviewedRules] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Mock rule categories with mystical theming
  const ruleCategories: RuleCategory[] = [
    {
      id: "registration",
      name: "Registration",
      icon: User,
      color: "text-red-400",
      bgColor: "from-red-900/20 to-red-800/20",
      borderColor: "border-red-600/40",
      rules: [
        {
          title: "Identification",
          description:
            "All participants should bring their registration slip along with their college ID card.",
          importance: "critical",
        },
      ],
    },
    {
      id: "dress",
      name: "Dress Code",
      icon: Shirt,
      color: "text-orange-400",
      bgColor: "from-orange-900/20 to-amber-800/20",
      borderColor: "border-orange-600/40",
      rules: [
        {
          title: "Formal Attire",
          description:
            "Participants will be permitted to enter the campus only in formal dress code.",
          importance: "critical",
        },
      ],
    },
    {
      id: "timing",
      name: "Timings",
      icon: Clock,
      color: "text-red-400",
      bgColor: "from-red-900/20 to-red-800/20",
      borderColor: "border-red-600/40",
      rules: [
        {
          title: "Registration Deadline",
          description:
            "The offline registration process will end by 9:30 AM on the day of the event.",
          importance: "critical",
        },
        {
          title: "Punctuality",
          description:
            "All events will commence at the scheduled time. Participants are requested to be punctual.",
          importance: "critical",
        },
      ],
    },
    {
      id: "transport",
      name: "Transportation",
      icon: Bus,
      color: "text-amber-400",
      bgColor: "from-amber-900/20 to-yellow-800/20",
      borderColor: "border-amber-600/40",
      rules: [
        {
          title: "College Buses",
          description:
            "College buses will be available from all parts of the city.",
          importance: "important",
        },
      ],
    },
    {
      id: "facilities",
      name: "Food & Facilities",
      icon: Utensils,
      color: "text-emerald-400",
      bgColor: "from-emerald-900/20 to-green-800/20",
      borderColor: "border-emerald-600/40",
      rules: [
        {
          title: "Meals Provided",
          description: "Breakfast and lunch will be provided by our college.",
          importance: "standard",
        },
      ],
    },
    {
      id: "conduct",
      name: "Conduct",
      icon: Shield,
      color: "text-yellow-400",
      bgColor: "from-yellow-900/20 to-amber-800/20",
      borderColor: "border-yellow-600/40",
      rules: [
        {
          title: "Campus Decorum",
          description:
            "Proper decorum must be maintained in accordance with the college rules while inside the college campus.",
          importance: "important",
        },
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All", icon: BookOpen },
    { id: "registration", name: "Reg", icon: User },
    { id: "dress", name: "Dress", icon: Shirt },
    { id: "timing", name: "Time", icon: Clock },
    { id: "transport", name: "Bus", icon: Bus },
    { id: "facilities", name: "Food", icon: Utensils },
    { id: "conduct", name: "Rules", icon: Shield },
  ];

  const toggleRuleReview = (ruleId: string) => {
    setReviewedRules((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(ruleId)) {
        newSet.delete(ruleId);
      } else {
        newSet.add(ruleId);
      }
      return newSet;
    });
  };

  const getImportanceLabel = (importance: string) => {
    switch (importance) {
      case "critical":
        return "Critical";
      case "important":
        return "Important";
      default:
        return "Standard";
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "critical":
        return "bg-red-600 text-white";
      case "important":
        return "bg-amber-600 text-black";
      default:
        return "bg-emerald-600 text-white";
    }
  };

  const filteredCategories =
    selectedCategory === "all"
      ? ruleCategories
      : ruleCategories.filter((cat) => cat.id === selectedCategory);

  const totalRules = ruleCategories.reduce(
    (acc, cat) => acc + cat.rules.length,
    0
  );
  const reviewedCount = reviewedRules.size;
  const progressPercentage =
    totalRules > 0 ? Math.round((reviewedCount / totalRules) * 100) : 0;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
            <Scroll className="w-4 h-4 text-yellow-500/50" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600/20 to-amber-700/20 border border-yellow-600/40 px-6 py-3 rounded-full mb-8">
            <BookOpen className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-300 font-serif text-lg">
              Rules & Regulations
            </span>
          </div>

          <h1 className="text-7xl max-md:6xl font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent mb-8 font-manuscript">
            Symposium Guidelines
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-serif max-w-4xl mx-auto">
            Review these important guidelines to ensure a smooth and
            professional event experience for all participants.
          </p>

          {/* Progress Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-yellow-400 font-serif">
                Progress
              </span>
              <span className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                {progressPercentage}%
              </span>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-3 mb-4">
              <motion.div
                className="bg-gradient-to-r from-yellow-500 to-amber-600 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            <div className="flex items-center justify-between text-gray-400 text-lg">
              <span>{reviewedCount} reviewed</span>
              <span>{totalRules - reviewedCount} remaining</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-serif font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black border-2 border-yellow-400"
                  : "bg-gray-800/50 text-gray-300 border-2 border-gray-600/30 hover:border-yellow-600/50 hover:text-yellow-300"
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Rules Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredCategories.map((category) =>
              category.rules.map((rule, index) => {
                const ruleId = `${category.id}-${index}`;
                const isReviewed = reviewedRules.has(ruleId);

                return (
                  <motion.div
                    key={ruleId}
                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -50, rotateX: 15 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="group"
                  >
                    <div
                      className={`bg-gradient-to-br ${
                        category.bgColor
                      } border-2 ${
                        category.borderColor
                      } rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 ${
                        isReviewed ? "ring-2 ring-green-500/50" : ""
                      }`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-amber-800 via-yellow-800 to-amber-900 pointer-events-none"></div>

                      {/* Header */}
                      <div className="relative z-10 flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.bgColor} border-2 ${category.borderColor} flex items-center justify-center`}
                          >
                            <category.icon
                              className={`w-6 h-6 ${category.color}`}
                            />
                          </div>
                          <div>
                            <div className="text-sm font-serif text-gray-400 uppercase tracking-wide">
                              {category.name}
                            </div>
                            <div
                              className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${getImportanceColor(
                                rule.importance
                              )}`}
                            >
                              {getImportanceLabel(rule.importance)}
                            </div>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleRuleReview(ruleId)}
                          className={`transition-colors duration-300 ${
                            isReviewed
                              ? "text-green-400 hover:text-green-300"
                              : "text-gray-500 hover:text-yellow-400"
                          }`}
                        >
                          <CheckCircle className="w-6 h-6" />
                        </motion.button>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mb-3 font-serif">
                          {rule.title}
                        </h3>
                        <p className="text-gray-200 font-serif leading-relaxed">
                          {rule.description}
                        </p>
                      </div>

                      {/* Decorative Corners */}
                      <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-yellow-600/40 group-hover:border-yellow-400/70 transition-colors duration-300"></div>
                      <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-yellow-600/40 group-hover:border-yellow-400/70 transition-colors duration-300"></div>
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-yellow-600/40 group-hover:border-yellow-400/70 transition-colors duration-300"></div>
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-yellow-600/40 group-hover:border-yellow-400/70 transition-colors duration-300"></div>

                      {/* Reviewed Overlay */}
                      {isReviewed && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="absolute inset-0 bg-green-500/10 rounded-2xl border-2 border-green-500/30 flex items-center justify-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-green-500 rounded-full p-2"
                          >
                            <CheckCircle className="w-8 h-8 text-white" />
                          </motion.div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </motion.div>

        {/* Final Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-black/80 to-yellow-900/20 backdrop-blur-sm rounded-2xl border-2 border-yellow-600/40 p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-amber-800 via-yellow-800 to-amber-900 pointer-events-none"></div>

            <div className="relative z-10 flex items-center justify-center gap-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <div className="text-xl font-serif">
                <span className="text-yellow-300 font-bold">
                  {reviewedCount} of {totalRules}
                </span>
                <span className="text-gray-300"> guidelines reviewed</span>
              </div>
            </div>

            {reviewedCount === totalRules && totalRules > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-green-400 font-serif font-bold text-lg"
              >
                ✨ All guidelines reviewed! You're ready for the event! ✨
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Ambient Elements */}
      <motion.div
        className="absolute top-20 right-20 w-12 h-12 border-2 border-yellow-600/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity },
        }}
      >
        <div className="w-full h-full border border-yellow-600/20 rounded-full flex items-center justify-center">
          <Eye className="w-5 h-5 text-yellow-600/40" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 w-10 h-10"
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
        <Sparkles className="w-full h-full text-yellow-600/50" />
      </motion.div>
    </div>
  );
};

export default EventRules;
