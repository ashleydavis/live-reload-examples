# 1-nodemon-example

This is the simplest possible example of using Nodemon for live reload of a Node.js JavaScript application.

## Get setup

Install dependencies:

```bash
cd 1-nodemon-example
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