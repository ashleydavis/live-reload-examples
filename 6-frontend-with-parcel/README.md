# 6-frontend-with-parcel

This the simplest possible example of a frontend bundled with [Parcel](https://parceljs.org/). Parcel has built in "live reload" you simply run it, then as you edit your code Parcel refreshes your browser to show the updated web page.

For a more extensive example of Parcel that includes React and TypeScript, please see my code repository [react-parcel-typescript-example](https://github.com/ashleydavis/react-parcel-typescript-example).

## Get setup

Install dependencies:

```bash
cd 6-frontend-with-parcel
npm install
```

## Run frontend in development with live reload

During development, run your frontend using Parcel's development server:

```bash
npm start
```

Or to run Parcel directly:

```bash
npx parcel src/index.html
```

Now try changing code in any of the source files (`index.html`, `index.js` or `styles.css`). As you edit the code and save the files the Parcel development server will automatically refresh the browser to show the latest updates to your web page.

## Build the frontend to a static web page

To use your frontend in production you must build it to a static web page:

```bash
npm run build
```

Or to run Parcel directly:

```bash
npx parcel build src/index.html
```

The static web page is output to the `dist` subdirectory. You can deploy this to your production web server.

You can test static web page using `live-server`:

```bash
npx live-server --open=index.html dist
```

Live server should open your browser and navigate to show the static web page.



