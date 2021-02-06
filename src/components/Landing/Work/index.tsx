import React from "react"
import PropTypes from "prop-types"

import DoubleLogo from "src/svg/double_logo.svg"
import BentoBoxLogo from "src/svg/bentobox-logo.svg"

import "./style.scss"

const Work = ({ works }) => (
  <section id="work" className="work__section">
    <div className="work__section__content">
      <h2 className="work__section__header section-header">Work.</h2>
      {works.map((experience, index) => (
        <div
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
        <h3 className="box-header">What's next?</h3>
        <p className="box-text-center">Have questions? Want to learn more?</p>
        <a href="mailto:leereico@gmail.com?body=Hi Reico!">Let's chat!</a>
      </div>
    </div>
  </section>
)

Work.propTypes = {
  works: PropTypes.array,
}

export default Work
