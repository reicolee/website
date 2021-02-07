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
    <footer className={style.footer}>
      <div className={style.footerSocialIcons}>
        <SocialIcons className={style.icon} />
      </div>
      <div className={style.author}>
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
