import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ["Helvetica", "Arial", "sans-serif"],
		},
		extend: {
			colors: {
				"hackrpi-primary-blue": "#74b7ef",
				"hackrpi-primary-dark-green": "#264e33",
				"hackrpi-primary-light-green": "#88b63a",
				"hackrpi-secondary-grey": "#efefef",
				"hackrpi-secondary-light-blue": "#4a6277",
				"hackrpi-secondary-dark-blue": "#27303b",
				"hackrpi-secondary-dark-green": "#27303b",
				"hackrpi-secondary-light-green": "#6d8740",
				"hackrpi-secondary-yellow": "#edd559",
			},
			screens: {
				desktop: "860px",
				xs: "475px",
				"2xs": "375px",
			},
		},
	},
	daisyui: {
		themes: [
			{
				hackrpi: {
					primary: "#74b7ef",
					secondary: "#88b63a",
					accent: "#edd559",
					neutral: "#efefef",
					"base-100": "#27303b",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};

export default config;
