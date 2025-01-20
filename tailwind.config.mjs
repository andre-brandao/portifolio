/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
    themes: [
      "bumblebee",
      {
        dark: { ...require("daisyui/src/theming/themes")["dim"] },

        // dark: { ...require("daisyui/src/theming/themes")["halloween"] },
      },
    ],
  },
};
