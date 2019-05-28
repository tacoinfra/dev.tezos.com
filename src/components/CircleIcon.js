import React from "react"
import styled from "@emotion/styled"
import { palette } from "../utils/variables"

const CircleIcon = ({
  href,
  children
}) => (
  <CircleIconContainer
    as={href ? "a" : "div"}
    target={href ? "_blank" : null}
    href={href}
  >
    {children}
  </CircleIconContainer>
)

const CircleIconContainer = styled.div`
  background-color: ${palette.blue};
  border-radius: 100px;
  display: inline-block;
  flex: 0 0 40px;
  height: 40px;
  position: relative;
  vertical-align: middle;
  width: 40px;

  & > * {
    left: 0;
    position: absolute;
    width: 100%;
  }

  span {
    top: 7px;
    text-align: center;
    color: ${palette.white};
  }

  img,
  svg {
    height: 100%;
    top: 0;
  }

  &[href] {
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`

export default CircleIcon
