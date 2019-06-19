import React from "react"
import styled from "@emotion/styled"
import CircleIcon from "./CircleIcon"
import { palette, breakpoints, spacings } from "../utils/variables"

// images
import redditIcon from "../assets/icon-reddit.png"
import redditIcon2x from "../assets/icon-reddit@2x.png"
import riotIcon from "../assets/icon-riot.png"
import riotIcon2x from "../assets/icon-riot@2x.png"
import stackexchangeIcon from "../assets/icon-stackexchange.png"
import stackexchangeIcon2x from "../assets/icon-stackexchange@2x.png"

const srcSet = (src, src2x) => `${src} 1x, ${src2x} 2x`

// NOTE: Footer component is presentational and does not change (it's a static presentational component)
const Footer = () => (
  <FooterContainer>
    <SocialContent>
      <SocialHeader>Follow Us</SocialHeader>
      <SocialList>
        <li>
          <CircleIcon href="https://www.reddit.com/r/tezos">
            <img
              src={redditIcon2x}
              srcSet={srcSet(redditIcon, redditIcon2x)}
              alt="Reddit"
            />
          </CircleIcon>
        </li>
        <li>
          <CircleIcon href="https://riot.im/app/#/room/#freenode_#tezos:matrix.org">
            <img
              src={riotIcon2x}
              srcSet={srcSet(riotIcon, riotIcon2x)}
              alt="Riot"
            />
          </CircleIcon>
        </li>
        <li>
          <CircleIcon href="https://tezos.stackexchange.com/">
            <img
              src={stackexchangeIcon2x}
              srcSet={srcSet(stackexchangeIcon, stackexchangeIcon2x)}
              alt="Stack Exchange"
            />
          </CircleIcon>
        </li>
      </SocialList>
    </SocialContent>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.darkerBlue};
  color: ${palette.white};
  padding: 64px 8px;
`

const SocialContent = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const SocialHeader = styled.p`
  font-size: 18px;
  margin: 0 18px 0 0;
  font-weight: 100;
  white-space: nowrap;
`

const SocialList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  margin: 0;

  & > li {
    margin-bottom: 0;
  }

  & > * + * {
    margin-left: 12px;
  }
`

export default Footer
