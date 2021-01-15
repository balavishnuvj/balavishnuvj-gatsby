import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { graphql, useStaticQuery } from "gatsby"
import PageInfo from "../components/PageInfo"
import SEO from "../components/seo"
import balavishnu from "../../content/assets/balavishnu-waterfall.png"
import { Link as GatsbyLink } from "gatsby"

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
  @media (min-width: 700px) {
    margin-top: 56px;
  }
`

const Image = styled.img`
  border-radius: 8px;
  @media (max-width: 699px) {
    width: ${rhythm(15)};
    margin: 0 auto;
    grid-row: 1;
  }
  margin: 0 ${rhythm(1)};
  width: ${rhythm(20)};
  min-width: 10px;
  margin-bottom: -1px;
`

export default function Projects({ ...props }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              twitterFollow
            }
          }
        }
      }
    `
  )
  const {
    site: {
      siteMetadata: {
        social: { twitterFollow },
      },
    },
  } = data
  return (
    <Container>
      <SEO title="Thank you for subscribing!" />
      <ProjectsGrid>
        <div>
          <PageInfo title="Thank you for subscribing!" />
          <p>I really appreciate your kind gesture.</p>
          <p>
            You can read all the the <GatsbyLink to={"/blog"}>blogs</GatsbyLink>{" "}
            I have written here and if you haven't followed me on{" "}
            <a href={twitterFollow}>Twitter</a> please do.
          </p>
          <p>
            Also, if you like to appreciate my work monetarily (sponsor), please
            visit <a href={"https://bala.at/sponsor"}>here</a>.
          </p>
        </div>
        <Image src={balavishnu} alt="Balavishnu V J" />
      </ProjectsGrid>
    </Container>
  )
}
