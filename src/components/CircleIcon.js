import React from "react"
import styled from "@emotion/styled"
import { palette } from "../utils/variables"

const CircleIcon = ({ children }) => (
  <Circle>{children}</Circle>
)

const Circle = styled.div`
  background-color: ${palette.blue};
  border-radius: 100px;
  display: inline-block;
  flex-grow: 44px;
  height: 44px;
  margin-right: 12px;
  position: relative;
  vertical-align: middle;
  width: 44px;

  svg,
  span {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -0.5em;
    text-align: center;
  }

  svg {
    height: 90%;
    margin-top: 5%;
    width: 90%;
  }
`

export default CircleIcon
