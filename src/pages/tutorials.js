import React from "react"
import styled from "@emotion/styled"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import { palette, breakpoints, spacings } from "../utils/variables"
import contentList from "./content.json"
import ShellWrapper from '../components/ShellWrapper'

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

const TutorialIndex = ({ location }) => {
  return (
    <Layout location={location} title="Tutorials" compact>
      <SEO title="All posts" />

      <Wrapper>
        <Sidebar>
          <SidebarList>
            {Object.keys(organizedTutorials).map(category => (
              <li key={category}>
                <a href={`#${category.toLowerCase()}`}>{category}</a>
              </li>
            ))}
          </SidebarList>
        </Sidebar>

        <Main>
          {Object.keys(organizedTutorials).map(category => (
            <TutorialGroup key={category}>
              <TutorialHeading>{category}</TutorialHeading>
              {
                organizedTutorials[category].map(item => (
                  <TutorialItem
                    key={item.slug}
                    href={item.link}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.author}</p>
                    {item.description.length > 0 && (
                      <p>{item.description}</p>
                    )}
                  </TutorialItem>
                ))
              }
            </TutorialGroup>
          ))}
        </Main>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled(ShellWrapper)``
const Sidebar = styled.ul``
const SidebarList = styled.div``
const Main = styled.div``
const TutorialGroup = styled.div``
const TutorialHeading = styled.h2``
const TutorialItem = styled.a``


export default TutorialIndex
