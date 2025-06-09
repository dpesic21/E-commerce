/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // ako koristiš Vite, index.html u root folderu
    "./src/**/*.{js,jsx,ts,tsx}"  // svi JS/TS fajlovi u src folderu
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
