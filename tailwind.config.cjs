/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: '#252525',
                light: '#EFF5F5',
                darkLight: '#3B3B3B'
            }
        },
    },
    plugins: [],
}
