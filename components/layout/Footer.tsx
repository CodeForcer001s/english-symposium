"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Crown,
  Scroll,
  Feather,
  Instagram,
  Sparkles,
  Heart,
} from "lucide-react";

const Footer: React.FC = () => {
  const router = useRouter();

  // Function to handle section navigation
  const scrollToSection = (sectionId: string) => {
    // First navigate to home page if not already there
    if (window.location.pathname !== "/") {
      router.push("/");
      // Need to wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      // Already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navigationLinks = [
    { title: "Home", action: () => router.push("/") },
    { title: "About", action: () => scrollToSection("about") },
    { title: "Events", action: () => scrollToSection("events") },
    { title: "Schedule", action: () => scrollToSection("schedule") },
    { title: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <footer className="bg-black border-t-2 border-amber-400/30 text-white relative overflow-hidden">
      {/* Decorative golden glow border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent shadow-lg shadow-amber-400/20"></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-amber-500/5"></div>

      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.6))",
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Crown className="w-8 h-8 text-amber-400" />
              </motion.div>
              <h3 className="font-manuscripts text-4xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent">
                Litlaya
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 text-base">
              A celebration of literary excellence, where minds converge in the
              spirit of Shakespeare's eternal wisdom. Join us in this grand
              symposium of words, wit, and wonder.
            </p>
            <motion.div
              className="flex items-center space-x-3 text-amber-300 bg-gradient-to-r from-amber-400/10 to-transparent p-3 rounded-lg border border-amber-400/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Scroll className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium">Department of English</span>
              <Sparkles className="w-4 h-4 text-amber-400/70" />
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-amber-300 mb-6 flex items-center text-lg">
              <Feather className="w-5 h-5 mr-2 text-amber-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => item.action()}
                    className="group text-slate-300 hover:text-amber-200 transition-all duration-300 text-sm font-medium flex items-center hover:translate-x-1"
                  >
                    <span className="w-1 h-1 bg-amber-400/50 rounded-full mr-3 group-hover:bg-amber-400 group-hover:scale-150 transition-all duration-300"></span>
                    {item.title}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-amber-300 mb-6 text-lg">Connect</h4>
            <motion.a
              href="https://www.instagram.com/litlaya_2k25?igsh=MWExY2FoYnVhc2V2Ng=="
              className="group inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/10 to-amber-500/5 border-2 border-amber-400/20 hover:border-amber-400/50 hover:from-amber-400/20 hover:to-amber-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-400/20"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6 text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
            </motion.a>
            <p className="text-slate-400 text-xs mt-3">Follow us for updates</p>
          </motion.div>
        </div>

        {/* Developed By Section */}
        <motion.div
          className="border-t border-amber-400/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 text-slate-400">
            <span className="text-sm">Developed with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-amber-400 fill-current" />
            </motion.div>
            <span className="text-sm">by</span>
            <motion.a
              href="https://github.com/johnwesley755"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-amber-300 font-bold text-sm transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10 underline decoration-amber-400 underline-offset-4 group-hover:text-amber-200">
                John Wesley
              </span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-amber-400/70 group-hover:h-[4px] transition-all duration-300 rounded-full"></span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10 right-10 opacity-5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Crown className="w-20 h-20 text-amber-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 opacity-5"
        animate={{
          rotate: [360, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Scroll className="w-16 h-16 text-amber-400" />
      </motion.div>

      {/* Additional decorative sparkles */}
      <motion.div
        className="absolute top-1/4 left-1/4 opacity-10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        <Sparkles className="w-8 h-8 text-amber-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/3 opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1.5,
        }}
      >
        <Sparkles className="w-6 h-6 text-amber-400" />
      </motion.div>
    </footer>
  );
};

export default Footer;
