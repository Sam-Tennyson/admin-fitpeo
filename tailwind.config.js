//** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				
			},
			colors: {
				"primary-blue": "#040440",
				"light-blue": "#8d93b1",
				"lighter-blue": "#2d2d69",
				"main-body-content": "#f5f6f8",
			},
			screens: {
				'xs': '425px', // You can define your custom breakpoints
			},
		},
	},
	plugins: [],
})
