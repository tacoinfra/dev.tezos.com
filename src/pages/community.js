import React from "react";
import { Layout } from "../components/Layout";
import SEO from "../components/seo";

const CommunityPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Community" />
    <h1>Community</h1>
  </Layout>
)

export default CommunityPage;
