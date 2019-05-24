import React from "react"
import styled from "@emotion/styled"
import { palette } from "../utils/variables"

const CircleIcon = styled.div`
  background-color: ${palette.blue};
  border-radius: 100px;
  display: inline-block;
  flex: 0 0 40px;
  height: 40px;
  position: relative;
  vertical-align: middle;
  width: 40px;

  svg,
  img,
  span {
    position: absolute;
    top: 7px;
    left: 0;
    right: 0;
    text-align: center;
    color: ${palette.white};
  }

  img,
  svg {
    height: 100%;
    left: 0;
    margin-top: 0;
    top: 0;
    width: 100%;
  }
`

export default CircleIcon
