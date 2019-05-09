import React from "react"
import styled from "@emotion/styled"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import posts from "./posts.json"
import BulletCheckmark from "../assets/bullet_checkmark.svg"
import palette from "../utils/palette"

const SiteIndex = ({ location }) => {
  const tutorials = posts.filter(post => post.category === "tutorials")

  return (
    <Layout
      location={location}
      title="Tezos Developer Portal"
      subtitle="Technical Resources for Software and Blockchain Developers"
    >
      <SEO title="Home" />
      <Wrapper>
        <PostsSection>
          <PostColumn>
            <PostHeader>Tutorials</PostHeader>
            <PostList>
              {tutorials.map(tutorial => (
                <li>{tutorial.title}</li>
              ))}
            </PostList>
          </PostColumn>
          <PostColumn>
            <PostHeader>Dev Tools</PostHeader>
            <PostList>
              {tutorials.map(tutorial => (
                <li>{tutorial.title}</li>
              ))}
            </PostList>
          </PostColumn>
        </PostsSection>
        <CommunitySection />
      </Wrapper>
    </Layout>
  )
}

// NOTE: This wrapper is normally not necessary, but because some elements on this page break the max-width (1200px), we need to handle flexing and what not at this component's level instead of the Layout level
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// POSTS Components and Styles
const PostHeader = ({ children }) => (
  <PostHeaderElement>
    <BulletCheckmark />
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
    &:first-child {
      margin-right: 24px;
    }
  }
`

const PostsSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 1200px;
  margin-top: 100px;
  margin-bottom: 142px;
`

const PostList = styled.ul`
  list-style-type: none;
  margin: 0;
  li {
    font-weight: 300;
    letter-spacing: 1.04px;
    line-height: 34px;
    font-size: 24px;
    color: ${palette.blue};
    display: block;
    padding: 0.45rem;
    border-bottom: 1px solid ${palette.grey};
    &::after {
      content: "▲";
      transform: rotate(90deg);
      display: inline-block;
      font-size: 10px;
      margin-left: 12px;
      line-height: 34px;
    }
  }
`

const PostColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  &:first-child {
    margin-right: 50px;
  }
`

// COMMUNITY Components and Styles
const CommunitySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 275px;
  background-color: ${palette.lighterGrey};
  width: 100%;
`

export default SiteIndex
