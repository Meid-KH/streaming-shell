import React from "react"

import { cn } from "@/lib/utils"

interface Props {
  className?: string
  children: React.ReactNode | React.ReactNode[]
  as?: React.ElementType
}

const Heading = ({
  as: TagName = "h2",
  children,
  className,
  ...otherProps
}: Props) => {
  return (
    <TagName
      className={cn(
        "text-5xl md:text-6xl font-black leading-tight tracking-tight text-center",
        // "text-primary",
        "text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-700",
        className
      )}
      {...otherProps}
    >
      {children}
    </TagName>
  )
}

export default Heading
