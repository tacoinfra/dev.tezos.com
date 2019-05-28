import React, { useEffect } from "react"
import debounce from "lodash.debounce"

const EqualHeight = ({ nodes, children }) => {
  const handleResize = debounce(() => {
    const currentNodes = nodes.map(node => node.current).filter(a => a)
    const dimensionsList = currentNodes.map(node => {
      // remove any forced sizing information
      node.style.height = 'auto'
      node.style.maxHeight = ''
      node.style.minHeight = ''

      // get natural size
      const { top, height } = node.getBoundingClientRect()
      return { node, top, height }
    })

    // group nodes by top offset
    const nodeGroups = Object.values(
      dimensionsList.reduce((accumulator, { node, top, height }) => {
        if (!accumulator[top]) accumulator[top] = []
        accumulator[top].push({ node, height })
        return accumulator
      }, { })
    )

    // get max height and update height for each group
    nodeGroups.forEach((group) => {
      const heightList = group.map(item => item.height)
      const maxHeight = Math.max(...heightList)

      // update height using the max height
      group.forEach(({ node }) => {
        node.style.height = `${maxHeight}px`;
      })
    })
  }, 50)

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  // init
  setTimeout(handleResize)

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default EqualHeight
