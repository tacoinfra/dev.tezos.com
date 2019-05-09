import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import palette from "../utils/palette"

const ButtonAnchor = ({
  href,
  type = "text",
  isAnchor = true,
  isSecondary = false,
  isSmall = false,
  children,
}) => {
  return isAnchor ? (
    <StyledAnchor isSmall={isSmall} href={href} isSecondary={isSecondary}>
      {children}
    </StyledAnchor>
  ) : (
    <StyledButton
      type={type}
      isSmall={isSmall}
      href={href}
      isSecondary={isSecondary}
    >
      {children}
    </StyledButton>
  )
}

const BaseStyles = css`
  padding: 14px 40px;
  display: flex;
  text-decoration: none;
  line-height: 1;
  font-weight: 300;
  font-size: 13px;
  text-align: center;
  border-radius: 100px;
  text-transform: uppercase;
  flex-direction: row;
  flex-grow: 0;
  -moz-box-align: center;
  align-items: center;
  justify-content: space-around;
  opacity: 1;
  white-space: nowrap;
  position: relative;
  min-width: 183px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const StyledAnchor = styled.a`
  ${BaseStyles};
  color: ${palette.white};
  background: ${props => (props.isSecondary ? palette.darkBlue : palette.blue)}
    none repeat scroll 0% 0%;
  border: 2px solid ${palette.blue};
  height: ${props => (props.isSmall ? "40px" : "50px")};
  & + a {
    margin-left: 32.25px;
  }
`

const StyledButton = styled.button`
  ${BaseStyles}
  background: ${props =>
    props.type === "submit" ? palette.white : palette.darkBlue};
  color: ${props =>
    props.type === "submit" ? palette.darkBlue : palette.white};
  border: 2px solid ${palette.darkBlue};
  opacity: ${props => props.type === "submit" ? 0.5 : 1};
  height: ${props => (props.isSmall ? "40px" : "50px")};
`

export default ButtonAnchor
