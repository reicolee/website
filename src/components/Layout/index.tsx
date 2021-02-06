import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import LeftMinSidebar from "./LeftMiniSidebar"
import Footer from "./Footer"

import "./style.scss"

const Layout = ({ children }) => {
  const [isDark, setDark] = useState(true)

  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <Header setDark={() => setDark(!isDark)} isDark={isDark} />
      <div className="contentOuter">
        <LeftMinSidebar />
        <main id="content">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
