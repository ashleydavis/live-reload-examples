# 2-nodemon-example-with-config

This is an example of using Nodemon for live reload of a Node.js JavaScript application, this time configuration is provided via the `nodemon.json` configuration file.

## Get setup

Install dependencies:

```bash
cd 2-nodemon-example
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

The `start:dev` script is a personal convention that I regularly use. 