/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "460px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
        xl: "0rem",
      },
      screens: {
        lg: "1110px",
      },
    },
    extend: {
      colors: {
        primary: "hsl(22, 65%, 57%)",
        secondary: "hsl(0, 0%, 6%)",
        "light-100": "hsl(0, 0%, 100%)",
        "light-300": "hsl(0, 0%, 95%)",
        "light-200": "hsl(0, 0%, 98%)",
        "light-400": "hsl(21, 94%, 75%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
      },
      height: {
        160: "160px",
        120: "120px",
        96: "96px",
      },
      backgroundImage: {
        heroHome: 'url("/public/assets/home/mobile/image-header.jpg")',
      },
    },
  },
  plugins: [],
};
