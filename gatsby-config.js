const languages = require("./src/utils/languages.js")

module.exports = {
  siteMetadata: {
    title: `Development Tutorials`,
    author: `An Author`,
    description: `A archive of various tutorials`,
    siteUrl: `http://localhost:8000/`,
    languages,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/tutorials`,
        name: `tutorials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/documentation`,
        name: `documentation`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Development Tutorials`,
        short_name: `dev_tuts`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: languages.defaultLangKey,
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
        pagesPaths: [`${__dirname}/src/pages`],
      }
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: languages.defaultLangKey,
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
        pagesPaths: [`${__dirname}/content/documentation`],
        markdownRemark: {
          postPage: "src/templates/documentation.js",
          query: `
          {
              allMarkdownRemark {
                  edges {
                  node {
                      fields {
                      slug,
                      langKey
                      }
                  }
                  }
              }
          }
          `,
        },
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: languages.defaultLangKey,
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
        pagesPaths: [`${__dirname}/content/tutorials`],
        markdownRemark: {
          postPage: "src/templates/tutorial.js",
          query: `
          {
              allMarkdownRemark {
                  edges {
                  node {
                      fields {
                      slug,
                      langKey
                      }
                  }
                  }
              }
          }
          `,
        },
      },
    },
  ],
}
