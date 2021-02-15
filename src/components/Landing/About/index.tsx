import React, { useContext } from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import Context from "src/store/context"

import SectionOuter from "src/components/system/Section/SectionOuter"
import SectionTitle from "src/components/system/Section/SectionTitle"

import style from "./style.module.scss"

const TITLE = "About."
const SUBTITLE_ONE = "Proficiencies."
const SUBTITLE_TWO = "Facts."

const About = ({ description, descriptionTwo, skills }) => {
  const { state } = useContext(Context)
  return (
    <SectionOuter slug="about">
      <div className={cn(style.content, state.isDark && style.dark)}>
        <SectionTitle title={TITLE} />
        <div className={cn("box", style.description)}>
          <p>{description}</p>
          <p>{descriptionTwo}</p>
        </div>
        <div className={cn("box", style.proficiencies)}>
          <h3 className="box-header">{SUBTITLE_ONE}</h3>
          <ul className={style.skillsList}>
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={cn("box", style.facts)}>
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
            <li>Taking naps with my cat 🐈</li>
            <li>FIFA Ultimate Team 🎮</li>
          </ul>
        </div>
      </div>
    </SectionOuter>
  )
}

About.propTypes = {
  description: PropTypes.string,
  descriptionTwo: PropTypes.string,
  skills: PropTypes.array,
}

export default About
