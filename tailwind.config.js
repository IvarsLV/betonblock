/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // Без отступов по умолчанию
        sm: "2rem", // 32px
        md: "4rem", // 64px
        lg: "5rem", // 80px (как у тебя было)
        xl: "6rem", // 96px
        "2xl": "8rem", // 128px
      },
      margin: "0",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontSize: {
        h1: "52px",
        h2: "40px",
        h3: "32px",
        p: "18px",
        button: "16px",
      },
      lineHeight: {
        normal: "1.5",
        relaxed: "1.6",
      },
      colors: {
        background: "#FFFFFF",
        textPrimary: "#0C0C0C",
        accent: "#E67819",
        hoverAccent: "#EE8B34",
        secondary: "#0C0C0C",
        hoverSecondary: "#3E3D3D",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'open-menu': 'openMenu 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        openMenu: {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      aspectRatio: {
        'square': '1 / 1',
        '4/3': '4 / 3',
        '16/9': '16 / 9',
      },
      transitionDuration: {
        '300': '300ms',
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};