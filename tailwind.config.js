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
      animation: {
        shimmer: "shimmer 2s linear infinite",
        spotlight: "spotlight 2s ease .5s 1 forwards",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        spotlight: {
          "0%": { opacity: 0, transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: 1, transform: "translate(-50%,-40%) scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
