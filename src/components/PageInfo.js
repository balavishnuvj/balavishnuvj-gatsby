import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const Title = styled.h2`
  font-size: ${rhythm(1)};
  color: ${props => props.theme.primaryColor};
  margin-top: 0;
`

const Description = styled.p``

export default function PageInfo({ title, description }) {
  return (
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  )
}
