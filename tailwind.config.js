module.exports = {
  purge: [
    "*/**/*.html"
  ],
  darkMode: 'class', // false || 'media' || 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      colors : {
        'cornflower':'#1e75bb',
        'sneaky-blue':'#0e2b49',
        'social-email':'#6567A5',
        'social-facebook':'#3b5998',
        'social-instagram':'#517fa4',
        'social-pinterest':'#cb2027',
        'social-twitter':'#00aced',
      },
      fontFamily: {
        // 'orelega': ['"Orelega One"', 'cursive']
        'raleway': ['"Raleway"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ]
}
