const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "media",
  theme: {
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      75: 75,
      100: 100,
      auto: "auto",
    },

    listStyleTypes: {
      square: "square",
      roman: "upper-roman",
      disc: "disc",
    },

    extend: {
      colors: {
        primary: "#3FAFB1",
        
      },
      opacity: ["disabled"],
      animation: {
        wiggle: "wiggle 2.5s linear forwards",
        "spin-slow": "spin 3s linear infinite",
        "ping-once": "ping 1s normal forwards ease-in-out",
        "pulse-once": "pulse 1s normal forwards ease-in-out",
        "grow-shrink": "grow 1s normal forwards ease-in-out",
        "custom-ping": "custom_ping 2s infinite forwards ease-in-out",
        "shake": "shake .5s normal forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 80%, 100%": { transform: "rotate(0deg)" },
          "85%": { transform: "rotate(5deg)" },
          "95%": { transform: "rotate(-5deg)" },
        },
        grow: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        custom_ping: {
          "0%": { transform: "scale(0.1, 0.1)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "scale(1.2,1.2)", opacity: "0" },
        },
        shake: {
          "0%": { transform: "translate(4px, 0px)" },
          "10%": { transform: "translate(-2px, 0px)" },
          "20%": { transform: "translate(2px, 0px)" },
          "30%": { transform: "translate(-4px, 0px)" },
          "40%": { transform: "translate(2px, 0px)" },
          "50%": { transform: "translate(-2px, 0px)" },
          "60%": { transform: "translate(4px, 0px)" },
          "70%": { transform: "translate(-2px, 0px)" },
          "80%": { transform: "translate(2px, 0px)" },
          "90%": { transform: "translate(-4px, 0px)" },
          "100%": { transform: "translate(2px, 0px)" }
        }
      },
      transitionDuration: {
        0: "0ms",
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
        1100: "1100ms",
        1200: "1200ms",
        1300: "1300ms",
        1400: "1400ms",
        1500: "1500ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require('@tailwindcss/aspect-ratio'),
  ],
};
