const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bc-night": "#050914",
        "bc-surface": "#0b1629",
        "bc-cyan": "#00eaff",
        "bc-lime": "#5cfb94",
        "bc-amber": "#f2b84b",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "radial-horizon": "radial-gradient(circle at top, rgba(0, 234, 255, 0.15), transparent 70%)",
        "grid-overlay": "linear-gradient(transparent 96%, rgba(0, 234, 255, 0.12) 98%)",
      },
      boxShadow: {
        glow: "0 0 45px rgba(0, 234, 255, 0.35)",
        "glow-cyan": "0 0 45px rgba(0, 234, 255, 0.35)",
        "glow-lime": "0 0 35px rgba(92, 251, 148, 0.25)",
      },
      keyframes: {
        pulseGlow: {
          "0%": { opacity: 0.55, transform: "scale(0.98)" },
          "100%": { opacity: 1, transform: "scale(1.02)" },
        },
        float: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        panScan: {
          "0%": { transform: "translateY(-60%)" },
          "100%": { transform: "translateY(60%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 6s ease-in-out infinite alternate",
        float: "float 12s ease-in-out infinite",
        "scan-slow": "panScan 18s linear infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};