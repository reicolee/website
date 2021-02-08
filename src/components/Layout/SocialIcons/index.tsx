import React, { useCallback, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import Context from "src/store/context"

import style from "./style.module.scss"

const SOCIAL_ICON_MAP = {
  Github: faGithub,
  Instagram: faInstagram,
  "Contact Reico by email": faEnvelope,
  LinkedIn: faLinkedinIn,
}

const SocialIcon = ({ label, url }) => {
  const onLinkClick = useCallback(
    e => {
      trackCustomEvent({
        category: "Social Button",
        action: "click",
        label: label,
      })
    },
    [label]
  )

  return (
    <a
      className={style.socialLink}
      onClick={onLinkClick}
      aria-label={label}
      target="_blank"
      rel="nofollow noopener noreferrer"
      href={url}
    >
      <FontAwesomeIcon icon={SOCIAL_ICON_MAP[label]} className={style.icon} />
    </a>
  )
}

const SocialIcons = () => {
  const { state } = useContext(Context)
  const data = useStaticQuery(graphql`
    query SocialMetadataQuery {
      site {
        siteMetadata {
          socials {
            name
            url
          }
        }
      }
    }
  `)

  const { socials } = data.site.siteMetadata

  return (
    <div className={state.isDark && style.dark}>
      <ul className={style.list}>
        {socials.map((social, index) => (
          <li className={style.listItem} key={`${social.name}-${index}`}>
            <SocialIcon label={social.name} url={social.url} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialIcons
