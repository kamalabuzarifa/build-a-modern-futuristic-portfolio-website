import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#06070f",
          900: "#0a0d1a",
          800: "#11152a"
        },
        neon: {
          cyan: "rgb(var(--color-neon-cyan) / <alpha-value>)",
          blue: "rgb(var(--color-neon-blue) / <alpha-value>)",
          pink: "#ff3ee5"
        }
      },
      boxShadow: {
        neon: "0 0 25px rgb(var(--color-neon-cyan) / 0.35)",
        glass: "0 8px 40px rgba(4, 8, 20, 0.45)"
      },
      backdropBlur: {
        xs: "2px"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 8px rgb(var(--color-neon-cyan) / 0.25)" },
          "50%": { boxShadow: "0 0 26px rgb(var(--color-neon-cyan) / 0.6)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
