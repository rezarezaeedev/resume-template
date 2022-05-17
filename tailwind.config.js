module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontWeight: {
      'extralight':100,
      'light':200,
      'normal':400,
      'semibold':600,
      'bold':700,
      'bolder':900,
    },
    extend: {
      colors:{
        'rezablack':'#343A40',
        'rezawhite':'#F0F0F0',
        'rezaprimary':'#FFAF40',
        'rezasecondary':'#7B2CFF'
      },
       fontFamily:{
         'pop':['Poppins', 'system-ui', 'sans-serif']
       },
       
    }
  },
  plugins: [],
}