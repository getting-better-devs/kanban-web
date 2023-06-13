/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          purple: {
            100: "#A8A4FF",
            200: "#635FC7",
          },
          dark: {
            500: "#3E3F4E",
            700: "#2B2C37",
            800: "#20212C",
            900: "#000112",
          },
          grey: {
            50: "#F4F7FD",
            200: "#E4EBFA",
            900: "#828FA3",
          },
          red: {
            700: "#FF9898",
            900: "#EA5555",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)"],
      },
    },
  },
  plugins: [],
};
