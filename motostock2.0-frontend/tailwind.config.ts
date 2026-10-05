import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1326",
        panel: "#131b2e",
        elevated: "#1b2438",
        line: "#28334a",
        muted: "#9aa7c2",
        accent: "#ef2b32",
        cyan: "#68c8f2",
        amber: "#ffbd59",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(239, 43, 50, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
