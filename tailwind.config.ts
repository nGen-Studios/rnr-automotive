import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#F70D0D",
        primary: "#959494",
      },
      screens: {
        desktop: { max: "1600px" },
        laptop: { max: "1440px" },
        tablet: { max: "1100px" },
        mobile: { max: "640px" },
      },
    },
  },
  plugins: [],
};
export default config;
