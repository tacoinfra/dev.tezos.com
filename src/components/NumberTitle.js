import React from "react"
import styled from "@emotion/styled"
import CircleIcon from './CircleIcon'

const NumberTitle = ({
  number,
  children
}) => (
  <Container>
    <CircleIcon><span>{number}</span></CircleIcon>
    <Heading>{children}</Heading>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: self-end;
`

const Heading = styled.h3`
  font-size: 19px;
  flex-grow: 1;
  margin-left: 12px;
`

export default NumberTitle
