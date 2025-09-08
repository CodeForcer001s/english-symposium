// app/fonts.ts

import localFont from "next/font/local";

// Define your local font
export const lodeh = localFont({
  src: "./Lodeh.ttf",
  display: "swap",
  variable: "--font-lodeh", // This is a CSS variable we can use anywhere
});
