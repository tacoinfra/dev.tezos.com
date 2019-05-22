import React from "react"
import styled from "@emotion/styled"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import ButtonAnchor from "../components/ButtonAnchor"
import contentList from "./content.json"
import BulletCheckmark from "../assets/bullet_checkmark.svg"
import TetrisBlock from "../assets/tetris_block.svg"
import StackExchangeLogo from "../assets/stackexchange_logo.svg"
import RedditLogo from "../assets/reddit_logo.svg"
import RiotLogo from "../assets/riot_with_text.svg"
import MailIcon from "../assets/mail.svg"
import TZipsIcon from "../assets/tzips.svg"
import { palette, breakpoints, spacings } from "../utils/variables"

const SiteIndex = ({ location }) => {
  const tutorials = contentList.filter(post => post.category === "tutorial")
  const tools = contentList.filter(post => post.category === "tool")

  return (
    <Layout
      location={location}
      title="Tezos Developer Portal"
      subtitle="Technical Resources for Software and Blockchain Developers"
      heroContent={
        <ButtonWrapper>
          <ButtonAnchor href="#">Build & Run A Node</ButtonAnchor>
          <ButtonAnchor href="#">Use Testnet Faucet</ButtonAnchor>
        </ButtonWrapper>
      }
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
        <TZipsSection id="tzips">
          <TZipsContentWrapper>
            <TZipsHeader>
              <TZipsIcon />
              <h3>TZIPS | Governance</h3>
            </TZipsHeader>
            <TZipsBody>
              <p>
                TZIPs, short for Tezos Improvement Proposal, are documents that
                discuss changes or design decisions in the tezos ecosystem.
                TZIPs are meant to supplement the formal governance process by
                acting as an initial platform for discussion.
              </p>
              <ul>
                <li>
                  <a href="https://gitlab.com/tzip/tzip/tree/master">
                    See List of TZIPs
                  </a>
                </li>
                <li>
                  <a href="https://gitlab.com/tzip/tzip/issues">
                    Participate in the Discussions
                  </a>
                </li>
              </ul>
            </TZipsBody>
          </TZipsContentWrapper>
        </TZipsSection>
        <CommunitySection id="community">
          <CommunityHeaderWrapper>
            <TetrisBlock />
            <h3>Community</h3>
          </CommunityHeaderWrapper>
          <CommunitiesList>
            <li>
              {/* NOTE: Icon has a little bit of margin in it, so we correct the header's spacing to accomodate */}
              {/* TODO: Actually correct the svg and remove this inline styling */}
              <a
                style={{
                  marginLeft: "4px",
                }}
                href="https://tezos.stackexchange.com/"
              >
                <StackExchangeLogo />
                <h3>StackExchange</h3>
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/tezos">
                <RedditLogo />
                <h3>Reddit</h3>
              </a>
            </li>
            <li>
              <a href="https://riot.im/app/#/room/#tezos:matrix.org">
                <RiotLogo />
                <h3>Riot</h3>
              </a>
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
  padding: 8px;
`

/* Hero content */
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 552px;
  > * {
    width: 256px;
  }
  a + a {
    margin-left: 40px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    a + a {
      margin-left: 0;
      margin-top: 20px;
    }
  }
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
  line-height: 42px;
  font-size: 36px;
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
  justify-content: space-around;
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
  max-width: 40%;
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
    a {
      border-bottom: none;
    }
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
  margin: 129px 0;
  padding-top: 120px;
  max-width: ${spacings.maxWidth};
  width: 100%;
  border-top: 1px solid ${palette.grey};
`

const TZipsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const TZipsHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 31px;
  h3 {
    margin-bottom: 0;
    margin-left: 24px;
  }
`

const TZipsBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    justify-self: flex-start;
    max-width: 466px;
    width: 100%;
    margin-right: 116px;
  }
  ul li::after {
    content: "▶";
    padding-left: 8px;
    font-size: 0.8em;
    color: ${palette.blue};
  }
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
    a {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      &:hover {
        opacity: 0.8;
      }
    }
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
