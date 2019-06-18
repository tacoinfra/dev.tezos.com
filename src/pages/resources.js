import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ShellWrapper from "../components/ShellWrapper"
import PostList from "../components/PostList"
import PostListGroup from "../components/PostListGroup"
import { structureResourcesContent } from "../content/helpers"

const query = graphql`
  query {
    allMarkdownRemark(
      sort: {
        order: ASC,
        fields: [frontmatter___priority]
      }
      filter: {
        frontmatter: {
          type: { eq: "resource" }
        }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            type
            slug
            title
            resources {
              title
              link
              description
            }
          }
        }
      }
    }
  }
`

const ResourcesPage = ({ location }) => {
  const data = useStaticQuery(query)
  const resourcesContent = structureResourcesContent(data)

  return (
    <Layout location={location} title="Resources" compact>
      <SEO title="Resources" />

      <ShellWrapper>
        <PostListGroup columns={resourcesContent.length}>
          {
            (refList) =>
              resourcesContent.map(({ slug, title, resources }, index) => (
                <PostList
                  key={slug}
                  id={slug}
                  titleRef={refList[index]}
                  title={<h3>{title}</h3>}
                >
                  <ul>
                    {
                      resources.map(({ link, title, description }) => (
                        <li key={link}>
                          <p><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></p>
                          <p><small>{description}</small></p>
                        </li>
                      ))
                    }
                  </ul>
                </PostList>
              ))
          }
        </PostListGroup>
      </ShellWrapper>
    </Layout>
  )
}

export default ResourcesPage
