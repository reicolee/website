import React, { ReactNode } from "react"
import cn from "classnames"

import style from "./style.module.scss"

interface Props {
  children: ReactNode
  className?: string
}

const BoxTitle = ({ children, className }: Props) => {
  return (
    <>
      <h3 className={cn(style.title, className)}>{children}</h3>
    </>
  )
}

export default BoxTitle
