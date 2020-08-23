import React, { useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

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


  const onLinkClicks = useCallback((event, label) => {
    event.preventDefault()
    trackCustomEvent({
      category: 'Social Button',
      action: 'click',
      label: label
    })
  }, [])

  return (
    <ul>

      {
        socials.map((social, index) => (
          <li key={`${social.name}-${index}`}>
            <a onClick={(e) => onLinkClicks(e, social.name)} aria-label={social.name} target="_blank" rel="nofollow noopener noreferrer" href={social.url}>
              <FontAwesomeIcon icon={SOCIAL_ICON_MAP[social.name]} className={className} />
            </a>
          </li>
        ))
      }
    </ul>
  )
}


export default SocialIcons
