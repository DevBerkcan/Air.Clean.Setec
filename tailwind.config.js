/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#77B8E4',
          200: '#55A7DD',
          300: '#55A7DD',
          400: '#449EDA',
          500: '#3395D7',
          600: '#298CCE',
          700: '#257fbb',
          800: '#2274AA',
          900: '#1E6899',
        },
      },
    },
  },
  plugins: [],
}
