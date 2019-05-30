import styled from "@emotion/styled"
import { palette } from "../utils/variables"

const StyledInput = styled.input`
  padding: 7px 0;
  background: transparent;
  border: 0 solid rgba(255, 255, 255, 0.5);
  border-bottom-width: 1px;
  border-radius: 0;
  color: ${palette.white};
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  width: 100%;
  appearance: none;
  margin-bottom: 0px;

  &:focus {
    border-color: rgba(255, 255, 255, 1);
    outline: none;
  }

  &::placeholder {
    color: white;
    opacity: 1;
  }
`

export default StyledInput
