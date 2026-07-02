const projects = require("./content/data/projects.json")
const socialProof = require("./content/data/social-proof.json")

module.exports = {
  siteMetadata: {
    title: `Balavishnu V J | Engineer & ex-CTO`,
    author: {
      name: `Balavishnu V J`,
    },
    description: `Balavishnu V J is a full-stack engineer and ex co-founder & CTO. He scaled systems to 35M+ users and now builds with GenAI in production. He writes about how software gets built and scaled.`,
    siteUrl: `https://balavishnuvj.com`,
    social: {
      email: "hello@balavishnuvj.com",
      github: "https://github.com/balavishnuvj",
      linkedin: "https://www.linkedin.com/in/balavishnuvj",
      twitter: "https://twitter.com/vjbalavishnu",
      twitterFollow: "https://twitter.com/intent/follow?screen_name=vjbalavishnu",
      twitterId: "vjbalavishnu",
    },
    projects,
    socialProof,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-external-links`,
          `gatsby-remark-embedder`,
        ],
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-180744680-1"],
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Balavishnu V J | Engineer & ex-CTO`,
        short_name: `Balavishnu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#443868`,
        display: `minimal-ui`,
        icon: `content/assets/balavishnu-short-logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/svg/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
