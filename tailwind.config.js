module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl-max": { max: "1535px" },
      "xl-max": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "lg-max": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "mid-max": { max: "900px" },

      "md-max": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "sm-max": { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      boxShadow: {
        Myshadow:
          "inset 0 -3em 3em rgba(0,0,0,0.1),0 0  0 2px rgb(255,255,255),0.3em 0.3em 1em rgba(0,0,0,0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
