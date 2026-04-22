import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        campaignNavy: "var(--campaign-navy)",
        campaignGold: "var(--campaign-gold)",
        campaignLight: "var(--campaign-light)",
        campaignInk: "var(--campaign-ink)",
        campaignAccent: "var(--campaign-accent)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        input: "var(--input)",
        background: "var(--background)",
        ring: "var(--ring)"
      }
    }
  },
  plugins: []
};

export default config;