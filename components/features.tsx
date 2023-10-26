import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

interface Feature {
  title: string
  icon: string | React.ReactElement
  description: string
}

// data.ts

const featuresArr: Feature[] = [
  {
    title: "Video On Demand",
    icon: <Icons.video className="flex-shrink-0 w-8 h-8" />,
    description: "Enjoy a vast library of movies and TV shows on demand.",
  },
  {
    title: "Multiple Device Support",
    icon: <Icons.pictureInPicture className="flex-shrink-0 w-8 h-8" />,
    description:
      "Stream content on various devices like smartphones, tablets, and smart TVs.",
  },
  {
    title: "High-Quality Streaming",
    icon: <Icons.tv2 className="flex-shrink-0 w-8 h-8" />,
    description:
      "Experience smooth and high-definition streaming for your favorite content.",
  },
  {
    title: "Wide Range of Channels",
    icon: <Icons.satellite className="flex-shrink-0 w-8 h-8" />,
    description:
      "Access a diverse selection of TV channels from around the world.",
  },
  {
    title: "Affordable Pricing",
    icon: <Icons.discount className="flex-shrink-0 w-8 h-8" />,
    description: "Choose from flexible and budget-friendly subscription plans.",
  },
  {
    title: "24/7 Customer Support",
    icon: <Icons.headphones className="flex-shrink-0 w-8 h-8" />,
    description:
      "Get assistance from a dedicated support team anytime you need it.",
  },
  {
    title: "Premium Server",
    icon: <Icons.server className="flex-shrink-0 w-8 h-8" />,
    description:
      "Our premium server ensures an immersive experience that keeps you connected without compromise.",
  },
  {
    title: "Free Updates",
    icon: <Icons.refresh className="flex-shrink-0 w-8 h-8" />,
    description:
      "Get access to the latest enhancements, features, and content additions. Enjoy a continuously improving Streaming experience.",
  },
  {
    title: "Unmatched Stability",
    icon: <Icons.tv className="flex-shrink-0 w-8 h-8" />,
    description:
      "99% uptime for uninterrupted Streaming streaming. Enjoy seamless viewing without interruptions or buffering.",
  },
]

interface FeaturesListProps {
  features: Feature[]
}

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <FeaturesList features={featuresArr} />
      </div>
      <div className="flex justify-center mt-10">
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

const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => {
  return (
    <ul className="grid gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3">
      {features.map((feature, index) => (
        <li
          key={index}
          className="p-6 border rounded-2xl border-border/30 bg-black/50 backdrop-blur-lg"
        >
          <div className="flex gap-5 mb-2">
            {feature.icon}
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold tracking-tight text-white/90">
                {feature.title}
              </h3>
              <p className="font-medium leading-normal text-sm__ text-muted/80">
                {feature.description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
