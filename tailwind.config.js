/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--q-primary)',
                secondary: 'var(--q-secondary)',
                buttonBg: 'var(--button-bg)',
                buttonText: 'var(--button-text)',
            },
        },
    },
    plugins: [],
}
