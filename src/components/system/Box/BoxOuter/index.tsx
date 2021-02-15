import React from "react"
import cn from "classnames"

import style from "./style.module.scss"

const BoxOuter = ({ children, className }) => {
  return <div className={cn(style.outer, className)}>{children}</div>
}
export default BoxOuter
