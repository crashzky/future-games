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
			width: {
				'px-700': '700px',
				'fit': 'fit-content',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			colors: {
				'custom-blue': '#2C5EF6',
			},
		},
		scale: {
			'0': '0',
			'50': '.5',
			'60': '.6',
			'70': '.7',
			'75': '.75',
			'90': '.9',
			'100': '1',
			'125': '1.25',
			'150': '1.5',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
