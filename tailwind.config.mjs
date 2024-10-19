/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { utopiaClamp } = require("./src/utils/utopiaClamp.ts");

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
                h1: utopiaClamp(60, 120),
                h2: utopiaClamp(40, 80),
                body: utopiaClamp(14, 16),
            },
            colors: {
                black: "#14121B",
                white: "#a26b39",
            },
        },
    },
    plugins: [],
};
