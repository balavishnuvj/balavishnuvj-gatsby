import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import SEO from "../components/seo"
import PageInfo from "../components/PageInfo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"
import Clock from "../../content/assets/svg/clock.svg"

const ClockIcon = styled(Clock)`
  .fill {
    path {
      fill: ${props => props.theme.socialIcons};
    }
  }
  margin-right: 4px;
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 24px;
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`

const BlogTitle = styled.h4`
  font-size: 14px;
  margin: 0;
  margin-bottom: 16px;
`

const BlogLink = styled(Link)`
  color: ${props => props.theme.textColor};
  box-shadow: none;
`

const BlogArticle = styled.article`
  padding: 20px;
  background-color: ${props => props.theme.cardBackground};
  box-shadow: 2px 4px 10px 0 ${props => props.theme.shadowColor};
  border-radius: 8px;
`

const BlogExcerpt = styled.p`
  font-size: 12px;
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

const BlogWrapper = styled.section`
  padding: 0 ${rhythm(1)};
`

const BlogIndex = ({ data, location }) => {
  const posts = data.allMdx.edges
  return (
    <BlogWrapper>
      <SEO title="Blogs" />
      <PageInfo
        title="Blogs"
        description="Thoughts and opinions about programming, React, JavaScript and other interesting things."
      />
      <BlogGrid>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <BlogArticle
              key={node.fields.slug}
              itemScope
              itemType="http://schema.org/Article"
            >
              <BlogLink
                style={{ boxShadow: `none` }}
                to={`/blog${node.fields.slug}`}
                itemProp="url"
              >
                <header>
                  <BlogTitle>
                    <span itemProp="headline">{title}</span>
                  </BlogTitle>
                </header>
                <section>
                  <BlogExcerpt
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
                <BlogFoot>
                  <BlogTime>
                    <ClockIcon />
                    {node.timeToRead} mins
                  </BlogTime>
                  <span>{node.frontmatter.date}</span>
                </BlogFoot>
              </BlogLink>
            </BlogArticle>
          )
        })}
      </BlogGrid>
      <hr
        style={{
          marginBottom: rhythm(1),
          marginTop: rhythm(1),
        }}
      />
      <Bio />
    </BlogWrapper>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
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
