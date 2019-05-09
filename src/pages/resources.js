import React from "react";
import Layout from "../components/Layout"
import SEO from "../components/SEO";

const ResourcesPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Resources" />
    <h1>Resources</h1>
  </Layout>
)

export default ResourcesPage;
