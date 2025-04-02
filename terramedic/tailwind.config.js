/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
import aspectRatioPlugin from '@tailwindcss/aspect-ratio';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'terra-blue': '#4682b5',
        'terra-green': '#76c268',
        'terra-dark-blue': '#2c3e50',
        'terra-dark-green': '#4e7a46'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Courier New', 'monospace']
      }
    }
  },
  plugins: [flowbitePlugin, aspectRatioPlugin],
  darkMode: false // Completely disable dark mode
};
