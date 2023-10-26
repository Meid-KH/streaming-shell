"use client"

import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

const customerNames = [
  "Alice",
  "Bob",
  "Charlie",
  "Benjaman",
  "Steve",
  "David",
  "Joaõ",
  "Ismail",
  "Frank",
  "Grace",
  "Antonio",
  "Anouar",
  "Kapoor",
  "Isaac",
  "Adam",
  "Vijay",
  "Muhamad",
  "Kudos Mamado",
]

const subscriptionPlans = ["1 Month", "3 Months", "6 Months", "12 Months"]

const LiveCustmerPurchase = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [customerName, setCustomerName] = React.useState("")
  const [plan, setPlan] = React.useState("")

  const showTooltip = () => {
    setIsVisible(true)

    // Randomly select a customer name and a subscription plan
    const randomCustomerName =
      customerNames[Math.floor(Math.random() * customerNames.length)]
    const randomPlan =
      subscriptionPlans[Math.floor(Math.random() * subscriptionPlans.length)]

    setCustomerName(randomCustomerName)
    setPlan(randomPlan)

    // Hide the tooltip after 4 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 4000)

    // Schedule the next tooltip appearance
    setTimeout(showTooltip, Math.random() * 60000 + 90000) // Random interval between 60 and 120 seconds
  }

  React.useEffect(() => {
    // Initial tooltip appearance after 5 seconds
    const initialTimeout = setTimeout(showTooltip, 10000)

    return () => {
      clearTimeout(initialTimeout)
    }
  }, [])

  return (
    <section
      className={cn(
        "transition-all duration-500",
        isVisible ? "left-4 opacity-100 z-30" : "-left-full opacity-0 -z-30",
        "fixed w-full max-w-xs space-y-3 bottom-36 md:bottom-46"
      )}
    >
      <Link
        href="/#pricing"
        className={cn(
          "block p-2 pr-4 rounded-lg bg-muted text-background backdrop-blur-lg drop-shadow",
          "relative border border-white cursor-pointer opacity-80__ hover:opacity-100"
        )}
      >
        <button
          type="button"
          aria-label="Close the message"
          onClick={() => setIsVisible(false)}
          className={cn(
            "absolute z-10 grid w-5 h-5 text-xs rounded-full -right-2 -top-2 place-items-center",
            "border border-white/100 bg-muted backdrop-blur-xl"
          )}
        >
          <Icons.close className="w-3.5 h-3.5" />
        </button>
        <p className="flex items-center gap-3.5 text-sm font-medium text-background/80">
          <Icons.tv2 className="flex-shrink-0 w-8 h-8 mt-0.5__ text-yellow-500___" />
          <span>
            {customerName} has just purchased the{" "}
            <span className="block">
              <span className="text-black underline underline-offset-2">
                {plan}
              </span>{" "}
              subscription
            </span>
          </span>
        </p>
      </Link>
    </section>
  )
}

export default LiveCustmerPurchase
