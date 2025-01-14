/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    // './error.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
