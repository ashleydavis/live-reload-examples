# 7-frontend-with-webpack

This the simplest possible example of a frontend bundled with [Webpack](https://webpack.js.org/). Webpack is a little tricky to configure, but you can enable the "webpack dev server" and then you have "live reload" with Webpack. As you edit your code the dev serfver refreshes your browser to show the updated web page.

## Get setup

Install dependencies:

```bash
cd 7-frontend-with-webpack
npm install
```

## Run frontend in development with live reload

During development, run your frontend using Webpack's development server:

```bash
npm start
```

Or to run Webpack directly:

```bash
npx webpack serve --open --config webpack.config.js --mode=development
```

Now try changing code in any of the source files (`index.html` or `index.js`. As you edit the code and save the files the Webpack dev server will automatically refresh the browser to show the latest updates to your web page.

## Build the frontend to a static web page

To use your frontend in production you must build it to a static web page:

```bash
npm run build
```

Or to run Webpack directly:

```bash
npx webpack --config webpack.config.js --mode=production
```

The static web page is output to the `dist` subdirectory. You can deploy this to your production web server.

You can test static web page using `live-server`:

```bash
npx live-server --open=index.html dist
```

Live server should open your browser and navigate to show the static web page.



