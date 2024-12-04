
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myPink:"#F98585",
        myBlack:"#21243D",
        recentBackgroung:"#F4E2E2",
        Footerbackground:"#e9d3d3",
        FeaturedWorkBackgrounmd:"#e1d3d3",
        heroElipse:"#dfd8d8",
        background: "#e7c8c8",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
