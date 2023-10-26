import "@/styles/globals.css"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import CookiesBanner from "@/components/cookies-banner"
import { Icons } from "@/components/icons"
import SiteFooter from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import LiveCustmerPurchase from "@/components/site-live-purchase"
import MobileMenu from "@/components/site-mobile-menu"
import ScrollTop from "@/components/site-scrolltop"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: {
    default: siteConfig.name || "{siteConfig.name}",
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#140a0b" },
    { media: "(prefers-color-scheme: dark)", color: "#140a0b" },
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    // maximumScale: 1,
  },
  metadataBase: new URL(siteConfig.url as string),
  // OG
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 100,
        height: 100,
        alt: "OG image",
      },
      // {
      //   url: "/og-alt.png",
      //   width: 100,
      //   height: 100,
      //   alt: "Alt OG image",
      // },
    ],
    twitter: {
      card: "summary",
      title: siteConfig.name,
      description: siteConfig.description,
      // siteId: "1467726470533754880",
      // creator: "@nextjs",
      // creatorId: "1467726470533754880",
      images: {
        url: "/og.png",
        alt: siteConfig.name,
      },
    },
  },
  // Robots
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            <div className="relative flex flex-col min-h-screen">
              <SiteHeader />
              <div className="relative flex-1 scroll-smooth">
                {/* the bg layer */}
                <span
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
                </span>
                {children}
              </div>
              <SiteFooter />
              <MobileMenu />
            </div>
            {/* <TailwindIndicator /> */}
            <ScrollTop />
            {/* <LiveCustmerPurchase /> */}
            <CookiesBanner />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
