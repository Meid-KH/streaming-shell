import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Icons } from "@/components/icons"

const ChannelsList = () => {
  return (
    <>
      <section className="relative py-24 -mb-14 md:py-36">
        {/* the bg layer */}
        {/* <div className="absolute inset-0 bg-fixed bg-bottom bg-no-repeat bg-contain -z-10 opacity-5 bg-marvel filter grayscale" /> */}

        <div className="container text-center">
          <small className="block mb-3 text-sm font-semibold tracking-wide uppercase text-foreground/80">
            +10,000 Premium Channels
          </small>
          <Heading className="mb-10 text-4xl md:mb-16">
            Explore your favorite <br className="" /> worldwide{" "}
            <span className="text-muted">channels</span> &nbsp;
            {/* todo: add icon like 📡 */}
          </Heading>
        </div>
        <div className="overflow-hidden container__">
          <div
            className={cn(
              "w-[100w] md:w-[150vw] lg:w-[150vw]",
              "h-9 xl:h-12",
              "bg-repeat-x bg-center bg-channels-list grayscale opacity-60 hover:opacity-100"
            )}
          />
        </div>
        <div className="container flex justify-center mt-12 md:mt-20">
          <Link
            href="/channels"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "relative pr-16 group"
            )}
          >
            View channels list
            <span
              className={cn(
                "absolute grid w-12 h-12 rounded-full right-1 top-1 place-items-center",
                "text-muted/90 bg-background backdrop-blur-lg",
                "transition-transform group-hover:scale-90"
              )}
            >
              <Icons.arrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
      <section className="relative pt-12 mb-10 lg:-mb-16 lg:py-36">
        {/* the bg layer */}
        {/* <div className="absolute inset-0 bg-fixed bg-bottom bg-no-repeat bg-contain -z-10 opacity-5 bg-marvel filter grayscale" /> */}

        <div className="container text-center">
          <small className="block mb-3 text-sm font-semibold tracking-wide uppercase text-foreground/80">
            All Sports — in One Place 🏀⚽🎾
          </small>
          <Heading className="mb-16 text-4xl">
            Experience the thrill of all <br className="" /> your favorite
            sports <span className="text-muted">competitions!</span>
            {/* todo add icon like 🏆 */}
          </Heading>
        </div>
        <div className="overflow-hidden container__">
          <div
            className={cn(
              "w-[150vw] md:w-[200vw] lg:w-[100vw]",
              "h-16 xl:h-20___",
              "bg-repeat-x bg-center bg-competitions grayscale opacity-60 hover:opacity-100"
            )}
          />
        </div>
      </section>
    </>
  )
}

export default ChannelsList
