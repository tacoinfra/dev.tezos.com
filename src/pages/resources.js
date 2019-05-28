import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ShellWrapper from "../components/ShellWrapper"
import PostList from "../components/PostList"
import PostListGroup from "../components/PostListGroup"
import resourcesContent from "../content/resources"

const ResourcesPage = ({ location }) => {
  return (
    <Layout location={location} title="Resources" compact>
      <SEO title="Resources" />

      <ShellWrapper>
        <PostListGroup columns={resourcesContent.length}>
          {
            resourcesContent.map(({ title, posts }) => (
              <PostList title={<h3>{title}</h3>}>
                <ul>
                  {
                    posts.map(({ link, title, body }) => (
                      <li>
                        <p><a href={link}>{title}</a></p>
                        <p><small>{body}</small></p>
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
