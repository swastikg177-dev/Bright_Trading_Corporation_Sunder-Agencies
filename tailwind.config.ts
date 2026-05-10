import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        ring: "hsl(var(--ring))",
        surface: "hsl(var(--surface))",
        electric: {
          blue: "#1D9BFF",
          cyan: "#5EF2FF",
          ink: "#060B16",
          gray: "#B6C0D4",
        },
      },
      fontFamily: {
        sans: ["Inter", "var(--font-geist-sans)", "sans-serif"],
        display: ["Poppins", "Inter", "var(--font-geist-sans)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(94, 242, 255, 0.12), 0 24px 80px rgba(29, 155, 255, 0.20)",
        glass: "0 16px 60px rgba(6, 11, 22, 0.12)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(94,242,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(94,242,255,0.08) 1px, transparent 1px)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3.2s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
