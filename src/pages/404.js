import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import ShellWrapper from "../components/ShellWrapper"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout title="Page Not Found" compact>
    <SEO title="Page Not Found" />
    <Wrapper>
      <p>This link is broken or the page has been moved. Maybe were looking for:</p>
      <List>
        <li><a href="/">Home</a></li>
        <li><a href="/tutorials">Tutorials</a></li>
        <li><a href="/resources">Resources</a></li>
      </List>
    </Wrapper>
  </Layout>
)

const Wrapper = styled(ShellWrapper)`
  max-width: 800px;
`

const List = styled.ul`
  list-style: square outside;

  & > li {
    margin-bottom: 0;
  }

  & > li + li {
    margin-top: 5px;
  }
`


export default NotFoundPage

