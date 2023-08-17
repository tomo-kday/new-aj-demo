const path = require("path");

const buildEslintCommand = (filenames) => [
	`pnpm run lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(" --file ")}`,
	`pnpm exec prettier . --write ${filenames.join(" ")}`,
];

module.exports = {
	"*.{js,jsx,ts,tsx}": [buildEslintCommand],
	// this will Format MarkDown and JSON
	"**/*.(md|json)": (filenames) =>
		`pnpm exec prettier . --write ${filenames.join(" ")}`,
};
