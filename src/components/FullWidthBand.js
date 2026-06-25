import styled from "styled-components"
import { rhythm } from "../utils/typography"

const FullWidthBand = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: ${props => props.bg || props.theme.primaryColor};
`

export const BandContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${rhythm(2)} ${rhythm(1)};
`

export default FullWidthBand
