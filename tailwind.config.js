module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: {
            1: "#211E23",
            2: "#18151A",
          },
          gray: {
            1: "#6D6B6F",
            2: "#2F2B32",
          },
          blue: {
            1: "#1488CC",
            2: "#2B32B2",
          },
        },
      },
    },
    fontFamily: {
      grotesk: "'Space Grotesk', sans-serif",
    },
  },
  plugins: [],
};
