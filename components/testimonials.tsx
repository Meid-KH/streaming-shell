"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import imageBlurHash, { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Icons } from "@/components/icons"

interface TestimonialItem {
  author: string
  content: string
}
const testimonials: TestimonialItem[] = [
  {
    author: "James Wilson",
    content:
      "The streaming service provided by XYZ TV is exceptional. The video quality is top-notch, and I never experience any buffering issues. Highly recommended!",
  },
  {
    author: "Olivia Mitchell",
    content:
      "I love the variety of channels available on XYZ TV. From sports to entertainment, they have it all. It's like having a cable TV package without the hassle of a cable subscription.",
  },
  {
    author: "William Roberts",
    content:
      "The customer support at XYZ TV is outstanding. They are always available to assist and resolve any issues promptly. Kudos to their dedicated support team!",
  },
  {
    author: "Olivia Mitchell",
    content:
      "I love the variety of channels available on XYZ TV. From sports to entertainment, they have it all. It's like having a cable TV package without the hassle of a cable subscription.",
  },
  {
    author: "Benjamin Harris",
    content:
      "The streaming quality on XYZ TV is excellent, even on my large TV screen. I can enjoy my favorite shows and movies in high definition without any lag or buffering.",
  },
  {
    author: "Ewan MacDonald",
    content:
      "As a proud Scot, I appreciate the selection of Scottish channels on XYZ TV. It allows me to stay connected with the local news and cultural programs.",
  },
  {
    author: "Benjamin Harris",
    content:
      "The streaming quality on XYZ TV is excellent, even on my large TV screen. I can enjoy my favorite shows and movies in high definition without any lag or buffering.",
  },
  {
    author: "Isla MacLeod",
    content:
      "Being able to stream Scottish movies and documentaries on XYZ TV brings a piece of home to me. It's fantastic to have access to authentic Scottish content.",
  },
]

const testimonialScreens = [
  "chat-1.png",
  "chat-2.png",
  "chat-3.png",
  "chat-4.png",
  "chat-5.png",
  "chat-6.png",
  "chat-3.png",
  // "chat-7.png",
  // "chat-9.png",
  // "chat-10.png",
]

export const Testimonials = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <section
      id="testimonials"
      className="relative py-36 xl:pt-44 bg-background"
    >
      {/* the bg layer */}
      {/* <div
        className={cn(
          "hidden lg:block",
          "absolute inset-0 bg-fixed bg-bottom bg-no-repeat md:bg-cover z-20 opacity-5 bg-ucl filter grayscale"
        )}
      /> */}

      {/* Background */}
      <span
        className={cn(
          "hidden xl:block overflow-hidden",
          "absolute inset-0 w-full opacity-[0.15] z-10 blur-[2px]",
          // "before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-1/3 before:bg-gradient-to-b before:from-background before:via-background/60 before:to-transparent",
          "after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-1/4 after:bg-gradient-to-t after:from-background after:via-background/60 after:to-transparent"
        )}
      >
        <Image
          className="object-cover w-full -translate-y-8 h-full__ 2xl:-translate-y-24"
          src="/img/debruyne.webp"
          width="1200"
          height="800"
          alt="Testimonials background image"
          // priority={true}
        />
      </span>

      <div className="container relative z-10">
        <small className="block mx-auto mb-3 text-sm font-semibold tracking-wide uppercase w-max text-foreground/80">
          Our Clients Testimonials
        </small>
        <Heading className="mb-10">
          What our <span className="text-muted">customers</span> say
          {/* todo: add icon like 🙋🏻‍♂️ */}
        </Heading>
        <div className={cn(!open && "overflow-y-hidden")}>
          <div
            className={cn(
              "grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-3 lg:grid-cols-4",
              !open && "h-72"
            )}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-3 p-4 border rounded-2xl bg-black/50 backdrop-blur-lg border-border/30"
              >
                <blockquote className="text-sm leading-relaxed tracking-wide">{`"${testimonial.content}"`}</blockquote>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm italic font-medium__ text-muted/70">
                      — {testimonial.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* {testimonialScreens.map((screen, index) => (
              <Image
                key={index}
                className={cn(
                  "object-cover object-bottom rounded-md",
                  "md:grayscale opacity-90 md:opacity-80 hover:grayscale-0 hover:opacity-100"
                )}
                src={`/img/testimonials/${screen}`}
                width={375}
                height={812}
                alt={`Testimonal #${index}`}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${imageBlurHash(
                  500,
                  600
                )}`}
              />
            ))} */}
          </div>
          {/* Show more */}
          <div
            className={cn(
              "relative grid px-6 py-8 place-items-center",
              !open &&
                "bg-gradient-to-t from-background via-background/90 to-transparent"
            )}
          >
            <Button
              onClick={() => setOpen(!open)}
              size={"sm"}
              variant={"secondary"}
              className={cn("relative pr-10 group")}
            >
              {open ? "Show less" : "Show more"}
              <span
                className={cn(
                  "absolute grid w-7 h-7 rounded-full right-1 top-1 place-items-center",
                  "text-muted/90 bg-background backdrop-blur-lg",
                  "transition-transform group-hover:scale-90",
                  open ? "-rotate-90" : "rotate-90"
                )}
              >
                <Icons.arrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
        {/* CTA */}
        <div className="flex justify-center mt-10">
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
