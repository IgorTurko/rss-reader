# Statuspages app

React+redux app that lists different statuspages and shows statuses from those pages. Automatic refresh of status once per 10 minutes.

Statuspages are: 
* [Datadog](https://status.datadoghq.com/) -
Show following stats: Alerting Engine, Event Pipeline
* [Azure](https://azure.microsoft.com/en-us/status/) -
Show following stats: Virtual machines, cloud services and functions in East US, East US 2 and North Europe datacentre

## Quick Overview

Before run application install all node modules by running:
### `npm install` or `yarn install`

## Run an App

To run app in developemnt mode, you may choose one of the following methods:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
It will automatically open [http://localhost:8080](http://localhost:8080) page in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm run build` or `yarn run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

### `npm run deploy` or `yarn run deploy`

By default it will deploy content of `dist` folder to github pages [https://igorturko.github.io](https://igorturko.github.io)

## What’s done?

Here is briefly description of what have been done and why:

- `React`, `Redux` as they are required for the task + `react-router` as a routing standart for react applications.
- `Redux-Thunk` to be able to execute redux actions asynchroniusly.
- `ES6` as my own preference + all babel plugins.
- `Webpack 4` as a module bundler with predefined configuration to get rid of manuall configuration for different modes.
- `rss-parser` package аor parsing rss feeds.

## How to extend?

Now for each log's type there is separate page. However it whould be muсh easier to keep everything in one page (no routing, no cache needed) but it is how it is. So if later there will be need to add new page with logs just do:

- crete new component under `./components/log` as example use `datadogLogComponent`. This new component implement `render props` pattern which means you need only to describe UI and connect component to the state. All main logic already implemented in `LogWrapperComponent`.
- open `Root.js` and add new `Route` with recently created component.

## TODO or nice to have

- **Azure show logs not implemented:** [Azure](https://azure.microsoft.com/en-us/status/) rss feeds has no recent data. That is why it was not possible to bind data with UI.

- **Caching for all logs:** Each time user change page between Datadog/Azure new fetch data method fired. It is possible to implement caching for the whole application state and refresh data only if time expired.

- **Interval update:** Right now each page refreshed once per 10 minutes and this value hardcoded in the code. It would be good to move this dropdown with list of minutes to UI.

- **Send all requests to a single html page:** Develpment mode use `webpack-dev-server` with flag `--history-api-fallback` which returns `index.html` for any request. For [demo](https://igorturko.github.io) which is located on github pages I did not implement this. That is why any other url except root [https://igorturko.github.io](https://igorturko.github.io) will returns 404.

- **Localization:** If we would need to continue work on this product ofcourse it would be great to have localization.

## Live demo

Live demo you can find on github pages [here](https://igorturko.github.io)

## Author
- [@IgorTurko](https://github.com/IgorTurko)
