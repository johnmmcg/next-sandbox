/** @type {import('tailwindcss').Config} */
module.exports = {
    experimental: {
        optimizeUniversalDefaults: true,
      },
      darkMode: 'class',

      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "node_modules/@daisyui/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
      extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'), 
        require("daisyui")
    ],
    daisyui: {
      styled: true,
      themes: ["light", "dark"],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
  }
  