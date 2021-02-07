import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"

import Navigation from "./Navigation"
import LeftMinSidebar from "./LeftMiniSidebar"
import Footer from "./Footer"

import "./style.scss"

const Layout = ({ children }) => {
  const [isDark, setDark] = useState(true)

  const onClickSwitcher = useCallback(() => {
    setDark(!isDark)
  }, [isDark])

  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <Navigation onClickSwitcher={onClickSwitcher} isDark={isDark} />
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
