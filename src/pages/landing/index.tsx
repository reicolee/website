import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import portrait from 'src/images/portrait.jpg'
import DoubleLogo from 'src/svg/double_logo.svg'
import BentoBoxLogo from 'src/svg/bentobox-logo.svg'

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
      <section className="about__section">
        <div className="about__section__content">
          <h2 className="about__section__header section-header">About.</h2>
          <div className="box about__section__description">
            <p>{description}</p>
          </div>
          <div className="box about__section__col1">
            <h3 className="box-header">Proficiencies.</h3>
            <ul className="skills-list">
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS (w/ Sass)</li>
              <li>Node.js</li>
              <li>React + React Native</li>
              <li>Redux</li>
              <li>Web accessibility</li>
              <li>GraphQL</li>
              <li>Python 3</li>
              <li>Django (w/ DRF)</li>
              <li>Netlify</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="box about__section__col2">
            <h3 className="box-header">Facts.</h3>
            <ul>
              <li>Born in the 6ix 🇨🇦</li>
              <li>Raised in +852 🇭🇰</li>
              <li>Trilingual</li>
              <li>Graduated from UBC Sauder</li>
              <li>Walking my cats daily 🐈</li>
              <li>FIFA Ultimate Team 🎮</li>
            </ul>
          </div>
        </div>
      </section>
      {/* TODO */}
      <section className="work__section">
        <div className="work__section__content">
          <h2 className="work__section__header section-header">Work.</h2>
          <div className="box work__section__item work__section__item1">
            <h3 className="box-header">Double</h3>
            <span className="work__section__item__tenure">2019 - Present</span>
            <DoubleLogo />
            <p className="box-text-center">
             I work closely with product, customer success, operations, and marketing to make 
             delegation more accessible and seamless, developing better tooling on the web
             to transform collaboration b/w executives and assistants.
            </p>
          </div>
          <div className="box work__section__item work__section__item2">
            <h3 className="box-header">BentoBox</h3>
            <span className="work__section__item__tenure">2017 - 2019</span>
            <BentoBoxLogo />
            <p className="box-text-center">
              I worked on a wide array of projects ranging from frontend, backend, or full stack. 
              Noteable projects include improved data pipeline and analytics, better accessibility on 5000+ websites, 
              streamlined company-wide productivity, CMS features development, and more.
            </p>
          </div>
          <div className="box work__section__item3">
            <h3 className="box-header">What's next?</h3>
            <p className="box-text-center">Interested in working together? We should queue up a chat :)</p>
            <a href='mailto:leereico@gmail.com?body=Hi Reico!'>Let's connect!</a>
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
