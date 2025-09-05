"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, Scroll, MenuIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { eventsData } from "@/app/data/events";

// Reusable component for dropdown list items with enhanced styling
const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={`group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-[#3d2b1f] hover:shadow-lg hover:shadow-amber-400/10 focus:bg-[#3d2b1f] border border-transparent hover:border-amber-400 ${className}`}
          {...props}
        >
          <div className="text-sm font-semibold leading-none text-amber-200 group-hover:text-amber-300 transition-colors duration-300 flex items-center">
            <Sparkles className="w-3 h-3 mr-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header: React.FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu

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

  const menuItems = [
    { title: "Home", href: "/", action: () => router.push("/") },
    { title: "About", href: "#", action: () => scrollToSection("about") },
    {
      title: "Events",
      href: "#",
      hasDropdown: true,
      action: () => scrollToSection("events"),
    },
    { title: "Schedule", href: "#", action: () => scrollToSection("schedule") },
    { title: "Contact", href: "#", action: () => scrollToSection("contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-amber-400/30 shadow-2xl shadow-amber-400/5"
    >
      {/* Golden glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-50"></div>

      <div className="container mx-auto flex items-center justify-between px-6 py-6 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 lg:space-x-3">
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: -5,
              filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.5))",
            }}
            transition={{ type: "spring", stiffness: 400 }}
            className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden ring-2 ring-amber-400/20 hover:ring-amber-400/40 transition-all duration-300"
          >
            <Image
              src="/logo.jpg"
              alt="Litlaya Logo"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent font-manuscript sm:block drop-shadow-sm"
          >
            Litlaya
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger
                      className="bg-transparent text-amber-200 hover:bg-[#3d2b1f] focus:bg-[#3d2b1f] hover:text-amber-300 focus:text-amber-300 text-base font-semibold transition-all duration-300 border border-transparent hover:border-amber-400 rounded-lg px-4 py-2"
                      onClick={() => item.action && item.action()}
                    >
                      <Scroll className="w-4 h-4 mr-2 text-amber-400" />
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent rounded-xl"></div>
                      <ul className="grid gap-4 p-8 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] bg-black/95 backdrop-blur-xl border-2 border-amber-400/20 rounded-xl shadow-2xl shadow-amber-400/10 relative overflow-hidden">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="group flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-amber-400/10 via-black/50 to-amber-500/5 p-6 no-underline outline-none transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/20 border border-amber-400/10 hover:border-amber-400/30 hover:scale-[1.02]"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("events");
                              }}
                            >
                              <Crown className="h-8 w-8 text-amber-400 mb-2 group-hover:text-amber-300 transition-colors duration-300 drop-shadow-lg" />
                              <div className="mb-3 mt-4 text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-300 bg-clip-text text-transparent">
                                Literary Events
                              </div>
                              <p className="text-sm leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                                Explore our competitions of wit and wisdom.
                                Journey through realms of literary excellence.
                              </p>
                              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Sparkles className="w-5 h-5 text-amber-400" />
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {eventsData.map((event, index) => (
                          <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <ListItem
                              href={`/events/${event.id}`}
                              title={event.title}
                            >
                              {event.subtitle}
                            </ListItem>
                          </motion.div>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        item.action && item.action();
                      }}
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-amber-200 hover:bg-[#3d2b1f] focus:bg-[#3d2b1f] hover:text-amber-300 focus:text-amber-300 text-base font-semibold transition-all duration-300 border border-transparent hover:border-amber-400 rounded-lg px-4 py-2`}
                    >
                      {item.title}
                    </a>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {/* Register Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="hidden sm:inline-flex bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:from-amber-300 hover:to-amber-400 transition-all duration-300 font-bold py-2 px-6 text-base rounded-lg shadow-lg shadow-amber-400/25 hover:shadow-xl hover:shadow-amber-400/40 border border-amber-400/20"
              variant="default"
              asChild
            >
              <Link
                href="https://conoscenza2025.stjosephstechnology.ac.in/registration/"
                target="_blank"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Register Now
              </Link>
            </Button>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-amber-400 hover:bg-[#3d2b1f] hover:text-amber-300 transition-all duration-300 rounded-lg border border-transparent hover:border-amber-400"
                >
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 backdrop-blur-xl text-slate-50 border-l-2 border-amber-400/30 w-[250px] sm:w-[300px] shadow-2xl shadow-amber-400/10 [&>button]:hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent"></div>
                <SheetHeader className="border-b border-amber-400/20 pb-4 mb-6 relative">
                  <SheetTitle className="text-amber-100 text-2xl font-bold font-manuscript flex items-center">
                    <div className="relative w-8 h-8 mr-3 rounded-md overflow-hidden ring-2 ring-amber-400/30">
                      <Image
                        src="/logo.jpg"
                        alt="Litlaya Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="bg-gradient-to-r from-amber-200 to-amber-300 bg-clip-text text-transparent">
                      Litlaya
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 relative">
                  {menuItems.map((item, index) =>
                    item.hasDropdown ? (
                      <motion.div
                        key={item.title}
                        className="flex flex-col"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span
                          className="flex items-center px-4 py-3 text-lg font-semibold text-amber-200 cursor-pointer hover:bg-[#3d2b1f] hover:text-amber-300 transition-all duration-300 rounded-lg border border-transparent hover:border-amber-400"
                          onClick={() => {
                            if (item.action) item.action();
                            setIsMobileMenuOpen(false); // Close menu on click
                          }}
                        >
                          <Scroll className="w-5 h-5 mr-3 text-amber-400" />
                          {item.title}
                        </span>
                        <div className="ml-5 flex flex-col space-y-1 mt-2 border-l-2 border-amber-400/30 pl-4">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection("events");
                              setIsMobileMenuOpen(false); // Close menu on click
                            }}
                            className="text-slate-300 hover:text-amber-300 transition-colors duration-300 text-base py-2 hover:bg-[#3d2b1f]/60 rounded-md px-2"
                          >
                            <Crown className="w-4 h-4 mr-2 inline text-amber-400" />
                            Overview
                          </a>
                          {eventsData.map((event) => (
                            <Link
                              key={event.id}
                              href={`/events/${event.id}`}
                              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                              className="text-slate-300 hover:text-amber-300 transition-colors duration-300 text-base py-2 hover:bg-[#3d2b1f]/60 rounded-md px-2"
                            >
                              <Sparkles className="w-3 h-3 mr-2 inline text-amber-400/70" />
                              {event.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Button
                          variant="ghost"
                          className="justify-start text-amber-200 hover:bg-[#3d2b1f] focus:bg-[#3d2b1f] hover:text-amber-300 focus:text-amber-300 text-lg font-semibold transition-all duration-300 rounded-lg border border-transparent hover:border-amber-400 w-full"
                          onClick={() => {
                            if (item.action) item.action();
                            setIsMobileMenuOpen(false); // Close menu on click
                          }}
                        >
                          {item.title}
                        </Button>
                      </motion.div>
                    )
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      className="mt-6 bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:from-amber-300 hover:to-amber-400 transition-all duration-300 font-bold text-lg rounded-lg shadow-lg shadow-amber-400/25 hover:shadow-xl hover:shadow-amber-400/40 border border-amber-400/20 w-full"
                      variant="default"
                      asChild
                    >
                      <Link
                        href="https://conoscenza2025.stjosephstechnology.ac.in/registration/"
                        target="_blank"
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Register Now
                      </Link>
                    </Button>
                  </motion.div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
