# NOTE: Project is archived.

I've jumped ship and started using [snowpack](https://snowpack.dev) which solves the same problem and is much simpler to use.

![Imgur](https://i.imgur.com/5FJS5G0.png)

## What is Helix?

`Helix` is an opinionated `React` boilerplate which tries to keep config to a minimum while allowing you to configure what you need.

## What does it do?

- ⚙️ Minimal and accessible config
- ♻️ React Refresh (HMR)
- 🤸‍ Code Splitting with `React.lazy`
- 👨‍💻️ TypeScript
- 📚 SCSS
- 📱 PWA ready

## Why Helix and not create-react-app?

`create-react-app` suits most, if not all, needs when it comes to bootstrapping `React` apps and has a massive community supporting it.<br />
`Helix` is something a lot more
niche, allowing power-users to tweak anything to their needs while
providing a simple and clean foundation.
<br />
<br />
Don&apos;t like SCSS and want something else?
<br />
<strong>You can change it.</strong>

# Getting Started

## TLDR;

```
npx degit fjlaubscher/helix my-app
cd my-app
cp sample.env .env
npm install
npm start
```

Alternatively you could clone this repo or click the "Use this template" button on github.

## Config
Copy the sample `.env` file and create a `.env` of your own.
```
cp sample.env .env
```
### What do these ENV variables do?
None of these variables are required.<br />
If you don't want any of these features, simply exclude them from your `.env` file.<br />
- `PORT` allows you to run the webpack dev server on a specific port. If unset, the default port is 3000.
- `PUBLIC_URL` allows you to bundle the app if you're hosting it on a subroute.<br />Something like `https://yourwebsite.com/helix/` is a perfect case here. **Always** leave a trailing slash when setting this variable.<br />
- `NODE_ENV` enables the Service Worker and allows you to skip installing devDependencies.
- `VERSION` allows you to visit `/health` in your React app to view the current version number.

## Installing dependencies
`Helix` works with either `npm` or `yarn`.
```
npm install
```

## Development
This command starts up the `webpack-dev-server` and by default runs at `http://localhost:3000`.
```
npm start
```

## Production
Preferably set `NODE_ENV` to `production` here if you're building for production. <br />
```
npm run build
```

# Contributors

- <strong>Owner/Maintainer</strong> - [fjlaubscher](https://github.com/fjlaubscher)

# Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the code of conduct, and the process for submitting pull requests.

# License

Helix is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE.md) file.
