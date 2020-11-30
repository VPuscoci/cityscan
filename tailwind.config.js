module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    fontSize: {
      xxs: '0.75rem', // 12px
      xs: '0.875rem', // 14px
      sm: '0.9375rem', // 15px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.375rem', // 22px
      '2xl': '2rem', // 32px
    },
    fontFamily: {
      sans: ['"Open Sans"', 'Arial', 'sans-serif'],
    },
    colors: {
      white: '#eeeeee',
      black: '#333333',
      'green-0': '#2A9D8F',
      'green-1': '#1E7167',
      'light-green': '#8BBD8B',
      yellow: '#E9C46A',
      'orange-0': '#f4a261',
      'orange-1': '#e76f51',
      'dark-green': '#264653',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
