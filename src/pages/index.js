import React from "react"
import styled from "@emotion/styled"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import ButtonAnchor from "../components/ButtonAnchor"
import posts from "./posts.json"
import BulletCheckmark from "../assets/bullet_checkmark.svg"
import TetrisBlock from "../assets/tetris_block.svg"
import StackExchangeLogo from "../assets/stackexchange_logo.svg"
import RedditLogo from "../assets/reddit_logo.svg"
import RiotLogo from "../assets/riot_with_text.svg"
import MailIcon from "../assets/mail.svg"
import { palette, breakpoints, spacings } from "../utils/variables"

const SiteIndex = ({ location }) => {
  const tutorials = posts.filter(post => post.category === "tutorial")
  const tools = posts.filter(post => post.category === "tool")

  return (
    <Layout
      location={location}
      title="Tezos Developer Portal"
      subtitle="Technical Resources for Software and Blockchain Developers"
    >
      <SEO title="Home" />
      <Wrapper>
        <PostsSection id="posts">
          <PostColumn>
            <PostHeader>Tutorials</PostHeader>
            <PostList>
              {tutorials.map(tutorial => (
                <li key={tutorial.title}>
                  <a href={tutorial.link}>{tutorial.title}</a>
                </li>
              ))}
            </PostList>
          </PostColumn>
          <PostColumn>
            <PostHeader>Dev Tools</PostHeader>
            <PostList>
              {tools.map(tool => (
                <li key={tool.title}>
                  <a href={tool.link}>{tool.title}</a>
                </li>
              ))}
            </PostList>
          </PostColumn>
        </PostsSection>
        {/* <TZipsSection id="tzips">
          TZIPS BABY
        </TZipsSection> */}
        <CommunitySection id="community">
          <CommunityHeaderWrapper>
            <TetrisBlock />
            <h3>Community</h3>
          </CommunityHeaderWrapper>
          <CommunitiesList>
            <li>
              <StackExchangeLogo />
              {/* NOTE: Icon has a little bit of margin in it, so we correct the header's spacing to accomodate */}
              {/* TODO: Actually correct the svg and remove this inline styling */}
              <h3
                style={{
                  marginLeft: "4px",
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
        <MailingListSection id="mailinglist">
          <MailingHeaderWrapper>
            <MailIcon />
            <h3>Developer Mailing List</h3>
          </MailingHeaderWrapper>
          <MailingListForm action="" method="POST">
            <StyledInput type="email" placeholder="Email" />
            <ButtonAnchor isSmall isAnchor={false} type="submit">
              Submit
            </ButtonAnchor>
          </MailingListForm>
        </MailingListSection>
      </Wrapper>
    </Layout>
  )
}

// NOTE: This wrapper is normally not necessary, but because some elements on this page break the max-width (${spacings.maxWidth}), we need to handle flexing and what not at this component's level instead of the Layout level
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
  align-items: flex-start;
  max-width: ${spacings.maxWidth};
  margin-top: 100px;
  margin-bottom: 142px;
  width: 100%;
  @media (max-width: 1100px) {
    padding: 8px;
  }
`

const PostColumn = styled.div`
  display: flex;
  max-width: 498px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const PostList = styled.ul`
  list-style-type: none;
  margin: 0;
  width: 100%;
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

// TZIPS Components and Styles
const TZipsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 107px 0;
  border-top: 1px solid ${palette.grey};
  max-width: ${spacings.maxWidth};
  width: 85%;
`

// COMMUNITY Components and Styles
const CommunitySection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 275px;
  background-color: ${palette.lighterGrey};
  width: 100%;
  h3 {
    margin-bottom: 0;
    margin-left: 18px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 24px 8px;
  }
`

const CommunityHeaderWrapper = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
    justify-content: center;
    padding-bottom: 32px;
    margin-bottom: 32px;
    width: 350px;
    border-bottom: 1px solid ${palette.grey};
  }
`

const CommunitiesList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  max-width: 100vw;
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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    svg {
      height: 58px;
      width: 58px;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    li {
      margin-bottom: 16px;
    }
    &::before {
      display: none;
    }
  }
`

// MAILINGLIST Components and Styles
const MailingListSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 130px 0;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`

const MailingListForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 0;
  margin-left: 30px;
  button {
    margin-left: 41px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 8px;
    width: 100%;
    margin-left: 0;
    button {
      margin-top: 16px;
      margin-left: 0;
      width: 100%;
    }
  }
`

const MailingHeaderWrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  h3 {
    margin-left: 27px;
    margin-bottom: 0;
  }
  svg {
    min-width: 49px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 65px;
    width: 100%;
    padding: 8px;
    button {
      flex-grow: 1;
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
  min-width: 310px;
`

export default SiteIndex
