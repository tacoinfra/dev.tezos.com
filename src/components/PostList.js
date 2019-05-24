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
          <a href={link}><span>View all</span> <ArrowSvg /></a>
        </HeaderLink>
      ) }
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
)

const Container = styled.div`
`

const Header = styled.header`
  display: flex;
  border-bottom: 3px solid ${palette.blue};
  padding-bottom: 20px;
  width: 100%;
`
const HeaderTitle = styled.div`
  flex-grow: 1;

  h3 {
    margin-bottom: 0;
  }
`

const HeaderLink = styled.div`
  span {
    margin-right: 5px;
  }

  svg {
    position: relative;
    top: 2px;
  }

  a {
    &:hover,
    &:focus {
      text-decoration: none;

      span {
        text-decoration: underline;
      }
    }
  }
`

const Content = styled.div`
  margin-top: 20px;

  & > * + * {
    margin-top: 10px;
  }

  h4 {
    margin-top: 25px;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    padding-bottom: 15px;
    border-bottom: 1px solid ${palette.grey};

    p {
      margin: 0;
    }
  }
`

export default PostList
