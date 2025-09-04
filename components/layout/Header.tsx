"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, Scroll, MenuIcon } from "lucide-react";
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

// Reusable component for dropdown list items
const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-slate-200">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-400">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header: React.FC = () => {
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/#about" },
    { title: "Events", href: "/events", hasDropdown: true },
    { title: "Schedule", href: "/#schedule" },
    { title: "Contact", href: "/#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-lg border-b border-amber-400/20 shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 lg:space-x-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="relative w-10 h-10 lg:w-12 lg:h-12"
          >
            <Image
              src="/logo.jpg"
              alt="Litlaya Logo"
              fill
              className="object-contain"
            />
          </motion.div>
          <h1 className="text-2xl lg:text-3xl font-bold text-amber-200 font-manuscript sm:block">
            Litlaya
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:bg-slate-800/70 focus:bg-slate-800/70 text-base font-medium">
                      <Scroll className="w-4 h-4 mr-2" />
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] bg-slate-900 border border-amber-400/10">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800 to-slate-900 p-6 no-underline outline-none focus:shadow-md transition-transform hover:-translate-y-1"
                              href="/#events"
                            >
                              <Crown className="h-6 w-6 text-amber-400" />
                              <div className="mb-2 mt-4 text-lg font-medium text-amber-200">
                                Literary Events
                              </div>
                              <p className="text-sm leading-tight text-slate-400">
                                Explore our competitions of wit and wisdom.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {eventsData.map((event) => (
                          <ListItem 
                            key={event.id}
                            href={`/events/${event.id}`} 
                            title={event.title}
                          >
                            {event.subtitle}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-slate-300 hover:bg-slate-800/70 focus:bg-slate-800/70 text-base font-medium`}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {/* Register Button */}
          <Button
            className="hidden sm:inline-flex bg-amber-400 text-slate-900 hover:bg-amber-300 transition-colors font-bold py-2 px-4 text-base"
            variant="default"
            asChild
          >
            <Link
              href="https://conoscenza2025.stjosephstechnology.ac.in/registration/"
              target="_blank"
            >
              Register Now
            </Link>
          </Button>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-amber-400 hover:bg-slate-800"
                >
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-slate-950 text-slate-50 border-l border-amber-400/20 w-[250px] sm:w-[300px]"
              >
                <SheetHeader className="border-b border-amber-400/10 pb-4 mb-6">
                  <SheetTitle className="text-amber-100 text-2xl font-bold font-manuscript flex items-center">
                    <div className="relative w-8 h-8 mr-2">
                      <Image
                        src="/logo.jpg"
                        alt="Litlaya Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    Litlaya
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) =>
                    item.hasDropdown ? (
                      <div key={item.title} className="flex flex-col">
                        <span className="flex items-center px-4 py-2 text-lg font-medium text-slate-300">
                          <Scroll className="w-5 h-5 mr-2" />
                          {item.title}
                        </span>
                        <div className="ml-5 flex flex-col space-y-1 mt-1 border-l border-amber-400/20 pl-4">
                          <Link
                            href="/#events"
                            className="text-slate-400 hover:text-amber-200 transition-colors text-base py-2"
                          >
                            Overview
                          </Link>
                          {eventsData.map((event) => (
                            <Link
                              key={event.id}
                              href={`/events/${event.id}`}
                              className="text-slate-400 hover:text-amber-200 transition-colors text-base py-2"
                            >
                              {event.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Button
                        asChild
                        variant="ghost"
                        key={item.title}
                        className="justify-start text-slate-300 hover:bg-slate-800/70 focus:bg-slate-800/70 text-lg font-medium"
                      >
                        <Link href={item.href}>{item.title}</Link>
                      </Button>
                    )
                  )}
                  <Button
                    className="mt-6 bg-amber-400 text-slate-900 hover:bg-amber-300 transition-colors font-bold text-lg"
                    variant="default"
                    asChild
                  >
                    <Link href="https://conoscenza2025.stjosephstechnology.ac.in/registration/" target="_blank">
                      Register Now
                    </Link>
                  </Button>
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
