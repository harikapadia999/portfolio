import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      black: {
        DEFAULT: "#000",
        100: "#000319",
        200: "rgba(17, 25, 40, 0.75)",
        300: "rgba(255, 255, 255, 0.125)",
      },
    },
  },
  plugins: [],
};
export default config;
