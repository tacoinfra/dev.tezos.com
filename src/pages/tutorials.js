import React, { useState } from "react"
import styled from "@emotion/styled"
import Scrollspy from "react-scrollspy"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import SplitWrapper from "../components/SplitWrapper"
import SectionHeading from "../components/SectionHeading"
import { palette, breakpoints } from "../utils/variables"
import tutorialsContent from "../content/tutorials"

const slugList = tutorialsContent.map(category => category.slug)

const TutorialIndex = ({ location }) => {
  const [activeScrollSpy, setActiveScrollSpy] = useState(null)

  const handleScrollSpyUpdate = (el) => {
    setActiveScrollSpy(el.getAttribute("id"))
  }

  return (
    <Layout location={location} title="Additional Tutorials" compact>
      <SEO title="Additional Tutorials" />

      <SplitWrapper>
        <SplitWrapper.Sidebar>
          <Scrollspy
            items={slugList}
            componentTag={'div'}
            onUpdate={handleScrollSpyUpdate}
          >
            <SidebarList>
              {
                tutorialsContent.map(({ slug, title }) => (
                  <li
                    key={slug}
                    className={activeScrollSpy === slug ? "is-current" : ""}
                  >
                    <a href={`#${slug}`}>{title}</a>
                  </li>
                ))
              }
            </SidebarList>
          </Scrollspy>
        </SplitWrapper.Sidebar>

        <SplitWrapper.Main>
          {
            tutorialsContent.map(({ slug, title, body, tutorials }) => (
              <TutorialGroup id={slug} key={slug}>
                <SectionHeading>{title}</SectionHeading>
                {
                  body &&
                  <TutorialBody
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                }
                {
                  tutorials.map(({ title, author, link, body }) => (
                    <TutorialItem
                      key={title}
                      href={link}
                      as={link ? "a" : "div"}
                      target={link ? "_blank" : null}
                    >
                      <h3>{title}</h3>
                      {author && <TutorialAuthor>{author}</TutorialAuthor>}
                      {body && (
                        <TutorialDescription
                          dangerouslySetInnerHTML={{ __html: body }}
                        />
                      )}
                    </TutorialItem>
                  ))
                }
              </TutorialGroup>
            ))
          }
        </SplitWrapper.Main>
      </SplitWrapper>
    </Layout>
  )
}

const SidebarList = styled.ul`
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 0;

    & + li {
      margin-top: 20px;
    }

    &.is-current a {
      color: ${palette.blue};
    }
  }

  a {
    color: ${palette.darkBlue};
    font-size: 20px;
    font-weight: 400;
  }
`

const TutorialGroup = styled.div`
  & + & {
    margin-top: 60px;
  }
`

const TutorialBody = styled.div`
  a {
    font-weight: 400;
  }
`

const TutorialItem = styled.a`
  background-color: ${palette.lightestGrey};
  color: ${palette.darkBlue};
  display: block;
  padding: 34px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 400;

  h3 {
    margin-bottom: 0;
  }

  &[href]:hover,
  &[href]:focus {
    text-decoration: none;

    h3 { text-decoration: underline; }
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 34px 49px;
  }
`

const TutorialDescription = styled.div`
  border-top: 1px solid ${palette.grey};
  margin-bottom: 0;
  margin-top: 20px;
  padding-top: 12px;

  & > *:last-child {
    margin-bottom: 0;
  }

  p {
    line-height: 1.8em;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 64px;

    li {
      position: relative;
      margin-bottom: 8px;

      &::before {
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 6px solid ${palette.lightBlue};
        content: '';
        height: 0;
        left: -30px;
        position: absolute;
        top: 7px;
        width: 0;
      }
    }
  }
`

const TutorialAuthor = styled.p`
  color: ${palette.blue};
  font-size: 20px;
  margin-bottom: 12px;
  margin-top: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`

export default TutorialIndex
