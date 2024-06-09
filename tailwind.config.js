/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg1-scale": "url('/bg1-scaled.jpg')",
        "bg2-connect": "url('/connect-banner.jpg')",
        "bg-gradient": "linear-gradient(45deg, #bc0d2c, #e65f1e)",
        "bg-detail":
          "linear-gradient(92.53deg, #B7042C 29.73%, #E8641B 97.09%)",
        "bg-job": "linear-gradient(92.53deg, #c63449 29.73%, #e7743d 97.09%)",
        "bg-nav": "linear-gradient(138.62deg, #BC0D2C 7.45%, #E65F1E 85.72%)",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        white: "#ffffff",
        primary: "#c62128",
        pragraph: "#707070",
        plus: "#f0f0f0",
        second: "#cb2a27",
        "fill-color": "wheat",
        "fill-transparent": {
          "-webkit-text-fill-color": "transparent",
          "-webkit-background-clip": "text",
        },
      },
      boxShadow: {
        2: "0px 4px 25px rgba(0, 0, 0, 0.25)",
        3: "0px 4px 30px rgba(235, 114, 87, 0.27)",
        4: "0 4px 8px rgba(0, 0, 0, 0.1)",
        5: "0 4px 8px rgba(0, 0, 0, 0.2)",
        nav_bar:
          "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
        submit:
          "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
      },
      transitionHover: "transform 0.2s, box-shadow 0.2s",
      textColor: ["group-hover"],
      backgroundColor: ["group-hover"],
      borderStyle: "2px solid #E65F1D",
      screens: {
        "max-md": { max: "768px" }, // Custom max breakpoint
      },
    },
  },
  plugins: [],
};
