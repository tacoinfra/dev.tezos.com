import styled from "@emotion/styled"
import { palette } from "../utils/variables"

const StyledInput = styled.input`
  padding: 0px 0px 9px;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
  border-color: ${palette.gray};
  border-style: none none solid;
  border-width: medium medium 1px;
  border-image: none 100% / 1 / 0 stretch;
  border-radius: 0px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  appearance: none;
  margin-bottom: 0px;
  display: block;
  min-width: 310px;
`

export default StyledInput
