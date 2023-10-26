import React from "react"

import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="container my-16 max-w-7xl">
      <Skeleton className="w-1/2 h-8 mx-auto mb-3" />
      <Skeleton className="w-1/4 h-6 mx-auto" />
      <div className="grid max-w-5xl grid-cols-2 gap-8 mx-auto mt-12 sm:grid-cols-3">
        {Array(9)
          .fill("")
          .map((item, i) => (
            <Skeleton key={i} className="w-full rounded-2xl aspect-square" />
          ))}
      </div>
    </div>
  )
}

export default Loading
