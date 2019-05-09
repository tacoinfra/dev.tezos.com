import React from "react";
import styled from "@emotion/styled";
import palette from "../utils/palette";

const CTA = ({ href, isSecondary = false, isHeader = false, children }) => (
  <CallToAction isHeader={isHeader} href={href} isSecondary={isSecondary}>{children}</CallToAction>
);

const CallToAction = styled.a`
  color: ${palette.white};
  background: ${props => props.isSecondary ? palette.darkBlue : palette.blue} none repeat scroll 0% 0%;
  border: 2px solid ${palette.blue};
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
  flex-grow: 1;
  -moz-box-align: center;
  align-items: center;
  justify-content: space-around;
  opacity: 1;
  white-space: nowrap;
  position: relative;
  min-width: 183px;
  height: ${props => props.isHeader ? '40px' : '50px'};
  &:hover {
    opacity: 0.8;
  }
  & + a {
    margin-left: 32.25px;
  }
`

export default CTA;
