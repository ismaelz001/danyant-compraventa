import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "subtle-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" }
        }
      },
      animation: {
        "subtle-zoom": "subtle-zoom 20s linear infinite alternate"
      }
    }
  },
  plugins: []
} satisfies Config;
