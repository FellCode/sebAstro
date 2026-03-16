/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // <- WICHTIG!
  ],
  theme: {
    extend: {
      colors: {
        brand: "#83cea5",
        surface: "#d4ffe7",
        "text-heading": "#555",
        "text-muted": "#666",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        Open_Sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], // z.B. mehrere Themes
  }
}
