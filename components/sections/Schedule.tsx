"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users, Calendar } from "lucide-react";

const Schedule: React.FC = () => {
  const scheduleData = [
    {
      day: "Day 1 - December 15, 2024",
      events: [
        {
          time: "09:00 - 09:30",
          title: "Registration & Welcome",
          location: "Main Lobby",
          type: "general",
          description: "Check-in and welcome refreshments",
        },
        {
          time: "09:30 - 10:00",
          title: "Opening Ceremony",
          location: "Main Auditorium",
          type: "ceremony",
          description: "Inaugural address and symposium overview",
        },
        {
          time: "10:00 - 11:30",
          title: "LITWIT Prelims",
          location: "Hall A",
          type: "competition",
          description: "Literature Quiz preliminary rounds",
        },
        {
          time: "10:00 - 11:30",
          title: "PENMAN'S CODE Prelims",
          location: "Hall B",
          type: "competition",
          description: "Author deduction preliminary rounds",
        },
        {
          time: "11:30 - 12:00",
          title: "Coffee Break",
          location: "Courtyard",
          type: "break",
          description: "Networking and refreshments",
        },
        {
          time: "12:00 - 13:30",
          title: "MIND QUOTE Prelims",
          location: "Hall A",
          type: "competition",
          description: "Quote matching preliminary rounds",
        },
        {
          time: "12:00 - 13:30",
          title: "LITCRYPT Prelims",
          location: "Hall B",
          type: "competition",
          description: "Literary cipher decoding prelims",
        },
        {
          time: "13:30 - 14:30",
          title: "Lunch Break",
          location: "Cafeteria",
          type: "break",
          description: "Lunch and informal discussions",
        },
        {
          time: "14:30 - 16:00",
          title: "ELOQUENTIA Prelims",
          location: "Main Auditorium",
          type: "competition",
          description: "Public speaking preliminary rounds",
        },
        {
          time: "16:00 - 16:30",
          title: "Tea Break",
          location: "Courtyard",
          type: "break",
          description: "Afternoon refreshments",
        },
        {
          time: "16:30 - 17:30",
          title: "Guest Speaker Session",
          location: "Main Auditorium",
          type: "lecture",
          description: "Distinguished author presentation",
        },
      ],
    },
    {
      day: "Day 2 - December 16, 2024",
      events: [
        {
          time: "09:00 - 09:30",
          title: "Morning Assembly",
          location: "Main Auditorium",
          type: "general",
          description: "Day 2 briefing and finalist announcements",
        },
        {
          time: "09:30 - 11:00",
          title: "LITWIT Finals",
          location: "Main Auditorium",
          type: "finals",
          description: "Literature quiz final championship",
        },
        {
          time: "11:00 - 11:30",
          title: "Coffee Break",
          location: "Courtyard",
          type: "break",
          description: "Morning refreshments",
        },
        {
          time: "11:30 - 13:00",
          title: "PENMAN'S CODE Finals",
          location: "Hall A",
          type: "finals",
          description: "Author deduction championship",
        },
        {
          time: "11:30 - 13:00",
          title: "MIND QUOTE Finals",
          location: "Hall B",
          type: "finals",
          description: "Quote matching championship",
        },
        {
          time: "13:00 - 14:00",
          title: "Lunch Break",
          location: "Cafeteria",
          type: "break",
          description: "Midday meal and networking",
        },
        {
          time: "14:00 - 15:30",
          title: "LITCRYPT Finals",
          location: "Hall A",
          type: "finals",
          description: "Literary cipher championship",
        },
        {
          time: "14:00 - 15:30",
          title: "ELOQUENTIA Finals",
          location: "Main Auditorium",
          type: "finals",
          description: "Oratory championship",
        },
        {
          time: "15:30 - 16:00",
          title: "Tea Break",
          location: "Courtyard",
          type: "break",
          description: "Final refreshment break",
        },
        {
          time: "16:00 - 17:00",
          title: "Prize Distribution",
          location: "Main Auditorium",
          type: "ceremony",
          description: "Awards ceremony and closing remarks",
        },
        {
          time: "17:00 - 17:30",
          title: "Closing Ceremony",
          location: "Main Auditorium",
          type: "ceremony",
          description: "Symposium conclusion and farewell",
        },
      ],
    },
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "competition":
        return "from-blue-500 to-purple-600";
      case "finals":
        return "from-red-500 to-orange-600";
      case "ceremony":
        return "from-yellow-500 to-amber-600";
      case "lecture":
        return "from-green-500 to-teal-600";
      case "break":
        return "from-gray-400 to-gray-500";
      default:
        return "from-renaissance-burgundy to-renaissance-burgundy/80";
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "competition":
      case "finals":
        return Users;
      case "ceremony":
        return Calendar;
      case "break":
        return Clock;
      default:
        return MapPin;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-parchment-100 to-parchment-50 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="manuscript-font text-6xl font-bold text-renaissance-burgundy mb-6">
            Event Schedule
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-renaissance-gold to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-renaissance-burgundy/80 max-w-3xl mx-auto leading-relaxed">
            <span className="illuminated-cap">A</span>
            carefully orchestrated timeline of literary excellence spanning two
            magnificent days of competition and celebration.
          </p>
        </motion.div>

        {/* Schedule Timeline */}
        {scheduleData.map((day, dayIndex) => (
          <motion.div
            key={dayIndex}
            initial={{ opacity: 0, x: dayIndex % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
            className="mb-16"
          >
            {/* Day Header */}
            <div className="text-center mb-12">
              <h3 className="manuscript-font text-4xl font-bold text-renaissance-burgundy mb-4">
                {day.day}
              </h3>
              <div className="w-24 h-0.5 bg-renaissance-gold mx-auto"></div>
            </div>

            {/* Events Grid */}
            <div className="space-y-6">
              {day.events.map((event, eventIndex) => {
                const IconComponent = getEventIcon(event.type);
                return (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="overflow-hidden scroll-border bg-gradient-to-br from-parchment-50 to-parchment-100 border-renaissance-gold/30 hover:border-renaissance-gold/60 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <CardContent className="p-0">
                        <div className="flex">
                          {/* Time Column */}
                          <div
                            className={`bg-gradient-to-b ${getEventTypeColor(
                              event.type
                            )} p-6 text-white min-w-[200px] flex flex-col justify-center items-center group-hover:scale-105 transition-transform duration-300`}
                          >
                            <IconComponent className="w-8 h-8 mb-2" />
                            <div className="text-lg font-bold text-center">
                              {event.time}
                            </div>
                          </div>

                          {/* Content Column */}
                          <div className="flex-1 p-6">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-2xl font-bold text-renaissance-burgundy group-hover:text-renaissance-gold transition-colors duration-300">
                                {event.title}
                              </h4>
                              <div className="flex items-center text-renaissance-burgundy/70 text-sm">
                                <MapPin className="w-4 h-4 mr-1" />
                                {event.location}
                              </div>
                            </div>
                            <p className="text-renaissance-burgundy/80 leading-relaxed">
                              {event.description}
                            </p>

                            {/* Event type badge */}
                            <div className="mt-4">
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getEventTypeColor(
                                  event.type
                                )} shadow-sm`}
                              >
                                {event.type.charAt(0).toUpperCase() +
                                  event.type.slice(1)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Schedule Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <Card className="scroll-border bg-renaissance-burgundy/10 border-renaissance-gold/30">
            <CardHeader>
              <CardTitle className="text-2xl text-renaissance-burgundy flex items-center">
                <Clock className="w-6 h-6 mr-2 text-renaissance-gold" />
                Important Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-renaissance-burgundy/80">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-renaissance-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>
                    All participants must register at least 30 minutes before
                    their first event.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-renaissance-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>
                    Preliminary round results will be announced immediately
                    after each session.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-renaissance-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>
                    Final rounds are open to audience members and will be
                    live-streamed.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-renaissance-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>
                    Light refreshments will be provided during all break
                    periods.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-renaissance-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>
                    Winners will be announced at the Prize Distribution ceremony
                    on Day 2.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
