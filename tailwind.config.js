module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "bg-first": "url('./assets/images/img_bg_1.jpeg')",
        "bg-second": "url('./assets/images/architecture-839362_640.jpeg')",
        "bg-third": "url('./assets/images/architecture-2083687_640.jpeg')",
        "bg-fourth": "url('./assets/images/building-1727807_1280.jpeg')"
      }),
      spacing: {
        '160': '40rem',
        '161':'44rem'
      },
    },
    height: {
      sc:'800px',
      sc2:'900px',
      sc_img:'500px',
      sc_img2:'400px',
      sc_ab:'560px',
      sc_imgs:'327px',
      sc_tables: '609px',
      sc_test:'718px',
      sc_cont:'462px',
      sc_footer:'142px',
     },
     
     fontSize:{
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
     },

     colors: {
      'primary': '#8EADAB',
      'secondary': '#333232',
      'white':'#ffffff',
      'black': '#000000',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
