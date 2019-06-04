import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ShellWrapper from "../components/ShellWrapper"
import PostList from "../components/PostList"
import PostListGroup from "../components/PostListGroup"
import resourcesContent from "../content/resources"

const ResourcesPage = ({ location }) => {
  return (
    <Layout location={location} title="Additional Resources" compact>
      <SEO title="Additional Resources" />

      <ShellWrapper>
        <PostListGroup columns={resourcesContent.length}>
          {
            (refList) =>
              resourcesContent.map(({ slug, title, posts }, index) => (
                <PostList
                  key={slug}
                  id={slug}
                  titleRef={refList[index]}
                  title={<h3>{title}</h3>}
                >
                  <ul>
                    {
                      posts.map(({ link, title, body }) => (
                        <li key={link}>
                          <p><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></p>
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
