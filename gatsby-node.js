const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
              fileAbsolutePath
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create documentation post pages.
    // First we filter all our posts with ones that are in the documentation folder
    const documentationPosts = result.data.allMarkdownRemark.edges.filter(
      post =>
        path.basename(path.dirname(post.node.fileAbsolutePath)) ===
        "documentation"
    )
    // Next we grab onto the template for when we create the pages
    const documentationTemplate = path.resolve(
      `./src/templates/documentation.js`
    )

    // We're going to loop through each documentation post, create a next and previous link, then create the page for each documentation with their respective next/previous links
    documentationPosts.forEach((post, index) => {
      const previous = index === documentationPosts.length - 1 ? null : documentationPosts[index + 1].node
      const next = index === 0 ? null : documentationPosts[index - 1].node

      createPage({
        path: `/documentation${post.node.fields.slug}`,
        component: documentationTemplate,
        context: {
          slug: post.node.fields.slug,
          postPath: `/documentation${post.node.fields.slug}`,
          previous,
          next,
          type: "documentation",
        },
      })
    })
    // Create tutorial post pages.
    // First we filter all our posts with ones that are in the tutorials folder
    const tutorialPosts = result.data.allMarkdownRemark.edges.filter(
      post =>
        path.basename(path.dirname(post.node.fileAbsolutePath)) === "tutorials"
    )
    // Next we grab onto the template for when we create the pages
    const tutorialTemplate = path.resolve(`./src/templates/tutorial.js`)

    // We're going to loop through each tutorial post, create a next and previous link, then create the page for each tutorial with their respective next/previous links
    tutorialPosts.forEach((post, index) => {
      const previous = index === tutorialPosts.length - 1 ? null : tutorialPosts[index + 1].node
      const next = index === 0 ? null : tutorialPosts[index - 1].node

      createPage({
        path: `/tutorial${post.node.fields.slug}`,
        component: tutorialTemplate,
        context: {
          slug: post.node.fields.slug,
          postPath: `/tutorial${post.node.fields.slug}`,
          previous,
          next,
          type: "tutorial",
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
