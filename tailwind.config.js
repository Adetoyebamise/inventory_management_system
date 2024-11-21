/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'blue': '#2E3A6E',
      'hoverblue': '#2E3A6A',
      "paleblue": '#F5F7FA',
      "red": '#32a852',
      'yellow': '#a8a032',
      'purple': '#9d32a8',
      'gray' : '#bfbebb',
      'grayish' : '#576378'
    },
    extend: {},
  },
  plugins: [],
}
