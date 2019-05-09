import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import CTA from "../components/CTA"
import palette from "../utils/palette"
import TezosLogo from "../assets/tezos_logo.svg"

const navigationListItems = [
  {
    title: "Tutorials",
    href: "/tutorials",
  },
  {
    title: "Resources",
    href: "/resources",
  },
  {
    title: "Community",
    href: "/community",
  },
]

const Header = () => (
  <HeaderContainer>
    <NavigationMenu>
      <NavigationLink to="/">
        <TezosLogo />
      </NavigationLink>
      <MobileMenu />
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
        <CTA isHeader isSecondary href="https://www.github.com/tacoinfra/dev.tezos.com">Contribute To Dev Portal</CTA>
        <CTA isHeader href="https://www.tezos.com/">Back to Tezos</CTA>
      </NavigationList>
    </NavigationMenu>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  width: 100%;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  z-index: 5;
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
  color: ${palette.white};
  text-transform: uppercase;
  margin-right: 31.75px;
  white-space: nowrap;
  &:hover {
    opacity: 0.8;
  }
`

const MobileMenu = () => {
  const [isMenuOpen, setOpenState] = useState(false)

  // NOTE: A func for handling toggle menu. It also locks our body to prevent seeing content while menu is open
  const handleToggleMenu = () => {
    if (isMenuOpen) {
      setOpenState(false)
      document.body.style.position = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.overflowY = ""
    } else {
      setOpenState(true)
      document.body.style.position = "fixed"
      document.body.style.left = 0
      document.body.style.right = 0
      document.body.style.overflowY = "scroll"
    }
  }

  return (
    <Fragment>
      <HamburgerIcon
        isMenuOpen={isMenuOpen}
        onClick={() => handleToggleMenu()}
      />
      <MobileMenuContainer isMenuOpen={isMenuOpen}>
        <MobileMenuNavList>
          {navigationListItems.map(item => (
            <li>
              <MobileMenuLink key={item.title} to={item.href}>
                {item.title}
              </MobileMenuLink>
            </li>
          ))}
          <CTA href="https://www.tezos.com/">
            Back to Tezos
          </CTA>
        </MobileMenuNavList>
      </MobileMenuContainer>
    </Fragment>
  )
}

const HamburgerIcon = styled.span`
  position: relative;
  z-index: 11;
  display: inline-block;
  width: 1.25em;
  height: 1em;
  margin-right: 0.3em;
  /* NOTE: This isMenuOpen prop helps us animate the ::before and ::after elements to form an X */
  border-top: ${props => (props.isMenuOpen ? "0" : "0.2em")} solid
    ${palette.blue};
  border-bottom: ${props => (props.isMenuOpen ? "0" : "0.2em")} solid
    ${palette.blue};
  &:hover {
    cursor: pointer;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0.23em;
    left: 0px;
    width: 100%;
    border-top: 0.2em solid ${palette.blue};
    /* NOTE: The isMenuOpen prop is used here to animate the straight line border 45 deg to create the X */
    transform: ${props => (props.isMenuOpen ? "rotate(45deg)" : "rotate(0)")};
    transition: transform 150ms ease-in-out;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0.23em;
    left: 0px;
    width: 100%;
    border-top: 0.2em solid ${palette.blue};
    /* NOTE: The isMenuOpen prop is used here to animate the straight line border 45 deg to create the X */
    transform: ${props => (props.isMenuOpen ? "rotate(-45deg)" : "rotate(0)")};
    transition: transform 150ms ease-in-out;
  }
  @media (min-width: 900px) {
    display: none;
  }
`

const MobileMenuContainer = styled.div`
  height: 100vh;
  width: ${props => (props.isMenuOpen ? "100vw" : "0")};
  background-color: ${palette.darkerBlue};
  color: ${palette.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  justify-content: column;
  align-items: space-between;
  overflow: hidden;
  transform: ${props =>
    props.isMenuOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 150ms ease-in-out, width 250ms ease-in-out;
`

const MobileMenuNavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  li {
    margin: 0px 0px 30px;
    text-align: center;
  }
`

const MobileMenuLink = styled(Link)`
  color: ${palette.blue};
  padding: 0px;
  display: flex;
  text-decoration: none;
  line-height: 1;
  font-weight: 500;
  text-align: left;
  border-radius: 0px;
  text-transform: uppercase;
  flex-direction: row;
  -moz-box-align: center;
  align-items: center;
  justify-content: space-around;
  opacity: 1;
  white-space: nowrap;
  position: relative;
  margin: 0px auto;
  font-size: 22px;
`

export default Header
