"use client"

import React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { siteConfig } from "@/config/site"
import { contact } from "@/lib/airtable"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    message: "Enter a valid country name",
  }),
  email: z.string().email().min(2, {
    message: "A valid email is required.",
  }),
  phone: z.string().regex(phoneRegex, "Invalid Phone number."),
  message: z.string().min(3, {
    message: "Your message must be at least 3 characters.",
  }),
})

const page = () => {
  return (
    <section className="py-56">
      <div className="container max-w-prose">
        <h1 className="text-5xl font-extrabold tracking-tight scroll-m-20 lg:text-7xl">
          Contact us
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Welcome again to{" "}
          <span className="underline underline-offset-4">
            {siteConfig.name}.
          </span>{" "}
          We&apos;d love to hear from you! Whether you have questions, feedback,
          or just want to say hello, we&apos;re here to listen. Our team is
          dedicated to providing exceptional service and ensuring your
          satisfaction. Don&apos;t hesitate to reach out to us through the
          contact form below. We value your input and look forward to connecting
          with you.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}

function ContactForm() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setIsError(false)
    setIsSuccess(false)

    try {
      const response = await contact.create([
        {
          fields: {
            Name: values.fullname,
            Email: values.email,
            Phone: values.phone,
            Country: values.country,
            Message: values.message,
          },
        },
      ])
      setIsSuccess(true)
      setIsLoading(false)
      form.reset()
      console.log(response)

      return response
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      form.reset()
      setIsError(true)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-16 space-y-6 lg:space-y-8"
      >
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="Full name" {...field} />
              </FormControl>
              {/* <FormDescription>Enter your name here</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              {/* <FormDescription>Enter your email here</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="Phone" {...field} />
              </FormControl>
              {/* <FormDescription>Enter your email here</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="Country" {...field} />
              </FormControl>
              {/* <FormDescription>Enter your country here</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Write your message"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>Enter your message here</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="flex ml-auto gap-1.5 items-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              Sending... <Icons.spinner className="w-5 h-5 animate-spin" />
            </>
          ) : (
            <span>Send message</span>
          )}
        </Button>
      </form>

      {/* Alert */}
      {(isError || isSuccess) && (
        <div
          className={cn(
            isError && "bg-yellow-200/30 border-yellow-400/80",
            isSuccess && "bg-green-200/30 border-green-400/80",
            "text-center font-medium p-6 border rounded-xl mt-10"
          )}
        >
          <p>
            {isError && "Something went wrong! 😕"}
            {isSuccess && "Thanks! your message has been sent 🎊"}
          </p>
        </div>
      )}
    </Form>
  )
}

export default page
