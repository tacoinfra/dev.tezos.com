import React from "react"
import styled from "@emotion/styled"
import { palette } from "../utils/variables"

const NumberTitle = ({
  number,
  children
}) => (
  <Container>
    <Circle><span>{number}</span></Circle>
    <Heading>{children}</Heading>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: self-end;
`

const Circle = styled.div`
  background-color: ${palette.blue};
  border-radius: 100px;
  display: inline-block;
  height: 44px;
  margin-right: 12px;
  position: relative;
  width: 44px;
  flex-grow: 44px;

  span {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -0.5em;
    text-align: center;
  }
`

const Heading = styled.h3`
  font-size: 24px;
`

export default NumberTitle
