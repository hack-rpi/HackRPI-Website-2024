import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
				"subway-red": "#ef3a42",
				"subway-blue": "#0058a9",
				"subway-green": "#00a65c",
				"subway-yellow": "#f8a13a",
				"subway-purple": "#b43c96",
				gold: "#ffd700",
				silver: "#C0C0C0",
				bronze: "#cd7f32",
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
	plugins: [
		require("daisyui"),
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				".description-box": {
					overflow: "hidden",
					display: "-webkit-box",
					"-webkit-box-orient": "vertical",
					"-webkit-line-clamp": "2",
					"text-overflow": "ellipsis",
				},
			};
			addUtilities(newUtilities);
		}),
	],
};

export default config;
