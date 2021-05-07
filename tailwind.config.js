const colors = require('tailwindcss/colors')
const createCustomColor = (theme) => ({
  primary: {
    normal: colors.blue[600],
    hover: colors.blue[500]
  },
  secondary: {
    normal: colors.trueGray[300],
    hover: '#CCCCCC80'
  },
  danger: {
    normal: colors.red[600],
    hover: colors.red[500]
  },
  warning: {
    normal: '#D09F36',
    hover: '#D8AA47'
  },
  success: {
    normal: colors.green[700],
    hover: colors.green[600]
  }
})
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: createCustomColor,
      borderColor: (theme) => ({
        primary: {
          normal: colors.blue[900],
          hover: colors.blue[800]
        },
        secondary: {
          normal: colors.trueGray[400],
          hover: '#A3A3A380'
        },
        danger: {
          normal: colors.red[700],
          hover: colors.red[600]
        },
        warning: {
          normal: '#9C7728',
          hover: '#AE8B41'
        },
        success: {
          normal: colors.green[900],
          hover: colors.green[800]
        }
      }),
      backgroundColor: createCustomColor,
      textColor: (theme) => ({
        primary: {
          normal: '#FFFFFF',
          hover: '#FFFFFF'
        },
        secondary: {
          normal: colors.coolGray[900],
          hover: colors.coolGray[800]
        },
        danger: {
          normal: '#FFFFFF',
          hover: '#FFFFFF'
        },
        warning: {
          normal: '#FFFFF',
          hover: '#FFFFFF'
        },
        success: {
          normal: '#FFFFFF',
          hover: '#FFFFFF'
        },
        disabled: colors.coolGray[400]
      })
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      opacity: ['disabled']
    }
  },
  plugins: []
}
