import React from "react"
import cn from "classnames"

import style from "./style.module.scss"

const BoxTitle = ({ children, className }) => {
  return (
    <>
      <h3 className={cn(style.title, className)}>{children}</h3>
    </>
  )
}
export default BoxTitle
