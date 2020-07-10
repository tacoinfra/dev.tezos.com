import React from "react"
import styled from "@emotion/styled"
import CircleIcon from "./CircleIcon"
import { palette } from "../utils/variables"

// images
import GitlabIcon from "../assets/social-gitlab.svg"
import RedditIcon from "../assets/social-reddit.svg"
import RiotIcon from "../assets/social-riot.svg"
import StackexchangeIcon from "../assets/social-stackexchange.svg"
import TelegramIcon from "../assets/social-telegram.svg"
import TwitterIcon from "../assets/social-icon-twitter.svg"
import TezosIcon from "../assets/icon-tezos.svg"

// NOTE: Footer component is presentational and does not change (it's a static presentational component)
const Footer = () => (
  <FooterContainer>
    <SocialContent>
      <SocialHeader>Follow the Tezos Project</SocialHeader>
      <SocialList>
        <li>
          <CircleIcon
            href="https://tezos.stackexchange.com/"
            label="StackExchange"
          >
            <StackexchangeIcon />
          </CircleIcon>
        </li>
        <li>
          <CircleIcon href="https://t.me/TezosDevelopers" label="Telegram">
            <TelegramIcon />
          </CircleIcon>
        </li>

        <li>
          <CircleIcon href="https://twitter.com/tezos" label="Twitter">
            <TwitterIcon />
          </CircleIcon>
        </li>

        <li>
          <CircleIcon href="https://forum.tezosagora.org/" label="Agora">
            <TezosIcon />
          </CircleIcon>
        </li>

        <li>
          <CircleIcon href="https://www.reddit.com/r/tezos" label="Reddit">
            <RedditIcon />
          </CircleIcon>
        </li>
        <li>
          <CircleIcon
            href="https://riot.tzchat.org/#/room/#freenode_#tezos:matrix.org"
            label="Riot"
          >
            <RiotIcon />
          </CircleIcon>
        </li>
        <li>
          <CircleIcon href="https://gitlab.com/tezos/tezos" label="Gitlab">
            <GitlabIcon />
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
