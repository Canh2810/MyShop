import theme from './src/themes'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      primary: ['var(--work-sans-font)'],
      secondary: ['var(--source-serif-pro-font)'],
      tertiary: ['var(--plus-jakarta-sans-font)'],
      quaternary: ['var(--inter-font)'],
    },
    ...theme,
  },
  plugins: [],
}
