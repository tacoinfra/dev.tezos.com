import React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from "../components/Layout"
import SEO from "../components/SEO"

const TutorialIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title="Documentation">
      <SEO title="All posts" keywords={[`gatsby`, `javascript`, `react`]} />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link
                style={{ boxShadow: `none` }}
                to={`/documentation${node.fields.slug}`}
              >
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default TutorialIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        fileAbsolutePath: { regex: "/documentation/" },
        fields: { langKey: { eq: "en" } }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            langKey
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
