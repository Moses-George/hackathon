/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "3rem",
      screens: {
        lg: "1280px",
        xl: "1280px",
        "2xl": "1280px"
      }
    },
    screens: {
      'sm': {'min': '320px', 'max': '639px'},
      'md': {'min': '640px', 'max': '968px'},
      'lg': {'max': '1280px'},
      'xl': {'max': '1280px'},
      '2xl': {'max': '1280px'},
    },
    extend: {
      fontFamily: {
        "Montserrat": ['Montserrat', 'Ubuntu']
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#150E28",
        peach: "#FF29B9",
        purple: "#903AFF",
        "heading-text": "#D434FE",
        bgColor: "#150E28",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}