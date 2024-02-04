/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#323336",
        blackDark: "#161618",
        gray: "#6B6D6F",
        darkGray: "#595959",
        red: "#EA3946",
        lightGray: "#C2C2C2",
        darkBackground: "#242424",
        bgGray: "#EEEEEE",
        bgLightGray: "#FBFBFB",
      },
      width: {
        one: "1px",
        500: "500px",
      },
      height: {
        one: "1px",
        500: "500px",
        lg: "728px",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        poppins: ["var(--font-poppins)"],
        openSans: ["var(--font-openSans)"],
        weight: {
          light: 300,
          regular: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
        },
      },
      backgroundImage: {
        // serviceSectionCTA: "url('/assets/images/servicebtnbg.svg')",
        // serviceSectionBg: "url('/assets/images/servicesectionbg.svg')",
        // headlessServiceBg:
        //   "url('/assets/images/Headless-development-service-bg.png')",
        // careerSectionBg: "url('/assets/images/background-hiring.png')",
        aboutBanner: "url('/assets/images/about_pexels.png')",
        Vector: "url('/assets/images/Vector.svg')",
        growth: "url('/assets/images/leaves.png')",
        growthTab: "url('/assets/images/leaves.png')",
        growthDesktop: "url('/assets/images/leaves.png')",
      },
      boxShadow: {
        cbCard:
          "0px 12.52155px 10.01724px 0px rgba(114, 114, 114, 0.02), 0px 100px 80px 0px rgba(114, 114, 114, 0.04);",
      },
      borderWidth: {
        1: "1px",
      },
      keyframes: {
        fadeInAnimation: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeInAnimation: "fadeInAnimation 300ms ease 1 forwards",
      },
      maxHeight: {
        150: "479px",
      },
    },
  },

  plugins: [],
};
