import slugify from "slugify"

export const getLibraries = contentList => (
  contentList.filter(post => post.category === "library")
)

export const getTools = contentList => (
  contentList.filter(post => post.category === "tool")
)

export const getTutorials = contentList => (
  contentList.filter(post => post.category === "tutorial")
)

export const getOrganizedTutorials = contentList => {
  // First we organize all content with category of tutorial
  const tutorials = getTutorials(contentList)

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
  return subcategories.reduce(
    (accumulator, currentValue) => ({
      ...accumulator, // We return an object that spreads our current accumulator
      [currentValue]: tutorials.filter(
        // We set the currentValue as a key and grab all the tutorials with that subcategory (currentValue)
        tutorial => tutorial.subcategory === currentValue
      ),
    }),
    {}
  )
}

// gather category slugs for scrollspy code
export const getCategorySlugs = organizedGroups => (
  Object.keys(organizedGroups)
    .map(category => slugify(category.toLowerCase()))
)
