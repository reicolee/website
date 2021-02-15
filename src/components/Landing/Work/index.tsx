import React, { useContext } from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import Context from "src/store/context"
import DoubleLogo from "src/svg/double_logo.svg"
import BentoBoxLogo from "src/svg/bentobox-logo.svg"
import SectionOuter from "src/components/system/Section/SectionOuter"
import SectionTitle from "src/components/system/Section/SectionTitle"
import BoxOuter from "src/components/system/Box/BoxOuter"
import BoxTitle from "src/components/system/Box/BoxTitle"

import style from "./style.module.scss"

const TITLE = "Work."
const CTA_TITLE = "What's next?"
const CTA_SUBTITLE = "Have questions? Want to learn more?"
const CTA = "Let's connect!"

const Work = ({ works }) => {
  const { state } = useContext(Context)
  return (
    <SectionOuter slug="work">
      <div className={cn(style.content, state.isDark && style.dark)}>
        <SectionTitle isDark={state.isDark}>{TITLE}</SectionTitle>
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
        <BoxOuter className={style.item3}>
          <BoxTitle>{CTA_TITLE}</BoxTitle>
          <p className={style.boxDescription}>{CTA_SUBTITLE}</p>
          <a
            className={style.cta}
            href="mailto:leereico@gmail.com?body=Hi Reico!"
          >
            {CTA}
          </a>
        </BoxOuter>
      </div>
    </SectionOuter>
  )
}

Work.propTypes = {
  works: PropTypes.array,
}

export default Work
