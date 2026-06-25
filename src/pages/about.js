import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import { SectionHeading } from "../components/SectionHeading"
import { PrimaryCTA } from "../components/CTAButton"
import FullWidthBand, { BandContent } from "../components/FullWidthBand"
import balavishnu from "../../content/assets/balavishnu-waterfall.png"

// ── Hero ──

const HeroGrid = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 32px;
  padding: ${rhythm(2)} ${rhythm(1)} ${rhythm(1)};
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`

const HeroText = styled.div``

const HeroTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: ${rhythm(0.5)};
  @media (max-width: 699px) {
    font-size: 1.5rem;
  }
`

const HeroSummary = styled.p`
  font-size: 18px;
  color: ${props => props.theme.quoteColor};
  line-height: 1.6;
`

const Image = styled.img`
  border-radius: 8px;
  width: ${rhythm(20)};
  min-width: 10px;
  margin: 0 ${rhythm(1)};
  margin-bottom: -1px;
  @media (max-width: 699px) {
    width: ${rhythm(15)};
    margin: 0 auto;
    grid-row: 1;
  }
`

// ── Career Timeline ──

const TimelineSection = styled.section`
  padding: ${rhythm(1)} ${rhythm(1)} ${rhythm(2)};
`

const TimelineCard = styled.div`
  padding: ${rhythm(1.5)};
  background-color: ${props => props.theme.cardBackground};
  box-shadow: 2px 4px 10px 0 ${props => props.theme.shadowColor};
  border-radius: 8px;
  margin-bottom: ${rhythm(1)};
  border-left: 3px solid ${props => props.theme.primaryColor};
`

const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: ${rhythm(0.25)};
`

const RoleTitle = styled.h3`
  color: ${props => props.theme.primaryColor};
  font-size: 20px;
  margin-bottom: 0;
`

const RolePeriod = styled.span`
  font-size: 14px;
  color: ${props => props.theme.quoteColor};
`

const RoleCompany = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: ${rhythm(0.5)};
`

const RoleDescription = styled.p`
  font-size: 15px;
  margin-bottom: ${rhythm(0.25)};
`

const HighlightList = styled.ul`
  margin-bottom: 0;
  li {
    font-size: 14px;
    margin-bottom: 4px;
  }
`

// ── Skills Strip ──

const SkillsSection = styled.section`
  padding: ${rhythm(1)} ${rhythm(1)} ${rhythm(2)};
`

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const SkillBadge = styled.span`
  font-size: 14px;
  padding: 6px 16px;
  border-radius: 20px;
  background-color: ${props => props.theme.tagBackground};
  color: ${props => props.theme.textColor};
`

// ── Education ──

const EducationSection = styled.section`
  padding: 0 ${rhythm(1)} ${rhythm(2)};
`

const EducationCard = styled.div`
  padding: ${rhythm(1)};
  background-color: ${props => props.theme.cardBackground};
  box-shadow: 2px 4px 10px 0 ${props => props.theme.shadowColor};
  border-radius: 8px;
`

const EducationTitle = styled.h3`
  color: ${props => props.theme.primaryColor};
  font-size: 18px;
  margin-bottom: 4px;
`

