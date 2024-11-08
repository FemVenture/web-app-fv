/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C404B",
        secondary: "#FBADA7",
        background: "#FFFFFF",
        textPrimary: "#121212",
        textSecondary: "#898989",
        light: "#DCDEDD",
      },
    },
  },
  plugins: [],
};
