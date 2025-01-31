import type { Config } from "tailwindcss";
import { theme } from "./src/styles/theme";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    ...theme,
    extend: {
      animation: {
        marquee: 'marquee var(--duration, 30s) linear infinite'
      },
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;