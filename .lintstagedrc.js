const path = require("path");

const buildEslintCommand = (filenames) => [
	`yarn lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(" --file ")}`,
	`yarn run prettier . --write ${filenames.join(" ")}`,
];

module.exports = {
	"*.{js,jsx,ts,tsx}": [buildEslintCommand],
	// this will Format MarkDown and JSON
	"**/*.(md|json)": (filenames) =>
		`yarn run prettier . --write ${filenames.join(" ")}`,
};
