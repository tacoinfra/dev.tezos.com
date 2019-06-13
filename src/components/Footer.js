import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { palette, breakpoints, spacings } from "../utils/variables"
import RiotIcon from "../assets/social-riot.svg"
import GitlabIcon from "../assets/social-gitlab.svg"
import TwitterIcon from "../assets/social-twitter.svg"

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
            <a href="https://riot.im/app/#/room/#freenode_#tezos:matrix.org" target="_blank" rel="noopener noreferrer">
              <RiotIcon />
            </a>
          </li>
          <li>
            <a href="https://gitlab.com/tezos/tezos" target="_blank" rel="noopener noreferrer">
              <GitlabIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/tezos" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
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
          Copyright © {new Date().getFullYear()}. All rights reserved.
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
    transition: transform 0.25s ease-in-out;
    &:hover {
      transform: translateY(-4px);
    }
  }
`

export default Footer
