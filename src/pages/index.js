import React from "react"
import styled from "@emotion/styled"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import ShellWrapper from "../components/ShellWrapper"
import NumberTitle from "../components/NumberTitle"
import PostList from "../components/PostList"
import PostListGroup from "../components/PostListGroup"
import SectionHeading from "../components/SectionHeading"
import HomeHeroContent from "../components/HomeHeroContent"
import { palette, breakpoints } from "../utils/variables"
import homepageContent from "../content/homepage"

const {
  gettingStarted,
  additionalTutorials,
  resources
} = homepageContent

const SiteIndex = ({ location }) => {
  return (
    <Layout
      location={location}
      title="Tezos Developer Portal"
      subtitle="Resources for Developers"
      heroContent={<HomeHeroContent />}
    >
      <SEO />

      <Wrapper>
        <CalloutGroup>
          <h2>Getting Started</h2>

          <PostListGroup columns={gettingStarted.length}>
            {
              (refList) =>
                gettingStarted.map(({
                  title,
                  description,
                  tutorials,
                  languages,
                  resources
                }, index) => (
                  <PostList
                    key={title}
                    titleRef={refList[index]}
                    title={<NumberTitle number={index + 1}>{title}</NumberTitle>}
                  >
                    <p><small>{description}</small></p>

                    {
                      tutorials &&
                      tutorials.length > 0 &&
                      <React.Fragment>
                        <h4>Tutorials</h4>
                        <ul>
                          {
                            tutorials.map(({ title, link }) => (
                              <li key={link}><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></li>
                            ))
                          }
                        </ul>
                      </React.Fragment>
                    }

                    {
                      languages &&
                      languages.length > 0 &&
                      <React.Fragment>
                        <h4>Languages</h4>
                        <ul>
                          {
                            languages.map(({ title, link }) => (
                              <li key={link}><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></li>
                            ))
                          }
                        </ul>
                      </React.Fragment>
                    }

                    {
                      resources &&
                      resources.length > 0 &&
                      <React.Fragment>
                        <h4>Resources</h4>
                        <ul>
                          {
                            resources.map(({ title, link }) => (
                              <li key={link}><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></li>
                            ))
                          }
                        </ul>
                      </React.Fragment>
                    }
                  </PostList>
                ))
            }
          </PostListGroup>
        </CalloutGroup>

        <Section>
          <SectionHeading centered>Resources</SectionHeading>

          <PostListGroup columns={resources.length}>
            {
              (refList) =>
                resources.map(({ title, link, posts }, index) => (
                  <PostList
                    key={title}
                    titleRef={refList[index]}
                    title={<h3>{title}</h3>}
                    link={link}
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
        </Section>
      </Wrapper>
    </Layout>
  )
}


/* Content components */
const Wrapper = styled(ShellWrapper)`
  padding-top: 20px;

  & > * + * {
    margin-top: 60px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    padding-top: 40px;

    & > * + * {
      margin-top: 80px;
    }
  }
`

/* Callout section */
const CalloutGroup = styled.section`
  padding: 40px 20px 20px;
  background-color: ${palette.lightGrey};

  & > h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    padding: 64px 40px 40px;

    & > h2 {
      margin-bottom: 64px;
    }
  }
`

const Section = styled.section`
  & > * + * {
    margin-top: 40px;
  }
`

export default SiteIndex
