/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Shakespearean theme colors
        parchment: {
          50: "#fefbf0",
          100: "#fcf4d9",
          200: "#f8e7b3",
          300: "#f3d682",
          400: "#ecc14f",
          500: "#e6af2e",
          600: "#d19625",
          700: "#ae7620",
          800: "#8d5e20",
          900: "#744e1e",
        },
        burgundy: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f7a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#c1297a",
          700: "#9d174d",
          800: "#831843",
          900: "#7c2d42",
        },
        renaissance: {
          gold: "#D4AF37",
          burgundy: "#800020",
          forest: "#355E3B",
          cream: "#F5F5DC",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "quill-write": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        flicker: "flicker 2s ease-in-out infinite",
        "quill-write": "quill-write 3s ease-in-out infinite",
      },
      fontFamily: {
        shakespeare: ["Cinzel", "serif"],
        manuscript: ["UnifrakturCook", "cursive"],
      },
      backgroundImage: {
        parchment:
          'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f5f5dc" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
        "scroll-texture":
          "linear-gradient(45deg, #f5f5dc 0%, #f0f0e6 25%, #f5f5dc 50%, #f0f0e6 75%, #f5f5dc 100%)",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
