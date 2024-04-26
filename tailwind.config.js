/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                "dark": {
                    50: '#363636',
                    100: "#111111",
                    200: "#151515",
                    900: "#040404",
                },
                "green-n": {
                    300: "#1cb561"
                },
                "orange-n": {
                    100: "#f8993e"
                },
                "font": {
                    100: "#cbc8c0"
                }
            },
        },
        fontSize: {
            'small': '.7rem',
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

