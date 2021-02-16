import React, { useContext } from "react"
import cn from "classnames"

import Context from "src/store/context"

import Section from "src/components/system/Section"
import Box from "src/components/system/Box"

import style from "./style.module.scss"

const TITLE = "About."
const SUBTITLE_ONE = "Proficiencies."
const SUBTITLE_TWO = "Facts."

interface Props {
  description: string
  descriptionTwo: string
  skills: string[]
}

const About = ({ description, descriptionTwo, skills }: Props) => {
  const { state } = useContext(Context)
  return (
    <Section
      slug="about"
      className={cn(style.content, state.isDark && style.dark)}
      title={TITLE}
    >
      <Box className={style.description}>
        <p>{description}</p>
        <p>{descriptionTwo}</p>
      </Box>
      <Box className={style.proficiencies} title={SUBTITLE_ONE}>
        <ul className={cn(style.list, style.skillsList)}>
          {skills.map(skill => (
            <li key={skill} className={style.listItem}>
              {skill}
            </li>
          ))}
        </ul>
      </Box>
      <Box className={style.facts} title={SUBTITLE_TWO}>
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
      </Box>
    </Section>
  )
}

export default About
