module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
		'./shared/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				'md': '700px',
			},
			fontFamily: {
				'benzin': '\'benzin\'',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
