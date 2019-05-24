import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ShellWrapper from "../components/ShellWrapper"
import PostList from "../components/PostList"
import PostListGroup from "../components/PostListGroup"
import contentList from "./content.json"

const DevToolsPage = ({ location }) => {
  const libraries = contentList.filter(post => post.category === "library")
  const tools = contentList.filter(post => post.category === "tool")
  return (
    <Layout location={location} title="Dev Tools" compact>
      <SEO title="Resources" />
      <ShellWrapper>
        <PostListGroup columns={3}>
          <PostList title={<h3>Languages</h3>}>
            <ul>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
            </ul>
          </PostList>

          <PostList title={<h3>Libraries</h3>}>
            <ul>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
            </ul>
          </PostList>

          <PostList title={<h3>Tools</h3>}>
            <ul>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
              <li>
                <p><a href="#/">How to get Tezos</a></p>
                <p><small>Minim non dolor ipsum aute proident.</small></p>
              </li>
            </ul>
          </PostList>
        </PostListGroup>
      </ShellWrapper>
    </Layout>
  )
}



export default DevToolsPage
