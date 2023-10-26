import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "About us",
  description: `${siteConfig.name} — ${siteConfig.description}`,
  alternates: {
    canonical: "/about",
  },
}

export default function Page() {
  return (
    <section className="py-56">
      <div className="container prose">
        <h1 className="text-5xl font-extrabold tracking-tight scroll-m-20 lg:text-7xl">
          About us
        </h1>
        <p>
          <strong>{siteConfig.name}</strong> is a leading provider of
          next-generation Streaming services. We pride ourselves on delivering a
          superior TV viewing experience that surpasses traditional cable
          subscriptions. With cutting-edge technology, a wide selection of
          channels, and exceptional customer support, we are committed to
          transforming your entertainment experience.
        </p>
        <h2>Our Features and Strengths</h2>
        <ul>
          <li>
            <strong>Extensive Channel Selection:</strong> Enjoy a diverse range
            of channels from around the world, covering various genres and
            languages.
          </li>
          <li>
            <strong>High-Quality Streaming:</strong> Experience smooth and
            high-definition streaming for an immersive viewing experience.
          </li>
          <li>
            <strong>Flexible Subscription Plans:</strong> Choose from affordable
            pricing options that suit your budget and viewing preferences.
          </li>
          <li>
            <strong>24/7 Customer Support:</strong> Our dedicated support team
            is available round the clock to assist you with any inquiries or
            issues.
          </li>
          <li>
            <strong>Premium Server Technology:</strong> Benefit from a robust
            server infrastructure that ensures uninterrupted streaming without
            buffering.
          </li>
          <li>
            <strong>Free Updates:</strong> Enjoy regular updates that bring new
            features, enhancements, and fresh content to enrich your viewing
            experience.
          </li>
          <li>
            <strong>Unmatched Stability:</strong> We guarantee 99% uptime,
            providing you with a seamless and uninterrupted Streaming service.
          </li>
        </ul>
        <p>
          At <strong>{siteConfig.name}</strong> , we are committed to delivering
          exceptional service quality and creating an unparalleled entertainment
          journey for our valued customers. Join us today and elevate your TV
          viewing experience to new heights!
        </p>
      </div>
      <div className="container flex justify-center mt-12">
        <Link
          href="/#pricing"
          className={cn(buttonVariants({ size: "lg" }), "relative pr-16 group")}
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
    </section>
  )
}
