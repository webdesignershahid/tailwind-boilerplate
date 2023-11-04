/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        "*", 
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {    
        container: {
            center: true,
            padding: '2rem',
        },
        // Extend Tailwind CSS Default Breakpoints
        screens: {
            'sm': '576px', // => @media (min-width: 576px) { ... }

            'md': '768px', // => @media (min-width: 768px) { ... }

            'lg': '992px', // => @media (min-width: 992px) { ... }

            'xl': '1200px', // => @media (min-width: 1200px) { ... }

            '2xl': '1400px', // => @media (min-width: 1400px) { ... }

            '3xl': '1600px', // => @media (min-width: 1600px) { ... }

            '2k': '1920px', // => @media (min-width: 1920px) { ... }

            '4k': '3840px', // => @media (min-width: 3840px) { ... }
        },
        extend: {
            fontFamily: {
                sarabun: [
                    "Sarabun",
                ],
                poppins: [
                    "Poppins"
                ],
                fontAwesome: [ 
                    '"Font Awesome 5 Pro"'
                ]
            },
            colors: {
                'torchRed': 'var(--torchRed)',
                'cornBlue': 'var(--cornBlue)',
                'salmon': 'var(--salmon)',
                'olive': 'var(--olive)',
            },
            backgroundImage: {
                'sidebar_bg': "url('../media/sidebar-bg.jpg')",
                'page_bg': "url('../media/page-bg.png')",
            },
            animation: {
                rotating: 'rotating 10s infinite linear',
            },
            keyframes: {
                rotating: {
                    '0%' : { transform: 'rotate(0)' },
                    '100%' : {transform: 'rotate(360deg)' },
                },
            }
        },
    },
    plugins: [
        require("tw-elements/dist/plugin.cjs")
    ],
}

