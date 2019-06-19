import React from "react"
import styled from "@emotion/styled"
import CircleIcon from "./CircleIcon"
import { palette } from "../utils/variables"

// images
import GitlabIcon from "../assets/social-gitlab.svg"
import TwitterIcon from "../assets/social-twitter.svg"
import RiotIcon from "../assets/social-riot.svg"
import StackexchangeIcon from "../assets/social-stackexchange.svg"

// NOTE: Footer component is presentational and does not change (it's a static presentational component)
const Footer = () => (
  <FooterContainer>
    <SocialContent>
      <SocialHeader>Follow Us</SocialHeader>
      <SocialList>
        <li>
          <CircleIcon href="https://riot.im/app/#/room/#freenode_#tezos:matrix.org">
            <RiotIcon />
          </CircleIcon>
        </li>
        <li>
          <CircleIcon href="https://gitlab.com/tezos/tezos">
            <GitlabIcon />
          </CircleIcon>
        </li>
        <li>
          <CircleIcon href="https://twitter.com/tezos">
            <TwitterIcon />
          </CircleIcon>
        </li>
        <li>
          <CircleIcon href="https://tezos.stackexchange.com/">
            <StackexchangeIcon />
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
