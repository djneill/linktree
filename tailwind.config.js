module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    '.public/**/*.{html,js}',
    '.public/js/*.js',
    './index.html'
  ],
  keyframes: {
    wiggle: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    }
  }
  // ...
}
