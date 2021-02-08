import React, { useCallback, useContext } from "react"
import PropTypes from "prop-types"

import Context from "src/store/context"
import { TOGGLE_DARK_MODE } from "src/store/useGlobalState"

import Navigation from "./Navigation"
import LeftMinSidebar from "./LeftMiniSidebar"
import Footer from "./Footer"

import "./style.scss"

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(Context)

  const onClickSwitcher = useCallback(() => {
    dispatch({ type: TOGGLE_DARK_MODE })
  }, [dispatch])

  return (
    <div className={`App ${state && state.isDark ? "dark" : ""}`}>
      <Navigation
        onClickSwitcher={onClickSwitcher}
        isDark={state ? state.isDark : true}
      />
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
