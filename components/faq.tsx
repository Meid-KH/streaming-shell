"use client"

import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import Heading from "@/components/ui/heading"
import { Icons } from "@/components/icons"

interface FAQItem {
  question: string
  answer: string
}

const faqsArr: FAQItem[] = [
  {
    question: "What is the delivery procedure for my Streaming subscription?",
    answer:
      "The email address that you provided on the Checkout form will receive information about your subscription. Your membership will be delivered as soon as possible, usually within eight hours.",
  },
  {
    question: "How to watch Streaming Service?",
    answer:
      "Watch our Streaming on all of your devices after purchasing it, including your TV, Android box, smartphone, Mag Box, and tablets.",
  },
  {
    question:
      "What are the devices that supports Streaming and I can watch on ?",
    answer:
      "The service is compatible with a wide range of gadgets, including Smart TVs, Android TV boxes, iOS and Android smartphones, Chromecast, Amazon Fire TV, and many others.",
  },
  {
    question: "How many deveices can I watch this Streaming on, at a time?",
    answer:
      "Normally, the service can only be used on a single device at a time, but you can add as many additional connections as you want by selecting the relevant option on the purchase page or contacting us.",
  },
  {
    question: "Do I have to use any VPN so I can watch Streaming?",
    answer:
      "No, you won't need a VPN to view Streaming because we employ cutting-edge techniques to get around ISP filtering. Just grab the subscription package that suits your need and enjoy your time 👌🏻",
  },
  {
    question: "What channels are available in these Streaming subsciptions?",
    answer:
      "We provide more than +40,500 live channels, mostly from the US, Europe and Middle East, including channels for entertainment, movies, sports (Champions League, LaLiga Santander, Premier League, BundesLiga, Formula 1, MotoGP), and all major league sports. We also provide South American and American channels. Also featured is VOD ✅",
  },
  {
    question: "Is it possible to use Streaming in an appartment?",
    answer:
      "Yes, Streaming will work in an apartment. All you need is a fast internet connection in the apartment. When a dish cannot be put on your property, Streaming is another excellent option to take into account.",
  },
  {
    question: "Which devices are supported for streaming?",
    answer:
      "Sure, you can purchase Streaming instead of satellite subscription. You can acquire the connection using your current broadband connection without having to purchase a dish.",
  },
]

export const Faq = () => {
  const [openPanels, setOpenPanels] = React.useState<number[]>([])

  const togglePanel = (index: number) => {
    if (openPanels.includes(index)) {
      setOpenPanels(openPanels.filter((panelIndex) => panelIndex !== index))
    } else {
      setOpenPanels([...openPanels, index])
    }
  }

  return (
    <section id="faq" className="relative py-36">
      {/* the bg layer */}
      {/* <div
        className={cn(
          "hidden lg:block absolute inset-0 bg-fixed bg-no-repeat bg-center md:bg-cover -z-10 opacity-[0.075] bg-spongebob filter grayscale"
        )}
      /> */}
      {/* <span
        className={cn(
          "hidden xl:block",
          "absolute inset-0 w-full opacity-5 z-20_ filter grayscale",
          // "before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-1/3 before:bg-gradient-to-b before:from-background before:via-background/60 before:to-transparent",
          "after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-1/4 after:bg-gradient-to-t after:from-background after:via-background/60 after:to-transparent"
        )}
      >
        <Image
          className="object-cover w-full h-full"
          src="/img/sponge-bob.gif"
          width="1200"
          height="800"
          alt="Faq background image"
          priority={true}
        />
      </span> */}

      <div className="container relative z-10">
        <Heading className="mb-10">
          Frequently asked <span className="text-muted">questions</span>
        </Heading>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqsArr.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "text-muted backdrop-blur-lg border rounded-2xl",
                openPanels.includes(index)
                  ? "bg-black/80 border-muted/60"
                  : "bg-black/50 border-border/70"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-between p-4 lg:p-6 cursor-pointer select-none",
                  openPanels.includes(index) && "border-b border-border/40"
                )}
                onClick={() => togglePanel(index)}
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <span
                  className={cn(
                    "w-5 h-5 opacity-70 hover:opacity-100"
                    // openPanels.includes(index) ? "text-black" : "text-white"
                  )}
                >
                  <Icons.chevronDown
                    className={cn(
                      "w-5 h-5 duration-200",
                      openPanels.includes(index) && "-rotate-180"
                    )}
                  />
                </span>
              </div>
              {openPanels.includes(index) && (
                <div className="p-4 leading-relaxed lg:p-6 text-sm___ text-muted/95">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
