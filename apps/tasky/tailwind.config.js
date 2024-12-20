// tailwind.config.js
module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        index:{
          50:'#E8F4E3',
          100: '#E8F3E8',
          150: '#E6FF94',
          200: '#40A578',
          250: '#006769',
          300: '#2C4A3E ',
        },
        about:{
          50: '#FFE3EF',
          100: '#E98D92',
          150: '#564146',
          200: '#000000',
        },
        gettingStarted:{
          50: '#FFE4DF',
          100: '#D00021',
          150: '#62000B',
          200: '#000000',
        },
        features:{
          50: '#FFECCC',
          100: '#DFA047',
          150: '#5F472F',
          200: '#000000'
        },
      },
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
};
