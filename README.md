![Imgur](https://i.imgur.com/5FJS5G0.png)

## What is Helix?

`Helix` is an opinionated `React` boilerplate which tries to keep config to a minimum while allowing you to configure what you need.

## What does it do?

- ⚙️ Minimal and accessible config
- ♻️ HMR (Hot Module Replacement) with Webpack 4
- 🤸‍ Code Splitting with `React.lazy`
- 👨‍💻️ TypeScript
- 📚 CSS Modules
- 📱 PWA ready
- 🏎 Pre-render HTML using `react-snap`

## Why Helix and not create-react-app?

`create-react-app` suits most, if not all, needs when it comes to bootstrapping `React` apps and has a massive community supporting it.<br />
`Helix` is something a lot more
niche, allowing power-users to tweak anything to their needs while
providing a simple and clean foundation.
<br />
<br />
Don&apos;t like CSS modules and want something else?
<br />
<strong>You can change it.</strong>

# Getting Started
## Config
Copy the sample `.env` file and create a `.env` of your own.
```
cp sample.env .env
```
### What do these ENV variables do?
None of these variables are required.<br />
If you don't want any of these features, simply exclude them from your `.env` file.<br />
- `PORT` allows you to run the webpack dev server on a specific port. If unset, the default port is 3000.
- `PUBLIC_URL` allows you to bundle the app if you're hosting it on a subroute.<br />Something like `https://yourwebsite.com/helix/` is a perfect case here. **Always** leave a trailing slash when setting this variable.<br />If you end up changing this remember to change the `publicPath` variable in the `package.json` file.
- `NODE_ENV` enables the Service Worker and allows you to skip installing devDependencies.
- `VERSION` allows you to visit `/health` in your React app to view the current version number.

## Installing dependencies
`Helix` works with either `npm` or `yarn`.
```
npm install
```
or
```
yarn install
```

## Development
This command starts up the `webpack-dev-server` and by default runs at `http://localhost:3000`.
```
npm start
```
or
```
yarn start
```

## Production
Preferably set `NODE_ENV` to `production` here if you're building for production. <br />
Once your app has been built, `react-snap` will automatically start up and pre-render HTML of your app.
```
npm run build
```
or
```
yarn build
```

## ESlint not doing much in VSCode?
Add this to your `settings.json` in VSCode.
```
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
]
```

# Contributors

- <strong>Owner/Maintainer</strong> - [fjlaubscher](https://github.com/fjlaubscher)

# Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the code of conduct, and the process for submitting pull requests.

# License

Helix is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE.md) file.


If you prefer using JavaScript / Styled Components over TypeScript / CSS modules, have a look at [Carbon](https://github.com/leadhomesa/carbon).<br />
It is a very similar boilerplate which I've developed for our React front-ends at [Leadhome](https://leadhome.co.za).
