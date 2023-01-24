const colors = require('tailwindcss/colors');

module.exports = {
	purge: [
		'./src/**/*.vue',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.html',
		'./src/**/*.md',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'octo-color-text-normal': '#a9bbcb',
				'octo-color-text-heading': '#ffffff',
				'octo-color-text-muted': '#a9bbcb',
				'octo-color-primary': '#2f95e3',
				'octo-color-brand': '#2f95e3',
				'octo-background-grey': '#f9fafa',
				'text-primary': '#ffffff',
				'text-secondary': '#a9bbcb',
				'text-tertiary': '#7c98b4',
				'background-primary': '#0c1a24',
				'background-secondary': '#10212f',
				'background-tertiary': '#152b3d',
				'background-gradient-start': '#0b1f2e',
				'background-gradient-end': '#0c2436',
				'accent-primary': '#00ffa3',
				'accent-primary-focus': '#49ffbe',
				'accent-brand': '#0d80d8',
				'accent-brand-focus': '#3ca4f3',
				'accent-text': '#1fc0ff',
				'outline-primary': '#173045',
				'outline-secondary': '#19334b',
				'outline-gradient-start': '#3fa3ef',
				'outline-gradient-end': '#1d3b53',


				'primary' : '#c3910a',
				'secondary' : '#ce6933',
				

				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#020001',
				'secondary-dark': '#161514',
				'ternary-dark': '#1E3851',
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	variants: {
		extend: { opacity: ['disabled'] },
	},
	plugins: [require('@tailwindcss/forms')],
};
