import React from "react"
import PropTypes from "prop-types"

import Intro from "./Intro"
import About from "./About"
import Work from "./Work"

import "./style.scss"

const Landing = ({ data }) => (
  <>
    <Intro tagline={data.tagline} />
    <About
      description={data.description}
      descriptionTwo={data.descriptionTwo}
      skills={data.skills}
    />
    <Work works={data.works} />
  </>
)

Landing.propTypes = {
  data: PropTypes.object,
}

export default Landing
