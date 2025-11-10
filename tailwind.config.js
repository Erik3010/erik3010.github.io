module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui"],
      },
      minHeight: {
        card: "40px",
      },
      height: {
        hero: 640,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
