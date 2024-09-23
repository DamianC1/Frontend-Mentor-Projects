/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				pWhite: 'hsla(0, 0%, 100%, 0.75)',
				pCyan: 'hsl(184, 100%, 22%)',
				pDarkCyan: 'hsl(179, 100%, 13%)',
				pOrange: 'hsl(31, 77%, 52%)',
			},
			screens: {
				desktop: '1440px',
			},
			fontFamily: {
				pLex: ['Lexend Deca', 'sans-serif'],
				pBig: ['Big Shoulders Display', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
