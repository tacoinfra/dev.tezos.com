import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { palette, spacings, breakpoints } from "../utils/variables"
import LibrariesIcon from "../assets/libraries.svg";
import ToolsIcon from "../assets/tools.svg"
import contentList from "./content.json"

const DevToolsPage = ({ location }) => {
  const libraries = posts.filter(post => post.category === "library")
  const tools = posts.filter(post => post.category === "tool")
  return (
    <Layout location={location} title="Dev Tools">
      <SEO title="Resources" />
      <Wrapper>
        <PostsSection id="posts">
          <PostColumn>
            <PostHeader icon={<LibrariesIcon />}>Libraries</PostHeader>
            <PostList>
              {libraries.map(library => (
                <li key={library.title}>
                  <a href={library.link}>{library.title}</a>
                </li>
              ))}
            </PostList>
          </PostColumn>
          <PostColumn>
            <PostHeader icon={<ToolsIcon />}>Tools</PostHeader>
            <PostList>
              {tools.map(tool => (
                <li key={tool.title}>
                  <a href={tool.link}>{tool.title}</a>
                </li>
              ))}
            </PostList>
          </PostColumn>
        </PostsSection>
      </Wrapper>
    </Layout>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-158px);
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${palette.white};
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`

// POSTS Components and Styles
const PostHeader = ({ icon, children }) => (
  <PostHeaderElement>
    {icon}
    {children}
  </PostHeaderElement>
)

const PostHeaderElement = styled.h2`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-weight: 300;
  letter-spacing: 1.04;
  line-height: 29px;
  font-size: 25px;
  color: ${palette.darkBlue};
  > * {
    &:first-of-type {
      margin-right: 24px;
    }
  }
`

const PostsSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: ${spacings.maxWidth};
  margin-top: 100px;
  margin-bottom: 142px;
  width: 100%;
  @media (max-width: 1100px) {
    padding: 8px;
  }
`

const PostList = styled.ul`
  list-style-type: none;
  margin: 0;
  li:last-of-type {
    margin-bottom: 64px;
  }
  li a {
    font-weight: 300;
    letter-spacing: 1.04px;
    line-height: 34px;
    font-size: 24px;
    color: ${palette.blue};
    display: block;
    padding: 0.45rem;
    border-bottom: 1px solid ${palette.grey};
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
`

const PostColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`


export default DevToolsPage
