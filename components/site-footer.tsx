import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import NewsLetter from "@/components/site-newsletter"

import { Icons } from "./icons"

const SiteFooter = () => {
  return (
    <>
      <NewsLetter />
      <footer className="bg-black/50 backdrop-blur-lg">
        <div className="py-12 border-b border-border/20">
          <div className="container">
            <div className="grid grid-cols-2 gap-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="col-span-2 sm:col-span-1">
                <Icons.logo
                  className="w-20 [&>*]:fill-foreground [&>path:first-child]:fill-foreground/75"
                  role="img"
                  aria-label="Streaming Shell Logo"
                />
                <span className="block mt-4 text-sm font-medium opacity-75 text-muted">
                  {siteConfig.name} &copy;
                </span>
              </div>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/#pricing"
                    className="block text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100 w-max"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#why-choose-us"
                    className="block text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100 w-max"
                  >
                    Why choose us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#testimonials"
                    className="block text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100 w-max"
                  >
                    What our customers say
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="block text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100 w-max"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/contact"
                    className="block text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100 w-max"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <a
                    // href={`mailto:${siteConfig.email}`}
                    href={`mailto:#`}
                    className="block text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100 w-max"
                    rel="noopener, noreferrer"
                  >
                    Email us
                  </a>
                </li>
                {/* <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="block text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100 w-max"
                    rel="noopener, noreferrer"
                  >
                    Call us
                  </a>
                </li> */}
              </ul>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/#"
                    className="block text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100 w-max"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="block text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100 w-max"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="block text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100 w-max"
                  >
                    Return and refund policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container py-4 md:py-8">
          <p className="text-xs font-medium tracking-wider text-center uppercase leading-relaxed__ text-muted/80">
            {/* All Rights Reserved  */}
            {siteConfig.name} &copy; {new Date().getFullYear()} ⸺ Designed by{" "}
            <a
              href={siteConfig?.authorUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-start gap-1 underline-offset-4 hover:text-white hover:underline focus:decoration-dashed"
            >
              {siteConfig?.author}{" "}
              <Icons.externalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default SiteFooter
