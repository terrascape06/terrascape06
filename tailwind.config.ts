import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'terra-sand': '#F3E5D8',
        'terra-gold': '#C5A065',
        'terra-brown': '#4A3C31',
        'terra-white': '#FAF9F6',
      },
    },
  },
  plugins: [],
};
export default config;
