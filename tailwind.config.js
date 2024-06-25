// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'total-screen': '100vh',
        'half-screen': '50vh',
        'quarter-screen': '25vh',
      },
      blur: {
        'custom': '1.5px',
      },
      colors: {
        primary: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(26, 100%, 70%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        blackWithOpacity: 'hsl(0, 0%, 0, 0.75)',
      },
      zIndex: {
        '1000': '1000',
      },
      backgroundColor: {
        'black-80': 'rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}
