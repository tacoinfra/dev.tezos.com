import React from "react"
import styled from "@emotion/styled"
import MailSignup from "./MailSignup"
import CircleIcon from "./CircleIcon"
import { breakpoints } from "../utils/variables"

// images
import RedditIcon from "../assets/social-reddit.svg"
import RiotIcon from "../assets/social-riot.svg"
import StackexchangeIcon from "../assets/social-stackexchange.svg"

const HomeHeroContent = () => (
  <Container>
    <SocialLinks>
      <li>
        <CircleIcon href="https://www.reddit.com/r/tezos" label="Reddit">
          <RedditIcon />
        </CircleIcon>
      </li>
      <li>
        <CircleIcon href="https://riot.im/app/#/room/#freenode_#tezos:matrix.org" label="Riot">
          <RiotIcon />
        </CircleIcon>
      </li>
      <li>
        <CircleIcon href="https://tezos.stackexchange.com/" label="Stack Exchange">
          <StackexchangeIcon/>
        </CircleIcon>
      </li>
    </SocialLinks>

    <Rule />

    <MailSignup />
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    align-items: flex-start;
  }

  @media (min-width: ${breakpoints.tablet}) {
    flex-flow: row nowrap;
  }
`

const SocialLinks = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 0;
  }

  li + li {
    margin-left: 12px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
  }
`

const Rule = styled.hr`
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
  margin: 20px auto;
  width: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    margin-left: 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none
  }
`

export default HomeHeroContent
