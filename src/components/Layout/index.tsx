/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import LeftMinSidebar from './LeftMiniSidebar'
import "./style.scss"

const Layout = ({ children }) => {
  const [isDark, setDark] = useState(true)
  
  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <Header 
        setDark={() => setDark(!isDark)}
        isDark={isDark}
        />
      <div
        style={{
          margin: `0 50px`,
          maxWidth: `100%`,
        }}
        >
        <LeftMinSidebar />
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// const data = useStaticQuery(graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)
//   siteTitle={data.site.siteMetadata.title} 
