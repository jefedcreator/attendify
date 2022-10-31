module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        cta:"red",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/prezent.png')",
        overlay:
          " linear-gradient(168.53deg, rgba(234, 255, 254, 0.04) 0%, rgba(201, 229, 241, 0.04) 97.46%)",
        footer:
          " linear-gradient(0deg, #090414 0%, rgba(20, 8, 46, 0) 143.14%)",
        navbar:
          "linear-gradient(101.24deg, rgba(45, 51, 71, 0.9) -1.38%, rgba(45, 51, 71, 0) 105.06%)",
        card: "linear-gradient(117.29deg, rgba(234, 255, 254, 0.08) 2.63%, rgba(234, 255, 254, 0) 100%);",
        cta: " linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.056) 100%);",
      },
      fontFamily: {
        jarkata: ["Plus Jakarta Sans", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      spacing: {
        "25rem": "25rem",
        "41rem": "41rem",
        "50rem": "50rem",
        "41%": "41%",
        "42%": "42%",
      },
      maxWidth: {
        "1/2": "50%",
      },
      lineHeight: {
        "custom-leading": "72px",
        "custom-height": "66px",
        "sm-height": "45px",
        "sm-small":"40px"
      },
      fontSize: {
        "7xl": "60px",
        small: "30px",
        smallx:"34px",
        minimal: "16px",
        "hero-text": "66px",
      },
    },
  },
  plugins: [],
};
