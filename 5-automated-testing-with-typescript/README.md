# 5-automated-testing-with-typescript

This is an example of automated tests using [Jest](https://jestjs.io/) in "watch mode" so your TypeScript tests automatically reload as you edit your code.

## Get setup

Install dependencies:

```bash
cd 5-automated-testing-with-typescript
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

## Run the automated tests

Use the `npm test` convention to run automated tests:

```bash
npm test
```

Or to run Jest directly:

```bash
npx jest
```

## Run automated tests with live reload

To run the tests so they automatically reload as you edit code, run the tests in "watch mode" using the npm script `npm run test:watch`:

```bash
npm run test:watch
```

Or run Jest directly like this:

```bash
npx jest --watch
```

Now try editing the TypeScript code in `src/test/index.test.ts`. When you save the code changes Jest will detect it and automatically reload your automated tests.

Check out `jest.config.ts` for [Jest configuration options](https://jestjs.io/docs/configuration).