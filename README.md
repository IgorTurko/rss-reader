# Create React App [![Build Status](https://travis-ci.org/facebook/create-react-app.svg?branch=master)](https://travis-ci.org/facebook/create-react-app)

React+redux app that lists different statuspages and shows statuses from those pages. Automatic refresh of status once per 10 minutes.

Statuspages to start with are: 
* [Datadog](https://status.datadoghq.com/) -
Show following stats: Alerting Engine, Event Pipeline
* [Azure](https://azure.microsoft.com/en-us/status/) -
Show following stats: Virtual machines, cloud services and functions in East US, East US 2 and North Europe datacentre

## Quick Overview

```sh
npx create-react-app my-app
cd my-app
npm start
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='https://cdn.rawgit.com/facebook/create-react-app/27b42ac/screencast.svg' width='600' alt='npm start'>
</p>


## Run an App

**You’ll need to have Node 8.9.0 or later on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.rawgit.com/marionebl/create-react-app/9f62826/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm start` or `yarn start`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## What’s done?

Here is briefly description of what have been done and why:

- `React`, `Redux` as they are required for the task + `react-router` as a routing standart for react applications.
- `Redux-Thunk` to be able to execute redux actions asynchroniusly.
- `ES6` as my own preference + all babel plugins.
- `Webpack 4` as a module bundler with predefined configuration to get rid of manuall configuration for different modes.
- For parsing rss feeds I use `rss-parser` package from npm.
- I decided to create separate page for each log's type. However it whould be mush easier to keep everything i one page (no routing, no cache needed)

## How to extend?
If later there will be need to add new page with logs just:


- **Azure show logs not implemented:** [Azure](https://azure.microsoft.com/en-us/status/) rss feeds has no recent data. That is why it was not possible to bind data with UI.

- **Caching for all logs:** Each time user change page between Datadog/Azure new fetch data method fired. It is possible to implement caching for the whole application state and refresh data only if time expired.

- **Interval update:** Right now each page refreshed once per 10 minutes and this value hardcoded in the code. It would be good to move this dropdown with list of minutes to UI.

- **Send all requests to a single html page:** Develpment mode use `webpack-dev-server` with flag `--history-api-fallback` which returns `index.html` for any request. For [demo](https://igorturko.github.io) which is located on github pages I did not implement this. That is why any other url except root [https://igorturko.github.io](https://igorturko.github.io) will returns 404.

## Live demo

Live demo you can find on github pages [here](https://igorturko.github.io):

## Author
- [@IgorTurko](https://github.com/IgorTurko)
