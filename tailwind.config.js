/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/images/desktop/image-header.jpg')",
      },
    },
  },
  plugins: [],
};
