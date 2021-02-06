import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import portrait from "src/images/portrait.jpg"

const PROFESSION = "Software Engineer"
const FORMER_COMPANY = "@BentoBox"
const CURRENT_COMPANY = "@Double"
const CTA = "View resumé"

import "./style.scss"

const Intro = ({ tagline }) => (
  <section className="intro">
    <div className="col col__1">
      <div className="tagline-section">
        <p className="greeting">Hi,</p>
        <h1 className="heading">
          I'm <span>Reico</span> Lee.
        </h1>
        <h2 className="tagline">{tagline}</h2>
        <p className="companies">
          {PROFESSION}{" "}
          <a
            className="companyLink"
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://withdouble.com"
          >
            {CURRENT_COMPANY}
          </a>
          . Formerly{" "}
          <a
            className="companyLink"
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://getbento.com/"
          >
            {FORMER_COMPANY}
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
          {CTA}
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
)

Intro.propTypes = {
  tagline: PropTypes.string.isRequired,
}

export default Intro
