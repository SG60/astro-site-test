function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

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
        text: withOpacityValue("--color-text"),
        background: withOpacityValue("--color-background"),
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
