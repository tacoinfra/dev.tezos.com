// NOTE: This component is not designed per spec, but is being used currently for development purposes only
import React from "react";
import styled from "@emotion/styled";

// NOTE: Using hardcoded data. This should probably be more flexible before release
const Navigation = () => (
  <NavigationContainer>
  {/* These will be actual anchor elements in release, I just used buttons while it's still hardcoded (since the anchor wasn't actually going anywhere) */}
    <button>Brand</button>
    <NavigationList>
      <NavigationItem>Link 1</NavigationItem>
      <NavigationItem>Link 2</NavigationItem>
      <NavigationItem>Link 3</NavigationItem>
    </NavigationList>
  </NavigationContainer>
);

// NOTE: These are some styled components that _do not follow any styleguide or design spec_. Again, they are for development purposes only
// TODO: Make them follow the style guide or design spec
const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
`;

const NavigationList = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: end;
`

const NavigationItem = styled.button`
  display: inline;
  margin-left: 16px;

`;

export default Navigation;