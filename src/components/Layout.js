import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import Header from "./Header"
import ButtonAnchor from "./ButtonAnchor"
import Hero from "../components/Hero"
import Footer from "./Footer"
import { palette, breakpoints, spacings } from "../utils/variables"

const Layout = ({ children, location, title, subtitle }) => {
  const globalRules = css`
    body {
       {
        /* This fixes a z-index issue in safari */
      }
      -webkit-transform: translate3d(0, 0, 0);
    }
    h1 {
      color: ${palette.darkBlue};
      font-size: 58px;
      letter-spacing: 2.24px;
      font-weight: 300;
    }
    h3 {
      color: ${palette.darkBlue};
      font-size: 30px;
      letter-spacing: 1.25px;
      line-height: 34px;
      font-weight: 300;
    }
  `

  return (
    <Container>
      <Global styles={globalRules} />
      <Header />
      <Hero>
        <HeroContentWrapper isHome={location.pathname === "/"}>
          <PageTitle isHome={location.pathname === "/"}>{title}</PageTitle>
          <PageSubtitle>{subtitle}</PageSubtitle>
          {location.pathname === "/" && (
            <ButtonWrapper>
              <ButtonAnchor href="#">Build & Run A Node</ButtonAnchor>
              <ButtonAnchor href="#">Use Testnet Faucet</ButtonAnchor>
            </ButtonWrapper>
          )}
        </HeroContentWrapper>
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

const HeroContentWrapper = styled.div`
  max-width: ${spacings.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.isHome ? "center" : "flex-start"};
  color: ${palette.white};
  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
  }
`

const PageTitle = styled.h1`
  color: ${palette.white};
  font-weight: 300;
  z-index: 2;
  margin-left: ${props => props.isHome ? "0" : "25%"};
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
  width: 100%;
  min-height: calc(
    100vh - 452px - 90px
  ); /* 100 view height - size of footer (452px) - size of header (90px) */
  background-color: ${palette.white};
`

export default Layout
