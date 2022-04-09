module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      text: "var(--color-text)",
      background: "var(--color-background)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
