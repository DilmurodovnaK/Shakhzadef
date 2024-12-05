import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     screens: {
      '2xl': {'max': '1485px'},
      'xl': {'max': '1186px'},
      'lg': {'max': '950px'},
      'md': {'max': '790px'},
      'nb': {'max': '706px'},
      'sm': {'max': '654px'},
      'ms' : {'max': '480px'},
      'mm': {'max': '390px'},

    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
