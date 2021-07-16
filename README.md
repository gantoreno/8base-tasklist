<p align="center">
  <img src="https://www.teknosassociates.com/wp-content/uploads/2018/05/8base-logo.png" width="400" />
</p>

# 8Base Tasklist

[![Node.js CI](https://github.com/gantoreno/8base-tasklist/actions/workflows/node.js.yml/badge.svg)](https://github.com/gantoreno/8base-tasklist/actions/workflows/node.js.yml)

A simple task list bootstraped with [`create-react-app`](https://github.com/facebook/create-react-app) and connecting to the [8Base](https://www.8base.com/) API for storage & serverless functions.

**NOTE:** This app uses the free-tier version of 8Base. After 10 consecutive queries to the workspace, the API will get locked for 120 seconds, after that, you'll be able to fetch info and query again. Keep this in mind when running end-to-end tests.

## Features

This project includes:

- A modern UI based on the [neumorphic principles](https://www.justinmind.com/blog/neumorphism-ui/) (using the [`ui-neumorphism`](https://akaspanion.github.io/ui-neumorphism/) component library).
- Pre-made unit tests with [Jest](https://jestjs.io/) & [React Testing Library](react-testing-library).
- Pre-configured end-to-end tests with [Cypress](https://www.cypress.io/).

<p align="center">
  <img src=".github/8base-tasklist.gif" width="300" />
</p>

## Usage

First, clone the repo:

```sh
$ git clone https://github.com/gantoreno/8base-tasklist
$ cd 8base-tasklist
```

Then, install the dependencies with [`yarn`](https://yarnpkg.com/):

```sh
$ yarn
```

After that, copy the `.env` file to `.env.local`:

```sh
$ cat .env > .env.local
```

And make sure to fill-in the required variables (only `REACT_APP_WORKSPACE_ID` for 8Base). Finally, run the app with `yarn start`:

```sh
$ yarn start
```

The app should be up and running in [http://localhost:3000](http://localhost:3000).

## Testing

To run unit tests:

```sh
$ yarn run test
```

To run end-to-end tests:

```sh
$ yarn run cypress:open
```

After that, use the Cypress GUI to trigger a test run.
