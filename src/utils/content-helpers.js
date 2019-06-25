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

export const structureResourcesContent = (data) => {
  const files = getMarkdownFiles(data)
  return files.filter(file => file.type === 'resource')
}
