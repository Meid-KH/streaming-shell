"use client"

import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [isHeaderSticky, setIsHeaderSticky] = React.useState(false)

  React.useEffect(() => {
    let prevScrollY = 0

    const handleScroll = () => {
      const scrollTopOffset =
        window.pageYOffset || document.documentElement.scrollTop
      const screenHeight = window.innerHeight
      const isScrollingDown = prevScrollY > scrollTopOffset

      // Change state to show/hide Scroll to Top button
      setIsHeaderSticky(scrollTopOffset >= screenHeight && isScrollingDown)

      prevScrollY = scrollTopOffset
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <TopBar />
      <header
        role="banner"
        className={cn(
          "w-full",
          // isHeaderSticky &&
          "sticky top-0 z-40 bg-background/60 backdrop-blur-lg border-b border-border/20"
        )}
      >
        <div className="container flex items-center space-x-4 h-20__ sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
        </div>
      </header>
    </>
  )
}

function TopBar() {
  const [openBanner, setOpenBanner] = React.useState(true)
  return (
    <header
      role="banner"
      className={cn(
        "relative px-4 py-2.5 text-xs bg-muted backdrop-blur text-background md:text-sm",
        !openBanner && "hidden"
      )}
    >
      <div className="container">
        <p className="hidden font-medium tracking-wide text-center lg:block">
          Hurry! Grab the hot deal now!{" "}
          <Link
            href="/#pricing"
            className="inline-block px-1 text-white rounded-sm bg-primary hover:bg-primary/75"
          >
            limited-time {siteConfig?.discount && `${siteConfig?.discount}`}
          </Link>{" "}
          expires soon!{" "}
          <Link
            href="/#pricing"
            className="font-bold underline underline-offset-4 hover:text-white"
          >
            Subscribe now!
          </Link>
        </p>
        <p className="font-medium tracking-wide text-center lg:hidden">
          <Link
            href="/#pricing"
            className="flex items-center justify-center gap-2"
          >
            Limited-time {siteConfig?.discount && `${siteConfig?.discount}`}{" "}
            discount <Icons.check className="w-4 h-4 text-black/90" />
          </Link>
          {/* <Link
            href="/#pricing"
            className="font-bold underline underline-offset-4 hover:text-white"
          >
            Subscribe now!
          </Link> */}
        </p>
      </div>
      <button
        type="button"
        aria-label="Close Top bar"
        onClick={() => setOpenBanner(false)}
        className="absolute grid w-6 h-6 -translate-y-1/2 rounded-full place-items-center right-2 top-1/2 text-muted bg-background/70 hover:bg-background"
      >
        <Icons.close className="w-4 h-4" />
      </button>
    </header>
  )
}
