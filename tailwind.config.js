/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                "style-script": ['"Style Script"', "cursive"],
            },
        },
    },
    plugins: [],
};