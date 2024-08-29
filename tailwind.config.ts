import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
        sashaoluu: ['Sashaoluu', 'sans-serif']
      },
      textShadow: {
        'glow': '-2px -4px 5px  rgba(221, 0, 255, 0.5), 2px -4px 5px  rgba(47, 0, 255, 0.5), -4px 2px 5px  rgba(255, 255, 0, 0.5), 2px 4px 5px  rgba(0, 255, 0, 0.5);',
      },
      colors: {
        'custom-purple': '#3f5efb',
        'custom-pink': '#fc466b',
        'custom-yellow': '#fcfc6b',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
export default config;
