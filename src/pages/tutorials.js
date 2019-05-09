import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const TutorialIndex = ({ location }) => (
  <Layout location={location} title="Tutorials">
    <SEO title="All posts" />
    <h1>Tutorials</h1>
  </Layout>
)

export default TutorialIndex

