module.exports = {
	// npx tailwindcss -i ./src/assets/css/inputs_styles.css -o ./public/css/outputs_styles.css --minify --watch
	content: ["./src/**/*.{html,js}", "./*.{html,js}"],
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			cwhite: "#FAFAFA",
			cblack: "#002037",
			cgray: {
				100: "#60606013",
				800: "#60606097",
				900: "#606060"
			},
			cgreen: "#009C98",
			cyellow: "#FFCE00"
		}
	},
	plugins: []
};
