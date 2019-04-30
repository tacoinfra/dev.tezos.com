import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"

const SiteIndex = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h1>Index</h1>
  </Layout>
)

export default SiteIndex
