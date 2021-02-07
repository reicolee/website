import React from "react"
import PropTypes from "prop-types"

import "./style.scss"

const TITLE = "About."
const SUBTITLE_ONE = "Proficiencies."
const SUBTITLE_TWO = "Facts."

const About = ({ description, descriptionTwo, skills }) => (
  <section id="about" className="about__section">
    <div className="about__section__content">
      <h2 className="about__section__header section-header">{TITLE}</h2>
      <div className="box about__section__description">
        <p>{description}</p>
        <p>{descriptionTwo}</p>
      </div>
      <div className="box about__section__col1">
        <h3 className="box-header">{SUBTITLE_ONE}</h3>
        <ul className="skills-list">
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="box about__section__col2">
        <h3 className="box-header">{SUBTITLE_TWO}</h3>
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
)

About.propTypes = {
  description: PropTypes.string,
  descriptionTwo: PropTypes.string,
  skills: PropTypes.array,
}

export default About
