# Webpack, ES6, React, Bootstrap, Font Awesome, Express, and Mocha Boilerplate
Boilerplace project setup with all of the above.

It should work on both Linux and Windows. However, I have only tested it on Windows.

I attempted to keep the project as simple by only including what is necessary for achieving my goals of:
* React with hot reload
* Bootstrap
* Express
* ES6
* Mocha

This means I skipped things like [eslint](http://eslint.org).
While these are nice, they are not required for development.

## Running

### Setup
1. `git clone git@github.com:jacob-swanson/webpack-react-bootstrap-express-boilerplate.git`
2. `cd webpack-react-bootstrap-express-boilerplate/`
3. `npm install`


### Development
1. `npm start`
2. Navigate to [http://localhost:8080](http://localhost:8080) in the browser of your choice

### Production
1. `npm run build`
2. `npm run start-prod`
3. Navigate to [http://localhost:8080](http://localhost:8080) in the browser of your choice

Hot reloading is not enabled for production builds.

### Tests
1. `npm run tests`

### Package Updates
If any packages in this project are outdated, you should be able to easily update them.

You can check for package updates by running `npm run check-deps`. 
This uses [npm-check-updates](https://github.com/tjunnone/npm-check-updates) to analyze `package.json` for updates.

Use `npm run update-deps` to apply the changes to your `package.json`.

## Overview
When running in development mode, the server will use webpack to build the client.
The production mode will only serve the files from the `dist/` directory which can be cleaned using `npm run clean` and built using `npm run build`.

### Babel (ES6)
Babel provides transpiling for the server and client.

### React
Uses React and hot replacement of changes to modules.

### Bootstrap (SCSS)
Uses [bootstrap-loader](https://github.com/shakacode/bootstrap-loader) to load [Bootstrap 4](https://v4-alpha.getbootstrap.com) which uses SCSS. 

Add your app styles to `src/client/styles/app.scss`.
You can also include CSS/SCSS files with your components.

Check the [bootstrap-loader](https://github.com/shakacode/bootstrap-loader) project for how to customize Bootstrap.

### Font Awesome
Uses [font-awesome-loader](https://github.com/shakacode/font-awesome-loader) to load Font Awesome as Glyphicons are no longer a part of the Bootstrap 4.

### Mocha (Tests)
Uses [Mocha](https://mochajs.org/) for executing tests.
Tests can be written using either JSX or plain JS with ES6.
