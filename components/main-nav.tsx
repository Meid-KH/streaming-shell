import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { ThemeToggle } from "./theme-toggle"
import { Button, buttonVariants } from "./ui/button"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex justify-between flex-1 gap-6 py-3.5 md:py-4 md:gap-10">
      <Link
        href="/"
        className="flex items-center space-x-2"
        aria-label="Home Page"
      >
        <Icons.logo
          className="w-12 md:w-16 lg:w-20"
          role="img"
          aria-label="Streaming Shell Logo"
        />
      </Link>

      <nav role="navigation" className="hidden md:flex gap-9">
        {items?.length ? (
          <>
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm__ font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80",
                      "underline-offset-[6px] hover:text-white/90 hover:underline"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </>
        ) : null}
        {/* <ThemeToggle /> */}
      </nav>
      <nav role="navigation" className="flex items-center gap-3">
        <Link
          href="/#pricing"
          className={cn(
            buttonVariants({ size: "sm" }),
            "relative px-4 py-5 pr-11 group"
          )}
          //           onClick={(e) => {
          //             const { target: EventTarget } = e
          //             e.preventDefault()
          //             console.log(target?.hash)
          //
          //             // document
          //             //   .getElementById("/#pricing")
          //             //   ?.scrollIntoView({ behavior: "smooth" })
          //           }}
        >
          Subscribe now
          <span
            className={cn(
              "absolute grid w-8 h-8 rounded-full right-1 top-1 place-items-center",
              "text-muted/90 bg-background backdrop-blur-lg",
              "transition-transform group-hover:scale-90"
            )}
          >
            <Icons.arrowRight className="w-4 h-4 rotate-90" />
          </span>
        </Link>
        {/* <Button
          variant="outline"
          size="sm"
          className="px-2 border-transparent lg:hidden"
        >
          <Icons.menu className="" />
        </Button> */}
      </nav>
    </div>
  )
}