const EducationDetail = styled.p`
  font-size: 15px;
  margin-bottom: 0;
  color: ${props => props.theme.quoteColor};
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

const careerHistory = [
  {
    title: "Software Engineer",
    company: "Early-stage startup",
    period: "Apr 2026 -- Present",
    description:
      "Shipping GenAI in production across infrastructure, backend, frontend, and applied AI.",
    highlights: [
      "Full-stack GenAI work, from infrastructure through to product",
    ],
  },
  {
    title: "Co-Founder & CTO",
    company: "CarbonSync",
    period: "Apr 2025 -- Apr 2026",
    description:
      "Co-founded a GenAI eco-design SaaS and built it from concept to launch.",
    highlights: [
      "Took the MVP from concept to launch",
      "Hired and managed the engineering team",
      "Owned architecture, infrastructure, and product engineering",
    ],
  },
  {
    title: "Senior Software Consultant",
    company: "Freelance",
    period: "May 2024 -- Apr 2025",
    description:
      "Consulted across FinTech, E-Commerce, and SaaS startups on architecture, performance, and team building.",
    highlights: [
      "FinTech AI MVP: Built 0-to-1 collections platform, hired 2 engineers, transferred ownership to in-house team",
      "E-Commerce AI: Resolved critical performance bottlenecks on AI-driven platform",
      "Influencer SaaS: Designed system architecture enabling rapid feature iteration",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "HealthifyMe",
    period: "Jan 2019 -- Apr 2024",
    description:
      "Led frontend engineering for India's largest health and fitness platform, scaling to 35M+ users.",
    highlights: [
      "Built and led a 10-member frontend engineering team",
      "Cut deployment time from 25 minutes to 6 minutes",
      "Brought CRM load time down from 2 minutes to 4 seconds",
      "Shipped a GenAI Co-Pilot that improved coach response efficiency by 18%",
      "Got the team writing TypeScript and tests across the frontend codebase",
      "Led VaccinateMe (COVID-19 vaccine tracker) — scaled to millions of users",
    ],
  },
  {
    title: "Software Developer",
    company: "Kuliza Technologies",
    period: "Jun 2017 -- Dec 2018",
    description:
      "Worked on fintech products including Acko's first go-live product and a no-code loan solution.",
    highlights: [
      "Built Acko's first go-live insurance product",
      "Developed a no-code loan origination solution",
    ],
  },
]

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "React Native",
  "Remix",
  "Next.js",
  "Django",
  "Node.js",
  "AWS",
  "GCP",
  "Docker",
  "CI/CD",
  "System Architecture",
  "Engineering Leadership",
]

// ── Component ──

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Balavishnu V J is a full-stack engineer and ex co-founder & CTO who scaled systems to 35M+ users and now builds with GenAI in production."
      />

      {/* Hero */}
      <HeroGrid>
        <HeroText>
          <HeroTitle>About Me</HeroTitle>
          <HeroSummary>
            I'm a full-stack engineer with nearly a decade of building and
            scaling software. I led frontend engineering at HealthifyMe as it
            grew past 35M users, then co-founded and was CTO of CarbonSync, a
            GenAI eco-design startup. Today I'm hands-on building GenAI in
            production.
          </HeroSummary>
          <HeroSummary>
            I write about how software actually gets built and scaled. Based in
            Bengaluru, India.
          </HeroSummary>
        </HeroText>
        <Image src={balavishnu} alt="Balavishnu V J" />
      </HeroGrid>

      {/* Career Journey */}
      <TimelineSection>
        <SectionHeading>Career Journey</SectionHeading>
        {careerHistory.map((role, i) => (
          <TimelineCard key={i}>
            <RoleHeader>
              <RoleTitle>{role.title}</RoleTitle>
              <RolePeriod>{role.period}</RolePeriod>
            </RoleHeader>
            <RoleCompany>{role.company}</RoleCompany>
            <RoleDescription>{role.description}</RoleDescription>
            <HighlightList>
              {role.highlights.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </HighlightList>
          </TimelineCard>
        ))}
      </TimelineSection>

      {/* Skills */}
      <SkillsSection>
        <SectionHeading>Skills & Technologies</SectionHeading>
        <SkillsGrid>
          {skills.map((skill, i) => (
            <SkillBadge key={i}>{skill}</SkillBadge>
          ))}
        </SkillsGrid>
      </SkillsSection>

      {/* Education */}
      <EducationSection>
        <SectionHeading>Education</SectionHeading>
        <EducationCard>
          <EducationTitle>VIT University</EducationTitle>
          <EducationDetail>
            B.Tech, Computer Science and Engineering (2013 -- 2017)
          </EducationDetail>
        </EducationCard>
      </EducationSection>

      {/* Contact Band */}
      <FullWidthBand>
        <BandContent>
          <CTAContent>
            <CTATitle>Let's compare notes</CTATitle>
            <CTAText>
              I'm always glad to hear from people building with GenAI or working
              on hard engineering problems at scale.
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
    </>
  )
}
