import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"

const Wrapper = styled.section`
  padding: 0 ${rhythm(1)};
  max-width: 640px;
  margin: 0 auto;
`

const HeroSection = styled.div`
  text-align: center;
  padding: ${rhythm(2)} 0 ${rhythm(1)};
`

const HeroTitle = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.textColor};
  margin-bottom: ${rhythm(0.5)};
  @media (max-width: 699px) {
    font-size: 1.5rem;
  }
`

const HeroSubtext = styled.p`
  font-size: 18px;
  color: ${props => props.theme.quoteColor};
  max-width: 600px;
  margin: 0 auto;
`

const InfoList = styled.div`
  padding: ${rhythm(1)} 0 ${rhythm(2)};
`

const InfoItem = styled.div`
  margin-bottom: ${rhythm(1)};
`

const InfoLabel = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 14px;
  color: ${props => props.theme.quoteColor};
  text-transform: uppercase;
`

const InfoValue = styled.p`
  margin-bottom: 0;
  font-size: 16px;
`

const InfoLink = styled.a`
  color: ${props => (props.theme.isDark ? "#80bafe" : "#007acc")};
  box-shadow: none;
`

export default function Contact() {
  return (
    <Wrapper>
      <SEO title="Contact" description="Get in touch with Balavishnu V J." />
      <HeroSection>
        <HeroTitle>Get in touch</HeroTitle>
        <HeroSubtext>
          I'm always glad to hear from people building with GenAI or working on
          hard engineering problems at scale. Email or LinkedIn is the best way
          to reach me.
        </HeroSubtext>
      </HeroSection>

      <InfoList>
        <InfoItem>
          <InfoLabel>Email</InfoLabel>
          <InfoValue>
            <InfoLink href="mailto:hello@balavishnuvj.com">
              hello@balavishnuvj.com
            </InfoLink>
          </InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>LinkedIn</InfoLabel>
          <InfoValue>
            <InfoLink
              href="https://www.linkedin.com/in/balavishnuvj"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/balavishnuvj
            </InfoLink>
          </InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>GitHub</InfoLabel>
          <InfoValue>
            <InfoLink
              href="https://github.com/balavishnuvj"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/balavishnuvj
            </InfoLink>
          </InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>Location</InfoLabel>
          <InfoValue>Bengaluru, India</InfoValue>
        </InfoItem>
      </InfoList>
    </Wrapper>
  )
}
