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
      <SEO title="Subscribe to Bala's Letters" />
      <PageInfo title="Subscribe to Bala's Letters" />
      <ProjectsGrid>
        <div>
          <p>
            Hello! I am <Highlighted>Bala</Highlighted> 👋🏾. I have been writing{" "}
            <a href={"/blog"}>blogs</a> for a while now. Also, I share my views
            about programming, frontend, javascript, testing and few more things
            on <a href={twitter}>Twitter</a>.
          </p>
          <p>
            Whenever I publish any blog, you would be first to know{" "}
            <span aria-label="party" role="img">
              🥳
            </span>
            .
          </p>
          <p>
            But, not everything can be expressed on Twitter, it is difficult to
            convey nuances of opinions on Twitter.
          </p>
          <p>
            So, I have decided to write those nuances as letters to you. Some of
            these letters might become blog posts, and some might never. So you
            might want to subscribe to my newsletters to get into those secret
            letters{" "}
            <span aria-label="wink" role="img">
              😉
            </span>
            .
          </p>
        </div>
      </ProjectsGrid>
      <SubscriptionForm />
    </Container>
  )
}
