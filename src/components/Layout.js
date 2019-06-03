import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import Header from "./Header"
import Hero from "../components/Hero"
import Footer from "./Footer"
import { palette } from "../utils/variables"

const Layout = ({
  children,
  title,
  subtitle,
  heroContent,
  compact = false
}) => {
  // TODO: Remove this
  if (window.location.hostname === 'developer.tezos.com') {
    return 'Under Construction'
  }
  return (
    (
      <Container>
        <Global styles={globalRules} />
        <Header />
        <Hero
          compact={compact}
          title={title}
          subtitle={subtitle}
        >
          {heroContent}
        </Hero>
        <Main>{children}</Main>
        <Footer />
      </Container>
    )
  )
}

const globalRules = css`
  body {
    /* This fixes a z-index issue in safari */
    -webkit-transform: translate3d(0, 0, 0);
  }
  a {
    color: ${palette.blue};
    font-weight: 300;
    line-height: 29px;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  h1, h2, h3 {
    color: ${palette.darkBlue};
    font-weight: 300;
  }
  h1 {
    font-size: 58px;
    letter-spacing: 2.24px;
  }
  h2 {
    font-size: 36px;
    letter-spacing: 1.04;
    line-height: 42px;
  }
  h3 {
    font-size: 25px;
    line-height: 30px;
    font-weight: 400;
  }
  h4 {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
  }
  small {
    font-size: 14px;
    line-height: 26px;
  }
`

const Container = styled.div`
  align-items: center;
  background-color: ${palette.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
`

const Main = styled.main`
  background-color: ${palette.white};
  flex-grow: 1;
  width: 100%;
`

export default Layout
