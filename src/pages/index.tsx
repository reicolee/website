import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { TAGLINE, DESCRIPTION, ABOUT_ME } from './constants'

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO />
  </Layout>
)

export default IndexPage

// import { Link } from "gatsby"
// import Image from "../components/image"
{/* <SEO title="" />
<h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  <Image />
</div>
<Link to="/page-2/">Go to page 2</Link> <br />
<Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
