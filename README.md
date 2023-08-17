# how to run app locally

`$ pnpm i`
`$ pnpm dev`

# installation package installation

https://prettier.io/docs/en/install

https://typicode.github.io/husky/getting-started.html
`$ pnpm add --save-dev --save-exact prettier`
`$ pnpm dlx husky-init && pnpm install`
`$ pnpm add -D lint-staged`
`$ npx husky add .husky/pre-commit "npx lint-staged"`
`$ npx husky add .husky/pre-push "pnpm build`
`$ npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`

`✖ pnpm run lint --fix --file src/app/page.tsx:
Failed to load config "prettier" to extend from.`
https://stackoverflow.com/a/61943206

Don't have any cypress related code in pack.json
npx cypress open
