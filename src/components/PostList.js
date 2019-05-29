import React from "react"
import styled from "@emotion/styled"
import { palette } from "../utils/variables"
import ArrowSvg from "../assets/arrow-right.svg"

const PostList = ({
  titleRef,
  id,
  title,
  link,
  children
}) => (
  <div id={id}>
    <Header ref={titleRef}>
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
  </div>
)

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
  white-space: nowrap;

  span {
    margin-right: 5px;
  }

  svg {
    position: relative;
    top: 2px;
  }

  a {
    font-weight: 400;

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
  margin-top: 30px;

  & > * + * {
    margin-top: 10px;
  }

  h4 {
    margin-top: 25px;
    margin-bottom: 18px;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    margin: 0;
    padding: 0 0 8px 0;
    border-bottom: 1px solid ${palette.grey};

    & + li {
      padding-top: 8px;
    }

    p {
      margin: 0;

      & + p {
        margin-top: -4px;
      }
    }
  }
`

export default PostList
