"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const Error = () => {
  return (
    <div className="space-y-8">
      <div
        className={cn(
          "max-w-5xl mx-auto",
          "bg-yellow-200/30 border-yellow-400/80",
          "text-center font-medium p-6 border rounded-xl mt-10"
        )}
      >
        <p>Error fetching data — Refresh the page or try again later</p>
      </div>
      <div className="flex justify-center gap-6">
        <Link
          href="/#pricing"
          className={cn(
            buttonVariants({ size: "sm" }),
            "relative px-4 py-5 pl-11 group"
          )}
        >
          Back to Homepage
          <span
            className={cn(
              "absolute grid w-8 h-8 rounded-full left-1 top-1 place-items-center",
              "text-muted/90 bg-background backdrop-blur-lg",
              "transition-transform group-hover:scale-90"
            )}
          >
            <Icons.arrowLeft className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Error
