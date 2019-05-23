import React from "react"
import styled from "@emotion/styled"
import { palette } from "../utils/variables"

const CircleIcon = styled.div`
  background-color: ${palette.blue};
  border-radius: 100px;
  display: inline-block;
  flex: 0 0 44px;
  height: 44px;
  margin-right: 12px;
  position: relative;
  vertical-align: middle;
  width: 44px;

  svg,
  span {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    text-align: center;
    color: ${palette.white};
  }

  svg {
    height: 90%;
    left: 5%;
    margin-top: 0;
    top: 5%;
    width: 90%;
  }
`

export default CircleIcon
