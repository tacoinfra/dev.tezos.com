// NOTE: This component is not designed per spec, but is being used currently for development purposes only
import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";

/* 
  NOTE: This component simply takes a brand (goes to the left) and navigational items (goes to the right). 
  It's intended use is for a primary navigation
*/
const Navigation = ({ brand, navigationListItems }) => (
  <NavigationContainer>
    <Link to={brand.href}>{brand.element}</Link>
    <NavigationList>
      {navigationListItems.map(item => <Link to={item.href}>{item.title}</Link>)}
    </NavigationList>
  </NavigationContainer>
);

Navigation.propTypes = {
  brand: PropTypes.shape({
    href: PropTypes.string,
    element: PropTypes.node
  }).isRequired,
  navigationListItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  })).isRequired
};

Navigation.defaultProps = {
  brand: {
    href: "/",
    element: "Home" // NOTE: Whatever this is gets wrapped in a <Link> element
  }
};

// NOTE: These are some styled components that _do not follow any styleguide or design spec_. Again, they are for development purposes only
// TODO: Make them follow the style guide or design spec
const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  padding: 8px;
`;

const NavigationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  > * {
    margin-left: 16px;
  }
`;

export default Navigation;