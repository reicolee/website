import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SocialIcons from "../SocialIcons"

import style from "./style.module.scss"

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
    <footer className={style.outer}>
      <div className={style.socialIcons}>
        <SocialIcons />
      </div>
      <div className={style.author}>
        <a
          className={style.authorLink}
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
