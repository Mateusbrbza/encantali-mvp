module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '920px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#88bf7a',
      },
      backgroundImage: {
        hero: "url('')",
      },
    },
  },
  plugins: [],
};