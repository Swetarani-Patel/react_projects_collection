/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumseagreen: {
          "100": "#3bb85e",
          "200": "#02ab6c",
          "300": "rgba(2, 171, 108, 0.04)",
          "400": "rgba(2, 171, 108, 0.01)",
          "500": "rgba(2, 171, 108, 0.16)",
          "600": "rgba(2, 171, 108, 0.67)",
          "700": "rgba(59, 184, 94, 0.24)",
        },
        gray: {
          "100": "#fafafa",
          "200": "#8b8b8b",
          "300": "#2c2c2c",
          "400": "#181818",
          "500": "rgba(255, 255, 255, 0.84)",
          "600": "rgba(0, 0, 0, 0.67)",
          "700": "rgba(0, 0, 0, 0.48)",
        },
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#d9d9d9",
        },
        dimgray: "#5c5c5c",
        black: "#000",
        whitesmoke: "#ebebeb",
        tomato: {
          "100": "#e03021",
          "200": "rgba(224, 48, 33, 0.24)",
        },
        firebrick: "rgba(171, 2, 2, 0.67)",
        gold: {
          "100": "#ffc400",
          "200": "rgba(255, 196, 0, 0.24)",
        },
        darkslateblue: "#544b8d",
        cornflowerblue: "#7c95ea",
      },
      spacing: {},
      fontFamily: {
        helveticaneue: "HelveticaNeue",
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "26xl": "45px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      mini: "15px",
      sm: "14px",
      "3xs": "10px",
      base: "16px",
      "5xs": "8px",
      "2xs": "11px",
      "4xs": "9px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
