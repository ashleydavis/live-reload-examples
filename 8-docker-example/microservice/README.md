# microservice

This is an example Node.js microservice that demonstrates "live reload" when running under Docker.

Please see the readme in the parent directory to run this Node.js application under Docker. You can also run this directly under Node.js followign the instructions below.

## Get setup

Install dependencies:

```bash
cd 8-docker-example/microservice
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