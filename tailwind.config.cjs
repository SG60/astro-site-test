module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.text"),
            "--tw-prose-invert-body": theme("colors.text"),
          },
        },
      }),
      colors: ({ colors }) => ({
        text: "var(--color-text)",
        background: "var(--color-background)",
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
