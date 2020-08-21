import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const SOCIAL_ICON_MAP = {
  'Github': faGithub,
  'Instagram': faInstagram,
  'Contact Reico by email': faEnvelope,
  'LinkedIn': faLinkedinIn
}

const SocialIcons = ({ className }) => {
  const data = useStaticQuery(graphql`
    query SocialMetadataQuery {
      site {
        siteMetadata {
          socials{
            name
            url
          }
        }
      }
    }
  `);

  const { socials } = data.site.siteMetadata
  return (
    <ul>

      {
        socials.map((social) => (
          <li>
            <a aria-label={social.name} target="_blank" rel="nofollow noopener noreferrer" href={social.url}>
              <FontAwesomeIcon icon={SOCIAL_ICON_MAP[social.name]} className={className} />
            </a>
          </li>
        ))
      }
    </ul>
  )
}


export default SocialIcons
