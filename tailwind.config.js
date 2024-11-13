/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px", // => @media (min-width: 480px) { ... }
        sm: "640px", // => @media (min-width: 640px) { ... }
        md: "768px", // => @media (min-width: 768px) { ... }
        lg: "1024px", // => @media (min-width: 1024px) { ... }
        xl: "1280px", // => @media (min-width: 1280px) { ... }
        "2xl": "1536px", // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #000000 40%, #598eff 160%)",
        "custom-gradient-2":
          "linear-gradient(to bottom, #598eff 20%, #000000 60%)",
      },
      boxShadow: {
        "3d": "0 4px 6px rgba(255, 255, 255, 0.2), 0 10px 20px rgba(255, 255, 255, 0.15), 0 15px 30px rgba(255, 255, 255, 0.1)",
        fancy:
          "0 4px 8px rgba(89, 142, 255, 0.3), 0 8px 15px rgba(89, 142, 255, 0.15)",
      },
      colors: {
        "button-blue-start": "#598eff",
        "button-blue-end": "#85a9ff",
      },
    },
  },
  plugins: [],
};
