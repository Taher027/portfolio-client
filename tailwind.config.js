/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#ff9f00",
					secondary: "#0099e4",
					accent: "#bcbcbc",
					neural: "#fff",
					"base-100": "#1f1f1f",
				},
			},
		],
	},
	theme: {
		extend: {},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};
