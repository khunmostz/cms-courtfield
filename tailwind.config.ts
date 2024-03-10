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
        primary: "#FF9494",
        subprimary: "#FFD1D1",
        secondary: "#FFE3E1",
        subsecondary: "#FFF5E4"
      },
    },
  },
  plugins: [],
};
export default config;
