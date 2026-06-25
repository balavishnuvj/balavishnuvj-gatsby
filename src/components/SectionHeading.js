import styled from "styled-components"
import { rhythm } from "../utils/typography"

export const SectionHeading = styled.h2`
  font-size: ${rhythm(1)};
  color: ${props => props.theme.primaryColor};
  margin-bottom: ${rhythm(0.5)};
  text-align: ${props => (props.center ? "center" : "left")};
`

export const SectionSubheading = styled.p`
  font-size: 18px;
  color: ${props => props.theme.quoteColor};
  max-width: 600px;
  margin-bottom: ${rhythm(1.5)};
  ${props => props.center && "margin-left: auto; margin-right: auto; text-align: center;"}
`
