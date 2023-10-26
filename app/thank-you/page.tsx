"use client"

import Link from "next/link"
import { redirect, useSearchParams } from "next/navigation"
import Confetti from "react-confetti"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Icons } from "@/components/icons"

const Page = () => {
  const searchParams = useSearchParams()
  const name = searchParams.get("name")
  const email = searchParams.get("email")
  // const order = searchParams.get("order")
  const order = searchParams.get("products")

  // if (!order) return redirect("/")

  return (
    <section className="py-24 md:py-28 xl:py-56">
      <div className="container prose">
        <Heading className="!leading-none text-center lg:text-7xl lg:leading-snug scroll-m-20">
          <Icons.check className="w-32 h-32 mx-auto mb-4 text-yellow-500" />
          Thank You for Your <span className="text-muted">Purchase!</span>
        </Heading>
        <p>
          Thank you for choosing us! Our team is processing your order, and we
          will make sure to get everything ready as quickly as possible. In no
          time, you&apos;ll receive an email with all the details of your
          purchase.{" "}
        </p>

        <p>
          If you have any questions or need further assistance, please
          don&apos;t hesitate to reach out to us via our{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-white__"
          >
            email
          </a>{" "}
          . We&apos;re here to help!
        </p>

        <p>
          Once again, thank you for your trust in us. Your satisfaction is our
          top priority, and we&apos;re committed to providing you with the best
          TV experience possible.
        </p>
        {/* <p>
          Your name is{" "}
          {name ? (
            <span className="px-1 rounded bg-primary text-muted">{name}</span>
          ) : (
            "[undefined]"
          )}{" "}
          your email is{" "}
          {email ? (
            <span className="px-1 rounded bg-primary text-muted">{email}</span>
          ) : (
            "[undefined]"
          )}{" "}
          and your order is{" "}
          {order ? (
            <span className="px-1 rounded bg-primary text-muted">{order}</span>
          ) : (
            "[undefined]"
          )}
        </p> */}
      </div>
      <div className="container flex flex-wrap justify-center gap-6 mt-8 lg:mt-12">
        <Link
          href="/#pricing"
          className={cn(buttonVariants({ size: "lg" }), "relative pr-16 group")}
        >
          More Offers
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
          href="/"
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "relative pr-16 group"
          )}
        >
          Homepage
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
      <Confetti
        className="!z-50"
        width={window.innerWidth}
        height={window.innerHeight}
        // gravity={0.15}
        recycle={false} // Disable confetti recycling
      />
    </section>
  )
}

export default Page
