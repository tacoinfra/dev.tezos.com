import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import palette from "../utils/palette"
import TezosLogo from "../assets/tezos_logo.svg"

const Navigation = () => {
  const navigationListItems = [
    {
      title: "Tutorials",
      href: "/tutorials"
    },
    {
      title: "Resources",
      href: "/resources"
    },
    {
      title: "Community",
      href: "/community"
    }
  ]

  return (
    <Header>
      <NavigationMenu>
        <NavigationLink to="/">
          <TezosLogo />
        </NavigationLink>
        <NavigationList>
          {navigationListItems.map(item => (
            <NavigationLink
              activeStyle={{ fontWeight: 900 }}
              key={item.title}
              to={item.href}
            >
              {item.title}
            </NavigationLink>
          ))}
          <CallToAction href="https://www.tezos.com/">
            Back to Tezos
          </CallToAction>
        </NavigationList>
      </NavigationMenu>
    </Header>
  )
}

const Header = styled.header`
  width: 100%;
  background-color: ${palette.grey};
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavigationMenu = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const NavigationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    display: none;
  }
`

const NavigationLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  color: ${palette.darkBlue};
  text-transform: uppercase;
  margin-right: 31.75px;
  white-space: nowrap;
  &:hover {
    opacity: 0.8;
  }
`

const CallToAction = styled.a`
  color: ${palette.white};
  background: ${palette.blue} none repeat scroll 0% 0%;
  border: 2px solid ${palette.blue};
  padding: 14px 40px;
  display: flex;
  text-decoration: none;
  line-height: 1;
  font-weight: 300;
  text-align: center;
  border-radius: 100px;
  text-transform: uppercase;
  flex-direction: row;
  -moz-box-align: center;
  align-items: center;
  justify-content: space-around;
  opacity: 1;
  white-space: nowrap;
  position: relative;
  flex-shrink: 0;
  &:hover {
    opacity: 0.8;
  }
`

export default Navigation
