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
        <CommunitySection>
          <TetrisBlock />
          <h3>Dev Support Channels</h3>
          <CommunitiesList>
            <li>
              <StackExchangeLogo />
              {/* NOTE: Icon has a little bit of margin in it, so we correct the header's spacing to accomodate */}
              {/* TODO: Actually correct the svg and remove this inline styling */}
              <h3
                style={{
                  marginLeft: "4",
                }}
              >
                StackExchange
              </h3>
            </li>
            <li>
              <RedditLogo />
              <h3>Reddit</h3>
            </li>
            <li>
              <RiotLogo />
              <h3>Riot</h3>
            </li>
          </CommunitiesList>
        </CommunitySection>
        <MailingListSection>
          <MailIcon />
          <h3>Developer Mailing List</h3>
          <form action="" method="POST">
            <StyledInput type="email" placeholder="Email" />
            <ButtonAnchor isSmall isAnchor={false} type="submit">
              Submit
            </ButtonAnchor>
          </form>
        </MailingListSection>
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
  &:first-of-type {
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
  h3 {
    margin-bottom: 0;
    margin-left: 18px;
  }
`

const CommunitiesList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  &::before {
    content: "";
    display: block;
    height: 133px;
    background-color: ${palette.grey};
    width: 1px;
    margin: 0 31.5px;
  }
  li {
    margin-bottom: 0;
    margin-right: 21px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    svg {
      height: 58px;
      width: 58px;
    }
  }
`

// MAILINGLIST Components and Styles
const MailingListSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 130px 0;
  > * {
    margin-bottom: 0;
    margin-right: 30px;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    button {
      margin-left: 41px;
    }
  }
`

const StyledInput = styled.input`
  padding: 0px 0px 9px;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
  border-color: ${palette.gray};
  border-style: none none solid;
  border-width: medium medium 1px;
  border-image: none 100% / 1 / 0 stretch;
  border-radius: 0px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  -moz-appearance: none;
  margin-bottom: 0px;
  display: block;
  width: 310px;
`

export default SiteIndex
