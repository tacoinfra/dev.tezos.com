import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const TutorialIndex = ({ location }) => {
  return (
    <Layout location={location} title="Tutorials">
      <SEO title="All posts" keywords={[`gatsby`, `javascript`, `react`]} />
      Tutorial Page
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
  }
`
