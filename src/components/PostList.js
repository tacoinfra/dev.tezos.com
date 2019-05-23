import React from "react"
import styled from "@emotion/styled"
import { palette } from "../utils/variables"
import ArrowSvg from "../assets/arrow-right.svg"

const PostList = ({
  title,
  link,
  children
}) => (
  <Container>
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
      { link && (
        <HeaderLink>
          <a href={link}>View all <ArrowSvg /></a>
        </HeaderLink>
      ) }
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
)

const Container = styled.div``

const Header = styled.header`
  border-bottom: 3px solid ${palette.blue};
`
const HeaderTitle = styled.div``
const HeaderLink = styled.div``

const Content = styled.div``

export default PostList
