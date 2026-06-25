import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import { SectionHeading } from "../components/SectionHeading"
import { PrimaryCTA } from "../components/CTAButton"
import FullWidthBand, { BandContent } from "../components/FullWidthBand"

// ── Hero ──

const Wrapper = styled.section`
  padding: 0 ${rhythm(1)};
`

const HeroSection = styled.div`
  text-align: center;
  padding: ${rhythm(2)} 0 ${rhythm(1.5)};
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
  margin: 0 auto ${rhythm(1)};
`

// ── Case Study Cards ──

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  margin-bottom: ${rhythm(2)};
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`

const CaseStudyCard = styled.div`
  padding: ${rhythm(1.5)};
  background-color: ${props => props.theme.cardBackground};
  box-shadow: 2px 4px 10px 0 ${props => props.theme.shadowColor};
  border-radius: 8px;
`

const CardTag = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 12px;
  background-color: ${props => props.theme.tagBackground};
  color: ${props => props.theme.primaryColor};
  margin-bottom: ${rhythm(0.5)};
`

const CardTitle = styled.h3`
  color: ${props => props.theme.primaryColor};
  font-size: 20px;
  margin-bottom: 4px;
`

const CardRole = styled.p`
  font-size: 14px;
  color: ${props => props.theme.quoteColor};
  font-style: italic;
  margin-bottom: ${rhythm(0.5)};
`

const CardLabel = styled.p`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.quoteColor};
  margin-bottom: 4px;
`

const CardText = styled.p`
  font-size: 15px;
  margin-bottom: ${rhythm(0.5)};
`

const OutcomeList = styled.ul`
  margin-bottom: 0;
  li {
    font-size: 14px;
    margin-bottom: 4px;
  }
`

// ── CTA Band ──

const CTAContent = styled.div`
  text-align: center;
  padding: ${rhythm(0.5)} 0;
  color: ${props => props.theme.ctaText};
`

const CTATitle = styled.h2`
  color: ${props => props.theme.ctaText};
  margin-bottom: ${rhythm(0.5)};
`

const CTAText = styled.p`
  color: ${props => props.theme.ctaText};
  margin-bottom: ${rhythm(1)};
  opacity: 0.9;
`

// ── Data ──

const caseStudies = [
  {
    tag: "FinTech",
    title: "FinTech AI Collections Platform",
    role: "Senior Software Consultant (Freelance, 2024)",
    challenge:
      "Build a 0-to-1 MVP for an AI-driven collections platform with no existing engineering team.",
    outcomes: [
      "Shipped production-ready MVP from scratch",
      "Hired 2 engineers and onboarded them into the codebase",
      "Successfully transferred full ownership to in-house team",
    ],
  },
  {
    tag: "E-Commerce",
    title: "E-Commerce AI Performance",
    role: "Senior Software Consultant (Freelance, 2024)",
    challenge:
      "Critical performance bottlenecks on an AI-driven e-commerce platform were impacting user experience and conversion.",
    outcomes: [
      "Identified and resolved critical performance bottlenecks",
      "Optimized application performance across the stack",
    ],
  },
  {
    tag: "SaaS",
    title: "Influencer Marketing SaaS",
    role: "Senior Software Consultant (Freelance, 2024)",
    challenge:
      "Founding team needed a scalable system architecture to enable rapid iteration on their influencer marketing platform.",
    outcomes: [
      "Designed initial system architecture from the ground up",
      "Enabled rapid feature iteration for the founding team",
    ],
  },
  {
    tag: "HealthTech",
    title: "HealthifyMe — Scaling to 35M+ Users",
    role: "Lead Software Engineer (2019--2024)",
    challenge:
      "Scale the frontend engineering org and infrastructure for India's largest health and fitness platform.",
    outcomes: [
      "Built and led a 10-member frontend engineering team",
      "Reduced deployment time from 25 minutes to 6 minutes",
      "Optimized CRM load time from 2 minutes to 4 seconds",
      "Shipped GenAI Co-Pilot -- improved coach response efficiency by 18%",
      "Achieved 50% fewer production issues through TypeScript and testing adoption",
    ],
  },
  {
    tag: "HealthTech",
    title: "VaccinateMe — COVID-19 Vaccine Tracker",
    role: "Lead Software Engineer at HealthifyMe (2021)",
    challenge:
      "Build and scale a high-traffic vaccine availability tracker during the peak of the COVID-19 pandemic in India.",
    outcomes: [
      "Launched rapidly during the pandemic",
      "Scaled to millions of users tracking vaccine availability",
    ],
  },
  {
    tag: "CleanTech",
    title: "CarbonSync — GenAI Eco-Design SaaS",
    role: "Co-Founder & CTO (2025--2026)",
    challenge:
      "Build a GenAI-powered Eco-Design platform from concept, onboard initial design-house partners, and establish the engineering foundation.",
    outcomes: [
      "Launched the MVP and onboarded initial design-house partners",
      "Hired and built the engineering team",
      "Owned architecture, infrastructure, and product engineering",
    ],
  },
]

// ── Component ──

export default function CaseStudies() {
  return (
    <Wrapper>
      <SEO
        title="Case Studies"
        description="Real outcomes for real companies. Explore Balavishnu V J's consulting track record across FinTech, HealthTech, E-Commerce, and SaaS."
      />

      <HeroSection>
        <HeroTitle>Case Studies</HeroTitle>
        <HeroSubtext>
          Real outcomes for real companies. Here's a look at the challenges
          I've tackled and the results I've delivered.
        </HeroSubtext>
      </HeroSection>

      <CaseStudiesGrid>
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={i}>
            <CardTag>{study.tag}</CardTag>
            <CardTitle>{study.title}</CardTitle>
            <CardRole>{study.role}</CardRole>
            <CardLabel>Challenge</CardLabel>
            <CardText>{study.challenge}</CardText>
            <CardLabel>Key Outcomes</CardLabel>
            <OutcomeList>
              {study.outcomes.map((outcome, j) => (
                <li key={j}>{outcome}</li>
              ))}
            </OutcomeList>
          </CaseStudyCard>
        ))}
      </CaseStudiesGrid>

      <FullWidthBand>
        <BandContent>
          <CTAContent>
            <CTATitle>Working on something similar?</CTATitle>
            <CTAText>
              I'm always glad to compare notes with people building with GenAI or
              scaling hard systems.
            </CTAText>
            <PrimaryCTA
              to="/contact"
              style={{ backgroundColor: "white", color: "#443868" }}
            >
              Get in touch
            </PrimaryCTA>
          </CTAContent>
        </BandContent>
      </FullWidthBand>
    </Wrapper>
  )
}
