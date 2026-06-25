/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

import styled from "styled-components"

const P = styled.p`
  margin: 0;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50, layout: FIXED)
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
          social {
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  const avatar = getImage(data.avatar)
  
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        alignItems: 'center'
      }}
    >
      {avatar && (
        <GatsbyImage
          image={avatar}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      <P>
        Written by <strong>{author.name}</strong>, an engineer and ex-CTO
        building with GenAI. He writes about building and scaling software.
        Find him on{` `}
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </P>
    </div>
  )
}

export default Bio
