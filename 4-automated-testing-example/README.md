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

## Run automated tests with live reload

Use the `npm test` convention to run automated tests:

```bash
npm test
```

Or run Jest directly like this:

```bash
npx jest --watch
```

Check out `jest.config.js` for [Jest configuration options](https://jestjs.io/docs/configuration).