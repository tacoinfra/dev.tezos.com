import styled from "@emotion/styled"
import { palette } from "../utils/variables"

const SectionHeading = styled.h2`
  border-bottom: 1px solid ${palette.grey};
  padding-bottom: 30px;
  text-align: ${props => props.centered && "center"};
`

export default SectionHeading
