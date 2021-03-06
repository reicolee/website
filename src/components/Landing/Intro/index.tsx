import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import cn from "classnames"

import Context from "src/store/context"
import portrait from "src/images/portrait.jpg"

const PROFESSION = "Full Stack Software Engineer."
const FORMER_COMPANY_ONE = "@BentoBox"
const FORMER_COMPANY_TWO = "@Double"
const CURRENT_COMPANY = "@Justworks"
const CTA = "View resumé"

import style from "./style.module.scss"

const Intro = () => {
  const { state } = useContext(Context)
  return (
    <section className={cn(style.intro, state.isDark && style.dark)}>
      <div className={cn(style.col, style.left)}>
        <div className={style.taglineSection}>
          <h1 className={style.heading}>
            <span>Reico</span> Lee.
          </h1>
          <h2 className={style.tagline}>{PROFESSION}</h2>
          <p className={style.companies}>
            <a
              className={style.companyLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://justworks.com/"
            >
              {CURRENT_COMPANY}
            </a>
            . Formerly{" "}
            <a
              className={style.companyLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://getbento.com/"
            >
              {FORMER_COMPANY_ONE}
            </a>
            {", "}
            <a
              className={style.companyLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://withdouble.com"
            >
              {FORMER_COMPANY_TWO}
            </a>
            .
          </p>
          <a
            className={style.resumeBtn}
            aria-label="Reico's Resume"
            target="_blank"
            rel="nofollow noopener noreferrer"
            href={"../../reico-resume.pdf"}
          >
            {CTA}
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className={style.externalLinkIcon}
            />
          </a>
        </div>
      </div>
      <div className={cn(style.col, style.right)}>
        <img src={portrait} className={style.portrait} alt="Reico's portrait" />
      </div>
    </section>
  )
}

export default Intro
