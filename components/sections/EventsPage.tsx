"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LocationMap from "./LocationMap";
import { 
  BookOpen, 
  MapPin, 
  Mail, 
  Phone, 
  Crown, 
  Feather, 
  Scroll, 
  Bookmark, 
  BookMarked, 
  Library, 
  PenTool, 
  FileText, 
  Sparkles, 
  Star, 
  Instagram, 
  Bus, 
  Users, 
  GraduationCap, 
  BookOpenCheck, 
  Palette 
} from "lucide-react";

// Define types for better type safety
interface Coordinator {
  name: string;
  year: string;
  phone: string;
  image: string;
}

interface StaffCoordinator {
  name: string;
  department: string;
  phone: string;
}

interface RandomPosition {
  left: number;
  top: number;
  delay: number;
  duration: number;
}

interface EmojiPosition {
  emoji: string;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

interface LiteraryIcon {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  x: string;
  y: string;
  delay: number;
}

// Motion variants with proper typing
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (delay: number = 0) => ({ 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      delay, 
      type: "spring" as const, 
      stiffness: 100 
    } 
  }),
};

const coordinatorVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay: number = 0) => ({ 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      delay: delay * 0.2 
    } 
  }),
};

const iconVariants = {
  animate: {
    y: [-15, 15, -15],
    rotate: [-8, 8, -8],
    opacity: [0.2, 0.5, 0.2],
  },
};

