import styled from "@emotion/styled"
import { palette } from "../utils/variables"

const StyledInput = styled.input`
  padding: 8px 0;
  background: transparent;
  border: 0 solid rgba(255, 255, 255, 0.5);
  border-bottom-width: 1px;
  border-radius: 0;
  color: ${palette.white};
  font-size: 16px;
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
    color: rgba(255, 255, 255, 0.8);
  }
`

export default StyledInput
