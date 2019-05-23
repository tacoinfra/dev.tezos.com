import React from "react"
import styled from "@emotion/styled"
import slugify from "slugify"
import Scrollspy from "react-scrollspy"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import { palette, breakpoints, spacings } from "../utils/variables"
import contentList from "./content.json"
import ShellWrapper from "../components/ShellWrapper"
import SectionHeading from "../components/SectionHeading"

// First we organize all content with category of tutorial
const tutorials = contentList.filter(
  content => content.category === "tutorial"
)

// Second we grab an array of all the different subcategories
const subcategories = tutorials
  .map(tutorial => tutorial.subcategory) // First we map out each subcategory
  .reduce((accumulator, currentValue) => {
    // Next we call reduce to remove duplicates
    if (accumulator.indexOf(currentValue) === -1) {
      // First we check if the current subcategory already exists in our array
      return [...accumulator, currentValue] // If it doesn't, add it
    } else {
      return accumulator // Otherwise just skip it (by returning the accumulator as is)
    }
  }, [])

// Last we created an object that has each subcategory as a key, and the respective tutorials for that subcategory as their values
const organizedTutorials = subcategories.reduce(
  (accumulator, currentValue) => ({
    ...accumulator, // We return an object that spreads our current accumulator
    [currentValue]: tutorials.filter(
      // We set the currentValue as a key and grab all the tutorials with that subcategory (currentValue)
      tutorial => tutorial.subcategory === currentValue
    ),
  }),
  {}
)

// gather category slus for scrollspu
const categorySlugs =
  Object.keys(organizedTutorials)
    .map(category => slugify(category.toLowerCase()))

const TutorialIndex = ({ location }) => {
  return (
    <Layout location={location} title="Tutorials" compact>
      <SEO title="All posts" />

      <Wrapper>
        <FlexWrapper>
          <Sidebar>
            <Scrollspy items={categorySlugs} currentClassName={'is-current'} componentTag={SidebarList}>
              {Object.keys(organizedTutorials).map(category => (
                <li key={category}>
                  <a href={`#${slugify(category.toLowerCase())}`}>{category}</a>
                </li>
              ))}
            </Scrollspy>
          </Sidebar>

          <Main>
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
          </Main>
        </FlexWrapper>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  position: relative;

  @media (min-width: ${breakpoints.mobile}) {
    &::before {
      content: '';
      position: absolute;
      background-color: ${palette.lightGrey};
      top: 0;
      left: 0;
      bottom: 0;
      right: 50%;
      z-index: 0;
    }
  }
`

const FlexWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  max-width: ${spacings.maxWidth};
  position: relative;
  width: 100%;
  z-index: 1;

  @media (min-width: ${breakpoints.mobile}) {
    flex-flow: row nowrap;
  }
`

const Sidebar = styled(ShellWrapper)`
  background-color: ${palette.lightGrey};
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.mobile}) {
    position: sticky;
    top: -28px;
    margin-bottom: 0;
    padding-top: 68px;
    width: 350px;
  }
`

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

const Main = styled(ShellWrapper)`
  background-color: ${palette.white};

  @media (min-width: ${breakpoints.mobile}) {
    padding-top: 68px;
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
