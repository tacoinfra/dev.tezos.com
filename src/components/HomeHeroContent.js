import React from "react"
import styled from "@emotion/styled"
import ButtonAnchor from './ButtonAnchor'
import TextInput from './TextInput'
import CircleIcon from './CircleIcon'
import { palette, breakpoints, spacings } from "../utils/variables"
import RedditLogo from "../assets/reddit_logo.svg"
import RiotLogo from "../assets/riot.svg"
import StackExtangeLogo from "../assets/stackexchange_logo.svg"
import EmailSvg from "../assets/mail.svg"

const HomeHeroContent = () => (
  <Container>
    <SocialLinks>
      <li><CircleIcon href="#"><RedditLogo /></CircleIcon></li>
      <li><CircleIcon href="#"><RiotLogo /></CircleIcon></li>
      <li><CircleIcon href="#"><StackExtangeLogo /></CircleIcon></li>
    </SocialLinks>

    <MailSignup>
      <label htmlFor="email">
        <CircleIcon><EmailSvg /></CircleIcon>
        <span>Developer Mailing List</span>
      </label>
      <TextInput id="email" name="email" placeholder="Email"></TextInput>
      <ButtonAnchor type="submit" isSmall isSecondary>Submit</ButtonAnchor>
    </MailSignup>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    flex-flow: row nowrap;
  }
`

const SocialLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`

const MailSignup = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;

  label {
    display: flex;
    align-items: center;

    span {
      white-space: nowrap;
    }
  }

  input {
    margin: 2px 20px 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    border-top: none;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    margin-left: 40px;
    margin-top: 0;
    padding-left: 40px;
    padding-right: 40px;
  }
`

export default HomeHeroContent
