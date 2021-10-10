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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
