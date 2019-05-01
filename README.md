# dev.tezos.com

This project is a site for the dev portal for Tezos.com. It used as a tutorial hub for various topics related to Tezos.

## Development

### Quickstart

1. Clone the repository

`git clone git@github.com:tacoinfra/dev.tezos.com`

2. Change directory into our clone and install our dependencies

`cd dev.tezos.com && npm install`

3. Start the development environment using the `dev` script in `package.json`

`npm start`

Your live server should now be running at http://localhost:8000
You should also have a tool for querying data at http://localhost:8000/___graphql

### Notes

#### Localization
The application is configured to be able to use i18n, but not fully complete. Production only has plans to use English initially. When we're ready to implement more languages, Gatsby already has the i18n plugin installed and ready. To use that, you simply add the locale key to the file extension. So if you have a tutorial called `my-tutorial.md` and a page called `my-tutorials.js`, you would simply add `.de` before `.js` to make a German version (`my-tutorial.de.md` & `my-tutorials.de.js`). 

Currently, the React part of the application has no configured way to "change" the language. To view your alternate language versions of pages/posts, you simply need to append the language key to the url before the slug.

Example: If your post URL is https://www.example.com/tutorials/my-tutorial/ then the German version (as long as you have the file in the repo) should exist at https://www.example.com/tutorials/*de*/my-tutorial

## Installation

To install the dependencies run `npm install`

## Building

To get a production-ready build run `npm run build`
  - This will create a folder of your compiled code and assets called `public` in the root directory

## Deploying

To deploy your production-ready build, run `npm run deploy`
  - This will deploy the `public` directory you created in the build step to the `gh-pages` branch in the repo

Reference to the Gatsby Tutorial [link](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)