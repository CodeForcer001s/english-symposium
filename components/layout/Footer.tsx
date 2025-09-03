"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Scroll,
  Feather,
  Facebook,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-gradient-to-t from-renaissance-burgundy to-renaissance-burgundy/90 text-parchment-50 relative overflow-hidden">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-renaissance-gold to-transparent"></div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Crown className="w-8 h-8 text-renaissance-gold candlelight-flicker" />
              <h3 className="manuscript-font text-3xl font-bold">Litlaya</h3>
            </div>
            <p className="text-parchment-200 leading-relaxed mb-4">
              <span className="illuminated-cap">A</span>
              celebration of literary excellence, where minds converge in the
              spirit of Shakespeare eternal wisdom. Join us in this grand
              symposium of words, wit, and wonder.
            </p>
            <div className="flex items-center space-x-2 text-renaissance-gold">
              <Scroll className="w-4 h-4" />
              <span className="text-sm">College English Department</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-renaissance-gold mb-4 flex items-center">
              <Feather className="w-4 h-4 mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-parchment-200">
              {["Home", "Events", "Speakers", "Schedule", "Register"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="hover:text-renaissance-gold transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold text-renaissance-gold mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="wax-seal flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-parchment-100" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-renaissance-gold/30 mt-8 pt-8 text-center text-parchment-300">
          <p className="text-sm">
            © 2024 Litlaya Symposium. All rights reserved. |
            <span className="italic ml-1">
              &quot;All the world s a stage, and all the men and women merely players &quot;
            </span>
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <Crown className="w-20 h-20 text-renaissance-gold animate-pulse" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <Scroll className="w-16 h-16 text-renaissance-gold animate-pulse" />
      </div>
    </footer>
  );
};

export default Footer;
