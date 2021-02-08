import React, { useContext } from "react"
import cn from "classnames"

import Context from "src/store/context"

import style from "./style.module.scss"

const SectionOuter = ({ slug, children }) => {
  const { state } = useContext(Context)
  return (
    <section id={slug} className={cn(style.outer, state.isDark && style.dark)}>
      {children}
    </section>
  )
}
export default SectionOuter
