/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F6F8FF",
        dark: "#141C30",
        primary: "#4B6A9B",
        alt: "#68778f",
        icon: "#0273F2",
        input: "#1E2847",
        btn: "#0079ff",
        btnHover: "#60abff",
        darkAlt: "#C6C9D1",
        darkContainer: "#141C2F",
      },
    },
  },
  plugins: [],
};
