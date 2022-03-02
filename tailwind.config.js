module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: {
            1: "#211E23",
          },
          gray: {
            1: "#6D6B6F",
            2: "#2F2B32",
          },
        },
      },
    },
  },
  plugins: [],
};
