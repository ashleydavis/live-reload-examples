# 9-docker-example-typescript

This is an example of running a Node.js TypeScript microservice under Docker with "live reload" enabled. The code on the development computer is automatically synchronized into the container and the application is automatically restarted by Nodemon as you edit your code.

## Running the application

Use Docker to start the application:

```bash
cd 9-docker-example-typescript
docker compose up --build
```

Note that you can add more microservices to `docker-compose.yaml` to locally simulate an application with multiple microservices.

While the application is running try editing code under the `microservice` directory. As you edit code and save the files you should see the Node.js application running inside the container automatically restart to run your updated code.

To stop the application:

```bash
docker compose down
```