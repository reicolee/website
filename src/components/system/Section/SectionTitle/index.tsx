import React, { useContext } from "react"
import cn from "classnames"

import Context from "src/store/context"

import style from "./style.module.scss"

const SectionTitle = ({ children }) => {
  const { state } = useContext(Context)
  return (
    <div className={cn(style.outer, state.isDark && style.dark)}>
      <h2 className={style.title}>{children}</h2>
    </div>
  )
}
export default SectionTitle
