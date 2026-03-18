/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        konig: {
          primary: 'var(--konig-primary)',
          secondary: 'var(--konig-secondary)',
          accent: 'var(--konig-accent)',
          background: 'var(--konig-background)',
          foreground: 'var(--konig-foreground)',
        },
      },
      backgroundImage: {
        'konig-gradient': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};