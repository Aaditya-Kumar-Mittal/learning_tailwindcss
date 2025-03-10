/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      fourkt: "400px",
      fivekt: "500px",
      sixkt: "600px",
      sevenkt: "700px",
      eightkt: "800px",
      ninekt: "900px",
      tenkt: "1000px",
      elevenkt: "1100px",
      twelvekt: "1200px",
    },
    // padding: {
    //   21: "5.25rem",
    //   22: "5.5rem",
    //   23: "5.75rem",
    //   24: "6rem",
    //   25: "6.25rem",
    //   26: "6.5rem",
    //   27: "6.75rem",
    //   28: "7rem",
    //   29: "7.25rem",
    //   30: "7.5rem",
    // },
    // height: {
    //   30: "300px",
    //   40: "400px",
    //   50: "500px",
    //   60: "600px",
    //   70: "700px",
    //   80: "800px",
    //   90: "900px",
    //   100: "1000px",
    // },
    extend: {
      fontFamily: {
        sigmar: ["Sigmar"],
      },
    },
  },
  plugins: [],
};
