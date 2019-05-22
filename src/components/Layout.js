import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import Header from "./Header"
import ButtonAnchor from "./ButtonAnchor"
import Hero from "../components/Hero"
import Footer from "./Footer"
import { palette, breakpoints } from "../utils/variables"

const Layout = ({
  children,
  location,
  title,
  subtitle,
  compact = false,
  isHome = false,
}) => {
  const globalRules = css`
    body {
      /* This fixes a z-index issue in safari */
      -webkit-transform: translate3d(0, 0, 0);
    }
    a {
      color: ${palette.blue};
      font-weight: 300;
      font-size: 16px;
      line-height: 29px;
      text-decoration: none;
    }
    h1 {
      color: ${palette.darkBlue};
      font-size: 58px;
      letter-spacing: 2.24px;
      font-weight: 300;
    }
    h2 {
      font-weight: 300;
      letter-spacing: 1.04;
      line-height: 42px;
      font-size: 36px;
      color: ${palette.darkBlue};
    }
    h3 {
      color: ${palette.darkBlue};
      font-size: 36px;
      letter-spacing: 1.5px;
      line-height: 34px;
      font-weight: 300;
    }
  `

  return (
    <Container>
      <Global styles={globalRules} />
      <Header />
      <Hero compact={compact}>
        <PageTitle>{title}</PageTitle>
        {subtitle && <PageSubtitle>{subtitle}</PageSubtitle>}
        {isHome && (
          <ButtonWrapper>
            <ButtonAnchor href="#">Build & Run A Node</ButtonAnchor>
            <ButtonAnchor href="#">Use Testnet Faucet</ButtonAnchor>
          </ButtonWrapper>
        )}
      </Hero>
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${palette.white};
`

const PageTitle = styled.h1`
  color: ${palette.white};
  font-weight: 300;
  z-index: 2;
  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
  }
`

const PageSubtitle = styled.h2`
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 66px;
  font-weight: 300;
  z-index: 2;
  color: ${palette.white};
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 26px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 552px;
  > * {
    width: 256px;
  }
  a + a {
    margin-left: 40px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    a + a {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`

const Main = styled.main`
  background-color: ${palette.white};
  flex-grow: 1;
  width: 100%;
`

export default Layout
