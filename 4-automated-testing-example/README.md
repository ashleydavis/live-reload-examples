# 4-automated-testing-example

This is an example of automated tests using [Jest](https://jestjs.io/) in "watch mode" so your tests automatically reload as you are changing your code.

## Get setup

Install dependencies:

```bash
cd 4-automated-testing-example
npm install
```

## Run the code in production

To run the code in production (i.e. without live reload) just use the conventional npm start script:

```bash
npm start
```

## Run the code in development with live reload

To run the code in development with live reload enabled:

```bash
npm run start:dev
```

While the application is running, try changing the code in `index.js` and saving it. You should see the application automatically reload and run your updated code.

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

Now try editing the JavaScript code in `src/test/index.test.js`. When you save the code changes Jest will detect it and automatically reload your automated tests.

Check out `jest.config.js` for [Jest configuration options](https://jestjs.io/docs/configuration).