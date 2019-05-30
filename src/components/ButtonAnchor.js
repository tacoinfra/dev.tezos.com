import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { palette } from "../utils/variables"

const ButtonAnchor = ({
  href,
  type,
  isSecondary = false,
  isSmall = false,
  external = false,
  children,
}) => {
  const Tag = href ? StyledAnchor : StyledButton
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Tag
      type={type}
      href={href}
      isSmall={isSmall}
      isSecondary={isSecondary}
      css={BaseStyles}
      {...externalProps}
    >
      {children}
    </Tag>
  )
}

const BaseStyles = css`
  border-radius: 100px;
  border: 2px solid ${palette.blue};
  color: ${palette.white};
  cursor: pointer;
  display: inline-block;
  font-weight: 300;
  flex-shrink: 0;
  padding: 0 40px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`

const DynamicStyles = props =>
  css`
    line-height: ${props.isSmall ? "27px" : "40px"};
    font-size: ${props.isSmall ? "13px" : "15px"};
    min-width: ${props.isSmall ? "115px" : "183px"};
    background-color: ${props.isSecondary ? palette.darkBlue : palette.blue};
  `

const StyledAnchor = styled.a`
  ${BaseStyles}
  ${DynamicStyles}
  text-transform: uppercase;
`

const StyledButton = styled.button`
  ${BaseStyles}
  ${DynamicStyles}
  text-transform: none;
`

export default ButtonAnchor
