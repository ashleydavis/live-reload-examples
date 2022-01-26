# Live Reload Examples

Examples of live reloading code to create a fast feedback loop.

Examples in this code repo accompany a soon to be published blog post and talk by Ashley Davis. 

[Follow on Twitter for updates](https://twitter.com/codecapers)

## Examples

To try these examples you need to have [Node.js](https://nodejs.org/) installed. Then clone this repo and follow the instructions in README.md in each subdirectory.

The last two examples require you to have [Docker Desktop](https://www.docker.com/products/docker-desktop) installed.

- [1-nodemon-example](https://github.com/ashleydavis/live-reload-examples/tree/main/1-nodemon-example) - This is the simplest possible example of using [Nodemon](https://www.npmjs.com/package/nodemon) for live reload of a Node.js JavaScript application.
- [2-nodemon-example-with-config](https://github.com/ashleydavis/live-reload-examples/tree/main/2-nodemon-example-with-config) - This is an example of using [Nodemon](https://www.npmjs.com/package/nodemon) for live reload of a Node.js JavaScript application, this time configuration is provided via the `nodemon.json` configuration file.
- [3-nodemon-example-with-typescript](https://github.com/ashleydavis/live-reload-examples/tree/main/2-nodemon-example-with-config) - This is an example of using [Nodemon](https://www.npmjs.com/package/nodemon) and [ts-node](https://www.npmjs.com/package/ts-node) for live reload of a Node.js TypeScript application.
- [4-automated-testing-example](https://github.com/ashleydavis/live-reload-examples/tree/main/4-automated-testing-example) - This is an example of automated tests using [Jest](https://jestjs.io/) in "watch mode" so your tests automatically reload as you are changing your code.
- [5-automated-testing-with-typescript](https://github.com/ashleydavis/live-reload-examples/tree/main/5-automated-testing-with-typescript) - This is an example of automated tests using [Jest](https://jestjs.io/) in "watch mode" so your TypeScript tests automatically reload as you edit your code.
- [6-frontend-with-parcel](https://github.com/ashleydavis/live-reload-examples/tree/main/6-frontend-with-parcel) - This the simplest possible example of a frontend bundled with [Parcel](https://parceljs.org/). Parcel has built in "live reload" you simply run it, then as you edit your code Parcel refreshes your browser to show the updated web page.
- [7-frontend-with-webpack](https://github.com/ashleydavis/live-reload-examples/tree/main/7-frontend-with-webpack) - This the simplest possible example of a frontend bundled with [Webpack](https://webpack.js.org/). Webpack is a little tricky to configure, but you can enable the "webpack dev server" and then you have "live reload" with Webpack. As you edit your code the dev serfver refreshes your browser to show the updated web page.
- [8-docker-example](https://github.com/ashleydavis/live-reload-examples/tree/main/8-docker-example) - This is an example of running a Node.js application under Docker with "live reload" enabled. The code on the development computer is automatically synchronized into the container and the application is automatically restarted by Nodemon as you edit your code.
