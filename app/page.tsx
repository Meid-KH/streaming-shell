import { Metadata } from "next"

import { cn } from "@/lib/utils"
import Heading from "@/components/ui/heading"
import AddToCart from "@/components/add-to-cart"
import ChannelsList from "@/components/channels-list"
import { Faq } from "@/components/faq"
import Features from "@/components/features"
import Pricing from "@/components/pricing"
import BlogList from "@/components/site-blog-list"
import Hero from "@/components/site-hero"
import { Testimonials } from "@/components/testimonials"
import WhyChooseUs from "@/components/why-choose-us"

export const metadata: Metadata = {
  // title:
  //   "Best Streaming Service 2023: Premium UK & European Subscriptions for Firestick, Smart TVs, and More",
  title:
    "2023's #1 Streaming Service: All Sports, Movies & Series | Worldwide Subscriptions ✅",
  description:
    "Discover the #1 Streaming SERVICE Provider of 2023! Our Streaming subscriptions are compatible with Firestick, Smarters Pro, Smart TVs, Android, iOS, LG, Samsung, and more. Enjoy access to a wide range of content, including all major sports channels, football, movies, and series. Elevate your entertainment experience with our premium Streaming service.",
  alternates: {
    canonical: "/",
  },
}
export default function IndexPage() {
  return (
    <>
      <Hero />
      <ChannelsList />
      <Pricing />
      <Trial />
      <Features />
      <BlogList />
      <Testimonials />
      <WhyChooseUs />
      <Faq />
    </>
  )
}

const Trial = () => {
  const trialID = String(414)
  return (
    <section id="trial" className="pt-16 pb-12 md:pt-32 md:pb-24">
      <div className="container">
        <Heading as="h1" className="text-5xl">
          <span className="">Or</span> unlock a 24-Hour{" "}
          <span className="text-muted">Trial</span> <br /> for Just{" "}
          <span className="text-muted">£1</span>
        </Heading>
        <div className="flex justify-center mt-9 md:mt-12">
          <AddToCart
            className={cn(
              "border border-border/40",
              "px-8 pr-16",
              "hover:bg-black/60"
            )}
            productID={trialID}
          >
            Get it now
          </AddToCart>
        </div>
      </div>
    </section>
  )
}
