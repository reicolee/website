import React, { useContext } from "react"
import cn from "classnames"

import Context from "src/store/context"
import Section from "src/components/system/Section"
import Box from "src/components/system/Box"

import style from "./style.module.scss"

const TITLE = "Say hi!"
const CTA_TITLE = "What's next?"
const CTA_SUBTITLE = "Have questions? Want to learn more?"
const CTA = "Let's connect!"

interface Props {
  works: any[]
}

const Contact = ({ works }: Props) => {
  const { state } = useContext(Context)
  return (
    <Section
      slug="contact"
      className={cn(style.content, state.isDark && style.dark)}
      title={TITLE}
    >
      <Box className={style.item} title={CTA_TITLE}>
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
