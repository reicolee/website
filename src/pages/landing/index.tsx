import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "src/components/Layout"
import SEO from "src/components/SEO"
import Landing from "src/components/Landing"

import "./style.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          tagline
          description
          descriptionTwo
          skills
          works {
            title
            description
            tenure
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO />
      <Landing data={data.site.siteMetadata} />
    </Layout>
  )
}

export default IndexPage
