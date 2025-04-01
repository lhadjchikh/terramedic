/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'terra-blue': '#4682b5',
        'terra-green': '#76c268',
        'terra-dark': '#2c3e50',
        'terra-light': '#ecf0f1',
      },
      fontFamily: {
        sans: ['Open Snas', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'), // Add this line

  ],
  darkMode: 'class'
}