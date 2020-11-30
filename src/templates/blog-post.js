import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"
import Clock from "../../content/assets/svg/clock.svg"
import { MDXProvider } from "@mdx-js/react"
import mdxComponents from "../components/mdxComponents"
export const BlogSection = styled.section`
  > blockquote {
    color: ${props => props.theme.quoteColor};
  }
  h1 .anchor svg,
  h2 .anchor svg,
  h3 .anchor svg,
  h4 .anchor svg,
  h5 .anchor svg,
  h6 .anchor svg {
    position: absolute;
    left: -24px;
    height: 100%; /* vertically center */
    width: 20px;
    transition: all 0.2s;
    opacity: 0;
  }
  h1:hover .anchor svg,
  h2:hover .anchor svg,
  h3:hover .anchor svg,
  h4:hover .anchor svg,
  h5:hover .anchor svg,
  h6:hover .anchor svg {
    opacity: 1;
  }
  .highlight-line {
    background-color: rgba(201, 167, 255, 0.2);
    margin: 0 -10px;
    padding: 0 5px;
    border-left: 5px solid #c9a7ff;
  }
  code {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    background-color: ${props => props.theme.cardBackground};
    color: ${props => props.theme.quoteColor};
    padding: 4px;
  }
`

const ClockIcon = styled(Clock)`
  .fill {
    path {
      fill: ${props => props.theme.socialIcons};
    }
  }
  margin-right: 4px;
`

const BlogFoot = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  color: ${props => props.theme.quoteColor};
  font-size: 12px;
  margin: 16px 0;
`

const BlogTime = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  margin-right: 4px;
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  if (!data.mdx) {
    return null
  }
  const post = data.mdx
  const { siteMetadata } = data.site
  const { previous, next } = pageContext
  return (
    <React.Fragment>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <MDXProvider components={mdxComponents}>
        <article itemScope itemType="http://schema.org/Article">
          <meta itemProp="name" content={post.frontmatter.title} />
          <div
            itemProp="author"
            itemScope=""
            itemType="http://schema.org/Person"
          >
            <meta itemProp="email" content={siteMetadata.author.name} />
            <meta itemProp="name" content={siteMetadata.social.email} />
          </div>
          <div>
            <header>
              <h1
                itemProp="headline"
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 0,
                }}
              >
                {post.frontmatter.title}
              </h1>
              <BlogFoot>
                <BlogTime>
                  <ClockIcon />
                  {post.timeToRead} mins |{" "}
                </BlogTime>
                <span>{post.frontmatter.date}</span>
              </BlogFoot>
            </header>
            <BlogSection>
              <MDXRenderer>{post.body}</MDXRenderer>
            </BlogSection>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <footer>
              <Bio />
            </footer>
          </div>
        </article>
      </MDXProvider>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
        social {
          email
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
