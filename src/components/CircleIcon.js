import styled from "@emotion/styled"
import { palette } from "../utils/variables"

const CircleIcon = styled.div`
  background-color: ${palette.blue};
  border-radius: 100px;
  display: inline-block;
  flex: 0 0 40px;
  height: 40px;
  position: relative;
  vertical-align: middle;
  width: 40px;

  & > * {
    left: 0;
    position: absolute;
    width: 100%;
  }

  span {
    top: 7px;
    text-align: center;
    color: ${palette.white};
  }

  img,
  svg {
    height: 100%;
    top: 0;
  }
`

export default CircleIcon
