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

const Container = styled.div``
const SocialLinks = styled.ul``

const MailSignup = styled.form``

export default HomeHeroContent
