/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                headline: ["brothers", ...defaultTheme.fontFamily.sans],
                subheadline: ["roc-grotesk-wide", ...defaultTheme.fontFamily.sans],
            },
            letterSpacing: {
                widest: ".25em",
                super: ".5em",
                xsuper: ".75em",
            },
            fontSize: {
                xxs: ".625rem",
                tiny: ".5rem",
                "7xl": "5rem",
                "8xl": "6rem",
                "9xl": "7rem",
                "10xl": "8rem",
            },
            colors: {
                black: "#14121B",
                white: "#a26b39",
            },
        },
    },
    plugins: [],
};
