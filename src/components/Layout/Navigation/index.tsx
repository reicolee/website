import React from "react"

import ThemeSwitcher from "./ThemeSwitcher"

import style from "./style.module.scss"

const Navigation = ({ onClickSwitcher, isDark }) => (
  <>
    <a className={style.skipToMainContent} href="#content">
      Skip to main content
    </a>
    <header className={style.navigation}>
      <nav>
        <span className={`icon-rl-icon ${style.iconRLIcon}`}></span>
        <ThemeSwitcher
          name="Theme color switcher"
          checked={isDark}
          onChange={onClickSwitcher}
        />
      </nav>
    </header>
  </>
)

export default Navigation
