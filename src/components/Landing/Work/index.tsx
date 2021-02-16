import React, { useContext } from "react"
import cn from "classnames"

import Context from "src/store/context"
import DoubleLogo from "src/svg/double_logo.svg"
import BentoBoxLogo from "src/svg/bentobox-logo.svg"
import Section from "src/components/system/Section"
import Box from "src/components/system/Box"
import BoxOuter from "src/components/system/Box/BoxOuter"
import BoxTitle from "src/components/system/Box/BoxTitle"

import style from "./style.module.scss"

const TITLE = "Work."
const CTA_TITLE = "What's next?"
const CTA_SUBTITLE = "Have questions? Want to learn more?"
const CTA = "Let's connect!"

interface Props {
  works: any[]
}

const Work = ({ works }: Props) => {
  const { state } = useContext(Context)
  return (
    <Section
      slug="work"
      className={cn(style.content, state.isDark && style.dark)}
      title={TITLE}
    >
      {works.map((experience, index) => (
        <BoxOuter
          key={index}
          className={cn(style.item, style[`item${index + 1}`])}
        >
          <BoxTitle className={style.boxTitle}>{experience.title}</BoxTitle>
          <span className={style.tenure}>{experience.tenure}</span>
          {experience.title === "Double" ? <DoubleLogo /> : <BentoBoxLogo />}
          <p className={style.boxDescription}>{experience.description}</p>
        </BoxOuter>
      ))}
      <Box className={style.item3} title={CTA_TITLE}>
        <p className={style.boxDescription}>{CTA_SUBTITLE}</p>
        <a
          className={style.cta}
          href="mailto:leereico@gmail.com?body=Hi Reico!"
        >
          {CTA}
        </a>
      </Box>
    </Section>
  )
}

export default Work
