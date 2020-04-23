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

Your live server should now be running at http://127.0.0.1:8000
You should also have a tool for querying data at http://127.0.0.1:8000/___graphql

Note: there is a known issue with Gatsby not loading the development server correctly in Chrome and Firefox when navigating to localhost:8000, and the workaround is to use a private browsing window or 127.0.0.1:8000

## Installation

To install the dependencies run `npm install`

## Building

To get a production-ready build run `npm run build`

- This will create a folder of your compiled code and assets called `public` in the root directory

## Testing

There is a test service that will check all links in the site to see if any of them are broken.

`npm run test:links`

If the link returns a status code > 400, it will tell you it is broken. If it returns a 302 and redirects to a different page, it will return a warning. This is because some not found errors will land on custom 404 error pages, but return a 200 status. Each of these warnings can be checked by the person running the test, and update the link if the redirect is just to a moved resource.

## Deploying

To deploy your production-ready build, run `npm run deploy`

- This will deploy the `public` directory you created in the build step to the `gh-pages` branch in the repo

Reference to the Gatsby Tutorial [link](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)

## Edit / Submit Content

Content is generated using Markdown files located in the [src/content](src/content) directory. While running in development mode (`npm run develop` or `npm run start`) content can be edited and viewed in the local server environment.

To contribute content, we suggest:

1. Forking this repository from the `master` branch
2. [Install](#installation) and start [development server](#development)
3. Make content edits and test locally
4. Commit and create a PR with `staging` as the base branch.
