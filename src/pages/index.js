import React from "react"
import { graphql, Link } from "gatsby"
import balavishnu from "../../content/assets/balavishnu-new.png"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import { PrimaryCTA, SecondaryCTA } from "../components/CTAButton"
import { SectionHeading, SectionSubheading } from "../components/SectionHeading"
import FullWidthBand, { BandContent } from "../components/FullWidthBand"
import Clock from "../../content/assets/svg/clock.svg"

// ── Hero Section ──

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  padding: ${rhythm(2)} ${rhythm(1)};
  @media (max-width: 699px) {
    flex-direction: column-reverse;
    padding: ${rhythm(1)} ${rhythm(1)};
    text-align: center;
  }
`

const HeroContent = styled.div`
  flex: 1;
`

const HeroTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: ${rhythm(0.5)};
  line-height: 1.2;
  @media (max-width: 699px) {
    font-size: 1.6rem;
  }
`

const HeroSubtext = styled.p`
  font-size: 18px;
  color: ${props => props.theme.quoteColor};
  max-width: 520px;
  margin-bottom: ${rhythm(1)};
  @media (max-width: 699px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const HeroCTAs = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 699px) {
    flex-direction: column;
    align-items: center;
  }
`

const HeroImage = styled.img`
  width: ${rhythm(8)};
  height: auto;
  border-radius: 50%;
  margin-left: ${rhythm(2)};
  @media (max-width: 699px) {
    width: ${rhythm(5)};
    margin: 0 auto ${rhythm(1)};
  }
`

// ── Credibility Strip ──

const CredibilityStrip = styled.section`
  display: flex;
  justify-content: center;
  gap: ${rhythm(2)};
  padding: ${rhythm(1)} ${rhythm(1)};
  flex-wrap: wrap;
`

const CredItem = styled.div`
  text-align: center;
`

const CredNumber = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${props => props.theme.primaryColor};
`

const CredLabel = styled.div`
  font-size: 13px;
  color: ${props => props.theme.quoteColor};
  text-transform: uppercase;
`

// ── Services Preview ──

const ServicesSection = styled.section`
  padding: ${rhythm(2)} ${rhythm(1)};
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled(Link)`
  padding: ${rhythm(1.5)};
  background-color: ${props => props.theme.cardBackground};
  box-shadow: 2px 4px 10px 0 ${props => props.theme.shadowColor};
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 2px 4px 10px 0 ${props => props.theme.shadowColor};
  color: ${props => props.theme.textColor};
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
`

const ServiceCardTitle = styled.h3`
  color: ${props => props.theme.primaryColor};
  font-size: 18px;
  margin-bottom: 8px;
`

const ServiceCardText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.quoteColor};
  margin-bottom: 0;
`

// ── Social Proof ──

const SocialProofSection = styled.section`
  padding: ${rhythm(2)} ${rhythm(1)};
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  margin-bottom: ${rhythm(1.5)};
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`

const TestimonialCard = styled.blockquote`
  padding: ${rhythm(1)};
  background-color: ${props => props.theme.cardBackground};
  box-shadow: 2px 4px 10px 0 ${props => props.theme.shadowColor};
  border-radius: 8px;
  margin: 0;
  border-left: 3px solid ${props => props.theme.primaryColor};
`

const TestimonialQuote = styled.p`
  font-size: 15px;
  font-style: italic;
  color: ${props => props.theme.quoteColor};
  margin-bottom: ${rhythm(0.5)};
`

const TestimonialAuthor = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 0;
`

const TestimonialRole = styled.span`
  font-weight: normal;
  color: ${props => props.theme.quoteColor};
`

const CredibilityLogos = styled.div`
  display: flex;
  justify-content: center;
  gap: ${rhythm(1.5)};
  flex-wrap: wrap;
  padding-top: ${rhythm(0.5)};
`

const CredibilityBadge = styled.span`
  font-size: 14px;
  color: ${props => props.theme.quoteColor};
  padding: 6px 16px;
  border: 1px solid ${props => props.theme.shadowColor};
  border-radius: 20px;
`

// ── Recent Blog Posts ──

const BlogSection = styled.section`
  padding: ${rhythm(2)} ${rhythm(1)};
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`

const BlogArticle = styled.article`
  padding: 20px;
  background-color: ${props => props.theme.cardBackground};
  box-shadow: 2px 4px 10px 0 ${props => props.theme.shadowColor};
  border-radius: 8px;
`

