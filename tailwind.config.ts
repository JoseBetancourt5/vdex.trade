import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark purple background with light gray text
        background: "hsl(251 50% 5%)",
        foreground: "hsl(251 5% 90%)",

        // Black card with light gray text
        card: {
          DEFAULT: "hsl(251 50% 0%)",
          foreground: "hsl(251 5% 90%)",
        },

        // Dark purple popover with light gray text
        popover: {
          DEFAULT: "hsl(251 50% 5%)",
          foreground: "hsl(251 5% 90%)",
        },

        // Medium purple primary with white text
        primary: {
          DEFAULT: "hsl(251 59.5% 53.5%)",
          foreground: "hsl(0 0% 100%)",
        },

        // Light lavender background with purple text for secondary actions
        secondary: {
          DEFAULT: "hsl(251 100% 95%)",
          foreground: "hsl(251 59.5% 53.5%)",
        },

        // Dark purple secondary with white text
        darkPurple: {
          DEFAULT: "hsl(251 30% 10%)",
          foreground: "hsl(0 0% 100%)",
        },

        // Dark blue-gray muted with medium gray text
        muted: {
          DEFAULT: "hsl(213 30% 15%)",
          foreground: "hsl(251 5% 60%)",
        },

        // Dark blue-gray accent with light gray text
        accent: {
          DEFAULT: "hsl(213 30% 15%)",
          foreground: "hsl(251 5% 90%)",
        },

        // Deep red destructive with light gray text
        destructive: {
          DEFAULT: "hsl(0 100% 30%)",
          foreground: "hsl(251 5% 90%)",
        },

        // Dark purple border and input
        border: "hsl(251 30% 18%)",
        input: "hsl(251 30% 18%)",

        // Medium purple ring/focus color
        ring: "hsl(251 59.5% 53.5%)",

        // Chart colors (keeping if needed)
        chart: {
          "1": "hsl(251 59.5% 53.5%)",
          "2": "hsl(213 30% 15%)",
          "3": "hsl(251 30% 10%)",
          "4": "hsl(251 50% 5%)",
          "5": "hsl(0 100% 30%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
