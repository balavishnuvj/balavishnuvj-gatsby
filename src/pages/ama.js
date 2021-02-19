import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { graphql, useStaticQuery } from "gatsby"
import PageInfo from "../components/PageInfo"
import SEO from "../components/seo"
import SubscriptionForm from "../components/SubscriptionForm"

const Container = styled.section`
  padding: 0 ${rhythm(1)};
`

const ProjectsGrid = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 32px;
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
  margin-bottom: 32px;
`
const Ul = styled.ul`
  padding-left: 32px;
  @media (max-width: 699px) {
    padding-left: 16px;
  }
`

const Highlighted = styled.span`
  color: ${props => props.theme.primaryColor};
  font-weight: 700;
`

export default function Projects({ ...props }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
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
        social: { twitter },
      },
    },
  } = data
  return (
    <Container>
      <SEO title="Ask Me Anything" />
      <PageInfo title="#AskBala" description="Ask Me Anything" />
      <ProjectsGrid>
        <div>
          <p>
            <Highlighted>Live AMA session</Highlighted> with Balavishnu
          </p>
          <p>
            Balavishnu answers all your questions about everything from working
            with react to getting your PRs approved.
          </p>
          <p>
            Join the <Highlighted>exclusive 1 hour</Highlighted> session on Zoom{" "}
            <Highlighted>every Tuesday at 7 PM IST</Highlighted>
            <Ul>
              <li>
                <a href="https://bala.at/ask-zoom">Zoom Meeting Link</a>
              </li>
              <li>
                Add to your calendar:{" "}
                <a href="https://bala.at/ask-cal">Generic ICS</a> /{" "}
                <a href="https://bala.at/ask-cal-google">Google invite</a>
              </li>
            </Ul>
          </p>
          <p>
            If you miss the live session, check out the stream on my{" "}
            <a href="https://bala.at/youtube">YouTube channel</a>
          </p>
          <p>
            You can also ask questions on{" "}
            <a href="https://twitter.com/kentcdodds/">Kent</a>'s{" "}
            <a href="https://bala.at/discord">discord server</a>
          </p>
        </div>
      </ProjectsGrid>
      <SubscriptionForm />
    </Container>
  )
}
