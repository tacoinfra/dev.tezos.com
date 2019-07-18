import React  from "react"
import styled from "@emotion/styled"
import { palette, spacings } from "../utils/variables"

const NotificationBar = ({
  notification,
  link
}) => {
  return (
    <NotificationBarContainer href={link}>
      <Wrapper>
        {notification}
      </Wrapper>
    </NotificationBarContainer>
  )
}

const NotificationBarContainer = styled.a`
  background-color: ${palette.darkerBlue};
  color: ${palette.white};
  padding: 20px 20px;
  width: 100%;
`

const Wrapper = styled.div`
  max-width: ${spacings.maxWidth};
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
`

export default NotificationBar
