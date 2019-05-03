import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import posts from "./posts.json"

const SiteIndex = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Tezos Developer Portal</h1>
    <p>Software Developers and Blockchain developers resource</p>
    {posts.map(post => post.title)}
  </Layout>
)

export default SiteIndex

