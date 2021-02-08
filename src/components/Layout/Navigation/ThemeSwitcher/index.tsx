import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon, faAdjust } from "@fortawesome/free-solid-svg-icons"
import cn from "classnames"

import style from "./style.module.scss"

type tProps = {
  name: string
  checked: boolean
  checkedLabel?: string
  uncheckedLabel?: string
  onChange: () => void
}

export default ({ name, checked, onChange }: tProps) => (
  <div className={checked && style.dark}>
    <label className={style.wrapperLabel}>
      <span className={cn(style.sliderLabel, style.sliderLabelLeft)}>
        <FontAwesomeIcon icon={faSun} />
      </span>
      <input
        className={style.checkbox}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={style.slider} />
      <span className={cn(style.sliderLabel, style.sliderLabelRight)}>
        <FontAwesomeIcon icon={faMoon} />
      </span>
      <span className={style.mobileThemeSwitcher}>
        <FontAwesomeIcon
          icon={faAdjust}
          onClick={onChange}
          className={style.mobileSwitcherIcon}
        />
      </span>
    </label>
  </div>
)
