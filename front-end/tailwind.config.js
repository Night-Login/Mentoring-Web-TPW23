/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#F8F8F8",
          100: "#F1F1F1",
          300: "#D6D5D6",
          500: "#A4A4A4",
          700: "#7F7E7F",
          900: "#444344",
          1000: "#262526"
        },
        "green-1": {
          100: "#EAF3E6",
          300: "#C1DCB3",
          400: "#ADD199",
          500: "#98C580",
          600: "#7CA268",
          900: "#293721"
        }
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"], 
      }
    },
  },
  plugins: [],
}
