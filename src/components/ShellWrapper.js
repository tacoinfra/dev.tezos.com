import styled from "@emotion/styled";
import { breakpoints, spacings } from "../utils/variables";

const ShellWrapper = styled.div`
  max-width: ${spacings.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    padding-left: 40px;
    padding-right: 40px;
  }
`

export default ShellWrapper
