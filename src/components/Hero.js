import React from "react";
import styled from "@emotion/styled";
import { palette, breakpoints, spacings } from "../utils/variables";
// NOTE: For some reason, Gatsby doesn't like SVG's as background images in styled components, so I had to code this kind of oddly
// NOTE: I opted to use an SVG because of the Quality and Performance benefits. If it becomes a hassle, I've included a JPG and PNG in assets you can switch it for
import HeroBackground from "../assets/hero-background.svg";
import ShellWrapper from './ShellWrapper';

const Hero = ({
  title,
  subtitle,
  compact,
  children
}) => (
  <HeroContainer compact={compact}>
    <BackgroundImage compact={compact}>
      <HeroBackground />
    </BackgroundImage>
    <HeroContentWrapper>
      <PageTitle>{title}</PageTitle>
      {subtitle && <PageSubtitle>{subtitle}</PageSubtitle>}
      {children}
    </HeroContentWrapper>
  </HeroContainer>
)

const HeroContainer = styled.div`
  align-items: center;
  background-color: ${palette.darkBlue};
  display: flex;
  min-height: ${props => props.compact ? '300px' : '370px'};
  padding-top: 70px;
  padding-bottom: 0px;
  position: relative;
  width: 100%;
  z-index: 0;
  overflow: hidden;



`

const BackgroundImage = styled.div`
  svg {
    position: absolute;
    top: ${props => props.compact ? '-60px' : '0'};
    left: 50%;
    margin-left: calc(${spacings.maxWidth} * -1 - 600px);
    z-index: 1;
    -webkit-transform: translate3d(0,0,-1);

    @media (max-width: ${breakpoints.mobile}) {
      margin-left: calc(${spacings.maxWidth} * -1 - 620px - 8vw);
    }

    @media (max-width: ${breakpoints.full}) {
      margin-left: calc(${spacings.maxWidth} * -1 - 620px);
    }
  }
`

const HeroContentWrapper = styled(ShellWrapper)`
  color: ${palette.white};
  position: relative;
  z-index: 2;
  padding-top: 0;
  padding-bottom: 0;
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 0 10vw 0 10vw;
    text-align: left;
  }

  @media (min-width: 1280px) {
    padding: 0 10vw 0 15vw;
    text-align: left;
  }

  @media (min-width: ${breakpoints.full}) {
    padding: 0 0 0 360px;
  }
`

const PageTitle = styled.h1`
  color: ${palette.white};
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 2.24px;
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
    margin: 10px 0;
  }
`

const PageSubtitle = styled.h2`
  color: ${palette.white};
  font-size: 24px;
  font-weight: 200;
  line-height: 38px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`

export default Hero;
