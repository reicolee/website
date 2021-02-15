import React from "react"
import PropTypes from "prop-types"

import DoubleLogo from "src/svg/double_logo.svg"
import BentoBoxLogo from "src/svg/bentobox-logo.svg"
import SectionTitle from "src/components/system/Section/SectionTitle"

import "./style.scss"

const TITLE = "Work."
const CTA_TITLE = "What's next?"
const CTA_SUBTITLE = "Have questions? Want to learn more?"
const CTA = "Let's connect!"

const Work = ({ works }) => (
  <section id="work" className="work__section">
    <div className="work__section__content">
      <SectionTitle title={TITLE} />
      {works.map((experience, index) => (
        <div
          key={index}
          className={`box work__section__item work__section__item${index + 1}`}
        >
          <h3 className="box-header">{experience.title}</h3>
          <span className="work__section__item__tenure">
            {experience.tenure}
          </span>
          {experience.title === "Double" ? <DoubleLogo /> : <BentoBoxLogo />}
          <p className="box-text-center">{experience.description}</p>
        </div>
      ))}
      <div className="box work__section__item3">
        <h3 className="box-header">{CTA_TITLE}</h3>
        <p className="box-text-center">{CTA_SUBTITLE}</p>
        <a href="mailto:leereico@gmail.com?body=Hi Reico!">{CTA}</a>
      </div>
    </div>
  </section>
)

Work.propTypes = {
  works: PropTypes.array,
}

export default Work
