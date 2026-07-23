/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                ivory: "#FAF6F4",
                charcoal: "#211D1B",
                rose: {
                    DEFAULT: "#A8677A",
                    dark: "#8B5266",
                    light: "#D9B8C4",
                },
                gold: "#B99A5B",
                cream: "#F0E7DE",
            },
            fontFamily: {
                display: ['"Cormorant Garamond"', "serif"],
                body: ['"Jost"', "sans-serif"],
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
            animation: {
                marquee: "marquee 30s linear infinite",
            },
        },
    },
    plugins: [],
};