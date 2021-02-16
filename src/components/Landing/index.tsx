import React from "react"
import PropTypes from "prop-types"

import Intro from "./Intro"
import About from "./About"
import Work from "./Work"
import Contact from "./Contact"

const Landing = ({ data }) => (
  <>
    <Intro />
    <About
      description={data.description}
      descriptionTwo={data.descriptionTwo}
      skills={data.skills}
    />
    <Work works={data.works} />
    <Contact />
  </>
)

Landing.propTypes = {
  data: PropTypes.object,
}

export default Landing
