import React, { useState } from "react"
import styled from "@emotion/styled"
import SmoothCollapse from "react-smooth-collapse"
import Bullet from "../assets/bullet.svg"
import Caret from "../assets/caret.svg"
import { palette } from "../utils/variables"

/**
 *
 * @param {category} String The text shown on the element at all times
 * @param {isOpen} Boolean Default state when the item is loaded in
 * @param {children} any Collapsible items shown/hidden
 * @param {content} Array[Object{
 *  title: String
 *  author: String
 *  description: String
 * }] - Array of Content to show for each category
 *
 */
const CollapsibleItem = ({ category, isOpen = false, content }) => {
  const [isItemOpened, setIsItemOpen] = useState(isOpen)

  return (
    <Wrapper onClick={() => setIsItemOpen(!isItemOpened)}>
      <Bullet />
      <PrimaryContentWrapper>
        <Title>{category}</Title>
        <SmoothCollapse expanded={isItemOpened}>
          {content.map(item => (
            <Content>
              {item.title}
              {item.author}
              {item.description}
            </Content>
          ))}
        </SmoothCollapse>
      </PrimaryContentWrapper>
      <StyledCaret isItemOpen={isItemOpened} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`

const PrimaryContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 90%;
  > * {
    width: 100%;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  font-weight: 300;
  font-size: 36px;
  letter-spacing: 1.5;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 32px;
  background-color: ${palette.lighterGrey};
  padding: 34px;
  width: 100%;
`

const StyledCaret = styled(Caret)`
  transform: ${props => (props.isItemOpen ? "rotate(180deg)" : "rotate(0)")};
`

export default CollapsibleItem
