/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			colors: {
				envisionlyBlue: '#191970',
				envisionlyTransparentBlue: 'rgba(25, 25, 112, 0.45)',
				envisionlyGold: '#daa520',
				envisionlyTransparentGold: 'rgba(218, 165, 32, 0.45)',
				envisionlyLightBlue: '#5a84cd'
			},
			aria: {
				current: 'current',
				selected: 'selected=true'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
