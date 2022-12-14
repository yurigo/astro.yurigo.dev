/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Quicksand"', "sans-serif"],
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui')
	],
	// darkMode: 'class',
	daisyui: {
		themes: [
			'night',
			'winter'
		]

	}
}
