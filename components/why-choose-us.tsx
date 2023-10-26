import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"
import Heading from "./ui/heading"

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 xl:py-32">
      <div className="container">
        <div className="grid gap-6 lggap-12 md:grid-cols-2 lg:gap-24 xl:gap-48">
          <div className="">
            <div className="sticky left-0 -translate-y-10 top-1/4">
              <small className="text-xs font-semibold tracking-wide uppercase text-foreground/80">
                Why choosing us — {siteConfig.name} ?
              </small>
              <Heading className="mt-3 mb-6 text-5xl text-left md:text-5xl">
                Our Extraordinary <span className="text-muted">Benefits</span>
              </Heading>
              <p className="text-muted/80">
                Discover the compelling reasons to choose us as your preferred
                Streaming service, where exceptional quality, extensive content,
                and unrivaled customer support converge in perfect harmony.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-3">
              <h3 className="flex items-start gap-3.5 text-4xl font-black tracking-tight text-muted">
                <Icons.check className="flex-shrink-0 w-7 h-7 mt-1.5 text-yellow-500" />{" "}
                Extensive Channel Selection
              </h3>
              <p className="leading-relaxed text-muted/80">
                Immerse yourself in a vast array of channels, spanning various
                genres and languages, offering limitless entertainment options
                to cater to your diverse tastes. From thrilling sports events to
                captivating series and everything in between, our extensive
                channel selection ensures there&apos;s always something exciting
                to watch, keeping you engaged and entertained.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="flex items-start gap-3.5 text-4xl font-black tracking-tight text-muted">
                <Icons.check className="flex-shrink-0 w-7 h-7 mt-1.5 text-yellow-500" />{" "}
                Ultra-Fast And Ultra-Reliable
              </h3>
              <p className="leading-relaxed text-muted/80">
                At{" "}
                <span className="underline underline-offset-4 text-muted">
                  {siteConfig.name}
                </span>
                , we deliver an unparalleled streaming experience with our
                ultra-fast and ultra-reliable service. Enjoy lightning-fast
                channel switching and seamless playback, ensuring minimal
                buffering and uninterrupted entertainment. Our robust
                infrastructure and cutting-edge technology ensure that your
                favorite shows, movies, and sports events are streamed with
                impeccable speed and reliability. Say goodbye to frustrating lag
                and disruptions, and embrace a truly exceptional Streaming
                experience that exceeds your expectations. With{" "}
                {siteConfig.name}, you can trust in the ultimate combination of
                speed and reliability for your streaming needs.
              </p>
            </div>
            {/* <div className="space-y-3">
              <h3 className="flex items-start gap-3.5 text-4xl font-black tracking-tight text-muted">
                <Icons.check className="flex-shrink-0 w-7 h-7 mt-1.5 text-yellow-500" />{" "}
                User-Friendly Interface
              </h3>
              <p className="leading-relaxed text-muted/80">
                Navigate our intuitive and user-friendly interface effortlessly,
                ensuring a seamless and enjoyable viewing experience. Our
                interface is designed with your convenience in mind, allowing
                you to effortlessly browse through channels, explore content
                categories, and access features with ease. Enjoy a hassle-free
                experience as you find your favorite shows, create personalized
                playlists, and customize your viewing preferences, putting you
                in complete control of your entertainment journey.
              </p>
            </div> */}
            <div className="space-y-3">
              <h3 className="flex items-start gap-3.5 text-4xl font-black tracking-tight text-muted">
                <Icons.check className="flex-shrink-0 w-7 h-7 mt-1.5 text-yellow-500" />{" "}
                Fast Support 24/7
              </h3>
              <p className="leading-relaxed text-muted/80">
                With our unwavering commitment to customer satisfaction, we
                provide lightning-fast support that&apos;s available around the
                clock, 24/7. No matter the time or day, our dedicated support
                team is ready to assist you promptly and efficiently. Whether
                you have a technical query, need assistance with account-related
                matters, or simply seek guidance, our responsive support ensures
                you receive the help you need, when you need it. Rest assured
                that at {siteConfig.name}, we prioritize your peace of mind and
                guarantee a seamless and hassle-free experience backed by our
                exceptional 24/7 support.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="flex items-start gap-3.5 text-4xl font-black tracking-tight text-muted">
                <Icons.check className="flex-shrink-0 w-7 h-7 mt-1.5 text-yellow-500" />{" "}
                Flexible Pricing Plans
              </h3>
              <p className="leading-relaxed text-muted/80">
                At{" "}
                <span className="underline underline-offset-4 text-muted">
                  {siteConfig.name}
                </span>
                , we take immense pride in offering an unbeatable combination of
                affordable pricing, exceptional service quality, and
                unparalleled customer support. We firmly believe that you
                won&apos;t find a better value proposition in the market. Our
                commitment to delivering top-notch entertainment experiences,
                reliable streaming, and prompt assistance sets us apart from the
                rest. With a price that aligns perfectly with the quality we
                provide, we are confident that {siteConfig.name} stands head and
                shoulders above the competition, ensuring your satisfaction and
                enjoyment every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Link
            href="/#pricing"
            className={cn(
              buttonVariants({ size: "lg" }),
              "relative pr-16 group"
            )}
          >
            Subscribe now {siteConfig?.discount && `— ${siteConfig?.discount}`}
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
      </div>
    </section>
  )
}
