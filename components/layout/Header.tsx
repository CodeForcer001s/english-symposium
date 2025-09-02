"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crown, Scroll } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Assuming shadcn/ui

// Reusable component for dropdown list items
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header: React.FC = () => {
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Events", href: "/events", hasDropdown: true },
    { title: "Schedule", href: "/schedule" },
    { title: "Contact", href: "/contact" },
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
        <a href="/" className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Crown className="w-8 h-8 text-amber-400" />
          </motion.div>
          <h1 className="text-3xl font-bold text-amber-100 font-manuscript">
            Litlaya
          </h1>
        </a>

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
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800 to-slate-900 p-6 no-underline outline-none focus:shadow-md transition-transform hover:-translate-y-1"
                              href="/events"
                            >
                              <Crown className="h-6 w-6 text-amber-400" />
                              <div className="mb-2 mt-4 text-lg font-medium text-amber-200">
                                Literary Events
                              </div>
                              <p className="text-sm leading-tight text-slate-400">
                                Explore our five magnificent literary
                                competitions of wit and wisdom.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/events/litwit" title="LITWIT">
                          A stimulating literature quiz with a modern twist.
                        </ListItem>
                        <ListItem href="/events/penman" title="PENMAN'S CODE">
                          Deduce authors and plots from cryptic clues.
                        </ListItem>
                        <ListItem href="/events/eloquentia" title="ELOQUENTIA">
                          An oratory challenge to test your public speaking
                          prowess.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-slate-300 hover:bg-slate-800/70 focus:bg-slate-800/70 text-base font-medium`}
                  >
                    {item.title}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Register Button */}
        <Button
          className="hidden sm:inline-flex bg-amber-400 text-slate-900 hover:bg-amber-300 transition-colors font-bold"
          variant="default"
          asChild
        >
          <a href="/register">Register Now</a>
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
