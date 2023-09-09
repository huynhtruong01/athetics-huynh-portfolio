/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: '#252525',
                light: '#EFF5F5',
                darkLight: '#3B3B3B',
            },
        },
        screens: {
            '2xl': {
                max: '1535px',
            },
            xl: {
                max: '1279px',
            },
            lg: {
                max: '1023px',
            },
            md: {
                max: '767px',
            },
            sm: {
                max: '639px',
            },
            xs: {
                max: '479px',
            },
        },
    },
    plugins: [],
}
