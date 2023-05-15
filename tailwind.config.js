/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        icon: "#0273F2",
        input: "#1E2847",
        btn: "#0079ff",
        btnHover: "#60abff",
      },
    },
  },
  plugins: [],
};
