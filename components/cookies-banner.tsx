"use client"

import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { Button, buttonVariants } from "@/components/ui/button"

const CookiesBanner = () => {
  const [isBannerClosed, setIsBannerClosed] = useLocalStorage(
    "cookieBannerClosed",
    false
  )

  // console.log(typeof isBannerClosed)

  React.useEffect(() => {
    if (isBannerClosed) {
      // Perform actions when banner is closed
      // setIsBannerClosed(true)
      // console.log("isBannerClosed")
    }
  }, [isBannerClosed, setIsBannerClosed])

  const handleCloseBanner = () => {
    setIsBannerClosed(true)
  }

  if (isBannerClosed == true) {
    return null // Banner is closed, don't render it
  }

  return (
    <>
      <div
        className={cn(
          "fixed",
          isBannerClosed ? "hidden" : "flex",
          "justify-between backdrop-blur-lg gap-2.5 md:gap-3.5 items-center",
          "fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50",
          "max-w-[calc(100%-2rem)] w-max rounded-2xl",
          "p-2.5 sm:p-4 bg-muted/80 border border-background/90 shadow-xl shadow-black/20"
        )}
      >
        <p className="flex-1 text-sm font-medium md:text-base text-background">
          We use cookies to enhance your browsing experience.{" "}
          <Link
            href="/privacy-policy#collected-info"
            className="underline underline-offset-4 hover:decoration-dashed"
          >
            Learn more
          </Link>
        </p>
        <Button
          className="flex-shrink-0 h-10 px-5 py-2 text-sm font-medium rounded-full text-muted/90 bg-background hover:bg-background/80"
          variant="secondary"
          size="sm"
          onClick={handleCloseBanner}
        >
          Got it!
        </Button>
      </div>
    </>
  )
}

export default CookiesBanner
