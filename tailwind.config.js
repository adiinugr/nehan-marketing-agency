/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-first": "#3B50DF",
        "color-second": "#FF5771",
        "color-third": "#FDB400",
        "color-bg": "#F4F7FC",
        "color-text-primary": "#01005D",
        "color-text-secondary": "#6B85B0",
        "color-gray": "#CDCDCD",
        "color-light-gray": "#E3E5FA"
      }
    }
  },
  plugins: []
}
