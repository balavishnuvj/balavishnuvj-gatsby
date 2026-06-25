import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import balavishnu from "../../content/assets/meta-balavishnu.png"

const SEO = ({ description, lang, meta, title, image, canonical, keywords }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitterId
              email
              linkedin
            }
            author {
              name
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || balavishnu
  const siteUrl = site.siteMetadata.siteUrl

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: site.siteMetadata.author.name,
        url: siteUrl,
        jobTitle: "Software Engineer & Engineering Leader",
        description: metaDescription,
        knowsAbout: [
          "Generative AI",
          "Applied AI",
          "System Architecture",
          "Engineering Leadership",
          "React",
          "JavaScript",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "VIT University",
        },
        sameAs: [
          site.siteMetadata.social.linkedin,
        ].filter(Boolean),
        email: site.siteMetadata.social.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressCountry: "IN",
        },
      },
    ],
  }

  const allMeta = [
    {
      name: "description",
      content: metaDescription,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: metaDescription,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: `${siteUrl}${metaImage}`,
    },
    {
      property: "twitter:image",
      content: `${siteUrl}${metaImage}`,
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:creator",
      content: site.siteMetadata.social.twitterId,
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: metaDescription,
    },
  ]

  if (keywords && keywords.length > 0) {
    allMeta.push({
      name: "keywords",
      content: keywords.join(", "),
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={allMeta.concat(meta)}
      link={
        canonical
          ? [{ rel: "canonical", href: canonical }]
          : []
      }
    >
      <script key="ld-json" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  canonical: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default SEO
