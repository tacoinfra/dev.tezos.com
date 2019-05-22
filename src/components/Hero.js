import React from "react";
import styled from "@emotion/styled";
import { palette, breakpoints, spacings } from "../utils/variables";
// NOTE: For some reason, Gatsby doesn't like SVG's as background images in styled components, so I had to code this kind of oddly
// NOTE: I opted to use an SVG because of the Quality and Performance benefits. If it becomes a hassle, I've included a JPG and PNG in assets you can switch it for
import HeroBackground from "../assets/hero_background.svg";
import ShellWrapper from './ShellWrapper';

const Hero = ({ compact, children = null }) => (
  <HeroContainer compact={compact}>
    <BackgroundImage compact={compact} />
    <HeroContentWrapper>{children}</HeroContentWrapper>
  </HeroContainer>
)

const HeroContainer = styled.div`
  align-items: center;
  background-color: ${palette.darkBlue};
  display: flex;
  min-height: ${props => props.compact ? '300px' : '580px'};
  padding-top: 100px;
  padding-bottom: 50px;
  position: relative;
  width: 100%;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 50%;
    bottom: 0;
    background-color: #1A4D98; /* one off color from svg bg */
    z-index: 0;
  }
`;

const HeroContentWrapper = styled(ShellWrapper)`
  color: ${palette.white};
  position: relative;
  z-index: 2;

  @media (min-width: ${breakpoints.tablet}) {
    padding-left: 360px;
  }
`

const BackgroundImage = styled(HeroBackground)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: ${spacings.maxWidth};
  margin-left: calc(${spacings.maxWidth} / -2 - 30px); /* pull left, plus "padding" */
  height: 100%;
  z-index: 1;
  -webkit-transform: translate3d(0,0,-1);

  > g {
    transform: ${({ compact }) => (
      compact
      ? "translate3d(0, -60px, 0)"
      : "translate3d(0, 0px, 0)"
    )};
  }
`

export default Hero;
