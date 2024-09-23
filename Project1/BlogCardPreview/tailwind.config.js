/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				myShadow: '0.5rem 0.5rem black',
			},
			fontFamily: {
				projectFont: ['Figtree', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
