import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { palette, breakpoints, spacings } from "../utils/variables"
import RiotIcon from "../assets/riot.svg"
import GitlabIcon from "../assets/gitlab.svg"
import TwitterIcon from "../assets/twitter.svg"
import FacebookIcon from "../assets/facebook.svg"

// NOTE: Footer component is presentational and does not change (it's a static presentational component)
const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <SocialContent>
        <p
          css={css`
            font-size: 18px;
            margin: 0 40px 0 0;
            font-weight: 100;
            white-space: nowrap;
          `}
        >
          Follow Us
        </p>
        <SocialList
          css={css`
            margin: 0;
          `}
        >
          <li>
            <RiotIcon />
          </li>
          <li>
            <GitlabIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
        </SocialList>
      </SocialContent>
      <div>
        <p
          css={css`
            margin: 0;
            font-weight: 100;
          `}
        >
          Copyright © {new Date().getFullYear()} Tezos. All rights reserved.
        </p>
      </div>
    </FooterContent>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: ${palette.darkerBlue};
  color: ${palette.white};
  padding: 64px 8px;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: ${spacings.maxWidth};
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`

const SocialContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const SocialList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  li {
    margin: 0 18px 0 0;
  }
`

export default Footer
