import React from "react"
import cn from "classnames"

import style from "./style.module.scss"

const SectionTitle = ({ children, isDark }) => {
  return (
    <div className={cn(style.outer, isDark && style.dark)}>
      <h2 className={style.title}>{children}</h2>
    </div>
  )
}
export default SectionTitle
