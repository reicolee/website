import React, { ReactNode } from "react"

import SectionOuter from "./SectionOuter"
import SectionTitle from "./SectionTitle"

interface Props {
  children: ReactNode
  title?: string
  className?: string
  slug: string
}

const Section = ({ children, slug, title, className }: Props) => {
  return (
    <SectionOuter slug={slug}>
      <div className={className}>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </div>
    </SectionOuter>
  )
}
export default Section
