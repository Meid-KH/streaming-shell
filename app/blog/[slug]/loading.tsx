import React from "react"

import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="container prose">
      <div className="space-y-6">
        <Skeleton className="w-1/2 h-6" />
        <Skeleton className="h-4" />
        <Skeleton className="h-44" />
        <Skeleton className="w-2/3 h-6" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="w-1/2 h-6" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    </div>
  )
}

export default Loading
