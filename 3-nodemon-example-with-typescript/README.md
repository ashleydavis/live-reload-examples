# 2-nodemon-example-with-config

This is an example of using [Nodemon](https://www.npmjs.com/package/nodemon) and [ts-node](https://www.npmjs.com/package/ts-node) for live reload of a Node.js TypeScript application, configuration is provided via the `nodemon.json` configuration file.

For a more complete TypeScript starting point, please my code repository [typescript-template](https://github.com/ashleydavis/typescript-template).

## Get setup

Install dependencies:

```bash
cd 3-nodemon-example-with-typescript
npm install
```

## Run the code in production

Before running the code in production you need to build the TypeScript source code to generate JavaScript code:

```bash
npm run build
```

The generated JavaScript code is output to the `build` directory, please feel free to take a look and compare it to the TypeScript source code.

To run the built JavaScript code in production (i.e. without live reload) use the conventional npm start script:

```bash
npm start
```

## Run the code in development with live reload

To run the code in development with live reload enabled:

```bash
npm run start:dev
```

This runs the application under [`ts-node`](https://www.npmjs.com/package/ts-node), that's a Node.js replacement command that can run TypeScript code directly, which is convenient during development.

Then `ts-node` is run under [`nodemon`](https://www.npmjs.com/package/nodemon) which watched for changes to `.ts` files and restarts the application while you saving code changes.

While the application is running, try changing the code in `index.ts` and saving it. You should see the application automatically reload and run your updated code.

The `start:dev` script is a personal convention that I regularly use. 