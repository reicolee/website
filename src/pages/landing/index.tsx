import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import portrait from 'src/images/portrait.jpg'

import Layout from "src/components/Layout"
import SEO from "src/components/SEO"

import './style.scss'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          tagline
          description
        }
      }
    }
  `);

  const { tagline, description } = data.site.siteMetadata

  return (
    <Layout>
      <SEO />
      <section className="intro">
        <div className="col col__1">
          <div className="tagline-section">
            <p className="greeting">Hi,</p>
            <h1 className="heading">I'm <span>Reico</span> Lee.</h1>
            <h2 className="tagline">{tagline}</h2>
            <p className="description">{description}</p>
            <p className="companies">Currently <a className="companyLink" target="_blank" rel="nofollow noopener noreferrer" href="https://withdouble.com">@Double</a>.
            Formerly <a className="companyLink" target="_blank" rel="nofollow noopener noreferrer" href="https://getbento.com/">@BentoBox</a>.</p>
            <a className="resumeBtn" aria-label="Reico's Resume" target="_blank" rel="nofollow noopener noreferrer" href={'../../reico-resume.pdf'}>
              View resumé
              <FontAwesomeIcon icon={faExternalLinkAlt} className="external-link-icon"/>
            </a>
          </div>
        </div>
        <div className="col col__2">
          <img src={portrait} className="portrait" alt="Reico's portrait"/>
        </div>
      </section>
      <section className="about">
        <div className="content">
          <h2 className="header">About me.</h2>
          <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}


export default IndexPage

// import { Link } from "gatsby"
// import Image from "../components/image"
{/* 
<Link to="/page-2/">Go to page 2</Link> <br />
<Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
