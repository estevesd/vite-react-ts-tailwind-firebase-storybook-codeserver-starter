
module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    minWidth: {
      '40': '10rem',
      '60': '15rem',
      '80': '20rem',
      '100': '25rem',
    },
    maxWidth: {
      '120': '30rem',
      '160': '40rem',
      '200': '50rem',
    }
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'emerald',
      {
        nord: {
          "primary": "#5e81ac",
          "secondary": "#81a1c1",
          "accent": "#8fbcbb",
          "neutral": "#3b4252",
          "base-100": "#2e3440",
          "info": "#88c0d0",
          "success": "#a3be8c",
          "warning": "#ebcb8b",
          "error": "#bf616a",
        },
      }
    ],
  }
}
