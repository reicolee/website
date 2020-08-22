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
            <p className="companies">Software Engineer <a className="companyLink" target="_blank" rel="nofollow noopener noreferrer" href="https://withdouble.com">@Double</a>.
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
      <section className="section">
        <div className="section__content">
          <h2 className="section__header">About.</h2>
          <div className="box section__description">
            <p>{description}</p>
          </div>
          <div className="box section__col1">
            <h3 className="box-header">Facts.</h3>
            <ul>
              <li>Born in the 6ix 🇨🇦</li>
              <li>Raised in +852 🇭🇰</li>
              <li>Trilingual</li>
              <li>Graudated from UBC Commerce, marketing</li>
              <li>Walking my cats 🐈</li>
              <li>FIFA Ultimate Team 🎮</li>
            </ul>
          </div>
          <div className="box section__col2">
            <h3 className="box-header">Proficiencies.</h3>
            <ul className="skills-list">
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS (w/ Sass)</li>
              <li>Node.js</li>
              <li>React + React Native</li>
              <li>Redux</li>
              <li>GraphQL</li>
              <li>Python 3</li>
              <li>Django (w/ DRF)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__content">
          <h2 className="section__header">Work.</h2>
          <div className="box section__description">
            <p>{description}</p>
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
