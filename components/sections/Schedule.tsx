"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
  Award,
  Coffee,
  Mic,
  Feather,
  Library,
  Star,
  Trophy,
  Info,
  X,
  DoorOpen,
  Scroll,
  Heart,
  Crown,
  Sparkles,
} from "lucide-react";

interface EventData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  timeSlot: number;
  duration: number;
  venue: string;
  participants: string;
  time: string;
  color: string;
  hoverColor: string;
  row: number;
}

const eventsData: EventData[] = [
  // General Events
  {
    id: "registration",
    title: "Registration",
    subtitle: "Welcome & Check-in",
    description:
      "Arrival of distinguished participants and literary enthusiasts. Welcome refreshments served in Renaissance salon style.",
    icon: "DoorOpen",
    timeSlot: 1,
    duration: 2,
    venue: "Main Entrance Hall",
    participants: "All Attendees",
    time: "9:00 AM - 10:00 AM",
    color: "bg-amber-800",
    hoverColor: "hover:bg-amber-700",
    row: 1,
  },
  {
    id: "opening",
    title: "Opening Ceremony",
    subtitle: "Inaugural Address",
    description:
      "Grand opening of Litlaya with inaugural address by the Dean, lighting of the literary lamp, and blessing of the symposium.",
    icon: "Library",
    timeSlot: 3,
    duration: 1,
    venue: "AV Hall I",
    participants: "All Attendees",
    time: "10:00 AM - 10:30 AM",
    color: "bg-yellow-800",
    hoverColor: "hover:bg-yellow-700",
    row: 1,
  },

  // Poetry Competition Series
  {
    id: "poetry1",
    title: "Poetry Recitation R1",
    subtitle: "Classical Verses",
    description:
      "Participants present classical poetry with passion and eloquence, channeling the voices of literary masters.",
    icon: "Feather",
    timeSlot: 4,
    duration: 3,
    venue: "Literature Hall",
    participants: "Teams of 1-2",
    time: "10:30 AM - 11:30 AM",
    color: "bg-purple-900",
    hoverColor: "hover:bg-purple-800",
    row: 2,
  },
  {
    id: "poetry2",
    title: "Poetry Recitation R2",
    subtitle: "Contemporary Expression",
    description:
      "Second round featuring contemporary poetry and original compositions with dramatic flair.",
    icon: "Feather",
    timeSlot: 7,
    duration: 2,
    venue: "Literature Hall",
    participants: "Qualified Poets",
    time: "12:00 PM - 1:00 PM",
    color: "bg-purple-800",
    hoverColor: "hover:bg-purple-700",
    row: 3,
  },

  // Literary Debate Series
  {
    id: "debate1",
    title: "Literary Debate R1",
    subtitle: "Classical Themes",
    description:
      "Spirited intellectual discourse on timeless themes from classical literature and philosophical concepts.",
    icon: "Mic",
    timeSlot: 4,
    duration: 3,
    venue: "Debate Chamber",
    participants: "Teams of 2-3",
    time: "10:30 AM - 11:30 AM",
    color: "bg-rose-900",
    hoverColor: "hover:bg-rose-800",
    row: 4,
  },
  {
    id: "debate2",
    title: "Literary Debate R2",
    subtitle: "Modern Movements",
    description:
      "Advanced debate on contemporary literary movements and their impact on modern society.",
    icon: "Mic",
    timeSlot: 7,
    duration: 2,
    venue: "Debate Chamber",
    participants: "Qualified Debaters",
    time: "12:00 PM - 1:00 PM",
    color: "bg-rose-800",
    hoverColor: "hover:bg-rose-700",
    row: 5,
  },

  // Creative Writing Series
  {
    id: "writing1",
    title: "Creative Writing R1",
    subtitle: "Prose & Poetry",
    description:
      "Timed writing competition showcasing original prose, poetry, and creative expression that captures the human spirit.",
    icon: "BookOpen",
    timeSlot: 4,
    duration: 3,
    venue: "Writing Studio",
    participants: "Individual",
    time: "10:30 AM - 11:30 AM",
    color: "bg-emerald-900",
    hoverColor: "hover:bg-emerald-800",
    row: 6,
  },
  {
    id: "writing2",
    title: "Creative Writing R2",
    subtitle: "Narrative Mastery",
    description:
      "Advanced creative writing challenge focusing on storytelling techniques and narrative innovation.",
    icon: "Scroll",
    timeSlot: 7,
    duration: 2,
    venue: "Writing Studio",
    participants: "Qualified Writers",
    time: "12:00 PM - 1:00 PM",
    color: "bg-emerald-800",
    hoverColor: "hover:bg-emerald-700",
    row: 7,
  },

  // Literary Quiz
  {
    id: "quiz",
    title: "Literary Quiz",
    subtitle: "Knowledge Championship",
    description:
      "Test of knowledge spanning classical literature to modern masterpieces, celebrating the breadth of literary heritage.",
    icon: "Star",
    timeSlot: 5,
    duration: 2,
    venue: "Quiz Hall",
    participants: "Teams of 2-3",
    time: "11:00 AM - 12:00 PM",
    color: "bg-indigo-900",
    hoverColor: "hover:bg-indigo-800",
    row: 8,
  },

  // Lunch Break
  {
    id: "lunch",
    title: "Renaissance Feast",
    subtitle: "Literary Lunch",
    description:
      "Themed lunch break with refreshments in the spirit of literary salons, fostering informal intellectual exchange.",
    icon: "Coffee",
    timeSlot: 9,
    duration: 3,
    venue: "Dining Hall",
    participants: "All Attendees",
    time: "1:00 PM - 2:00 PM",
    color: "bg-amber-700",
    hoverColor: "hover:bg-amber-600",
    row: 6,
  },
];

