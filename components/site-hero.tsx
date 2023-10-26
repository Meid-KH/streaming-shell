import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Icons } from "@/components/icons"
import ShowsCarousel from "@/components/shows-carousel"

const Hero = () => {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center min-h-screen gap-6 pt-28 xl:pt-48",
        "relative"
      )}
    >
      <div
        className={cn(
          "container relative z-20 space-y-6",
          "pb-16 sm:pb-20 lg:pb-28"
        )}
      >
        <div className="flex max-w-[1024px] mx-auto text-center flex-col items-center justify-center gap-8 lg:gap-3">
          <Heading
            className={cn(
              "md:font-extrabold",
              "!leading-tight sm:!leading-none",
              "text-5xl sm:text-6xl md:text-6xl lg:text-8xl"
            )}
          >
            Top-notch Streaming Service Made For You
            <br className="hidden__ sm:inline" />
            <span
              className={cn(
                "text-muted-foreground",
                "!leading-tight inline-block",
                "text-4xl sm:text-5xl md:text-6xl"
              )}
            >
              Elevate Your TV Viewing Experience
            </span>
          </Heading>
          <p
            className={cn(
              "max-w-[700px] mx-auto text-muted-foreground",
              "text-base lg:text-lg "
            )}
          >
            Experience top-notch entertainment and live sports like never before
            with our Streaming service! Enjoy a wide range of channels,
            delivering the excitement of your favorite events right to your
            screen. Join us now and elevate your viewing experience to new
            heights!
          </p>
        </div>
        <div className="flex justify-center gap-6 pt-6">
          <Link
            href="/#pricing"
            className={cn(
              buttonVariants({ size: "lg" }),
              "relative pr-16 group"
            )}
          >
            Subscribe now
            <span
              className={cn(
                "absolute grid w-12 h-12 rounded-full right-1 top-1 place-items-center",
                "text-muted/90 bg-background/90 backdrop-blur-lg",
                "transition-transform group-hover:scale-90"
              )}
            >
              <Icons.arrowRight className="w-5 h-5" />
            </span>
          </Link>
          <Link
            href="/channels"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "hidden md:inline-flex",
              "relative pr-16 group"
            )}
          >
            View channels
            <span
              className={cn(
                "absolute grid w-12 h-12 rounded-full right-1 top-1 place-items-center",
                "text-muted bg-background/95 backdrop-blur-lg",
                "transition-transform group-hover:scale-90"
              )}
            >
              <Icons.arrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
      <div className="relative w-full pt-12 mx-auto bg-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-full fill-background"
        >
          <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
        </svg>
        <div className="mt-8 space-y-3 text-center md:mt-20">
          <small className="block mb-3 text-sm font-semibold tracking-wide uppercase text-foreground/80">
            +20,000 latest Movies and VOD available
          </small>
          <Heading className="">
            All-in-One Entertainment Hub: <br className="" />
            <span className="text-muted">Movies, Sports, and TV Shows!</span>
            {/* Unleash the Excitement:{" "}
              <span className="text-muted">
                {siteConfig?.discount && `— ${siteConfig?.discount}`} Streaming <br className="" /> Today Only!
              </span>{" "}
              ⏳ */}
          </Heading>
        </div>
        <ShowsCarousel />
      </div>
    </section>
  )
}

export default Hero
