/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				DarkGrayishViolet: 'hsl(279, 6%, 55%)',
				Lightgrayishviolet: 'hsl(270, 3%, 87%)',
				VeryDarkViolet: 'hsl(278, 68%, 11%)',
			},
			fontFamily: {
				pMainFont: ['Space Grotesk', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
