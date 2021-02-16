import React, { ReactNode } from "react"

import BoxOuter from "./BoxOuter"
import BoxTitle from "./BoxTitle"

interface Props {
  children: ReactNode
  title?: string
  className?: string
}

const Box = ({ children, title, className }: Props) => {
  return (
    <BoxOuter className={className}>
      {title && <BoxTitle>{title}</BoxTitle>}
      {children}
    </BoxOuter>
  )
}
export default Box
