/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'plans': 'repeat(auto-fit, minmax(232px, 1fr))',
      },
      colors: {
        velocityYellow: {
          500: '#F9CD03'
        },
        velocityBlue: {
          500: '#0C13A2'
        },
        velocityWhite: {
          100: '#f9f9f9'
        },
        velocityDark: {
          500: '#171717',
        },
        velocityWhatsApp: {
          500: '#00bb2d',
        },
        gray: {
          100: '#e4e4e4',
          200: '#c4c4cc',
          300: '#8d8d99',
          500: '#323238',
        }
      },
      backgroundImage: {
        'Tv-Carousel': 'url(\'/tv.png\')',
        'InfoImage': 'url(\'https://velocitynet.com.br/wp-content/uploads/2022/01/cta_bg-1.jpg\')'
      }
    },
  },
  plugins: [],
}
