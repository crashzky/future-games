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
				'red-1': '#D56E72',
				'blue-1': '#0D42FF',
				'purple-1': '#8A77CB',
				'green-1': '#4AA0BA',
				'pink-1': '#D56ECB',
				'yellow-1': '#CB8B77',
				'blue-2': '#0DA8FF',
				'red-2': '#BA4A4A',
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
