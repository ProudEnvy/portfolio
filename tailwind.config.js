module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "335px",
      },
      colors: {
        transparent: "transparent",
        bgColor: "#1f1f38",
        bgVariant: "#2c2c6c",
        primary: "#4db5ff",
        primaryVariant: "#4db5ff66",
        light: "#ffffff99",

        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        lightBlue: "#001b24B3",
        midBlue: "#428bcaB3",
        greenBlueIsh: "#00d4ffB3",
      },
    },
  },
  plugins: [],
};
