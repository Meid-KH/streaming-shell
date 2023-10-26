import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Heading from "@/components/ui/heading"
import AddToCart from "@/components/add-to-cart"
import { Icons } from "@/components/icons"

type PricingItem = {
  id: string
  name: string
  price: string
  priceRegular: string
  recommended: boolean
  features: string[]
  ctaUrl: string
}

type PricingTableProps = {
  items: PricingItem[]
}
const storeUrl = process.env.SHOP_URL
const pricingItems: PricingItem[] = [
  {
    id: "293",
    name: "Basic — 1 Month",
    price: "13.94",
    priceRegular: "16.49",
    recommended: false,
    features: [
      "Premium Server",
      "4K UHD+ HD Quality Streaming",
      "+10,500 Channels 24h/24",
      // "+100,000 VOD 24h/24",
      "24h/7 Free Support",
      "PPV & VPlayed Channels",
      "Watch On Any Device",
      "Update Every week",
    ],
    ctaUrl: `${storeUrl}/checkout/?add-to-cart=24`,
  },
  {
    id: "301",
    name: "Platinum — 12 Months",
    price: "42.95",
    priceRegular: "69.36",
    recommended: true,
    features: [
      "Premium Server",
      "4K UHD+ HD Quality Streaming",
      "+20,500 Channels 24h/24",
      // "+100,000 VOD 24h/24",
      "24h/7 Free Support",
      "PPV & VPlayed Channels",
      "Watch On Any Device",
      "Update Every week",
    ],
    ctaUrl: `${storeUrl}/checkout/?add-to-cart=27`,
  },
  {
    id: "299",
    name: "Pro — 3 Months",
    price: "22.95",
    priceRegular: "30.64",
    recommended: false,
    features: [
      "Premium Server",
      "4K UHD+ HD Quality Streaming",
      "+20,500 Channels 24h/24",
      // "+100,000 VOD 24h/24",
      "24h/7 Free Support",
      "PPV & VPlayed Channels",
      "Watch On Any Device",
      "Update Every week",
    ],
    ctaUrl: `${storeUrl}/checkout/?add-to-cart=25`,
  },
  {
    id: "300",
    name: "Premium — 6 Months",
    price: "32.95",
    priceRegular: "44.93",
    recommended: false,
    features: [
      "Premium Server",
      "4K UHD+ HD Quality Streaming",
      "+20,500 Channels 24h/24",
      // "+100,000 VOD 24h/24",
      "24h/7 Free Support",
      "PPV & VPlayed Channels",
      "Watch On Any Device",
      "Update Every week",
    ],
    ctaUrl: `${storeUrl}/checkout/?add-to-cart=26`,
  },
]

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative pt-24 pb-56 md:pt-36 bg-background"
    >
      {/* the bg layer */}
      {/* <div className="absolute inset-0 bg-fixed bg-no-repeat bg-cover -z-10 opacity-5 bg-marvel filter grayscale" /> */}
      <div className="lines-wrapper">
        <div className="lines-shadow" />
        <div className="lines-squares" />
      </div>
      <div className="relative z-30">
        <div className="container">
          <div className="mb-10 space-y-3 text-center">
            <small className="block mb-3 text-sm font-semibold tracking-wide uppercase text-foreground/80">
              {siteConfig?.discount && `${siteConfig?.discount}`} Streaming —
              Limited-time discount
            </small>
            <Heading className="text-4xl">
              Unleash the Excitement:{" "}
              <span className="block mt-1.5 sm:mt-0 sm:inline text-muted">
                {siteConfig?.discount && `${siteConfig?.discount}`} Streaming{" "}
                <br className="" /> Subscriptions
                {/* Today Only! */}
              </span>
              {/* <span className="hidden lg:inline">⏳</span> */}
            </Heading>
            <p className="font-medium leading-relaxed tracking-wide">
              Don&apos;t let this exceptional opportunity pass you by! Secure
              your subscription now before <br className="" /> the{" "}
              <span className="inline-block px-2 text-white rounded-sm bg-primary/90">
                limited-time discount
              </span>{" "}
              expires.{" "}
              <span className="underline underline-offset-4">
                Get your subscription now!
              </span>
            </p>
          </div>
        </div>
        <PricingTable items={pricingItems} />
      </div>
    </section>
  )
}

export default Pricing

const PricingTable: React.FC<PricingTableProps> = ({ items }) => {
  return (
    <div
      className={cn(
        // "grid items-end grid-cols-1 gap-8 pt-16 md:grid-cols-2 lg:grid-cols-4",
        "flex items-end overflow-x-auto",
        "gap-5 md:gap-8 pb-4 md:pb-0 pl-4 md:container"
      )}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "bg-muted/90 backdrop-blur-sm text-background rounded-3xl",
            "relative overflow-hidden",
            "min-w-[250px] md:min-w-[300px] lg:min-w-max"
            // item.recommended && "rounded-tl-none rounded-tr-none"
          )}
        >
          {item.recommended && (
            <span
              className={cn(
                "block px-3 py-3 text-xs font-semibold tracking-wider text-center uppercase",
                // "text-primary bg-gradient-to-r from-red-200/80 via-red-500/50 to-red-200/80",
                "bg-white",
                "border-b border-primary-700"
                // "-mx-6 -mt-6"
              )}
            >
              Most Popular
            </span>
          )}
          <div className={cn("flex flex-col", "gap-4 md:gap-8 p-4 md:p-5")}>
            <div className="space-y-3 md:space-y-6">
              <h2 className="text-lg font-semibold tracking-tight md:text-xl text-background/80">
                {item.name}
              </h2>
              <p className="text-4xl font-black tracking-tighter md:text-6xl">
                <sup className="lg:-top-[0.75em] text-xl md:text-3xl font-bold mr-1">
                  £
                </sup>
                {item.price}{" "}
                <small className="font-bold tracking-normal line-through opacity-75 tetx-2xl md:text-3xl">
                  {item.priceRegular}
                </small>
              </p>
            </div>

            <ul className="space-y-3 text-xs font-medium md:space-y-4 md:text-sm">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <Icons.check className="w-4 h-4 md:w-5 md:h-5" />
                  {feature}
                </li>
              ))}
            </ul>
            <AddToCart productID={item.id} />
          </div>
        </div>
      ))}
    </div>
  )
}
