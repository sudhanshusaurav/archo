module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light' : '#f8f4f3',
        'primary' : '#b19777',
        'primary-dark': '#191514',
        'gray' : '#252531',
        'white-smoke' : '#f7f7f7',
        'secondary' : '#02050b'
      },

      fontFamily : {
        teko : ['Teko', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      },
    },
  },
  plugins: [],
}
