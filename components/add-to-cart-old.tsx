"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"

const OldAddToCart: React.FC<{
  productID: string
  className?: string
  children?: React.ReactNode
}> = ({ productID, children, className }) => {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  const handleCheckout = async () => {
    setLoading(true)

    try {
      const response = await fetch(`/api/checkout?id=${productID}`)
      if (response.ok) {
        const { redirectUrl } = await response.json()
        // Redirect to the provided URL
        // router.push(redirectUrl)
        // router.push(`https://www.digitalshell.shop/`)
        // window.location.href = `https://www.digitalshell.shop/`
        window.location.href = redirectUrl
        console.log(redirectUrl)
      } else {
        console.error("Error fetching checkout API")
      }
    } catch (error) {
      console.error("Error:", error)
    }
    // setLoading(false)
  }
  // React.useEffect(() => {
  //   router.prefetch("https://www.digitalshell.shop/checkout")
  // }, [router])

  return (
    <>
      <button
        // href={item.ctaUrl}
        // href={"https://Streamingshell.local/shop/?add-to-cart=24"}
        // rel="noopener noreferrer"
        // target="_blank"
        onClick={handleCheckout}
        className={cn(
          "text-sm md:text-base",
          "relative group flex items-center justify-center gap-2 px-6 py-4 pr-14 font-semibold rounded-full",
          "bg-black/90 text-foreground hover:bg-black/80",
          className,
          loading && "opacity-60 cursor-not-allowed"
        )}
        disabled={loading}
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
            loading && "scale-90"
          )}
        >
          {loading ? (
            <Icons.spinner className="w-5 h-5 animate-spin" />
          ) : (
            <Icons.arrowRight className="w-5 h-5" />
          )}
        </span>
      </button>
    </>
  )
}

export default OldAddToCart
