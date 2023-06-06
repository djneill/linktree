module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    '.public/*.{html,js}',
    './public/js/main.js',
    './public/cs/style.css',
    './public/index.html',
    './*.{html,js}'
  ],
  keyframes: {
    wiggle: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    }
  }
  // ...
}
