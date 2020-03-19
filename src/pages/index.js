import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
import {
  structureNotificationBarContent,
  structureGettingStartedContent,
  structureResourcesContent,
} from "../utils/content-helpers"

const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___priority] }
      filter: {
        frontmatter: {
          type: { regex: "/(resource|getting-started|notification-bar)/" }
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
            description
            priority
            maxContent
            tutorials {
              title
              link
            }
            languages {
              title
              preTitleText
              link
            }
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

const ResourceList = ({ list }) => {
  return (
    <ul>
      {list.map(({ title, preTitleText = "", link }, i) => (
        <li key={`${link}-${i}`}>
          {preTitleText.length > 0 && `${preTitleText} | `}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

const SiteIndex = ({ location }) => {
  const data = useStaticQuery(query)
  const notificationBarContent = structureNotificationBarContent(data)
  const gettingStartedContent = structureGettingStartedContent(data)
  const resourcesContent = structureResourcesContent(data)

  return (
    <Layout
      location={location}
      notificationBarContent={notificationBarContent}
      title="Tezos Developer Portal"
      subtitle="Resources for Developers"
      heroContent={<HomeHeroContent />}
    >
      <SEO />

      <Wrapper>
        <CalloutGroup>
          <h2>Getting Started</h2>

          <PostListGroup columns={gettingStartedContent.length}>
            {refList =>
              gettingStartedContent.map(
                (
                  { title, description, tutorials, languages, resources },
                  index
                ) => (
                  <PostList
                    key={title}
                    titleRef={refList[index]}
                    title={
                      <NumberTitle number={index + 1}>{title}</NumberTitle>
                    }
                  >
                    <p>
                      <small>{description}</small>
                    </p>

                    {tutorials && tutorials.length > 0 && (
                      <React.Fragment>
                        <ResourceList list={tutorials} />
                      </React.Fragment>
                    )}

                    {languages && languages.length > 0 && (
                      <React.Fragment>
                        <ResourceList list={languages} />
                      </React.Fragment>
                    )}

                    {resources && resources.length > 0 && (
                      <React.Fragment>
                        <ResourceList list={resources} />
                      </React.Fragment>
                    )}
                  </PostList>
                )
              )
            }
          </PostListGroup>
        </CalloutGroup>

        <Section>
          <SectionHeading centered>Resources</SectionHeading>

          <PostListGroup columns={resourcesContent.length}>
            {refList =>
              resourcesContent.map(
                ({ title, slug, resources, maxContent }, index) => {
                  // Sometimes we want to limit the content on the homepage
                  let resourceList = resources
                  // If the maxContent is -1 it means we want to show everything
                  if (maxContent > -1) {
                    resourceList = resourceList.slice(0, maxContent)
                  }
                  return (
                    <PostList
                      key={title}
                      titleRef={refList[index]}
                      title={<h3>{title}</h3>}
                      link={`/resources#${slug}`}
                    >
                      <ul>
                        {resourceList.map(({ link, title, description }) => (
                          <li key={link}>
                            <p>
                              <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {title}
                              </a>
                            </p>
                            <p>
                              <small>{description}</small>
                            </p>
                          </li>
                        ))}
                      </ul>
                    </PostList>
                  )
                }
              )
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
