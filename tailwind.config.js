module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./modules/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        dark: "#5034A6",
        DEFAULT: "#7048E8",
        hover: "#5F3DC4",
      },
      accent: {
        DEFAULT: "#00A8E8",
        hover: "#0092C9",
      },
      warning: {
        DEFAULT: "#FF933B",
        hover: "#bb5400",
      },
      success: {
        DEFAULT: "#07B255",
        hover: "#039145",
      },
      error: {
        DEFAULT: "#FE544A",
        hover: "#ff3025",
      },
      dark: {
        DEFAULT: "#00171F",
        grey: "#5B6366",
      },
      grey: {
        DEFAULT: "#8D9A9E",
        hover: "#707070",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      transparent: "transparent",
    },
    boxShadow: {
      soft: "0px 4px 12px rgba(0, 0, 0, 0.02), 0px 2px 4px rgba(0, 0, 0, 0.04);",
      none: "none",
    },
    extend: {},
  },
  variants: {
    extend: {
      margin: ["first", "last", "odd", "even", "hover"],
    },
  },
  plugins: [],
};
