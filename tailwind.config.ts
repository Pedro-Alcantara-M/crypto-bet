import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        aglet: ["Aglet Sans"],
      },
      borderImageSource: {
        "border-gradient":
          "linear-gradient(99.93deg, #E90083 0%, #DE3449 100%)",
      },
      backgroundImage: {
        "radial-gradient-button":
          "radial-gradient(52.11% 100% at 52.11% 0%, #FF6864 0%, #E90083 100%)",
        "gradient-to-hover":
          "linear-gradient(129.59deg, #FF01B8 2.58%, #FF6865 95.56%)",
        "combined-pink-gradient":
          "linear-gradient(96.45deg, #E90083 19.95%, #FF6864 115.62%), " +
          "linear-gradient(91.16deg, rgba(255, 140, 184, 0.78) 1%, rgba(255, 148, 187, 0) 29.61%)",
        "blue-gradient":
          "linear-gradient(96.45deg, #34BDC6 19.95%, #299CDC 115.62%)",
        "black-gradient":
          "linear-gradient(96.45deg, #0D0B0C 19.95%, #1C1717 115.62%)",
      },
      boxShadow: {
        "green-light": "0px 2px 7px 0px #24D861",
        "red-light": "0px 2px 5px 0px #DE3449",
        "shadow-to-hover": "0px 8px 40.2px 1px #FF5DA147",
        "pink-box-shadow": "0px 11px 26.8px 0px #E900833D",
        "blue-box-shadow": "0px 11px 26.8px 0px #2CA5D612",
        "black-box-shadow": "0px 11px 26.8px 0px #2A1A2F4A",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover"],
      boxShadow: ["hover"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
