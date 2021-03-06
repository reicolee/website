import React, { useContext } from "react"
import cn from "classnames"

import Context from "src/store/context"
import Section from "src/components/system/Section"
import Box from "src/components/system/Box"

import style from "./style.module.scss"

const TITLE = "Contact."
const CTA_TITLE = "leereico@gmail.com"
const CTA_SUBTITLE = "Have questions? Want to learn more?"
const CTA = "Let's connect!"

const Contact = () => {
  const { state } = useContext(Context)
  return (
    <Section
      slug="contact"
      className={cn(style.content, state.isDark && style.dark)}
      title={TITLE}
    >
      <Box className={style.item}>
        <h3 className={style.boxTitle}>{CTA_TITLE}</h3>
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

export default Contact
