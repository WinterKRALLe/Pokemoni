/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 40s linear infinite',
				'counterclockwisespin-slow': 'counterclockwisespin 50s linear infinite',
			},
			keyframes: {
				counterclockwisespin: {
					'from': {
						transform: 'rotate(0deg)'
					},
					'to': {
						transform: 'rotate(-360deg)'
					},
				}
			}
		},
	},
	plugins: [],
}
