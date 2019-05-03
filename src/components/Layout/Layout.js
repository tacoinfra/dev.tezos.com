import React, { Fragment } from "react"
import styled from "@emotion/styled"

import Navigation from "./Navigation"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <Fragment>
    <Navigation
      navigationListItems={[
        { title: "Tutorials", href: "/tutorials" },
        { title: "Community", href: "/community" },
      ]}
    />
    <Container>
      <Main>{children}</Main>
    </Container>
    <Footer>Footer</Footer>
  </Fragment>
)

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 148px;
`

const Main = styled.main`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  h1 {
    font-weight: 100;
    font-size: 58px;
    letter-spacing: 2.42;
    line-height: 68px;
  }
`

export default Layout
