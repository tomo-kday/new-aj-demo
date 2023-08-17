/* eslint-disable no-unused-vars */
import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
	component: {
		devServer: {
			framework: "next",
			bundler: "webpack",
			webpackConfig: {
				resolve: {
					alias: {
						"@components": path.resolve(__dirname, "./components"),
					},
				},
			},
		},
	},

	e2e: {
		supportFile: false,
		defaultCommandTimeout: 10000,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
