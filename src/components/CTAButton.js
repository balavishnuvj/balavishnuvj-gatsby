import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const PrimaryCTAStyled = styled(Link)`
  display: inline-block;
  padding: ${rhythm(0.4)} ${rhythm(1)};
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.ctaText};
  border-radius: 4px;
  text-decoration: none;
  box-shadow: none;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.9;
    color: ${props => props.theme.ctaText};
  }
`

const SecondaryCTAStyled = styled(Link)`
  display: inline-block;
  padding: ${rhythm(0.4)} ${rhythm(1)};
  background-color: transparent;
  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: 4px;
  text-decoration: none;
  box-shadow: none;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  transition: background-color 0.2s ease, color 0.2s ease;
  &:hover {
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.ctaText};
  }
`

export function PrimaryCTA({ to, children, ...props }) {
  return (
    <PrimaryCTAStyled to={to} {...props}>
      {children}
    </PrimaryCTAStyled>
  )
}

export function SecondaryCTA({ to, children, ...props }) {
  return (
    <SecondaryCTAStyled to={to} {...props}>
      {children}
    </SecondaryCTAStyled>
  )
}
