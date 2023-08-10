const path = require('path');

const buildEslintCommand = (filenames) => [
	`pnpm lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`,
	`pnpm prettier --write ${filenames.join(' ')}`,
];

module.exports = {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
	// this will Format MarkDown and JSON
	'**/*.(md|json)': (filenames) =>
		`pnpm prettier --write ${filenames.join(' ')}`,
};