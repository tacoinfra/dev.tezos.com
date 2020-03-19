import React from "react"
import styled from "@emotion/styled"
import ShellWrapper from "./ShellWrapper"
import { palette, breakpoints, spacings } from "../utils/variables"

const SplitWrapper = ({ children }) => (
  <Wrapper>
    <FlexWrapper>{children}</FlexWrapper>
  </Wrapper>
)

export const Wrapper = styled.div`
  position: relative;

  @media (min-width: ${breakpoints.mobile}) {
    &::before {
      content: "";
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

export const Sidebar = styled(ShellWrapper)`
  background-color: ${palette.lightGrey};
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.mobile}) {
    position: sticky;
    top: -28px;
    margin-bottom: 0;
    flex: 0 0 350px;
  }
`

export const Main = styled(ShellWrapper)`
  background-color: ${palette.white};
`

export default Object.assign(SplitWrapper, { Sidebar, Main })
