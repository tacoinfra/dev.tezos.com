import React from "react"
import styled from "@emotion/styled"
import Scrollspy from "react-scrollspy"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import SplitWrapper from "../components/SplitWrapper"
import SectionHeading from "../components/SectionHeading"
import { palette, breakpoints } from "../utils/variables"
import tutorialsContent from "../content/tutorials"

const slugList = tutorialsContent.map(category => category.slug)

const TutorialIndex = ({ location }) => {
  return (
    <Layout location={location} title="Tutorials" compact>
      <SEO title="Tutorials" />

      <SplitWrapper>
        <SplitWrapper.Sidebar>
          <Scrollspy
            items={slugList}
            currentClassName={'is-current'}
            componentTag={'div'}
          >
            <SidebarList>
              {
                tutorialsContent.map(({ slug, title }) => (
                  <li key={slug}>
                    <a href={`#${slug}`}>{title}</a>
                  </li>
                ))
              }
            </SidebarList>
          </Scrollspy>
        </SplitWrapper.Sidebar>

        <SplitWrapper.Main>
          {
            tutorialsContent.map(({ slug, title, tutorials }) => (
              <TutorialGroup id={slug} key={slug}>
                <SectionHeading>{title}</SectionHeading>
                {
                  tutorials.map(({ title, author, link, body }) => (
                    <TutorialItem
                      key={title}
                      href={link}
                      as={link ? "a" : "div"}
                    >
                      <h3>{title}</h3>
                      {author && <TutorialAuthor>{author}</TutorialAuthor>}
                      <TutorialDescription
                        dangerouslySetInnerHTML={{ __html: body }}
                      />
                    </TutorialItem>
                  ))
                }
              </TutorialGroup>
            ))
          }
        </SplitWrapper.Main>
      </SplitWrapper>
    </Layout>
  )
}

const SidebarList = styled.ul`
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 0;

    & + li {
      margin-top: 20px;
    }

    &.is-current a {
      color: ${palette.blue};
    }
  }

  a {
    color: ${palette.darkBlue};
    font-size: 20px;
    font-weight: 400;
  }
`

const TutorialGroup = styled.div`
  & + & {
    margin-top: 60px;
  }
`

const TutorialItem = styled.a`
  background-color: ${palette.lightestGrey};
  color: ${palette.darkBlue};
  display: block;
  padding: 34px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 400;

  h3 {
    margin-bottom: 0;
  }

  &[href]:hover {
    text-decoration: none;

    h3 { text-decoration: underline; }
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 34px 49px;
  }
`

const TutorialDescription = styled.p`
  margin-bottom: 0;
  margin-top: 20px;
`

const TutorialAuthor = styled.p`
  border-bottom: 1px solid ${palette.grey};
  color: ${palette.blue};
  font-size: 20px;
  padding-bottom: 18px;
  margin-top: 12px;

  & + ${TutorialDescription} {
    margin-top: 12px;
  }
`

export default TutorialIndex
