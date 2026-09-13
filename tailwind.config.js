/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // OenoHub.ge brand palette
        burgundy: {
          950: '#2A0710',
          900: '#3D0A18',
          800: '#4E0E22',
          700: '#6B1530',
          600: '#8A1E42',
        },
        'wine-glow': '#A62650',
        gold: {
          300: '#EBD48A',
          400: '#DDBC4E',
          500: '#C9A227',
          600: '#96791B',
          700: '#7A6114',
        },
        // Apple-like neutrals: white / #f5f5f7 / hairline
        cream: {
          50: '#FFFFFF',
          100: '#F5F5F7',
          200: '#E4E4E9',
        },
        // Apple text ramp: #1d1d1f / #6e6e73 / #86868b
        ink: {
          900: '#1D1D1F',
          600: '#6E6E73',
          400: '#86868B',
        },
        milk: '#FFFFFF',
        'vine-green': '#5A6B3F',
      },
      fontFamily: {
        serif: ['"Noto Serif Georgian"', 'Georgia', 'serif'],
        sans: ['"Noto Sans Georgian"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card-hover': '0 18px 40px -12px rgb(0 0 0 / 0.14)',
        'gold-glow': '0 0 24px rgb(201 162 39 / 0.35)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(10px)", opacity: "0.55" },
        },
        "badge-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgb(201 162 39 / 0.35)" },
          "50%": { boxShadow: "0 0 16px 2px rgb(201 162 39 / 0.28)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "scroll-bounce": "scroll-bounce 1.8s ease-in-out infinite",
        "badge-pulse": "badge-pulse 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
