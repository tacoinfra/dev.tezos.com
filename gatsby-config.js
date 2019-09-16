const languages = require("./src/utils/languages.js")

module.exports = {
  siteMetadata: {
    title: `Tezos Developer Portal`,
    author: `Tezos`,
    description: `Welcome to the Tezos Developer Portal. Explore and find the tools you need to get started building on Tezos right now.`,
    siteUrl: `https://developers.tezos.com/`,
    languages,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://tezos.us6.list-manage.com/subscribe/post?u=80b9a27c332a234b4cac5c13b&id=d8f4b4112e'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-125745326-3`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tezos.com',
        short_name: 'Tezos',
        start_url: '/',
        background_color: '#0055FF',
        theme_color: '#0055FF',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png'
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg/ // See below to configure properly
        }
      }
    }
  ],
}
