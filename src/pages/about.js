import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { graphql, useStaticQuery } from "gatsby"
import PageInfo from "../components/PageInfo"
import SEO from "../components/seo"
import balavishnu from "../../content/assets/balavishnu-waterfall.png"

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
      <SEO title="About Me" />
      <PageInfo title="About Me" />
      <ProjectsGrid>
        <div>
          <p>
            Hello! I am <Highlighted>Balavishnu V J</Highlighted> 👋🏾(friends
            call me Bala), software engineer with 3+ years of experience in
            building web applications. I'm based out of Bengaluru(Bangalore),
            India🌏.
          </p>
          <p>
            Soon after graduation👨🏼‍🎓from Vellore Institute of Technology in{" "}
            <Highlighted>
              Bachelors of Technology (Computer Science and Engineering).
            </Highlighted>{" "}
            I started my journey as a Frontend Engineer at Kuliza Technologies
            Pvt Ltd. I worked on different fintech products.
          </p>
          <p>
            Now I work at HealthifyMe where we help you in achieving a healthier
            lifestyle.
          </p>
          <p>
            I also collaborate to bring out high performing digital products. I
            am most passionate about JavaScript ❤️. Most often I use React⚛️,
            React Native, NodeJS to bring products to life.
          </p>
          <p>
            When I am not writing code you can find me taking apart gadgets,
            watching movies or cooking 🥘. Also you can find me in discord
            helping out folks 🥳
          </p>
          <p>
            Tweet me pictures of your adorable pets 🐶{" "}
            <a href={twitter}>@vjbalavishnu</a>
          </p>
        </div>
        <Image src={balavishnu} alt="Balavishnu V J" />
      </ProjectsGrid>
    </Container>
  )
}
