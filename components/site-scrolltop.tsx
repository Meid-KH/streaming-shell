"use client"

import React from "react"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"

const ScrollTop = () => {
  const [isScrollTopVisible, setIsScrollTopVisible] = React.useState(false)

  React.useEffect(() => {
    let prevScrollY = 0

    const handleScroll = () => {
      const scrollTopOffset =
        window.pageYOffset || document.documentElement.scrollTop
      const screenHeight = window.innerHeight
      const isScrollingDown = prevScrollY > scrollTopOffset

      // Change state to show/hide Scroll to Top button
      setIsScrollTopVisible(scrollTopOffset >= screenHeight && isScrollingDown)

      prevScrollY = scrollTopOffset
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={handleScrollToTop}
      className={cn(
        "fixed z-50 w-12 lg:w-16 h-12 lg:h-16 border rounded-full right-4 bottom-24 place-items-center",
        "border-background/70 text-background drop-shadow backdrop-blur-lg bg-muted/80 duration-100",
        "hover:bg-muted active:scale-95",
        isScrollTopVisible ? "grid" : "hidden"
      )}
    >
      <Icons.arrowRight className="w-5 h-5 -rotate-90" />
    </button>
  )
}

export default ScrollTop
