import React from "react"
import styled from "@emotion/styled"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <Container>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Container>
)

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
`

export default Layout
