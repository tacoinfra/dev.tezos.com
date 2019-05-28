import React, { useEffect } from "react"
import debounce from "lodash.debounce"

const EqualHeight = ({ nodes, children }) => {
  const handleResize = debounce(() => {
    const currentNodes = nodes.map(node => node.current).filter(a => a)
    const heightList = currentNodes.map(node => {
      // remove any forced sizing information
      node.style.height = 'auto'
      node.style.maxHeight = ''
      node.style.minHeight = ''

      // get natural size
      const { height } = node.getBoundingClientRect()

      return height
    })
    const maxHeight = Math.max(...heightList)

    // update height using the max height
    currentNodes.forEach(node => {
      node.style.height = `${maxHeight}px`;
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
