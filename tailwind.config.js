/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // <- WICHTIG!
  ],
  theme: {
    extend: {
      fontFamily: {
        Open_Sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], // z.B. mehrere Themes
  }
}