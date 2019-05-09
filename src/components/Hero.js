import React from "react";
import styled from "@emotion/styled";
import { palette, breakpoints } from "../utils/variables";
// NOTE: For some reason, Gatsby doesn't like SVG's as background images in styled components, so I had to code this kind of oddly
// NOTE: I opted to use an SVG because of the Quality and Performance benefits. If it becomes a hassle, I've included a JPG and PNG in assets you can switch it for
import HeroBackground from "../assets/hero_background.svg";

const Hero = ({ title = "", subtitle = "", children = null }) => (
  <HeroContainer>
    <BackgroundImage />
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    {/* Children isn't necessary, and in fact is only intended to be used for the index page */}
    {children !== null && children}
  </HeroContainer>
)

const HeroContainer = styled.div`
  min-height: 530px;
  position: relative;
  width: 100%;
  display: flex;
  position: relative;
  z-index: 0;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  padding-top: 193px;
  h1, h2 {
    color: ${palette.white};
    font-weight: 300;
    z-index: 2;
  }
  h2 {
    font-size: 24px;
    line-height: 38px;
    margin-bottom: 52px;
    z-index: 2;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 193px 8px 64px 8px;
    h2 {
      margin-bottom: 26px;
    }
  }
`;

const BackgroundImage = styled(HeroBackground)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
  -webkit-transform: translate3d(0,0,-1);
  background-color: ${palette.darkBlue};
`

export default Hero;
