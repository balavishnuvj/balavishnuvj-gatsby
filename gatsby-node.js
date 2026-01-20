const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type Mdx implements Node {
      timeToRead: Int
    }
  `)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMdx(
          sort: { frontmatter: { date: DESC } }
          limit: 1000
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.nodes

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]
    const path = `/blog${post.fields.slug}`
    createPage({
      path: path,
      component: `${blogPost}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        slug: post.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    const filePath = node.internal.contentFilePath || node.fileAbsolutePath
    if (filePath) {
      createNodeField({
        name: "editLink",
        node,
        value: `https://github.com/balavishnuvj/balavishnuvj-gatsby/edit/master${filePath.replace(
          __dirname,
          ""
        )}`,
      })
    }
    
    // Calculate reading time (average 200 words per minute)
    const wordsPerMinute = 200
    const body = node.body || ''
    const wordCount = body.split(/\s+/).length
    const timeToRead = Math.ceil(wordCount / wordsPerMinute)
    
    createNodeField({
      name: "timeToRead",
      node,
      value: timeToRead,
    })
  }
}
