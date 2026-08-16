import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#3C0A64",
          700: "#55148B",
          500: "#7A22B8",
          100: "#F1E6FA",
        },
        accent: {
          600: "#E85D1F",
          500: "#F4762D",
          300: "#FFA05C",
          100: "#FFEFE2",
        },
        bg: "#F7F9FB",
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#14213D",
          muted: "#5B6B82",
        },
        success: "#1E8E5A",
        warning: "#D9822B",
        danger: "#C0392B",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Sora", "Poppins", "sans-serif"],
        body: ["var(--font-body)", "Inter", "Public Sans", "sans-serif"],
      },
      borderRadius: {
        md: "10px",
        lg: "18px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(10,38,71,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
