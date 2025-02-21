/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx,njk}",
    "./src/_includes/**/*.{html,js,jsx,njk}",
    "./src/_layouts/**/*.{html,js,jsx,njk}"
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      fontFamily: {
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
        DmSans: ["DM Sans", "sans-serif"],
        GeneralSans: ["General Sans", "sans-serif"],
        Cabin: ["Cabin", "sans-serif"],
        PublicSans: ["Public Sans", "sans-serif"],
        Syne: ["Syne", "sans-serif"],
        ClashDisplay: ["Clash Display", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],
        Sora: ["Sora", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
        FontAwesome: ["Font Awesome 6 Pro"]
      },
      colors: {
        ColorDark: "#191919",
        ColorBlack: "#0A102F",
        ColorBlue: "#3147FF",
        ColorOffWhite: "#FAF9F5",
        ColorPurple: "#A259FF",
        ColorBluePurple: "#7949F6",
        ColorYellow: "#FFC900",
        ColorViolet: "#4B2AAD",
        ColorAtomicTangerine: "#FF9966",
        ColorLime: "#C1FF00",
        ColorLunarGreen: "#324438",
        ColorAlmond: "#EBDECE",
        ColorCorn: "#F4B905",
        ColorOil: "#221F1A",
        ColorPaleGold: "#FFD874",
        ColorEggSour: "#FFF4D9",
        ColorDenimDarkBlue: "#2D2B92",
        ColorCaribbeanGreen: "#15CF92",
        ColorMidnightMoss: "#010D09",
        ColorHoneySuckle: "#E9FF97",
        'aotu-red': {
          light: '#67e8f9',
          DEFAULT: '#FF0000',
          dark: '#0e7490',
        },
        'aotu-grey': {
          DEFAULT: '#21203C',
        },
      },
    },
  },
  plugins: [],
};
