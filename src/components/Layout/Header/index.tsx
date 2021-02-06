import React from "react"

import ThemeSwitcher from './ThemeSwitcher'

import "./style.scss"

const Header = ({ setDark, isDark }) => (
  <>
    <a className="skip-to-main-content" href="#content">Skip to main content</a>
    <header className="navigation"> 
      <nav>
        <span className="icon-rl-icon"></span>
        <ThemeSwitcher
            name="Theme color switcher"
            checked={isDark}
            onChange={() => setDark(!isDark)}
        />
      </nav>
    </header>
  </>
)

export default Header
