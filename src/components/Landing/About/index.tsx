import React, { useContext } from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import Context from "src/store/context"

import SectionOuter from "src/components/system/Section/SectionOuter"
import SectionTitle from "src/components/system/Section/SectionTitle"
import BoxOuter from "src/components/system/Box/BoxOuter"
import BoxTitle from "src/components/system/Box/BoxTitle"

import style from "./style.module.scss"

const TITLE = "About."
const SUBTITLE_ONE = "Proficiencies."
const SUBTITLE_TWO = "Facts."

const About = ({ description, descriptionTwo, skills }) => {
  const { state } = useContext(Context)
  return (
    <SectionOuter slug="about">
      <div className={cn(style.content, state.isDark && style.dark)}>
        <SectionTitle isDark={state.isDark}>{TITLE}</SectionTitle>
        <BoxOuter className={style.description}>
          <p>{description}</p>
          <p>{descriptionTwo}</p>
        </BoxOuter>
        <BoxOuter className={style.proficiencies}>
          <BoxTitle>{SUBTITLE_ONE}</BoxTitle>
          <ul className={cn(style.list, style.skillsList)}>
            {skills.map(skill => (
              <li key={skill} className={style.listItem}>
                {skill}
              </li>
            ))}
          </ul>
        </BoxOuter>
        <BoxOuter className={style.facts}>
          <BoxTitle>{SUBTITLE_TWO}</BoxTitle>
          <ul className={style.list}>
            <li className={style.listItem}>
              Born in{" "}
              <a
                className={style.listItemLink}
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Name_of_Toronto#Nicknames"
              >
                the 6ix
              </a>{" "}
              🇨🇦
            </li>
            <li className={style.listItem}>Raised in +852 🇭🇰</li>
            <li className={style.listItem}>Trilingual</li>
            <li className={style.listItem}>
              Graduated from{" "}
              <a
                className={style.listItemLink}
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://www.sauder.ubc.ca/"
              >
                UBC Sauder
              </a>
            </li>
            <li className={style.listItem}>Taking naps with my cat 🐈</li>
            <li className={style.listItem}>FIFA Ultimate Team 🎮</li>
          </ul>
        </BoxOuter>
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
