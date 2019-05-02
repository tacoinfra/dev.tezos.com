/**
 * NOTE: This is the index page (home page)
 * NOTE: This page uses an input state to search through all of our posts (both docs and tuts) which we get from the gql query
 */
import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import { Layout } from "../components/Layout"

const SiteIndex = ({ data, location }) => {
  // NOTE: We grab onto a list of _all_ of our posts
  // NOTE: It's important that this is never modified, because we always want to be able to compare against the complete list
  const posts = data.allMarkdownRemark.edges
  // NOTE: We established a `filteredPosts` variable who's default value is the same as the `posts` variable. We also establish a `setFilteredPosts` method
  const [filteredPosts, setFilteredPosts] = useState(posts)
  // NOTE: We establish an `inputValue` variable is an empty string, and a `setInputValue` method
  const [inputValue, setInputValue] = useState("")

  // NOTE: This effect checks whether the inputValue is empty, and filters the posts based on what the inputValue is
  // NOTE: This effect only runs if the `inputValue` variable has changed
  useEffect(() => {
    if (inputValue.length > 0) {
      setFilteredPosts(
        posts.filter(post =>
          post.node.frontmatter.title
            .toLowerCase()
            .includes(inputValue.toLowerCase())
        )
      )
    } else {
      setFilteredPosts(posts)
    }
  }, [inputValue])

  // NOTE: This is the actual presentation of our data
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <input
        type="text"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
        placeholder="Search..."
      />
      <h1>Index</h1>
      <ul>
        {filteredPosts.map(post => (
          <li key={post.node.frontmatter.title}>
            {post.node.frontmatter.title}
          </li>
        ))}
      </ul>
      {inputValue.length > 0 && filteredPosts.length === 0 && (
        <p>We couldn't find any posts with those search terms</p>
      )}
    </Layout>
  )
}

export default SiteIndex

// NOTE: This is a page query for our initial data
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { langKey: { eq: "en" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
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
