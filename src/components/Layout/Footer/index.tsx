import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SocialIcons from "../SocialIcons"

import "./style.scss"

const Footer = () => {
  const {
    site: {
      siteMetadata: { author, websiteRepoUrl },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            websiteRepoUrl
          }
        }
      }
    `
  )

  return (
    <footer>
      <div className="footer-social-icons">
        <SocialIcons />
      </div>
      <div className="author">
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href={websiteRepoUrl}
        >
          {author}
        </a>
      </div>
    </footer>
  )
}

export default Footer
