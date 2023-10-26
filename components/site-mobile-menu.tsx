"use client"

import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"

const MobileMenu = () => {
  const [isMenuSticky, setIsMenuSticky] = React.useState(false)

  React.useEffect(() => {
    let prevScrollY = 0

    const handleScroll = () => {
      const scrollTopOffset =
        window.pageYOffset || document.documentElement.scrollTop
      const isScrollingDown = prevScrollY > scrollTopOffset

      // Change state to show/hide Scroll to Top button
      setIsMenuSticky(isScrollingDown)

      prevScrollY = scrollTopOffset
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <nav
      role="navigation"
      className={cn(
        isMenuSticky ? "sticky" : "relative",
        "flex items-start justify-between gap-6 md:hidden",
        "inset-x-0 bottom-0 z-30 p-4 sm:pl-24 border-t",
        "bg-black/90 border-border/30 backdrop-blur-lg"
      )}
    >
      {siteConfig.mainNav.map((item, i) => {
        const Icon = () => {
          switch (item.icon) {
            case "channels":
              return <Icons.cast className="w-5 h-5" />
            case "pricing":
              return <Icons.creditCard className="w-5 h-5" />
            case "faq":
              return <Icons.help className="w-5 h-5" />
            case "contact":
              return <Icons.mail className="w-5 h-5" />
            default:
              return <Icons.badge className="w-5 h-5" />
          }
        }

        return (
          <Link
            key={i}
            href={item.href}
            className="flex flex-col items-center gap-1.5 w-11 text-xs font-semibold text-center"
          >
            <span className="opacity-75">
              <Icon />
            </span>
            <span className="max-w-min">{item?.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default MobileMenu
