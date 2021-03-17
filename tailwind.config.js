module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
      fontSize: {
        '3xs': '0.6rem',
        '2xs': '0.7rem',
        'xs': '0.8rem',
      },

      height: theme =>  ({
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-2/3': '66vh',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
      }),
      minHeight: {
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-2/3': '66vh',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
        '160' : '40rem',
        '176' : '44rem',
        '192' : '48rem',
        '208' : '52rem',
        '224' : '56rem',
        '240' : '60rem',
        '256' : '64rem',
        '272' : '68rem',
        '288' : '72rem',
        '304' : '76rem',
        '320' : '80rem',
        '334' : '84rem',
        '348' : '88rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
