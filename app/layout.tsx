"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <html lang="en" className={isDark ? "dark" : ""}>
      <head>
        <title>Litlaya - A Literary Symposium of Renaissance Grandeur</title>
        <meta
          name="description"
          content="Join us for Litlaya, a magnificent literary symposium featuring five competitive events celebrating the art of literature in Shakespearean style."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header toggleTheme={toggleTheme} isDark={isDark} />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
