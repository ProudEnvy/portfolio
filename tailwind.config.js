module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      patterns: {
        opacities: {
          100: "1",
          80: ".80",
          60: ".60",
          40: ".40",
          20: ".20",
          10: ".10",
          5: ".05",
        },
        sizes: {
          1: "0.25rem",
          2: "0.5rem",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
        },
      },
      screens: {
        xxs: "335px",
      },
      colors: {
        transparent: "transparent",
        bgColor: "#1a1a1a",
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
  plugins: [require("tailwindcss-bg-patterns")],
};
