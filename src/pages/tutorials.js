import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import CollapsibleItem from "../components/CollapsibleItem"
import contentList from "./content.json"

const TutorialIndex = ({ location }) => {
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
  return (
    <Layout location={location} title="Tutorials">
      <SEO title="All posts" />
      <h1>Tutorials</h1>
      {Object.keys(organizedTutorials).map(category => (
        <CollapsibleItem
          key={category}
          category={category}
          content={organizedTutorials[category]}
        />
      ))}
    </Layout>
  )
}

export default TutorialIndex
