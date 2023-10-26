"use client"

import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"

const AddToCart: React.FC<{
  productID: string
  className?: string
  children?: React.ReactNode
}> = ({ productID, children, className }) => {
  const [loading, setLoading] = React.useState(false)

  const shopUrl = "/#"
  return (
    <a
      onClick={() => setLoading(true)}
      href={`${shopUrl}/checkout?add-to-cart=${productID}`}
      className={cn(
        "text-sm md:text-base",
        "relative group flex items-center justify-center gap-2 px-6 py-4 pr-14 font-semibold rounded-full",
        "bg-black/90 text-foreground hover:bg-black/80",
        className,
        loading && "opacity-60 cursor-not-allowed"
      )}
    >
      {loading ? (
        <>Please wait...</>
      ) : (
        <span>
          {children ? (
            children
          ) : (
            <>
              Buy now
              <small className="hidden opacity-75 lg:inline">
                {siteConfig?.discount && `— ${siteConfig?.discount}`}
              </small>
            </>
          )}
        </span>
      )}
      <span
        className={cn(
          "absolute grid w-10 md:w-11 h-10 md:h-11 -translate-y-1/2 rounded-full right-1.5 top-1/2",
          "bg-muted/90 text-background place-items-center",
          "transition-transform group-hover:scale-90",
          "group-hover:scale-90"
        )}
      >
        {loading ? (
          <Icons.spinner className="w-5 h-5 animate-spin" />
        ) : (
          <Icons.arrowRight className="w-5 h-5" />
        )}
      </span>
    </a>
  )
}

export default AddToCart
