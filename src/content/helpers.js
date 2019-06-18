export const getMarkdownFiles = (data) => {
  return data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
    html: node.html
  }))
}

export const structureGettingStartedContent = (data) => {
  const files = getMarkdownFiles(data)
  return files.filter(file => file.type === 'getting-started')
}

export const structureTutorialsContent = (data) => {
  const files = getMarkdownFiles(data)
  const metaFiles = files.filter(file => file.meta)
  const tutorialFiles = files.filter(file => (
    file.type === 'tutorial' && !file.meta
  ))

  return metaFiles.map(({ category, title, html }) => {
    return {
      slug: category,
      title,
      html,
      tutorials: (
        tutorialFiles
          .filter(file => file.category === category)
      )
    }
  })
}

export const structureResourcesContent = (data) => {
  const files = getMarkdownFiles(data)
  return files.filter(file => file.type === 'resource')
}
