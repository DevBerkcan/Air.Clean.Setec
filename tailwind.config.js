/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-green-400',
    'bg-blue-400',
    'bg-orange-400',
    'bg-red-400',
    'bg-indigo-400',
    'bg-gray-400',
  ]
}
