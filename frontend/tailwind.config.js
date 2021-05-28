module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        'top': '0 -5px -5px -5px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  variants: {
    extend: {
      rotate: ['active', 'group-hover'],
    },
  },
  plugins: [],
}