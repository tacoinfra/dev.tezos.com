import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { breakpoints } from "../utils/variables"

const PostListGroup = ({ columns = 3, children }) => (
  <Container columns={columns}>
    {children}
  </Container>
)

const ThreeColumn = css`
  @media (min-width: ${breakpoints.mobile}) {
    /* grid-template-columns: repeat(auto-fill, minmax(45%, 1fr)); */
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }

  @media (min-width: ${breakpoints.tablet}) {
  }
`
const FourColumn = css`
  @media (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  }

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  grid-gap: 40px;

  ${props => props.columns === 3 ? ThreeColumn : FourColumn }
`

export default PostListGroup
