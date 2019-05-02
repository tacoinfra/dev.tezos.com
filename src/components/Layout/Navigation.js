import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import MobileMenu from "./MobileMenu"
import palette from "../../utils/palette"
import TezosLogo from "../../assets/tezos_logo.svg"

// NOTE: This component is intended for primary header navigation
const Navigation = ({ navigationListItems }) => (
  <NavigationContainer>
    <NavigationMenu>
      <NavigationLink to="/">
        <TezosLogo />
      </NavigationLink>
      <span css={css`
        @media (min-width: 900px) {
          display: none;
        }
      `}>
        <MobileMenu />
      </span>
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
        <CallToAction href="https://www.tezos.com/">Back to Tezos</CallToAction>
      </NavigationList>
    </NavigationMenu>
  </NavigationContainer>
)

Navigation.propTypes = {
  brand: PropTypes.shape({
    href: PropTypes.string,
    element: PropTypes.node,
  }).isRequired,
  navigationListItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
}

Navigation.defaultProps = {
  brand: {
    href: "/",
    element: "Home", // NOTE: Whatever this is gets wrapped in a <Link> element
  },
}

// NOTE: These are some styled components that _do not follow any styleguide or design spec_. Again, they are for development purposes only
// TODO: Make them follow the style guide or design spec
const NavigationContainer = styled.div`
  width: 100%;
  background-color: ${palette.grey};
  min-height: 80px;
  padding: 10px 0;
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
