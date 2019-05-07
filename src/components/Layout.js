import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import Header from "./Header"
import Footer from "./Footer"
import palette from "../utils/palette"

const Layout = ({ children }) => {
  const globalRules = css`
    h1 {
      color: ${palette.darkBlue};
      font-size: 58px;
      letter-spacing: 2.24px;
      font-weight: 100;
    }
  `;

  return (
    <Container>
      <Global styles={globalRules} />
      <Header />
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
`

const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 452px - 90px); /* 100 view height - size of footer (452px) - size of header (90px) */
  margin: 148px 0;
`

export default Layout
