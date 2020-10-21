import React from "react"
import styled, { css } from "styled-components"
import Navigation from "./Navigation"
import LinkedIn from "../../content/assets/svg/linkedin.svg"
import Github from "../../content/assets/svg/github.svg"
import Twitter from "../../content/assets/svg/twitter.svg"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 28px 16px;
  align-items: flex-end;
`

const LeftSection = styled.section``

const RightSection = styled.section``

// const iconStyles = css`
//   circle {
//     stroke: ${props => props.theme.socialIcons};
//   }
//   path {
//     stroke: ${props => props.theme.socialIcons};
//     fill: ${props => props.theme.socialIcons};
//   }
//   margin-right: 16px;
// `

const iconStyles = css`
  .fill {
    fill: ${props => props.theme.iconColor};
  }
  rect {
    stroke: ${props => props.theme.iconColor};
  }
  margin-right: 16px;
`

const LinkedInIcon = styled(LinkedIn)`
  ${iconStyles};
`
const GithubIcon = styled(Github)`
  ${iconStyles};
`
const TwitterIcon = styled(Twitter)`
  ${iconStyles};
`

const EmailLink = styled.a`
  text-decoration: none;
  box-shadow: none;
  color: ${props => props.theme.textColor};
  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`

const EmailLabel = styled.p`
  color: ${props => props.theme.textColor};
  font-weight: bold;
  font-size: ${rhythm(0.4)};
`

const LinkIcon = styled.a`
  text-decoration: none;
  box-shadow: none;
`

export default function Footer({ children, toggleTheme }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              email
              github
              linkedin
              twitter
            }
          }
        }
      }
    `
  )
  const {
    site: {
      siteMetadata: {
        social: { email, github, linkedin, twitter },
      },
    },
  } = data
  return (
    <Container>
      <LeftSection>
        <EmailLabel>GET IN TOUCH</EmailLabel>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </LeftSection>
      <RightSection>
        <LinkIcon href={linkedin}>
          <LinkedInIcon />
        </LinkIcon>
        <LinkIcon href={github}>
          <GithubIcon />
        </LinkIcon>
        <LinkIcon href={twitter}>
          <TwitterIcon />
        </LinkIcon>
      </RightSection>
    </Container>
  )
}
