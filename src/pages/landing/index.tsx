import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import portrait from "src/images/portrait.jpg"
import DoubleLogo from "src/svg/double_logo.svg"
import BentoBoxLogo from "src/svg/bentobox-logo.svg"

import Layout from "src/components/Layout"
import SEO from "src/components/SEO"

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

  const {
    tagline,
    description,
    descriptionTwo,
    works,
    skills,
  } = data.site.siteMetadata

  return (
    <Layout>
      <SEO />
      <section className="intro">
        <div className="col col__1">
          <div className="tagline-section">
            <p className="greeting">Hi,</p>
            <h1 className="heading">
              I'm <span>Reico</span> Lee.
            </h1>
            <h2 className="tagline">{tagline}</h2>
            <p className="companies">
              Software Engineer{" "}
              <a
                className="companyLink"
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://withdouble.com"
              >
                @Double
              </a>
              . Formerly{" "}
              <a
                className="companyLink"
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://getbento.com/"
              >
                @BentoBox
              </a>
              .
            </p>
            <a
              className="resumeBtn"
              aria-label="Reico's Resume"
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"../../reico-resume.pdf"}
            >
              View resumé
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="external-link-icon"
              />
            </a>
          </div>
        </div>
        <div className="col col__2">
          <img src={portrait} className="portrait" alt="Reico's portrait" />
        </div>
      </section>
      <section id="about" className="about__section">
        <div className="about__section__content">
          <h2 className="about__section__header section-header">About.</h2>
          <div className="box about__section__description">
            <p>{description}</p>
            <p>{descriptionTwo}</p>
          </div>
          <div className="box about__section__col1">
            <h3 className="box-header">Proficiencies.</h3>
            <ul className="skills-list">
              {skills.map(skill => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="box about__section__col2">
            <h3 className="box-header">Facts.</h3>
            <ul>
              <li>
                Born in{" "}
                <a
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  href="https://en.wikipedia.org/wiki/Name_of_Toronto#Nicknames"
                >
                  the 6ix
                </a>{" "}
                🇨🇦
              </li>
              <li>Raised in +852 🇭🇰</li>
              <li>Trilingual</li>
              <li>
                Graduated from{" "}
                <a
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  href="https://www.sauder.ubc.ca/"
                >
                  UBC Sauder
                </a>
              </li>
              <li>Walking my cats daily 🐈</li>
              <li>FIFA Ultimate Team 🎮</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="work" className="work__section">
        <div className="work__section__content">
          <h2 className="work__section__header section-header">Work.</h2>
          {works.map((experience, index) => (
            <div
              className={`box work__section__item work__section__item${
                index + 1
              }`}
            >
              <h3 className="box-header">{experience.title}</h3>
              <span className="work__section__item__tenure">
                {experience.tenure}
              </span>
              {experience.title === "Double" ? (
                <DoubleLogo />
              ) : (
                <BentoBoxLogo />
              )}
              <p className="box-text-center">{experience.description}</p>
            </div>
          ))}
          <div className="box work__section__item3">
            <h3 className="box-header">What's next?</h3>
            <p className="box-text-center">
              Have questions? Want to learn more?
            </p>
            <a href="mailto:leereico@gmail.com?body=Hi Reico!">
              Let's connect!
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
