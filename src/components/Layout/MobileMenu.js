import React, { useState, Fragment } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { Motion, spring } from "react-motion"
import palette from "../../utils/palette"
import TezosLogoIcon from "../../assets/tezos_logo.svg"

const MobileMenu = () => {
  // NOTE: We instantiate a state for showing and hiding the mobile menu navigation
  const [isShown, setIsShown] = useState(false)
  return (
    <Fragment>
      <HamburgerIcon isShown={isShown} onClick={() => setIsShown(!isShown)} />
      <FullscreenMenu isShown={isShown}>
        {/* NOTE: This little css snippet in the TezosLogoIcon makes it so the logo overlay isn't so jarring */}
        <TezosLogoIcon 
          css={css`
            opacity: ${isShown ? "1" : "0"};
          `}
        />
        {/* NOTE: This Motion component controls the Menu (the UL, not the background) swinging (translating) from the right side of the screen using React Motion */}
        <Motion style={{ x: spring(!isShown ? 900 : 0) }}>
          {({ x }) => (
            <MenuContent>
              {/* NOTE: This is a UL element with our transitionable styles that contains our navigational elements inside of it */}
              <NavigationList
                style={{
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`,
                }}
              >
                <NavigationItem>
                  <NavigationLink to="/tutorials">Tutorials</NavigationLink>
                </NavigationItem>
                <NavigationItem>
                  <NavigationLink to="/docs">
                    Tools / Libraries / Documentation
                  </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                  <NavigationLink to="/community">Community</NavigationLink>
                </NavigationItem>
                <NavigationItem>
                  <CallToAction href="https://www.tezos.com/">Back to Tezos</CallToAction>
                </NavigationItem>
              </NavigationList>
            </MenuContent>
          )}
        </Motion>
      </FullscreenMenu>
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
  /* NOTE: This isShown prop helps us animate the ::before and ::after elements to form an X */
  border-top: ${props => props.isShown ? "0" : "0.2em"} solid ${palette.blue};
  border-bottom: ${props => props.isShown ? "0" : "0.2em"} solid ${palette.blue};
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
    /* NOTE: The isShown prop is used here to animate the straight line border 45 deg to create the X */
    transform: ${props => props.isShown ? "rotate(45deg)" : "rotate(0)"};
    transition: transform 150ms ease-in-out;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0.23em;
    left: 0px;
    width: 100%;
    border-top: 0.2em solid ${palette.blue};
    /* NOTE: The isShown prop is used here to animate the straight line border 45 deg to create the X */
    transform: ${props => props.isShown ? "rotate(-45deg)" : "rotate(0)"};
    transition: transform 150ms ease-in-out;
  }
  @media (min-width: 900px) {
    display: none;
  }
`

const FullscreenMenu = styled.div`
  display: flex;
  overflow-x: hidden;
  padding: 10px 0;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${palette.darkerBlue};
  /* NOTE: We adjust the width based on the isShown property, so that the screen isn't constantly scrollable. Because we used translation to bring the menu in from the right, it's not technically "overflow", hence why we can't use overflow: hidden on a parent element */
  width: ${props => props.isShown ? "100vw" : "0"};
  height: 100vh;
  color: ${palette.white};
  /* NOTE: Here we're actually instantiating the transitioning for the translation of the background */
  transform: ${props => props.isShown ? "translate(0)" : "translate(100%)"};
  /* NOTE: The width is faster, but also delayed so we don't go this funky clash of the two properties transitioning. Basically, the width will translate once the background is about finished transitioning */
  transition: transform 250ms ease-in-out, width 1ms ease-in-out 150ms;
`

const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NavigationItem = styled.li`
  margin: 0px 0px 30px;
  text-align: center;
`

const NavigationLink = styled(Link)`
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
  max-width: 200px;
  &:hover {
    opacity: 0.8;
  }
`

export default MobileMenu
