import React  from "react"
import styled from "@emotion/styled"
import { palette, spacings } from "../utils/variables"

const NotificationBar = ({
  html: __html,
  link
}) => {
  return (
    <NotificationBarContainer href={link} target="_blank" rel="noopener noreferrer">
      <Wrapper dangerouslySetInnerHTML={{ __html }} />
    </NotificationBarContainer>
  )
}

const NotificationBarContainer = styled.a`
  background-color: ${palette.darkerBlue};
  color: ${palette.white};
  padding: 16px 20px;
  width: 100%;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${palette.lightBoldBlue};
  }
`

const Wrapper = styled.div`
  max-width: ${spacings.maxWidth};
  margin: 0 auto;
  text-align: center;
  font-size: 18px;

  & > :last-child {
    margin-bottom: 0;
  }
`

export default NotificationBar
