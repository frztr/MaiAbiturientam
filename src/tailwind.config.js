/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "*.{js,jsx,ts,tsx}",
    "**/*.{js,jsx,ts,tsx}",
    "**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Roboto",
      serif: "Roboto",
    },
    extend: {
      colors: {
        blue: "#0094D9",
        "blue-300": "#0094D9E6",
        "blue-200": "#0094D999",
        "blue-100": "#0094D94C",
        "blue-0": "#0094D900",
        black: "#080B16",
        "black-300": "#10162D",
        "black-250": "#10162D80",
        "black-200": "#10162D4C",
        "black-50": "#00000040",
        lightblue: "#D6F2FF",
        "lightblue-300": "#EBF9FF",
        "lightblue-250": "#EBF9FF80",
        "lightblue-50": "#D6F2FF40",
        white: "#FFFFFF",
        "white-200": "#FFFFFF99",
        "white-0": "#FFFFFF00",
      },
    },
    screens: {
      "1.5xl": { max: "1400px" },
      xl: { max: "1280px" },
      md: { max: "1024px" },
      mins: { min: "768px" },
      s: { max: "768px" },
      "minxs": { min: "512px" },
      "xs": { max: "512px" },
      "minxxs": { min: "500px" },
      "xxs": { max: "500px" },
      "xxxs": { max: "300px" },
    },
  },
  plugins: [],
};