const iconMap = {
  DoorOpen,
  Library,
  Feather,
  Mic,
  BookOpen,
  Scroll,
  Star,
  Coffee,
  Award,
  Trophy,
  Crown,
  Heart,
  Sparkles,
};

interface EventBlockProps {
  event: EventData;
  onClick: (event: EventData) => void;
}

const EventBlock: React.FC<EventBlockProps> = ({ event, onClick }) => {
  const {
    title,
    subtitle,
    icon: iconName,
    color,
    hoverColor,
    timeSlot,
    duration,
    row,
  } = event;

  const Icon = iconMap[iconName as keyof typeof iconMap];

  return (
    <motion.div
      id="schedule"
      className={`flex flex-col justify-center items-center text-center p-2 rounded-lg border-2 border-amber-600/30 text-white text-xs font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-amber-400 ${color} ${hoverColor}`}
      style={{
        gridColumnStart: timeSlot,
        gridColumnEnd: timeSlot + duration,
        gridRowStart: row + 1,
      }}
      onClick={() => onClick(event)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        },
      }}
    >
      {Icon && <Icon className="w-4 h-4 mb-1 text-amber-300" />}
      <span className="truncate w-full font-bold">{title}</span>
      {subtitle && (
        <span className="truncate w-full text-amber-200 mt-1">{subtitle}</span>
      )}
    </motion.div>
  );
};

interface ModalProps {
  event: EventData | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  const {
    title,
    subtitle,
    description,
    icon: iconName,
    venue,
    participants,
    color,
    time,
  } = event;

