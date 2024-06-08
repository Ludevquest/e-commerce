// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        blackWithOpacity: 'hsl(0, 0%, 0, 0.75)',
      },
    },
  },
  plugins: [],
}
