const { backgroundOpacity } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: [
  'public/index.html', 
  'public/**/*.html', 
  'public/*.html', 
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {        
        sans: ["'Montserrat'", ...defaultTheme.fontFamily.sans],
         
        },

colors:{
 
  // Site Blue
blues:{
  DEFAULT: '#3b5999',
}, 
  // Site Twitter
  twitter:{
  DEFAULT: '#55acee',
},
 
  // Site Green
primary:{
  DEFAULT: '#016c38',
},

 // Site Red
secondary:{
  DEFAULT: '#e4405f',
}


},
 
 

boxShadow:{
'1':'rgba(0, 0, 0, 0.24) 0 3px 8px;',
'2': 'rgba(0, 0, 0, 0.35) 0 5px 15px',
'3': 'rgba(0, 0, 0, 0.4) 0 30px 90px',
'4': 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
'5': 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
'6': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
 
},

},

    screens: {
      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }    

     
  },



  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'a, button, input, textarea, select':{
transition: 'all 0.35s ease-in-out'
        },

'.menu' :{
  '@screen md':{
    display: 'flex !important'
               },
  
'& li.active > .menu-item':{
  borderColor: theme('borderColor.white'),
  },

  '& .dropdown':{    
    '@screen md':{
      
      '& > .dropdown-menu':{
        display:'none'
      },
      '&.show > .dropdown-menu':{
        display:'block'
      },

    '&:hover':{
    '& > .menu-item' :{ 
      borderColor: theme('borderColor.white'),
      '--tw-bg-opacity': theme('backgroundOpacity.5')
    },
    
    '& > .dropdown-menu':{
      display:'block'
    },
  }
  } 
}

},

'.wellfund ':{
'& .wellfund-bg':{
  transition: 'all 0.35s ease-in-out',
},

'&:hover .wellfund-bg':{
  backgroundColor: theme('backgroundColor.primary.DEFAULT'),
},

},
'.wellfundf ':{
'& .wellfundf-bg':{
  transition: 'all 0.35s ease-in-out',
},

'&:hover .wellfundf-bg':{
  backgroundColor: theme('backgroundColor.blues.DEFAULT'),
},

},

'.gl-thumb':{
  '& span':{
  transition: 'all 0.35s ease-in-out',
  },
  '&:hover span':{
    opacity: theme('opacity.100'),
    '--tw-scale-x': theme('scale.100'),
    '--tw-scale-y': theme('scale.100'),
  },
},
 
 
        '.donate-amount' : {
          '& input[type=radio]:checked + span':{
            borderColor: theme('borderColor.secondary.DEFAULT'),
            color: theme('colors.secondary.DEFAULT'),
          },
        }
      })
    }),
  require('@tailwindcss/typography'),
  require('@tailwindcss/line-clamp'),
  require('@tailwindcss/forms'),
  ],
}
