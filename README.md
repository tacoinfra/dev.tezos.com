# developers.tezos.com

This project is a site for the dev portal for Tezos.com. It used as a tutorial hub for various topics related to Tezos.

## Development

### Quickstart

1. Clone the repository

`git clone git@github.com:tacoinfra/developers.tezos.com`

2. Change directory into our clone and install our dependencies

`cd developers.tezos.com && npm install`

3. Start the development environment using the `develop` script in `package.json`

`npm start`

Your live server should now be running at http://localhost:8000
You should also have a tool for querying data at http://localhost:8000/___graphql

## Installation

To install the dependencies run `npm install`

## Building

To get a production-ready build run `npm run build`

- This will create a folder of your compiled code and assets called `public` in the root directory

## Deploying

To deploy your production-ready build, run `npm run deploy`

- This will deploy the `public` directory you created in the build step to the `gh-pages` branch in the repo

Reference to the Gatsby Tutorial [link](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)

## Edit / Submit Content

Content is generated using Markdown files located in the [src/content](src/content) directory.  While running in development mode (`npm run develop` or `npm run start`) content can be edited and viewed in the local server environment.

To contribute content, we suggest:

1. Forking this repository from the `master` branch
2. [Install](#installation) and start [development server](#development)
3. Make content edits and test locally
4. Commit and create a PR with `staging` as the base branch
