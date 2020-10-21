import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { graphql, useStaticQuery } from "gatsby"
import PageInfo from "../components/PageInfo"

const Container = styled.section`
  padding: 0 ${rhythm(1)};
`

const ProjectsGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`

const Project = styled.div`
  background-color: ${props => props.theme.cardBackground};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 2px 4px 10px 0 ${props => props.theme.shadowColor};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

const ProjectLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
const ViewLink = styled.a`
  box-shadow: none;
  font-size: 12px;
  cursor: pointer;
`

const ProjectHeading = styled.h3`
  margin: 0;
  font-size: 16px;
  color: ${props => props.theme.primaryColor};
`

const ProjectSubHeading = styled.h3`
  margin: 0;
  font-size: 14px;
  color: ${props => props.theme.quoteColor};
  margin-top: 12px;
`

const ProjectInfo = styled.div`
  margin-bottom: 18px;
`

const ProjectDesc = styled.p`
  max-width: 80%;
  font-size: 12px;
  margin: 0;
  margin-bottom: 12px;
`

const ProjectTag = styled.span`
  background-color: ${props => props.theme.tagBackground};
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 2px;
  text-transform: uppercase;
  text-align: center;
  margin-right: 8px;
`

const ProjectTags = styled.div``

const ProjectDetail = styled.div`
  flex: 1;
`

const ProjectType = styled.div`
  position: absolute;
  color: ${props => props.theme.ctaText};
  font-size: 12px;
  width: 120px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  background: ${props => props.theme.primaryColor};
  right: 0;
  bottom: 0;
  transform: rotate(-45deg) translateX(30%);
`

const ServiceTag = styled.span`
  font-size: 10px;
  color: ${props => props.theme.quoteColor};
`
export default function Projects({ ...props }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            projects {
              title
              subHeading
              description
              link
              tags
              kind
            }
          }
        }
      }
    `
  )
  const { projects } = data.site.siteMetadata
  return (
    <Container>
      <PageInfo
        title="Projects"
        description="Here are a few projects Balavishnu V J has worked on"
      />
      <ProjectsGrid>
        {projects.map(project => (
          <Project key={project.title}>
            {project.kind === "open" && <ProjectType>Open Source</ProjectType>}
            <ProjectDetail>
              <ProjectLeft>
                <ProjectInfo>
                  <ProjectHeading>{project.title}</ProjectHeading>
                  {project.subHeading && (
                    <ProjectSubHeading>{project.subHeading}</ProjectSubHeading>
                  )}
                </ProjectInfo>
                <ViewLink href={project.link}>View</ViewLink>
              </ProjectLeft>
              <ProjectLeft>
                <ProjectDesc>{project.description}</ProjectDesc>
              </ProjectLeft>
              {project.kindText && <ServiceTag>{project.kindText}</ServiceTag>}
            </ProjectDetail>
            <ProjectTags>
              {project.tags.map(tag => (
                <ProjectTag key={tag}>{tag}</ProjectTag>
              ))}
            </ProjectTags>
          </Project>
        ))}
      </ProjectsGrid>
    </Container>
  )
}
