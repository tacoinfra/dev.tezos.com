import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import { Layout } from "../components/Layout"
import posts from "./posts.json"

const SiteIndex = ({ location }) => {
  // NOTE: This is the actual presentation of our data
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <h1>Tezos Developer Portal</h1>
      <p>Software Developers and Blockchain developers resource</p>
      {posts.map(post => post.title)}
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
  }
`
