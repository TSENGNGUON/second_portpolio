/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        "bg-dark": "rgb(15,23,42)",
        "line": "#D1DAED",
        "notselected":"#5F6E85",
        "btn":"#122B39"
      },
      colors: {
        "portfolio":"#D1DAED",
        "normal":"#8699BB",
        "nohover":"#475569",
        "pright" : "#63718A",
        "titlebtn": "#5EEAD4"
      }
    },
  },
  plugins: [],
}