const ContactPage: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [randomPositions, setRandomPositions] = useState<RandomPosition[]>([]);
  const [emojiPositions, setEmojiPositions] = useState<EmojiPosition[]>([]);

  useEffect(() => {
    setIsClient(true);
    // Generate random positions once on client
    setRandomPositions(
      [...Array(15)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 8 + Math.random() * 4,
      }))
    );
    
    setEmojiPositions(
      ["📚", "✒️", "📝", "🎭", "🎨", "📖", "🖋️", "📜"].map((emoji) => ({
        emoji,
        left: 10 + Math.random() * 80,
        top: 10 + Math.random() * 80,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 6,
      }))
    );
  }, []);

  const collegePosition: [number, number] = [12.86933255684727, 80.21849633481266];
  
  const overallCoordinators: Coordinator[] = [
    { 
      name: "Kailash S", 
      year: "IV Year CSE", 
      phone: "+919339785032", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
    },
    { 
      name: "Susritha M", 
      year: "IV Year CSE", 
      phone: "+917010168721", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b19c?w=150&h=150&fit=crop&crop=face" 
    },
  ];
  
  const staffCoordinators: StaffCoordinator[] = [
    { 
      name: "Dr. Priya Venkatesh", 
      department: "Department of English Literature", 
      phone: "+919876543210" 
    },
    { 
      name: "Prof. Ramesh Kumar", 
      department: "Department of Creative Writing", 
      phone: "+919876543211" 
    },
    { 
      name: "Dr. Lakshmi Narayan", 
      department: "Department of Comparative Literature", 
      phone: "+919876543212" 
    },
  ];
  
  const literaryIcons: LiteraryIcon[] = [
    { Icon: Feather, x: "8%", y: "15%", delay: 0 },
    { Icon: Scroll, x: "88%", y: "10%", delay: 1 },
    { Icon: BookMarked, x: "82%", y: "70%", delay: 3 },
    { Icon: Library, x: "45%", y: "85%", delay: 4 },
    { Icon: PenTool, x: "92%", y: "40%", delay: 5 },
    { Icon: FileText, x: "3%", y: "45%", delay: 6 },
    { Icon: Bookmark, x: "78%", y: "25%", delay: 7 },
    { Icon: Sparkles, x: "20%", y: "8%", delay: 8 },
    { Icon: Star, x: "72%", y: "55%", delay: 9 },
    { Icon: BookOpenCheck, x: "35%", y: "20%", delay: 10 },
    { Icon: Palette, x: "65%", y: "80%", delay: 11 },
  ];

  return (
    <section className="bg-black min-h-screen py-16 sm:py-20 relative overflow-hidden border-4 border-amber-500/30" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* Background animated icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {literaryIcons.map(({ Icon, x, y, delay }, index) => (
          <motion.div 
            key={index} 
            className="absolute text-amber-500/20" 
            style={{ left: x, top: y }} 
            variants={iconVariants} 
            animate="animate" 
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: delay * 0.7 
            }}
          >
            <Icon size={24} className="sm:w-8 sm:h-8" />
          </motion.div>
        ))}
      </div>
      
      {/* Background gradient blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-amber-600/10 to-yellow-600/10 rounded-full filter blur-3xl" 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.1, 0.2, 0.1] 
          }} 
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }} 
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gradient-to-r from-orange-600/8 to-red-600/8 rounded-full filter blur-3xl" 
          animate={{ 
            scale: [1.1, 1, 1.1], 
            opacity: [0.08, 0.15, 0.08] 
          }} 
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut", 
            delay: 5 
          }} 
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -60 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, type: "spring", stiffness: 80 }} 
          className="text-center mb-16 md:mb-20 border-b-2 border-amber-500/30 pb-12"
        >
          <motion.div 
            className="inline-flex items-center justify-center p-8 rounded-full bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-black mb-8 shadow-2xl shadow-amber-500/50 border-4 border-amber-300/40" 
            animate={{ 
              scale: [1, 1.05, 1], 
              rotate: [0, 5, -5, 0], 
              boxShadow: [
                "0 0 30px rgba(245, 158, 11, 0.5)", 
                "0 0 60px rgba(245, 158, 11, 0.7)", 
                "0 0 30px rgba(245, 158, 11, 0.5)"
              ] 
            }} 
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <BookOpen size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400 py-4 mb-8 leading-tight" 
            style={{ fontFamily: "Brush Script MT, cursive" }} 
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            }} 
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            Literary Sanctum
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-amber-200 max-w-4xl mx-auto leading-relaxed italic border-l-4 border-amber-500/50 pl-6" 
            style={{ fontFamily: "Times New Roman, serif" }} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            &ldquo;In every word lies a universe waiting to be discovered. Connect with our guardians of literary wisdom.&rdquo;
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Student Coordinators */}
            <motion.div 
              custom={0.2} 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              className="group bg-black/90 backdrop-blur-md border-4 border-amber-500/60 rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-amber-400/60 hover:border-amber-400/80 transition-all duration-500 hover:scale-[1.02]"
            >
              <motion.div 
                className="flex items-center mb-10 border-b-2 border-amber-500/30 pb-6" 
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 mr-3 sm:mr-4 md:mr-6 shadow-xl border border-amber-400/50 sm:border-2">
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400" style={{ fontFamily: "Brush Script MT, cursive" }}>
                  Literary Guardians
                </h2>
              </motion.div>
              
              <div className="space-y-8">
                {overallCoordinators.map((coord, idx) => (
                  <motion.div 
                    key={idx} 
                    custom={idx} 
                    variants={coordinatorVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    className="group/card flex items-center space-x-6 p-5 rounded-2xl transition-all duration-300 hover:bg-amber-900/20 cursor-pointer border-2 border-transparent hover:border-amber-400/40" 
                    whileHover={{ x: 15 }}
                  >
                    <div className="relative">
                      <motion.img 
                        src={coord.image} 
                        alt={coord.name} 
                        className="w-24 h-24 rounded-full object-cover border-4 border-amber-400 shadow-xl" 
                        whileHover={{ scale: 1.15, rotate: 10 }} 
                        transition={{ type: "spring", stiffness: 300 }} 
                      />
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-3 md:-right-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border border-amber-300">
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <motion.p 
                        className="text-2xl md:text-3xl font-bold text-amber-200 group-hover/card:text-amber-100 transition-colors" 
                        style={{ fontFamily: "Times New Roman, serif" }} 
                        whileHover={{ scale: 1.05 }}
                      >
                        {coord.name}
                      </motion.p>
                      <p className="text-amber-300/80 font-medium mb-2 sm:mb-3 text-sm sm:text-base md:text-lg border-l-2 border-amber-500/30 pl-2 sm:pl-3">
                        {coord.year}
                      </p>
                      <motion.a 
                        href={`tel:${coord.phone}`} 
                        className="text-yellow-400 flex items-center hover:text-yellow-300 transition-colors group text-lg border border-yellow-500/30 rounded-lg px-3 py-1 hover:border-yellow-400/50" 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                      >
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 sm:mr-3 group-hover:animate-pulse flex-shrink-0" />
                        <span className="truncate">{coord.phone}</span>
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Staff Coordinators */}
            <motion.div 
              custom={0.4} 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              className="group bg-black/90 backdrop-blur-md border-4 border-orange-500/60 rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-orange-400/60 hover:border-orange-400/80 transition-all duration-500 hover:scale-[1.02]"
            >
              <motion.div 
                className="flex items-center mb-10 border-b-2 border-orange-500/30 pb-6" 
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 mr-3 sm:mr-4 md:mr-6 shadow-xl border border-orange-400/50 sm:border-2">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400" style={{ fontFamily: "Brush Script MT, cursive" }}>
                  Faculty Mentors
                </h2>
              </motion.div>
              
              <div className="space-y-6">
                {staffCoordinators.map((staff, idx) => (
                  <motion.div 
                    key={idx} 
                    custom={idx} 
                    variants={coordinatorVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    className="group/card flex items-center justify-between p-5 rounded-2xl transition-all duration-300 hover:bg-orange-900/20 cursor-pointer border-2 border-transparent hover:border-orange-400/40" 
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-1">
                      <motion.p 
                        className="text-xl md:text-2xl font-bold text-amber-200 group-hover/card:text-amber-100 transition-colors mb-2" 
                        style={{ fontFamily: "Times New Roman, serif" }} 
                        whileHover={{ scale: 1.05 }}
                      >
                        {staff.name}
                      </motion.p>
                      <p className="text-orange-300/80 font-medium text-xs sm:text-sm md:text-base mb-2 sm:mb-3 border-l-2 border-orange-500/30 pl-2 sm:pl-3">
                        {staff.department}
                      </p>
                      <motion.a 
                        href={`tel:${staff.phone}`} 
                        className="text-yellow-400 flex items-center hover:text-yellow-300 transition-colors group border border-yellow-500/30 rounded-lg px-3 py-1 hover:border-yellow-400/50 w-fit" 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                      >
                        <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-2 sm:mr-3 group-hover:animate-pulse flex-shrink-0" />
                        <span className="truncate">{staff.phone}</span>
                      </motion.a>
                    </div>
                    <div className="text-orange-400/60 group-hover/card:text-orange-300/80 transition-colors flex-shrink-0">
                      <Users
                        size={20}
                        className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Contact Information */}
            <motion.div 
              custom={0.3} 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              className="group bg-black/90 backdrop-blur-md border-4 border-yellow-500/60 rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-yellow-400/60 hover:border-yellow-400/80 transition-all duration-500 hover:scale-[1.01]"
            >
              <motion.div 
                className="flex items-center mb-8 border-b-2 border-yellow-500/30 pb-6" 
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-r from-yellow-600 to-amber-600 mr-3 sm:mr-4 md:mr-6 shadow-xl border border-yellow-400/50 sm:border-2">
                  <Library className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400" style={{ fontFamily: "Brush Script MT, cursive" }}>
                  Literary Sanctuary
                </h2>
              </motion.div>
              
              <div className="space-y-6 text-amber-200 text-lg" style={{ fontFamily: "Times New Roman, serif" }}>
                <motion.div 
                  className="space-y-5" 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.2 }}
                >
                  <motion.p 
                    className="flex items-start group/item cursor-pointer p-4 rounded-xl hover:bg-amber-900/25 transition-all border border-transparent hover:border-amber-500/30" 
                    whileHover={{ x: 10 }}
                  >
                    <Crown className="w-6 h-6 mr-4 mt-1 text-amber-400 flex-shrink-0 group-hover/item:animate-bounce" />
                    <span className="font-semibold text-xl text-amber-100">St. Josephs Institute of Technology</span>
                  </motion.p>
                  
                  <motion.p 
                    className="flex items-start group/item cursor-pointer p-4 rounded-xl hover:bg-amber-900/25 transition-all border border-transparent hover:border-amber-500/30" 
                    whileHover={{ x: 10 }}
                  >
                    <MapPin className="w-6 h-6 mr-4 mt-1 text-amber-400 flex-shrink-0 group-hover/item:animate-bounce" />
                    <span className="text-amber-200">Old Mahabalipuram Road, Chennai - 600 119</span>
                  </motion.p>
                  
                  <motion.p 
                    className="flex items-start group/item cursor-pointer p-4 rounded-xl hover:bg-amber-900/25 transition-all border border-transparent hover:border-amber-500/30" 
                    whileHover={{ x: 10 }}
                  >
                    <Mail className="w-6 h-6 mr-4 mt-1 text-amber-400 flex-shrink-0 group-hover/item:animate-bounce" />
                    <a href="mailto:literary@stjosephstechnology.ac.in" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                      literary@stjosephstechnology.ac.in
                    </a>
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Location Map */}
            <motion.div 
              custom={0.5} 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              className="group bg-black/90 backdrop-blur-md border-4 border-amber-600/60 rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-amber-400/60 hover:border-amber-400/80 transition-all duration-500 hover:scale-[1.01]"
            >
              <motion.div 
                className="flex items-center mb-8 border-b-2 border-amber-500/30 pb-6" 
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 mr-3 sm:mr-4 md:mr-6 shadow-xl border border-amber-400/50 sm:border-2">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400" style={{ fontFamily: "Brush Script MT, cursive" }}>
                  Literary Haven Location
                </h2>
              </motion.div>
              
              <motion.div 
                className="h-[400px] w-full rounded-2xl overflow-hidden border-4 border-amber-500/50 shadow-2xl shadow-amber-500/25 group-hover:border-amber-400/70 transition-all duration-500" 
                whileHover={{ scale: 1.02 }} 
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LocationMap position={collegePosition} />
              </motion.div>
              
              <motion.div 
                className="mt-8 text-center border-t-2 border-amber-500/30 pt-6" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.8 }}
              >
                <p className="text-amber-300 text-lg italic" style={{ fontFamily: "Times New Roman, serif" }}>
                  &ldquo;Navigate to where words weave their magic&rdquo;
                </p>
              </motion.div>
            </motion.div>

            {/* Social Media & Transportation */}
            <motion.div 
              custom={0.6} 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              className="group bg-black/90 backdrop-blur-md border-4 border-orange-500/60 rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-orange-400/60 hover:border-orange-400/80 transition-all duration-500 hover:scale-[1.01]"
            >
              <motion.div 
                className="flex items-center mb-8 border-b-2 border-orange-500/30 pb-6" 
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 mr-3 sm:mr-4 md:mr-6 shadow-xl border border-orange-400/50 sm:border-2">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400" style={{ fontFamily: "Brush Script MT, cursive" }}>
                  Digital Scrolls
                </h2>
              </motion.div>
              
              <div className="space-y-6">
                <motion.a 
                  href="https://instagram.com/sjit_literary" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/link flex items-center p-5 rounded-2xl bg-gradient-to-r from-orange-800/30 to-red-800/30 border-2 border-orange-400/40 hover:border-orange-300/70 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-700/40 hover:to-red-700/40" 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-400 mr-3 sm:mr-4 group-hover/link:animate-pulse" />
                  <div>
                    <p className="text-amber-100 font-bold text-lg" style={{ fontFamily: "Times New Roman, serif" }}>
                      Instagram
                    </p>
                    <p className="text-orange-300 text-xs sm:text-sm">
                      @sjit_literary
                    </p>
                  </div>
                </motion.a>
                
                <motion.div 
                  className="group/link flex items-center p-5 rounded-2xl bg-gradient-to-r from-blue-800/30 to-indigo-800/30 border-2 border-blue-400/40 hover:border-blue-300/70 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700/40 hover:to-indigo-700/40 cursor-pointer" 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Bus className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400 mr-3 sm:mr-4 group-hover/link:animate-pulse" />
                  <div>
                    <p className="text-amber-100 font-bold text-lg" style={{ fontFamily: "Times New Roman, serif" }}>
                      Transportation
                    </p>
                    <p className="text-blue-300 text-sm">Bus Routes & Guidelines</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quote Section */}
        <motion.div 
          custom={0.7} 
          variants={cardVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          className="col-span-1 lg:col-span-2 group bg-black/95 backdrop-blur-md border-4 border-amber-500/60 rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-amber-400/60 hover:border-amber-400/80 transition-all duration-500 mt-12"
        >
          <motion.div className="text-center" whileHover={{ scale: 1.02 }}>
            <motion.div 
              className="mb-8 border-4 border-amber-500/40 rounded-full w-24 h-24 mx-auto flex items-center justify-center bg-gradient-to-r from-amber-600/20 to-yellow-600/20" 
              animate={{ rotate: [0, 5, -5, 0] }} 
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Scroll className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-400" />
            </motion.div>
            
            <blockquote className="text-2xl md:text-4xl italic text-amber-200 leading-relaxed mb-8 border-l-4 border-r-4 border-amber-500/50 px-8 py-6" style={{ fontFamily: "Times New Roman, serif" }}>
              &ldquo;Literature is the most agreeable way of ignoring life.&rdquo;
            </blockquote>
            
            <p className="text-amber-300 text-xl border-t-2 border-amber-500/30 pt-6" style={{ fontFamily: "Times New Roman, serif" }}>
              — Fernando Pessoa
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Call to Action */}
      <motion.div 
        className="mt-16 md:mt-24 text-center border-t-4 border-amber-500/30 pt-12 md:pt-16 px-4" 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div 
          className="inline-flex flex-wrap md:flex-nowrap items-center justify-center space-x-4 md:space-x-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-black px-6 md:px-12 py-4 md:py-8 rounded-full shadow-2xl font-bold text-lg md:text-xl cursor-pointer border-2 md:border-4 border-amber-300/50" 
          style={{ fontFamily: "Times New Roman, serif" }} 
          whileHover={{ 
            scale: 1.08, 
            boxShadow: "0 0 60px rgba(245, 158, 11, 0.9)", 
            borderColor: "rgba(252, 211, 77, 0.8)" 
          }} 
          whileTap={{ scale: 0.95 }} 
          animate={{ 
            boxShadow: [
              "0 0 30px rgba(245, 158, 11, 0.5)", 
              "0 0 50px rgba(245, 158, 11, 0.7)", 
              "0 0 30px rgba(245, 158, 11, 0.5)"
            ] 
          }} 
          transition={{ 
            boxShadow: { 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            } 
          }}
        >
          <Feather className="w-6 h-6 md:w-8 md:h-8" />
          <span className="text-lg sm:text-xl md:text-2xl text-center">Embark on Your Literary Odyssey</span>
          <BookOpen className="w-6 h-6 md:w-8 md:h-8" />
        </motion.div>
        
        <motion.p 
          className="mt-6 md:mt-8 text-amber-400 text-base sm:text-lg md:text-xl italic border border-amber-500/30 rounded-2xl p-4 md:p-6 bg-amber-900/10 max-w-lg mx-auto" 
          style={{ fontFamily: "Times New Roman, serif" }} 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 1 }}
        >
          &ldquo;Every great story begins with a single word...&rdquo;
        </motion.p>
      </motion.div>

      {/* Animated floating elements - Only render on client */}
      {isClient && (
        <>
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {randomPositions.map((pos, i) => (
              <motion.div 
                key={i} 
                className="absolute" 
                style={{ 
                  left: `${pos.left}%`, 
                  top: `${pos.top}%` 
                }}
              >
                <motion.div 
                  className="w-4 h-4 bg-gradient-to-r from-amber-400/30 to-yellow-400/30 rounded-full border border-amber-500/20" 
                  animate={{ 
                    y: [-40, 40, -40], 
                    x: [-20, 20, -20], 
                    opacity: [0.2, 0.6, 0.2], 
                    scale: [0.5, 1.5, 0.5] 
                  }} 
                  transition={{ 
                    duration: pos.duration, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: pos.delay 
                  }} 
                />
              </motion.div>
            ))}
          </div>
          
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {emojiPositions.map((pos, i) => (
              <motion.div 
                key={i} 
                className="absolute text-4xl opacity-15" 
                style={{ 
                  left: `${pos.left}%`, 
                  top: `${pos.top}%` 
                }} 
                animate={{ 
                  y: [-50, 50, -50], 
                  rotate: [-15, 15, -15], 
                  opacity: [0.05, 0.2, 0.05] 
                }} 
                transition={{ 
                  duration: pos.duration, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: pos.delay 
                }}
              >
                {pos.emoji}
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ContactPage;