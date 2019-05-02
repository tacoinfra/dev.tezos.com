import React, { Fragment } from "react"
import styled from "@emotion/styled"

import Navigation from "./Navigation"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <Fragment>
    <Navigation
      navigationListItems={[
        { title: "Tutorials", href: "/tutorials" },
        { title: "Tools / Libraries / Documentation", href: "/docs" },
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
`

const Main = styled.main`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: left;
`

export default Layout
