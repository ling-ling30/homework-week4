/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'translateY(58px)'}
        }
      }

    },
  },
  plugins: [],
  daisyui: {
    themes: [
      {
        mytheme: {
        


"primary": "#22D3EE",
        


"secondary": "#374151",
        


"accent": "#1fb2a6",
        


"neutral": "#CBD5E1",
        


"base-100": "#22D3EE",
        


"info": "#3abff8",
        


"success": "#36d399",
        


"warning": "#fbbd23",
        


"error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

