const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        fontFamily: {
            'albert': ['Albert Sans', 'sans-serif'],
        },
        extend: {
            colors: {
                background: '#0f0e17',
                main: 'white',
                primary: '#2cb67d',
                secondary: '#7f5af0'
            },
        },
    },

    plugins: []
};

module.exports = config;