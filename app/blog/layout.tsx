import { Metadata } from "next"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Streaming guides, news and advices",
  description: `${siteConfig.name} Blog is where all you need to know about Streaming is — The best services, affordabble subscriptions, detailed guides and recent news`,
  alternates: {
    canonical: "/blog",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}
export default function layout({ children }: RootLayoutProps) {
  return (
    <div className="relative">
      {/* <span
        className={cn(
          "fixed inset-0 w-full opacity-[0.17] -z-10 filter___ grayscale___  blur-[1px]",
          "after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-1/4 after:bg-gradient-to-t after:from-background after:via-background/60 after:to-transparent"
        )}
      >
        <Image
          className="object-cover w-full h-full"
          src="/img/disney.png"
          width="1200"
          height="800"
          alt="Hero background image"
          priority={true}
        />
      </span> */}
      {children}
    </div>
  )
}
