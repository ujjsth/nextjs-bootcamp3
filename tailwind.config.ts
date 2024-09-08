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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "my-theme-primary-color" : "#5c4d4d",
        "my-theme-secondary-color" : "#5c4d40",
      },
      fontFamily: {
        "my-theme-title-font" : "Robot",
        "my-theme-text-font" : "Lato",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
