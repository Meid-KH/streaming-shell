import React from "react"
import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Icons } from "@/components/icons"

// const ChannelsList = [
//   "HBO",
//   "BEIN Sports",
//   "Showtime",
//   "ESPN",
//   "FOX Sports",
//   "Netflix",
//   "Amazon Prime Video",
//   "Hulu",
//   "Disney+",
//   // "Starz",
//   // "Apple TV+",
//   "Paramount+",
//   "Peacock",
//   "CNN",
//   "MSNBC",
//   "FOX News",
//   "National Geographic",
//   "Discovery Channel",
//   "HGTV",
//   "TLC",
//   "History Channel",
//   "AMC",
//   "Bravo",
//   "Comedy Central",
//   "E!",
//   "MTV",
//   "VH1",
//   // "The CW",
//   "BBC America",
// ]

const ChannelsListUK = [
  "Channel 4",
  "ITV",
  "Netflix",
  "BEIN Sports (To watch UCL, Premier League, La Liga... and more)",
  "SSC (To watch Saudi Pro League",
  "BBC One",
  "National Geographic Channel",
  "Film4",
  "BBC Two",
  "Dave",
  "BBC News Channel",
  "BBC Sport",
  "Channel 5",
  "E4",
  "ITV2",
  "Disney+",
  "Discovery Channel",
  "More4",
  "Amazon Video",
  "Sky News",
  "Disney Channel",
  "CBeebies",
  "BBC Four",
  "Sky Cinema",
  "Animal Planet",
  "Comedy Central",
  "discovery+",
  "Gold",
  "ITV3",
  "Sky Sports",
  "BBC Three",
  "5*",
  "CBBC",
  "Sky Atlantic",
  "Sky1",
  "ITV4",
  "NOW TV",
  "Nickelodeon",
  "YouTube Originals",
  "Sky Sports News",
  "my5.tv",
  "Freesat",
  "BT Sport",
  "Sky Arts",
  "MTV",
  "ITVBe",
  "Alibi",
  "Food Network",
  "Eurosport",
  "CITV",
  "Sky Witness",
  "4seven",
  "Fox",
  "Apple TV+",
  "W",
  "CBS Drama",
  "TLC",
  "BT TV",
  "4Music",
  "Sky Showcase",
  "Pick TV",
  "E! Entertainment",
  "5USA",
  "Challenge",
  "Quest",
  "Sky Anytime",
  "CNN International",
  "Sky2",
  "TNT",
  "CBS Action",
  "ESPN",
  "YouView",
  "CBS Reality",
  "Home",
  "S4C",
  "VH1",
  "Al Jazeera",
  "Universal Channel",
  "Pluto TV",
  "Investigation Discovery",
  "CNBC Europe",
  "TalkTV",
  "Bloomberg Television",
  "EuroNews",
  "London Live",
  "Russia Today",
  "Islam Channel",
  "Viceland",
]

export const metadata: Metadata = {
  title: "Channels",
  description:
    "Our extensive collection of over 40,000 channels from around the world, we proudly offer the most expansive and diverse selection of Streaming Channels",
  alternates: {
    canonical: "/channels",
  },
}
export default function page() {
  return (
    <section className="py-56">
      <div className="container max-w-prose">
        <Heading as="h1">Channels list</Heading>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Welcome to{" "}
          <span className="underline underline-offset-4">
            {siteConfig.name}
          </span>
          , the top-notch streaming television service for your entertainment
          needs. With an extensive collection of over 20,000 channels from
          around the world, we proudly offer the most expansive and diverse
          selection of content, ensuring there&apos;s something for everyone to
          enjoy. Whether your passion lies in captivating series, blockbuster
          movies, thrilling sports, or enlightening documentaries, our platform
          has it all!
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          At{" "}
          <span className="underline underline-offset-4">
            {siteConfig.name}
          </span>
          , we understand the unique preferences of our viewers. That&apos;s why
          we&apos;ve carefully curated a list of the most cherished and
          sought-after channels available. Consider it a mere glimpse into the
          abundance of remarkable content awaiting you on our extraordinary
          platform:
        </p>
        <ul className="pl-4 my-10 space-y-4">
          {ChannelsListUK?.map((item, index) => (
            <li
              key={index}
              className={cn(
                "relative text-lg font-semibold pl-9",
                "before:content-[''] before:absolute before:opacity-70 before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-px before:bg-current"
              )}
            >
              {item}
            </li>
          ))}
          <li>And more wordlwide channels...</li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This list is only the tip of the iceberg when it comes to what{" "}
          {siteConfig.name} has to offer. With a vast array of over 10,000
          channels at your fingertips, we are confident you&apos;ll discover
          something that captivates you. Our mission is to deliver the ultimate
          entertainment experience right to the comfort of your own home.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Don&apos;t hesitate any longer to indulge in the finest selection of
          channels and captivating content available on {siteConfig.name}.
          Subscribe now and embark on an endless journey of entertainment!
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-12 lg:gap-8">
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
          <a
            href="/channels-movies-series-list.txt"
            download={"Streaming Shell Channels, movies & series"}
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "relative pr-16 group"
            )}
          >
            Download the list
            <span
              className={cn(
                "absolute grid w-12 h-12 rounded-full right-1 top-1 place-items-center",
                "text-muted/90 bg-background backdrop-blur-lg",
                "transition-transform group-hover:scale-90",
                "rotate-90"
              )}
            >
              <Icons.arrowRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
