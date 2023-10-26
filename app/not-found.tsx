import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Page not found ",
}

const NotFound = () => {
  return (
    <div className="container grid flex-1 py-32 place-items-center max-w-prose">
      <Heading as="h1" className="mb-8 font-black -tracking-wider md:text-9xl">
        Error 404
      </Heading>
      <p className="text-center">
        Ooups! We cannot find the page you are requesting, as it is either
        removed does not exist at all 🤷🏻‍♂️{" "}
      </p>
      <div className="mt-8">
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

export default NotFound