const BlogLink = styled(Link)`
  color: ${props => props.theme.textColor};
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const BlogTitle = styled.h4`
  font-size: 16px;
  margin: 0;
  margin-bottom: 16px;
  color: ${props => props.theme.primaryColor};
  text-transform: none;
  line-height: 1.5;
`

const BlogExcerpt = styled.p`
  font-size: 14px;
`

const BlogFoot = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.quoteColor};
  font-size: 10px;
`

const BlogTime = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
`

const ClockIcon = styled(Clock)`
  .fill {
    path {
      fill: ${props => props.theme.socialIcons};
    }
  }
  margin-right: 4px;
`

const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: ${rhythm(1)};
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
`

// ── CTA Band ──

const CTABandContent = styled.div`
  text-align: center;
  padding: ${rhythm(0.5)} 0;
`

const CTABandTitle = styled.h2`
  color: ${props => props.theme.ctaText};
  margin-bottom: ${rhythm(0.5)};
`

const CTABandText = styled.p`
  color: ${props => props.theme.ctaText};
  margin-bottom: ${rhythm(1)};
  opacity: 0.9;
`

// ── Component ──

export default function Home({ data }) {
  const socialProof = data.site.siteMetadata.socialProof
  const posts = data.allMdx.edges.slice(0, 3)

  return (
    <>
      <SEO title="Home" />

      {/* Hero */}
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            Ex-co-founder &amp; CTO. Scaled products to 35M+ users. Now building
            with GenAI.
          </HeroTitle>
          <HeroSubtext>
            Nearly a decade building and scaling software, from leading teams at
            scale to the startup trenches. Now I'm hands-on with GenAI in
            production, and I write about how it actually gets built.
          </HeroSubtext>
          <HeroCTAs>
            <PrimaryCTA to="/blog">Read the writing</PrimaryCTA>
            <SecondaryCTA to="/about">About</SecondaryCTA>
          </HeroCTAs>
        </HeroContent>
        <HeroImage src={balavishnu} alt="Balavishnu V J" />
      </HeroContainer>

      {/* Credibility Strip */}
      <CredibilityStrip>
        {socialProof.metrics.map((metric, i) => (
          <CredItem key={i}>
            <CredNumber>{metric.number}</CredNumber>
            <CredLabel>{metric.label}</CredLabel>
          </CredItem>
        ))}
      </CredibilityStrip>

      {/* Where I've worked */}
      <SocialProofSection>
        <SectionHeading center>Where I've worked</SectionHeading>
        <CredibilityLogos>
          {socialProof.credibility.map((name, i) => (
            <CredibilityBadge key={i}>{name}</CredibilityBadge>
          ))}
        </CredibilityLogos>
      </SocialProofSection>

      {/* Recent Blog Posts */}
      <BlogSection>
        <SectionHeading center>From the Blog</SectionHeading>
        <SectionSubheading center>
          Thoughts on engineering, architecture, and building products.
        </SectionSubheading>
        <BlogGrid>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <BlogArticle key={node.fields.slug}>
                <BlogLink to={`/blog${node.fields.slug}`}>
                  <div>
                    <header>
                      <BlogTitle>{title}</BlogTitle>
                    </header>
                    <section>
                      <BlogExcerpt
                        dangerouslySetInnerHTML={{
                          __html:
                            node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                  </div>
                  <BlogFoot>
                    <BlogTime>
                      <ClockIcon />
                      {node.fields.timeToRead} mins
                    </BlogTime>
                    <span>{node.frontmatter.date}</span>
                  </BlogFoot>
                </BlogLink>
              </BlogArticle>
            )
          })}
        </BlogGrid>
        <ViewAllLink to="/blog">View all posts &rarr;</ViewAllLink>
      </BlogSection>

      {/* Contact Band */}
      <FullWidthBand>
        <BandContent>
          <CTABandContent>
            <CTABandTitle>Building with GenAI, or at scale?</CTABandTitle>
            <CTABandText>
              I like comparing notes with people working on hard engineering and
              AI problems. If that's you, I'd be glad to hear from you.
            </CTABandText>
            <PrimaryCTA
              to="/contact"
              style={{ backgroundColor: "white", color: "#443868" }}
            >
              Get in touch
            </PrimaryCTA>
          </CTABandContent>
        </BandContent>
      </FullWidthBand>
    </>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        socialProof {
          metrics {
            number
            label
          }
          testimonials {
            quote
            name
            role
            type
          }
          credibility
        }
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
      edges {
        node {
          excerpt
          fields {
            slug
            timeToRead
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
