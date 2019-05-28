import React from "react"
import styled from "@emotion/styled"
import slugify from "slugify"
import Scrollspy from "react-scrollspy"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import SplitWrapper from "../components/SplitWrapper"
import SectionHeading from "../components/SectionHeading"
import { palette, breakpoints } from "../utils/variables"
import contentList from "./content.json"
import { getOrganizedTutorials, getCategorySlugs } from "../lib/contentHelpers"

const organizedTutorials = getOrganizedTutorials(contentList)
const categorySlugs = getCategorySlugs(organizedTutorials)

const TutorialIndex = ({ location }) => {
  return (
    <Layout location={location} title="Tutorials" compact>
      <SEO title="All posts" />

      <SplitWrapper>
        <SplitWrapper.Sidebar>
          <Scrollspy
            items={categorySlugs}
            currentClassName={'is-current'}
            componentTag={'div'}
          >
            <SidebarList>
              {Object.keys(organizedTutorials).map(category => (
                <li key={category}>
                  <a href={`#${slugify(category.toLowerCase())}`}>{category}</a>
                </li>
              ))}
            </SidebarList>
          </Scrollspy>
        </SplitWrapper.Sidebar>

        <SplitWrapper.Main>
          {Object.keys(organizedTutorials).map(category => (
            <TutorialGroup id={slugify(category.toLowerCase())} key={category}>
              <SectionHeading>{category}</SectionHeading>
              {
                organizedTutorials[category].map(item => (
                  <TutorialItem
                    key={item.slug}
                    href={item.link}
                  >
                    <h3>{item.title}</h3>
                    <TutorialAuthor>{item.author}</TutorialAuthor>
                    {item.description.length > 0 && (
                      <TutorialDescription>{item.description}</TutorialDescription>
                    )}
                  </TutorialItem>
                ))
              }
            </TutorialGroup>
          ))}
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

  h3 {
    margin-bottom: 0;
  }

  &:hover {
    text-decoration: none;

    h3 { text-decoration: underline; }
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 34px 49px;
  }
`

const TutorialAuthor = styled.p`
  border-bottom: 1px solid ${palette.grey};
  color: ${palette.blue};
  font-size: 20px;
  padding-bottom: 18px;
  margin-top: 12px;
  margin-bottom: 12px;
`

const TutorialDescription = styled.p`
  margin-bottom: 0;
`

export default TutorialIndex
