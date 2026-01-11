/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["Inter", "sans-serif"],
        work_sans: ["Work Sans", "sans-serif"],
      },
      colors: {
        hackathon: {
          primary: "#22577A",
          "blue-100": "#38A3A5",
          "green-100": "#E7F7E9",
          "green-300": "#57CC99",
          "gray-100": "#E7E7E7",
          "gray-200": "#9ea4af",
          "gray-300": "#525252",
          page: "#F5F5F5",
          status: {
            pending: "#FFCF55",
            accepted: "#80ED99",
            rejected: "#F07167",
          },
          table: {
            pending: "#FFF0BB",
            accepted: "#CFEDE9",
            rejected: "#FFE8E2",
            selected: "#E7F7E9",
          },
          calendar: {
            today: "#E7F7E9",
          },
          timer: {
            add: "#0E1729",
            clear: "#EF4444",
          },
          tags: {
            "red-bg": "#FFE9E2",
            "red-text": "#F07167",
            "yellow-bg": "#FFF0BC",
            "yellow-text": "#FFB81C",
            "green-bg": "#CFEDEA",
            "green-text": "#00AFB9",
            "gray-bg": "#E9E9E9",
            "gray-text": "#969696",
            "purple-bg": "#E6DFF6",
            "purple-text": "#825ED0",
            "grayblue-bg": "#D3DDE4",
            "grayblue-text": "#22577A",
            "teal-bg": "#D7EDED",
            "teal-text": "#38A3A5",
            "lightgreen-bg": "#DDF5EB",
            "lightgreen-text": "#57CC99",
            "pink-bg": "#FFE3FB",
            "pink-text": "#F583F1",
            white: "#fff",
          },
        },
        sidebar: {
          DEFAULT: "#22577A",
          foreground: "#F5F5F5",
          primary: "#38A3A5",
          "primary-foreground": "#F5F5F5",
          accent: "#FFCF55",
          "accent-foreground": "#22577A",
          border: "#E7E7E7",
          ring: "#FFCF55",
          "primary-foreground": "#F5F5F5",
          "accent-foreground": "#22577A",
        },
        landing: {
          "blue-100": "#9DE1FF",
          "orange-100": "#FFE0D2",
          "orange-200": "#C3A47E",
          "orange-300": "#A28561",
          "brown-100": "#603A18",
          "brown-200": "#77512E",
          "brown-300": "#654831",
          "brown-400": "#5B3E26",
          "beige-100": "#FBE8D5",
          "beige-200": "#F1D8BF",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "collapsible-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-collapsible-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "collapsible-up": {
          from: {
            height: "var(--radix-collapsible-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