  const Icon = iconMap[iconName as keyof typeof iconMap];

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-slate-900 rounded-2xl border-2 border-amber-600/30 max-w-md w-full mx-4 shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`${color} p-4 rounded-t-2xl flex items-center justify-between border-b border-amber-600/30`}
        >
          <div className="flex items-center space-x-3">
            {Icon && <Icon className="w-6 h-6 text-amber-300" />}
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              {subtitle && <p className="text-sm text-amber-200">{subtitle}</p>}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-amber-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 text-white">
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Info className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-300">
                Description
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-300">
                Time:
              </span>
              <span className="text-sm text-slate-300">{time}</span>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-300">
                Venue:
              </span>
              <span className="text-sm text-slate-300">{venue}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-300">
                Participants:
              </span>
              <span className="text-sm text-slate-300">{participants}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const EventTimeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster stagger
      },
    },
  };

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
  ];

  const handleEventClick = (event: EventData): void => {
    setSelectedEvent(event);
  };

  const closeModal = (): void => {
    setSelectedEvent(null);
  };

  const maxRows = Math.max(...eventsData.map((event) => event.row)) + 1;

  return (
    <section
      id="schedule"
      className="min-h-screen bg-black text-slate-200 py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "tween", duration: 0.3, ease: "easeOut" },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-amber-400 mr-2" />
            <span className="text-amber-300 font-medium tracking-wide">
              Event Schedule
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Timeline of </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 font-serif italic">
              Litlaya
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A carefully orchestrated day of literary celebration, intellectual
            discourse, and artistic expression
          </p>
          <p className="text-sm text-amber-300 mt-4 font-semibold">
            Click on any event for detailed information
          </p>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto rounded-2xl border-2 border-amber-600/30 bg-slate-900/30 p-3 md:p-6 shadow-2xl backdrop-blur-sm"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "tween", duration: 0.3, ease: "easeOut" },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Desktop and Tablet View */}
          <div className="hidden md:block">
            <motion.div
              className="grid gap-2 p-8 bg-slate-900/50 rounded-xl border border-amber-600/20 shadow-inner relative"
              style={{
                gridTemplateColumns: `repeat(${timeSlots.length}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${maxRows}, minmax(60px, 1fr))`,
              }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Time Headers */}
              {timeSlots.map((time, i) => (
                <motion.div
                  key={time}
                  className="text-center text-xs text-amber-300 p-2 border-r border-amber-600/30 bg-gradient-to-b from-slate-800 to-slate-900 rounded-sm font-semibold flex items-center justify-center"
                  style={{
                    gridColumnStart: i + 1,
                    gridRowStart: 1,
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "tween",
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {time}
                </motion.div>
              ))}

              {/* Event Blocks */}
              {eventsData.map((event) => (
                <EventBlock
                  key={event.id}
                  event={event}
                  onClick={handleEventClick}
                />
              ))}

              {/* Results & Awards */}
              <motion.div
                className="flex flex-col justify-center items-center text-center p-4 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 text-black border-2 border-amber-400 shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{
                  gridColumnStart: 10,
                  gridColumnEnd: 13,
                  gridRowStart: 2,
                  gridRowEnd: 6,
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "tween",
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-10 h-10 mb-2 animate-pulse" />
                <h3 className="text-xl font-serif font-bold">Results &</h3>
                <h3 className="text-xl font-serif font-bold">Awards</h3>
                <p className="text-sm font-semibold mt-2">2:00 PM - 3:00 PM</p>
                <p className="text-xs mt-1 opacity-80">Prize Distribution</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile View with Horizontal Scroll */}
          <div className="md:hidden">
            <div
              className="overflow-x-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#f59e0b #334155",
              }}
            >
              <motion.div
                className="grid gap-2 p-4 bg-slate-900/50 rounded-xl border border-amber-600/20 min-w-max shadow-inner"
                style={{
                  gridTemplateColumns: `repeat(${timeSlots.length}, minmax(100px, 1fr))`,
                  gridTemplateRows: `repeat(${maxRows}, minmax(80px, 1fr))`,
                }}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Time Headers */}
                {timeSlots.map((time, i) => (
                  <motion.div
                    key={time}
                    className="text-center text-xs text-amber-300 p-2 border-r border-amber-600/30 bg-gradient-to-b from-slate-800 to-slate-900 rounded-sm flex items-center justify-center font-semibold"
                    style={{
                      gridColumnStart: i + 1,
                      gridRowStart: 1,
                    }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "tween",
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      },
                    }}
                  >
                    {time}
                  </motion.div>
                ))}

                {/* Event Blocks */}
                {eventsData.map((event) => (
                  <EventBlock
                    key={event.id}
                    event={event}
                    onClick={handleEventClick}
                  />
                ))}

                {/* Results & Awards */}
                <motion.div
                  className="flex flex-col justify-center items-center text-center p-2 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 text-black border-2 border-amber-400 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                  style={{
                    gridColumnStart: 10,
                    gridColumnEnd: 11,
                    gridRowStart: 2,
                    gridRowEnd: 6,
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "tween",
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <Award className="w-6 h-6 mb-1 animate-pulse" />
                  <h3 className="text-sm font-serif font-bold">Results</h3>
                  <p className="text-xs font-semibold">2:00-3:00 PM</p>
                  <p className="text-xs opacity-80">Awards</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile scroll indicator */}
            <motion.div
              className="flex justify-center mt-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "tween", duration: 0.3, ease: "easeOut" },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center space-x-3 text-amber-400 text-sm bg-slate-800/50 rounded-full px-4 py-2 border border-amber-600/30">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span>Swipe to explore timeline</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="mt-8 max-w-5xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "tween", duration: 0.3, ease: "easeOut" },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Event Categories
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            variants={staggerContainer}
          >
            <motion.div
              className="flex items-center space-x-2 bg-purple-900/50 p-3 rounded-lg border border-amber-600/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "tween",
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <Feather className="w-4 h-4 text-amber-400" />
              <span className="text-white text-sm">Poetry Recitation</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 bg-rose-900/50 p-3 rounded-lg border border-amber-600/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "tween",
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <Mic className="w-4 h-4 text-amber-400" />
              <span className="text-white text-sm">Literary Debate</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 bg-emerald-900/50 p-3 rounded-lg border border-amber-600/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "tween",
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span className="text-white text-sm">Creative Writing</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 bg-indigo-900/50 p-3 rounded-lg border border-amber-600/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "tween",
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-white text-sm">Literary Quiz</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Event Details Summary */}
        <motion.div
          className="mt-8 max-w-4xl mx-auto bg-slate-900/50 rounded-xl p-6 border border-amber-600/20"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "tween", duration: 0.3, ease: "easeOut" },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Event Summary
          </h3>
          <motion.div
            className="grid md:grid-cols-2 gap-4 text-sm"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-slate-800/50 p-4 rounded-lg border border-amber-600/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "tween",
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <h4 className="text-amber-400 font-bold mb-2">
                Morning Events (9:00 AM - 1:00 PM)
              </h4>
              <ul className="text-slate-300 space-y-1">
                <li>• Poetry Recitation - Literature Hall</li>
                <li>• Literary Debate - Debate Chamber</li>
                <li>• Creative Writing - Writing Studio</li>
                <li>• Literary Quiz - Quiz Hall</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-slate-800/50 p-4 rounded-lg border border-amber-600/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "tween",
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <h4 className="text-amber-400 font-bold mb-2">
                Afternoon Program (1:00 PM - 3:00 PM)
              </h4>
              <ul className="text-slate-300 space-y-1">
                <li>• Renaissance Feast - Dining Hall</li>
                <li>• Results & Awards Ceremony</li>
                <li>• Prize Distribution</li>
                <li>• Closing Remarks</li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-4 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "tween", duration: 0.3, ease: "easeOut" },
              },
            }}
          >
            <div className="flex items-center justify-center text-amber-400">
              <Feather className="w-4 h-4 mr-2" />
              <span className="text-sm italic">
                &ldquo;A day where words become wings and ideas take
                flight&rdquo;
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal event={selectedEvent} onClose={closeModal} />
    </section>
  );
};

export default EventTimeline;
