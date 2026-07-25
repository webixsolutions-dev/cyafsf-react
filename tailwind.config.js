/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // CYAFSF brand tokens — from the concept doc's visual identity table
        navy: { DEFAULT: '#143B4A', deep: '#0E2C38' },
        teal: { DEFAULT: '#168C87', light: '#E4F3F2' },
        coral: { DEFAULT: '#F06A5B', dark: '#D5533F' },
        gold: '#F3B544',
        cream: '#F6F2E9',
        ink: '#24343B',
      },
      fontFamily: {
        display: ['"Atkinson Hyperlegible"', 'Arial', 'Helvetica', 'sans-serif'],
        body: ['"Atkinson Hyperlegible"', 'Arial', 'Helvetica', 'sans-serif'],
      },
      borderRadius: {
        md: '14px',
        lg: '28px',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
